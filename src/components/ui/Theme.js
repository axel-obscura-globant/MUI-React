import { createTheme } from '@mui/material/styles';

const arcBlack = '#323232';

export default createTheme({
  palette: {
    common: {
      arcBlack: `${arcBlack}`,
      arcOrange: '#FB53245'
    },
    primary: {
      main: `${arcBlack}`,
    }
  }
})