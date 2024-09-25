import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Box from "../../atomic/atoms/Box/Box"
import styled from "styled-components"

const Wrapper = styled(Box)`
  height: 3930px;

  @media (min-width: 400px) {
    height: 4010px;
  }

  @media (min-width: 446px) {
    height: 4100px;
  }

  @media (min-width: 500px) {
    height: 4140px;
  }

  @media (min-width: 525px) {
    height: 4160px;
  }

  @media (min-width: 550px) {
    height: 4180px;
  }

  @media (min-width: 576px) {
    height: 3800px;
  }

  @media (min-width: 654px) {
    height: 3750px;
  }

  @media (min-width: 768px) {
    height: 2650px;
  }

  @media (min-width: 992px) {
    height: 2200px;
  }

  @media (min-width: 1152px) {
    height: 2100px;
  }

  @media (min-width: 1200px) {
    height: 2060px;
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
          src="https://zapisy.domtel-sport.pl/vi-gryfinski-bieg-niepodleglosci-v12912.pl.html"
          style={{ border: "none" }}
        ></iframe>
      </Wrapper>
    </Layout>
  )
}

export const Head = () => <Seo title="Zapisy" />

export default NiepodleglosciZapisyPage
