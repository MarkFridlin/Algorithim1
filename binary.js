/* Binary  =11011
disect the string 1 1 0 1 1
for every value from right to left, multiply by 2^x
print(new value)
 */
function binarytodecimal(binary) {
  for (let i = binary.length; i !== 0; i--) {
    binary[i] = 2 ** i;
  }
  return int(binary);
}
console.log(binarytodecimal("1010"));
