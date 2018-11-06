import React from "react";
import styled from "styled-components";
const Scroll = props => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "5px solid black",
        height: "800px",
        paddingBottom: "200px",
        overflow: "scroll",
        overflowX: "hidden"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
