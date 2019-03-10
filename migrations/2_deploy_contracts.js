//Contract abstraction specific to truffle. Gives an election artifact that represents the smart contract and truffle exp0ses it for us to interact with it eg. in console, testing
var Election = artifacts.require("./Election.sol");

//directive to deploy the contract
module.exports = function(deployer) {
  deployer.deploy(Election);
};