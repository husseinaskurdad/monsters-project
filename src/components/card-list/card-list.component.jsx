// import { Component } from "react";
import './card-list.style.css'
import Card from "../card/card-component";







let CardList = ({monsters}) => (
    
        <div className="card-list">
        {monsters.map((monster) => {
            //   <div className="card-container" key={monster.id}>
            //   <img alt={`montser ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
            //   <h2>{monster.name}</h2>
            //   <p>{monster.email}</p>
            //   </div>  
            return <Card monster={monster}/>     
        })}
        </div>
    
)















// class CardList extends Component {
    
//     render() {
//         let {monsters} = this.props
//         return (
//             <div className="card-list">
//             {monsters.map((monster) => {
//                 //   <div className="card-container" key={monster.id}>
//                 //   <img alt={`montser ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
//                 //   <h2>{monster.name}</h2>
//                 //   <p>{monster.email}</p>
//                 //   </div>  
//                 return <Card monster={monster}/>     
//             })}
//             </div>
//         )
//     }
// }

export default CardList