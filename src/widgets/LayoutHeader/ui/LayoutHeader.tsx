import React from 'react';
import style from './Header.module.scss';

import Bell from '../../../shared/assets/svg/bell.svg';
import Message from '../../../shared/assets/svg/message.svg';

export const LayoutHeader = () => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.block}>
          <div className={style.logotype}>LOGISTICS </div>

          <nav className={style.navigation}>
            <ul className={style.list}>
              <li>Главная</li>
              <li>Каталог</li>
              <li>Оплата и доставки</li>
              <li>Контакты</li>
            </ul>
          </nav>

          <div className={style.icons}>
            <img className={style.bell} src={Bell} alt="Колокол" />
            <img className={style.message} src={Message} alt="Сообщение" />
          </div>

          <div>
            <button className={style.account}>Личный кабинет</button>
          </div>
        </div>
      </div>
    </header>
  );
};
