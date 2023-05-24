import { useEffect, useState } from 'react';
import axios from 'axios';



export default function Emotion_Detect() {
  // const [file, setFile] = useState();
  // const [Emotion, setEmotion] = useState();
  const [Genre,setGenre] = useState();
  
  // file = setFile(URL.createObjectURL(e.trage.file[0]))
  // console.log(file)
  
  useEffect(()=> {

      async function GetEmotion_value() {

      const options = {
        method: 'POST',
        url: 'https://emotion-detection2.p.rapidapi.com/emotion-detection',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '96ffccba63msh09dd5395f15f4a0p15146djsnfdc7ff1a64a4',
          'X-RapidAPI-Host': 'emotion-detection2.p.rapidapi.com'
        },
        data: {
          url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
        }
      };
      
      try {
        const response = await axios.request(options);
        switch (response.data[0].emotion.value) {
        case 'angry': setGenre('metal,rock'); break;
        case 'disgust': setGenre('Classical Piano'); break;
        case 'fear': setGenre('metal,rock'); break;
        case 'happy': setGenre('Pop'); break;
        case 'neutral': setGenre('Chill Groove'); break;
        case 'sad': setGenre('Classical Piano'); break;
        case 'surprise': setGenre('Pop'); break;
        default: console.log('No emotion detected');
        }
      } catch (error) {
        console.error(error);
      }
    }
    GetEmotion_value();
  },[])

   return Genre 

    // <div>
    //       <input type="file" id="img"  onClick={console.log("test")}/>
    //       {/* <img src={file} alt=""/> */}
    // </div>

}
