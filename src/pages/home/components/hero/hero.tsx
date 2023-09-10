import React from "react";
import "./hero.Module.scss";

export default function Hero() {
  return (
    <div className="hero__container">
      <div className="container__main">
        <div className="container__image" />
        <div className="container__body">
          <label className="container__title">
            The Bright Future of Web 3.0?
          </label>
          <div className="container__text__area">
            <p className="container__text__area__text">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="container__text__area__button">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="container__side">
        <label className="container__side__text">New</label>
        <div className="container__news__card">
          <label className="container__news__card__title">
            Hydrogen VS Electric Cars
          </label>
          <label className="container__news__card__text">
            Will hydrogen-fueled cars ever catch up to EVs?
          </label>
        </div>

        <div className="container__side__separator" />

        <div className="container__news__card">
          <label className="container__news__card__title">
            The Downsides of AI Artistry
          </label>
          <label className="container__news__card__text">
            What are the possible adverse effects of on-demand AI image
            generation?
          </label>
        </div>

        <div className="container__side__separator" />

        <div className="container__news__card">
          <label className="container__news__card__title">
            Is VC Funding Drying Up?
          </label>
          <label className="container__news__card__text">
            Private funding by VC firms is down 50% YOY. We take a lok at what
            that means.
          </label>
        </div>
      </div>
    </div>
  );
}
