import React from "react";
import "./Ec2Component.scss";
import Ec2Icon from "../../Assets/img/Ec2_icon_fix.svg";

const Ec2Component = ({ data = {} }) => {
  const { properties } = data;
  console.log(properties);
  return (
    <div>
      <div className="ec2-element">
        {
          properties.showEc2 ?
            <div>
              <img
                // ref={ref}
                alt="Ec2 Icon"
                src={Ec2Icon}
                className="ec2-image"
                onClick={() => {
                  data.setShowPropertyEditPanel(properties.id, "ec2");
                }}
              />
            </div>
            : ""
        }
        {properties?.showSecurity ? (
          <div>
            <div
              className="security-section"
              onClick={() => {
                data.setShowPropertyEditPanel(properties.id, "security");
              }}
            >
              <div className="security-name">
                <p>{properties?.security?.name || "security"}</p>
              </div>
              <div className="security-box"></div>
            </div>
          </div>
        ) : (
          ""
        )}

        {properties?.showSubnet ? (
          <div
            className="security-section subnet-section"
            onClick={() => {
              data.setShowPropertyEditPanel(properties.id, "subnet");
            }}
          >
            <div className="security-name subnet-name">
              <p>{properties?.subnet?.name || "subnet"}</p>
            </div>
            <div className="security-box subnet-box"></div>
          </div>
        ) : (
          ""
        )}

        {properties?.showVpc ? (
          <div
            className="security-section vpc-section"
            onClick={() => {
              data.setShowPropertyEditPanel(properties.id, "vpc", properties);
            }}
          >
            <div className="security-name vpc-name">
              <p>{properties?.vpc.name || "vpc"}</p>
            </div>
            <div className="security-box vpc-box"></div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Ec2Component;
