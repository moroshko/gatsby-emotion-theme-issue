/** @jsx jsx */
import { jsx } from "@emotion/core"

function Button({ as, children }) {
  return (
    <button
      css={theme => {
        console.log(JSON.stringify({ theme }, null, 2))
      }}
    >
      {children}
    </button>
  )
}

export default Button
