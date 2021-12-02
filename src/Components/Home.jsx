import React, { useState } from "react";
import "./Home.css";
import myAvatar from "../assets/avatarFanny-01.png";
import phone from "../assets/phone-01.png";
import mail from "../assets/mail-01.png";
import house from "../assets/home-01.png";

export default function Home() {
  const [active, setActive] = useState(false);
  const handlePres = () => setActive(!active);

  return (
    <div>
      <section className="presentation">
        <button
          type="button"
          className={active ? "avatar-anim" : "avatar"}
          onClick={handlePres}
        >
          <img src={myAvatar} alt="Fanny avatar" className="my-avatar" />
        </button>
        <p className={active ? "pres" : "pres-hide"}>
          Bienvenue! Je suis Fanny, junior dev, graphiste, curieuse et toujours
          motivée pour apprendre de nouvelles choses. J'ai l'habitude de me
          former sur de nouveaux logiciels, et j'ai hâte d'apprendre d'autres
          langages.
          <br />
          J'aime les chats, faire du crochet, World of Warcraft et jouer en VR à
          Beat Saber.
        </p>
      </section>
      <h1 className="dev-title">Développeuse Web</h1>
      <section className="contact">
        <button type="button">
          <img src={mail} alt="mail" />
        </button>
        <p>fanny.lagadec.pro@gmail.com |</p>
        <button type="button">
          <img src={phone} alt="phone" />
        </button>
        <p>06 81 52 77 01</p>
        <button type="button">
          <img src={house} alt="home" />
        </button>
        <p>Chartres</p>
      </section>
    </div>
  );
}
