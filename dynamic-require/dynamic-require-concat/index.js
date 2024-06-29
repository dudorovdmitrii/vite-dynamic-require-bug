export function register() {
  var name = "en";
  return require("./compiled/".concat(name, ".json"));
}