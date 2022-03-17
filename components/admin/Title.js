import React from "react";
import styles from "../../styles/AdminTitle.module.css";
import Table from "rc-table";
const Title = ({ data }) => {
  const cols = [
    {
      title: "productCode",
      dataIndex: "productCode",
      key: "productCode",
      fixed: "left",
      width: 100,
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
      width: 100,
    },
    {
      title: "brand",
      dataIndex: "brand",
      key: "brand",
      width: 100,
    },
    {
      title: "material",
      dataIndex: "material",
      key: "material",
      width: 100,
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
      width: 100,
    },
    {
      title: "arrivalDate",
      dataIndex: "arrivalDate",
      key: "arrivalDate",
      fixTitle: true,
      width: 100,
    },
    {
      title: "vendor",
      dataIndex: "vendor",
      key: "vendor",
      width: 100,
    },
    {
      title: "costPrice",
      dataIndex: "costPrice",
      key: "costPrice",
      width: 100,
    },
    {
      title: "salePrice",
      dataIndex: "salePrice",
      key: "salePrice",
      width: 100,
    },
    {
      title: "soldPrice",
      dataIndex: "soldPrice",
      key: "soldPrice",
      width: 100,
    },
    {
      title: "customerName",
      dataIndex: "customerName",
      key: "customerName",
      width: 100,
    },
    {
      title: "customerContact",
      dataIndex: "customerContact",
      key: "customerContact",
      width: 100,
    },
    {
      title: "dateSold",
      dataIndex: "dateSold",
      key: "dateSold",
      width: 100,
    },

    {
      title: "amountPaid",
      dataIndex: "amountPaid",
      key: "amountPaid",
      width: 100,
    },
    {
      title: "dues",
      dataIndex: "dues",
      key: "dues",
      width: 100,
    },
    {
      title: "imgUrl",
      dataIndex: "imgUrl",
      key: "imgUrl",
      width: 100,
    },
  ];

  const tweakedData = data.map((item) => ({ ...item, key: item._id }));

  tweakedData.sort(function (a, b) {
    return parseInt(b.productCode) - parseInt(a.productCode);
  });
  return (
    <div>
      <div>
        <Table columns={cols} data={tweakedData} />
      </div>
    </div>
  );
};

export default Title;
