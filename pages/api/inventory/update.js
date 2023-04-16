import dbConnect from "../../../util/mongo";
import Inventory from "../../../models/Inventory";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "POST") {
    try {
      const products = req.body;
      products.map((product) => {
        product.ingredient.map((ingrd) => {
          Inventory.findOneAndUpdate(
            { name: ingrd.name },
            { $inc: { amount: -Number(ingrd.amount) } },
            { new: true },
            (err, doc) => {
              if (err) {
                console.log("Error:", err);
              } else {
                console.log("Updated document:", doc);
              }
            }
          );
        });
      });
      res.status(200).json("ok");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
