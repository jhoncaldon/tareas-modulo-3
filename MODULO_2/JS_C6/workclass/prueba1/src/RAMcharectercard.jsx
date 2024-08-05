import React,{useState,useEffect} from 'react';
import characterCard from './characterCard';
import App from './App';
const RAMCharactercard =(props)=>{

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");
    
    const rickAndMortyCharacterId = 1;
    
    useEffect( () => 
{
      fetch("https://rickandmortyapi.com/api/character/"+rickAndMortyCharacterId)
        .then((response) => response.json())
        .then((result) =>{
            
            console.log(result),'resultado';

            setName(result.name);
            setImage(result.image);
            setGender(result.gender);
            setStatus(result.status);
        });
      },[])


  return (
    <div>
      <h1 id='firstitle'> Personajes de Rick and morty</h1>
      <div className='card'>
        <RAMCharactercard
        nombre={name}
        imagen={image}
        genero={gender}
        estatus={status}/>
        </div>
    </div>
 );
}

export default App;