export const formatPrice = (amount: number | string) => {
  let value = amount ? amount.toString() : "0";
  if (value == "0") return "0";
  value = value.replace(/\,/g, "");
  var objRegex = new RegExp("(-?[0-9]+)([0-9]{3})");
  while (objRegex.test(value)) {
    value = value.replace(objRegex, "$1,$2");
  }
  return value;
};
