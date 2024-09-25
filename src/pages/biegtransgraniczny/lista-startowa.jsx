import React from "react"
import Seo from "../../components/seo"
import PlayersList from "../../atomic/templates/PlayersList/PlayersList"

const TransgranicznyListaStartowaPage = () => {
  const theme = "transgraniczny"
  const api = "10564"

  useEffect(() => {
    fetch("https://api.dostartu.pl/competitions/10564/players")
      .then(response => response.json())
      .then(resultData => {
        setPlayers(resultData)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <Layout theme={theme}>
      <Container padding="48px 16px">
        {players?.length > 0 && (
          <Box overflow="auto">
            <Table>
              <thead>
                <TableRowHeading>
                  <TableHeading>Nr</TableHeading>
                  <TableHeading>Nazwisko i imię</TableHeading>
                  <TableHeading>Klub</TableHeading>
                  <TableHeading>Kraj</TableHeading>
                  <TableHeading>Miejscowość</TableHeading>
                  <TableHeading>Klas./Kat.</TableHeading>
                  <TableHeading></TableHeading>
                </TableRowHeading>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <TableRow key={index}>
                    <TableData>
                      {!!player.playerNumber ? player.playerNumber : "-"}
                    </TableData>
                    <TableData>
                      {player.lastname + " " + player.firstname}
                    </TableData>
                    <TableData>{player.clubname}</TableData>
                    <TableData>{player.country}</TableData>
                    <TableData>{player.city}</TableData>
                    <TableData>{player.classification}</TableData>
                    <TableData>
                      {player.pay ? "Opłacone" : "Nieopłacone"}
                    </TableData>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </Box>
        )}
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="Lista Startowa" />

export default TransgranicznyListaStartowaPage
