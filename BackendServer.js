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



// regvote

app.post('/api/registervote',async (req,res)=> {

  const { name, age,  gender,  dob,city,state,pincode,  mobile,  email } = req.body;
  
    try {
      await client.connect();
  
      const db = client.db('Vote');
      const messageColl = db.collection('voter');
      const uniqueId=generateUniqueId(name,city,dob);
  
       await messageColl.insertOne({ uid:uniqueId, name:name, age:age,  gender:gender,  dob:dob,city:city,state:state,pincode:pincode,  mobile:mobile,  email:email,status:false  });
  
    
      // Registration successful
      return res.json({ success: true, message: 'Registration successful'});
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    } finally {
      await client.close();
    }
  });

  function generateUniqueId(name, city, dob) {
    const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
    const formattedDob = dob.replace(/-/g, ''); // Remove dashes from the date of birth
  
    const uniqueId = name.slice(0, 3) + city.slice(0, 3) + formattedDob.slice(0, 2) + randomNumber.toString().padStart(2, '0');
    return uniqueId;
  }
  

  app.post('/appstatus', async (req, res) => {
    try {
      const { uid } = req.body;
  
      // Connect to the MongoDB server
      const client = await MongoClient.connect(url);
  
      // Select the database
      const db = client.db('Vote');
  
      // Select the collection
      const collection = db.collection('voter');
  
      // Retrieve the voter data based on UID
      const voterData = await collection.findOne({ uid });
  
      // Close the connection
      client.close();
  
      if (voterData) {
        res.status(200).json(voterData);
      } else {
        res.status(404).json({ error: 'Voter data not found' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
 

  





// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
