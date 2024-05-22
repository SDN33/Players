import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";
import LogoIcon from "../../assets/svg/LogoLarge";
import LightLogoIcon from "../../assets/svg/Logo";
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

  /* Tablettes */
  @media (max-width: 1285.60px) {
    bottom: 52rem;
  }

  @media (max-width: 960px) {
    bottom: 49rem;
  }
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

  /* Tablettes */
  @media (max-width: 1285.60px) {
    bottom: 42rem;
  }

  @media (max-width: 960px) {
    bottom: 39rem;
  }
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

  /* Tablettes */
  @media (max-width: 1285.60px) {
    bottom: 20rem;
    font-size: 1.2rem;

  }

  @media (max-width: 960px) {
    bottom: 19rem;
    font-size: 1.2rem;
  }
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

  /* Tablettes */
  @media (max-width: 1285.60px) {
    top: 56rem;

  }

  @media (max-width: 960px) {
    top: 54rem;
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

    @media (max-width: 960px) {
      width: 100%;
      position: relative;
      top: -5rem;
    }
  }

  @media (max-width: 960px) {
    margin-bottom: -14rem;
    margin-top: -0.5rem;
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
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Inscription newsletter"); // Définir automatiquement le message
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page par défaut
    // Envoie la requête POST vers Formspree
    fetch('https://formspree.io/f/xvoenaon', {
      method: 'POST',
      body: JSON.stringify({ email, message }), // Envoyez l'e-mail et le message
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        console.log('Subscription successful!');
        setShowPopup(false);
        setSubscriptionSuccess(true); // Affiche l'alerte de succès
      } else {
        console.error('There was an error subscribing!');
      }
    })
    .catch(error => {
      console.error('There was an error subscribing!', error);
    });
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
          <p className="extraBold purpleColor">Bienvenue dans l'univers passionnant de PLAYERS !</p>
          <br />
          <p>Rejoignez notre communauté dynamique de joueurs et vivez des expériences uniques.</p>
          <p>Découvrez des partenaires de jeu, prêts à partager des moments inoubliables lors de matchs près de chez vous !</p>
          <p>Que vous soyez un amateur de football, basketball ou d'un sport de raquette, vous trouverez votre place parmi nous.</p>
          <p>Rencontrez de nouvelles personnes et dépassez-vous sur le terrain.</p>
          <br />
          <p className="extraBold purpleColor">Relevez des défis, développez vos compétences et élargissez votre réseau</p>
          <p className="extraBold purpleColor">dans une ambiance conviviale et compétitive.</p>
        </TextlongWrapper>
        <BtnWrapper>
          <FullButton title="S'inscrire à la newsletter" action={() => setShowPopup(true)} />
        </BtnWrapper>
      </VideoWrapper>
      <NossportsWrapper style={{ transform: `translateY(${scrollPosition * 0.1}px)` }}>
        <img src={Nossports} alt="Nossports" />
      </NossportsWrapper>
      <div>
      {showPopup && (
        <div onClick={() => setShowPopup(false)} className="popup-background">
          <Popup onClick={(e) => e.stopPropagation()}>
            <LightLogoIcon />
            <p>👋🏻 Rejoins notre newsletter! 📧</p>
            <input
              type="email"
              placeholder="Entrez votre adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ display: "none" }} // Masquer automatiquement le champ de message
            />
            <button onClick={handleSubscribe}>Valider</button>
            <button onClick={() => setShowPopup(false)}>Fermer</button>
          </Popup>
        </div>
      )}
      {subscriptionSuccess && (
        <div className="subscription-alert">
          <p>Votre inscription à la newsletter a été effectuée avec succès !</p>
        </div>
      )}
    </div>
    </>
  );
}
