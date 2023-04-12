// FROM https://docs.infura.io/infura/tutorials/ethereum/retrieve-and-display-erc-721-and-erc-1155-tokens

const Web3 = require('web3');
//const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/76baae7d777646a0a4be9efc6be8b52c')); // Mainnet
const web3 = new Web3(new Web3.providers.HttpProvider('https://polygon-mainnet.g.alchemy.com/v2/c1p2AIzpBgGcBs5YYwxmzrZ70vAzrCOr'));// Polygon

const uriABI = [
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "uri",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

//const tokenContract = "0x76be3b62873462d2142405439777e971754e8e77" // test
const game2Contract = "0xcea52c1ef5c782701e170ed8daaf8597e8999f4d" // token Game 2
const tokenId = 1

//const contract = new web3.eth.Contract(uriABI, tokenContract)
const gameContract = new web3.eth.Contract(uriABI, game2Contract)

async function getNFTMetadata() {
    const result = await gameContract.methods.uri(tokenId).call()

    console.log(result); // https://nftdata.parallelnft.com/api/parallel-alpha/ipfs/QmSwnqTmpwvZH51Uv47opPUxGYx2nknYmGoKoRJQRMDcLL
}

getNFTMetadata() //returns URL https://bafybeibzycv5ssbt4z342syyrpyqw4l5ptzs2qjisdpovnph7ajqpcpgy4.ipfs.nftstorage.link/1.json

// TEST

