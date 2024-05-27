import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import QuotesIcon from "../../assets/svg/Quotes";
import LogoIcon from "../../assets/svg/LogoLarge";
import LightLogoIcon from "../../assets/svg/Logo";
import StoreBadge from "../../assets/img/storebadge.png";

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
  justify-content: center;
  width: 20rem;

  @media (max-width: 960px) {
    text-align: center;
    row-gap: 0.1rem;
  }

  button {
    margin-top: 1rem;
    max-width: 10rem;
    color: var(--bg);
    font-weight: 700;
    background: linear-gradient(90deg, rgba(255,49,49,1) 0%, rgba(255,145,77,1) 100%);
    padding: .8em 1.4em;
    position: relative;
    box-shadow: 0 2px 3px 1px hsl(var(--glow-hue) 50% 20% / 50%), inset 0 -10px 20px -10px hsla(var(--shadow-hue),10%,90%,95%);
    border-radius: 0.66em;
    transition: all var(--spring-duration) var(--spring-easing);
    width: 100%;
  }

  input {
    padding: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    border: 1px solid #fff;
    width: 70%;

    @media (max-width: 960px) {
      text-align: center;
      max-width: 90%;
    }
  }
`;

const validateEmail = (email) => {
  // Expression régulière pour la validation de l'e-mail
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const ErrorText = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;


const LogoWrapper = styled.div`
  @media (max-width: 480px) {
    position: relative;
    left: 1rem;
  }
`;


const BadgeWrapper = styled.div`
  position: relative;
  top: -5rem;
  left: -1%;

  @media (max-width: 480px) {
    position: relative;
    top: -5rem;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const NewsletterLine = styled.h6`
  animation: ${fadeIn} 5s ease-in-out infinite; /* Utilisation de l'animation fadeIn */
  padding: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: orange;
  font-weight: 700;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export default function Presentation() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Inscription newsletter");
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Veuillez saisir une adresse e-mail valide.");
      return;
    }
    setEmailError(""); // Réinitialiser l'erreur si l'e-mail est valide
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

  useEffect(() => {
    if (subscriptionSuccess) {
      const timer = setTimeout(() => {
        setSubscriptionSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [subscriptionSuccess]);


  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div style={{ textAlign: 'center' }}>
          <LogoWrapper>
            <LogoIcon className="responsive-logo"/>
          </LogoWrapper>
          <ResponsiveP className="font20 semiBold soustitre">Faire du sport n’a jamais été aussi challengeant</ResponsiveP>
          <br/>
          <ResponsiveH4 className="extraBold font60 slogan">Trouvez facilement des joueurs près de chez vous !</ResponsiveH4>
          <br />
          <NewsletterLine>👋🏻 ne manque pas le lancement prochainement !
          <br />Rejoins notre newsletter 📧</NewsletterLine>
          <BtnWrapper>
            <FullButton title="S'inscrire" action={() => setShowPopup(true)} />
          </BtnWrapper>
          <BadgeWrapper>
            <img src={StoreBadge} alt="Store Badge" style={{ width: "100%", maxWidth: "17rem" }} />
          </BadgeWrapper>
        </div>
      </LeftSide>

      <RightSide>
        <ImageWrapper>
        <video autoPlay loop muted playsInline style={{ borderRadius: "45px", width: "45%" }}>
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
              {emailError && <ErrorText>{emailError}</ErrorText>}
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
            <p>Votre inscription à la newsletter a été effectuée avec succès 👍🏻</p>
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
  margin-top: 4rem;

  @media (max-width: 480px) {
    align-items: center;
    text-align: center;
    padding-top: 100px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    margin-top: 5rem;
  }

  h6 {
    position: relative;
    top: -6rem;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  bottom: 7rem;

  @media (max-width: 960px) {
    width: 100%;
    margin: 50px 0;
    text-align: center;
  }

  @media (max-width: 480px) {
    width: 90%;
    margin-top: 2rem;
    text-align: center;
  }
  /* iPad Air (10.9 pouces, résolution 1640 x 2360 pixels) */
  @media only screen and (max-width: 1640px) {
    height: 88vh
  }

`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  bottom: 6rem;
  @media (max-width: 960px) {
    display: none;
  }
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  position: relative;
  left: 49%;
  transform: translateX(-50%);
  top: -80px;

  @media (max-width: 480px) {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: -0px;
  z-index: 9;
`;

const QuoteWrapper = styled.div`
  position: absolute;
  left: 43px;
  top: 20rem;
  max-width: 388px;
  padding: 30px;
  z-index: 99;
  max-height: 145px;
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
  @media (max-width: 960px) {
    display: flex;
  }
`;

const ResponsiveP = styled.p`
  @media (max-width: 480px) {
    font-size: 16px;
    position: relative;
  }
`;

const ResponsiveH4 = styled.h4`
  @media (max-width: 480px) {
    font-size: 40px;
    max-width: 70%;
    text-align: center;
    position: relative;
    left: 15%;
    margin-bottom: -1rem;
  }
`;
