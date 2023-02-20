// Use Closure to imitate Private Methods
const createDeveloper = (function () {
  const name = "Walter Chang";
  const field = "Web";

  return {
    name,
    field,
    getName: () => name,
  };
})();

console.log(createDeveloper.name);
console.log(createDeveloper.field);
createDeveloper.name = "Water Chong";
// Can't change name, because it's a private item.
console.log(createDeveloper.getName());
