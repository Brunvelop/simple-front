import { useState } from "react";
import { ethers } from "ethers";
import { Box, Button, Flex, Image, Text, ChakraProvider, Link, Textarea} from '@chakra-ui/react';

import nft from './NFT.json'
import gif from "./assets/giphy.gif"

const nftAddress = '0xb50808e7E05F30c83949Eeb7a93cd2D08cFd2B09';
const example_promts = [
    'cute octopus, ultra realistic, concept art, intricate details, highly detailed, photorealistic, octane render, 8 k ',
    'portrait of a cute white anthropomorphic cat, concept art',
    'beautiful centered portrait 3d render of the illuminati baphomet'
]

const MainMint = ({ accounts }) => {
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

    return (
        <ChakraProvider>
            <Flex justify="center" align="center" height="100vh" paddingBottom="15vh">
                <div>
                    <div>
                        <Text fontSize="10vh" textShadow="0 5px #000000">TYPEART</Text>
                        <Text
                            fontSize="3.3vh"
                            fontFamily="Mulish"
                            textShadow="0 2px 2px #000000"
                        >
                            A collection of images generates by you with the help of <Link href={'https://stability.ai/blog/stable-diffusion-public-release'} isExternal>stable difussion</Link>
                        </Text>
                    </div>
                    { isConnected ? (
                        <div>
                            <Box justify="left" marginTop='3vh' marginBottom='3vh'>
                                <Text fontSize="1.8vh"fontFamily="Mulish" align="left" paddingLeft="2vw">1. Type the prompt </Text>
                                <Text fontSize="1.8vh"fontFamily="Mulish" align="left" paddingLeft="2vw">2. Mint </Text>
                                <Text fontSize="1.8vh"fontFamily="Mulish" align="left" paddingLeft="2vw">3. The AI will generate your image as NFT </Text>
                            </Box>
                                
                            
                            <Textarea 
                                placeholder={example_promts[Math.floor(Math.random()*example_promts.length)]}
                                marginTop='1vh'
                                marginBottom='1vh'
                            />
                            <Button 
                                onClick={handleMint}
                                backgroundColor="#D6517D" //66263b
                                borderRadius="5px"
                                boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="1vw"
                                marginTop="1.5vh"
                                textDecoration='line-through'
                                disabled
                            >
                                Mint Prompt
                            </Button>
                            <Box marginTop="15px">
                                {/* <Link 
                                    href={'https://etherscan.io/address/'+nftAddress+'#code'} isExternal
                                    fontSize="12px"
                                >
                                    contract
                                </Link> */}
                                {<Text fontSize="12px">Mint not open yet</Text>}
                            </Box>
                        </div>
                                                   
                    ): (
                        <div>
                            <Box 
                                align="center" 
                                marginTop="2vh" 
                                marginBottom="2vh"
                            >
                                <Image src={gif}  alt='PixChars Collection samples' width="50vh"/>
                            </Box>
                            <Text fontSize="1.7vh">Conect metamask to mint</Text>
                        </div>
                    )}
                </div>
            </Flex>
        </ChakraProvider>
    )
}

export default MainMint;