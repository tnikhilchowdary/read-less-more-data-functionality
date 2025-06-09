import React, { useState } from 'react';
import portrait from './images.jpeg';
import './App.css';

function App() {
  const [expanded, setExpanded] = useState(false);

  const toggleButton = () => {
    setExpanded(!expanded);
  }

 
  const fullText = `Pranab Mukherjee served India for over five decades, holding key roles including Finance,
  Defence, External Affairs, and Commerce Minister. He was a top strategist for the Congress Party and a trusted advisor to Indira Gandhi, Rajiv Gandhi, and Manmohan Singh. As 13th President of India (2012–2017), he upheld constitutional values and democratic traditions. He was awarded the Bharat Ratna in 2019 for his lifelong contribution to Indian politics and governance. A scholar and author, he wrote several acclaimed political memoirs and was admired for his intellect and statesmanship.`;

  const shortText = fullText.substring(0, 50) + '...';


  return (
    <div className="centered-container">
      <img src={portrait} alt="Portrait" className="centered-image" />
      <p>{expanded ? fullText : shortText}</p>
      <button onClick={toggleButton}>{expanded ? "ReadLess" : "ReadMore"}</button>
    </div>
  );
}

export default App;
