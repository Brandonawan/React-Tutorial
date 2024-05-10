import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import Hello  from "./Hello";


export default function App(){
    return(
        <ChakraProvider>
        <Hello />
        </ChakraProvider>
    )
}