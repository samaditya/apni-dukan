import React from 'react'
import {Container} from 'react-bootstrap'
import { Header } from './components/Header'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import { Outlet } from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



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
    <ToastContainer/>
    </ErrorBoundary>
    </>
  )
}

export default App