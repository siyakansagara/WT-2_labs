const fs = require("fs");

// Read student data from file
fs.readFile("students.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error: File not found");
        return;
    }

    const students = data.trim().split("\n");

    console.log("Students with SPI less than 5");
    console.log("--------------------------------");

    students.forEach(record => {
        const [
            id,
            name,
            enrollment,
            mobile,
            department,
            spi
        ] = record.split(",");

        if (parseFloat(spi) < 5) {
            console.log("ID:", id);
            console.log("Name:", name);
            console.log("Enrollment:", enrollment);
            console.log("Mobile:", mobile);
            console.log("Department:", department);
            console.log("SPI:", spi);
            console.log("--------------------------------");
        }
    });
});
