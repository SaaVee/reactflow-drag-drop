import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import React from "react";
import EC2Icon from "../../Assets/img/Ec2_icon_fix.svg";
import VPCIcon from "../../Assets/img/AWSCompute/aws-vpc.png";
import "./ArchServiceIcons.scss";

const ArchServiceIcons = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <>
      <Accordion square={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>AWS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <img
                src={EC2Icon}
                alt="ec2 icon"
                title={"Ec2"}
                className="dndnode"
                onDragStart={(event) => onDragStart(event, "ec2")}
                type="ec2Component"
                draggable
              />
              <br />
              <span>EC2</span>
            </li>
            <li>
              <img
                src={VPCIcon}
                alt="vpc icon"
                title={"VPC"}
                className="dndnode"
                onDragStart={(event) => onDragStart(event, "vpc")}
                type="vpcComponent"
                draggable
              />
              <br />
              <span>VPC</span>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ArchServiceIcons;
