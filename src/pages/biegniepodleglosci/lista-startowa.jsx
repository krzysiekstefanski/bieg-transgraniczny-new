import React, { useState, useEffect } from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Box from "../../atomic/atoms/Box/Box"

const NiepodleglosciListaStartowaPage = () => {
  const theme = "niepodleglosci"
  const [test, setTest] = useState([])
  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(resultData => {
        setTest(resultData)
      })
  }, [])

  useEffect(() => {
    console.log(test)
  }, [test])

  return (
    <Layout theme={theme}>
      <Box height="1000px" heightLG="calc(100vh - 277px)" overflow="hidden">
        <iframe
          id="zapisy-ramka"
          title="Zapisy na bieg"
          width="100%"
          height="100%"
          src="https://dostartu.pl/vi-gryfinski-bieg-niepodleg-osci-c9661"
          style={{ border: "none" }}
        ></iframe>
      </Box>
      {/* <Box column>
        {test.map((item, index) => (
          <Box
            key={index}
          >{`${item.playerNumber} ${item.firstname} ${item.lastname} ${item.clubname} ${item.pay}`}</Box>
        ))}
      </Box> */}
    </Layout>
  )
}

export const Head = () => <Seo title="Zapisy" />

export default NiepodleglosciListaStartowaPage
