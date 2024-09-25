import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Box from "../../atomic/atoms/Box/Box"
import styled from "styled-components"

const Wrapper = styled(Box)`
  height: 3930px;

  @media (min-width: 445px) {
    height: 4150px;
  }

  @media (min-width: 576px) {
    height: 4200px;
  }

  @media (min-width: 593px) {
    height: 3800px;
  }

  @media (min-width: 785px) {
    height: 2700px;
  }

  @media (min-width: 1009px) {
    height: 2200px;
  }

  @media (min-width: 1217px) {
    height: 2023px;
  }
`

const NiepodleglosciZapisyPage = () => {
  const theme = "niepodleglosci"

  return (
    <Layout theme={theme}>
      <Wrapper>
        <iframe
          id="zapisy-ramka"
          title="Zapisy na bieg"
          width="100%"
          height="100%"
          src="https://zapisy.domtel-sport.pl/vi-gryfinski-bieg-niepodleg-osci-v9661"
          style={{ border: "none" }}
        ></iframe>
      </Wrapper>
    </Layout>
  )
}

export const Head = () => <Seo title="Zapisy" />

export default NiepodleglosciZapisyPage
