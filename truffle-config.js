module.exports = {
  compilers: {
    solc: {
      version: "0.8.2",
      settings: {
       optimizer: {
         enabled: true,
         runs: 2
       },
      }
    }
  }
};
