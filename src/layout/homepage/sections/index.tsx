import React from 'react';
import style from './Sections.module.scss';

const Sections = () => {
  return (
    <>
      <section className={style.logistic}>
        <div className={style.wrapper}>
          <div className={style.blocks}>
            <div>
              <h1 className={style.title}>Logistics X</h1>
              <p className={style.paragraph}>
                Закажем абсолютную любую позицию из Китая! Одежда, обувь, аксессуары, электроника и
                многое другое! Цены значительно ниже, чем в России.
              </p>
              <button className={style.catalog}>Перейти к каталогу</button>
              <button className={style.calculator}>Перейти к калькулятору</button>
            </div>

            <div>
              <img
                className={style.snicket}
                src="/src/assets/snikents/main.png"
                alt="Главная кросовка года"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={style.order}>
        <div className={style.wrapper}>
          <div className={style.blocks}>
            <div>
              <h2 className={style.title}>что кладется в заказ?</h2>
              <p className={style.paragraph}>
                Мы решили как-то выделить наших клиентов на фоне остальных
              </p>
              <div className={style.block}>
                <h3>Как мы упаковываем посылки?</h3>
                <p>
                  Каждый товар покупаемый через нас кладется сертификат и стикер сведетельствующий о
                  приобретении позиции именно через наш сервис.
                </p>
                <p>
                  Для чего мы это делаем? В первую очередь данный печатный носитель сможет вам
                  помочь подвердить подленность вещи
                </p>
              </div>
            </div>

            <div>
              <img
                className={style.certificate}
                src="/src/assets/photos/certificate.png"
                alt="Здесь должен быть сертификат"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={style.service}>
        <div className={style.wrapper}>
          <div className={style.block}>
            <div className={style.indent}>
              <h2 className={style.title}>ЧТО ТАКОЕ POIZON?</h2>

              <p className={style.explanation}>СЕЙЧАС МЫ ВСЕ ОБЪЯСНИМ</p>

              <div className={style.row}>
                <div className={style.img}>
                  <img className={style.poizon} src="/src/assets/photos/poizon.png" alt="Poizon" />
                </div>

                <div className={style.box}>
                  <p className={style.paragraph}>
                    В данном видеоролике мы подробно рассказываем о таких маркетплейсах, как Poizon,
                    95, Alibaba.
                  </p>
                  <p className={style.paragraph}>
                    Какой путь проходят вещи перед тем как попасть в руки наших клиентов? -
                  </p>
                  <p className={style.paragraph}>Вещь которая ко мне придет точно оригинал?</p>
                  <p className={style.paragraph}>И главный вопрос почему именно Logistics X?</p>

                  <p className={style.paragraph}>
                    На все эти вопросы вы можете получить ответ, посмотрев ролик!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;
