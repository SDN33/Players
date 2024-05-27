import React from "react";
import styled, { keyframes } from "styled-components"; // Import keyframes
import LogoIcon from "../../assets/svg/LogoLarge";
import LightLogoIcon from "../../assets/svg/Logo";
// Assets
import FeaturesSVG from "../../assets/img/features.svg";
import FeaturestextSVG from "../../assets/img/featurestext.svg";
import StoreBadge from "../../assets/img/storebadge.png";



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

const BadgeWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 80rem;
width: 100%;
z-index: 1;

@media (max-width: 480px) {
  position: relative;
  top: -2rem;
  left: 19%;
  width: 60%;

}


`;

export default function Features() {
  return (
    <BodyWrapper>
      <VideoWrapper id="Features">
        <video autoPlay loop muted playsInline>
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
      <BadgeWrapper>
            <img src={StoreBadge} alt="Store Badge" style={{ width: "100%", maxWidth: "17rem" }} />
          </BadgeWrapper>
    </BodyWrapper>
  );
}

const BodyWrapper = styled.section`
  background-color: #060606;
  height: 200vh;
  position: relative;
  top: 17rem;
  margin-bottom: -20rem;
  height: 280vh; /* 100% de la hauteur de la fenêtre visible */

  @media (max-width: 960px) {
    height: 200vh;
  }

  /* Tablettes */
  @media (max-width: 1285.60px) {
    height: 150vh;
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 38rem;
  left: 52%;
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
      position: relative;
      top: -20rem;
      left: 0%;
      align-self: center;
      display: flex;

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
      top: -28rem;
      left: 0%;

    }
  }


`;

const moveFeaturestextWrapper = keyframes`
  0% {
    transform: translateX(-52%);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(-52%);
  }
`;

const FeaturestextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 51rem;
  left: 50%;
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
      top: -37rem;
      left: 1%;
    }
  }


`;
