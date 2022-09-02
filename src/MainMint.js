import { useState } from "react";
//import { ethers, BigNumber } from "ethers";
import nft from './NFT.json'
import { getJsonWalletAddress } from "ethers/lib/utils";

import { ethers } from "ethers";

const nftAddress = '0xF814a0B1Af54A97c28c8CF559E24b10Fc82801eD';

const MainMint = ({ accounts, setAccounts}) => {
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
        <div>
            <h1> NFT collection</h1>
            <p>Texto texto texto</p>
            { isConnected ? (
                <div>
                    <button onClick={handleDecrement}>-</button>
                    <button onClick={handleIncrement}>+</button>
                    <input type='number' value={mintAmount} />
                    <div>
                        <button onClick={handleMint}>Free Mint</button>
                    </div>
                </div>
                
            ): (
                <p>You are not connected</p>
            )}
        </div>
    )
}

export default MainMint;