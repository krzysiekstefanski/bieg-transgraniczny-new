import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Top from "../../atomic/templates/Top/Top"
import Banner from "../../atomic/templates/Banner/Banner"
import Verification from "../../atomic/templates/Verification/Verification"
import Rewards from "../../atomic/templates/Rewards/Rewards"
import Gallery from "../../atomic/templates/Gallery/Gallery"

const TransgranicznyPage = () => {
  const theme = "transgraniczny"

  return (
    <Layout theme={theme}>
      <Top theme={theme} />
      <Banner theme={theme} />
      <Verification theme={theme} />
      <Rewards theme={theme} disabled />
      <Gallery theme={theme} />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default TransgranicznyPage
