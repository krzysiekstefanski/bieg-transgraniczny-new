import React, { useState, useEffect } from "react"
import { RegisterProps } from "./register.types"
import { EventTheme, TextAlign } from "../../../enums-gb"
import { Button, Container, Text, TimeCounter, Title } from "../../single"
import {
  Component,
  ContentWrapper,
  ContentDivider,
  MainContent,
  ButtonWrapper,
  AdditionalContent,
  StatusWrapper,
  ClassificationTables,
  ClassificationTable,
  ClassificationRow,
  ClassificationPayment,
} from "./register.styled"

export const Register: React.FC<RegisterProps> = (
  props: RegisterProps
): JSX.Element => {
  const {
    className,
    eventTheme = EventTheme.Transgraniczny,
    api,
  }: RegisterProps = props
  const [isPlayersLoadFailed, setIsPlayersLoadFailed] = useState(false)
  const [isPlayersLoad, setIsPlayersLoad] = useState(false)
  const [players, setPlayers] = useState({})
  const [limits, setLimits] = useState({})
  const [isLimitsLoad, setIsLimitsLoad] = useState(false)
  const [classifications, setClassifications] = useState({})
  const [isClassificationsLoad, setIsClassificationsLoad] = useState(false)
  const [classificationsLimits, setClassificationsLimits] = useState({})
  const [isClassificationsLimitsLoad, setIsClassificationsLimitsLoad] =
    useState(false)

  useEffect(() => {
    console.log(process.env.GATSBY_API_DOSTARTU)
    fetch(`${process.env.GATSBY_API_DOSTARTU}competitions/${api}/`)
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

  useEffect(() => {
    fetch(`${process.env.GATSBY_API_DOSTARTU}competitions/${api}/limits`)
      .then(response => response.json())
      .then(resultData => {
        setLimits(resultData)
        setIsLimitsLoad(true)
      })
      .catch(error => {
        console.log(error)
        setIsLimitsLoad(false)
      })
  }, [])

  useEffect(() => {
    fetch(
      `${process.env.GATSBY_API_DOSTARTU}competitions/${api}/classifications`
    )
      .then(response => response.json())
      .then(resultData => {
        setClassifications(resultData)
        setIsClassificationsLoad(true)
      })
      .catch(error => {
        console.log(error)
        setIsClassificationsLoad(false)
      })
  }, [])

  useEffect(() => {
    fetch(
      `${process.env.GATSBY_API_DOSTARTU}competitions/${api}/classifications/limits`
    )
      .then(response => response.json())
      .then(resultData => {
        setClassificationsLimits(resultData)
        setIsClassificationsLimitsLoad(true)
      })
      .catch(error => {
        console.log(error)
        setIsClassificationsLimitsLoad(false)
      })
  }, [])

  return (
    <Component className={className}>
      {isPlayersLoad &&
        !isPlayersLoadFailed &&
        isLimitsLoad &&
        isClassificationsLoad &&
        isClassificationsLimitsLoad && (
          <ContentWrapper>
            <ContentDivider>
              <MainContent>
                <Title
                  level={1}
                  text={`Zapisy na bieg`}
                  align={TextAlign.Left}
                  eventTheme={eventTheme}
                />
                <div>
                  <Title
                    level={2}
                    text={`**${players.competition.name}**`}
                    align={TextAlign.Left}
                    eventTheme={eventTheme}
                  />
                  <Text text={players.competition.descriptionPl} />
                </div>
              </MainContent>
              <AdditionalContent>
                <TimeCounter targetDate={players.competition.startedTime} />
                <StatusWrapper>
                  <Text text={"Status wydarzenia:"} />
                  <Title
                    level={2}
                    text={
                      players.competition.status === 2
                        ? "**Rejestracja otwarta**"
                        : "Rejestracja zamknięta"
                    }
                    align={TextAlign.Left}
                    eventTheme={eventTheme}
                  />
                  <Text
                    text={`Pozostało wolnych miejsc: ${limits.playersAvailable}/${limits.playersLimit}`}
                  />
                </StatusWrapper>
              </AdditionalContent>
            </ContentDivider>
            <ButtonWrapper>
              <Button
                label={"Zapisz się na wydarzenie"}
                to={
                  "https://zapisy.domtel-sport.pl/9-gryfinski-transgraniczny-festiwal-biegowy-r13665.pl.html?"
                }
                blank
              />
            </ButtonWrapper>
            <Title level={2} text={"Klasyfikacje:"} align={TextAlign.Left} />
            <ClassificationTables>
              {classifications.classifications.map((classification, index) => (
                <ClassificationTable>
                  <Title
                    level={3}
                    text={`${classification.namePl}`}
                    align={TextAlign.Left}
                  />
                  <ClassificationRow style={{ maxWidth: 300 }}>
                    <div>
                      <Text text={"Dystans:"} />
                      <Text text={`<b>${classification.distance} km</b>`} />
                    </div>
                    <div>
                      <Text text={"Płeć:"} />
                      <Text text={"<b>K, M</b>"} />
                    </div>
                    <div>
                      <Text text={"Wiek:"} />
                      <Text text={"<b>18 - 99</b>"} />
                    </div>
                  </ClassificationRow>
                  <Text
                    text={`Ilość uczestników: <b>${classificationsLimits[index].playersUnavailable}</b>`}
                  />
                  <Text text={"Opłaty:"} />
                  <ClassificationRow style={{ flexDirection: "column" }}>
                    {classification.classificationPrices.map(price => (
                      <ClassificationPayment>
                        <Text
                          text={`Do ${new Date(
                            price.endedTime
                          ).toLocaleDateString("pl-PL")}`}
                        />
                        <Title
                          level={3}
                          text={`${price.price} zł`}
                          align={TextAlign.Left}
                        />
                      </ClassificationPayment>
                    ))}
                  </ClassificationRow>
                </ClassificationTable>
              ))}
            </ClassificationTables>
          </ContentWrapper>
        )}
    </Component>
  )
}
