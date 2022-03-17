import Image from "next/image";
import Link from "next/link";
import React from "react";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import styles from "../../styles/SideBar.module.css";

function SideBar({ index }) {
  return (
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
          <Link href="/admin/" passHref>
            <div className={index === 1 ? styles.itemSelected : styles.item}>
              <div className={styles.itemIcon}>
                <DonutLargeOutlinedIcon />
              </div>
              <div>Dashboard</div>
            </div>
          </Link>
          <Link href="/admin/table" passHref>
            <div className={index === 2 ? styles.itemSelected : styles.item}>
              <div className={styles.itemIcon}>
                <ShoppingBagIcon />
              </div>
              <div>Products</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
