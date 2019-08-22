import React from "react"
import { ThemeProvider } from "emotion-theming"
import Button from "../components/button" // theme is fine here
//import Button from "../../../src/components/button" // theme is empty here

const theme = {
  colors: {
    primary: "blue",
  },
}

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Button as="primary">Do something</Button>
  </ThemeProvider>
)

export default IndexPage
