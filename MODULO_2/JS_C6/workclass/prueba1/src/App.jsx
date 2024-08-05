import React,{useState,useEffect} from "react";
import './App.css';
import CharacterCard from "./components/CharacterCard";

function App()
{
  
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  
  const rickAndMortyCharacterId = 1;

  useEffect( () => {
    // Este useEffect se ejecutará una única vez cuando el componente se monte
    
    
    fetch(" https://rickandmortyapi.com/api/character/1"+rickAndMortyCharacterId)
    .then((response) => response.json())
    .then((result) =>{
      console.log(result,'=> resultado'); // Resultado de el endpoint

        setName(result.name);
        setImage(result.image);
        setGender(result.gender)
        setStatus(result.status)
  });

  },[])


  return (
    <div>
      <h1>Personajes de Rick and morty</h1>
      
      <characterCard 
        name={name}
        image={image}
        gender={gender}
        status={status}
      />
    </div>
  )
}
export default App;