import React from 'react'
import style from './BurgerMenu.module.scss'

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isAnimating, setIsAnimating] = React.useState(false)

  const toggleBurgerMenu = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setIsOpen(!isOpen)
      setTimeout(() => setIsAnimating(false), 300)
    }
  }

  return (
    <>
      <div
        className={`${style.hamburger} ${isOpen ? style.open : ''} ${
          isAnimating ? style.animating : ''
        }`}
        onClick={toggleBurgerMenu}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>

      {isOpen && (
        <div className={style.menu}>
          <ul>
            <div className={style.block}>
              <h3 className={style.title}>Основные</h3>
              <li>Главная страница</li>
              <li>Каталог товаров</li>
              <li>Калькулятор</li>
              <li>Контакты</li>
            </div>

            <div className={style.block}>
              <h3 className={style.title}>Каталог</h3>
              <li>Избранные</li>
              <li>Корзина товаров</li>
            </div>

            <div className={style.block}>
              <h3 className={style.title}>Личный профиль</h3>
              <li>Аккаунт</li>
              <li>История заказов</li>
              <li>Текущие заказы</li>
              <li>Партнерская программа</li>
            </div>

            <div className={style.block}>
              <h3 className={style.title}>Доп. разделы</h3>
              <li>Faq</li>
              <li>Наши соцсети</li>
            </div>
          </ul>
        </div>
      )}
    </>
  )
}
