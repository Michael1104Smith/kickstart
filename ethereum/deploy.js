const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const compiledFactotry = require('./build/CampaignFactory.json');
const compiledCampaign = require('./build/Campaign.json');


const provider = new HDWalletProvider(
  'output cat six practice patch travel party country announce clutch chief skirt',
  'https://rinkeby.infura.io/v3/4958272017084c51a75ac539bc44f59d'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(compiledFactotry.abi)
        .deploy({ data: compiledFactotry.evm.bytecode.object })
        .send({ gas: '6000000', from: accounts[0] });

    await result.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '6000000'
    });

    console.log('Contract deployed to', result.options.address);
};
deploy();
