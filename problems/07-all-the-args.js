function allTheArgs(func, ...args) {
  // Your code here
  // return func.bind(null, ...args);
  return func.bind(allTheArgs, ...args);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
