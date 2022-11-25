// SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/d57593c148dad16abe675083464787ca10f789ec/contracts/utils/cryptography/MerkleProof.sol";
contract whiteListCheck{
    bytes32 public merkleRoot=0xad244e5bd3fb328e827d41c235daf10d4022beee814f707874034bc00dd1c448;

    function isWhiteList(bytes32[] calldata _merkleProof,address _minter )public view returns(bytes32){
      bytes32 leaf=keccak256(abi.encodePacked(_minter));
    //   return MerkleProof.verify(_merkleProof,merkleRoot,leaf);
    return leaf;
    }
    
}