export default function cleanSet(set, startString) {
  if (
    !(set instanceof Set) || typeof startString !== 'string' || startString.length === 0
  ) {
    return '';
  }
  const cleanedValues = Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .filter((value) => value.length > 0);
  return cleanedValues.join('-');
}
