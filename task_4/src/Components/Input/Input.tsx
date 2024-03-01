import React, { useContext } from 'react'
import styles from './input.module.scss'
import { ThemeContext } from '../../ThemeContext'


interface input {
  id: number;
  text: string;
  setInp: (value: string) => void,

}


const Input: React.FC<input> = ({ setInp }) => {
  const { theme } = useContext(ThemeContext)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInp(e.target.value)
  }

  return (

    <>
      <input className={styles.input} type="text" placeholder='Create a new toto...' onChange={handleInput}  />
    </>

  )
}

export default Input