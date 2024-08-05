import React from 'react';
import { Image } from './imagec';
import { Details } from './datails';
import { Title } from './title';
import App from './App';


function characterCard(props)
{
  console.log(props,'props result')
  return(
    <div>
      <Title title={props.name}/>
      <Image url={props.image} />
      <Details 
        gender={props.gender} 
        status={props.status} 
      />
    </div>
  );
}

export default App;
