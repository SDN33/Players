import React from "react";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
        <title>Players | Faire du sport n’a jamais été aussi challengeant </title>
        <meta name="description" content="Rejoignez notre communauté sportive dynamique et trouvez des partenaires de jeu pour football, basketball, tennis, et plus encore. Vivez des expériences uniques près de chez vous !" />
        <meta name="keywords" content="football, basket-ball, tennis, padel, badminton, squash, sport, entraînement, compétition, équipe, match, club, athlète, communauté, entraîneur, performance, stratégie, formation, terrain, raquette, ballon, court, équipement, sportif" />
        <meta property="og:title" content="Rejoignez des Partenaires de Jeu | Sports Collectifs et Individuels" />
        <meta property="og:description" content="Rejoignez notre communauté sportive dynamique et trouvez des partenaires de jeu pour football, basketball, tennis, et plus encore. Vivez des expériences uniques près de chez vous !" />
        <meta property="og:image" content="https://res.cloudinary.com/daroyxenr/image/upload/c_thumb,w_200,g_face/v1715685571/Product_Features_Website_oum4io.svg" />
        <meta property="og:url" content="https://players-pearl.vercel.app/" />
        <meta name="twitter:title" content="Rejoignez des Partenaires de Jeu | Sports Collectifs et Individuels" />
        <meta name="twitter:description" content="Rejoignez notre communauté sportive dynamique et trouvez des partenaires de jeu pour football, basketball, tennis, et plus encore. Vivez des expériences uniques près de chez vous !" />
        <meta name="twitter:image" content="https://res.cloudinary.com/daroyxenr/image/upload/c_thumb,w_200,g_face/v1715685571/Product_Features_Website_oum4io.svg" />

      </Helmet>
      <Landing />
    </>
  );
}
