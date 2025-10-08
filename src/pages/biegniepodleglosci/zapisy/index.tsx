import React from "react"
import styled from "styled-components"
import { Layout, Seo, Container } from "../../../components-gb"
import { graphql } from "gatsby"
import { EventTheme } from "../../../enums-gb"
import { StyledComponent } from "../../../interfaces"

const Wrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  height: 3930px;
  width: 100%;
  margin-bottom: 24px;

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

const ZapisyNiepodleglosciPage: React.FC = ({ data }): JSX.Element => {
  const { host, events, partners } = data.mainPage
  const { pageCore, logo, top, banner, verification, gallery } =
    data.niepodleglosciPage
  const theme = EventTheme.Niepodleglosci

  return (
    <Layout data={{ pageCore, partners, logo }} eventTheme={theme}>
      <Container>
        <Wrapper>
          <iframe
            id="zapisy-ramka"
            title="Zapisy na bieg"
            width="100%"
            height="100%"
            src="https://dostartu.pl/viii-gryfinski-bieg-niepodleg-osci-v15086"
            style={{ border: "none" }}
          ></iframe>
        </Wrapper>
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

export default ZapisyNiepodleglosciPage
