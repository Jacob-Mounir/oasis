// components/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../data/store.js';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const setIsLoggedIn = useStore(state => state.setIsLoggedIn);

	const handleLogin = () => {
		// Ersätt detta med faktisk autentiseringslogik
		if (username === 'admin' && password === 'password') {
			setIsLoggedIn(true);
			navigate('/edit');
		} else {
			alert('Felaktigt användarnamn eller lösenord');
		}
	};

	return (
		<div>
			<input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Användarnamn" />
			<input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Lösenord" />
			<button onClick={handleLogin}>Logga in</button>
		</div>
	);
}

export default Login;
