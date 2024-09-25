import React from "react"
import Seo from "../../components/seo"
import PlayersList from "../../atomic/templates/PlayersList/PlayersList"

const TransgranicznyListaStartowaPage = () => {
  const theme = "transgraniczny"
  const api = "10564"

  return <PlayersList theme={theme} api={api} />
}

export const Head = () => <Seo title="Lista Startowa" />

export default TransgranicznyListaStartowaPage
