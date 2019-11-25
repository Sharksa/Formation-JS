// retourne true si la variable passée est une primitive
export function isPrimitive(x) {
  console.log(typeof {});
  if (
    typeof x === "undefined" ||
    typeof x === "boolean" ||
    typeof x === "string" ||
    typeof x === "symbol" ||
    typeof x === "object" ||
    typeof x === "number"
  ) {
    return true;
  }

  return false;
}
