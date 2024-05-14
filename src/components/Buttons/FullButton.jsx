import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  font-size: 16px;
  border: 1px solid ${(props) => (props.border ? "#7620ff" : "#fff")};
  background: rgb(255, 49, 49);
  background: -moz-radial-gradient(circle, rgba(255, 49, 49, 1) 0%, rgba(255, 145, 77, 1) 100%);
  background: -webkit-radial-gradient(circle, rgba(255, 49, 49, 1) 0%, rgba(255, 145, 77, 1) 100%);
  background: radial-gradient(circle, rgba(255, 49, 49, 1) 0%, rgba(255, 145, 77, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff3131", endColorstr="#ff914d", GradientType=1);
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  :hover {
    background: ${(props) => (props.border ? "transparent" : "grey")};
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;
