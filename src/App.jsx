import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Flashcards from "./components/Flashcards/Flashcards"

function App() {

  const questionCards = [
		{
			question: "What is React?",
			answer: "A small JS library",
		},
		{
			question: "What is JSX?",
			answer: "JSX stands for JS XML. It allows us to write HTML in React",
		},
		{
			question: "How do you create a React component?",
			answer: "We can create a component by capitalizing a Function",
		},
	];

	return (
		<>
			<Header />
      <Flashcards />
			<Footer />
		</>
	);
}

export default App;
