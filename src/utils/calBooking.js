export function normalizeCalLink(input) {
  if (!input) return "";

  return input
    .trim()
    .replace(/^https?:\/\/(app\.)?cal\.com\//, "")
    .replace(/^\/+/, "")
    .replace(/\/+$/, "");
}

export function getCalBookingUrl(input) {
  const calLink = normalizeCalLink(input);
  return calLink ? `https://cal.com/${calLink}` : "";
}
