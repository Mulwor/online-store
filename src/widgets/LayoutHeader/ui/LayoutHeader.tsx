import style from './Header.module.scss'

export const LayoutHeader = () => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.block}>
          <p className={style.logotype}>LOGISTICS </p>

          <nav className={style.navigation}>
            <ul className={style.list}>
              <li>Главная</li>
              <li>Каталог</li>
              <li>Оплата и доставки</li>
              <li>Контакты</li>
            </ul>
          </nav>

          <button className={style.account}>Личный кабинет</button>
        </div>
      </div>
    </header>
  )
}
