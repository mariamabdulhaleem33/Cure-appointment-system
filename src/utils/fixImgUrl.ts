export const fixImageUrl = (url) => {
  const parts = url.split("https://");
  return parts.length > 2 ? `https://${parts[2]}` : url;
};
