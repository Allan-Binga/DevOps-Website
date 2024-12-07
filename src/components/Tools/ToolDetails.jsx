import React from "react";
import { useParams } from "react-router-dom";
import { toolsData } from "../../data/toolsData";

const ToolDetails = () => {
  const { id } = useParams();
  const tool = toolsData.find((tool) => tool.id === parseInt(id));

  if (!tool) {
    return <div>Tool not found!</div>;
  }
  return <div className="tool-details">
    <h2>{tool.heading}</h2>
    <p>{tool.details}</p>
  </div>;
};

export default ToolDetails;
