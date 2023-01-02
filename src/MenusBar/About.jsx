import React,{useContext} from 'react';
import NoteContext from '../UseContext/UseComp';
console.log(NoteContext);

const About = () => {
  const data = useContext(NoteContext)
  console.log(data);
  return (
    <div className="page">
        <h1>hello about page </h1>
    </div>
  )
}

export default About