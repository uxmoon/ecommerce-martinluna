export function formatPrice(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function formatLink(string) {
  return string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
