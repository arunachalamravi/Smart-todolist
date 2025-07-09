
import SmartTodoList from './components/todoList'
import './index.css';
import "./App.css";
function App() {

  return (
    <div className="min-h-screen  mx-[auto]  bg-aliceblue">
      {/* <div className="text-center"> */}
       <SmartTodoList/>        
      {/* </div>s */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
    Click me
  </button>
    </div>
  )
}

export default App
