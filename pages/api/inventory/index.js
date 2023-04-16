import dbConnect from "../../../util/mongo";
import Inventory from "../../../models/Inventory";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token;

  await dbConnect();

  if (method === "GET") {
    try {
      const products = await Inventory.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("Not authenticated!");
    }
    try {
      console.log(req.body);
      const product = await Inventory.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
