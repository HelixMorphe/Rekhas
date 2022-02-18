import React from 'react'
import {useFormik} from 'formik'
import styles from '../styles/Form.module.css'
import CloseIcon from '@mui/icons-material/Close';
// import {useEffect} from 'react'
// import axios from 'axios';
const brandOpt = [
    "Mangalagiri",
    "Coimbatore ",
    "Bengal",
    "Kota",
    "Chanderi",
    "Benaras",
    "Raw Silk",
    "Bedsheets",
    "Tussar",
    "Pathuru",
    "Venkatagiri",
    "Kanchi",
    "Mul-Mul",
    "Block-Print",
    "Maheshwari",
    "Soft-Silk",
    "Narayanpet",
    "Linen",
    "Linen-Fancy"
]
const materialOpt = [
    "Silk-cotton",
    "Pattu",
    "Cotton",
    "Dress-Material",
    "Cotton-Jamdhani",
    "Pure-silk",
    "Benaras Fancy",
    "Tussar",
    "Semi Silk",
    "Shiffon",
    "Crepe"
]
const vendorOpt = [
    "MA-LAXMI",
    "CO-SWASTHIKA",
    "BE-BENGAL HANDLOOMS",
    "HY-Neelkamal",
    "KO-Kotasarees",
    "CH- RiddhimaSarees",
    "BS - Pandey Sarees",
    "BS- Nandini Boutique",
    "RS - Nandini Boutique",
    "KO - Nandini Boutique",
    "NE- P.M. Cotton Centre",
    "JA - Riddhima Sarees",
    "TR - Nandini Boutique",
    "PA - Sridevi",
    "VE - Lakshmipati",
    "VE - Venkataramaya and sons",
    "CT - Oswal Saree Centre",
    "MH- Sainath ",
    "BE - Nandini Boutique",
    "KO - Asif Sarees",
    "SS - Nandini Boutique",
    "NA - Basude and Bros.",
    "LN - Nandini Boutique",
    "CH - Nandini Boutique",
    "SH - Nandini Boutique",
    "CR - Nandini Boutique"
]
const statusOpt = 
[
    "Sold Out",
    "In Stock",
    "Reserved",
    "coming soon"
]

function Form({open,setOpen,data}) {
    
    // console.log(filterOptions)
    const array = ['productCode','description','arrivalDate','costPrice','salePrice','soldPrice','customerName','customerContact','amountPaid','dues']
    const dropDownsOpts = [brandOpt,materialOpt,vendorOpt,statusOpt]
    const dropDownsMenus = [{name: 'brand',items:brandOpt},{name:'material',items: materialOpt},{name: 'vendor',items:vendorOpt},{name: 'status',items:statusOpt}]
    const formik = useFormik({
        initialValues : {
            productCode : '',
            brand : '',	
            material : '',
            description	: '',
            arrivalDate	: '',
            vendor	:'',
            costPrice	:'',
            salePrice	:'',
            soldPrice	:'',
            customerName	:'',
            customerContact	: '',
            dateSold : '',	
            status	: '',
            amountPaid :'',	
            dues :'',
        },
        onSubmit: values => {
            console.log(JSON.stringify(values));
        },
    })
    const handleOpen =()=>{
        setOpen(!open)
      }
  return (
    <div className={styles.container}>
        <div onClick={handleOpen} className={styles.closeContainer}><CloseIcon /></div>
        <div className={styles.formContainer}>
        <form onSubmit={formik.handleSubmit}>
        {array.map((item)=>(
            <div className={styles.inputContainer}>     
            <label htmlFor={item} className={styles.label}>{item.toUpperCase()}</label>
                <input
                className={styles.input}
                id={item}
                name={item}
                type={item}
                onChange={formik.handleChange}
                value={formik.values.item}
            />
            </div>
        ))}
        {dropDownsMenus.map((item)=>(
            <div className={styles.inputContainer}>     
            <label htmlFor={item.name} className={styles.label}>{item.name.toUpperCase()}</label>
            <select id={item.name} name={item.name} onChange={formik.handleChange} className={styles.input} value={formik.values.item}>
                {item.items.map((a)=>(
                    <option value={formik.values.a}>{a}</option>
                ))}
                
            </select>
            </div>
        ))}
        <button type="submit">Submit</button>
     </form>
    </div>
    </div>
  )
}
export default Form