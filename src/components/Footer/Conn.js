import React, { useEffect, useState } from 'react'
import Web3 from "web3";
import Web3Modal from "web3modal";
import Portis from "@portis/web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers, ethers } from "ethers";
let web3Modal;
let provider;
let selectedAccount;



function init() {
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider, // required
            options: {
                infuraId: "6955363c7fb34984948b67b4cebfddca" // required
            }
        }
    };

    web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions // required
    });

    window.w3m = web3Modal;
}

async function fetchAccountData() {
    const web3Provider = new ethers.providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();
    selectedAccount = await signer.getAddress();
    console.log(selectedAccount);
    return selectedAccount;
}

async function refreshAccountData() {
    await fetchAccountData(provider);
}

async function onConnect() {
    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect();
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }

    provider.on("accountsChanged", (accounts) => {
        fetchAccountData();
    });

    provider.on("chainChanged", (chainId) => {
        fetchAccountData();
    });

    provider.on("networkChanged", (networkId) => {
        fetchAccountData();
    });

    await refreshAccountData();
}



async function disconnet() {
    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.clearCachedProvider();
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }

   
}

// isTokenHolder("0xb6f60DB89607943d44ae26756891Ff91F758Ea13");


function Conn() {
    const [account, setAccount] = useState();

    /* If user has loaded a wallet before, load it automatically. */
    useEffect(() => {
        init();
        if (web3Modal.cachedProvider) {
            console.log("connected");
        }
    }, []);


    return (
        <div>
            <button type="primary" onClick={() => onConnect()}>
                Show Portis
            </button>
            <button type="primary" onClick={() => disconnet()}>
                dis Portis
            </button>


        </div>
    )
}

export default Conn
