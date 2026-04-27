// function updateLight(current) {
//   if (current === 'green') {
//     return 'yellow'
//   } else if (current === 'yellow') {
//     return 'red'
//   }
//   else {
//     return 'green'
//   }
// }

export const updateLight = (current: string): string => {
  return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green'
}