import React from "react";
import Link from "next/link";
import { useState } from "react";
import { SareeItem } from "../../components/SareeItem";
import { useRouter } from "next/router";
import styles from "../../styles/BrandPage.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Place = ({ data }) => {
  const [mat, setMat] = useState();
  // let mat = 0;
  const router = useRouter();
  var x = data.filter(
    (item) => item.brand === `${router.query.id}` && item.imgUrl
  );
  const [items, setItems] = useState(x); //filter items with imgUrl

  const unique = [...new Set(x.map((item) => item.material))];

  const handleMaterial = (mater) => {
    mat = unique.indexOf(mater);
    setMat(mat);
    console.log(items);
    var list = x.filter((item) => item.material === `${mater}`);
    setItems(list);
    console.log(list, "List");
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <Link href="/" passHref>
            <div className={styles.headerItem}>
              <ArrowBackIcon />
            </div>
          </Link>

          <div className={styles.headerItem}>
            <h2 className={styles.title}>{router.query.id.toUpperCase()}</h2>
          </div>
          <div className={styles.headerItem}></div>
        </div>
      </div>
      <div className={styles.filterContainer}>
        {unique.map((item, index) =>
          index === mat ? (
            <div
              className={styles.selectedfilterOptions}
              key={index}
              onClick={() => {
                handleMaterial(item);
              }}
            >
              <p>{item}</p>
            </div>
          ) : (
            <div
              className={styles.filterOptions}
              key={index}
              onClick={() => {
                handleMaterial(item);
              }}
            >
              <p>{item}</p>
            </div>
          )
        )}
      </div>

      {items.map((item) => (
        <SareeItem
          key={item._id}
          productCode={item.productCode}
          material={item.material}
          salePrice={item.salePrice}
          imgUrl={item.imgUrl.substring(
            item.imgUrl.indexOf("https"),
            item.imgUrl.indexOf(")")
          )}
        />
      ))}
    </div>
  );
};
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://rekhas.vercel.app/api/products`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const category = [
    "Mangalagiri",
    "Coimbatore",
    "Kota",
    "Soft-Silk",
    "Bengal",
    "Venkatagiri",
  ];
  const paths = category.map((item) => ({
    params: { id: item },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
export default Place;
