import React from "react";
import styled, { keyframes } from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import QuotesIcon from "../../assets/svg/Quotes";
import LogoIcon from "../../assets/svg/LogoLarge";
import AndroidStoreImage from "../../assets/img/androidstoreicon.png";
import AppleStoreImage from "../../assets/img/applestoreicon.png";

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
            <FullButton title="S'inscrire" />
          </BtnWrapper>
        </div>
        <StoreiconsWrapper>
            <img src={AndroidStoreImage} alt="Android Store Icon" style={{ width: '148%', maxWidth: '200px', marginTop: '0px', position: 'relative', bottom: '-23rem', left: "-24rem" }} />
            <img src={AppleStoreImage} alt="Apple Store Icon" style={{ width: '143%', maxWidth: '180px', marginLeft: '0px', position: 'relative', bottom: '-16rem', left: "-16rem" }} />
        </StoreiconsWrapper>
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

const StoreiconsWrapper = styled.div`

`;
