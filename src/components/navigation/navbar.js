import { Link } from "gatsby";
import * as React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className={"navbar--outer-container"}>
        <h1 className={"navbar--page-title"}>Compatible Hardware <br/> &#38; Integrations</h1>
        <Link className={"navbar--link"}>See All Hardware <br/> &#38; Integrations</Link>
    </nav>
  )
}

export default Navbar
