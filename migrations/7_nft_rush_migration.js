var NftRush = artifacts.require("./NftRush.sol");
var Crowns = artifacts.require("./CrownsToken.sol");
var Factory = artifacts.require("./NFTFactory.sol");

module.exports = function(deployer, network) {
    if (network == "development") {
	deployer.deploy(NftRush, Crowns.address, Factory.address).then(function(){
	    console.log("Staking contract was deployed at address: "+NftRush.address);
	    console.log("It is using Crowns (CWS) Token at address: "+Crowns.address);
	    console.log("To mint NFT it is using NFT Factory at address: "+Factory.address);
	});
    } else if (network == "rinkeby") {
        deployer.deploy(NftRush, process.env.CROWNS_RINKEBY, Factory.address).then(function(){
	    console.log("Staking contract was deployed at address: "+NftRush.address);
	    console.log("It is used with Crowns (CWS) Token at address: "+process.env.CROWNS_RINKEBY);
	    console.log("To mint NFT it is using NFT Factory at address: "+Factory.address);
	});
    }
};
