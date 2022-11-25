const {
    MerkleTree
} = require('merkletreejs');
const whitelist = require('./whitelist.json');
const keccak256 = require('keccak256');

//functions
function buf2hex(buffer) { // buffer is an ArrayBuffer
    return [...new Uint8Array(buffer)]
        .map(x => x.toString(16).padStart(2, '0'))
        .join("");
}

//
const leaves = whitelist.map(x => keccak256(x))
const tree = new MerkleTree(leaves, keccak256)
const root = tree.getRoot()
let hexroot = '0x' + buf2hex(root);
hexroot = hexroot;
const leaf = keccak256('0x5B38Da6a701c568545dCfcB03FcB875f56beddC4')
const hexleaf = '0x' + buf2hex(leaf)
const proof = tree.getProof(leaf)
const hexproof = tree.getProof(leaf).map(x => "0x" + buf2hex(x.data))
const positions = tree.getProof(leaf).map(x => x.position === 'right' ? 1 : 0)

console.log("hexroot: ", hexroot)
console.log("hexleaf: ", hexleaf)
console.log("hexproof: ", hexproof)
console.log("positions: ", positions)
// [
// [
//     "0x0cc516315f4d16d9bc72867ee11a70eb85535f52fe7c99e7ec28194e9b30cd99",
//     "0x0021643bf0e4b9249964dc88e6a330cbe732ad08a940fcc8fc7965fa473ff253"
// ]