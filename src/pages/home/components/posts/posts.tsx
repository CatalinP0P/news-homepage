import React from "react";
import "./posts.Module.scss";
import retroPC from "../../../../assets/images/image-retro-pcs.jpg";
import gamingGrowth from "../../../../assets/images/image-gaming-growth.jpg";
import topLaptops from "../../../../assets/images/image-top-laptops.jpg";

export default function Posts() {
  return (
    <div className="posts__container">
      <div className="posts__container__item">
        <div
          className="posts__container__item__image"
          style={{
            backgroundImage: `url(${retroPC})`,
          }}
        />
        <div className="posts__container__item__body">
          <label className="posts__container__item__body__number">01</label>
          <label className="posts__containter__item__body__title">
            Reviving retro PCs
          </label>
          <p className="posts__container__item__body__text">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>

      <div className="posts__container__item">
        <div
          className="posts__container__item__image"
          style={{
            backgroundImage: `url(${topLaptops})`,
          }}
        />
        <div className="posts__container__item__body">
          <label className="posts__container__item__body__number">02</label>
          <label className="posts__containter__item__body__title">
            Top 10 Laptops of 2022
          </label>
          <p className="posts__container__item__body__text">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>

      <div className="posts__container__item">
        <div
          className="posts__container__item__image"
          style={{
            backgroundImage: `url(${gamingGrowth})`,
          }}
        />
        <div className="posts__container__item__body">
          <label className="posts__container__item__body__number">03</label>
          <label className="posts__containter__item__body__title">
            The growth of Gaming
          </label>
          <p className="posts__container__item__body__text">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
