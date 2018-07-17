var Voting = artifacts.require("./Voting.sol");
var ECRecovery = artifacts.require("./ECRecovery.sol");

const sigUtil = require("eth-sig-util")

var alice_vote_hash = sigUtil.typedSignatureHash([{ type: 'string', name: 'Message', value: "Vote for Ronaldo"}])
var bob_vote_hash = sigUtil.typedSignatureHash([{ type: 'string', name: 'Message', value: "Vote for Messi"}])
var carol_vote_hash = sigUtil.typedSignatureHash([{ type: 'string', name: 'Message', value: "Vote for Modric"}])

module.exports = function(deployer) {
  deployer.deploy(ECRecovery);
  deployer.link(ECRecovery, Voting);
  deployer.deploy(Voting, ['Ronaldo', 'Messi', 'Modric'], [alice_vote_hash, bob_vote_hash, carol_vote_hash]);
};
