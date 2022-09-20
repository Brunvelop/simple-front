import React from "react";
import { Box, Button, Flex, Image, Link, ChakraProvider} from '@chakra-ui/react';

import Twitter from "./assets/social-media-icons/twitter_32x32.png"
import Opensea from "./assets/social-media-icons/opensea_32x32.png"
import Youtube from "./assets/social-media-icons/youtube_32x32.png"

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        
        <Flex justify="space-between" align="center" padding={[5,30]} marginBottom={[8,10]}>
            <Flex justify="start" width="40%">
                <Link href="https://twitter.com/pixverses">
                    <Image src={Twitter} boxSize={[8,42]} margin="0 15px"/>
                </Link>
                <Link href="https://opensea.io/collection/pix-chars">
                    <Image src={Opensea} boxSize={[8,42]} margin="0 15px"/>
                </Link>
                <Link href="https://www.youtube.com/c/Pixverses" target="_blank">
                    <Image src={Youtube} boxSize={[8,42]} margin="0 15px"/>
                </Link>
            </Flex>
            {isConnected ? (
                <Box fontFamily="f1" color="white" margin="0 15px">Connected</Box>
            ) : (
                <Button
                    size={['sm','md']}
                    fontFamily="f1"
                    backgroundColor="#D6517D"
                    fontSize={[10,18]}
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color="white"
                    cursor="pointer"
                    onClick={connectAccount}
                >
                    Connect
                </Button>
            )}
        </Flex>
       
    )
}

export default NavBar;