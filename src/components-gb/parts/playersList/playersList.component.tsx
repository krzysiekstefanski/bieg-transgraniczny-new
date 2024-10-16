import React, { useState, useEffect } from "react"
import { Layout } from "../layout/layout.component"
import { PlayersListProps } from "./playersList.types"
import { EventTheme } from "../../../enums-gb"
import { Container } from "../../single"
import {
  Component,
  Table,
  TableData,
  TableHeading,
  TableRow,
  TableRowHeading,
} from "./playersList.styled"

export const PlayersList: React.FC<PlayersListProps> = (
  props: PlayersListProps
): JSX.Element => {
  const {
    className,
    eventTheme = EventTheme.Transgraniczny,
    api,
  }: PlayersListProps = props
  const [isPlayersLoadFailed, setIsPlayersLoadFailed] = useState(false)
  const [isPlayersLoad, setIsPlayersLoad] = useState(false)
  const [players, setPlayers] = useState([])

  useEffect(() => {
    console.log(process.env.GATSBY_API_DOSTARTU)
    fetch(`${process.env.GATSBY_API_DOSTARTU}competitions/${api}/players`)
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
    <Component className={className}>
      {isPlayersLoad && !isPlayersLoadFailed && (
        <>
          {players?.length > 0 ? (
            <div width="100%" overflow="auto">
              <Table>
                <thead>
                  <TableRowHeading>
                    <TableHeading $eventTheme={eventTheme}>Nr</TableHeading>
                    <TableHeading $eventTheme={eventTheme}>
                      Nazwisko i imię
                    </TableHeading>
                    <TableHeading $eventTheme={eventTheme}>Klub</TableHeading>
                    <TableHeading $eventTheme={eventTheme}>Kraj</TableHeading>
                    <TableHeading $eventTheme={eventTheme}>
                      Miejscowość
                    </TableHeading>
                    <TableHeading $eventTheme={eventTheme}>
                      Klas./Kat.
                    </TableHeading>
                    <TableHeading $eventTheme={eventTheme}></TableHeading>
                  </TableRowHeading>
                </thead>
                <tbody>
                  {players.map((player, index) => (
                    <TableRow key={index} $eventTheme={eventTheme}>
                      <TableData $eventTheme={eventTheme}>
                        {!!player.playerNumber ? player.playerNumber : "-"}
                      </TableData>
                      <TableData $eventTheme={eventTheme}>
                        {player.lastname + " " + player.firstname}
                      </TableData>
                      <TableData $eventTheme={eventTheme}>
                        {player.clubname}
                      </TableData>
                      <TableData $eventTheme={eventTheme}>
                        {player.country}
                      </TableData>
                      <TableData $eventTheme={eventTheme}>
                        {player.city}
                      </TableData>
                      <TableData $eventTheme={eventTheme}>
                        {player.classification}
                      </TableData>
                      <TableData $eventTheme={eventTheme}>
                        {player.pay ? "Opłacone" : "Nieopłacone"}
                      </TableData>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            <p size="contentM" margin="16px 0 8px" marginMD="24px 0 16px">
              Jeszcze nikt się nie zapisał na ten bieg.
            </p>
          )}
        </>
      )}
      {!isPlayersLoad && !isPlayersLoadFailed && (
        <>
          <p size="contentM" margin="16px 0 8px" marginMD="24px 0 16px">
            Ładowanie listy zawodników...
          </p>
        </>
      )}
      {isPlayersLoadFailed && (
        <>
          <p size="contentM" margin="16px 0 8px" marginMD="24px 0 16px">
            Nie udało się załadować listy zawodników. Spróbuj ponownie później.
          </p>
        </>
      )}
    </Component>
  )
}

export default PlayersList
