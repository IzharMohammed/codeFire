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
        "starterCode": "public class Solution {\n    public int majorityElement(int[] nums) {\n        \n    }\n}",
        "stdInRetrievalCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        int[] nums = Arrays.stream(input.split(\",\")).mapToInt(Integer::parseInt).toArray();\n        System.out.println(new Solution().majorityElement(nums));\n    }\n}",
        "finalCode": "public class Solution {\n    public int majorityElement(int[] nums) {\n        int count = 0;\n        Integer candidate = null;\n\n        for (int num : nums) {\n            if (count == 0) {\n                candidate = num;\n            }\n            count += (num == candidate) ? 1 : -1;\n        }\n\n        return candidate;\n    }\n}\n\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        int[] nums = Arrays.stream(input.split(\",\")).mapToInt(Integer::parseInt).toArray();\n        System.out.println(new Solution().majorityElement(nums));\n    }\n}"
      }
    ]
  }
];