import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <div className={style.blocks}>
          <div className={style.block}>
            <p>Logistics X</p>
            <p>Помощь</p>
            <p>Пожаловаться</p>
            <p>+7 (495) 539-55-55</p>
            <button>Задать свой войпрос</button>
          </div>

          <div className={style.block}>
            <p>Главная</p>
            <p>Главная страница</p>
            <p>Что такое Poizon?</p>
            <p>Ссылка на poizon</p>
            <p>Наш пункт выдачи</p>
          </div>

          <div className={style.block}>
            <p>Каталог</p>
            <p>Кроссовки</p>
            <p>Вверхняя одежда</p>
            <p>Нижняя одежда</p>
            <p>Техника</p>
            <p>Другое</p>
          </div>

          <div className={style.block}>
            <p>Оплата и доставка</p>
            <p>Калькулятор</p>
            <p>Определение размера</p>
            <p>Информация о доставке</p>
            <p>Способы оплаты</p>
          </div>

          <div className={style.block}>
            <p>Контакты</p>
            <p>Как с нами связаться?</p>
            <p>Наш пункт выдачи</p>
            <p>Помощь</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
