import React from 'react';
import style from './SectionLogistic.module.scss';

export const SectionLogistic = () => {
  return (
    <section className={style.logistic}>
      <div className={style.wrapper}>
        <div className={style.blocks}>
          <div className={style.block}>
            <h1 className={style.title}>Logistics X</h1>
            <p className={style.paragraph}>
              Закажем абсолютную любую позицию из Китая! Одежда, обувь, аксессуары, электроника и
              многое другое! Цены значительно ниже, чем в России.
            </p>
            <div className={style.buttons}>
              <button className={style.catalog}>Перейти к каталогу</button>
              <button className={style.calculator}>Перейти к калькулятору</button>
            </div>
          </div>

          <div>
            <img
              className={style.snicket}
              src="/src/shared/assets/snikents/main.png"
              alt="Главная кросовка года"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
