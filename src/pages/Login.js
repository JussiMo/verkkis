import React, { useState, } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';

const URL = "http://localhost:3001/"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [LoggedIn, setLoggedIn] = useState(false)


  const handleLogin = async () => {
    try {

        // Nollaa mahdollisen aiemman virheen
      setError('');

      // HTTP-pyyntö kirjautumiseksi
      const response = await axios.post(URL + 'login', {
        username: username,
        pw: password,
      });

      
      console.log('Kirjautuminen onnistui', response.data)
      setLoggedIn(true)
      navigate('/')
      alert("Olet kirjautunut sisään! Paina OK-näppäintä jatkaaksesi, sinut ohjataan etusivulle" )

    } catch (error) {
      console.error('Virhe kirjautumisessa', error)
    }

    // Aseta virheviesti
    setError('Käyttäjätunnus tai salasana väärin');
  };

  return (
    <div>
      <h2>Kirjaudu sisään</h2>
      {LoggedIn && <p>Olet kirjautunut sisään!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div><label>Käyttäjänimi:</label></div>
      <div><input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /></div>
      <div><label>Salasana:</label></div>
      <div><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
      <div><button onClick={handleLogin}>Kirjaudu</button></div>
    </div>
  );
};

export default Login;
