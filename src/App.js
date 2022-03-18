import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Switch, useLocation } from 'react-router'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './components/Themes'
import GlobalStyle from './globalStyles'
// pages
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Main from './pages/Main'
import MySkills from './pages/MySkills/MySkills'
import Work from './pages/Work/Work'
import Design from './pages/Works/Design/Design'
import Frontend from './pages/Works/Frontend/Frontend';
import Fullstack from './pages/Works/Fullstack/Fullstack';


export default function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>

      {/*framer-motion animation on page change*/}
      <AnimatePresence  exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={Main} />
          <Route path='/about' component={About} />
      {/* <Route  path='/blog' component={Blog} /> */}
          <Route  path='/skills' component={MySkills} />
      {/*  <Route  path='/work' component={Work} /> */}
          <Route  path='/design' component={Design} />
          <Route  path='/frontend' component={Frontend} />
          <Route  path='/fullstack' component={Fullstack} />
        </Switch>
      </AnimatePresence>
        
      </ThemeProvider>
    </>
  )
}

