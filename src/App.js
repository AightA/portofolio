import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './pages/Routes';
import Header from './component/Header';
import Footer from './component/Footer';
import './App.css';

function App() {
	return (
		<Router>
			<Header />
			<Routes />
			<Footer />
		</Router>
	);
}

export default App;
