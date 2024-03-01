// import React, { useContext } from 'react'
import styles from './input.module.scss'
// import { ThemeContext } from '../../ThemeContext'
import { useSelector } from 'react-redux'


interface input {
  id: number;
  text: string;
  setInp: (value: string) => void,

}


const Input: React.FC<input> = ({ setInp, onKeyDown  }) => {
  // const { theme } = useContext(ThemeContext)
  const theme=useSelector(state=>state.activeSliceReducer.theme)

  console.log(theme)
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInp(e.target.value)
  }

  return (

    <>
      <input  type="text" placeholder='Create a new toto...' className={styles.input} onChange={handleInput} onKeyDown={onKeyDown} />
    </>

  )
}

export default Input