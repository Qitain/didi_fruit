let tokens = [];
if (process.env.DD_TOKEN) {
  if (process.env.DD_TOKEN.indexOf('&') > -1) {
    tokens = process.env.DD_TOKEN.split('&');
  } else if (process.env.DD_TOKEN.indexOf('\n') > -1) {
    tokens = process.env.DD_TOKEN.split('\n');
  } else {
    tokens = [process.env.DD_TOKEN];
  }
}
// console.log(tokens.length)
module.exports = tokens;
