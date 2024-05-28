import React, { useState } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998; /* Inférieur à z-index du popup */
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
  border: 1px solid #ccc;
  width: 20rem;
  text-align: center;

`;

const Button = styled.button`
  margin-top: 1rem;
  color: #ffffff;
  font-weight: bold;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function CookiePopup() {
  const [acceptedCookies, setAcceptedCookies] = useState(
    localStorage.getItem("acceptedCookies") === "true"
  );

  const acceptCookies = () => {
    localStorage.setItem("acceptedCookies", true);
    setAcceptedCookies(true);
  };

  const refuseCookies = () => {
    localStorage.setItem("acceptedCookies", false);
    setAcceptedCookies(false);
  };

  if (acceptedCookies) {
    return null; // Si les cookies sont acceptés, ne pas afficher le popup
  }

  return (
    <>
      <Overlay />
      <Popup>
        <h2>Consentement aux cookies</h2>
        <p className="purpleColor">
          Nous utilisons des cookies pour améliorer votre expérience sur notre site.
        </p>
        <strong>Acceptez-vous l'utilisation des cookies ?</strong>

        <Button backgroundColor="#4CAF50" onClick={acceptCookies}>Accepter</Button>
        <Button backgroundColor="#f44336" onClick={refuseCookies}>Refuser</Button>
      </Popup>
    </>
  );
}
