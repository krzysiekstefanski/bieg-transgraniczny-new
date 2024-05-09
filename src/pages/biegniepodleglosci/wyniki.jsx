import React, { useRef, useEffect } from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Box from "../../atomic/atoms/Box/Box"
import styled from "styled-components"
import WebViewer from "@pdftron/pdfjs-express"

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

const NiepodleglosciWynikiPage = () => {
  const theme = "niepodleglosci"
  const viewer = useRef(null)

  useEffect(() => {
    WebViewer(
      {
        path: "/webviewer/lib",
        initialDoc: "/pdf/16993.pdf",
      },
      viewer.current
    ).then(instance => {})
  }, [])

  return (
    <Layout theme={theme}>
      <Wrapper>
        {/* <iframe
          id="wyniki-ramka"
          title="Wyniki biegu"
          width="100%"
          height="100%"
          src="https://domtel-sport.pl/wyniki,zawody,5715"
          style={{ border: "none" }}
        ></iframe> */}
        <div className="MyComponent">
          <div className="header">React sample</div>
          <div className="webviewer" ref={viewer}></div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export const Head = () => <Seo title="Wyniki" />

export default NiepodleglosciWynikiPage
