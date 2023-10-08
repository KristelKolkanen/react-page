import { Button } from '@mui/material'
import React from 'react'

const Toggle = ({toggleShow}) => {
  return (
    <Button 
    variant='contained'
    onClick={toggleShow}
    >Show</Button>
  )
}

export default Toggle