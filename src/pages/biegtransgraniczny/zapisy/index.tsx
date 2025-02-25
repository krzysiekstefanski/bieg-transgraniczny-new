import React from "react"
import styled from "styled-components"
import { Layout, Seo, Container, Register } from "../../../components-gb"
import { graphql } from "gatsby"
import { Color, EventTheme } from "../../../enums-gb"
import { StyledComponent } from "../../../interfaces"

const Overlay: StyledComponent<"div"> = styled.div`
  min-height: calc(100vh - 285px);
  width: 100%;
  background-color: ${Color.Grey95};
`

const ZapisyTransgranicznyPage: React.FC = ({ data }): JSX.Element => {
  const { host, events, partners } = data.mainPage
  const { pageCore, logo, top, banner, verification, gallery } =
    data.transgranicznyPage
  const theme = EventTheme.Transgraniczny
  const api = 13665

  return (
    <Layout data={{ pageCore, partners, logo }}>
      <Overlay>
        <Container>
          {/* <Wrapper>
          <iframe
            id="zapisy-ramka"
            title="Zapisy na bieg"
            width="100%"
            height="100%"
            src="https://zapisy.domtel-sport.pl/9-gryfinski-transgraniczny-festiwal-biegowy-v13665"
            style={{ border: "none" }}
          ></iframe>
        </Wrapper> */}
          <Register api={api} />
        </Container>
      </Overlay>
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

export default ZapisyTransgranicznyPage
