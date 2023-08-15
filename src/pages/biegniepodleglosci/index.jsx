import * as React from "react"
import { useWordPressPosts } from '../../hooks/useWordpressData';
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Header from "../../atomic/templates/Header/Header"
import Top from "../../atomic/templates/Top/Top"
import Banner from "../../atomic/templates/Banner/Banner"
import Verification from "../../atomic/templates/Verification/Verification"
import Rewards from "../../atomic/templates/Rewards/Rewards"
import Gallery from "../../atomic/templates/Gallery/Gallery"
import { colors } from "../../atomic/colors"
import pageQuery from "../index"
import parse from "html-react-parser"
import Container from "../../atomic/molecules/Container/Container";

const NiepodleglosciPage = () => {
  const posts = useWordPressPosts();
  console.log(posts);
  const theme = "niepodleglosci"

  return (
    <Layout theme={theme}>
      <Top theme={theme} />
      <Container>
        {parse(posts[0].node.content)}
      </Container>
      {/* <Banner theme={theme} />
      <Verification theme={theme} />
      <Rewards theme={theme} />
      <Gallery theme={theme} /> */}
    </Layout>
  )
}

export const Head = () => <Seo title="Bieg Niepodległości Gryfino" />

export default NiepodleglosciPage
