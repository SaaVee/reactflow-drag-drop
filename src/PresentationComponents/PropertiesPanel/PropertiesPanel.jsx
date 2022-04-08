import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import React, { useState } from "react";
import "./PropertiesPanel.scss";
const ariaLabel = { "aria-label": "description" };

const deleteComponent = (element, setConfig, config) => {
  const data = {
    ...config,
  };
  if (element === "vpc") {
    data.showVpc = false;
    data.vpc.name = `vpc-${data.id}`;
  }
  if (element === "subnet") {
    data.showSubnet = false;
    data.subnet.name = `subnet-${data.id}`;
  }
  if (element === "security") {
    data.showSecurity = false;
    data.security.name = `security-${data.id}`;
  }
  setConfig(data);
};

const SecurityConfig = ({ config, setConfig }) => {
  const [name, setName] = useState(config?.security?.name);
  const handleKeyPress = (e) => {
    setName(e.target.value);
    if (e.key === "Enter") {
      setConfig({
        ...config,
        showSecurity: true,
        security: {
          ...config.security,
          name: name,
        },
      });
      setName("");
    }
  };

  return (
    <div
      className="add-to-vpc select-vpc"
      // ref={wrapperRef}
    >
      <h2>Security Group</h2>
      <div className="properties-row">
        <h3>Security Name</h3>
        <Input
          placeholder="Add Security"
          // onChange={(e) => setVpcText(e.target.value)}
          onKeyPress={handleKeyPress}
          autoFocus
          inputProps={ariaLabel}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {/* <button
        className="delete-button"
        onClick={(e) => {
          deleteComponent("security", setConfig, config);
        }}
      >
        delete
      </button> */}
      </div>
      <div className="properties-row">
        <h3>Volume ID</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Volume type</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Security group name</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Security group rules</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Public IPv4 DNS</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>AMI ID</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Platform (OS)</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Monitoring</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Deletion protection</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Instance ID</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Availability zone</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Public IPv4 Address</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Private IPv4 Address</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Instance state</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>VPC ID</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Subnet ID</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Instance type</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Volume size</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Elastic IP address</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>IAM role</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
    </div>
  );
};

const VpcConfig = ({ config, setConfig }) => {
  const [name, setName] = useState(config?.vpc?.name);
  const [cidr, setCidr] = useState(config?.vpc?.cidr);
  const handleKeyPress = (e) => {
    // setName(e.target.value);
    if (e.key === "Enter") {
      setConfig({
        ...config,
        showVpc: true,
        vpc: {
          ...config.vpc,
          [e.target.name]: e.target.value,
        },
      });
      // setName('');
    }
  };
  return (
    <div className="add-to-vpc select-vpc">
      <h2>Add to VPC</h2>

      <div className="properties-row">
        <h3>Name</h3>
        <Input
          placeholder="Add VPC"
          // onChange={(e) => setVpcText(e.target.value)}
          value={name}
          name="name"
          onKeyPress={handleKeyPress}
          autoFocus
          inputProps={ariaLabel}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <div className="properties-row">
        <h3>Tag</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Default VPC</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>DNS Hostname</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>DNS Resolution</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>VPC ID</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>IPv4 CIDR</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Associated RTB</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Associated NACL</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Owner ID</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
    </div>
  );
};

const SubnetConfig = ({ config, setConfig }) => {
  const [name, setName] = useState(config?.subnet?.name);
  const [isPrivate, setIsPrivate] = useState(config?.subnet?.isPrivate);
  const handleKeyPress = (e) => {
    // setName(e.target.value);
    if (e.key === "Enter") {
      setConfig({
        ...config,
        showSubnet: true,
        subnet: {
          ...config.subnet,
          [e.target.name]: e.target.value,
        },
      });
      // setName('');
    }
  };
  return (
    <div
      className="add-to-vpc select-vpc"
      // ref={wrapperRef}
    >
      <h2>Add to Subnet</h2>

      <div className="properties-row">
        <h3>Name</h3>
        <Input
          placeholder="Add VPC"
          // onChange={(e) => setVpcText(e.target.value)}
          value={name}
          onKeyPress={handleKeyPress}
          autoFocus
          inputProps={ariaLabel}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <div className="properties-row">
        <h3>Subnet ID</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Subnet ARN</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Tags</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>IPv4 CIDR</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Available IP addresses</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Availability zone</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Availability zone id</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>VPC</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Associated NACL</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Associated RTB</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
      <div className="properties-row">
        <h3>Auto Assignn Public IP</h3>
        <Input placeholder="Add Security" inputProps={ariaLabel} />
      </div>
    </div>
  );
};

const Ec2Config = ({ config, setConfig, id }) => {
  const [name, setName] = useState(config?.ec2?.name);
  // const [securityName, setSecurityName] = useState(config?.security?.name);
  const [region, setRegion] = useState(config?.ec2?.region);
  const [instaceType, setInstanceType] = useState(config?.ec2?.region);
  const handleKeyPress = (e) => {
    setName(e.target.value);
    if (e.key === "Enter") {
      setConfig({
        ...config,
        ec2: {
          ...config.ec2,
          [e.target.name]: e.target.value,
        },
      });
      setName("");
    }
  };
  return (
    <div>
      <div className="element-properties select-vpc">
        <h2>EC2</h2>
        <div className="properties-row">
          <h3>Region</h3>
          <NativeSelect
            inputProps={{
              name: "region",
              id: "uncontrolled-native",
            }}
            onChange={(e) => {
              setRegion(e.target.value);
              setConfig({
                ...config,
                ec2: {
                  ...config.ec2,
                  region: e.target.value,
                },
              });
            }}
          >
            {/* <option value={""} selected>
                  select
                </option> */}
            <option value={"us-east-2"}>US East (Ohio)</option>
            <option value={"us-east-1"}>US East (N. Virginia)</option>
            <option value={"us-west-1"}>US West (N. California)</option>
            <option value={"us-west-2"}>US West (Oregon) </option>
          </NativeSelect>
        </div>
        {/* select instance type */}
        {/* <div className="select-region">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Instance Type
              </InputLabel>
              <NativeSelect
                inputProps={{
                  name: "instanceType",
                  id: "uncontrolled-native",
                }}
                onChange={(e) => {
                  setInstanceType(e.target.value);
                  setConfig({
                    ...config,
                    ec2: {
                      ...config.ec2,
                      instanceType: e.target.value,
                    },
                  });
                }}
              >
                <option value={"t2.micro"}>t2 micro</option>
                <option value={"t2.nano"}>t2 nano</option>
                <option value={"m3.large"}>m3 large</option>
                <option value={"m4.2xlarge"}>m4 2x-large </option>
              </NativeSelect>
            </FormControl>
          </Box>
        </div> */}
        {/* Security Group */}
        <div className="properties-row">
          <h3>Security group Name</h3>
          <Input
            placeholder="Add Security"
            // onChange={(e) => setVpcText(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
            inputProps={ariaLabel}
            value={config?.security?.name}
            onChange={(e) => {
              setConfig({
                ...config,
                showSecurity: true,
                security: {
                  ...config.security,
                  name: e.target.value,
                },
              });
              // setSecurityName(e.target.value)
            }}
          />
        </div>

        {/* VPC Group */}
        <div className="properties-row">
          <h3>VPC Name</h3>
          <Input
            placeholder="Add Vpc Name"
            // onChange={(e) => setVpcText(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
            inputProps={ariaLabel}
            value={config?.vpc?.name}
            onChange={(e) => {
              setConfig({
                ...config,
                showVpc: true,
                vpc: {
                  ...config.vpc,
                  name: e.target.value,
                },
              });
              // setSecurityName(e.target.value)
            }}
          />
        </div>
        {/* Subnet Group */}
        <div className="properties-row">
          <h3>Subnet Name</h3>
          <Input
            placeholder="Add Subnet Name"
            // onChange={(e) => setVpcText(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
            inputProps={ariaLabel}
            value={config?.subnet?.name}
            onChange={(e) => {
              setConfig({
                ...config,
                showSubnet: true,
                subnet: {
                  ...config.subnet,
                  name: e.target.value,
                },
              });
            }}
          />
        </div>

        <div className="properties-row">
          <h3>Instance Name</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>Volume ID</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>Volume type</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>Security group name</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>Security group rules</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>Public IPv4 DNS</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>AMI ID</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>Platform (OS)</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>Monitoring</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>Deletion protection</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>Instance ID</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>Availability zone</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>Public IPv4 Address</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>Instance state</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>VPC ID</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>Subnet ID</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>Instance type</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>Volume size</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>Elastic IP address</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
        <div className="properties-row">
          <h3>IAM role</h3>
          <Input placeholder="Add Security" inputProps={ariaLabel} />
        </div>
      </div>

      {/* <SecurityConfig config={config} setConfig={setConfig} id={id} />
      <SubnetConfig config={config} setConfig={setConfig} id={id} />
      <VpcConfig config={config} setConfig={setConfig} id={id} /> */}
    </div>
  );
};

export const PropertiesPanel = ({
  currentProperty,
  section,
  properties,
  setProperties,
}) => {
  let template = "";
  const setConfig = (data) => {
    setProperties({
      ...properties,
      [data.id]: data,
    });
  };
  switch (true) {
    case section === "ec2":
      template = (
        <Ec2Config
          config={currentProperty}
          setConfig={setConfig}
          id={currentProperty.id}
        />
      );
      break;
    case section === "vpc":
      template = (
        <VpcConfig
          config={currentProperty}
          setConfig={setConfig}
          id={currentProperty.id}
        />
      );
      break;
    case section === "subnet":
      template = (
        <SubnetConfig
          config={currentProperty}
          setConfig={setConfig}
          id={currentProperty.id}
        />
      );
      break;
    case section === "security":
      template = (
        <SecurityConfig
          config={currentProperty}
          setConfig={setConfig}
          id={currentProperty.id}
        />
      );
      break;
    default:
      template = "";
      break;
  }
  return <div>{template}</div>;
};
