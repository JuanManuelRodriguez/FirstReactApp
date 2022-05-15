import Gif from "./Gif";
import {useEffect,useState} from 'react';
import getGifs from '../services/getGifs';

export default function ListOfGifs({params}){
    const {keyword} = params
    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);
    useEffect(function(){
      setLoading(true)
      getGifs({keyword}).then(gifs=>{
        setGifs(gifs)
        setLoading(false)
      })
    },[keyword])

    if (loading) return <p className="loading">Cargando...</p>
    return <div>  
      {  
        gifs.map(({id,title,url})=> 
        <Gif 
            key={id}
            title={title} 
            id={id} 
            url={url} 
        />
        )
      }       
    </div>
    // -------------------otra forma-------------------
    // const [gifs, setGifs] = useState(
    //   {loading: false, results: []}
    // );

    // useEffect(function(){
    //   setGifs(actualGifs=> ({loading: true, results: actualGifs.results}))
    //   getGifs({keyword})
    //     .then(gifs=>{
    //       setGifs({loading:false, results: gifs})
    //     })
    // },[keyword])
    // if(gifs.loading) return <p className="loading">Cargando...</p>

    // return <div>  
    //   {  
    //     gifs.results.map(({id,title,url})=> 
    //     <Gif 
    //         key={id}
    //         title={title} 
    //         id={id} 
    //         url={url} 
    //     />
    //     )
    //   }       
    // </div>
}