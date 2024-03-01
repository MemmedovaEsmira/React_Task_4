import React, { useContext, useState } from 'react'
import styles from './outPut.module.scss'
import classNames from 'classnames'
import { ThemeContext } from '../../ThemeContext'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img6 from '../../assets/images/img6.jpg'
import img4 from '../../assets/images/img4.jpg'



interface outPutDataTypes {
  outPut: string,
}

const OutPut: React.FC<outPutDataTypes> = ({ item, removeItem, mappedOutPut, }) => {
  const { theme } = useContext(ThemeContext)
  const [isActive, setIsActive] = useState(false)

  const handleActive = () => {
    setIsActive(prev => !prev)

    if (isActive) {
      item.active = true
    }
     else {
      item.active = false
    }

  }


  return (
    <>

      <div className={styles['output_container']}>
        {theme ?
          <img src={isActive ? img2 : img6} alt="" onClick={handleActive} /> :
          <img src={isActive ? img2 : img3} alt="" onClick={handleActive} />}
        <p className={classNames(styles.output, { [styles.output_active]: isActive })}>{mappedOutPut}</p>
        <img src={img4} alt="" onClick={removeItem} />
      </div>

    </>
  )

}

export default OutPut