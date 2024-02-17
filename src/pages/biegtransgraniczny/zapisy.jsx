import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Box from "../../atomic/atoms/Box/Box"
import styled from "styled-components"

const Wrapper = styled(Box)`
  height: 4300px;

  @media (min-width: 445px) {
    height: 4470px;
  }

  @media (min-width: 576px) {
    height: 4490px;
  }

  @media (min-width: 593px) {
    height: 3850px;
  }

  @media (min-width: 785px) {
    height: 2800px;
  }

  @media (min-width: 1009px) {
    height: 2400px;
  }

  @media (min-width: 1217px) {
    height: 2323px;
  }
`

const TransgranicznyZapisyPage = () => {
  const theme = "transgraniczny"

  return (
    <Layout theme={theme}>
      <Wrapper>
        <iframe
          id="zapisy-ramka"
          title="Zapisy na bieg"
          width="100%"
          height="100%"
          src="https://zapisy.domtel-sport.pl/8-gryfinski-transgraniczny-festiwal-biegowy-v10564"
          style={{ border: "none" }}
        ></iframe>
      </Wrapper>
    </Layout>
  )
}

export const Head = () => <Seo title="Zapisy" />

export default TransgranicznyZapisyPage
