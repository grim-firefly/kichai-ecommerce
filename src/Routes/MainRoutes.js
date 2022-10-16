import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Index';
import About from '../Pages/About/Index';
import Error from './Components/Error';
const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} errorElement={<Error />} />
			<Route path='*' element={<Error />} />
		</Routes>
	);
}
export default MainRoutes;