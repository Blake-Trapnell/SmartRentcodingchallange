import * as React from "react";
import { Link } from "gatsby";
import Navbar from "../components/navigation/navbar.js";
import Cards from "../components/cards/cards.js";
import "./index.scss";

const IndexPage = () => {
  return (
    <main className={"index--outer-container"}>
      <Navbar></Navbar>
      <Cards/>
      <Link className={"index--mobile-link"}>See All Hardware &#38; Integrations</Link>
    </main>
  )
}

export default IndexPage
