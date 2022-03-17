import { useEffect, useState } from "react";
import millify from "millify";
import styles from "../../styles/Admin.module.css";
import CloseIcon from "@mui/icons-material/Close";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import TimelineIcon from "@mui/icons-material/Timeline";
import Form from "../../components/Form";
import Link from "next/link";
import Image from "next/image";
import PieChart from "../../components/admin/PieChart";
import BarChart from "../../components/admin/BarChart";
const Index = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const [totalSales, setTotalSales] = useState(0);
  var sales = 0;
  useEffect(() => {
    data.map((item) => {
      setTotalSales(sales + Number(item.salePrice.replace(/[Rs.,]/g, "")));
      sales = sales + Number(item.salePrice.replace(/[Rs.,]/g, ""));
    });
  }, []);
  // console.log(totalSales);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleUpdate = () => {
    setUpdate(!update);
  };
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.logoTitle}>Rekhas Collection</div>
        <div className={styles.userContainer}>
          <div className={styles.userLogo}>
            <Image src="/img/avatar.svg" layout="fill" alt="avatar" />
          </div>
          Pranaya Reddy
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.contentWrapper}>
            <div className={styles.itemSelected}>
              <div className={styles.itemIcon}>
                <DonutLargeOutlinedIcon />
              </div>
              <div>Dashboard</div>
            </div>
            <Link href="/admin/table" passHref>
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <ShoppingBagIcon />
                </div>
                <div>Products</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.mainWrapper}>
          <div className={styles.mainTitle}>Good Morning!</div>
          <div className={styles.boxWrapper}>
            <div className={styles.btn}>
              <div className={styles.detailsContainer}>
                <div className={styles.circle}>
                  <TimelineIcon />
                </div>
                <div className={styles.detailTitle}>{`Rs.${millify(
                  totalSales
                )}`}</div>
                <div className={styles.detailSubTitle}>Total Sales</div>
              </div>
            </div>
            <div className={styles.btn}>
              <div className={styles.detailsContainer}>
                <div className={styles.circle}>
                  <MonetizationOnIcon />
                </div>
                <div className={styles.detailTitle}>
                  {`Rs.${millify(totalSales / 2)}`}
                </div>
                <div className={styles.detailSubTitle}>Net Revenue</div>
              </div>
            </div>
            <Link href="/admin/table" passHref>
              <div className={styles.btn}>
                <div className={styles.detailsContainer}>
                  <div className={styles.circle}>
                    <LibraryBooksIcon />
                  </div>
                  {/* <div className={styles.detailTitle}>250K</div> */}
                  <div className={styles.detailTitle}>View Database</div>
                </div>
              </div>
            </Link>
            <div onClick={handleOpen} className={styles.btn}>
              <div className={styles.detailsContainer}>
                <div className={styles.circle}>
                  <AddBoxIcon styles={{ color: "white" }} />
                </div>
                Add Product
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainWidgets}>
          <div className={styles.widget1}>{/* <BarChart data={data} /> */}</div>
          <div className={styles.widget2}>
            <PieChart data={data} />
          </div>
        </div>
        <div style={{ display: open ? "" : "none" }}>
          <Form open={open} setOpen={setOpen} data={data} />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }
  // Fetch data from external API
  const res = await fetch(`https://rekhas.vercel.app/api/products`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default Index;
