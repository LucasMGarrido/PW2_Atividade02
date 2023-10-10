import { AiOutlinePlusCircle } from 'react-icons/ai';
import Styles from './inputTechnology.module.css';
import { useState } from 'react';

function InputTechnology({ handleInput }) {
	const [input, setInput] = useState('');

	function addTechnology() {
		handleInput(input);
		setInput('');
	}

	return (
		<div className={Styles.container}>
			<input
				type="text"
				placeholder="Adicione uma nova tecnologia"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={addTechnology}>
				Criar <AiOutlinePlusCircle />
			</button>
		</div>
	);
}

export default InputTechnology;
