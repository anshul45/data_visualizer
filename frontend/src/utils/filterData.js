export const generateFilterData = (data, property) => {
  const counts = data.reduce((acc, item) => {
    const key = item[property];

    if (key !== "" && key !== null) {
      acc[key] = (acc[key] || 0) + 1;
    }

    return acc;
  }, {});

  const result = Object.keys(counts)
    .map((key) => ({
      [property]: key,
      count: counts[key],
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 15);

  return result;
};
