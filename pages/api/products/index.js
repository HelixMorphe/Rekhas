import dbConnect from "../../../util/dbConnect.js";
import Product from "../../../models/Product.js";
export default async function handler(req, res) {
  const { method } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const product = await Product.find();
      res.status(200).json(product);
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  }
  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
      console.log(req.body)
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  }
}
