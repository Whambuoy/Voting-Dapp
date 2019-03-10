pragma solidity 0.5.0;

//Declare Contract
contract Election{
	//Store candidate
	//Read caandidate
	//A public state variable of string type declaration:On declaring it public, it will be assigned a getter function
	string public candidate;
	//Constructor - Will be ran whenever contract is deployed to the blockchain. Note that constructor name is same as contract name
	constructor() public {
		//state variable (without an underscore at the begining); variable accessible inside the contract and represents data that belongs to teh entire contract
		candidate = "Candidate 1";
	}
}