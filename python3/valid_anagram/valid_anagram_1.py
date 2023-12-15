class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # Check if the lengths of the two strings are different, if so, they can't be anagrams.
        if len(s) != len(t):
            return False

        # Create a dictionary to store the frequency of each character in the first string.
        # Increment the count for each character or initialize to 0 if not present.
        map_table = {}
        for i in s:
            map_table[i] = map_table.setdefault(i, 0) + 1

        # Iterate through the second string and check against the dictionary.
        # If the character is not in the dictionary or has a count of 0, they are not anagrams.
        # Decrement the count for the character since it's matched in the second string.
        for j in t:
            if j not in map_table or map_table[j] == 0:
                return False
            map_table[j] -= 1

        # If all characters are matched, the strings are anagrams.
        return True

if __name__ == "__main__":
    solution = Solution()

    # Example 1: Anagrams
    str1 = "listen"
    str2 = "silent"
    result1 = solution.isAnagram(str1, str2)
    print(f'"{str1}" and "{str2}" are anagrams: {result1}')

    # Example 2: Not anagrams (different lengths)
    str3 = "hello"
    str4 = "world"
    result2 = solution.isAnagram(str3, str4)
    print(f'"{str3}" and "{str4}" are anagrams: {result2}')

    # Example 3: Not anagrams (different characters)
    str5 = "abc"
    str6 = "xyz"
    result3 = solution.isAnagram(str5, str6)
    print(f'"{str5}" and "{str6}" are anagrams: {result3}')
