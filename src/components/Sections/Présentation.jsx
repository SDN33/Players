import React from "react";
import styled from "styled-components";

// Components
import FullButton from "../Buttons/FullButton";
import LogoIcon from "../../assets/svg/LogoLarge";


export default function Présentation() {
  return (
    <>
      <VideoWrapper>
        <LogoWrapper>
          <LogoIcon />
        </LogoWrapper>
        <TextWrapper id="présentation">
          <h1>Qui sommes nous ?</h1>
        </TextWrapper>
        <TextlongWrapper>
          <p>Plongez au cœur de la communauté PLAYERS</p>
          <p>Connectez-vous et découvrez des partenaires de jeu passionnés,</p>
          <p>prêts à partager des moments uniques lors de matchs inoubliables</p>
          <p> près de chez vous!</p>
        </TextlongWrapper>
        <BtnWrapper>
            <p>Pour recevoir notre actualité , rejoignez notre newsletter :</p>
            <br></br>
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
  bottom: 24rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  position: relative;
  bottom: 10.5rem;
  left: 0.5rem;
  z-index: 0; /* Valeur inférieure à Wrapper */
`;

const TextlongWrapper = styled.section`
  width: 100%;
  text-align: center;
  align-items: center;
  z-index: 1; /* Valeur positive */
  position: relative;
  bottom: 15rem;
  font-size: 1.8rem;
  font-weight: 800;
`;

const VideoWrapper = styled.div`

`;

const BtnWrapper = styled.div`
  max-width: 190px;
  position: relative;
  left: 49%;
  transform: translateX(-50%);
  top: -150px;
  text-align: center;
  font-size: 0.9rem;
  font-style: italic;
  color: #FF4336;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
