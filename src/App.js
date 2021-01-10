import React, {useState} from 'react';
import Tweet from "./Tweet";


function App(){

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  const [users, setUsers] = useState([
    { name: "React", message: "Hello World of React!" },
    { name: "Mabel", message: "This works!" },
    { name: "Trump", message: "I am banned from Twitter" }
  ])
  
  return(
    
    <div className="App">
      <div> 
        <h1 className={isRed ? 'red' : ""}>Change my color</h1>
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
      </div>
      

      <h1>Hello React</h1>
      <Tweet name="Dev" message="This is a random tweet"/>
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
        ))}
    </div>
  );
}

export default App;
