import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Usernav } from '../userdash/Userdashboard';
import { Footer } from '../home/Home';

export const Appshowstatus = () => {
  const [voterData, setVoterData] = useState(null);

  useEffect(() => {
    const fetchVoterData = async () => {
      try {
        const response = await fetch('/appstatus', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uid: 'your-uid-value' }), // Replace 'your-uid-value' with the actual UID
        });
        const data = await response.json();
        if (response.ok) {
          setVoterData(data);
        } else {
          console.error('Error:', data.error);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchVoterData();
  }, []);

  return (
    <>
    <Usernav/>
    <div>
      <h2>Voter Status</h2>
      {voterData ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>City</th>
              <th>State</th>
              <th>Pincode</th>
              <th>Mobile Number</th>
              <th>Email ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{voterData.name}</td>
              <td>{voterData.age}</td>
              <td>{voterData.gender}</td>
              <td>{voterData.dob}</td>
              <td>{voterData.city}</td>
              <td>{voterData.state}</td>
              <td>{voterData.pincode}</td>
              <td>{voterData.mobile}</td>
              <td>{voterData.email}</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <p>Loading voter data...</p>
      )}
    </div>
    <Footer/>
    </>
  );
};


