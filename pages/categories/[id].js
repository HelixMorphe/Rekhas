import React from 'react'
import { useState,useEffect } from 'react';
import { SareeItem } from '../../components/SareeItem';
import { useRouter } from 'next/router'
import styles from '../../styles/BrandPage.module.css'
const Place = ({data}) => {
  const [mat,setMat] = useState();
  // let mat = 0;
  const router = useRouter();
  var x = data.filter((item)=>(item.brand === `${router.query.id}`));
  const [items,setItems] = useState(x);

 
  const unique = [...new Set(x.map(item => item.material))];
  

  const handleMaterial = (mater)=>{
      mat = unique.indexOf(mater)
      setMat(mat)
      var list = x.filter((item)=>(item.material === `${mater}`));
      setItems(list)
  }
    
  return <div className={styles.container}>
            <h2>{router.query.id}</h2>
            <div className={styles.filterContainer}>
            {unique.map((item,index)=>(
              (index === mat) ? 
              <div className={styles.selectedfilterOptions} key={index} onClick={()=>{handleMaterial(item)}}>
                <p>{item}</p>
              </div> :
              <div className={styles.filterOptions} key={index} onClick={()=>{handleMaterial(item)}}>
                <p>{item}</p>
              </div>
            ))}
            </div>

            {items.map((item)=>(
              <SareeItem 
                key = {item._id}
                productCode = {item.productCode}
                material = {item.material}
                salePrice = {item.salePrice}
                imgUrl = '/img/1.jpg'
              />
            )
            )}
          </div>
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/products`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
export default Place