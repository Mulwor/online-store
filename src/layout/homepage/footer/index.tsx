import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <div className={style.blocks}>
          <div className={style.block}>
            <div className={style.logotype}>LOGISTICS </div>
            <p className={style.paragraph}>Связаться можно по телефону</p>
            <p className={style.number}>+7 (495) 539-55-55</p>
            <button>Задать свой войпрос</button>
          </div>

          <div className={style.block}>
            <h4 className={style.title}>Главная</h4>
            <p className={style.paragraph}>Главная страница</p>
            <p className={style.paragraph}>Что такое Poizon?</p>
            <p className={style.paragraph}>Ссылка на poizon</p>
            <p className={style.paragraph}>Наш пункт выдачи</p>
          </div>

          <div className={style.block}>
            <h4 className={style.title}>Каталог</h4>
            <p className={style.paragraph}>Кроссовки</p>
            <p className={style.paragraph}>Вверхняя одежда</p>
            <p className={style.paragraph}>Нижняя одежда</p>
            <p className={style.paragraph}>Техника</p>
            <p className={style.paragraph}>Другое</p>
          </div>

          <div className={style.block}>
            <h4 className={style.title}>Оплата и доставка</h4>
            <p className={style.paragraph}>Калькулятор</p>
            <p className={style.paragraph}>Определение размера</p>
            <p className={style.paragraph}>Информация о доставке</p>
            <p className={style.paragraph}>Способы оплаты</p>
          </div>

          <div className={style.block}>
            <h4 className={style.title}>Контакты</h4>
            <p className={style.paragraph}>Как с нами связаться?</p>
            <p className={style.paragraph}>Наш пункт выдачи</p>
            <p className={style.paragraph}>Помощь</p>
            <p className={style.paragraph}>FAQ</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
