import React, { useState, useEffect } from "react"
import parse from "html-react-parser"
import { Container } from "./timeCounter.styled"
import { TimeCounterProps } from "./timeCounter.types"
import { Text } from "../text/text.component"
import { Title } from "../title/title.component"
import { TextAlign } from "../../../enums-gb"

export const TimeCounter: React.FC<TimeCounterProps> = (
  props: TimeCounterProps
): JSX.Element => {
  const { className, targetDate, eventTheme }: TimeCounterProps = props

  const calculateTimeLeft = () => {
    const now = new Date()
    const eventDate = new Date(targetDate)
    const difference = eventDate - now

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <Container className={className}>
      <Text text={parse("Do biegu pozostało:")} />
      <Title
        level={2}
        text={`${timeLeft.days}d ${timeLeft.hours}g ${timeLeft.minutes}m ${timeLeft.seconds}s`}
        align={TextAlign.Left}
      />
    </Container>
  )
}
