import { ethers } from "ethers";
import { Box, Button, Flex, Image, Text, Link} from '@chakra-ui/react';

import nft from './NFT.json'
import gif from "./assets/collection-samples.gif"

const nftAddress = '0xb50808e7E05F30c83949Eeb7a93cd2D08cFd2B09';

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
        
        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
            <Box width="520px">
                <div>
                    <Text 
                        fontFamily="f1" fontSize={[32,48]}textAlign="center" 
                        color="white" textShadow="0 5px #000000"
                    >
                        PIXCHARS
                    </Text>
                    <Text
                        textAlign="center" fontSize={[22,30]} letterSpacing="-5.5%"
                        fontFamily="f2" color="white" textShadow="0 2px 2px #000000"
                    >
                        A Free mint collection of 8 bit music and characters (CC0)
                    </Text>
                    <Box align="center" marginTop="20px" marginBottom="20px">
                        <Image src={gif}  alt='PixChars Collection samples' />
                    </Box>
                </div>
                { isConnected ? (
                    <Box align="center">
                        <Button
                            disabled="true"
                            textAlign="center"
                            onClick={handleMint}
                            backgroundColor="#D6517D"
                            borderRadius="5px"
                            boxShadow="0px 2px 2px 1px #0F0F0F"
                            color="white"
                            cursor="pointer"
                            fontFamily="f1"
                            padding="15px"
                            marginTop="10px"
                        >
                            Free Mint
                        </Button>
                        <Box marginTop="15px">
                            {/* <Link 
                                href={'https://etherscan.io/address/'+nftAddress+'#code'} isExternal
                                fontSize="12px"
                            >
                                contract
                            </Link> */}
                            <Text color="white" fontFamily="f1" fontSize={[10,14]}>Sold out!</Text>
                        </Box>
                    </Box>
                                                
                ): (
                    <Text 
                        textAlign="center" color="white" fontFamily="f1" fontSize={[10,16]}
                        
                    >
                        Conect metamask to mint
                    </Text>
                )}
            </Box>
        </Flex>
        
    )
}

export default MainMint;