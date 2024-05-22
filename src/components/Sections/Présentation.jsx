import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";
import LogoIcon from "../../assets/svg/LogoLarge";
import Nossports from "../../assets/img/nossports.svg";
import LightLogoIcon from "../../assets/svg/Logo";



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

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #060606;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  border: 1px solid #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column; /* Pour placer les éléments verticalement */

  button {
    margin-top: 1rem;
    max-width: 10rem;
    color: var(--bg);
    font-weight: 700;
    /*     background-image: linear-gradient(90deg, #fcecfe, #fbf6e7, #e6fcf5); */
    background: linear-gradient(90deg, rgba(255,49,49,1) 0%, rgba(255,145,77,1) 100%);
    padding: .8em 1.4em;
    position: relative;
    isolation: isolate;
    box-shadow: 0 2px 3px 1px hsl(var(--glow-hue) 50% 20% / 50%), inset 0 -10px 20px -10px hsla(var(--shadow-hue),10%,90%,95%);
    border-radius: 0.66em;
    scale: 1;
    transition: all var(--spring-duration) var(--spring-easing);
    width: 100%;
  }

  input {
    padding: 0.5rem;
    margin-top: 1rem;
    border-radius: 8px;
    border: 1px solid #fff;
    width: 100%;

`;
const CenteredInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 10px; /* Ajoute un peu d'espace en dessous de l'input */
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

  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = () => {
    console.log("handleSubscribe called");
    setShowPopup(true);
    console.log("showPopup value after setting to true:", showPopup);
  };

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
          <FullButton title="S'inscrire" action={handleSubscribe}  />
        </BtnWrapper>
      </VideoWrapper>
      <NossportsWrapper style={{ transform: `translateY(${scrollPosition * 0.1}px)` }}>
        <img src={Nossports} alt="Nossports" />
      </NossportsWrapper>
      <div>
      {showPopup && (
        <div onClick={() => setShowPopup(false)} className="popup-background">
          <Popup onClick={(e) => e.stopPropagation()}>
            <LightLogoIcon /> {/* Utilisation du logo redimensionné */}
            <p className="font35 textCenter extraBold">👋🏻 Rejoins notre newsletter! 📧</p>
            {/* Utilisation du composant d'input centré */}
            <CenteredInput type="email" placeholder="Entrez votre adresse e-mail" className="font15 extraBold" />
            <button onClick={() => setShowPopup(false)}>Valider</button>
            {/* Bouton pour fermer le pop-up sans donner d'email */}
            <button onClick={() => setShowPopup(false)}>Fermer</button>
          </Popup>
        </div>
      )}
      </div>
    </>
  );
}
