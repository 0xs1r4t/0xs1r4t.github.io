import React from 'react';
import Twemoji from 'react-twemoji';

import GlobalStyle from './components/GlobalStyle'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Twemoji options={{ className: 'twemoji'}}>
        <p>🤠</p>
      </Twemoji>
    </div>
  );
}

export default App