import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import QuotesIcon from "../../assets/svg/Quotes";
import LogoIcon from "../../assets/svg/LogoLarge";
import LightLogoIcon from "../../assets/svg/Logo";

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





export default function Presentation() {
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
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div style={{ textAlign: 'center' }}>
          <LogoIcon/>
          <p className="font20 semiBold soustitre">Faire du sport n’a jamais été aussi challengeant</p>
          <br></br>
          <h4 className="extraBold font60 slogan">Trouvez facilement des joueurs près de chez vous !</h4>
          <br></br>
          <h6 className="purpleColor">👋🏻 ne manque pas le lancement prochainement !</h6>
          <h6 className="purpleColor">Rejoins notre newsletter 📧</h6>
          <BtnWrapper>
            <FullButton title="S'inscrire" action={() => setShowPopup(true)} />
          </BtnWrapper>
        </div>
      </LeftSide>

      <RightSide>
        <ImageWrapper>
          <video autoPlay loop muted style={{ borderRadius: "45px", width: "45%" }}>
            <source src="https://res.cloudinary.com/daroyxenr/video/upload/v1715712567/Untitled_design_5_bux65p.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <BackgroundSVG src="https://res.cloudinary.com/daroyxenr/image/upload/v1715699281/Untitled_design_ysobj2.svg" alt="Background SVG" />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em className="quotetext">"Après ma retraite sportive, j'ai ressenti un vide sans l'adrénaline des compétitions et la camaraderie des entraînements. Alors j'ai créé Players !"</em>
              </p>
              <p className="font13 orangeColor textRight autheurname" style={{marginTop: '10px'}}>Stéphane Dei-negri | Créateur de Players</p>
            </div>
          </QuoteWrapper>
        </ImageWrapper>
      </RightSide>
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
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }

  h6 {
    position: relative;
    top: -6rem ;
`;

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  bottom: 7rem;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  bottom: 4rem;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  position: relative;
  left: 49%;
  transform: translateX(-50%);
  top: -80px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: -0px;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;

const QuoteWrapper = styled.div`
  position: absolute;
  left: 43px;
  top: 20rem;
  max-width: 388px;
  padding: 30px;
  z-index: 99;
  max-height: 145px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
`;

const QuotesWrapper = styled.div`
  position: relative;
  left: -20px;
  top: -4.5rem;
`;

const moveBackground = keyframes`
  0% {
    transform: translateX(-50%);
  }
  50% {
    transform: translateX(-49%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const BackgroundSVG = styled.img`
  position: absolute;
  left: 28rem;
  bottom: -10rem;
  width: 170%;
  height: 170%;
  z-index: -1;
  animation: ${moveBackground} 5s infinite alternate;
`;
