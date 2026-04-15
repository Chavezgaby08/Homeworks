import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";

function TasksPage() {

  const { tasks, setTasks } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const {user, setUser} = useContext(AuthContext);
  const { logout } = useAuth();

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      title,
      done: false,
      user: user
    };
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const userTasks = tasks.filter(t => t.user === user);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? {...t, done: !t.done} : t));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    };

  return (
    <div>

      <h1>Tasks</h1>
      
      <h2>Bienvenido {user}</h2>

      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={addTask}>Agregar</button>

      {userTasks.map(task => (
        <div key={task.id}>
          <span
            onClick={() => toggleTask(task.id)}
            style={{ textDecoration: task.done ? "line-through" : "none" }}
          >
            {task.title}
          </span>

          <button onClick={() => deleteTask(task.id)}>X</button>
        </div>
        
      ))}

      <div>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>

    </div>
  );
}

export default TasksPage;