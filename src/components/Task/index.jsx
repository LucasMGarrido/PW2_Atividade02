import Styles from './task.module.css';
import { AiOutlineDelete } from 'react-icons/ai';

function Task({ customClass, listTasks, handleDelete, handleStatus }) {
	return (
		<>
			{listTasks.map((task) => (
				<div className={`${Styles.task} ${customClass}`} key={task.id}>
					<input
						type="checkbox"
						checked={task.status}
						onChange={() => handleStatus(task.id)}
					/>
					<label className={Styles.check}></label>
					<p>{task.task}</p>
					<button onClick={() => handleDelete(task.id)}>
						<AiOutlineDelete />
					</button>
				</div>
			))}
		</>
	);
}

export default Task;
