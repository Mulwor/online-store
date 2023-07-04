import React from 'react';
import style from './SectionOrder.module.scss';

export const SectionOrder = () => {
  return (
    <section className={style.order}>
      <div className={style.wrapper}>
        <div className={style.blocks}>
          <div className={style.row}>
            <h2 className={style.title}>Что кладется в заказ?</h2>
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
                Для чего мы это делаем? В первую очередь данный печатный носитель сможет вам помочь
                подвердить подленность вещи
              </p>
            </div>
          </div>

          <div>
            <img
              className={style.certificate}
              src="/src/shared/assets/photos/certificate.png"
              alt="Здесь должен быть сертификат"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
