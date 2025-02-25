import React from "react"
import styled from "styled-components"
import { Layout, Seo, Container, PlayersList } from "../../../components-gb"
import { graphql } from "gatsby"
import { EventTheme } from "../../../enums-gb"
import { StyledComponent } from "../../../interfaces"

const Wrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  width: 100%;
  height: 130vw;
  max-height: 1200px;
  margin-bottom: 24px;
`

const ListaStartowaNiepodleglosciPage: React.FC = ({ data }): JSX.Element => {
  const { host, events, partners } = data.mainPage
  const { pageCore, logo, top, banner, verification, gallery } =
    data.niepodleglosciPage
  const theme = EventTheme.Niepodleglosci
  const api = 12912

  return (
    <Layout data={{ pageCore, partners, logo }} eventTheme={theme}>
      <Container>
        <PlayersList api={api} eventTheme={theme} />
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

export default ListaStartowaNiepodleglosciPage
