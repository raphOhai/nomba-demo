const formatMoneyToInput = value => value.replace("₦", "").replaceAll(",", "").trim();
const formatMoney = n => "₦" + " " + (Math.round(n * 100) / 100).toLocaleString();
const pluralize = (count, noun, suffix = "s") =>
  `${count} ${noun}${count !== 1 ? suffix : ""}`;

export { formatMoney, formatMoneyToInput, pluralize };
