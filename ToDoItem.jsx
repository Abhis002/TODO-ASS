import { useState } from "react";

function ToDoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  function handleEditSave() {
    onEdit(todo.id, editedText);
    setIsEditing(false);
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleEditSave}>Save</button>
        </>
      ) : (
        <span className={todo.completed ? "completed" : ""}>
          {todo.text}
        </span>
      )}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button className="delete" onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default ToDoItem;
