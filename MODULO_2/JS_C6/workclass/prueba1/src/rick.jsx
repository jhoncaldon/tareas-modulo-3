import React from 'react';
import CharacterCard from './components/CharacterCard';

function rick(props) 
{

  const rick = props.id;
  {/* 
    Incluye la logica de consulta de la API. los hooks useState y useEffect
  */}


  return (
    <div>
      <CharacterCard 
        name={name}
        image={image}
        genre={genre}
        status={status}
      />
    </div>
  );
}

export default rick;