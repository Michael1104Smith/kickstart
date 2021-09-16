import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0x0c67d115edFBB5F7e85c4da0D716BF5f3aa13cA2'
);

export default instance;
