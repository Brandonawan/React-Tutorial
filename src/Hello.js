import { useState } from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import { Input } from '@chakra-ui/react'

export default function Hello() {
    const [progress, setProgress] = useState(10)

    const handleProgressChange = (e) => {
        const value = parseInt(e.target.value, 10); // Parse input value to integer
        setProgress(value);
    
    }
    console.log(progress)
    return (
        <>
            <CircularProgress  isIndeterminate color='green.300' value={progress}>
                <CircularProgressLabel>{progress}%</CircularProgressLabel>
            </CircularProgress>

           
            <FormControl>
                <FormLabel>Progress</FormLabel>
                <Input type='number' onChange={handleProgressChange}/>
            </FormControl>
        </>
    )
}


