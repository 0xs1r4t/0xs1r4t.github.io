import React from 'react'

// components
import Link from './components/Link'
import GlobalStyle from './components/GlobalStyle'

// assets
import darkThemeGif from './assets/new-website/dark-theme.gif'

function App() {
  return (
    <div>
      <GlobalStyle />
      <img src={darkThemeGif} alt="new website who dis 👀" />
      <h1>find me on <Link link="https://sirat.xyz/" name="sirat.xyz" /> which is coming real soon! or you can just find me on <Link link="https://github.com/sBx99/" name="github" /> or <Link link="https://linkedin.com/in/siratbaweja/" name="linkedin" /></h1>
    </div>
  )
}

export default App
