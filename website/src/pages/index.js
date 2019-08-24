import React from "react"
import ThemeProvider from "../../../src/ThemeProvider"
import Button from "../../../src/components/button"

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
