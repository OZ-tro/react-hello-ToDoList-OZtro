import React, { useState, useEffect } from "react";


//create your first component
const Home = () => {

	const [todo, setTodo] = useState([])
	const [newTodo, setNewTodo] = useState('')

	const newInputList = (event) => {
		if(newTodo == '') return
		if (event.key === 'Enter') {
			setTodo([...todo, newTodo.trim()]);
			setNewTodo('');
		}
	}

	const inputDelete = (index) => {
		setTodo(todo.filter((todo, i) => i !== index))
	};


	return (
		<main>
			<h1>todos</h1>

			
			<div className="postIt">
				<ul className="list-group">
					<li class="list-group-item"> <input
						class="form-control"
						type="text"
						value={newTodo}
						onChange={(e) => setNewTodo(e.target.value)}
						onKeyDown={newInputList}
						placeholder={todo.length === 0 ? "No hay tareas" : "añadir tareas"}

					/> </li>
					{
						(todo.map((todo, index) => (
							<li class="list-group-item"
								key={index}>{todo}
								<button
									onClick={() => inputDelete(index)}
									className="delete-button"
								>
									<span className="delete-icon text-danger">X</span>
								</button>
							</li>
						)))}
				</ul>
				<p>{todo.length} tareas pendientes</p>

			</div>

			
			

		</main>
	);
};

export default Home;
