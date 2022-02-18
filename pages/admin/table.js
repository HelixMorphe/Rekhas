import React from 'react'
import Title from '../../components/admin/Title'
import {Header} from '../../components/Header'
const Table = ({data}) => {
  return (
    <div>
        <Header />
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

export default Table