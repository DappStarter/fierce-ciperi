require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan random place arrow include end army ghost'; 
let testAccounts = [
"0x9a9f2ab9cd5107bbe32e73958a431df82aec7465b43754ea429ea9b411df9bf4",
"0x184d30db20357ff00159dc04632765c870fcdd9f4aa610ae96dc2a6b09b5a855",
"0x02e6496a8e95165e9baf65f6bc796ad48b127b6db850c5b5da987a3a57ca8faf",
"0x8f74bf8bacd8e4ea0deea450e06374a1c021abf992e256596a46989ee338d9a7",
"0xc087d62979be4d8a39d19301df33f126929b86fa8e0906fc39eb7cc329c76b95",
"0x6db91ff6e8e34675ba09f17879ff9c67b5efe19afa644e7bfbd241123c4dc4ce",
"0x68251241926bd76886f2baae5ba3f511e6929bf429bbae64005cb5cd069f3208",
"0xcf5e855f4c088986b68262ffe364c9ed752d502472980b4b55ef0ef9e54e2f33",
"0xc4e1fe0b784a8e71e4f7bfd3b3745afa707f179bade3b0ef7cf213bbebb23681",
"0x6c74e73975915b5c3fc472f2627fed0e1cdda65d8c8d59ad85a7fe32fd55a760"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

