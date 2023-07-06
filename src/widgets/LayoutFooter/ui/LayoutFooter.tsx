import style from './Footer.module.scss';

export const LayoutFooter = () => {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <div className={style.blocks}>
          <div className={style.block}>
            <div className={style.logotype}>LOGISTICS </div>
            <p className={style.paragraph}>Телефон для связи:</p>
            <p className={style.number}>+7 (495) 539-55-55</p>
            <button className={style.question}>Задать свой войпрос</button>
          </div>

          <div className={style.block}>
            <h4 className={style.title}>Главная</h4>

            <nav>
              <ul className={style.items}>
                <li className={style.item}>Главная страница</li>
                <li className={style.item}>Что такое Poizon?</li>
                <li className={style.item}>Ссылка на poizon</li>
                <li className={style.item}>Наш пункт выдачи</li>
              </ul>
            </nav>
          </div>

          <div className={style.block}>
            <h4 className={style.title}>Каталог</h4>
            <nav>
              <ul className={style.items}>
                <li className={style.item}>Кроссовки</li>
                <li className={style.item}>Вверхняя одежда</li>
                <li className={style.item}>Нижняя одежда</li>
                <li className={style.item}>Техника</li>
                <li className={style.item}>Другое</li>
              </ul>
            </nav>
          </div>

          <nav className={style.block}>
            <h4 className={style.title}>Оплата и доставка</h4>

            <nav>
              <ul className={style.items}>
                <li className={style.item}>Калькулятор</li>
                <li className={style.item}>Определение размера</li>
                <li className={style.item}>Информация о доставке</li>
                <li className={style.item}>Способы оплаты</li>
              </ul>
            </nav>
          </nav>

          <div className={style.block}>
            <h4 className={style.title}>Контакты</h4>

            <nav>
              <ul className={style.items}>
                <li className={style.item}>Как с нами связаться?</li>
                <li className={style.item}>Наш пункт выдачи</li>
                <li className={style.item}>Помощь</li>
                <li className={style.item}>FAQ</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
