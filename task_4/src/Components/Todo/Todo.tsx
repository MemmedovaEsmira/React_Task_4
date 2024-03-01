import React, { useContext, useState } from 'react';
import Input from '../Input/Input';
import OutPut from '../OutPut/OutPut';
import styles from './todo.module.scss';
import classNames from 'classnames';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { ThemeContext } from '../../ThemeContext';
import img3 from '../../assets/images/img3.jpg';
import img6 from '../../assets/images/img6.jpg'

const Todo = () => {
  // const useTheme = useContext(ThemeContext)
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [input, setInput] = useState('')
  const [outPut, setOutPut] = useState<string[]>([])
  const [count, setCount] = useState(0)

  const handleOutPut = () => {
    setCount(prev => prev + 1)
    const OutPut = [...outPut, { input: input, id: count, active: true }]
    setOutPut(OutPut)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.value = ''
      handleOutPut()
    }
  }

  const removeItem = (inx) => {
    setOutPut(prev => prev.filter((item, index) => index !== inx))
    setCount(prev => prev - 1)
  }

  const filterComplited = () => {
    let complited = outPut.filter((item) => item.active === false)
    complited.length > 0 && setOutPut(complited)
  }


  const filterActive = () => {
    let activeTodo = outPut.filter((item) => item.active === true)
    activeTodo.length > 0 && setOutPut(activeTodo)
  }

  return (

    <>

      <div className={styles['item_container']}>

        <div className={styles['item_container_title']}>
          <h2>T O D O</h2>
          <div className={classNames(styles.icon, { [styles.icon_active]: theme })}>
            {theme === false ?
              <MdDarkMode className={styles.icon_dark} onClick={toggleTheme} /> :
              <MdLightMode className={styles.icon_light} onClick={toggleTheme} />}
          </div>

        </div>

        <div className={classNames(styles['input_container'], { [styles['input_container_dark']]: theme })}>
          {theme ? <img src={img6} alt="" /> : <img src={img3} alt="" />}
          <Input setInput={setInput} onKeyDown={handleKeyDown} />
        </div>

        <div className={classNames(styles['item_container_details'], { [styles['details_dark']]: theme })}>
          {outPut.map((item, index) =>
            <OutPut mappedOutPut={item.input} item={item} setOutPut={setOutPut} outPut={outPut} key={item.id} removeItem={() =>
              removeItem(index)} />)}
          {count > 0 ? <div className={styles['item_container_details_filter_control']}>
            <p>{count} items left</p>
            <p onClick={filterComplited}>Complited</p>
            <p onClick={filterActive}>Active</p>
          </div> : null}
        </div >

      </div>

    </>

  )
}

export default Todo;