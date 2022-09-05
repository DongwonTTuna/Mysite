import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from 'react-router-dom';
import App from "./Main";
import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
  '3xl': '2600px',
}

const theme = extendTheme(
  withDefaultColorScheme({colorScheme:'white'}),
  {
  fonts: {
    heading: `'NotoSans','Inter','Avenir','sans-serif'`,
    body: `'NotoSans','Inter','Avenir','sans-serif'`,
  }, breakpoints,
  
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <ChakraProvider theme={theme} resetCSS={false}>
    <App />
  </ChakraProvider>
  </Router>
);
