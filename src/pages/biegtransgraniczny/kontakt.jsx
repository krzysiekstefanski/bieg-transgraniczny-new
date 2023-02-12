import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Kontakt from "../../atomic/templates/Kontakt/Kontakt"

const TransgranicznyKontaktPage = () => (
    <Layout>
        <Kontakt />
    </Layout>
)

export const Head = () => <Seo title="Kontakt" />

export default TransgranicznyKontaktPage
