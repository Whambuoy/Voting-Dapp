var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts){

	/*We get this from Mocha testing framework
	The assertion is gotten from Chai */
	it("Initializes with two candidates", function(){
		//We fetch an instance of the deployed contract, just like in the console
		return Election.deployed().then(function(instance){
			//This call is asynch, thus teh need to execute a promise chain and inject the value of the count
			return instance.candidatesCount();
		}).then(function(count){
			//Then assert that the value is equal to 2
			assert.equal(count, 2);
		});
	});
});