import './App.css';
import { Profile } from './Profile/Profile.js';
import picture from "./picture.jpg"
function App() {
  const handleClick=(name)=>{alert(name)}
  return (
    <div className="App">
      <Profile handleClick={handleClick} fullname='Sourour ISSAOUI' bio='I am a student in gomycode' profession="web developer"> <img style={{border:"1px solid black", width:'400px', height:'400px', borderRadius: "10px"}} src={picture} alt="failed"/> </Profile> 
    </div>
  );
}

export default App;
