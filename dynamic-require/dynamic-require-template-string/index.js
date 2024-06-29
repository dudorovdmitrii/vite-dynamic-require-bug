export function register() {
  var name = "en";
  return require(`./compiled/${name}.json`);
}