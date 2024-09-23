import * as React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Top from "../../atomic/templates/Top/Top"
import Banner from "../../atomic/templates/Banner/Banner"
import Verification from "../../atomic/templates/Verification/Verification"
import Rewards from "../../atomic/templates/Rewards/Rewards"
import Gallery from "../../atomic/templates/Gallery/Gallery"

const SectionsWrapper = styled.div`
  padding-bottom: 120px;
`

const NiepodleglosciPage = ({ data }) => {
  const theme = "niepodleglosci"
  const { websiteCore, top, banner, verification, gallery } = data.wpPage

  return (
    <Layout theme={theme}>
      <SectionsWrapper>
        <Top theme={theme} data={top} />
        <Banner theme={theme} data={banner} />
        <Verification theme={theme} data={verification} disabled />
        {/* <Rewards theme={theme} disabled /> */}
        <Gallery theme={theme} data={gallery} />
      </SectionsWrapper>
    </Layout>
  )
}

export const data = graphql`
  {
    wpPage(id: { eq: "cG9zdDo5NzU=" }) {
      websiteCore {
        sitetitle
        sitedescription
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
        bannerimage {
          localFile {
            childImageSharp {
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
            childImageSharp {
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

export const Head = () => <Seo title="Bieg Niepodległości Gryfino" />

export default NiepodleglosciPage
