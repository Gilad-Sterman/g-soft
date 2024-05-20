import { useEffect, useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { AppHeader } from './cmps/AppHeader'
import { Hero } from './cmps/Hero'
import { Technologies } from './cmps/Technologies'
import { Projects } from './cmps/Projects'
import { About } from './cmps/About'
import { AppFooter } from './cmps/AppFooter'
import { Process } from './cmps/Process'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      anchorPlacement: 'top-bottom',
    })
  }, [])

  return (
    <>
      <section className='full-Page'>
        <AppHeader />
        <a
          href="https://wa.me/972585003431"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
        <Hero />
        <Projects />
        <Technologies />
        <Process />
        <About />
        <AppFooter />
      </section>
    </>
  )
}

export default App
