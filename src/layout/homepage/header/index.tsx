import React from 'react';
import style from './Header.module.scss';

import Bell from '../../../assets/svg/bell.svg';
import Message from '../../../assets/svg/message.svg';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.headerWrapper}>
          <div className={style.logotype}>LOGISTICS X</div>

          <nav className={style.list}>
            <ul className={style.navigation}>
              <li>Главная</li>
              <li>Каталог</li>
              <li>Оплата и доставки</li>
              <li>Контакты</li>
            </ul>
          </nav>

          <div className={style.icons}>
            <img className={style.icon1} src={Bell} alt="Колокол" />
            <img className={style.icon2} src={Message} alt="Сообщение" />
          </div>

          <div>
            <button className={style.signIn}>Личный кабинет</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
