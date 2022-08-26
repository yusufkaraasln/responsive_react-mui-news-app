import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
      contrastText: blue[500],
    },
    myButton: {
      backgroundColor: "red",
      color: "white",
      border : "1px solid black",
    },
  },
});
