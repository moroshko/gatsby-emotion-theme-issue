/** @jsx jsx */
import { jsx } from "@emotion/core";
import { withTheme } from "emotion-theming";

function Button({ theme, as, children }) {
  console.log("props", JSON.stringify({ theme }, null, 2));

  return (
    <button
      css={theme => {
        console.log("css", JSON.stringify({ theme }, null, 2));
      }}
    >
      {children}
    </button>
  );
}

export default withTheme(Button);
