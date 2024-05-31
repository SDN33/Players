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
  position: relative;
  left: 50%;
  top: -15rem;
  width: 60%;
  z-index: 1 ; /* Assurez-vous que le z-index est supérieur à celui du footer */


  @media only screen and (max-width: 1640px) {
    left: 70%;
    top: -105%;
  }

  @media only screen and (max-width: 1280px) {
    align-self: center;
    text-align: center;
    display: flex;

    img {
      width: 180%;
      height: 180%;
      position: relative;
      top: 6rem;
      left: 0%;
    }

  @media (max-width: 960px) {
    left: 66%;
    display: none;

  }

  @media (max-width: 480px) {
    img {
      display: none;
      top: -10%;

    }
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
      <div className="logopres">
        <LogoIcon />
      </div>
      </LogoWrapper>
      <LogoContainer>
        <Slogan ref={sloganRef} className="extraBold font60">
          Contact
        </Slogan>
        <EmailContainer>
          <h4 className="extraBold font40 purpleColor">Email</h4>
          <a href="mailto:contactplyrs@gmail.com">contactplyrs@gmail.com</a>
          <br />
          <br />
          <h4 className="extraBold font40 purpleColor">Social</h4>
          <p className="semiBold">Facebook </p>
          <p className="semiBold">Instagram</p>
          <a className="semiBold" href="https://www.linkedin.com/in/stephane-dn">Linkedin</a>
          <br />
          <br />
          <h4 className="extraBold font40 purpleColor">Partenaires</h4>
          <p className="semiBold">SevenMates</p>
          <br />
          <br />
        </EmailContainer>
      </LogoContainer>
      <ContactWrapper>
      <img src={ContactSvg} style={{ width: "70%", height: "auto", zIndex: -3 }} alt="Contact image" />
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
  height: 200vh; /* Réduit la hauteur pour éviter le défilement excessif */
  position: relative;

  @media only screen and (max-width: 1640px) {
    height: 100vh;
  }

  @media (max-width: 960px) {
    height: 85vh;
    left: -6rem;
    top: 0rem;
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
