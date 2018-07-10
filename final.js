var ethers = require('ethers');

var Contract = ethers.Contract;
var Wallet = ethers.Wallet;
var providers = ethers.providers;

var network = providers.networks.ropsten;
// var etherscanProvider = new providers.InfuraProvider(network);
var etherscanProvider = new providers.EtherscanProvider(network);

var privateKey = "0xe2eb333fa5d664872489fae18a257a77f2a1c19eeed8aeebf5c4889ec2cb8aab";
var wallet = new Wallet(privateKey, etherscanProvider);
// console.log("Address: " + wallet.address);

var tokenAddress = '0x4ede434043c47e9774cd7d28a040c28dd757ddfa';
var tokenABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "allowed",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "remaining",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_initialAmount",
				"type": "uint256"
			},
			{
				"name": "_tokenName",
				"type": "string"
			},
			{
				"name": "_decimalUnits",
				"type": "uint8"
			},
			{
				"name": "_tokenSymbol",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	}
];

var tokenContract = new Contract(tokenAddress, tokenABI, wallet);
var to = [
		'0x49dBa8f906c745B0a82f4D21E02BAFD7Df1a0be4',
		'0xE819ff894Dfb168A6471614227A3fAEaBEb2d126',
		'0xCC0BA9fd462005d7ae61256591a52E808A8F6c8a',
		'0x6c4402c49259E99d65cFc4c878FB162F74BE9958',
		'0xBB790f7752188637B72acd1fA7582c062C52Ebc5',
		'0x8c25b419f5E1573D9444942bA495A437b6A5A921',
		'0xFac0B36b787636273fE2038b7C7eD449f6aF11f5',
		'0xB242476bd1F9E533B8AAA58eD2800F8b27c22C3A',
		'0x01c35164C1B5430F69eb5Cb1D0ae021Cca7335FB'
		];

var utils = require('ethers').utils;
var amount = utils.bigNumberify('1000000000000000000');

var iface = new ethers.Interface(tokenABI);

function generateTX(count, transactionCount) {
	var txInfo = iface.functions.transfer(to[count], amount);
	var data = txInfo.data;

	// console.log(data);

	var transaction = {
    	nonce: transactionCount + count,
    	gasLimit: 150000,
    	gasPrice: utils.bigNumberify("10000000000"),

	    to: "0x88a5C2d9919e46F883EB62F7b8Dd9d0CC45bc290",

    	value: utils.parseEther("0.0"),
    	data: data,

    	// This ensures the transaction cannot be replayed on different networks
    	chainId: providers.networks.ropsten.chainId

	};


	var signedTransaction = wallet.sign(transaction);

	etherscanProvider.sendTransaction(signedTransaction).then(function(hash) {
    	console.log('Hash' + count + ': ' + hash);
    	// Hash:
	});
}

etherscanProvider.getTransactionCount(wallet.address).then(function(transactionCount) {
	for (let i = 0; i <= 8; i++) {
		console.log(transactionCount);
		setTimeout(function(){generateTX(i, transactionCount)}, 500*i+500);
	}
});





