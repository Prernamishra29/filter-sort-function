function processStudents(students) {
    // Step 1: Filter students with marks > 60
    const filteredStudents = students.filter(student => student.marks > 60);
    
    // Step 2: Sort the filtered students in descending order of marks
    const sortedStudents = filteredStudents.sort((a, b) => b.marks - a.marks);
    
    // Step 3: Map the sorted array to extract only the names
    const studentNames = sortedStudents.map(student => student.name);
    
    // Return the array of names
    return studentNames;
}

// Example input
const students = [
    { name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 }
];

// Example usage
console.log(processStudents(students)); // Output: ["Charlie", "Bob"]
