module.exports = function check(str, bracketsConfig) {
  let brackets = str.split('');

  if (brackets.length % 2 !== 0) {
    return false;
  }
  while (true) {
    let count = 0;
    for (let i = 0; i < bracketsConfig.length; i++){
      for (let j = 1; j <= brackets.length - 1; j++) {
        if (brackets[j] == bracketsConfig[i][1] && brackets[j-1] == bracketsConfig[i][0]){
          brackets.splice(j-1, 2);
          count = 1;
        }
        if(brackets.length === 0){
          return true;
        }
      }
    }

    if (count === 0) {
      return false;
    }
  }

}
