export function formatLocation(location: string): string {
  if (!location) {
    return "";
  }
  const locationObj = JSON.parse(location);
  return `${locationObj.city}, ${locationObj.country}`;
}
