import Task2 from "./Task2";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task2 key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
