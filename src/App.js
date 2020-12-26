import React from 'react';

import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'
import Description from './components/Description'
import Links from './components/Links'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Description />
      <Links />
    </div>
  );
}

export default App