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
        <meta
          name="description"
          content="Rejoignez notre communauté dynamique de joueurs et vivez des expériences uniques.
          Découvrez des partenaires de jeu, prêts à partager des moments inoubliables lors de matchs près de chez vous !
          Que vous soyez un amateur de football, basketball ou d'un sport de raquette, vous trouverez votre place parmi nous.
          Rencontrez de nouvelles personnes et dépassez-vous sur le terrain."
        />
        <meta
          name="keywords"
          content="football, basket-ball, tennis, padel, badminton, squash, sport, entraînement, compétition, équipe, match, club, athlète, jeunes, communauté, entraîneur, performance, technique, stratégie, formation, terrain, raquette, ballon, court, équipement, sportif, sports collectifs, sports individuels, loisirs sportifs"
        />

      </Helmet>
      <Landing />
    </>
  );
}
