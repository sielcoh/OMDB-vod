import React, { useEffect, useState } from 'react'
import VodList from './vodList'
import VodStrip from './vodStrip'
import './home.css'
import { useSearchParams } from 'react-router-dom'

function Home() {
  const [querys] = useSearchParams();
  const [ar, setAr] = useState([])

useEffect(( )=>{
  let searchQ = querys.get("s") || 'superman'
doApi(searchQ);
  }, [querys])

const doApi = async(_searchQ) =>{
  let myUrl = `https://www.omdbapi.com/?s=${_searchQ}&apikey=4dbb069c`
  let resp = await fetch(myUrl);
  let data = await resp.json();
  setAr(data.Search)
}


  return (
    <React.Fragment>
      <VodStrip/>
      <VodList vod_ar={ar}/>
    </React.Fragment>
  )
}

export default Home