import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import FullButton from "../Buttons/FullButton";
import LogoIcon from "../../assets/svg/LogoLarge";

const generateRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const generateRandomPosition = () => {
  const x = generateRandomNumber(0, window.innerWidth);
  const y = window.innerHeight;
  return { x, y };
};

const generateRandomSize = () => {
  return generateRandomNumber(10, 40);
};

const fadeInAndMoveUp = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(-200vh);
  }
`;

const Rond = styled.div`
  background-color: white;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: 50%;
  position: absolute;
  animation: ${fadeInAndMoveUp} ${({ duration }) => duration}s ease-out;
  animation-delay: ${({ delay }) => delay}s;
`;

export default function Présentation() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const container = document.getElementById("container");
      if (container) {
        const { x, y } = generateRandomPosition();
        const size = generateRandomSize();
        const delay = generateRandomNumber(0, 5); // Ajoutez des ronds toutes les 0 à 5 secondes
        const rond = document.createElement("div");
        rond.className = "rond";
        rond.style.left = `${x}px`;
        rond.style.top = `${y}px`;
        rond.style.animationDelay = `${delay}s`;
        rond.style.width = `${size}px`;
        rond.style.height = `${size}px`;
        container.appendChild(rond);
        setTimeout(() => {
          container.removeChild(rond);
        }, 5000); // Disparaît après 5 secondes
      }
    }, 1000); // Génère un nouveau rond toutes les secondes
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <VideoWrapper>
        <video autoPlay loop muted>
          <source src="https://res.cloudinary.com/daroyxenr/video/upload/v1715719095/Untitled_design_6_h2crbz.mp4" type="video/mp4" />
        </video>
        <LogoWrapper>
          <LogoIcon />
        </LogoWrapper>
        <TextWrapper id="présentation">
          <h1>Présentation</h1>
        </TextWrapper>
        <TextlongWrapper>
          <p>Bienvenue dans l'univers passionnant de PLAYERS !</p>
          <p>Rejoignez notre communauté dynamique de joueurs et vivez des expériences uniques.</p>
          <p>Découvrez des partenaires de jeu, prêts à partager des moments inoubliables lors de matchs près de chez vous !</p>
          <p>Que vous soyez un amateur de football, basketball ou d'un sport de raquette, vous trouverez votre place parmi nous.</p>
          <br />
          <p>Rencontrez de nouvelles personnes et dépassez-vous sur le terrain.</p>
          <p>Relevez des défis, développez vos compétences et élargissez votre réseau</p>
          <p>dans une ambiance conviviale et compétitive.</p>
          <br />
          <br />
          <p style={{ color: '#FF4336'}}><strong style={{ fontSize: '2em' }}>Alors, prêt à relever le défi ?</strong></p>
        </TextlongWrapper>
        <BtnWrapper>
          <FullButton title="S'inscrire" />
        </BtnWrapper>
      </VideoWrapper>
      <NossportsWrapper>
        <p style={{ color: '#FF4336', position: "relative", fontSize: '3em', top: "5rem " }}>
          <strong>Nos sports à l'honneur !</strong>
        </p>
        <RondsContainer id="container" />
        <Ronds />
        <Ronds />
      </NossportsWrapper>
    </>
  );
}

const TextWrapper = styled.section`
  width: 100%;
  text-align: center;
  align-items: center;
  z-index: 1; /* Valeur positive */
  position: relative;
  bottom: 78rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  position: relative;
  bottom: 65rem;
  left: 0.5rem;
  z-index: 0; /* Valeur inférieure à Wrapper */
`;

const TextlongWrapper = styled.section`
  width: 100%;
  text-align: center;
  align-items: center;
  z-index: 1; /* Valeur positive */
  position: relative;
  bottom: 69rem;
  font-size: 1.5rem;
  font-weight: 800;
`;

const VideoWrapper = styled.div`
  height: 160vh;
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  position: relative;
  left: 49%;
  transform: translateX(-50%);
  top: -67rem;
  text-align: center;
  font-size: 1rem;
  font-style: italic;
  font-family: 'PublicSans', sans-serif;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

const NossportsWrapper = styled.div`
  text-align: center;
  align-items: center;
  font-weight: 800;
  height: 100vh;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

const RondsContainer = styled.div`
  position: relative;
`;

const Ronds = styled.div`
  background-color: white;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: inline-block;
  margin: 0 20px;
  position: relative;
  left: -17rem;
  Z-index: -1;
`;
