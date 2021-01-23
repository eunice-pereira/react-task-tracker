import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	// setting initial state of form to false
	// will not show unless Add button is clicked
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Doctors Appointment',
			day: 'Feb 5th @ 2:30PM',
			reminder: true,
		},
		{
			id: 2,
			text: 'Study Session',
			day: 'January 22nd @ noon',
			reminder: true,
		},
		{
			id: 3,
			text: 'Laundry',
			day: 'January 23rd @ 1PM',
			reminder: false,
		},
	]);

	// Add Task
	const addTask = (task) => {
		// generating random id (no backend that generates id)
		const id = Math.floor(Math.random() * 10000) + 1;

		// new task object with random id and copied task, passed in through submission form
		const newTask = { id, ...task };

		// saving new task in setTasks state
		// copying current tasks + new object
		setTasks([...tasks, newTask]);
	};

	// Delete Task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Toggle Reminder
	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	return (
		<Router>
			<div className="container">
				<Header
					onAdd={() => setShowAddTask(!showAddTask)}
					showAdd={showAddTask}
				/>

				<Route
					path="/"
					exact
					render={(props) => (
						<>
							{showAddTask && <AddTask onAdd={addTask} />}
							{tasks.length > 0 ? (
								<Tasks
									tasks={tasks}
									onDelete={deleteTask}
									onToggle={toggleReminder}
								/>
							) : (
								'No Tasks To Show'
							)}
						</>
					)}
				/>
				<Route path="/about" component={About} />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
