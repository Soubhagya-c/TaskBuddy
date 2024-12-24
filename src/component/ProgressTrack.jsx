import React from "react";
function ProgressTrac({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
  return (
    <div className="progress-track">
      <p>
        {completedTasks} of {totalTasks} tasks completed
      </p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
export default ProgressTrac;