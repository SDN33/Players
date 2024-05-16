import React, { useEffect } from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";
import LogoIcon from "../../assets/svg/LogoLarge";
import Nossports from "../../assets/img/nossports.svg";


const VideoWrapper = styled.div`
  height: 160vh;
`;

const TextWrapper = styled.section`
  width: 100%;
  text-align: center;
  align-items: center;
  z-index: 1;
  position: relative;
  bottom: 71rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  position: relative;
  bottom: 59rem;
  left: 0.5rem;
  z-index: 0;
`;

const TextlongWrapper = styled.section`
  width: 100%;
  text-align: center;
  align-items: center;
  z-index: 1;
  position: relative;
  bottom: 67rem;
  font-size: 1.5rem;
  font-weight: 800;
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  position: relative;
  left: 49%;
  transform: translateX(-50%);
  top: -63rem;
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
  height: 95vh;
  position: relative;
  top: -7rem;
  display: flex;
  justify-content: center;
`;



export default function Présentation() {
  useEffect(() => {
    // Effect logic
  }, []);

  return (
    <>
      <VideoWrapper>
        <video autoPlay loop muted style={{ maxHeight: "80%"}} >
          <source src="https://res.cloudinary.com/daroyxenr/video/upload/v1715719095/Untitled_design_6_h2crbz.mp4" type="video/mp4" />
        </video>
        <LogoWrapper>
          <LogoIcon />
        </LogoWrapper>
        <TextWrapper id="présentation">
          <h1>Présentation</h1>
        </TextWrapper>
        <TextlongWrapper>
          <br />
          <br />
          <p>Bienvenue dans l'univers passionnant de PLAYERS !</p>
          <p>Rejoignez notre communauté dynamique de joueurs et vivez des expériences uniques.</p>
          <p>Découvrez des partenaires de jeu, prêts à partager des moments inoubliables lors de matchs près de chez vous !</p>
          <p>Que vous soyez un amateur de football, basketball ou d'un sport de raquette, vous trouverez votre place parmi nous.</p>
          <br />
          <p>Rencontrez de nouvelles personnes et dépassez-vous sur le terrain.</p>
          <p>Relevez des défis, développez vos compétences et élargissez votre réseau</p>
          <p>dans une ambiance conviviale et compétitive.</p>
          <br />
        </TextlongWrapper>
        <BtnWrapper>
          <FullButton title="S'inscrire" />
        </BtnWrapper>
      </VideoWrapper>
      <NossportsWrapper>
        <img src={Nossports} alt="Nossports" />
      </NossportsWrapper>
    </>
  );
}
