import './App.css';
import {Component,useState, useEffect} from 'react';
import CardList from './components/card-list-component/card-list.component';
import SearchBox from './components/search-box/search-box-component';

const App = () =>{
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')
  const [filteredMonsters, setFilteredMosters] = useState(monsters)
  const searchChange = (event)=>{
    setSearchField(event.target.value);
  }

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(result => setMonsters(result))
    .catch(response => console.log("error"))
  },[])

  useEffect(()=>{
    const filteredMonsters = monsters.filter((monster)=> monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()));
    setFilteredMosters(filteredMonsters);
  }
  ,[monsters, searchField])

  return (
    <div className="App">
         <h1 className='app-title'>Monsters Rolodex</h1>
         <SearchBox placeholder="Monster Name" className="search-box" onChangeHandler={searchChange}/>
         <CardList monsters={filteredMonsters}/>
    </div>
  )
}


// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       monsters : [],
//       searchedText:"",
//     }
//   }

//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(result => this.setState(() => {return {monsters: result,monstersOriginal:result} },()=>console.log(this.state.monsters)))
//     .catch(response => console.log("error"))
    
//   }

//   searchChange = (event)=>{
//     this.setState(()=>
//     {
//       return {searchedText:event.target.value}
//     })
//   }
//   render(){
//     const {monsters, searchedText} = this.state;
//     const {searchChange} = this;
//     const filteredMonsters = monsters.filter((monster)=> monster.name.toLocaleLowerCase().includes(searchedText.toLocaleLowerCase()));
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox placeholder="Monster Name" className="search-box" onChangeHandler={searchChange}/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
