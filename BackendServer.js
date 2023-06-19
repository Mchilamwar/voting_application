const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to the MongoDB database
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

// Simulated user data for login verification
// const users = [
//   { id: 1, username: 'john', password: 'password123' },
//   { id: 2, username: 'jane', password: 'abc123' }
// ];

// Define an API endpoint to handle the login request
app.post('/api/adminlogin', async (req, res) => {
  const { username, password } = req.body;

  try {
    await client.connect();

    const db = client.db('Vote');
    const messageColl = db.collection('admin');

    const user = await messageColl.findOne({ uid: username, password: password });

    if (!user) {
      // User not found or incorrect username/password
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    // Login successful
    return res.json({ success: true, message: 'Login successful', user });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  } finally {
    await client.close();
  }
});



app.post('/api/userlogin', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      await client.connect();
  
      const db = client.db('Vote');
      const messageColl = db.collection('user');
  
      const user = await messageColl.findOne({ email: username, password: password });
  
      if (!user) {
        // User not found or incorrect username/password
        return res.status(401).json({ success: false, message: 'Invalid username or password' });
      }
  
      // Login successful
      return res.json({ success: true, message: 'Login successful', user });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    } finally {
      await client.close();
    }
  });



app.post('/api/register',async (req,res)=> {

  const { name,email, password } = req.body;
  
    try {
      await client.connect();
  
      const db = client.db('Vote');
      const messageColl = db.collection('user');
  
       await messageColl.insertOne({ name: name,email:email, password: password });
  
    
      // Registration successful
      return res.json({ success: true, message: 'Registration successful'});
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    } finally {
      await client.close();
    }
  });




// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
