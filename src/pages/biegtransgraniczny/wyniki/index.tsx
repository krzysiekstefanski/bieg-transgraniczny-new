import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import WebViewer from "@pdftron/pdfjs-express-viewer"

import { Layout, Seo, Container, Link, Button } from "../../../components-gb"
import { graphql } from "gatsby"
import { Breakpoint, Color, EventTheme } from "../../../enums-gb"
import { StyledComponent } from "../../../interfaces"

const ContentWrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 0;
`

const ButtonsWrapper: StyledComponent<"div"> = styled.div`
  display: none;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-bottom: 48px;

  @media ${Breakpoint.Small} {
    display: flex;
  }
`

const SelectionWrapper: StyledComponent<"div"> = styled.div`
  width: 100%;
  margin-bottom: 48px;

  @media ${Breakpoint.Small} {
    display: none;
  }

  select {
    font-family: "Bai Jamjuree", sans-serif;
    width: 100%;
    padding: 8px 0;
    font-size: 16px;
    border-bottom: 1px solid ${Color.Niepodleglosci};
    cursor: pointer;
  }
`

const DocumentWrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  width: 100%;
  height: 130vw;
  max-height: 1200px;
  margin-top: 24px;
  margin-bottom: 24px;
`

const WynikiTransgranicznyPage: React.FC = ({ data }): JSX.Element => {
  const { host, events, partners } = data.mainPage
  const { pageCore, logo, top, banner, verification, gallery } =
    data.transgranicznyPage
  const theme = EventTheme.Transgraniczny
  const viewer = useRef(null)
  const [pdf, setPdf] = useState("19521")
  const [instance, setInstance] = useState(null)

  useEffect(() => {
    if (!instance) {
      WebViewer(
        {
          path: "/webviewer/lib",
          initialDoc: "/pdf/19521.pdf",
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
              label={"21.097 km"}
              eventTheme={theme}
              onClick={() => setPdf("19521")}
            />
            <Button
              label={"10 km Nordic Walking"}
              eventTheme={theme}
              onClick={() => setPdf("19522")}
            />
            <Button
              label={"10 km"}
              eventTheme={theme}
              onClick={() => setPdf("19523")}
            />
          </ButtonsWrapper>
          <SelectionWrapper>
            <select value={pdf} onChange={e => setPdf(e.target.value)}>
              <option value="19521">21.097</option>
              <option value="19522">10km Nordic Walking</option>
              <option value="19523">10km</option>
            </select>
          </SelectionWrapper>
          Wybrana kategoria:{" "}
          {pdf === "19521"
            ? "21.097 km"
            : pdf === "19522"
            ? "10 km Nordic Walking"
            : pdf === "19523"
            ? "10 km"
            : "brak"}
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
    transgranicznyPage: wpPage(id: { eq: "cG9zdDo3MzM=" }) {
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

export default WynikiTransgranicznyPage
