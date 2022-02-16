import React from 'react'
import Image from 'next/image'
import styles from '../styles/Contact.module.css'
import PhoneIcon from '@mui/icons-material/Phone';
import MapIcon from '@mui/icons-material/Map';
const Contact = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgcontainer}>
            <Image src = '/img/RC_Logo.png' layout='fill' objectFit='contain'/>
          </div>
        <div className={styles.subTitle}>Handmade . Handpicked</div>
        <div className={styles.contactsContainer}>
          <div className={styles.item}>
            <PhoneIcon />
            <p>950 220 8396</p>
          </div>
          <div className={styles.item}>
          <MapIcon />
            D701, Whistling Woods, Gandipet, Hyderabad
          </div>
          </div>
        </div>
  )
}

export default Contact