import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Box from "../../atomic/atoms/Box/Box"

const TransgranicznyZapisyPage = () => {
  const theme = "transgraniczny"

  return (
    <Layout theme={theme}>
      <Box height="1000px" heightLG="calc(100vh - 277px)" overflow="hidden">
        <iframe
          id="lista-startowa-ramka"
          title="Zapisy na bieg"
          width="100%"
          height="100%"
          src="https://zapisy.domtel-sport.pl/8-gryfinski-transgraniczny-festiwal-biegowy-c10564"
          style={{ border: "none" }}
        ></iframe>
      </Box>
    </Layout>
  )
}

export const Head = () => <Seo title="Zapisy" />

export default TransgranicznyZapisyPage
