import './App.css';
import Header from "./layout/Header"
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import Layout from './layout/Layout';
import { Typography } from '@mui/material';
import { Outlet } from "react-router-dom"

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#BBD686"
      }
    }
  })

  return (

    <ThemeProvider theme={theme}>
      <Header/>
        <Layout>
          <Typography>
            TERE
          </Typography>
          <Outlet/>
        </Layout>
    </ThemeProvider>

  );
}

export default App;
