import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Top from "../../atomic/templates/Top/Top"
import Banner from "../../atomic/templates/Banner/Banner"
import Verification from "../../atomic/templates/Verification/Verification"
import Rewards from "../../atomic/templates/Rewards/Rewards"
import Gallery from "../../atomic/templates/Gallery/Gallery"

import gallery1 from "../../images/gallery/6n/npd-6-1.jpg"
import gallery2 from "../../images/gallery/6n/npd-6-2.jpg"
import gallery3 from "../../images/gallery/6n/npd-6-3.jpg"
import gallery4 from "../../images/gallery/6n/npd-6-4.jpg"
import gallery5 from "../../images/gallery/6n/npd-6-5.jpg"
import gallery6 from "../../images/gallery/6n/npd-6-6.jpg"
import gallery7 from "../../images/gallery/6n/npd-6-7.jpg"
import gallery8 from "../../images/gallery/6n/npd-6-8.jpg"
import gallery9 from "../../images/gallery/6n/npd-6-9.jpg"

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
]

const imagesLink = "https://photos.app.goo.gl/oSttkhfdsw3tUK2C6"

const NiepodleglosciPage = () => {
  const theme = "niepodleglosci"

  return (
    <Layout theme={theme}>
      <Top theme={theme} />
      <Banner theme={theme} />
      <Verification theme={theme} display="none" />
      <Rewards theme={theme} />
      <Gallery theme={theme} images={images} imagesLink={imagesLink} />
    </Layout>
  )
}

export const Head = () => <Seo title="Bieg Niepodległości Gryfino" />

export default NiepodleglosciPage
