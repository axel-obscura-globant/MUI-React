import { ThemeProvider } from "@emotion/react";
import React from "react";
import theme from "./Theme";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header(){
  return(
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <Typography variant="h3" color='paleturquoise'>
            ARCOPAGES
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}