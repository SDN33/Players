import React from "react";
import styled from "styled-components";

// Components
import FullButton from "../Buttons/FullButton";
import LogoIcon from "../../assets/svg/LogoLarge";


export default function Présentation() {
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
          <p>Rencontrez de nouvelles personnes et dépassez vous sur le terrain.</p>
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
