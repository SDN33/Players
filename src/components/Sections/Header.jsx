import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import QuotesIcon from "../../assets/svg/Quotes";
import LogoIcon from "../../assets/svg/LogoLarge";




export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div style={{ textAlign: 'center' }}>
          <LogoIcon/>
          <p className="font20 semiBold soustitre">Faire du sport n’a jamais été aussi challengeant</p>
          <br></br>
          <h4 className="extraBold font60 slogan">Trouvez facilement des joueurs près de chez vous !</h4>
          <BtnWrapper>
            <FullButton title="Newsletter" />
          </BtnWrapper>
        </div>
      </LeftSide>



      <RightSide>
        <ImageWrapper>
        <img src="https://res.cloudinary.com/daroyxenr/image/upload/v1715700185/Untitled-design-5--unscreen_vg0uol.gif" style={{ transform: "scale(1.5)" }} />
          <BackgroundSVG src="https://res.cloudinary.com/daroyxenr/image/upload/v1715699281/Untitled_design_ysobj2.svg" alt="Background SVG" />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>"Après ma retraite sportive, j'ai ressenti un vide sans l'adrénaline des compétitions et la camaraderie des entraînements. Alors j'ai créé Players !"</em>
              </p>
              <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}>Stéphane Dei-negri | Créateur de Players</p>
            </div>
          </QuoteWrapper>
        </ImageWrapper>
      </RightSide>
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
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  bottom: 80px;
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
  bottom: 80px;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  position: relative;
  left: 50%;
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
  bottom: -78px;
  max-width: 339px;
  padding: 30px;
  z-index: 99;
  max-height: 266px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: relative;
  left: -20px;
  top: -100px;
`;


const BackgroundSVG = styled.img`
  position: absolute;
  left: 8rem;
  bottom: -10rem;
  width: 100%;
  height: auto;
  z-index: -1;
`;
