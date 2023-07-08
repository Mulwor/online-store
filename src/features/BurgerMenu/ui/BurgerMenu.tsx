import React from 'react'
import style from './BurgerMenu.module.scss'

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className={style.burger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  )
}
