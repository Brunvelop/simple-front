import React from "react";
import { Box, Button, Flex, Image, Link, Spacer, ChakraProvider} from '@chakra-ui/react';
import Twitter from "./assets/social-media-icons/twitter_32x32.png"
import Opensea from "./assets/social-media-icons/opensea_32x32.png"

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
        <ChakraProvider>
            <Flex justify="space-between" align="center" padding="30px">
                <Flex justify="start" width="40%">
                    <Link href="https://twitter.com/pixverses">
                        <Image src={Twitter} boxSize="42px" margin="0 15px"/>
                    </Link>
                    <Link href="https://opensea.io/Pixverses?tab=created">
                        <Image src={Opensea} boxSize="42px" margin="0 15px"/>
                    </Link>
                </Flex>
                {isConnected ? (
                    <Box margin="0 15px">Connected</Box>
                ) : (
                    <Button
                        backgroundColor="#D6517D"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        margin="0 15px"
                        onClick={connectAccount}
                    >
                        Connect
                    </Button>
                )}
            </Flex>
        </ChakraProvider>
    )
}

export default NavBar;