import React, { useEffect, useState } from 'react';
import Task from '../Task';
import InputTechnology from '../InputTechnology';
import Styles from './technologiesList.module.css';

function BoxTask() {
	const [list, setList] = useState([]);
	const [task, setTask] = useState('');

	useEffect(() => {
		if (task !== '') {
			const newItem = {
				id: Math.random(),
				task: task,
				status: false,
			};
			setList([...list, newItem]);
			setTask('');
			localStorage.setItem(
				'taskList',
				JSON.stringify([...list, newItem])
			);
		}
	}, [task, list]);

	useEffect(() => {
		const savedList = JSON.parse(localStorage.getItem('taskList'));
		if (savedList) {
			setList(savedList);
		}
	}, []);

	const deleteTask = (id) => {
		const newList = list.filter((item) => item.id !== id);
		setList(newList);
	};

	const changeStatus = (id) => {
		const updatedList = list.map((item) => {
			if (item.id === id) {
				return { ...item, status: !item.status };
			}
			return item;
		});
		setList(updatedList);
	};

	return (
		<>
			<InputTechnology handleInput={setTask} />
			<div className={`${Styles.indicator} ${Styles.container}`}>
				<p>
					Tecnologias criadas <span>{list.length}</span>
				</p>
				<p style={{ color: '#8284FA' }}>
					Concluídas{' '}
					<span>
						{list.filter((item) => item.status).length} de{' '}
						{list.length}
					</span>
				</p>
			</div>
			{list.length === 0 && (
				<div className={`${Styles.boxText} ${Styles.container}`}>
					<h3>Você ainda não tem tecnologias cadastradas</h3>
					<p>Crie tecnologia e organize seus itens a fazer</p>
				</div>
			)}
			<Task
				customClass={Styles.container}
				listTasks={list}
				handleDelete={deleteTask}
				handleStatus={changeStatus}
			/>
		</>
	);
}

export default BoxTask;
