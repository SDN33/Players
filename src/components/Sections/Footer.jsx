import React, { useState } from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import LogoImg from "../../assets/svg/Logo";

const LegalPopup = ({ onClose }) => {
  return (
    <PopupContainer>
      <PopupContent>
        <h2>Mentions légales</h2>
        <p>Propriétaire du site :
          <br />Dei-negri Stéphane
          <br />33880 Saint Caprais de Bordeaux
          <br />France
          <br />

          <br />Contact :
          <br />Email : Players.contact@gmail.com
          <br />
          <br />Finalité du site :
          <br />Ce site web sert uniquement de vitrine et de pré-inscription pour le lancement de l'application mobile "Players". Il permet aux visiteurs de découvrir notre projet et de s'inscrire à notre newsletter pour être informés des dernières actualités.
          <br />
          <br />Utilisation des cookies :
          <br />Ce site utilise des cookies de Google Analytics uniquement à des fins de performance et de statistiques de visite. Les cookies ne sont pas utilisés pour collecter des informations personnelles identifiables des visiteurs. Les adresses e-mail ne sont conservées que si les visiteurs choisissent de s'inscrire à notre newsletter.
          <br />
          <br />
        </p>
        <CloseButton onClick={onClose}>Fermer</CloseButton>
      </PopupContent>
    </PopupContainer>
  );
};

export default function Contact() {
  const [showLegalPopup, setShowLegalPopup] = useState(false);

  const openLegalPopup = () => {
    setShowLegalPopup(true);
  };

  const closeLegalPopup = () => {
    setShowLegalPopup(false);
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <ScrollLink className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoImg />
            </ScrollLink>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - PLAYERS<span className="purpleColor font13"></span> - Tout droits réservés
            </StyleP>

            <StyledLink className="whiteColor animate pointer font13" onClick={openLegalPopup}>
              Mentions légales
            </StyledLink>
            {showLegalPopup && <LegalPopup onClose={closeLegalPopup} />}

            <ScrollLink className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Retour en haut
            </ScrollLink>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  z-index: 99;
`;

const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;


const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #060606;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 999;

  @media (max-width: 550px) {
    width: 90%;
    height: auto;
  }
`;

const PopupContent = styled.div`
   font-size: 0.9rem;
`;

const CloseButton = styled.button`
  /* Styles du bouton de fermeture */
`;

const StyledLink = styled.a`
  /* Styles du lien "Mentions légales" */
`;
