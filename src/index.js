import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  colors: {
    mainBg: '#f5f4fa',
    card: 'white',
    textGrey: '#808080',
    greyBg: '#d3d3d3',
    offline: 'red',
    online: 'green',
  },
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
