"use strict";
function main(argv) {
  let name = '';
  if (argv.length > 0) {
    name = argv[0]
  }
  console.log(`Hello ${name}!`);
}
module.exports = main;