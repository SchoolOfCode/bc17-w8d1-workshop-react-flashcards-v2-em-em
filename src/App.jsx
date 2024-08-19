import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Flashcards from "./components/Flashcards/Flashcards"

function App() {
	return (
		<>
			<Header />
      <Flashcards />
			<Footer />
		</>
	);
}

export default App;
