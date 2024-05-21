import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";
import LogoIcon from "../../assets/svg/LogoLarge";
import Nossports from "../../assets/img/nossports.svg";


const VideoWrapper = styled.div`
  height: 160vh;
  width: 100%;
  position: relative;
  top: -9rem;
  overflow: hidden;


  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextWrapper = styled.section`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 51rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 41rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
`;

const TextlongWrapper = styled.section`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 22rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  font-weight: 800;
  padding: 0 1rem;
`;

const BtnWrapper = styled.div`
  width: 100%;  /* Set width to 100% to take the full width of the parent */
  max-width: 190px;  /* Maximum width of the button */
  position: absolute;
  top: 51rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 1rem;
  font-style: italic;
  font-family: 'PublicSans', sans-serif;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

const NossportsWrapper = styled.div`
  width: 90%;
  height: 100vh;
  position: relative;
  top: -15rem;
  left: 6%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #060606;

  img {
    width: 90%;
    height: auto;
    object-fit: cover;
  }
`;



export default function Présentation() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <VideoWrapper>
        <video autoPlay loop muted style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}>
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
          <br />
          <p>Rejoignez notre communauté dynamique de joueurs et vivez des expériences uniques.</p>
          <p>Découvrez des partenaires de jeu, prêts à partager des moments inoubliables lors de matchs près de chez vous !</p>
          <p>Que vous soyez un amateur de football, basketball ou d'un sport de raquette, vous trouverez votre place parmi nous.</p>
          <p>Rencontrez de nouvelles personnes et dépassez-vous sur le terrain.</p>
          <br />
          <p>Relevez des défis, développez vos compétences et élargissez votre réseau</p>
          <p>dans une ambiance conviviale et compétitive.</p>
        </TextlongWrapper>
        <BtnWrapper>
          <FullButton title="S'inscrire" />
        </BtnWrapper>
      </VideoWrapper>
      <NossportsWrapper style={{ transform: `translateY(${scrollPosition * 0.1}px)` }}>
        <img src={Nossports} alt="Nossports" />
      </NossportsWrapper>
    </>
  );
}
