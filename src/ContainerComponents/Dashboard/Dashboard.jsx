import React, { useEffect, useRef, useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  ReactFlowProvider,
  removeElements,
} from "react-flow-renderer";
import ArchServiceIcons from "../../PresentationComponents/ArchServiceIcon/ArchServiceIcons";
import Ec2Component from "../../PresentationComponents/Ec2Component/Ec2Component";
import { PropertiesPanel } from "../../PresentationComponents/PropertiesPanel/PropertiesPanel";
import "./Dashboard.scss";

const nodeTypes = {
  ec2Component: Ec2Component,
};

let id = 0;
const getId = () => `${id++}`;

const constructCode = (elements) => {
  const element = elements[0];
  const {
    data: { properties },
  } = element;
  const { ec2, security, subnet, vpc } = properties;
  const resp = {
    icebergProjectModel: {
      projectName: "EC2-TEST312",
      region: ec2.region,
      icebergVpcModel: {
        azs: [ec2.region],
        cidr: vpc.cidr,
        database_subnets: null,
        default_vpc_name: vpc.name,
        private_subnets: subnet.isPrivate ? [subnet.name] : null,
        public_subnets: subnet.isPrivate === false ? [subnet.name] : null,
      },
      icebergSgModel: {
        sg_name: security.name,
        vpc_id: vpc.id,
        ingress_rules: ["all-all"],
        vpcSgIngressModel: [
          {
            protocal: "http",
          },
        ],
      },
      icebergEc2Model: {
        ami: "dependency.aws-data.outputs.amazon_linux2_aws_ami_id",
        instance_type: ec2.instanceType,
        ec2_name: ec2.name,
      },
    },
  };
  console.log("Response :: ", resp);
};

export const Dashboard = () => {
  const [currentComponentId, setCurrentComponentId] = useState(null);
  const [properties, setProperties] = useState(null);
  const [currentElementConfig, setCurrentElementConfig] = useState(null);
  const [showConfig, setShowConfig] = useState(false);
  const [showConfigFor, setShowConfigFor] = useState(null);
  const [showConfigForProperty, setShowConfigForProperty] = useState(null);
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState([]);
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const showPropertyPanelFor = (id, property, properties) => {
    setShowConfig(true);
    setShowConfigFor(property[id]);
    setShowConfigForProperty(property);
    setCurrentComponentId(id);
    setCurrentElementConfig(properties);
  };

  const onDrop = (event, node) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const id = getId();
    const index = elements.findIndex((elem) => {
      return elem.type === type;
    });
    let newNode = {};
    let temp = JSON.parse(JSON.stringify(elements));
    if (index === -1) {
      newNode = {
        id: "dndnode_" + id,
        type: "ec2Component",
        position,
        data: {
          id,
          label: `EC2 node`,
          setCurrentComponentId,
          setShowPropertyEditPanel: showPropertyPanelFor,
          properties: {
            id: "dndnode_" + id,
            showEc2: false,
            showSecurity: false,
            showSubnet: false,
            showVpc: true,
            showSecurityConfig: false,
            showSubnetConfig: false,
            showVpcConfig: false,
            showEc2Config: true,
            vpc: {
              name: `vpc-${id}`,
              show: false,
            },
            subnet: {
              name: `subnet-${id}`,
              show: false,
            },
            security: {
              name: `security-${id}`,
              show: false,
            },
            ec2: {
              name: `ec2-${id}`,
              show: true,
            },
          },
        },
      };
      temp = [newNode];
    } else {
      newNode = elements[index];
      newNode.position = position;
      if (type === "vpc") {
        newNode.data.properties.showEc2 = true;
        newNode.data.properties.showVpc = true;
      }
      temp[index] = newNode;
    }
    const data = {};
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      data[element.id] = element?.data?.properties;
    }
    data[newNode.id] = newNode?.data?.properties;
    setProperties(data);
    setElements(temp);
  };

  useEffect(() => {
    let elementData = [];
    const elementMap = {};
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      elementMap[element.id] = element;
    }
    const keys = Object.keys(elementMap);
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      if (properties[key]) {
        elementData.push({
          ...elementMap[key],
          data: {
            ...properties[key].data,
            setCurrentComponentId,
            setShowPropertyEditPanel: showPropertyPanelFor,
            properties: properties[key],
          },
        });
      }
    }
    setElements(elementData);
  }, [properties]);

  return (
    <div className="dashboard-wrapper">
      <button
        className="deploy-button"
        onClick={(e) => {
          constructCode(elements);
          console.log(elements);
        }}
      >
        Deploy
      </button>
      {/* {JSON.stringify(properties)} */}
      <div className="diagram-page">
        <div className="diagram-page-left-panel">
          <ArchServiceIcons />
        </div>
        <div className="diagram-page-playground">
          <div className="dndflow">
            <ReactFlowProvider>
              <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                <ReactFlow
                  elements={elements}
                  onConnect={onConnect}
                  onElementsRemove={onElementsRemove}
                  onLoad={onLoad}
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                  nodeTypes={nodeTypes}
                >
                  <Controls />
                  <Background variant="lines" color="#aaa" gap={64} />
                </ReactFlow>
              </div>
            </ReactFlowProvider>
          </div>
        </div>
        <div className="diagram-page-right-panel">
          <PropertiesPanel
            currentElementConfig={currentElementConfig}
            currentProperty={properties ? properties[currentComponentId] : {}}
            section={showConfigForProperty}
            properties={properties}
            setProperties={setProperties}
          />
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};
