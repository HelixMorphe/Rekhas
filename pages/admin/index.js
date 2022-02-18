import {useState} from 'react'
import {Header} from '../../components/Header'
import styles from '../../styles/Admin.module.css'
import CloseIcon from '@mui/icons-material/Close';
import Form from '../../components/Form'
import Link from 'next/link'
const index = ({data}) => {
  const [open,setOpen] = useState(false)
  const [update, setUpdate] = useState(false)
  const handleOpen =()=>{
    setOpen(!open)
  }
  const handleUpdate =()=>{
    setUpdate(!update);
  }
  return (
    <div className={styles.container}>
        <Header sticky={true}/>
        <Link href="/admin/table" >
          <div className={styles.btn}>
            View Database
          </div>
        </Link> 
        <div onClick={handleOpen} className={styles.btn}> Add Record</div>
        <div style={{display : open ? '' : 'none'}}>
          <Form open={open} setOpen={setOpen} data={data}/>
        </div>
        <div onClick={handleUpdate} classBame={styles.btn}> Update Record</div>
        <div style={{display : update ? '' : 'none'}}>
          {/* <Update update={update} setUpdate={setUpdate}/> */}
        </div>     
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