import React from 'react'
import {AppBar, Toolbar, styled} from '@mui/material'

const Container = styled(AppBar)`
background: #010E12;
height: 5.5vh;
`


export default function Header() {
  return (
    <>
        <Container position='static'>
            <Toolbar>
            </Toolbar>
        </Container>
    </>
  )
}
