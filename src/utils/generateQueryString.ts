const generateQueryString = (q: Record<string, any>): string => {
  return Object.entries(q || {})
    .filter(([key, value]) => value && value.toString().length)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};

export { generateQueryString };
