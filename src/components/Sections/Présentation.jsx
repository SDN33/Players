import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";
import LogoIcon from "../../assets/svg/LogoLarge";
import LightLogoIcon from "../../assets/svg/Logo";
import Nossports from "../../assets/img/nossports.svg";

const VideoWrapper = styled.div`
  padding-top: 2rem;
  height: 140vh;
  width: 100%;
  position: relative;
  top: -9rem;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 480px) {
      height: 80%;
      object-fit: cover;
      height: 180vh;

    }

    @media only screen and (max-width: 428px) {
      height: 70%;
      object-fit: cover;
      height: 180vh;

    }
  }

  @media (max-width: 1285.60px) {
    height: 140vh;
  }

  @media only screen and (max-width: 1080px) {
    height: 150vh;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 8rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  padding: -1 1rem;

  @media (max-width: 960px) {
    top: 5rem;
  }

  @media (max-width: 480px) {
    top: 10rem;
  }

  @media only screen and (max-width: 428px) {
    top: 7.5rem;
  }

`;

const TextWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const TextlongWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 800;
  padding: 0 1rem;
  margin-bottom: 2rem;

  @media (max-width: 1285.60px) {
    font-size: 1.3rem;
  }

  @media (max-width: 960px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    bottom: 1rem;
  }

  @media only screen and (max-width: 428px) {
    top: 20rem;
    font-size: 1rem;

  }
`;

const BtnWrapper = styled.div`
  width: 100%;
  max-width: 190px;
  text-align: center;
  font-size: 1rem;
  font-style: italic;
  font-family: 'PublicSans', sans-serif;
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

  @media (max-width: 480px) {
    width: 95%;
    left: 0.6rem;
    margin-bottom: -22rem;
    margin-top: -11rem;
    background-color: transparent;
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
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 1rem;
    max-width: 10rem;
    color: var(--bg);
    font-weight: 700;
    background: linear-gradient(90deg, rgba(255,49,49,1) 0%, rgba(255,145,77,1) 100%);
    padding: .8em 1.4em;
    border-radius: 0.66em;
    transition: all var(--spring-duration) var(--spring-easing);
    width: 100%;
  }

  input {
    padding: 0.5rem;
    margin-top: 1rem;
    border-radius: 8px;
    border: 1px solid #fff;
    width: 100%;
  }
`;

export default function Présentation() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Inscription newsletter");
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

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

  const handleSubscribe = (event) => {
    event.preventDefault();
    fetch('https://formspree.io/f/xvoenaon', {
      method: 'POST',
      body: JSON.stringify({ email, message }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        console.log('Subscription successful!');
        setShowPopup(false);
        setSubscriptionSuccess(true);
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
        <ContentWrapper >
          <div className="logopres">
            <LogoIcon />
          </div>
          <TextWrapper id="présentation">
            <h1>Présentation</h1>
          </TextWrapper>
          <TextlongWrapper>
            <p className="extraBold purpleColor">Bienvenue dans l'univers de PLAYERS ! </p>
            <br />
            <p>Rejoignez notre communauté dynamique de joueurs et vivez des expériences uniques.</p>
            <p>Découvrez des partenaires de jeu, prêts à partager des moments inoubliables lors de matchs près de chez vous !</p>
            <p>Que vous soyez un amateur de football, basketball ou d'un sport de raquette, vous trouverez votre place parmi nous.</p>
            <p>Rencontrez de nouvelles personnes et dépassez-vous sur le terrain.</p>
            <br />
            <p className="extraBold purpleColor">Relevez des défis, développez vos compétences et élargissez votre réseau</p>
            <p className="extraBold purpleColor">dans une ambiance conviviale et compétitive.</p>
          </TextlongWrapper>
          <br />
          <br />
          <BtnWrapper>
            <FullButton title="S'inscrire à la newsletter" action={() => setShowPopup(true)} />
          </BtnWrapper>
        </ContentWrapper>
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
              style={{ display: "none" }}
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
