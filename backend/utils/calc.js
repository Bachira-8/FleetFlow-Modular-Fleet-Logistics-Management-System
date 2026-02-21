export const calculateDistance = (start, end) => end - start;

export const calculateROI = (revenue, cost, acquisition) =>
  (revenue - cost) / acquisition;