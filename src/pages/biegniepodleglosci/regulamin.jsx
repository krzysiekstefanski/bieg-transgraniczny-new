import React, { useRef, useEffect, useState } from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Box from "../../atomic/atoms/Box/Box"
import styled from "styled-components"
import Container from "../../atomic/molecules/Container/Container"
//import WebViewer from "@pdftron/pdfjs-express-viewer"
if (typeof window !== `undefined`) {
  const WebViewer = require("@pdftron/pdfjs-express-viewer")
}

const Wrapper = styled(Box)`
  width: 100%;
  height: 130vw;
  max-height: 1200px;
  margin-bottom: 24px;
`

const NiepodleglosciRegulaminPage = () => {
  const theme = "niepodleglosci"
  const viewer = useRef(null)
  const [instance, setInstance] = useState(null)

  useEffect(() => {
    if (!instance) {
      WebViewer(
        {
          path: "/webviewer/lib",
          initialDoc: "/pdf/regulamin-bieg-niepodleglosci-2024.pdf",
          licenseKey: "5MH0z4wBBOEfB48yb31C",
          css: "/webviewer/style.css",
        },
        viewer.current
      ).then(instance => {
        setInstance(instance)
        instance.UI.setLanguage("pl")
        instance.UI.disableElements(["ribbons"])
      })
    }
  })

  useEffect(() => {
    if (instance) {
      instance.loadDocument(`/pdf/regulamin-bieg-niepodleglosci-2024.pdf`)
    }
  }, [instance])

  return (
    <Layout theme={theme}>
      <Container direction="column">
        <Wrapper>
          <div
            className="webviewer"
            ref={viewer}
            style={{ width: "100%" }}
          ></div>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="Regulamin" />

export default NiepodleglosciRegulaminPage
