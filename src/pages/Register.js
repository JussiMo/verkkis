import React, { useState } from 'react';
import axios from 'axios';

const URL = "http://localhost:3001/"

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      // Tee HTTP-pyyntö rekisteröitymiseksi
      const response = await axios.post(URL + 'register', {
        fname: firstName,
        lname: lastName,
        username: username,
        pw: password,
      });

      console.log('Rekisteröinti onnistui', response.data);

      
    } catch (error) {
      console.error('Virhe rekisteröinnissä', error);
    }
    // Tyhjennetään input-elementit
    setFirstName('')
    setLastName('')
    setUsername('')
    setPassword('')
  };

  return (
    <div>
      <h2>Rekisteröidy</h2>
      <div><label>Etunimi:</label></div>
      <input type="text" placeholder="Etunimi" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <div><label>Sukunimi:</label></div>
      <input type="text" placeholder="Sukunimi" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <div><label>Käyttäjänimi:</label></div>
      <input type="text" placeholder="Käyttäjänimi" value={username} onChange={(e) => setUsername(e.target.value)} />
      <div><label>Salasana:</label></div>
      <input type="password" placeholder="Salasana" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div><button onClick={handleRegister}>Rekisteröidy</button></div>
    </div>
  );
};

export default Register;
