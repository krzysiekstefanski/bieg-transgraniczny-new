import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Container from "../../atomic/molecules/Container/Container"
import Box from "../../atomic/atoms/Box/Box"
import { colors } from "../../atomic/colors"

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
    box-shadow: inset 1px 0 0 0 ${colors.niepodleglosci80};
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
    box-shadow: inset 1px 1px 0 0 ${colors.niepodleglosci80};
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
    background-color: ${colors.niepodleglosci100};

    ${TableData} {
      &:last-child {
        background-color: ${colors.niepodleglosci100};
      }
    }
  }
`

const NiepodleglosciListaStartowaPage = () => {
  const theme = "niepodleglosci"
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch("/api/competitions/12912/players")
      .then(response => response.json())
      .then(resultData => {
        setPlayers(resultData)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const getClassification = (classification, category) => {
    let tempClassification

    switch (classification) {
      case 38239:
        tempClassification = "D10"
        break
      case 38240:
        tempClassification = "5km"
        break
      default:
        tempClassification = classification
        break
    }

    switch (category[0]) {
      case 242032:
        return tempClassification + "/K50-59"
      case 242035:
        return tempClassification + "/M60-69"
      case 242036:
        return tempClassification + "/M50-59"
      case 242037:
        return tempClassification + "/K40-49"
      case 242038:
        return tempClassification + "/M40-49"
      case 242039:
        return tempClassification + "/M30-39"
      case 242040:
        return tempClassification + "/M16-29"
      case 242041:
        return tempClassification + "/K30-39"
      case 242042:
        return tempClassification + "/K16-29"
      case 242045:
        return tempClassification + "/M60-99"
      case 242048:
        return tempClassification + "/M16-39"
      case 242050:
        return tempClassification + "/K60-99"
      default:
        return tempClassification + "/" + category
    }
  }

  return (
    <Layout theme={theme}>
      <Container padding="48px 16px">
        {players?.length > 0 && (
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
                    <TableData>
                      {getClassification(
                        player.classification,
                        player.category
                      )}
                    </TableData>
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

export const Head = () => <Seo title="Zapisy" />

export default NiepodleglosciListaStartowaPage
