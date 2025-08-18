
import './App.css'

function Header({name, year}){
  
  return(
    <header>
      <h1>{name} Kitchen</h1>
      <p>Copyright {year} </p>
    </header>
  )
}

const items = [" Macoroni and cheese",
  "Pizza",
  "Sushi"
];

function Main({dishes}){
  return(
    <ul>
     {dishes.map((dish)=> (<li style={{listStyle: "none"}}>{dish}</li>))}
    </ul>
  )
}

function App() {

  return ( 
  <div>
    <Header name = 'Sunset' year = {new Date().getFullYear()}/>
    <Main dishes = {items} /> 
  </div>);
}

export default App
