import React from 'react'
import Container from '../global/Container'
import Logo from './Logo'
import NavSearch from './NavSearch'
import { CardAction } from '../ui/card'
import CardButton from './CardButton'
import DarkMode from './DarkMode'

const Navbar = () => {
  return (
    <nav className='border-b'>
        <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8'>
            <Logo/>
        <NavSearch/>
        <div className='flex gap-4 items-center '>
            <CardButton/>
            <DarkMode/>
        </div>
        </Container>
      navbar
    </nav>
  )
}

export default Navbar
