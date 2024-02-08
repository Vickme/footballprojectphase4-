// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function NewCoachForm() {
//   const [name, setName] = useState('');
//   const [CoachOptions, setCoachOptions] = useState([]);
// // clear input field

 

//   useEffect(() => {
  
//     axios.get('/coach')
//       .then(response => {
//         setCoachOptions(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching team data:', error);
//       });
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('/coach', { name })
//       .then(response => {
//         console.log('Coach created:', response.data);
//       })
//       .catch(error => {
//         console.error('Error creating Coach:', error);
//       });
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <select value={name} onChange={(e) => setName(e.target.value)}>
//           <option value="">Select Name</option>
//           {CoachOptions.map(coach => (
//             <option key={coach.id} value={coach.name}>{coach.name}</option>
//           ))}
//         </select>
//       </div>
//       <button type="submit">Create Coach</button>
//     </form>
//   );
//           }

// export default NewCoachForm;