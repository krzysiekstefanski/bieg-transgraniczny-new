import React from "react"
import styled from "styled-components"
import { Layout, Seo, Container } from "../../../components-gb"
import { graphql } from "gatsby"
import { EventTheme } from "../../../enums-gb"
import { StyledComponent } from "../../../interfaces"

const Wrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  height: 4050px;
  width: 100%;
  margin-bottom: 24px;

  @media (min-width: 400px) {
    height: 4090px;
  }

  @media (min-width: 446px) {
    height: 4170px;
  }

  @media (min-width: 500px) {
    height: 4250px;
  }

  @media (min-width: 525px) {
    height: 4250px;
  }

  @media (min-width: 550px) {
    height: 4330px;
  }

  @media (min-width: 608px) {
    height: 3870px;
  }

  @media (min-width: 800px) {
    height: 2780px;
  }

  @media (min-width: 900px) {
    height: 2860px;
  }

  @media (min-width: 992px) {
    height: 2860px;
  }

  @media (min-width: 1024px) {
    height: 2360px;
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
            src="https://dostartu.pl/ix-gryfinski-bieg-niepodleg-osci-v17268"
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
