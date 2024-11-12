import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import WebViewer from "@pdftron/pdfjs-express-viewer"

import { Layout, Seo, Container, Link, Button } from "../../../components-gb"
import { graphql } from "gatsby"
import { EventTheme } from "../../../enums-gb"
import { StyledComponent } from "../../../interfaces"

const ContentWrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 0;
`

const ButtonsWrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-bottom: 24px;
`

const DocumentWrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  width: 100%;
  height: 130vw;
  max-height: 1200px;
  margin-top: 24px;
  margin-bottom: 24px;
`

const WynikiNiepodleglosciPage: React.FC = ({ data }): JSX.Element => {
  const { host, events, partners } = data.mainPage
  const { pageCore, logo, top, banner, verification, gallery } =
    data.niepodleglosciPage
  const theme = EventTheme.Niepodleglosci
  const viewer = useRef(null)
  const [pdf, setPdf] = useState(undefined)
  const [instance, setInstance] = useState(null)

  useEffect(() => {
    if (!instance) {
      WebViewer(
        {
          path: "/webviewer/lib",
          initialDoc: "/pdf/10km-open.pdf",
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
    if (instance && pdf) {
      instance.loadDocument(`/pdf/${pdf}.pdf`)
    }
  }, [pdf, instance])

  return (
    <Layout data={{ pageCore, partners, logo }} eventTheme={theme}>
      <Container>
        <ContentWrapper>
          <ButtonsWrapper>
            <Button
              label={"10km-open"}
              eventTheme={theme}
              onClick={() => setPdf("10km-open")}
            />
            <Button
              label={"10km-kategorie"}
              eventTheme={theme}
              onClick={() => setPdf("10km-kategorie")}
            />
            <Button
              label={"5km-nw-open"}
              eventTheme={theme}
              onClick={() => setPdf("5km-nw-open")}
            />
            <Button
              label={"5km-nw-kategorie"}
              eventTheme={theme}
              onClick={() => setPdf("5km-nw-kategorie")}
            />
          </ButtonsWrapper>
          {pdf}
          <DocumentWrapper>
            <div
              className="webviewer"
              ref={viewer}
              style={{ width: "100%" }}
            ></div>
          </DocumentWrapper>
        </ContentWrapper>
      </Container>
    </Layout>
  )
}

export const data = graphql`
  {
    mainPage: wpPage(id: { eq: "cG9zdDoxMDM3" }) {
      host {
        hosttitle
        hostsubtitle
        hostimage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        hostimagemobile {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      events {
        eventone {
          eventonename
          eventonephoto {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          eventonecolor
        }
        eventtwo {
          eventtwoname
          eventtwophoto {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          eventtwocolor
        }
      }
      partners {
        partnerslist {
          partnersheight
          partnerspadding
          partnersimage {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    niepodleglosciPage: wpPage(id: { eq: "cG9zdDo5NzU=" }) {
      pageCore {
        pagetitle
        pagedescription
      }
      logo {
        logophoto {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        logotext
      }
      top {
        herotitle
        herosubtitle
        herotext
        heroimage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      banner {
        bannertext
        bannerimage {
          localFile {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      verification {
        verificationtitle
        verificationtext
        verificationimage {
          localFile {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      gallery {
        gallerytitle
        galleryimages {
          localFile {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
        gallerylinktoall
      }
    }
  }
`

export const Head = () => <Seo />

export default WynikiNiepodleglosciPage
