import React from 'react';
import Image from 'next/image'
import styles from '../styles/SareeItem.module.css'
export const SareeItem = ({productCode,material,salePrice,imgUrl}) => {
  return <div className={styles.container}>
          <div className={styles.imgcontainer}>
           <Image src={imgUrl} layout='fill' objectFit='contain'/>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.infoText}><span>Code:</span> {productCode}</p>
            <p className={styles.infoText}><span>Material:</span> {material}</p>
            <p className={styles.infoText}><span>Price :</span>{salePrice}</p>
          </div>
          </div>
};