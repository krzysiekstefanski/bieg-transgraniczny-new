import React, { useRef, useEffect, useState } from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Box from "../../atomic/atoms/Box/Box"
import styled from "styled-components"
import Button from "../../atomic/atoms/Button/Button"
import Container from "../../atomic/molecules/Container/Container"
// import WebViewer from "@pdftron/pdfjs-express-viewer"

const Wrapper = styled(Box)`
  width: 100%;
  height: 130vw;
  max-height: 1200px;
  margin-bottom: 24px;
`

const TransgranicznyWynikiPage = () => {
  const theme = "transgraniczny"
  // const viewer = useRef(null)
  // const [pdf, setPdf] = useState(undefined)
  // const [instance, setInstance] = useState(null)

  // useEffect(() => {
  //   if (!instance) {
  //     WebViewer(
  //       {
  //         path: "/webviewer/lib",
  //         initialDoc: "/pdf/16991.pdf",
  //         licenseKey: "5MH0z4wBBOEfB48yb31C",
  //         css: "/webviewer/style.css",
  //       },
  //       viewer.current
  //     ).then(instance => {
  //       setInstance(instance)
  //       instance.UI.setLanguage("pl")
  //       instance.UI.disableElements(["ribbons"])
  //     })
  //   }
  // })

  // useEffect(() => {
  //   if (instance && pdf) {
  //     instance.loadDocument(`/pdf/${pdf}.pdf`)
  //   }
  // }, [pdf, instance])

  return (
    <Layout theme={theme}>
      <Container direction="column">
        <Box
          direction="column"
          directionSM="row"
          justify="center"
          width="100%"
          gap={"16px"}
          padding={"24px 0"}
        >
          {/* <Button variant={theme} onClick={() => setPdf("16991")}>
            10 km
          </Button>
          <Button variant={theme} onClick={() => setPdf("16992")}>
            10 km Nordic Walking
          </Button>
          <Button variant={theme} onClick={() => setPdf("16993")}>
            Półmaraton
          </Button> */}
        </Box>
        <Wrapper>
          {/* <div
            className="webviewer"
            ref={viewer}
            style={{ width: "100%" }}
          ></div> */}
        </Wrapper>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="Wyniki" />

export default TransgranicznyWynikiPage
