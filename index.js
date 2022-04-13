(async function () {
  const IPFS = require("ipfs-core");

  const ipfs = await IPFS.create();

  ipfs.pubsub.publish("/ipfs/test", Buffer.from("Hello, world!"), (err) => {
    console.log('Published to "/ipfs/test"', err);
  });

  ipfs.pubsub.subscribe("/ipfs/test", (msg) => {
    console.log('Subscribed to "/ipfs/test"', msg);
  });

  const topics = await ipfs.pubsub.ls();
  console.log("topics:", topics);
})();
