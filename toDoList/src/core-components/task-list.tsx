import Button from "../components/button";
import XIcon from "../assets/icons/x.svg?react"
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";
import { TaskState, type Task } from "../models/task";

export default function TaskList() {
  const { tasks, isLoadingTasks } = useTasks()
  const { prepareTask } = useTask()

  function handleNewTask () {
    prepareTask()
  }

  return <>
    <section>
      <Button 
        icon={XIcon} 
        className="w-full"
        onClick={handleNewTask}
        disabled={tasks.some(task => task.state === TaskState.Creating) || isLoadingTasks}
      > Nova Tarefa</Button>
    </section>
    <section className="space-y-2">
      {!isLoadingTasks && tasks.map( task => (
        <TaskItem key={task.id} task={task}/>
      ))}
      {isLoadingTasks &&
        <>
          <TaskItem task={{} as Task} loading/>
          <TaskItem task={{} as Task} loading/>
          <TaskItem task={{} as Task} loading/>
        </>
      }
    </section>
  </>
}