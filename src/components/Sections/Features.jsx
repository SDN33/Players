import React from "react";
import styled, { keyframes } from "styled-components";
import LogoIcon from "../../assets/svg/LogoLarge";
import FeaturesSVG from "../../assets/img/features.svg"; // Importation du SVG

export default function Features() {
  return (
    <BodyWrapper>
      <VideoWrapper id="Features">
        <video autoPlay loop muted>
          <source src="https://res.cloudinary.com/daroyxenr/video/upload/q_auto:best/v1715892911/Untitled_design_4_qi9lqr.mp4" type="video/mp4" />
        </video>
        <LogoWrapper>
          <LogoIcon />
          <p className="font20 extraBold soustitre" style={{ textAlign: "center"}}>
            Faire du sport n’a jamais été aussi challengeant
          </p>
        </LogoWrapper>
      </VideoWrapper>
      <FeaturesSVGWrapper>
        <img src={FeaturesSVG} alt="Features" />
      </FeaturesSVGWrapper>
    </BodyWrapper>
  );
}

const BodyWrapper = styled.section`
  background-color: #060606;
  height: 200vh;
  position: relative;
  top: 18rem;
`;

const VideoWrapper = styled.div`
  width: 30%;
  height: 30%;
  position: relative;
  top: -8rem;
  left: 35%;
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
  text-align: center;

  svg {
    width: 150%; /* Agrandir de 50% */
    height: 150%;
  }
`;



const FeaturesSVGWrapper = styled.div`
  position: absolute;
  top: 30rem;
  left: 51%;
  transform: translateX(-50%);
  z-index: 1;
  align-items: center;
  justify-content: center;
  display: flex;
`;
