// import React, { useState } from 'react'
import Todo from '../../Todo/Todo'
import styles from './home.module.scss'
// import { ThemeContext } from '../../../ThemeContext'
import classNames from 'classnames'

import img1 from '../../../assets/images/img1.jpg'
import img5 from "../../../assets/images/img5.jpg"
import { useSelector } from 'react-redux'

const Home = () => {
  const theme=useSelector(state=>state.activeSliceReducer.theme)

  return (
    <>
      <div className={classNames(styles.container, { [styles.light_mode]: theme })}>
        <div className={styles["container_bg_image"]}>
          {theme ? <img src={img5} alt="" /> : <img src={img1} alt="" />}
          {/* <ThemeContext.Provider value={{ theme,toggleTheme }}> */}
            <Todo />
          {/* </ThemeContext.Provider> */}
        </div>

      </div>
    </>
  )
}

export default Home;