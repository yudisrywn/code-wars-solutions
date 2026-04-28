export default function isSquare(n: number): boolean {
  return Math.sqrt(n) % 1 === 0;
};

// export default function isSquare(n: number): boolean {
//   return Number.isInteger(Math.sqrt(n));
// };