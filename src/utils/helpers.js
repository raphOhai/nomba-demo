const formatMoneyToInput = value => value.replace("₦", "").replaceAll(",", "").trim();
const formatMoney = n => "₦" + " " + (Math.round(n * 100) / 100).toLocaleString();

export { formatMoney, formatMoneyToInput };
