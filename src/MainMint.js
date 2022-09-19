import { useState } from "react";
import { ethers } from "ethers";
import { Box, Button, Flex, Image, Text, ChakraProvider, Link} from '@chakra-ui/react';

import nft from './NFT.json'
import gif from "./assets/giphy.gif"

const nftAddress = '0xb50808e7E05F30c83949Eeb7a93cd2D08cFd2B09';

const MainMint = ({ accounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint(){
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                nftAddress,
                nft.abi,
                signer
            );
            try {
                const response = await contract.freeMint()
                console.log('response:', response)
            } catch (err) {
                console.log('error: ', err)
            }
        }
    }

    const handleDecrement = () => {
        if ( mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if ( mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <ChakraProvider>
            <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
                <Box width="520px">
                    <div>
                        <Text fontSize="48px" textShadow="0 5px #000000">PIXCHARS</Text>
                        <Text
                            fontSize="30px"
                            letterSpacing="-5.5%"
                            fontFamily="VT323"
                            textShadow="0 2px 2px #000000"
                        >
                            A Free mint collection of 8 bit music and characters (CC0)
                        </Text>
                        <Box align="center" marginTop="20px" marginBottom="20px">
                            <Image src={gif}  alt='PixChars Collection samples' />
                        </Box>
                    </div>
                    { isConnected ? (
                        <div>
                            {/* <Flex align="center" justify="center">
                                <button onClick={handleDecrement}>-</button>
                                <button onClick={handleIncrement}>+</button>
                                <input type='number' value={mintAmount} />
                            </Flex> */}
                            
                            <Button 
                                onClick={handleMint}
                                backgroundColor="#D6517D" //66263b
                                borderRadius="5px"
                                boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                marginTop="10px"
                                //textDecoration='line-through'
                            >
                                Free Mint
                            </Button>
                            <Box marginTop="15px">
                                <Link 
                                    href={'https://etherscan.io/address/'+nftAddress+'#code'} isExternal
                                    fontSize="12px"
                                >
                                    contract
                                </Link>
                                {/* <Text fontSize="12px">Sold out!</Text> */}
                            </Box>
                        </div>
                                                   
                    ): (
                        <Text>Conect metamask to mint</Text>
                    )}
                </Box>
            </Flex>
        </ChakraProvider>
    )
}

export default MainMint;