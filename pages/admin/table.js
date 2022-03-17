import React from "react";
import SideBar from "../../components/admin/SideBar";
import Title from "../../components/admin/Title";
import { Header } from "../../components/Header";
import styles from "../../styles/Table.module.css";
const Table = ({ data }) => {
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      <SideBar index={2} />
      <div className={styles.main}>
        <div className={styles.optionContainer}>
          <div className={styles.option}>Add Product</div>
          <div
            className={styles.option}
            style={{
              color: "rgb(4, 41, 122)",
              backgroundColor: "rgb(208, 242, 255)",
            }}
          >
            Update Product
          </div>
          <div
            className={styles.option}
            style={{
              color: "rgb(122, 79, 1)",
              backgroundColor: "rgb(255, 247, 205)",
            }}
          >
            Delete Product
          </div>
        </div>
        <Title data={data} />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://retail-three.vercel.app/api/products`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Table;
