import { ThemeProvider } from "@emotion/react";
import React from "react";
import theme from "./Theme";
import { AppBar, Toolbar } from "@mui/material";

export default function Header(){
  return(
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          ARC
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}