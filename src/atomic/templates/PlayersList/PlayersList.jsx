import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../../../components/layout"
import Container from "../../molecules/Container/Container"
import Box from "../../atoms/Box/Box"
import Text from "../../atoms/Text/Text"
import { colors } from "../../colors"
import { checkColor } from "../../utils"

const Table = styled.table`
  border-spacing: 0;
  white-space: nowrap;
  width: 100%;
`

const TableHeading = styled.th`
  text-align: left;
  padding: 12px 16px 12px 8px;

  &:last-child {
    background-color: ${colors.white};
    box-shadow: inset 1px 0 0 0 ${props => checkColor(props.theme + "80")};
    position: sticky;
    right: 0;
    padding-left: 20px;
    padding-right: 20px;

    @media (min-width: 1200px) {
      box-shadow: none;
      position: static;
    }
  }
`

const TableData = styled.td`
  padding: 12px 16px 12px 8px;

  &:last-child {
    box-shadow: inset 1px 1px 0 0 ${props => checkColor(props.theme + "80")};
    position: -webkit-sticky;
    position: sticky;
    right: 0;
    padding-left: 20px;
    padding-right: 20px;

    @media (min-width: 1200px) {
      box-shadow: none;
      position: static;
    }
  }
`

const TableRowHeading = styled.tr``

const TableRow = styled.tr`
  ${TableData} {
    &:last-child {
      background-color: ${colors.white};
    }
  }

  &:nth-child(2n + 1) {
    background-color: ${props => checkColor(props.theme + "100")};

    ${TableData} {
      &:last-child {
        background-color: ${props => checkColor(props.theme + "100")};
      }
    }
  }
`

const PlayersList = ({ className, theme, api }) => {
  const [isPlayersLoadFailed, setIsPlayersLoadFailed] = useState(false)
  const [isPlayersLoad, setIsPlayersLoad] = useState(false)
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch(`https://api.dostartu.pl/competitions/${api}/players`)
      .then(response => response.json())
      .then(resultData => {
        setPlayers(resultData)
        setIsPlayersLoad(true)
      })
      .catch(error => {
        setIsPlayersLoadFailed(true)
        console.log(error)
      })
  }, [])

  return (
    <Layout theme={theme} className={className}>
      {isPlayersLoad && !isPlayersLoadFailed && (
        <Container padding="48px 16px">
          {players?.length > 0 ? (
            <Box width="100%" overflow="auto">
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
          ) : (
            <Text size="contentM" margin="16px 0 8px" marginMD="24px 0 16px">
              Jeszcze nikt się nie zapisał na ten bieg.
            </Text>
          )}
        </Container>
      )}
      {!isPlayersLoad && !isPlayersLoadFailed && (
        <Container padding="48px 16px">
          <Text size="contentM" margin="16px 0 8px" marginMD="24px 0 16px">
            Ładowanie listy zawodników...
          </Text>
        </Container>
      )}
      {isPlayersLoadFailed && (
        <Container padding="48px 16px">
          <Text size="contentM" margin="16px 0 8px" marginMD="24px 0 16px">
            Nie udało się załadować listy zawodników. Spróbuj ponownie później.
          </Text>
        </Container>
      )}
    </Layout>
  )
}

export default PlayersList
