import React from "react";
import styled from "styled-components";
// Components
import LogoIcon from "../../assets/svg/LogoLarge";

export default function Features() {
  return (
    <VideoWrapper id="Features">
      <video autoPlay loop muted >
        <source src="https://res.cloudinary.com/daroyxenr/video/upload/q_auto:best/v1715892911/Untitled_design_4_qi9lqr.mp4" type="video/mp4" />
      </video>
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
    </VideoWrapper>
  );
}

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
