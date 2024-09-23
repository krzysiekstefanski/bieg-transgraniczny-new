import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Container from "../../molecules/Container/Container"

const Component = styled(Box)`
  margin: ${props => props.margin ?? "auto 0 0"};

  .gatsby-image-wrapper {
    height: 100%;

    div {
      height: 100%;
    }

    img {
      object-fit: contain !important;
      width: auto !important;
    }
  }
`

const Footer = ({ className, margin }) => {
  const data = useStaticQuery(graphql`
    query footerDataQuery {
      wpPage(id: { eq: "cG9zdDoxMDM3" }) {
        partners {
          partnerslist {
            partnersimage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            partnersheight
            partnerspadding
          }
        }
      }
    }
  `)

  return (
    <Component
      className={className}
      height="101px"
      width="100%"
      backgroundColor="white"
      padding="0 16px"
      margin={margin}
    >
      {console.log(data)}
      <Container
        display="grid"
        columns={"repeat(3, 1fr)"}
        columnsMD={"repeat(6, auto)"}
        justify="space-between"
        gap="16px"
        position="relative"
        zIndex="1"
      >
        {data.wpPage.partners.partnerslist.length > 0 &&
          data.wpPage.partners.partnerslist.map(partner => (
            <Box
              justify="center"
              align="center"
              height={partner.partnersheight + "px"}
              width="100%"
              padding={partner.partnerspadding + "px"}
            >
              <GatsbyImage
                image={
                  partner.partnersimage.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={"partner biegu"}
                objectPosition={"50% 50%"}
              />
            </Box>
          ))}
      </Container>
    </Component>
  )
}

export default Footer
