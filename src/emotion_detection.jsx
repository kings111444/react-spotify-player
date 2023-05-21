import { useEffect, useState } from 'react';
import axios from 'axios';



export default function UploadImage(e) {
  // const [file, setFile] = useState();
  
  // file = setFile(URL.createObjectURL(e.trage.file[0]))
  // console.log(file)
  const emotions = null;
  useEffect(()=> {

      async function testing() {

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
        const response = await axios.request(options);
        console.log(response.data[0].emotion.value);
        return response.data[0].emotion.value;
    }
    testing();
  })

   return(
    <div>
          <input type="file" id="img" onClick={console.log("test")}/>
          
          {/* <img src={file} alt=""/> */}
    </div>
  )

}
