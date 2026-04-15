import { createContext, useState } from "react";

export interface Task {
  id: number;
  title: string;
  done: boolean;
  user: string;
}

export const TaskContext = createContext<any>(null);

export const TaskProvider = ({ children }: any) => {

  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};