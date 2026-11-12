export function isWebUrl(value) {
  if (typeof value !== 'string') return false;

  try {
    const { protocol } = new URL(value);
    return protocol === 'https:' || protocol === 'http:';
  } catch {
    return false;
  }
}
