import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/serach-box/search-box component';
import { useState, useEffect } from 'react';







let App = () => {

   let [searchField, setSearchField] = useState('')
   let [monsters, setMonsters] = useState([])
   let [filteredMonsters, setFilteredMonsters] = useState([])

   useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users)) 
   }, [])

   useEffect(() =>{
    let newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    setFilteredMonsters(newFilteredMonsters)
   }, [monsters, searchField])


  let onSearchChange = (event) => {
        let searchFieldString = event.target.value.toLocaleLowerCase()
        setSearchField(searchFieldString) 
      }
 

  return (
    <div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>
    <SearchBox
      onChangeHandler = {onSearchChange}
      placeholder = 'search-monsters'
      className = 'monster-search-box'
       />
       <CardList monsters = {filteredMonsters} />


  </div>
  )

  }

  export default App;















// class App extends Component  {
//   constructor() {
//     super();


//     this.state = {
//      monsters: [],
//      searchField: ''

//     } ;
//   }

//   componentDidMount() { 
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((monsters) => this.setState(() => {
//       return {monsters: monsters}
//     },

//     ))

//   }

//   onSearchChange = (event) => {
//     let searchField = event.target.value.toLocaleLowerCase()
   

//     this.setState(() => {
//       return {searchField}
//     })
//   }

//   render() {

//     let {monsters, searchField} = this.state;
//     let {onSearchChange} = this;

//     let filteredMonsters = monsters.filter(monster => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     });

//     return (
//       <div className="App">
//       <h1 className='app-title'>Monsters Rolodex</h1>
//       <SearchBox onChangeHandler = {onSearchChange} placeholder = 'search-monsters' class = 'monster-search-box' />
//      <CardList monsters = {filteredMonsters} />
//     </div>
//     )
//   }
// }