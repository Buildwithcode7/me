const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function run() {

    try {

        // 1. Connect to MongoDB
        await client.connect();
        console.log("Connected successfully to server");

        // 2. Select Database and Collection
        const db = client.db('college');

        const Students = db.collection('student');

        // 3. Create Student Record
        const studentData = {
            USN: "1BM22CS001",
            name: "Rashmi",
            sem_year_of_admission: "5th Sem - 2022"
        };

        // 4. Insert Student Record
        await Students.insertOne(studentData);

        console.log("Student record inserted!");

        // 5. Search Student using Partial Name
        const partialName = "Rash";

        const results = await Students.find({
            name: {
                $regex: partialName,
                $options: 'i'
            }
        }).toArray();

        console.log("Search Results:", results);

    } finally {

        // 6. Close Connection
        await client.close();
    }
}

// Execute Program
run().catch(console.dir);