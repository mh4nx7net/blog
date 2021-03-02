import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//var of ThirdPage
const ThirdPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi it's for page 3 guys</h1>
    <p>Welcome to page 3</p>
    <Link to="/">root `/` is going back of the pages</Link>
  </Layout>
)
//ThirdPage 's going to set as default
export default ThirdPage
