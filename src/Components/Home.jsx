import React, { useState } from "react";
import "./Home.css";
import myAvatar from "../assets/avatarFanny-01.png";
import phone from "../assets/phone-01.png";
import mail from "../assets/mail-01.png";
import house from "../assets/home-01.png";

export default function Home() {
  const [active, setActive] = useState(false);
  const handlePres = () => setActive(!active);
  const [contact, setContact] = useState(false);
  const handleContact = () => setContact(!contact);

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
        <div className="contact-block">
          <button type="button" onClick={handleContact}>
            <img src={mail} alt="mail" />
          </button>
          <p className={contact ? "p-active" : "p-hide"}>
            fanny.lagadec.pro@gmail.com
          </p>
        </div>
        <div className="contact-block">
          <button type="button" onClick={handleContact}>
            <img src={phone} alt="phone" />
          </button>
          <p className={contact ? "p-active" : "p-hide"}>06 81 52 77 01</p>
        </div>
        <div className="contact-block">
          <button type="button" onClick={handleContact}>
            <img src={house} alt="home" />
          </button>
          <p className={contact ? "p-active" : "p-hide"}>Chartres</p>
        </div>
      </section>
    </div>
  );
}
