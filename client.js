const { Client } = require('pg');
//const conn = 'postgres://jhkephbsndwwml:090cae6d0e6c21e338d8e83b2ac1a85db99ea24b0d3c8d96a009657cab77bb36@ec2-3-224-164-189.compute-1.amazonaws.com:5432/dc78tgk0q076qh'
/*const client = new Client({
    connectionString: conn,
    ssl: {
        rejectUnauthorized: false
    }
});*/
const client = new Client({
    host: 'ec2-3-224-164-189.compute-1.amazonaws.com',
    port: '5432',
    user: 'jhkephbsndwwml',
    password: '090cae6d0e6c21e338d8e83b2ac1a85db99ea24b0d3c8d96a009657cab77bb36',
    database: 'dc78tgk0q076qh',
    ssl: {
        rejectUnauthorized: false
    }
});
client.connect();



const table = 'CREATE TABLE STUDENT(id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL, age INT, address VARCHAR(80), email VARCHAR(40))'
const text = 'INSERT INTO STUDENT(firstname, lastname, age, address, email) VALUES($1, $2, $3, $4, $5) RETURNING *'
const values = ['Mona the', 'Octocat', 9, '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States', 'octocat@github.com']
const value = ['SemyGreen', 'Samuel', 10, 'Rubavu Rwanda', 'tuyisengesamy6@gmail.com']

client.query(table, (err, res) => {
    if (err) throw err
});

client.query(text, value, (err, res) => {
    if (err) throw err
});

client.query('SELECT * FROM STUDENT', (err, res) => {
    if (err) throw err
    console.log(err, res.rows) // Print the data in student table
    client.end()
});

