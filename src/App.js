import logo from './logo.svg';
import './App.css';
import {Layout} from "./components";
import {
	BrowserRouter,
	Route, Routes,
} from "react-router-dom";
import Posts from "./pages/posts";
import Users from "./pages/users";
import PostDetail from "./pages/postDetail";
import {Toaster} from "react-hot-toast";
import React from "react";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<div className="App">
					<Routes>
						<Route path="/" element={<Users/>}/>
						<Route path=":userId" element={<Posts/>}/>
						<Route path=":userId/post/:id" element={<PostDetail/>}/>
					</Routes>
				</div>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
