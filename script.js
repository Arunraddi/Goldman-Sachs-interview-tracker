const questions = [
    { number: 1832, name: "Check if the Sentence Is Pangram", difficulty: "Easy" },
    { number: 1086, name: "High Five", difficulty: "Easy" },
    { number: 657, name: "Robot Return to Origin", difficulty: "Easy" },
    { number: 509, name: "Fibonacci Number", difficulty: "Easy" },
    { number: 118, name: "Pascal's Triangle", difficulty: "Easy" },
    { number: 706, name: "Design HashMap", difficulty: "Easy" },
    { number: 242, name: "Valid Anagram", difficulty: "Easy" },
    { number: 232, name: "Implement Queue using Stacks", difficulty: "Easy" },
    { number: 119, name: "Pascal's Triangle II", difficulty: "Easy" },
    { number: 387, name: "First Unique Character in a String", difficulty: "Easy" },
    { number: 121, name: "Best Time to Buy and Sell Stock", difficulty: "Easy" },
    { number: 796, name: "Rotate String", difficulty: "Easy" },
    { number: 724, name: "Find Pivot Index", difficulty: "Easy" },
    { number: 1071, name: "Greatest Common Divisor of Strings", difficulty: "Easy" },
    { number: 70, name: "Climbing Stairs", difficulty: "Easy" },
    { number: 53, name: "Maximum Subarray", difficulty: "Easy" },
    { number: 1, name: "Two Sum", difficulty: "Easy" },
    { number: 141, name: "Linked List Cycle", difficulty: "Easy" },
    { number: 88, name: "Merge Sorted Array", difficulty: "Easy" },
    { number: 20, name: "Valid Parentheses", difficulty: "Easy" },
    { number: 1823, name: "Find the Winner of the Circular Game", difficulty: "Medium" },
    { number: 46, name: "Permutations", difficulty: "Medium" },
    { number: 1395, name: "Count Number of Teams", difficulty: "Medium" },
    { number: 1836, name: "Remove Duplicates From an Unsorted Linked List", difficulty: "Medium" },
    { number: 39, name: "Combination Sum", difficulty: "Medium" },
    { number: 1219, name: "Path with Maximum Gold", difficulty: "Medium" },
    { number: 238, name: "Product of Array Except Self", difficulty: "Medium" },
    { number: 215, name: "Kth Largest Element in an Array", difficulty: "Medium" },
    { number: 64, name: "Minimum Path Sum", difficulty: "Medium" },
    { number: 399, name: "Evaluate Division", difficulty: "Medium" },
    { number: 518, name: "Coin Change 2", difficulty: "Medium" },
    { number: 740, name: "Delete and Earn", difficulty: "Medium" },
    { number: 1041, name: "Robot Bounded In Circle", difficulty: "Medium" },
    { number: 692, name: "Top K Frequent Words", difficulty: "Medium" },
    { number: 200, name: "Number of Islands", difficulty: "Medium" },
    { number: 453, name: "Minimum Moves to Equal Array Elements", difficulty: "Medium" },
    { number: 11, name: "Container With Most Water", difficulty: "Medium" },
    { number: 452, name: "Minimum Number of Arrows to Burst Balloons", difficulty: "Medium" },
    { number: 253, name: "Meeting Rooms II", difficulty: "Medium" },
    { number: 153, name: "Find Minimum in Rotated Sorted Array", difficulty: "Medium" },
    { number: 443, name: "String Compression", difficulty: "Medium" },
    { number: 16, name: "3Sum Closest", difficulty: "Medium" },
    { number: 74, name: "Search a 2D Matrix", difficulty: "Medium" },
    { number: 134, name: "Gas Station", difficulty: "Medium" },
    { number: 735, name: "Asteroid Collision", difficulty: "Medium" },
    { number: 713, name: "Subarray Product Less Than K", difficulty: "Medium" },
    { number: 209, name: "Minimum Size Subarray Sum", difficulty: "Medium" },
    { number: 322, name: "Coin Change", difficulty: "Medium" },
    { number: 532, name: "K-diff Pairs in an Array", difficulty: "Medium" },
    { number: 146, name: "LRU Cache", difficulty: "Medium" },
    { number: 33, name: "Search in Rotated Sorted Array", difficulty: "Medium" },
    { number: 1465, name: "Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts", difficulty: "Medium" },
    { number: 31, name: "Next Permutation", difficulty: "Medium" },
    { number: 3, name: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
    { number: 179, name: "Largest Number", difficulty: "Medium" },
    { number: 50, name: "Pow(x, n)", difficulty: "Medium" },
    { number: 5, name: "Longest Palindromic Substring", difficulty: "Medium" },
    { number: 15, name: "3Sum", difficulty: "Medium" },
    { number: 91, name: "Decode Ways", difficulty: "Medium" },
    { number: 166, name: "Fraction to Recurring Decimal", difficulty: "Medium" },
    { number: 8, name: "String to Integer (atoi)", difficulty: "Medium" },
    { number: 42, name: "Trapping Rain Water", difficulty: "Hard" },
    { number: 588, name: "Design In-Memory File System", difficulty: "Hard" },
    { number: 829, name: "Consecutive Numbers Sum", difficulty: "Hard" },
    { number: 4, name: "Median of Two Sorted Arrays", difficulty: "Hard" },
];

function loadProgress() {
    const completed = JSON.parse(localStorage.getItem('completedQuestions')) || {};
    let completedCount = 0;

    questions.forEach(question => {
        const row = document.createElement('tr');
        const difficultyClass = question.difficulty.toLowerCase();
        row.classList.add(difficultyClass);

        row.innerHTML = `
            <td class="copyable" onclick="copyToClipboard(${question.number}, this)">${question.number}</td>
            <td>${question.name}</td>
            <td>${question.difficulty}</td>
            <td><input type="checkbox" ${completed[question.number] ? 'checked' : ''} onchange="toggleCompletion(${question.number})"></td>
        `;
        document.querySelector('#questionsTable tbody').appendChild(row);
        
        if (completed[question.number]) {
            completedCount++;
        }
    });

    const totalQuestions = questions.length;
    const progressPercentage = ((completedCount / totalQuestions) * 100).toFixed(2);
    document.getElementById('progress').innerText = `Progress: ${completedCount} out of ${totalQuestions} questions completed (${progressPercentage}%)`;
}

function copyToClipboard(number, element) {
    navigator.clipboard.writeText(number).then(() => {
        const originalText = element.innerText;
        element.innerText = `${originalText} (Copied!)`;
        setTimeout(() => {
            element.innerText = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

function toggleCompletion(number) {
    const completed = JSON.parse(localStorage.getItem('completedQuestions')) || {};
    completed[number] = !completed[number];
    localStorage.setItem('completedQuestions', JSON.stringify(completed));
    loadProgress(); // Update progress after toggling
}

document.addEventListener('DOMContentLoaded', loadProgress);