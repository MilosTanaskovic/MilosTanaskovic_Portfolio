import React from 'react'
import { Route, Switch } from 'react-router'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './components/Themes'
import GlobalStyle from './globalStyles'
// pages
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Main from './pages/Main'
import MySkills from './pages/MySkills/MySkills'
import Work from './pages/Work/Work'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/about' component={About} />
          <Route  path='/blog' component={Blog} />
          <Route  path='/work' component={Work} />
          <Route  path='/skills' component={MySkills} />
        </Switch>
      </ThemeProvider>
    </>
  )
}

