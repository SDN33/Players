import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import LogoIcon from "../../assets/svg/LogoLarge";
import ContactSvg from "../../assets/img/contactimg.svg";

// Création du composant LogoWrapper
const LogoWrapper = styled.div`
  position: relative;
  left: 10%;
`;

const ContactWrapper = styled.div`
  position: absolute;
  bottom: -2rem;
  left: 50%;
  width: 90%;
  z-index: 0; /* Assurez-vous que le z-index est supérieur à celui du footer */

  @media (max-width: 960px) {
    left: 66%;
  }

  @media (max-width: 480px) {
    img {
      display: none;
    }
  }

  @media only screen and (max-width: 1640px) {
    left: 70%;
    top: 10%;
  }
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
          Contact
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
      <img src={ContactSvg} style={{ width: "70%", height: "auto", zIndex: -3 }} />
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

  @media (max-width: 960px) {
    height: 100vh;
    left: -6rem;
  }

  @media only screen and (max-width: 1640px) {
    height: 80vh;
  }

`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 10rem;
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
