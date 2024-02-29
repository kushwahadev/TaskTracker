import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("please add a task");
      return;
    }

    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    // form
    <form className="add-form" onSubmit={onSubmit}>
      {/*  task */}
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      {/* day and time */}
      <div className="form-control  form-control-check">
        <label>Day & time</label>
        <input
          type="text"
          checked={reminder}
          placeholder="day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      {/* //reminder */}
      <div className="form-control form-control-check">
        <label>set reminder</label>
        <input
          type="checkbox"
          placeholder="reminder"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      {/* // submit btn */}
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
