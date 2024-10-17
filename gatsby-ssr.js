/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}

import React from "react"
import { GlobalStyle } from "./src/components-gb/single/globalStyle/globalStyle.const"

export const wrapPageElement = ({ element }) => {
  ;<>
    <GlobalStyle />
    {element}
  </>
}
