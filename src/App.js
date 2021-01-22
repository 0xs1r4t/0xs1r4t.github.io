import React from 'react'

// components
import GlobalStyle from './components/GlobalStyle'

// assets
import darkThemeGif from './assets/dark-theme.gif';

function App() {
  return (
    <div>
      <GlobalStyle />
      <img src={darkThemeGif} alt="new website who dis 👀" />
      <h1>find me on <a href="https://sirat.xyz" className="highlight" target="_blank" rel="noopener noreferrer">sirat.xyz</a></h1>
    </div>
  )
}

export default App
