// Importing the ethers.js library for Ethereum blockchain interaction
require("dotenv").config();
const ethers = require("ethers");
const abi = require("./contractAbi.json");

// Configuration for endpoint and user's private key
const ENDPOINT = process.env.HTTP_PROVIDER_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// Setting up the provider and signer to connect to the Ethereum network via RPC Provider
const provider = new ethers.JsonRpcProvider(ENDPOINT);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const userAddress = signer.address;

// Contract details: JTG contract on the Sepolia test network
const contractAddress = "0x260179Ba5D464B56A53274C35fE4c675E6bfE598";
const accountAddress3 = "0x7052aDf4502642944B080663a11071FD6162cce8";
const contractABI = abi.result;

// Instantiating the contract object for interacting with the JTG contract
const contract = new ethers.Contract(contractAddress, contractABI, provider);
const contractWithSigner = contract.connect(signer);

// Reading from the contract
async function readContract() {
  console.log("Reading the balance...");
  // Query the contract for the balance of the specified user address
  const balance = await contract.balanceOf(userAddress);
  // Convert the balance from wei to ether for readability
  const balanceInEther = ethers.formatEther(balance);
  // Log the balance in wei
  console.log(`User's JTG balance in Wei: ${balance}`);
  // Log the balance in ether, providing a more familiar unit of measure
  console.log(`User's JTG balance in Ether: ${balanceInEther}`);
}

// Writing to the contract
async function writeContract() {
  console.log("Calling transfer function...");
  const transactionResponse = await contractWithSigner.transfer(
    accountAddress3,
    ethers.parseEther("20")
  );
  await transactionResponse.wait();
  console.log(`Transaction hash: ${transactionResponse.hash}`);
}

// Call the functions
(async () => {
  // First, read the contract to get the initial state
  await readContract();
  // Next, write to the contract and wait for the transaction to complete
  await writeContract();
  // Finally, read the contract again to see the changes made by the write operation
  await readContract();
})().catch(console.error);
