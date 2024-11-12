import React from "react"

import {
  Layout,
  TopSection,
  BannerSection,
  Seo,
  VerificationSection,
  RewardsSection,
  GallerySection,
  Sections,
} from "../../components-gb"
import { graphql } from "gatsby"
import { EventTheme } from "../../enums-gb"

const NiepodleglosciPage: React.FC = ({ data }): JSX.Element => {
  const { host, events, partners } = data.mainPage
  const {
    pageCore,
    logo,
    top,
    banner,
    verification,
    rewards,
    gallery,
    sections,
  } = data.niepodleglosciPage
  const theme = EventTheme.Niepodleglosci

  return (
    <Layout data={{ pageCore, partners, logo }} eventTheme={theme}>
      <TopSection theme={theme} data={top} />
      <Sections theme={theme} data={sections} />
      {/* <BannerSection theme={theme} data={banner} />
      <VerificationSection theme={theme} data={verification} />
      <RewardsSection theme={theme} data={rewards} /> */}
      <GallerySection theme={theme} data={gallery} />
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
      sections {
        single {
          sectionconfig {
            sectioncolumns
            sectiondisable
            sectionframe
            sectionwidth
          }
          sectionfield {
            ... on WpPage_Sections_single_Sectionfield_Sectiontitle {
              sectiontitleinput
            }
            ... on WpPage_Sections_single_Sectionfield_Sectiontext {
              sectiontextinput
            }
            ... on WpPage_Sections_single_Sectionfield_Sectionimage {
              sectionimageinput {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            ... on WpPage_Sections_single_Sectionfield_Sectiongallery {
              sectiongalleryinput {
                localFile {
                  childrenImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          sectionfield2 {
            ... on WpPage_Sections_single_Sectionfield2_Sectiontitle2 {
              sectiontitleinput2
            }
            ... on WpPage_Sections_single_Sectionfield2_Sectiontext2 {
              sectiontextinput2
            }
            ... on WpPage_Sections_single_Sectionfield2_Sectionimage2 {
              sectionimageinput2 {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            ... on WpPage_Sections_single_Sectionfield2_Sectiongallery2 {
              sectiongalleryinput2 {
                localFile {
                  childrenImageSharp {
                    gatsbyImageData
                  }
                }
              }
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
        verificationdisabled
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
      rewards {
        rewardsdisabled
        rewardstitle
        rewardstext
        rewardsimages {
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

export default NiepodleglosciPage
