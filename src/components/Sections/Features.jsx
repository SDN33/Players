import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components"; // Import keyframes
import LogoIcon from "../../assets/svg/LogoLarge";
import LightLogoIcon from "../../assets/svg/Logo";
// Assets
import FeaturesSVG from "../../assets/img/features.svg";
import FeaturestextSVG from "../../assets/img/featurestext.svg";
import StoreBadge from "../../assets/img/storebadge.png";

// Define the animations
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const blink = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;


const moveFeaturestextWrapper = keyframes`
  0% {
    transform: translateX(-50%);
  }
  50% {
    transform: translateX(-48%);
  }
  100% {
    transform: translateX(-50%);
  }
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

  @media (max-width: 480px) {
    display: none; /* Ne pas afficher le LogoIcon lorsque la largeur de l'écran est inférieure ou égale à 480px */
  }
`;

const MobilePWrapper = styled.div`
  display: none; /* Ne pas afficher le LogoIcon lorsque la largeur de l'écran est inférieure ou égale à 480px */

  @media (max-width: 480px) {
    display: block; /* Afficher le LogoIcon lorsque la largeur de l'écran est inférieure ou égale à 480px */
  }
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

  @media (max-width: 960px) {
    position: relative;
    top: 22rem;
    left: 19%;
    width: 60%;
  }

  @media (max-width: 480px) {
    position: relative;
    top: -2rem;
    left: 19%;
    width: 60%;
  }
`;

const TimerWrapper = styled.div`
  width: 100%;
  position: relative;
  top: 49rem;
  display: flex;
  flex-direction: column; /* Pour que les éléments enfants soient empilés verticalement */
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 10rem; /* Espacement entre le compteur et le texte */

  h2 {
    margin-bottom: 4rem; /* Espacement entre le texte et le compteur */
    color: white; /* Couleur vive */
    animation: ${props => props.theme.bounce} 2s infinite;
  }

  h2 span {
    color: #FF4336; /* Couleur contrastante */
    font-weight: 800; /* Gras */
    animation: ${props => props.theme.blink} 1.5s step-end infinite alternate;
  }

  @media only screen and (max-width: 1280px) {
    top: 50rem;
  }

  @media (max-width: 480px) {
    display: none;
  }



`;

const BodyWrapper = styled.section`
  background-color: #060606;
  position: relative;
  top: 17rem;
  margin-bottom: -20rem;
  height: 340vh; /* 100% de la hauteur de la fenêtre visible */

  /* Tablettes */
  @media (max-width: 1285.60px) {
    height: 380vh;
  }

  @media only screen and (max-width: 1280px) {
    height: 320vh;
  }

  @media (max-width: 960px) {
    height: 170vh;
  }

  @media (max-width: 480px) {
    height: 130vh;
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
    opacity: 0.8;
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

  @media only screen and (max-width: 1280px) {
    align-self: center;
    text-align: center;
    display: flex;

    img {
      width: 180%;
      height: 180%;
      position: relative;
      top: 0rem;
      left: 0%;
    }
  }

  @media (max-width: 960px) {
    align-self: center;
    text-align: center;
    display: flex;

    img {
      width: 180%;
      height: 180%;
      position: relative;
      top: -15rem;
      left: 0rem;
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


export default function Features() {
  useEffect(() => {
    const countdownEls = document.querySelectorAll(".countdown");
    countdownEls.forEach((countdownEl) => createCountdown(countdownEl));
  }, []);

  function createCountdown(countdownEl) {
    const target = new Date(new Date(countdownEl.dataset.targetDate).toLocaleString("en"));
    const parts = {
      days: { text: ["jours", "jour"], dots: 30 },
      hours: { text: ["heures", "heure"], dots: 24 },
      minutes: { text: ["minutes", "minute"], dots: 60 },
      seconds: { text: ["secondes", "seconde"], dots: 60 },
    };

    Object.entries(parts).forEach(([key, value]) => {
      const partEl = document.createElement("div");
      partEl.classList.add("part", key);
      partEl.style.setProperty("--dots", value.dots);
      value.element = partEl;

      const remainingEl = document.createElement("div");
      remainingEl.classList.add("remaining");
      remainingEl.innerHTML = `
        <span class="number"></span>
        <span class="text"></span>
      `;
      partEl.append(remainingEl);
      for (let i = 0; i < value.dots; i++) {
        const dotContainerEl = document.createElement("div");
        dotContainerEl.style.setProperty("--dot-idx", i);
        dotContainerEl.classList.add("dot-container");
        const dotEl = document.createElement("div");
        dotEl.classList.add("dot");
        dotContainerEl.append(dotEl);
        partEl.append(dotContainerEl);
      }
      countdownEl.append(partEl);
    });
    getRemainingTime(target, parts);
  }

  function getRemainingTime(target, parts, first = true) {
    const now = new Date();
    if (first) console.log({ target, now });
    const remaining = {};
    let seconds = Math.floor((target - now) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    Object.entries({ days, hours, minutes, seconds }).forEach(([key, value]) => {
      const remaining = parts[key].element.querySelector(".number");
      const text = parts[key].element.querySelector(".text");
      remaining.innerText = value;
      text.innerText = parts[key].text[Number(value == 1)];
      const dots = parts[key].element.querySelectorAll(".dot");
      dots.forEach((dot, idx) => {
        dot.dataset.active = idx <= value;
        dot.dataset.lastactive = idx == value;
      });
    });
    if (now <= target) {
      window.requestAnimationFrame(() => {
        getRemainingTime(target, parts, false);
      });
    }
  }

  return (
    <BodyWrapper>
      <VideoWrapper id="Features">
        <video autoPlay loop muted playsInline>
          <source src="https://res.cloudinary.com/daroyxenr/video/upload/q_auto:best/v1715892911/Untitled_design_4_qi9lqr.mp4" type="video/mp4" />
        </video>
        <LogoWrapper>
          <LogoIcon />
          <p className="font20 extraBold soustitre" style={{ textAlign: "center" }}>
            Faire du sport n’a jamais été aussi challengeant
          </p>
        </LogoWrapper>
      </VideoWrapper>
      <MobilePWrapper>
        <LightLogoIconWrapper>
          <LightLogoIcon />
        </LightLogoIconWrapper>
        <TextMobileWrapper>
          <p className="font20 extraBold soustitre" style={{ textAlign: "center" }}>
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
      <TimerWrapper>
        <h2 className="textCenter">
          Compte à rebours pour le <span>LANCEMENT</span> de l'app !
        </h2>
        <div className="countdown" data-target-date="2024-08-15 00:00:00"></div>
      </TimerWrapper>
    </BodyWrapper>
  );
}
