function firstWord(s) {
  // Trim leading and trailing whitespace
  s = s.trim();

  // Find the index of the first space
  const firstSpaceIndex = s.indexOf(' ');

  // If there is no space, return the entire string
  if (firstSpaceIndex === -1) {
    return s;
  }

  // Return the substring from the beginning to the first space
  return s.substring(0, firstSpaceIndex);
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
