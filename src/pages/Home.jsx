import React from "react";
import Herosection from "../components/Herosection";
import Third from "../components/Third";
import First from "../components/First";
import Second from "../components/Second";
import Fourth from "../components/Fourth";
import Fifth from "../components/Fifth";
import Seventh from "../components/Seventh";
import Eight from "../components/Eight";
import Nine from "../components/Nine";
import Sixth from "../components/Sixth";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Herosection />
      <First text="Make | Meet | Marry" />
      <Second />
      <First text="Browser Partner Profiles By" />
      <Third />
      <Fourth />
      <Fifth />
      <First text="Membership Plan" />
      <Sixth />
      <Seventh />
      <Eight />
      <Nine />
    </Layout>
  );
};

export default Home;
