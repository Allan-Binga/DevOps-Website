import React from "react";
import "./Tools.css";
import { toolsData } from "../../data/toolsData";
import RightArrow from "../../assets/rightArrow.png";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <div className="Tools" id="tools">
      {/*Header*/}
      <div className="tools-header">
        <span className="stroke-text">Explore </span>
        <span>CI/CD</span>
        <span className="stroke-text">tools.</span>
      </div>

      <div className="tool-categories">
        {toolsData.map((tool) => (
          <div className="category" key={tool.id}>
            {tool.image}
            <span>{tool.heading}</span>
            <span>{tool.details}</span>
            <div className="join-now">
              <Link to={`/tools/${tool.id}`} className="explore-link">
              <span>Explore more</span>
              </Link>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
