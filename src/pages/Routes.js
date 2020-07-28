import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../component/Home';
import About from '../component/About';
import NotFound from './NotFound';

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="*" component={NotFound} />
		</Switch>
	);
}
