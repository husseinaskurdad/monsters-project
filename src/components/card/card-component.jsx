import { Component } from "react";
import './card.style.css';



let Card = ({monster}) => {

    let {name, id, email} = monster

          return (
                  <div className="card-container" key={id}>
                  <img alt={`montser ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                  <h2>{name}</h2>
                  <p>{email}</p>
                  </div>       
              
        )  
}













// class Card extends Component {
    
//     render() {
//         let {name,id,email} = this.props.monster
//         return (
            
//                   <div className="card-container" key={id}>
//                   <img alt={`montser ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
//                   <h2>{name}</h2>
//                   <p>{email}</p>
//                   </div>       
              
//         )
//     }
// }

export default Card