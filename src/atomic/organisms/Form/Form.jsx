import React from "react"
import styled from "styled-components"
import { checkColor } from "../../utils"
import Box from "../../atoms/Box/Box"
import Input from "../../atoms/Input/Input"
import Textarea from "../../atoms/Textarea/Textarea"
import Button from "../../atoms/Button/Button"
import FormAcceptance from "../../molecules/FormAcceptance/FormAcceptance"

const Wrapper = styled.div`
  width: 100%;

  .form-label {
    p {
      line-height: 16px;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;

    @media (min-width: 769px) {
      align-items: flex-end;
    }

    @media (min-width: 992px) {
      flex-direction: row;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus {
      // -webkit-box-shadow: 0 0 0px 1000px ${checkColor("white")} inset;
    }
  }
`

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }

  .form-label {
    &:first-child {
      @media (min-width: 992px) {
        padding-right: 10px;
      }
    }

    &:last-child {
      @media (min-width: 992px) {
        padding-left: 10px;
      }
    }

    &--wide {
      width: 100%;
    }
  }
`

const Form = ({ theme }) => {
  return (
    <Wrapper>
      <form
        name="Contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />
        <Flexbox>
          <label className={"form-label"} htmlFor="fname">
            <p style={{ display: "none" }}>Imię i nazwisko</p>
            <Input placeholder="Imię i nazwisko" />
          </label>
          <label className={"form-label"} htmlFor="lname">
            <p style={{ display: "none" }}>Adres e-mail</p>
            <Input placeholder="Adres e-mail" />
          </label>
        </Flexbox>
        <label
          className={"form-label"}
          htmlFor="message"
          style={{ position: "relative" }}
        >
          <p style={{ display: "none" }}>Treść wiadomości</p>
          <Textarea rows="7" placeholder="Treść wiadomości" />
        </label>
        <Box column directionSM="row">
          <FormAcceptance theme={theme} />
          <Button variant={theme} margin="24px 0 0" marginSM="0">
            Wyślij
          </Button>
        </Box>
      </form>
    </Wrapper>
  )
}

export default Form
