# Ethers.js Example

Whether you're a developer looking to integrate blockchain functionality into your applications or simply curious about interacting directly with smart contracts, this guide will give you the knowledge and tools you need to start interacting with Ethereum smart contracts effectively.

## Interacting with Smart Contracts with Ethers.js

Ethers.js is one of the most popular Ethereum libraries to interact with Ethereum and other EVM-compatible blockchains. Let's learn how to interact with smart contracts directly with the Ethers.js library.

## Setting Up the Project

Step 1: Ensure Node.js is installed on your computer. If not, install it.

Step 2: Create a new folder and initialize a new Node.js project in the newly created folder.

```bash
mkdir ethersjs-example && cd ethersjs-example
npm init --y
```

Step 3: Add Ethers.js and dotenv to your project.

```bash
npm install ethers dotenv
```

Step 4: Create a new JavaScript file (e.g., `index.js`) and a `.env` file.

```bash
echo > index-ethers.js
echo > .env
```

Step 5: Add your sensitive information (Endpoint HTTP URL and your wallet's private key) to the `.env` file.

Open the `.env` file and replace YOUR_ENDPOINT_HTTP_URL and YOUR_WALLET_PRIVATE_KEY with your endpoint URL and your wallet's private key (to sign transactions), respectively.

```
HTTP_PROVIDER_URL = "YOUR_ENDPOINT_HTTP_URL"
PRIVATE_KEY = "YOUR_WALLET_PRIVATE_KEY"
```

Step 6: Initialize the connection and set up the code.

Open the `index.js` file and add the following code:

This code snippet initializes a connection to an Ethereum smart contract using Ethers.js, setting up the stage for further interactions such as querying balances or initiating transactions through the smart contract's functions.

## Running the Code

Run the command below to run the index-ethers.js file.

```bash
node index.js
```

If everything goes as expected, your console output should be similar to the one below. As seen, after calling the `transfer` function, the JTG balance of the address is increased by 20 JTG.

```bash
Reading the balance...
User's JTG balance in Wei: 999999499000000000000000000
User's JTG balance in Ether: 999999499.0
Calling transfer function...
Transaction hash: 0x51067c53050e1cfde630b6f91308d0dc3fb5916b169305ccc2af49023c22ed1b
Reading the balance...
User's JTG balance in Wei: 999999479000000000000000000
User's JTG balance in Ether: 999999479.0
```

## More Details

For more details, visit: https://www.quicknode.com/guides/ethereum-development/smart-contracts/how-to-interact-with-smart-contracts
