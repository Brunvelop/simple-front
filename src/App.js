import { useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';

import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar'
import theme from './theme'
import bg from './assets/background/bg.gif'

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <Box
        backgroundImage={bg} 
        backgroundRepeat="no-repeat" 
        backgroundSize="cover"
        opacity= "0.85"
      >
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts}/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
