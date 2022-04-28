import React, { useState } from "react";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import "./App.css";

function App() {
  // useState is to manage state in functional components
  // re-evaluate the entire component when setCourseGoals is called
  // subsequent re-render cycles ignores the initial value
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Something 1" },
    { id: "cg2", text: "Something 2" },
    { id: "cg3", text: "Something 3" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // concat returns a brand new array
    // push modifies the current array
    // setCourseGoals(courseGoals.concat(newGoal));

    // the above could defer updates rendering the incorrect state

    // state update that depends on previous state, best approach:
    // function that receives the latest state and returns the latest
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1 title="this works">Hi, this is ReactJS!</h1>;
//   }
// }

export default App;
