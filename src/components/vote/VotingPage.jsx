import React, { useState, useEffect } from 'react';
import { Usernav } from '../userdash/Userdashboard';
import { Footer } from '../home/Home';
import './VotingPage.css'; // Import the CSS file for styling

export const VotingPage = () => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: 'Narendra Modi', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Prime_Minister%2C_Shri_Narendra_Modi%2C_in_New_Delhi_on_August_08%2C_2019_%28cropped%29.jpg/701px-Prime_Minister%2C_Shri_Narendra_Modi%2C_in_New_Delhi_on_August_08%2C_2019_%28cropped%29.jpg?20220809071353' },
    { id: 2, name: 'Arvind Kejriwal', image: 'https://aamaadmiparty.org/wp-content/uploads/2017/07/Arvind-Kejriwal-2.jpg' },
    { id: 3, name: 'Rahul Gandhi', image: 'https://media.gettyimages.com/id/1145322801/photo/new-delhi-india-may-17-congress-president-rahul-gandhi-clicked-while-addressing-a-press.jpg?s=612x612&w=0&k=20&c=_jNJihfKkkGWqBU4IwC76XbO43_czjuoCDGlSn9MfzM=' },
  ]);
  const [selectedCandidateId, setSelectedCandidateId] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (!hasVoted && selectedCandidateId) {
      const updatedCandidates = candidates.map((candidate) => {
        if (candidate.id === selectedCandidateId) {
          return {
            ...candidate,
            votes: candidate.votes + 1,
          };
        }
        return candidate;
      });

      setCandidates(updatedCandidates);
      setHasVoted(true);

      // Redirect the user to the "thank-you" page
      window.location.href = '/userdashboard';
    }
  };

  const handleCandidateSelection = (id) => {
    if (!hasVoted) {
      setSelectedCandidateId(id);
    }
  };

  // useEffect(() => {
  //   if (hasVoted) {
  //     // Redirect to the "thank-you" page if the user refreshes the page
  //     // window.location.href = '/thank-you';
  //   }
  // }, [hasVoted]);

  return (
   
    <>
   <Usernav/>
    <div className="voting-container">
     
     <h1>Online Voting System</h1>
      <h2>Candidates:</h2>
      {hasVoted ? (
        <p>Your vote has been casted.</p>
      ) : (
        <div className="card-container">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="card candidate-card">
                <div className="square-image-container">
              <img src={candidate.image} className="card-img-top card-image" alt={candidate.name} /></div>
              <div className="card-body ">
                <h5 className="card-title">{candidate.name}</h5>
                <label className=" text-center my-3">
                  <input 
                    type="radio"
                    name="candidate"
                    value={candidate.id}
                    onChange={() => handleCandidateSelection(candidate.id)}
                  />
                  
                  Choose
                </label>
              </div>
            </div>
            
          ))}
        </div>
      )}
      {!hasVoted && (
        <button
          className="btn btn-primary"
          onClick={handleVote}
          disabled={!selectedCandidateId}
        >
          Vote
        </button>
      )}
    </div>
    <Footer/>
  </>
  );
};


