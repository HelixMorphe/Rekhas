import React, { useState } from "react";
import { useFormik } from "formik";
import styles from "../styles/Form.module.css";
import CloseIcon from "@mui/icons-material/Close";
// import {useEffect} from 'react'
import axios from "axios";
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
  "Linen-Fancy",
];
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
  "Crepe",
];
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
  "CR - Nandini Boutique",
];
const statusOpt = ["Sold Out", "In Stock", "Reserved", "coming soon"];

function Form({ open, setOpen, data }) {
  // console.log(filterOptions)
  const [img, setImg] = useState("");
  const [imgUrll, setImgUrl] = useState("");
  const array = [
    "productCode",
    "description",
    "arrivalDate",
    "costPrice",
    "salePrice",
    "soldPrice",
    "customerName",
    "customerContact",
    "amountPaid",
    "dues",
  ];
  const dropDownsOpts = [brandOpt, materialOpt, vendorOpt, statusOpt];
  const dropDownsMenus = [
    { name: "brand", items: brandOpt },
    { name: "material", items: materialOpt },
    { name: "vendor", items: vendorOpt },
    { name: "status", items: statusOpt },
  ];
  const formik = useFormik({
    initialValues: {
      productCode: "",
      brand: "",
      material: "",
      description: "",
      arrivalDate: "",
      vendor: "",
      costPrice: "",
      salePrice: "",
      soldPrice: "",
      customerName: "",
      customerContact: "",
      dateSold: "",
      status: "",
      amountPaid: "",
      dues: "",
    },
    onSubmit: async (values) => {
      let result = values;
      result.imgUrl = imgUrll;
      try {
        axios.post(`https://rekhas.vercel.app/api/products`, result);
      } catch (err) {
        alert(arr);
      }
    },
  });
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleImg = (e) => {
    setImg(e.target.files[0]);
  };
  const handleImgSub = async () => {
    const form = new FormData();
    form.append("file", img);
    form.append("upload_preset", "einoyqyf");
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dbrfc0ryp/image/upload",
        form
      );
      setImgUrl(res.data.url);
      alert("success");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div onClick={handleOpen} className={styles.closeContainer}>
          <CloseIcon />
        </div>
        <form onSubmit={formik.handleSubmit}>
          {array.map((item, index) => (
            <div className={styles.inputContainer} key={index}>
              <label htmlFor={item} className={styles.label}>
                {item.toUpperCase()}
              </label>
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
          {dropDownsMenus.map((item, index) => (
            <div className={styles.inputContainer} key={index}>
              <label htmlFor={item.name} className={styles.label}>
                {item.name.toUpperCase()}
              </label>
              <select
                id={item.name}
                name={item.name}
                onChange={formik.handleChange}
                className={styles.input}
                value={formik.values.item}
              >
                {item.items.map((a, index) => (
                  <option value={formik.values.a} key={index}>
                    {a}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <div className={styles.imgUpload}>
            <input
              type="file"
              className={styles.fileInput}
              onChange={(event) => handleImg(event)}
            />
            <div onClick={handleImgSub} className={styles.uploadButton}>
              Upload
            </div>
          </div>
          <div className={styles.submitContainer}>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
