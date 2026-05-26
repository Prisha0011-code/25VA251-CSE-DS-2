

import './App.css'

function App() {
const name="ABES College"
const students=[
    {name:"Krishna", rollNo:"2503215400134", course:"B.Tech CSE"},
    {name:"Rohan", rollNo:"2503215400135", course:"B.Tech CSE"},
    {name:"Saira", rollNo:"2503215400136", course:"B.Tech CSE"}
];
  return (
    <>
    <h1> Welcome To React </h1>
    <h2>Hello {name}</h2>
    <Demo />
    <Props name="Krishna" rollNo="2503215400134" course="B.Tech CSE"/>
    <Exp7 students={students}/>
    
</>
  );
}

export default App;


























































//npm create vite@latest