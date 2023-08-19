import React from 'react'
import {Container} from 'react-bootstrap'
import { Header } from './components/Header'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import HomeScreen from './screens/HomeScreen'
import { Outlet } from 'react-router-dom'



const App = () => {
  return (
    <>
    <ErrorBoundary>
    <Header/>
    <main className='py-3'>
      <Container>
      <Outlet/>
      </Container>
    </main>\
    <Footer/>
    </ErrorBoundary>
    </>
  )
}

export default App