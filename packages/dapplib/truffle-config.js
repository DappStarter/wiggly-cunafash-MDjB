require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name random stick slow grid argue sure genuine'; 
let testAccounts = [
"0x6825c1b43acfa10d6dc9c97f93ecbc267dbc1b80c0bad563426ea1cd9720e3c8",
"0xa225bb8407131781ebcf1001640163c013362cd003b284f938071a72e2222820",
"0x88a56ca7b765024c11661210d92c60e9bb5736c7c8237c38bac9ad57fdf4fcdf",
"0xf8c7ac7274662ec0eafb1c2c5ceaafddbcd7b57b90870f2b0b24f206d82b85fd",
"0x7ae5e1605eaf85a5128e20945a20a8eac81ebf4a82e7d72dcb6f5d6396541f9b",
"0x919eb80c487a66c27625c0d96ce664150b91c231bb46b58b7840c5c4dc1cb8d9",
"0x0259e743b0caea8d7e38abd4362f01fc3cc8952b6478f48dc5fa5318a2ae074c",
"0xa1f502d6ef005537089e1b0a2261e255a4678b7a43a8a4428c31c0481654041d",
"0xc1c8a4bb94ba44f614961e24d4118bab23b78a5b702f361d22d0405e0f477b97",
"0x8592b5ee03ad815f0560f779c5ef1a331713d20e649bcb27ee57f47e45e3ab88"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

