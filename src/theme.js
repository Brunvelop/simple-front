import '@fontsource/press-start-2p'
import '@fontsource/vt323'


import { extendTheme } from '@chakra-ui/react'

// example theme
const theme = extendTheme({
  fonts: {
    f1: "'Press Start 2P', press-start-2p",
    f2: "'VT323', vt323",
    
  },
});

export default theme;