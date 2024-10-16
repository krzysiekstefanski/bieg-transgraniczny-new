import * as React from "react"
import { graphql, Link } from "gatsby"
import { Layout, Seo, Container, Text, Title } from "../components-gb"
import styled from "styled-components"
import { Color, TextAlign } from "../enums"

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 170px);
  width: 100%;
`

export const Button = styled(Link)`
  font-family: inherit;
  color: ${Color.White};
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  text-decoration: none;
  background-color: ${Color.Primary};
  border: 0;
  border-radius: 3px;
  padding: 8px 16px;
  cursor: pointer;
  transition: color 0.1s ease, background-color 0.3s ease;

  &:hover {
    background-color: ${Color.Primary};

    svg {
      path {
        fill: #000;
      }
    }
  }
`

const ThankYouPage = ({ data }) => {
  const { websiteCore, partners } = data.wpPage
  return (
    <Layout data={{ websiteCore, partners }}>
      <Content>
        <Container gap={20}>
          <Title level={1} text={"Dziękujemy"} />
          <Title level={2} text={"Twoja wiadomość została do nas wysłana"} />
          <Text
            text={"Postaramy się odpowiedzieć jak najszybciej."}
            align={TextAlign.Center}
          />
          <Button to="/">Strona główna</Button>
        </Container>
      </Content>
    </Layout>
  )
}

export const data = graphql`
  {
    wpPage(id: { eq: "cG9zdDoxMDM3" }) {
      websiteCore {
        sitedescription
        sitetitle
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
  }
`

export const Head = () => <Seo />

export default ThankYouPage
