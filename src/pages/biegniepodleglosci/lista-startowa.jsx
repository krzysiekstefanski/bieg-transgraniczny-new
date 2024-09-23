import React from "react"
import Seo from "../../components/seo"
import PlayersList from "../../atomic/templates/PlayersList/PlayersList"

const NiepodleglosciListaStartowaPage = () => {
  const theme = "niepodleglosci"
  const api = "12912"

  return <PlayersList theme={theme} api={api} />
}

export const Head = () => <Seo title="Lista Startowa" />

export default NiepodleglosciListaStartowaPage
