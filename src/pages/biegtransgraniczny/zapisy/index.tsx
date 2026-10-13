import React from "react"
import styled from "styled-components"
import { Layout, Seo, Container } from "../../../components-gb"
import { graphql } from "gatsby"
import { Color, EventTheme } from "../../../enums-gb"
import { StyledComponent } from "../../../interfaces"

const Wrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  height: 4310px;
  width: 100%;
  margin-bottom: 24px;

  @media (min-width: 400px) {
    height: 4280px;
  }

  @media (min-width: 446px) {
    height: 4450px;
  }

  @media (min-width: 500px) {
    height: 4450px;
  }

  @media (min-width: 525px) {
    height: 4600px;
  }

  @media (min-width: 550px) {
    height: 4600px;
  }

  @media (min-width: 576px) {
    height: 4600px;
  }

  @media (min-width: 608px) {
    height: 4100px;
  }

  @media (min-width: 768px) {
    height: 4150px;
  }

  @media (min-width: 800px) {
    height: 3000px;
  }

  @media (min-width: 992px) {
    height: 3000px;
  }

  @media (min-width: 1024px) {
    height: 2550px;
  }

  @media (min-width: 1152px) {
    height: 2500px;
  }

  @media (min-width: 1200px) {
    height: 2500px;
  }
`

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

  return (
    <Layout data={{ pageCore, partners, logo }}>
      <Overlay>
        <Container>
          <Wrapper>
            <iframe
              id="zapisy-ramka"
              title="Zapisy na bieg"
              width="100%"
              height="100%"
              src="https://dostartu.pl/10-gryfinski-transgraniczny-festiwal-biegowy-v15743"
              style={{ border: "none" }}
            ></iframe>
          </Wrapper>
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
