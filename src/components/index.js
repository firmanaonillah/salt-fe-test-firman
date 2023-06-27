import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary p-3">
      <Container className='flex justify-between'>
        <img src='/img/logo.png' alt='logo' />
        <Button style={{border: 'none'}} className='bg-transparent' > <img src='/img/burger.png' alt='burger-button' className='p-2' /></Button>
      </Container>
    </Navbar>
  )
}

export default Header