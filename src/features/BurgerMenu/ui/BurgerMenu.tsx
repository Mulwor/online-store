import React from 'react'
import style from './BurgerMenu.module.scss'

export const BurgerMenu = () => {
  // const [nav, setNav] = React.useState(false);
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.logo_image}>
            <h2 className={style.logo}>Logo</h2>
          </div>

          <ul className={style.menu}>
            <li>
              <a href="##">Product</a>
            </li>
            <li>
              <a href="##">About Us</a>
            </li>
            <li>
              <a href="##">Customers</a>
            </li>
            <li>
              <a href="##">Price</a>
            </li>
            <li>
              <a href="##">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
