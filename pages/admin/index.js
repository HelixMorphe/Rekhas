import React from 'react'
import {Header} from '../../components/Header'
import Title from '../../components/admin/Title'
import styles from '../../styles/Admin.module.css'
const index = ({data}) => {
  return (
    <div className={styles.container}>
        <Header sticky={false}/>
        <Title data={data} />
        
    </div>
  )
}
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://retail-three.vercel.app/api/products`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
export default index