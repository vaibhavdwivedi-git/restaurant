import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({ dishList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best taste in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose}>Add New Dish</AddButton>}
      <PizzaList dishList={dishList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get(
    "https://restaurant-three-beige.vercel.app/api/products"
  );
  return {
    props: {
      dishList: res.data,
      admin,
    },
  };
};
