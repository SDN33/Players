import React from "react";
import styled from "styled-components";
// Components


export default function Blog() {
  return (
    <Wrapper id="blog">
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
