export const problems = [
  {
    "title": "3Sum",
    "description": `
### Description
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. The solution set must not contain duplicate triplets.

### Example 1
**Input:** -1,0,1,2,-1,-4
**Output:** [[-1,-1,2],[-1,0,1]]

### Example 2
**Input:** 0,1,1
**Output:** []

### Example 3
**Input:** 0,0,0
**Output:** [[0,0,0]]
      `,
    "difficulty": "Medium",
    "testCases": [
      { "input": "-1,0,1,2,-1,-4", "output": "[[-1,-1,2],[-1,0,1]]" },
      { "input": "0,1,1", "output": "[]" },
      { "input": "0,0,0", "output": "[[0,0,0]]" }
    ],
    "template": [
      {
        "language": "Python",
        "languageId": 71,
        "starterCode": "def threeSum(nums: List[int]) -> List[List[int]]:\n    pass",
        "stdInRetrievalCode": "if __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip()\n    nums = list(map(int, input_data.split(',')))\n    print(threeSum(nums))",
        "finalCode": "from typing import List\n\ndef threeSum(nums: List[int]) -> List[List[int]]:\n    nums.sort()\n    result = []\n    for i in range(len(nums) - 2):\n        if i > 0 and nums[i] == nums[i - 1]:\n            continue\n        left, right = i + 1, len(nums) - 1\n        while left < right:\n            s = nums[i] + nums[left] + nums[right]\n            if s == 0:\n                result.append([nums[i], nums[left], nums[right]])\n                while left < right and nums[left] == nums[left + 1]:\n                    left += 1\n                while left < right and nums[right] == nums[right - 1]:\n                    right -= 1\n                left += 1\n                right -= 1\n            elif s < 0:\n                left += 1\n            else:\n                right -= 1\n    return result\n\nif __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip()\n    nums = list(map(int, input_data.split(',')))\n    print(threeSum(nums))"
      },
      {
        "language": "JavaScript",
        "languageId": 63,
        "starterCode": "const threeSum = (nums) => {\n  \n};",
        "stdInRetrievalCode": "process.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(\",\").map(Number);\n    console.log(threeSum(input));\n});",
        "finalCode": "const threeSum = (nums) => {\n    nums.sort((a, b) => a - b);\n    const result = [];\n\n    for (let i = 0; i < nums.length - 2; i++) {\n        if (i > 0 && nums[i] === nums[i - 1]) continue;\n        let left = i + 1, right = nums.length - 1;\n\n        while (left < right) {\n            const sum = nums[i] + nums[left] + nums[right];\n            if (sum === 0) {\n                result.push([nums[i], nums[left], nums[right]]);\n                while (left < right && nums[left] === nums[left + 1]) left++;\n                while (left < right && nums[right] === nums[right - 1]) right--;\n                left++;\n                right--;\n            } else if (sum < 0) {\n                left++;\n            } else {\n                right--;\n            }\n        }\n    }\n    return result;\n};\n\nprocess.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(\",\").map(Number);\n    console.log(threeSum(input));\n});"
      }
    ]
  },
  {
    "title": "169. Majority Element",
    "description": `
### Description
Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

### Example 1
**Input:** nums = [3,2,3]
**Output:** 3

### Example 2
**Input:** nums = [2,2,1,1,1,2,2]
**Output:** 2
      `,
    "difficulty": "Easy",
    "testCases": [
      { "input": "3,2,3", "output": "3" },
      { "input": "2,2,1,1,1,2,2", "output": "2" }
    ],
    "template": [
      {
        "language": "Python",
        "languageId": 71,
        "starterCode": "class Solution:\n    def majorityElement(self, nums: List[int]) -> int:\n        pass",
        "stdInRetrievalCode": "if __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip()\n    nums = list(map(int, input_data.split(',')))\n    print(Solution().majorityElement(nums))",
        "finalCode": "from typing import List\n\nclass Solution:\n    def majorityElement(self, nums: List[int]) -> int:\n        count = 0\n        candidate = None\n\n        for num in nums:\n            if count == 0:\n                candidate = num\n            count += (1 if num == candidate else -1)\n\n        return candidate\n\nif __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip()\n    nums = list(map(int, input_data.split(',')))\n    print(Solution().majorityElement(nums))"
      },
      {
        "language": "JavaScript",
        "languageId": 63,
        "starterCode": "class Solution {\n    majorityElement(nums) {\n        \n    }\n}",
        "stdInRetrievalCode": "process.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(\",\").map(Number);\n    console.log(new Solution().majorityElement(input));\n});",
        "finalCode": "class Solution {\n    majorityElement(nums) {\n        let count = 0;\n        let candidate = null;\n\n        for (let num of nums) {\n            if (count === 0) {\n                candidate = num;\n            }\n            count += (num === candidate) ? 1 : -1;\n        }\n\n        return candidate;\n    }\n}\n\nprocess.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(\",\").map(Number);\n    console.log(new Solution().majorityElement(input));\n});"
      },
      {
        "language": "Java",
        "languageId": 62,
        "starterCode": " class Solution {\n    public int majorityElement(int[] nums) {\n        \n    }\n}",
        "stdInRetrievalCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        int[] nums = Arrays.stream(input.split(\",\")).mapToInt(Integer::parseInt).toArray();\n        System.out.println(new Solution().majorityElement(nums));\n    }\n}",
        "finalCode": "public class Solution {\n    public int majorityElement(int[] nums) {\n        int count = 0;\n        Integer candidate = null;\n\n        for (int num : nums) {\n            if (count == 0) {\n                candidate = num;\n            }\n            count += (num == candidate) ? 1 : -1;\n        }\n\n        return candidate;\n    }\n}\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        int[] nums = Arrays.stream(input.split(\",\")).mapToInt(Integer::parseInt).toArray();\n        System.out.println(new Solution().majorityElement(nums));\n    }\n}"
      },
      {
        "language": "C++",
        "languageId": 54,
        "starterCode": "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        \n    }\n};",
        "stdInRetrievalCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    vector<int> nums;\n    size_t pos = 0;\n    while ((pos = input.find(\",\")) != string::npos) {\n        nums.push_back(stoi(input.substr(0, pos)));\n        input.erase(0, pos + 1);\n    }\n    nums.push_back(stoi(input));\n    cout << Solution().majorityElement(nums) << endl;\n}",
        "finalCode": "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        int count = 0;\n        int candidate;\n\n        for (int num : nums) {\n            if (count == 0) {\n                candidate = num;\n            }\n            count += (num == candidate) ? 1 : -1;\n        }\n\n        return candidate;\n    }\n};\n\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    vector<int> nums;\n    size_t pos = 0;\n    while ((pos = input.find(\",\")) != string::npos) {\n        nums.push_back(stoi(input.substr(0, pos)));\n        input.erase(0, pos + 1);\n    }\n    nums.push_back(stoi(input));\n    cout << Solution().majorityElement(nums) << endl;\n}"
      }
    ]
  },
  {
    "title": "Find the Index of the First Occurrence in a String",
    "description": `
### Description
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

### Example 1
**Input:** haystack = "sadbutsad", needle = "sad"
**Output:** 0
**Explanation:** "sad" occurs at index 0 and 6. The first occurrence is at index 0, so we return 0.

### Example 2
**Input:** haystack = "leetcode", needle = "leeto"
**Output:** -1
**Explanation:** "leeto" did not occur in "leetcode", so we return -1.
    `,
    "difficulty": "Easy",
    "testCases": [
      { "input": "sadbutsad,sad", "output": "0" },
      { "input": "leetcode,leeto", "output": "-1" }
    ],
    "template": [
      {
        "language": "Python",
        "languageId": 71,
        "starterCode": "class Solution:\n    def strStr(self, haystack: str, needle: str) -> int:\n        pass",
        "stdInRetrievalCode": "if __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(',')\n    haystack, needle = input_data[0], input_data[1]\n    print(Solution().strStr(haystack, needle))",
        "finalCode": "class Solution:\n    def strStr(self, haystack: str, needle: str) -> int:\n        return haystack.find(needle)\n\nif __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(',')\n    haystack, needle = input_data[0], input_data[1]\n    print(Solution().strStr(haystack, needle))"
      },
      {
        "language": "JavaScript",
        "languageId": 63,
        "starterCode": "class Solution {\n    strStr(haystack, needle) {\n        \n    }\n}",
        "stdInRetrievalCode": "process.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(\",\");\n    const haystack = input[0];\n    const needle = input[1];\n    console.log(new Solution().strStr(haystack, needle));\n});",
        "finalCode": "class Solution {\n    strStr(haystack, needle) {\n        return haystack.indexOf(needle);\n    }\n}\n\nprocess.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(\",\");\n    const haystack = input[0];\n    const needle = input[1];\n    console.log(new Solution().strStr(haystack, needle));\n});"
      },
      {
        "language": "Java",
        "languageId": 62,
        "starterCode": "class Solution {\n    public int strStr(String haystack, String needle) {\n        \n    }\n}",
        "stdInRetrievalCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\",\");\n        String haystack = parts[0];\n        String needle = parts[1];\n        System.out.println(new Solution().strStr(haystack, needle));\n    }\n}",
        "finalCode": "class Solution {\n    public int strStr(String haystack, String needle) {\n        return haystack.indexOf(needle);\n    }\n}\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\",\");\n        String haystack = parts[0];\n        String needle = parts[1];\n        System.out.println(new Solution().strStr(haystack, needle));\n    }\n}"
      },
      {
        "language": "C++",
        "languageId": 54,
        "starterCode": "class Solution {\npublic:\n    int strStr(string haystack, string needle) {\n        \n    }\n};",
        "stdInRetrievalCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    size_t pos = input.find(\",\");\n    string haystack = input.substr(0, pos);\n    string needle = input.substr(pos + 1);\n    Solution solution;\n    cout << solution.strStr(haystack, needle) << endl;\n    return 0;\n}",
        "finalCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    int strStr(string haystack, string needle) {\n        return haystack.find(needle);\n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n    size_t pos = input.find(\",\");\n    string haystack = input.substr(0, pos);\n    string needle = input.substr(pos + 1);\n    Solution solution;\n    cout << solution.strStr(haystack, needle) << endl;\n    return 0;\n}"
      }
    ]
  },
  {
    "title": "Rotate Array",
    "description": `
### Description
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

### Example 1
**Input:** nums = [1,2,3,4,5,6,7], k = 3
**Output:** [5,6,7,1,2,3,4]
**Explanation:**
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

### Example 2
**Input:** nums = [-1,-100,3,99], k = 2
**Output:** [3,99,-1,-100]
**Explanation:**
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

### Constraints
1 <= nums.length <= 10^5
-2^31 <= nums[i] <= 2^31 - 1
0 <= k <= 10^5
    `,
    "difficulty": "Medium",
    "testCases": [
      { "input": "1,2,3,4,5,6,7;3", "output": "5,6,7,1,2,3,4" },
      { "input": "-1,-100,3,99;2", "output": "3,99,-1,-100" }
    ],
    "template": [
      {
        "language": "Python",
        "languageId": 71,
        "starterCode": "class Solution:\n    def rotate(self, nums: List[int], k: int) -> None:\n        pass",
        "stdInRetrievalCode": "if __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(';')\n    nums = list(map(int, input_data[0].split(',')))\n    k = int(input_data[1])\n    Solution().rotate(nums, k)\n    print(','.join(map(str, nums)))",
        "finalCode": "class Solution:\n    def rotate(self, nums: List[int], k: int) -> None:\n        k = k % len(nums)\n        nums[:] = nums[-k:] + nums[:-k]\n\nif __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(';')\n    nums = list(map(int, input_data[0].split(',')))\n    k = int(input_data[1])\n    Solution().rotate(nums, k)\n    print(','.join(map(str, nums)))"
      },
      {
        "language": "JavaScript",
        "languageId": 63,
        "starterCode": "class Solution {\n    rotate(nums, k) {\n        \n    }\n}",
        "stdInRetrievalCode": "process.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(';');\n    const nums = input[0].split(',').map(Number);\n    const k = parseInt(input[1]);\n    new Solution().rotate(nums, k);\n    console.log(nums.join(','));\n});",
        "finalCode": "class Solution {\n    rotate(nums, k) {\n        k = k % nums.length;\n        nums.unshift(...nums.splice(nums.length - k));\n    }\n}\n\nprocess.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(';');\n    const nums = input[0].split(',').map(Number);\n    const k = parseInt(input[1]);\n    new Solution().rotate(nums, k);\n    console.log(nums.join(','));\n});"
      },
      {
        "language": "Java",
        "languageId": 62,
        "starterCode": "class Solution {\n    void reverse(int[] nums, int i, int j) {\n        \n    }\n\n    public void rotate(int[] nums, int k) {\n        \n    }\n}",
        "stdInRetrievalCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\";\");\n        int[] nums = Arrays.stream(parts[0].split(\",\")).mapToInt(Integer::parseInt).toArray();\n        int k = Integer.parseInt(parts[1]);\n        new Solution().rotate(nums, k);\n        System.out.println(Arrays.toString(nums).replaceAll(\"[\\[\\] ]\", \"\"));\n    }\n}",
        "finalCode": "class Solution {\n    void reverse(int[] nums, int i, int j) {\n        while (i < j) {\n            int temp = nums[i];\n            nums[i] = nums[j];\n            nums[j] = temp;\n            i++;\n            j--;\n        }\n    }\n\n    public void rotate(int[] nums, int k) {\n        k = k % nums.length;\n        reverse(nums, 0, nums.length - 1);\n        reverse(nums, 0, k - 1);\n        reverse(nums, k, nums.length - 1);\n    }\n}\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\";\");\n        int[] nums = Arrays.stream(parts[0].split(\",\")).mapToInt(Integer::parseInt).toArray();\n        int k = Integer.parseInt(parts[1]);\n        new Solution().rotate(nums, k);\n        System.out.println(Arrays.toString(nums).replaceAll(\"[\\[\\] ]\", \"\"));\n    }\n}"
      },
      {
        "language": "C++",
        "languageId": 54,
        "starterCode": "class Solution {\npublic:\n    void rotate(vector<int>& nums, int k) {\n        \n    }\n};",
        "stdInRetrievalCode": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    stringstream ss(input);\n    string nums_str, k_str;\n    getline(ss, nums_str, ';');\n    getline(ss, k_str, ';');\n    vector<int> nums;\n    stringstream nums_ss(nums_str);\n    string num;\n    while (getline(nums_ss, num, ',')) {\n        nums.push_back(stoi(num));\n    }\n    int k = stoi(k_str);\n    Solution().rotate(nums, k);\n    for (int i = 0; i < nums.size(); ++i) {\n        if (i > 0) cout << \",\";\n        cout << nums[i];\n    }\n    cout << endl;\n    return 0;\n}",
        "finalCode": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nclass Solution {\npublic:\n    void rotate(vector<int>& nums, int k) {\n        k = k % nums.size();\n        reverse(nums.begin(), nums.end());\n        reverse(nums.begin(), nums.begin() + k);\n        reverse(nums.begin() + k, nums.end());\n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n    stringstream ss(input);\n    string nums_str, k_str;\n    getline(ss, nums_str, ';');\n    getline(ss, k_str, ';');\n    vector<int> nums;\n    stringstream nums_ss(nums_str);\n    string num;\n    while (getline(nums_ss, num, ',')) {\n        nums.push_back(stoi(num));\n    }\n    int k = stoi(k_str);\n    Solution().rotate(nums, k);\n    for (int i = 0; i < nums.size(); ++i) {\n        if (i > 0) cout << \",\";\n        cout << nums[i];\n    }\n    cout << endl;\n    return 0;\n}"
      }
    ]
  },
  {
    "title": "Valid Palindrome",
    "description": `
### Description
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

### Example 1
**Input:** \`s = "A man, a plan, a canal: Panama"\`
**Output:** \`true\`
**Explanation:** "amanaplanacanalpanama" is a palindrome.

### Example 2
**Input:** \`s = "race a car"\`
**Output:** \`false\`
**Explanation:** "raceacar" is not a palindrome.

### Example 3
**Input:** \`s = " "\`
**Output:** \`true\`
**Explanation:** s is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.

### Constraints
1 <= s.length <= 2 * 10^5
s consists only of printable ASCII characters.
    `,
    "difficulty": "Easy",
    "testCases": [
      { "input": "A man, a plan, a canal: Panama", "output": "true" },
      { "input": "race a car", "output": "false" },
      { "input": " ", "output": "true" }
    ],
    "template": [
      {
        "language": "Python",
        "languageId": 71,
        "starterCode": "class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        pass",
        "stdInRetrievalCode": "if __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip()\n    print(Solution().isPalindrome(input_data))",
        "finalCode": "class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        s = ''.join(char.lower() for char in s if char.isalnum())\n        return s == s[::-1]\n\nif __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip()\n    print(Solution().isPalindrome(input_data))"
      },
      {
        "language": "JavaScript",
        "languageId": 63,
        "starterCode": "class Solution {\n    isPalindrome(s) {\n        \n    }\n}",
        "stdInRetrievalCode": "process.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim();\n    console.log(new Solution().isPalindrome(input));\n});",
        "finalCode": "class Solution {\n    isPalindrome(s) {\n        s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();\n        return s === s.split('').reverse().join('');\n    }\n}\n\nprocess.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim();\n    console.log(new Solution().isPalindrome(input));\n});"
      },
      {
        "language": "Java",
        "languageId": 62,
        "starterCode": "class Solution {\n    public boolean isPalindrome(String s) {\n        \n    }\n}",
        "stdInRetrievalCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        System.out.println(new Solution().isPalindrome(input));\n    }\n}",
        "finalCode": "class Solution {\n    public boolean isPalindrome(String s) {\n        s = s.replaceAll(\"[^a-zA-Z0-9]\", \"\").toLowerCase();\n        return new StringBuilder(s).reverse().toString().equals(s);\n    }\n}\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        System.out.println(new Solution().isPalindrome(input));\n    }\n}"
      },
      {
        "language": "C++",
        "languageId": 54,
        "starterCode": "class Solution {\npublic:\n    bool isPalindrome(string s) {\n        \n    }\n};",
        "stdInRetrievalCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    Solution solution;\n    cout << solution.isPalindrome(input) << endl;\n    return 0;\n}",
        "finalCode": "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool isPalindrome(string s) {\n        string filtered;\n        for (char c : s) {\n            if (isalnum(c)) {\n                filtered += tolower(c);\n            }\n        }\n        string reversed = filtered;\n        reverse(reversed.begin(), reversed.end());\n        return filtered == reversed;\n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n    Solution solution;\n    cout << solution.isPalindrome(input) << endl;\n    return 0;\n}"
      }
    ]
  },
  {
    "title": "Is Subsequence",
    "description": `
### Description
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

### Example 1
**Input:** \`s = "abc"\`, \`t = "ahbgdc"\`
**Output:** \`true\`

### Example 2
**Input:** \`s = "axc"\`, \`t = "ahbgdc"\`
**Output:** \`false\`

### Constraints
0 <= s.length <= 100
0 <= t.length <= 10^4
s and t consist only of lowercase English letters.
    `,
    "difficulty": "Easy",
    "testCases": [
      { "input": "abc,ahbgdc", "output": "true" },
      { "input": "axc,ahbgdc", "output": "false" }
    ],
    "template": [
      {
        "language": "Python",
        "languageId": 71,
        "starterCode": "class Solution:\n    def isSubsequence(self, s: str, t: str) -> bool:\n        pass",
        "stdInRetrievalCode": "if __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(',')\n    s, t = input_data[0], input_data[1]\n    print(Solution().isSubsequence(s, t))",
        "finalCode": "class Solution:\n    def isSubsequence(self, s: str, t: str) -> bool:\n        it = iter(t)\n        return all(char in it for char in s)\n\nif __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(',')\n    s, t = input_data[0], input_data[1]\n    print(Solution().isSubsequence(s, t))"
      },
      {
        "language": "JavaScript",
        "languageId": 63,
        "starterCode": "class Solution {\n    isSubsequence(s, t) {\n        \n    }\n}",
        "stdInRetrievalCode": "process.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(',');\n    const s = input[0];\n    const t = input[1];\n    console.log(new Solution().isSubsequence(s, t));\n});",
        "finalCode": "class Solution {\n    isSubsequence(s, t) {\n        let i = 0, j = 0;\n        while (i < s.length && j < t.length) {\n            if (s[i] === t[j]) i++;\n            j++;\n        }\n        return i === s.length;\n    }\n}\n\nprocess.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(',');\n    const s = input[0];\n    const t = input[1];\n    console.log(new Solution().isSubsequence(s, t));\n});"
      },
      {
        "language": "Java",
        "languageId": 62,
        "starterCode": "class Solution {\n    public boolean isSubsequence(String s, String t) {\n        \n    }\n}",
        "stdInRetrievalCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\",\");\n        String s = parts[0];\n        String t = parts[1];\n        System.out.println(new Solution().isSubsequence(s, t));\n    }\n}",
        "finalCode": "class Solution {\n    public boolean isSubsequence(String s, String t) {\n        int i = 0, j = 0;\n        while (i < s.length() && j < t.length()) {\n            if (s.charAt(i) == t.charAt(j)) i++;\n            j++;\n        }\n        return i == s.length();\n    }\n}\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\",\");\n        String s = parts[0];\n        String t = parts[1];\n        System.out.println(new Solution().isSubsequence(s, t));\n    }\n}"
      },
      {
        "language": "C++",
        "languageId": 54,
        "starterCode": "class Solution {\npublic:\n    bool isSubsequence(string s, string t) {\n        \n    }\n};",
        "stdInRetrievalCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    size_t pos = input.find(\",\");\n    string s = input.substr(0, pos);\n    string t = input.substr(pos + 1);\n    Solution solution;\n    cout << solution.isSubsequence(s, t) << endl;\n    return 0;\n}",
        "finalCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool isSubsequence(string s, string t) {\n        int i = 0, j = 0;\n        while (i < s.length() && j < t.length()) {\n            if (s[i] == t[j]) i++;\n            j++;\n        }\n        return i == s.length();\n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n    size_t pos = input.find(\",\");\n    string s = input.substr(0, pos);\n    string t = input.substr(pos + 1);\n    Solution solution;\n    cout << solution.isSubsequence(s, t) << endl;\n    return 0;\n}"
      }
    ]
  },
  {
    "title": "Reverse Words in a String",
    "description": `
### Description
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

### Example 1
**Input:** \`s = "the sky is blue"\`
**Output:** \`"blue is sky the"\`

### Example 2
**Input:** \`s = "  hello world  "\`
**Output:** \`"world hello"\`
**Explanation:** Your reversed string should not contain leading or trailing spaces.

### Example 3
**Input:** \`s = "a good   example"\`
**Output:** \`"example good a"\`
**Explanation:** You need to reduce multiple spaces between two words to a single space in the reversed string.

### Constraints
1 <= s.length <= 10^4
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.
    `,
    "difficulty": "Medium",
    "testCases": [
      { "input": "the sky is blue", "output": "blue is sky the" },
      { "input": "  hello world  ", "output": "world hello" },
      { "input": "a good   example", "output": "example good a" }
    ],
    "template": [
      {
        "language": "Python",
        "languageId": 71,
        "starterCode": "class Solution:\n    def reverseWords(self, s: str) -> str:\n        pass",
        "stdInRetrievalCode": "if __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip()\n    print(Solution().reverseWords(input_data))",
        "finalCode": "class Solution:\n    def reverseWords(self, s: str) -> str:\n        return ' '.join(reversed(s.split()))\n\nif __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip()\n    print(Solution().reverseWords(input_data))"
      },
      {
        "language": "JavaScript",
        "languageId": 63,
        "starterCode": "class Solution {\n    reverseWords(s) {\n        \n    }\n}",
        "stdInRetrievalCode": "process.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim();\n    console.log(new Solution().reverseWords(input));\n});",
        "finalCode": "class Solution {\n    reverseWords(s) {\n        return s.trim().split(/\\s+/).reverse().join(' ');\n    }\n}\n\nprocess.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim();\n    console.log(new Solution().reverseWords(input));\n});"
      },
      {
        "language": "Java",
        "languageId": 62,
        "starterCode": "class Solution {\n    public String reverseWords(String s) {\n        \n    }\n}",
        "stdInRetrievalCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        System.out.println(new Solution().reverseWords(input));\n    }\n}",
        "finalCode": "class Solution {\n    public String reverseWords(String s) {\n        String[] words = s.trim().split(\"\\\\s+\");\n        Collections.reverse(Arrays.asList(words));\n        return String.join(\" \", words);\n    }\n}\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        System.out.println(new Solution().reverseWords(input));\n    }\n}"
      },
      {
        "language": "C++",
        "languageId": 54,
        "starterCode": "class Solution {\npublic:\n    string reverseWords(string s) {\n        \n    }\n};",
        "stdInRetrievalCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    Solution solution;\n    cout << solution.reverseWords(input) << endl;\n    return 0;\n}",
        "finalCode": "#include <iostream>\n#include <string>\n#include <sstream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n    string reverseWords(string s) {\n        istringstream iss(s);\n        vector<string> words;\n        string word;\n        while (iss >> word) {\n            words.push_back(word);\n        }\n        reverse(words.begin(), words.end());\n        ostringstream oss;\n        for (size_t i = 0; i < words.size(); ++i) {\n            if (i > 0) oss << \" \";\n            oss << words[i];\n        }\n        return oss.str();\n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n    Solution solution;\n    cout << solution.reverseWords(input) << endl;\n    return 0;\n}"
      }
    ]
  },
  {
    "title": "Length of Last Word",
    "description": `
### Description
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

### Example 1
**Input:** \`s = "Hello World"\`
**Output:** \`5\`
**Explanation:** The last word is "World" with length 5.

### Example 2
**Input:** \`s = "   fly me   to   the moon  "\`
**Output:** \`4\`
**Explanation:** The last word is "moon" with length 4.

### Example 3
**Input:** \`s = "luffy is still joyboy"\`
**Output:** \`6\`
**Explanation:** The last word is "joyboy" with length 6.

### Constraints
1 <= s.length <= 10^4
s consists of only English letters and spaces ' '.
There will be at least one word in s.
    `,
    "difficulty": "Easy",
    "testCases": [
      { "input": "Hello World", "output": "5" },
      { "input": "   fly me   to   the moon  ", "output": "4" },
      { "input": "luffy is still joyboy", "output": "6" }
    ],
    "template": [
      {
        "language": "Python",
        "languageId": 71,
        "starterCode": "class Solution:\n    def lengthOfLastWord(self, s: str) -> int:\n        pass",
        "stdInRetrievalCode": "if __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip()\n    print(Solution().lengthOfLastWord(input_data))",
        "finalCode": "class Solution:\n    def lengthOfLastWord(self, s: str) -> int:\n        return len(s.strip().split()[-1])\n\nif __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip()\n    print(Solution().lengthOfLastWord(input_data))"
      },
      {
        "language": "JavaScript",
        "languageId": 63,
        "starterCode": "class Solution {\n    lengthOfLastWord(s) {\n        \n    }\n}",
        "stdInRetrievalCode": "process.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim();\n    console.log(new Solution().lengthOfLastWord(input));\n});",
        "finalCode": "class Solution {\n    lengthOfLastWord(s) {\n        return s.trim().split(/\\s+/).pop().length;\n    }\n}\n\nprocess.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim();\n    console.log(new Solution().lengthOfLastWord(input));\n});"
      },
      {
        "language": "Java",
        "languageId": 62,
        "starterCode": "class Solution {\n    public int lengthOfLastWord(String s) {\n        \n    }\n}",
        "stdInRetrievalCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        System.out.println(new Solution().lengthOfLastWord(input));\n    }\n}",
        "finalCode": "class Solution {\n    public int lengthOfLastWord(String s) {\n        s = s.trim();\n        return s.length() - s.lastIndexOf(' ') - 1;\n    }\n}\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        System.out.println(new Solution().lengthOfLastWord(input));\n    }\n}"
      },
      {
        "language": "C++",
        "languageId": 54,
        "starterCode": "class Solution {\npublic:\n    int lengthOfLastWord(string s) {\n        \n    }\n};",
        "stdInRetrievalCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    Solution solution;\n    cout << solution.lengthOfLastWord(input) << endl;\n    return 0;\n}",
        "finalCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    int lengthOfLastWord(string s) {\n        int length = 0;\n        int i = s.length() - 1;\n        while (i >= 0 && s[i] == ' ') i--;\n        while (i >= 0 && s[i] != ' ') {\n            length++;\n            i--;\n        }\n        return length;\n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n    Solution solution;\n    cout << solution.lengthOfLastWord(input) << endl;\n    return 0;\n}"
      }
    ]
  },
  {
    "title": "Longest Common Prefix",
    "description": `
### Description
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

### Example 1
**Input:** \`strs = ["flower","flow","flight"]\`
**Output:** \`"fl"\`

### Example 2
**Input:** \`strs = ["dog","racecar","car"]\`
**Output:** \`""\`
**Explanation:** There is no common prefix among the input strings.

### Constraints
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
    `,
    "difficulty": "Easy",
    "testCases": [
      { "input": "flower,flow,flight", "output": "fl" },
      { "input": "dog,racecar,car", "output": "" }
    ],
    "template": [
      {
        "language": "Python",
        "languageId": 71,
        "starterCode": "class Solution:\n    def longestCommonPrefix(self, strs: List[str]) -> str:\n        pass",
        "stdInRetrievalCode": "if __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(',')\n    print(Solution().longestCommonPrefix(input_data))",
        "finalCode": "class Solution:\n    def longestCommonPrefix(self, strs: List[str]) -> str:\n        if not strs:\n            return \"\"\n        prefix = strs[0]\n        for s in strs[1:]:\n            while s.find(prefix) != 0:\n                prefix = prefix[:-1]\n                if not prefix:\n                    return \"\"\n        return prefix\n\nif __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(',')\n    print(Solution().longestCommonPrefix(input_data))"
      },
      {
        "language": "JavaScript",
        "languageId": 63,
        "starterCode": "class Solution {\n    longestCommonPrefix(strs) {\n        \n    }\n}",
        "stdInRetrievalCode": "process.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(',');\n    console.log(new Solution().longestCommonPrefix(input));\n});",
        "finalCode": "class Solution {\n    longestCommonPrefix(strs) {\n        if (!strs.length) return \"\";\n        let prefix = strs[0];\n        for (let i = 1; i < strs.length; i++) {\n            while (strs[i].indexOf(prefix) !== 0) {\n                prefix = prefix.substring(0, prefix.length - 1);\n                if (!prefix) return \"\";\n            }\n        }\n        return prefix;\n    }\n}\n\nprocess.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(',');\n    console.log(new Solution().longestCommonPrefix(input));\n});"
      },
      {
        "language": "Java",
        "languageId": 62,
        "starterCode": "class Solution {\n    public String longestCommonPrefix(String[] strs) {\n        \n    }\n}",
        "stdInRetrievalCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] strs = input.split(\",\");\n        System.out.println(new Solution().longestCommonPrefix(strs));\n    }\n}",
        "finalCode": "class Solution {\n    public String longestCommonPrefix(String[] strs) {\n        if (strs.length == 0) return \"\";\n        String prefix = strs[0];\n        for (int i = 1; i < strs.length; i++) {\n            while (strs[i].indexOf(prefix) != 0) {\n                prefix = prefix.substring(0, prefix.length() - 1);\n                if (prefix.isEmpty()) return \"\";\n            }\n        }\n        return prefix;\n    }\n}\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] strs = input.split(\",\");\n        System.out.println(new Solution().longestCommonPrefix(strs));\n    }\n}"
      },
      {
        "language": "C++",
        "languageId": 54,
        "starterCode": "class Solution {\npublic:\n    string longestCommonPrefix(vector<string>& strs) {\n        \n    }\n};",
        "stdInRetrievalCode": "#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    vector<string> strs;\n    size_t pos = 0;\n    while ((pos = input.find(',')) != string::npos) {\n        strs.push_back(input.substr(0, pos));\n        input.erase(0, pos + 1);\n    }\n    strs.push_back(input);\n    Solution solution;\n    cout << solution.longestCommonPrefix(strs) << endl;\n    return 0;\n}",
        "finalCode": "#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string longestCommonPrefix(vector<string>& strs) {\n        if (strs.empty()) return \"\";\n        string prefix = strs[0];\n        for (int i = 1; i < strs.size(); i++) {\n            while (strs[i].find(prefix) != 0) {\n                prefix = prefix.substr(0, prefix.size() - 1);\n                if (prefix.empty()) return \"\";\n            }\n        }\n        return prefix;\n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n    vector<string> strs;\n    size_t pos = 0;\n    while ((pos = input.find(',')) != string::npos) {\n        strs.push_back(input.substr(0, pos));\n        input.erase(0, pos + 1);\n    }\n    strs.push_back(input);\n    Solution solution;\n    cout << solution.longestCommonPrefix(strs) << endl;\n    return 0;\n}"
      }
    ]
  },
  {
    "title": "Ransom Note",
    "description": `
### Description
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

### Example 1
**Input:** \`ransomNote = "a"\`, \`magazine = "b"\`
**Output:** \`false\`

### Example 2
**Input:** \`ransomNote = "aa"\`, \`magazine = "ab"\`
**Output:** \`false\`

### Example 3
**Input:** \`ransomNote = "aa"\`, \`magazine = "aab"\`
**Output:** \`true\`

### Constraints
1 <= ransomNote.length, magazine.length <= 10^5
ransomNote and magazine consist of lowercase English letters.
    `,
    "difficulty": "Easy",
    "testCases": [
      { "input": "a,b", "output": "false" },
      { "input": "aa,ab", "output": "false" },
      { "input": "aa,aab", "output": "true" }
    ],
    "template": [
      {
        "language": "Python",
        "languageId": 71,
        "starterCode": "class Solution:\n    def canConstruct(self, ransomNote: str, magazine: str) -> bool:\n        pass",
        "stdInRetrievalCode": "if __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(',')\n    ransomNote, magazine = input_data[0], input_data[1]\n    print(Solution().canConstruct(ransomNote, magazine))",
        "finalCode": "class Solution:\n    def canConstruct(self, ransomNote: str, magazine: str) -> bool:\n        from collections import Counter\n        ransom_counter = Counter(ransomNote)\n        magazine_counter = Counter(magazine)\n        for char, count in ransom_counter.items():\n            if magazine_counter[char] < count:\n                return False\n        return True\n\nif __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(',')\n    ransomNote, magazine = input_data[0], input_data[1]\n    print(Solution().canConstruct(ransomNote, magazine))"
      },
      {
        "language": "JavaScript",
        "languageId": 63,
        "starterCode": "class Solution {\n    canConstruct(ransomNote, magazine) {\n        \n    }\n}",
        "stdInRetrievalCode": "process.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(',');\n    const ransomNote = input[0];\n    const magazine = input[1];\n    console.log(new Solution().canConstruct(ransomNote, magazine));\n});",
        "finalCode": "class Solution {\n    canConstruct(ransomNote, magazine) {\n        const magazineCount = {};\n        for (const char of magazine) {\n            magazineCount[char] = (magazineCount[char] || 0) + 1;\n        }\n        for (const char of ransomNote) {\n            if (!magazineCount[char]) return false;\n            magazineCount[char]--;\n        }\n        return true;\n    }\n}\n\nprocess.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(',');\n    const ransomNote = input[0];\n    const magazine = input[1];\n    console.log(new Solution().canConstruct(ransomNote, magazine));\n});"
      },
      {
        "language": "Java",
        "languageId": 62,
        "starterCode": "class Solution {\n    public boolean canConstruct(String ransomNote, String magazine) {\n        \n    }\n}",
        "stdInRetrievalCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\",\");\n        String ransomNote = parts[0];\n        String magazine = parts[1];\n        System.out.println(new Solution().canConstruct(ransomNote, magazine));\n    }\n}",
        "finalCode": "class Solution {\n    public boolean canConstruct(String ransomNote, String magazine) {\n        int[] count = new int[26];\n        for (char c : magazine.toCharArray()) {\n            count[c - 'a']++;\n        }\n        for (char c : ransomNote.toCharArray()) {\n            if (count[c - 'a']-- == 0) return false;\n        }\n        return true;\n    }\n}\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\",\");\n        String ransomNote = parts[0];\n        String magazine = parts[1];\n        System.out.println(new Solution().canConstruct(ransomNote, magazine));\n    }\n}"
      },
      {
        "language": "C++",
        "languageId": 54,
        "starterCode": "class Solution {\npublic:\n    bool canConstruct(string ransomNote, string magazine) {\n        \n    }\n};",
        "stdInRetrievalCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    size_t pos = input.find(',');\n    string ransomNote = input.substr(0, pos);\n    string magazine = input.substr(pos + 1);\n    Solution solution;\n    cout << solution.canConstruct(ransomNote, magazine) << endl;\n    return 0;\n}",
        "finalCode": "#include <iostream>\n#include <string>\n#include <unordered_map>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool canConstruct(string ransomNote, string magazine) {\n        unordered_map<char, int> count;\n        for (char c : magazine) {\n            count[c]++;\n        }\n        for (char c : ransomNote) {\n            if (count[c]-- == 0) return false;\n        }\n        return true;\n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n    size_t pos = input.find(',');\n    string ransomNote = input.substr(0, pos);\n    string magazine = input.substr(pos + 1);\n    Solution solution;\n    cout << solution.canConstruct(ransomNote, magazine) << endl;\n    return 0;\n}"
      }
    ]
  },
  {
    "title": "Isomorphic Strings",
    "description": `
### Description
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

### Example 1
**Input:** \`s = "egg"\`, \`t = "add"\`
**Output:** \`true\`
**Explanation:**
The strings s and t can be made identical by:
Mapping 'e' to 'a'.
Mapping 'g' to 'd'.

### Example 2
**Input:** \`s = "foo"\`, \`t = "bar"\`
**Output:** \`false\`
**Explanation:**
The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

### Example 3
**Input:** \`s = "paper"\`, \`t = "title"\`
**Output:** \`true\`

### Constraints
1 <= s.length <= 10^4
t.length == s.length
s and t consist of any valid ASCII character.
    `,
    "difficulty": "Easy",
    "testCases": [
      { "input": "egg,add", "output": "true" },
      { "input": "foo,bar", "output": "false" },
      { "input": "paper,title", "output": "true" }
    ],
    "template": [
      {
        "language": "Python",
        "languageId": 71,
        "starterCode": "class Solution:\n    def isIsomorphic(self, s: str, t: str) -> bool:\n        pass",
        "stdInRetrievalCode": "if __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(',')\n    s, t = input_data[0], input_data[1]\n    print(Solution().isIsomorphic(s, t))",
        "finalCode": "class Solution:\n    def isIsomorphic(self, s: str, t: str) -> bool:\n        s_to_t = {}\n        t_to_s = {}\n        for char_s, char_t in zip(s, t):\n            if char_s in s_to_t and s_to_t[char_s] != char_t:\n                return False\n            if char_t in t_to_s and t_to_s[char_t] != char_s:\n                return False\n            s_to_t[char_s] = char_t\n            t_to_s[char_t] = char_s\n        return True\n\nif __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(',')\n    s, t = input_data[0], input_data[1]\n    print(Solution().isIsomorphic(s, t))"
      },
      {
        "language": "JavaScript",
        "languageId": 63,
        "starterCode": "class Solution {\n    isIsomorphic(s, t) {\n        \n    }\n}",
        "stdInRetrievalCode": "process.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(',');\n    const s = input[0];\n    const t = input[1];\n    console.log(new Solution().isIsomorphic(s, t));\n});",
        "finalCode": "class Solution {\n    isIsomorphic(s, t) {\n        const sToT = new Map();\n        const tToS = new Map();\n        for (let i = 0; i < s.length; i++) {\n            const charS = s[i];\n            const charT = t[i];\n            if (sToT.has(charS) && sToT.get(charS) !== charT) return false;\n            if (tToS.has(charT) && tToS.get(charT) !== charS) return false;\n            sToT.set(charS, charT);\n            tToS.set(charT, charS);\n        }\n        return true;\n    }\n}\n\nprocess.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(',');\n    const s = input[0];\n    const t = input[1];\n    console.log(new Solution().isIsomorphic(s, t));\n});"
      },
      {
        "language": "Java",
        "languageId": 62,
        "starterCode": "class Solution {\n    public boolean isIsomorphic(String s, String t) {\n        \n    }\n}",
        "stdInRetrievalCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\",\");\n        String s = parts[0];\n        String t = parts[1];\n        System.out.println(new Solution().isIsomorphic(s, t));\n    }\n}",
        "finalCode": "class Solution {\n    public boolean isIsomorphic(String s, String t) {\n        if (s.length() != t.length()) return false;\n        Map<Character, Character> sToT = new HashMap<>();\n        Map<Character, Character> tToS = new HashMap<>();\n        for (int i = 0; i < s.length(); i++) {\n            char charS = s.charAt(i);\n            char charT = t.charAt(i);\n            if (sToT.containsKey(charS) && sToT.get(charS) != charT) return false;\n            if (tToS.containsKey(charT) && tToS.get(charT) != charS) return false;\n            sToT.put(charS, charT);\n            tToS.put(charT, charS);\n        }\n        return true;\n    }\n}\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\",\");\n        String s = parts[0];\n        String t = parts[1];\n        System.out.println(new Solution().isIsomorphic(s, t));\n    }\n}"
      },
      {
        "language": "C++",
        "languageId": 54,
        "starterCode": "class Solution {\npublic:\n    bool isIsomorphic(string s, string t) {\n        \n    }\n};",
        "stdInRetrievalCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    size_t pos = input.find(',');\n    string s = input.substr(0, pos);\n    string t = input.substr(pos + 1);\n    Solution solution;\n    cout << solution.isIsomorphic(s, t) << endl;\n    return 0;\n}",
        "finalCode": "#include <iostream>\n#include <string>\n#include <unordered_map>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool isIsomorphic(string s, string t) {\n        unordered_map<char, char> sToT;\n        unordered_map<char, char> tToS;\n        for (int i = 0; i < s.length(); i++) {\n            char charS = s[i];\n            char charT = t[i];\n            if (sToT.count(charS) && sToT[charS] != charT) return false;\n            if (tToS.count(charT) && tToS[charT] != charS) return false;\n            sToT[charS] = charT;\n            tToS[charT] = charS;\n        }\n        return true;\n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n    size_t pos = input.find(',');\n    string s = input.substr(0, pos);\n    string t = input.substr(pos + 1);\n    Solution solution;\n    cout << solution.isIsomorphic(s, t) << endl;\n    return 0;\n}"
      }
    ]
  },
  {
    "title": "Word Pattern",
    "description": `
### Description
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.

### Example 1
**Input:** \`pattern = "abba"\`, \`s = "dog cat cat dog"\`
**Output:** \`true\`
**Explanation:**
The bijection can be established as:
'a' maps to "dog".
'b' maps to "cat".

### Example 2
**Input:** \`pattern = "abba"\`, \`s = "dog cat cat fish"\`
**Output:** \`false\`

### Example 3
**Input:** \`pattern = "aaaa"\`, \`s = "dog cat cat dog"\`
**Output:** \`false\`

### Constraints
1 <= pattern.length <= 10^4
s consists of lowercase English letters and spaces ' '.
    `,
    "difficulty": "Easy",
    "testCases": [
      { "input": "abba,dog cat cat dog", "output": "true" },
      { "input": "abba,dog cat cat fish", "output": "false" },
      { "input": "aaaa,dog cat cat dog", "output": "false" }
    ],
    "template": [
      {
        "language": "Python",
        "languageId": 71,
        "starterCode": "class Solution:\n    def wordPattern(self, pattern: str, s: str) -> bool:\n        pass",
        "stdInRetrievalCode": "if __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(',')\n    pattern, s = input_data[0], input_data[1]\n    print(Solution().wordPattern(pattern, s))",
        "finalCode": "class Solution:\n    def wordPattern(self, pattern: str, s: str) -> bool:\n        words = s.split()\n        if len(pattern) != len(words):\n            return False\n        char_to_word = {}\n        word_to_char = {}\n        for char, word in zip(pattern, words):\n            if char in char_to_word and char_to_word[char] != word:\n                return False\n            if word in word_to_char and word_to_char[word] != char:\n                return False\n            char_to_word[char] = word\n            word_to_char[word] = char\n        return True\n\nif __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(',')\n    pattern, s = input_data[0], input_data[1]\n    print(Solution().wordPattern(pattern, s))"
      },
      {
        "language": "JavaScript",
        "languageId": 63,
        "starterCode": "class Solution {\n    wordPattern(pattern, s) {\n        \n    }\n}",
        "stdInRetrievalCode": "process.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(',');\n    const pattern = input[0];\n    const s = input[1];\n    console.log(new Solution().wordPattern(pattern, s));\n});",
        "finalCode": "class Solution {\n    wordPattern(pattern, s) {\n        const words = s.split(' ');\n        if (pattern.length !== words.length) return false;\n        const charToWord = new Map();\n        const wordToChar = new Map();\n        for (let i = 0; i < pattern.length; i++) {\n            const char = pattern[i];\n            const word = words[i];\n            if (charToWord.has(char) && charToWord.get(char) !== word) return false;\n            if (wordToChar.has(word) && wordToChar.get(word) !== char) return false;\n            charToWord.set(char, word);\n            wordToChar.set(word, char);\n        }\n        return true;\n    }\n}\n\nprocess.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(',');\n    const pattern = input[0];\n    const s = input[1];\n    console.log(new Solution().wordPattern(pattern, s));\n});"
      },
      {
        "language": "Java",
        "languageId": 62,
        "starterCode": "class Solution {\n    public boolean wordPattern(String pattern, String s) {\n        \n    }\n}",
        "stdInRetrievalCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\",\");\n        String pattern = parts[0];\n        String s = parts[1];\n        System.out.println(new Solution().wordPattern(pattern, s));\n    }\n}",
        "finalCode": "class Solution {\n    public boolean wordPattern(String pattern, String s) {\n        String[] words = s.split(\" \");\n        if (pattern.length() != words.length) return false;\n        Map<Character, String> charToWord = new HashMap<>();\n        Map<String, Character> wordToChar = new HashMap<>();\n        for (int i = 0; i < pattern.length(); i++) {\n            char c = pattern.charAt(i);\n            String word = words[i];\n            if (charToWord.containsKey(c) && !charToWord.get(c).equals(word)) return false;\n            if (wordToChar.containsKey(word) && wordToChar.get(word) != c) return false;\n            charToWord.put(c, word);\n            wordToChar.put(word, c);\n        }\n        return true;\n    }\n}\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\",\");\n        String pattern = parts[0];\n        String s = parts[1];\n        System.out.println(new Solution().wordPattern(pattern, s));\n    }\n}"
      },
      {
        "language": "C++",
        "languageId": 54,
        "starterCode": "class Solution {\npublic:\n    bool wordPattern(string pattern, string s) {\n        \n    }\n};",
        "stdInRetrievalCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    size_t pos = input.find(',');\n    string pattern = input.substr(0, pos);\n    string s = input.substr(pos + 1);\n    Solution solution;\n    cout << solution.wordPattern(pattern, s) << endl;\n    return 0;\n}",
        "finalCode": "#include <iostream>\n#include <string>\n#include <unordered_map>\n#include <sstream>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool wordPattern(string pattern, string s) {\n        istringstream iss(s);\n        vector<string> words;\n        string word;\n        while (iss >> word) {\n            words.push_back(word);\n        }\n        if (pattern.length() != words.size()) return false;\n        unordered_map<char, string> charToWord;\n        unordered_map<string, char> wordToChar;\n        for (int i = 0; i < pattern.length(); i++) {\n            char c = pattern[i];\n            string w = words[i];\n            if (charToWord.count(c) && charToWord[c] != w) return false;\n            if (wordToChar.count(w) && wordToChar[w] != c) return false;\n            charToWord[c] = w;\n            wordToChar[w] = c;\n        }\n        return true;\n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n    size_t pos = input.find(',');\n    string pattern = input.substr(0, pos);\n    string s = input.substr(pos + 1);\n    Solution solution;\n    cout << solution.wordPattern(pattern, s) << endl;\n    return 0;\n}"
      }
    ]
  },
  {
    "title": "Valid Anagram",
    "description": `
### Description
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

### Example 1
**Input:** \`s = "anagram"\`, \`t = "nagaram"\`
**Output:** \`true\`

### Example 2
**Input:** \`s = "rat"\`, \`t = "car"\`
**Output:** \`false\`

### Constraints
1 <= s.length, t.length <= 5 * 10^4
s and t consist of lowercase English letters.
    `,
    "difficulty": "Easy",
    "testCases": [
      { "input": "anagram,nagaram", "output": "true" },
      { "input": "rat,car", "output": "false" }
    ],
    "template": [
      {
        "language": "Python",
        "languageId": 71,
        "starterCode": "class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        pass",
        "stdInRetrievalCode": "if __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(',')\n    s, t = input_data[0], input_data[1]\n    print(Solution().isAnagram(s, t))",
        "finalCode": "class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        return sorted(s) == sorted(t)\n\nif __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(',')\n    s, t = input_data[0], input_data[1]\n    print(Solution().isAnagram(s, t))"
      },
      {
        "language": "JavaScript",
        "languageId": 63,
        "starterCode": "class Solution {\n    isAnagram(s, t) {\n        \n    }\n}",
        "stdInRetrievalCode": "process.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(',');\n    const s = input[0];\n    const t = input[1];\n    console.log(new Solution().isAnagram(s, t));\n});",
        "finalCode": "class Solution {\n    isAnagram(s, t) {\n        if (s.length !== t.length) return false;\n        const count = {};\n        for (const char of s) {\n            count[char] = (count[char] || 0) + 1;\n        }\n        for (const char of t) {\n            if (!count[char]) return false;\n            count[char]--;\n        }\n        return true;\n    }\n}\n\nprocess.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(',');\n    const s = input[0];\n    const t = input[1];\n    console.log(new Solution().isAnagram(s, t));\n});"
      },
      {
        "language": "Java",
        "languageId": 62,
        "starterCode": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        \n    }\n}",
        "stdInRetrievalCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\",\");\n        String s = parts[0];\n        String t = parts[1];\n        System.out.println(new Solution().isAnagram(s, t));\n    }\n}",
        "finalCode": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (char c : s.toCharArray()) {\n            count[c - 'a']++;\n        }\n        for (char c : t.toCharArray()) {\n            if (count[c - 'a']-- == 0) return false;\n        }\n        return true;\n    }\n}\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\",\");\n        String s = parts[0];\n        String t = parts[1];\n        System.out.println(new Solution().isAnagram(s, t));\n    }\n}"
      },
      {
        "language": "C++",
        "languageId": 54,
        "starterCode": "class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        \n    }\n};",
        "stdInRetrievalCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    size_t pos = input.find(',');\n    string s = input.substr(0, pos);\n    string t = input.substr(pos + 1);\n    Solution solution;\n    cout << solution.isAnagram(s, t) << endl;\n    return 0;\n}",
        "finalCode": "#include <iostream>\n#include <string>\n#include <unordered_map>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        if (s.length() != t.length()) return false;\n        unordered_map<char, int> count;\n        for (char c : s) {\n            count[c]++;\n        }\n        for (char c : t) {\n            if (count[c]-- == 0) return false;\n        }\n        return true;\n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n    size_t pos = input.find(',');\n    string s = input.substr(0, pos);\n    string t = input.substr(pos + 1);\n    Solution solution;\n    cout << solution.isAnagram(s, t) << endl;\n    return 0;\n}"
      }
    ]
  },
  {
    "title": "Group Anagrams",
    "description": `
### Description
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

### Example 1
**Input:** \`strs = ["eat","tea","tan","ate","nat","bat"]\`
**Output:** \`[["bat"],["nat","tan"],["ate","eat","tea"]]\`
**Explanation:**
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

### Example 2
**Input:** \`strs = [""]\`
**Output:** \`[[""]]\`

### Example 3
**Input:** \`strs = ["a"]\`
**Output:** \`[["a"]]\`

### Constraints
1 <= strs.length <= 10^4
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
    `,
    "difficulty": "Medium",
    "testCases": [
      { "input": "eat,tea,tan,ate,nat,bat", "output": "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]" },
      { "input": "", "output": "[[\"\"]]" },
      { "input": "a", "output": "[[\"a\"]]" }
    ],
    "template": [
      {
        "language": "Python",
        "languageId": 71,
        "starterCode": "class Solution:\n    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\n        pass",
        "stdInRetrievalCode": "if __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(',')\n    print(Solution().groupAnagrams(input_data))",
        "finalCode": "from collections import defaultdict\n\nclass Solution:\n    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\n        anagrams = defaultdict(list)\n        for s in strs:\n            sorted_s = ''.join(sorted(s))\n            anagrams[sorted_s].append(s)\n        return list(anagrams.values())\n\nif __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(',')\n    print(Solution().groupAnagrams(input_data))"
      },
      {
        "language": "JavaScript",
        "languageId": 63,
        "starterCode": "class Solution {\n    groupAnagrams(strs) {\n        \n    }\n}",
        "stdInRetrievalCode": "process.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(',');\n    console.log(new Solution().groupAnagrams(input));\n});",
        "finalCode": "class Solution {\n    groupAnagrams(strs) {\n        const anagrams = {};\n        for (const str of strs) {\n            const sortedStr = str.split('').sort().join('');\n            if (!anagrams[sortedStr]) {\n                anagrams[sortedStr] = [];\n            }\n            anagrams[sortedStr].push(str);\n        }\n        return Object.values(anagrams);\n    }\n}\n\nprocess.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(',');\n    console.log(new Solution().groupAnagrams(input));\n});"
      },
      {
        "language": "Java",
        "languageId": 62,
        "starterCode": "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        \n    }\n}",
        "stdInRetrievalCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] strs = input.split(\",\");\n        System.out.println(new Solution().groupAnagrams(strs));\n    }\n}",
        "finalCode": "import java.util.*;\n\nclass Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        Map<String, List<String>> anagrams = new HashMap<>();\n        for (String str : strs) {\n            char[] charArray = str.toCharArray();\n            Arrays.sort(charArray);\n            String sortedStr = new String(charArray);\n            if (!anagrams.containsKey(sortedStr)) {\n                anagrams.put(sortedStr, new ArrayList<>());\n            }\n            anagrams.get(sortedStr).add(str);\n        }\n        return new ArrayList<>(anagrams.values());\n    }\n}\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] strs = input.split(\",\");\n        System.out.println(new Solution().groupAnagrams(strs));\n    }\n}"
      },
      {
        "language": "C++",
        "languageId": 54,
        "starterCode": "class Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        \n    }\n};",
        "stdInRetrievalCode": "#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    vector<string> strs;\n    size_t pos = 0;\n    while ((pos = input.find(',')) != string::npos) {\n        strs.push_back(input.substr(0, pos));\n        input.erase(0, pos + 1);\n    }\n    strs.push_back(input);\n    Solution solution;\n    vector<vector<string>> result = solution.groupAnagrams(strs);\n    for (const auto& group : result) {\n        cout << \"[\";\n        for (size_t i = 0; i < group.size(); ++i) {\n            if (i > 0) cout << \",\";\n            cout << group[i];\n        }\n        cout << \"]\";\n    }\n    cout << endl;\n    return 0;\n}",
        "finalCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        unordered_map<string, vector<string>> anagrams;\n        for (const string& str : strs) {\n            string sortedStr = str;\n            sort(sortedStr.begin(), sortedStr.end());\n            anagrams[sortedStr].push_back(str);\n        }\n        vector<vector<string>> result;\n        for (const auto& pair : anagrams) {\n            result.push_back(pair.second);\n        }\n        return result;\n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n    vector<string> strs;\n    size_t pos = 0;\n    while ((pos = input.find(',')) != string::npos) {\n        strs.push_back(input.substr(0, pos));\n        input.erase(0, pos + 1);\n    }\n    strs.push_back(input);\n    Solution solution;\n    vector<vector<string>> result = solution.groupAnagrams(strs);\n    for (const auto& group : result) {\n        cout << \"[\";\n        for (size_t i = 0; i < group.size(); ++i) {\n            if (i > 0) cout << \",\";\n            cout << group[i];\n        }\n        cout << \"]\";\n    }\n    cout << endl;\n    return 0;\n}"
      }
    ]
  },
  {
    "title": "Happy Number",
    "description": `
### Description
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

### Example 1
**Input:** \`n = 19\`
**Output:** \`true\`
**Explanation:**
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

### Example 2
**Input:** \`n = 2\`
**Output:** \`false\`

### Constraints
1 <= n <= 2^31 - 1
    `,
    "difficulty": "Easy",
    "testCases": [
      { "input": "19", "output": "true" },
      { "input": "2", "output": "false" }
    ],
    "template": [
      {
        "language": "Python",
        "languageId": 71,
        "starterCode": "class Solution:\n    def isHappy(self, n: int) -> bool:\n        pass",
        "stdInRetrievalCode": "if __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip()\n    n = int(input_data)\n    print(Solution().isHappy(n))",
        "finalCode": "class Solution:\n    def isHappy(self, n: int) -> bool:\n        def get_next(number):\n            return sum(int(char) ** 2 for char in str(number))\n        seen = set()\n        while n != 1 and n not in seen:\n            seen.add(n)\n            n = get_next(n)\n        return n == 1\n\nif __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip()\n    n = int(input_data)\n    print(Solution().isHappy(n))"
      },
      {
        "language": "JavaScript",
        "languageId": 63,
        "starterCode": "class Solution {\n    isHappy(n) {\n        \n    }\n}",
        "stdInRetrievalCode": "process.stdin.on(\"data\", (data) => {\n    const n = parseInt(data.toString().trim(), 10);\n    console.log(new Solution().isHappy(n));\n});",
        "finalCode": "class Solution {\n    isHappy(n) {\n        const getNext = (number) => {\n            return number.toString().split('').reduce((sum, char) => sum + Math.pow(parseInt(char), 2), 0);\n        };\n        const seen = new Set();\n        while (n !== 1 && !seen.has(n)) {\n            seen.add(n);\n            n = getNext(n);\n        }\n        return n === 1;\n    }\n}\n\nprocess.stdin.on(\"data\", (data) => {\n    const n = parseInt(data.toString().trim(), 10);\n    console.log(new Solution().isHappy(n));\n});"
      },
      {
        "language": "Java",
        "languageId": 62,
        "starterCode": "class Solution {\n    public boolean isHappy(int n) {\n        \n    }\n}",
        "stdInRetrievalCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        System.out.println(new Solution().isHappy(n));\n    }\n}",
        "finalCode": "class Solution {\n    public boolean isHappy(int n) {\n        Set<Integer> seen = new HashSet<>();\n        while (n != 1 && !seen.contains(n)) {\n            seen.add(n);\n            n = getNext(n);\n        }\n        return n == 1;\n    }\n\n    private int getNext(int number) {\n        int totalSum = 0;\n        while (number > 0) {\n            int digit = number % 10;\n            number = number / 10;\n            totalSum += digit * digit;\n        }\n        return totalSum;\n    }\n}\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        System.out.println(new Solution().isHappy(n));\n    }\n}"
      },
      {
        "language": "C++",
        "languageId": 54,
        "starterCode": "class Solution {\npublic:\n    bool isHappy(int n) {\n        \n    }\n};",
        "stdInRetrievalCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    Solution solution;\n    cout << solution.isHappy(n) << endl;\n    return 0;\n}",
        "finalCode": "#include <iostream>\n#include <unordered_set>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool isHappy(int n) {\n        auto getNext = [](int number) {\n            int totalSum = 0;\n            while (number > 0) {\n                int digit = number % 10;\n                number = number / 10;\n                totalSum += digit * digit;\n            }\n            return totalSum;\n        };\n        unordered_set<int> seen;\n        while (n != 1 && seen.find(n) == seen.end()) {\n            seen.insert(n);\n            n = getNext(n);\n        }\n        return n == 1;\n    }\n};\n\nint main() {\n    int n;\n    cin >> n;\n    Solution solution;\n    cout << solution.isHappy(n) << endl;\n    return 0;\n}"
      }
    ]
  },
  {
    "title": "Contains Duplicate II",
    "description": `
### Description
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

### Example 1
**Input:** \`nums = [1,2,3,1]\`, \`k = 3\`
**Output:** \`true\`

### Example 2
**Input:** \`nums = [1,0,1,1]\`, \`k = 1\`
**Output:** \`true\`

### Example 3
**Input:** \`nums = [1,2,3,1,2,3]\`, \`k = 2\`
**Output:** \`false\`

### Constraints
1 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
0 <= k <= 10^5
    `,
    "difficulty": "Easy",
    "testCases": [
      { "input": "1,2,3,1;3", "output": "true" },
      { "input": "1,0,1,1;1", "output": "true" },
      { "input": "1,2,3,1,2,3;2", "output": "false" }
    ],
    "template": [
      {
        "language": "Python",
        "languageId": 71,
        "starterCode": "class Solution:\n    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:\n        pass",
        "stdInRetrievalCode": "if __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(';')\n    nums = list(map(int, input_data[0].split(',')))\n    k = int(input_data[1])\n    print(Solution().containsNearbyDuplicate(nums, k))",
        "finalCode": "class Solution:\n    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:\n        num_dict = {}\n        for i, num in enumerate(nums):\n            if num in num_dict and i - num_dict[num] <= k:\n                return True\n            num_dict[num] = i\n        return False\n\nif __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(';')\n    nums = list(map(int, input_data[0].split(',')))\n    k = int(input_data[1])\n    print(Solution().containsNearbyDuplicate(nums, k))"
      },
      {
        "language": "JavaScript",
        "languageId": 63,
        "starterCode": "class Solution {\n    containsNearbyDuplicate(nums, k) {\n        \n    }\n}",
        "stdInRetrievalCode": "process.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(';');\n    const nums = input[0].split(',').map(Number);\n    const k = parseInt(input[1]);\n    console.log(new Solution().containsNearbyDuplicate(nums, k));\n});",
        "finalCode": "class Solution {\n    containsNearbyDuplicate(nums, k) {\n        const numDict = {};\n        for (let i = 0; i < nums.length; i++) {\n            if (numDict[nums[i]] !== undefined && i - numDict[nums[i]] <= k) {\n                return true;\n            }\n            numDict[nums[i]] = i;\n        }\n        return false;\n    }\n}\n\nprocess.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(';');\n    const nums = input[0].split(',').map(Number);\n    const k = parseInt(input[1]);\n    console.log(new Solution().containsNearbyDuplicate(nums, k));\n});"
      },
      {
        "language": "Java",
        "languageId": 62,
        "starterCode": "class Solution {\n    public boolean containsNearbyDuplicate(int[] nums, int k) {\n        \n    }\n}",
        "stdInRetrievalCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\";\");\n        int[] nums = Arrays.stream(parts[0].split(\",\")).mapToInt(Integer::parseInt).toArray();\n        int k = Integer.parseInt(parts[1]);\n        System.out.println(new Solution().containsNearbyDuplicate(nums, k));\n    }\n}",
        "finalCode": "class Solution {\n    public boolean containsNearbyDuplicate(int[] nums, int k) {\n        Map<Integer, Integer> numDict = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            if (numDict.containsKey(nums[i]) && i - numDict.get(nums[i]) <= k) {\n                return true;\n            }\n            numDict.put(nums[i], i);\n        }\n        return false;\n    }\n}\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\";\");\n        int[] nums = Arrays.stream(parts[0].split(\",\")).mapToInt(Integer::parseInt).toArray();\n        int k = Integer.parseInt(parts[1]);\n        System.out.println(new Solution().containsNearbyDuplicate(nums, k));\n    }\n}"
      },
      {
        "language": "C++",
        "languageId": 54,
        "starterCode": "class Solution {\npublic:\n    bool containsNearbyDuplicate(vector<int>& nums, int k) {\n        \n    }\n};",
        "stdInRetrievalCode": "#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    size_t pos = input.find(';');\n    string nums_str = input.substr(0, pos);\n    int k = stoi(input.substr(pos + 1));\n    vector<int> nums;\n    size_t start = 0, end = nums_str.find(',');\n    while (end != string::npos) {\n        nums.push_back(stoi(nums_str.substr(start, end - start)));\n        start = end + 1;\n        end = nums_str.find(',', start);\n    }\n    nums.push_back(stoi(nums_str.substr(start)));\n    Solution solution;\n    cout << solution.containsNearbyDuplicate(nums, k) << endl;\n    return 0;\n}",
        "finalCode": "#include <iostream>\n#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool containsNearbyDuplicate(vector<int>& nums, int k) {\n        unordered_map<int, int> numDict;\n        for (int i = 0; i < nums.size(); i++) {\n            if (numDict.count(nums[i]) && i - numDict[nums[i]] <= k) {\n                return true;\n            }\n            numDict[nums[i]] = i;\n        }\n        return false;\n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n    size_t pos = input.find(';');\n    string nums_str = input.substr(0, pos);\n    int k = stoi(input.substr(pos + 1));\n    vector<int> nums;\n    size_t start = 0, end = nums_str.find(',');\n    while (end != string::npos) {\n        nums.push_back(stoi(nums_str.substr(start, end - start)));\n        start = end + 1;\n        end = nums_str.find(',', start);\n    }\n    nums.push_back(stoi(nums_str.substr(start)));\n    Solution solution;\n    cout << solution.containsNearbyDuplicate(nums, k) << endl;\n    return 0;\n}"
      }
    ]
  },
  {
    "title": "Longest Consecutive Sequence",
    "description": `
### Description
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

### Example 1
**Input:** \`nums = [100,4,200,1,3,2]\`
**Output:** \`4\`
**Explanation:** The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

### Example 2
**Input:** \`nums = [0,3,7,2,5,8,4,6,0,1]\`
**Output:** \`9\`

### Constraints
0 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
    `,
    "difficulty": "Medium",
    "testCases": [
      { "input": "100,4,200,1,3,2", "output": "4" },
      { "input": "0,3,7,2,5,8,4,6,0,1", "output": "9" }
    ],
    "template": [
      {
        "language": "Python",
        "languageId": 71,
        "starterCode": "class Solution:\n    def longestConsecutive(self, nums: List[int]) -> int:\n        pass",
        "stdInRetrievalCode": "if __name__ == \"__main__\":\n    import sys\n    input_data = list(map(int, sys.stdin.read().strip().split(',')))\n    print(Solution().longestConsecutive(input_data))",
        "finalCode": "class Solution:\n    def longestConsecutive(self, nums: List[int]) -> int:\n        num_set = set(nums)\n        longest_streak = 0\n\n        for num in num_set:\n            if num - 1 not in num_set:\n                current_num = num\n                current_streak = 1\n\n                while current_num + 1 in num_set:\n                    current_num += 1\n                    current_streak += 1\n\n                longest_streak = max(longest_streak, current_streak)\n\n        return longest_streak\n\nif __name__ == \"__main__\":\n    import sys\n    input_data = list(map(int, sys.stdin.read().strip().split(',')))\n    print(Solution().longestConsecutive(input_data))"
      },
      {
        "language": "JavaScript",
        "languageId": 63,
        "starterCode": "class Solution {\n    longestConsecutive(nums) {\n        \n    }\n}",
        "stdInRetrievalCode": "process.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(',').map(Number);\n    console.log(new Solution().longestConsecutive(input));\n});",
        "finalCode": "class Solution {\n    longestConsecutive(nums) {\n        const numSet = new Set(nums);\n        let longestStreak = 0;\n\n        for (const num of numSet) {\n            if (!numSet.has(num - 1)) {\n                let currentNum = num;\n                let currentStreak = 1;\n\n                while (numSet.has(currentNum + 1)) {\n                    currentNum += 1;\n                    currentStreak += 1;\n                }\n\n                longestStreak = Math.max(longestStreak, currentStreak);\n            }\n        }\n\n        return longestStreak;\n    }\n}\n\nprocess.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(',').map(Number);\n    console.log(new Solution().longestConsecutive(input));\n});"
      },
      {
        "language": "Java",
        "languageId": 62,
        "starterCode": "class Solution {\n    public int longestConsecutive(int[] nums) {\n        \n    }\n}",
        "stdInRetrievalCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        int[] nums = Arrays.stream(input.split(\",\")).mapToInt(Integer::parseInt).toArray();\n        System.out.println(new Solution().longestConsecutive(nums));\n    }\n}",
        "finalCode": "import java.util.*;\n\nclass Solution {\n    public int longestConsecutive(int[] nums) {\n        Set<Integer> numSet = new HashSet<>();\n        for (int num : nums) {\n            numSet.add(num);\n        }\n\n        int longestStreak = 0;\n\n        for (int num : numSet) {\n            if (!numSet.contains(num - 1)) {\n                int currentNum = num;\n                int currentStreak = 1;\n\n                while (numSet.contains(currentNum + 1)) {\n                    currentNum += 1;\n                    currentStreak += 1;\n                }\n\n                longestStreak = Math.max(longestStreak, currentStreak);\n            }\n        }\n\n        return longestStreak;\n    }\n}\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        int[] nums = Arrays.stream(input.split(\",\")).mapToInt(Integer::parseInt).toArray();\n        System.out.println(new Solution().longestConsecutive(nums));\n    }\n}"
      },
      {
        "language": "C++",
        "languageId": 54,
        "starterCode": "class Solution {\npublic:\n    int longestConsecutive(vector<int>& nums) {\n        \n    }\n};",
        "stdInRetrievalCode": "#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    vector<int> nums;\n    size_t pos = 0;\n    while ((pos = input.find(',')) != string::npos) {\n        nums.push_back(stoi(input.substr(0, pos)));\n        input.erase(0, pos + 1);\n    }\n    nums.push_back(stoi(input));\n    Solution solution;\n    cout << solution.longestConsecutive(nums) << endl;\n    return 0;\n}",
        "finalCode": "#include <iostream>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nclass Solution {\npublic:\n    int longestConsecutive(vector<int>& nums) {\n        unordered_set<int> numSet(nums.begin(), nums.end());\n        int longestStreak = 0;\n\n        for (int num : numSet) {\n            if (numSet.find(num - 1) == numSet.end()) {\n                int currentNum = num;\n                int currentStreak = 1;\n\n                while (numSet.find(currentNum + 1) != numSet.end()) {\n                    currentNum += 1;\n                    currentStreak += 1;\n                }\n\n                longestStreak = max(longestStreak, currentStreak);\n            }\n        }\n\n        return longestStreak;\n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n    vector<int> nums;\n    size_t pos = 0;\n    while ((pos = input.find(',')) != string::npos) {\n        nums.push_back(stoi(input.substr(0, pos)));\n        input.erase(0, pos + 1);\n    }\n    nums.push_back(stoi(input));\n    Solution solution;\n    cout << solution.longestConsecutive(nums) << endl;\n    return 0;\n}"
      }
    ]
  },
  {
    "title": "Add Binary",
    "description": `
### Description
Given two binary strings a and b, return their sum as a binary string.

### Example 1
**Input:** \`a = "11"\`, \`b = "1"\`
**Output:** \`"100"\`

### Example 2
**Input:** \`a = "1010"\`, \`b = "1011"\`
**Output:** \`"10101"\`

### Constraints
1 <= a.length, b.length <= 10^4
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
    `,
    "difficulty": "Easy",
    "testCases": [
      { "input": "11,1", "output": "100" },
      { "input": "1010,1011", "output": "10101" }
    ],
    "template": [
      {
        "language": "Python",
        "languageId": 71,
        "starterCode": "class Solution:\n    def addBinary(self, a: str, b: str) -> str:\n        pass",
        "stdInRetrievalCode": "if __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(',')\n    a, b = input_data[0], input_data[1]\n    print(Solution().addBinary(a, b))",
        "finalCode": "class Solution:\n    def addBinary(self, a: str, b: str) -> str:\n        return bin(int(a, 2) + int(b, 2))[2:]\n\nif __name__ == \"__main__\":\n    import sys\n    input_data = sys.stdin.read().strip().split(',')\n    a, b = input_data[0], input_data[1]\n    print(Solution().addBinary(a, b))"
      },
      {
        "language": "JavaScript",
        "languageId": 63,
        "starterCode": "class Solution {\n    addBinary(a, b) {\n        \n    }\n}",
        "stdInRetrievalCode": "process.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(',');\n    const a = input[0];\n    const b = input[1];\n    console.log(new Solution().addBinary(a, b));\n});",
        "finalCode": "class Solution {\n    addBinary(a, b) {\n        const sum = BigInt('0b' + a) + BigInt('0b' + b);\n        return sum.toString(2);\n    }\n}\n\nprocess.stdin.on(\"data\", (data) => {\n    const input = data.toString().trim().split(',');\n    const a = input[0];\n    const b = input[1];\n    console.log(new Solution().addBinary(a, b));\n});"
      },
      {
        "language": "Java",
        "languageId": 62,
        "starterCode": "class Solution {\n    public String addBinary(String a, String b) {\n        \n    }\n}",
        "stdInRetrievalCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\",\");\n        String a = parts[0];\n        String b = parts[1];\n        System.out.println(new Solution().addBinary(a, b));\n    }\n}",
        "finalCode": "class Solution {\n    public String addBinary(String a, String b) {\n        StringBuilder result = new StringBuilder();\n        int i = a.length() - 1, j = b.length() - 1, carry = 0;\n        while (i >= 0 || j >= 0) {\n            int sum = carry;\n            if (i >= 0) sum += a.charAt(i--) - '0';\n            if (j >= 0) sum += b.charAt(j--) - '0';\n            result.append(sum % 2);\n            carry = sum / 2;\n        }\n        if (carry != 0) result.append(carry);\n        return result.reverse().toString();\n    }\n}\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\",\");\n        String a = parts[0];\n        String b = parts[1];\n        System.out.println(new Solution().addBinary(a, b));\n    }\n}"
      },
      {
        "language": "C++",
        "languageId": 54,
        "starterCode": "class Solution {\npublic:\n    string addBinary(string a, string b) {\n        \n    }\n};",
        "stdInRetrievalCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    size_t pos = input.find(',');\n    string a = input.substr(0, pos);\n    string b = input.substr(pos + 1);\n    Solution solution;\n    cout << solution.addBinary(a, b) << endl;\n    return 0;\n}",
        "finalCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string addBinary(string a, string b) {\n        string result = \"\";\n        int i = a.size() - 1, j = b.size() - 1, carry = 0;\n        while (i >= 0 || j >= 0) {\n            int sum = carry;\n            if (i >= 0) sum += a[i--] - '0';\n            if (j >= 0) sum += b[j--] - '0';\n            result += to_string(sum % 2);\n            carry = sum / 2;\n        }\n        if (carry != 0) result += to_string(carry);\n        reverse(result.begin(), result.end());\n        return result;\n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n    size_t pos = input.find(',');\n    string a = input.substr(0, pos);\n    string b = input.substr(pos + 1);\n    Solution solution;\n    cout << solution.addBinary(a, b) << endl;\n    return 0;\n}"
      }
    ]
  },
];