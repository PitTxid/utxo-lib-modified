var script = require('./script');
var templates = require('./templates');
for (var key in templates) {
    script[key] = templates[key];
}
module.exports = {
    bitgo: require('./bitgo'),
    bufferutils: require('./bufferutils'),
    Block: require('./block'),
    ECPair: require('./ecpair'),
    ECSignature: require('./ecsignature'),
    HDNode: require('./hdnode'),
    Transaction: require('./transaction'),
    TransactionBuilder: require('./transaction_builder'),
    address: require('./address'),
    coins: require('./coins'),
    crypto: require('./crypto'),
    networks: require('./networks'),
    opcodes: require('bitcoin-ops'),
    script: script
};
