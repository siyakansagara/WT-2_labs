const fs = require("fs");

// Read student details from file
fs.readFile("students.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error: Unable to open students.txt");
        return;
    }

    const records = data.trim().split("\n");

    console.log("Student Details");
    console.log("--------------------------------");

    records.forEach(record => {
        const [
            studentID,
            studentName,
            enrollmentNumber,
            mobileNumber,
            department,
            spi
        ] = record.split(",");

        console.log("Student ID:", studentID);
        console.log("Student Name:", studentName);
        console.log("Enrollment Number:", enrollmentNumber);
        console.log("Mobile Number:", mobileNumber);
        console.log("Department:", department);
        console.log("SPI:", spi);
        console.log("--------------------------------");
    });
});
