import React, { useState } from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Box from "../../atomic/atoms/Box/Box"
import styled from "styled-components"
import Button from "../../atomic/atoms/Button/Button"
import Container from "../../atomic/molecules/Container/Container"

const Wrapper = styled(Box)`
  width: 100%;
`

const TransgranicznyWynikiPage = () => {
  const theme = "transgraniczny"
  const [pdfUrl, setPdfUrl] = useState("/pdf/16991.pdf")

  return (
    <Layout theme={theme}>
      <Container direction="column">
        <Box
          direction="column"
          directionSM="row"
          width="100%"
          gap={"16px"}
          padding={"24px 0"}
        >
          <Button variant={theme} onClick={() => setPdfUrl("/pdf/16991.pdf")}>
            10 km
          </Button>
          <Button variant={theme} onClick={() => setPdfUrl("/pdf/16992.pdf")}>
            10 km Nordic Walking
          </Button>
          <Button variant={theme} onClick={() => setPdfUrl("/pdf/16993.pdf")}>
            Półmaraton
          </Button>
        </Box>
        <Wrapper>
          <iframe src={pdfUrl} style={{ width: "100%" }}></iframe>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="Wyniki" />

export default TransgranicznyWynikiPage
