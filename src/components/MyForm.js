import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const MyForm = () => {

    const [name, setname] = useState("")
    //const [school, setschool] = useState("")
    const [myForm, setmyForm] = useState(null)

    const saveFields = event => {

        setmyForm(previous => ({
            ...previous,
            test: event.target.value
        }))
    }
    const submitForm = event => {
        event.preventDefault()

        console.log({name, myForm})
    }

  return (        
    <form onSubmit={submitForm}>
        <Box 
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "2em"
        }}
        >
            <TextField
            required
            id="outlined-basic" 
            label="Name" 
            variant="outlined"
            onChange={event => setname(event.target.value)}
            />

            <TextField 
            id="filled-basic" 
            label="School" 
            variant="filled"
            onChange={saveFields}
            />

            <Button
            type='submit'
            variant="contained"
            >Submit</Button>
        </Box>
    </form>

  )
}

export default MyForm