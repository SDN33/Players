import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import LogoIcon from "../../assets/svg/LogoLarge";
import ContactSvg from "../../assets/img/contactimg.svg";

// Création du composant LogoWrapper
const LogoWrapper = styled.div`
  position: relative;
  left: 10%;
`;

export default function Contact() {
  const sloganRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sloganRef.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              sloganRef.current.classList.add("bounce");
            } else {
              sloganRef.current.classList.remove("bounce");
            }
          },
          { threshold: 0.5 }
        );

        observer.observe(sloganRef.current);
        return () => observer.disconnect();
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper id="contact">
      {/* Utilisation du composant LogoWrapper autour de LogoIcon */}
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
      <LogoContainer>
        <Slogan ref={sloganRef} className="extraBold font60">
          Contactez nous !
        </Slogan>
        <EmailContainer>
          <h4 className="extraBold font40 purpleColor">Email</h4>
          <p className="semiBold">Players.contact@gmail.com</p>
          <br />
          <br />
          <h4 className="extraBold font40 purpleColor">Social</h4>
          <p className="semiBold">Facebook</p>
          <p className="semiBold">Instagram</p>
          <p className="semiBold">Linkedin</p>
        </EmailContainer>
      </LogoContainer>
      <ContactWrapper>
        <img src={ContactSvg} style={{ width: "70%", height: "auto" }} />
      </ContactWrapper>
    </Wrapper>
  );
}

const bounce = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`;

const Wrapper = styled.section`
  background-color: #060606;
  height: 100vh; /* Réduit la hauteur pour éviter le défilement excessif */
  position: relative;
  top: 10rem;
  z-index: 5;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 10rem;
  z-index: 5;
  position: relative;
  top: -10rem;
`;

const EmailContainer = styled.div`
  margin-top: 2rem;
  text-align: left;
`;

const Slogan = styled.h4`
  &.bounce {
    animation: ${bounce} 0.5s ease-in-out;
  }
`;

const ContactWrapper = styled.div`
  position: relative;
  top: -45rem; /* Ajuste la position verticale */
  left: 50%;
`;
