import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Main";
import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const theme = extendTheme(
  withDefaultColorScheme({colorScheme:'white'}),
  {
  fonts: {
    heading: `'NotoSans','Inter','Avenir','sans-serif'`,
    body: `'NotoSans','Inter','Avenir','sans-serif'`,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
