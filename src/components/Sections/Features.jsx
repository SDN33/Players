import React from "react";
import styled, { keyframes } from "styled-components"; // Import keyframes
import LogoIcon from "../../assets/svg/LogoLarge";
import LightLogoIcon from "../../assets/svg/Logo";
// Assets
import FeaturesSVG from "../../assets/img/features.svg";
import FeaturestextSVG from "../../assets/img/featurestext.svg";


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

  @media (max-width: 480px) {
    display: none; /* Ne pas afficher le LogoIcon lorsque la largeur de l'écran est inférieure ou égale à 480px */


  }
`;

const MobilePWrapper = styled.div`
  display: none; /* Ne pas afficher le LogoIcon lorsque la largeur de l'écran est inférieure ou égale à 480px */

  @media (max-width: 480px) {
    display: block; /* Afficher le LogoIcon lorsque la largeur de l'écran est inférieure ou égale à 480px */  }
`;

const LightLogoIconWrapper = styled.div`

  @media (max-width: 480px) {
    position: relative;
    top: -15rem;
    left: 25%;
  }
`;

const TextMobileWrapper = styled.div`
  @media (max-width: 480px) {
    position: relative;
    top: -10rem;
  }
`;

export default function Features() {
  return (
    <BodyWrapper>
      <VideoWrapper id="Features">
        <video autoPlay loop muted>
          <source src="https://res.cloudinary.com/daroyxenr/video/upload/q_auto:best/v1715892911/Untitled_design_4_qi9lqr.mp4" type="video/mp4" />
        </video>
        <LogoWrapper>
          <LogoIcon  />
          <p className="font20 extraBold soustitre" style={{ textAlign: "center"}}>
            Faire du sport n’a jamais été aussi challengeant
          </p>
        </LogoWrapper>
      </VideoWrapper>
      <MobilePWrapper>
        <LightLogoIconWrapper>
          <LightLogoIcon />
        </LightLogoIconWrapper>
        <TextMobileWrapper>
          <p className="font20 extraBold soustitre" style={{ textAlign: "center"}}>
            Faire du sport n’a jamais été aussi challengeant !
          </p>
        </TextMobileWrapper>
      </MobilePWrapper>
      <FeaturesSVGWrapper>
        <img src={FeaturesSVG} alt="Features" />
      </FeaturesSVGWrapper>
      <FeaturestextWrapper>
        <img src={FeaturestextSVG} alt="Featurestext" />
      </FeaturestextWrapper>
    </BodyWrapper>
  );
}

const BodyWrapper = styled.section`
  background-color: #060606;
  height: 200vh;
  position: relative;
  top: 18rem;
  margin-bottom: -20rem;
  height: 280vh; /* 100% de la hauteur de la fenêtre visible */

  @media (max-width: 960px) {
    height: 200vh;
  }

  /* Tablettes */
  @media (max-width: 1285.60px) {
    height: 240vh;
  }

  @media (max-width: 480px) {
    height: 140vh;
  }

`;

const VideoWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  top: -15rem;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    max-width: 100%;
    max-height: 100%;
  }
`;



const FeaturesSVGWrapper = styled.div`
  position: absolute;
  top: 35rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  max-width: 90%;
  max-height: 90%;
  width: auto;
  height: auto;

  @media (max-width: 960px) {
    align-self: center;
    text-align: center;
    display: flex;

    img {
      width: 180%;
      height: 180%;
      position: relative;
      top: -15rem;
      left: -10.5rem;
    }
  }

  /* Tablettes */
  @media (max-width: 1285.60px) {
    align-self: center;
    text-align: center;
    display: flex;

    img {
      width: 150%;
      height: 150%;
      position: relative;
      top: -4rem;
      left: -8.5rem;
    }
  }

  @media (max-width: 480px) {
    align-self: center;
    text-align: center;
    display: flex;

    img {
      width: 180%;
      height: 180%;
      position: relative;
      top: -25rem;
      left: -5rem;
    }
  }


`;

const moveFeaturestextWrapper = keyframes`
  0% {
    transform: translateX(-50%);
  }
  50% {
    transform: translateX(-49%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const FeaturestextWrapper = styled.div`
  position: absolute;
  top: 50rem;
  left: 48%;
  transform: translate(-50%, -50%);
  z-index: 1;
  max-width: 90%;
  max-height: 90%;
  width: auto;
  height: auto;
  animation: ${moveFeaturestextWrapper} 5s infinite alternate;

  @media (max-width: 960px) {
    align-self: center;
    text-align: center;
    display: flex;

    img {
      width: 180%;
      height: 180%;
      position: relative;
      top: -20rem;
      left: -10.5rem;
    }
  }

  /* Tablettes */
  @media (max-width: 1285.60px) {
    align-self: center;
    text-align: center;
    display: flex;

    img {
      width: 150%;
      height: 150%;
      position: relative;
      top: -6rem;
      left: -8.5rem;
    }
  }

  @media (max-width: 480px) {
    align-self: center;
    text-align: center;
    display: flex;

    img {
      width: 180%;
      height: 180%;
      position: relative;
      top: -35rem;
      left: -4.6rem;

    }
  }
`;
