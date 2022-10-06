function lengthOfLongestSubstring(s: string): number {
  if (!s) {
    return 0;
  }

  const variants: string[] = [];
  for (let i = 0; i < s.length; i++) {
    let substr = s[i];
    for (let j = i + 1; j < s.length; j++) {
      const char = s[j];
      if (substr.indexOf(char) === -1) {
        substr += char;
      } else {
        break;
      }
    }
    variants.push(substr);
  }

  return Math.max(...variants.map((str) => str.length));
}

console.log(
  lengthOfLongestSubstring('dvdf'),
  lengthOfLongestSubstring('abcabcbb'),
  lengthOfLongestSubstring(''),
  lengthOfLongestSubstring('  '),
  lengthOfLongestSubstring('    ')
);
