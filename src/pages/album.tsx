
import React from 'react'
  
export const getStaticProps = async () => { 
  
    // Fetching data from jsonplaceholder. 
    const res = await fetch( 
        'https://jsonplaceholder.typicode.com/albums'); 
    let allAlbums = await res.json(); 
  
    // Sending fetched data to the page component via props. 
    return { 
        props: { 
            allAlbums: allAlbums
        } 
    } 
} 
  
const Albums = ({ allAlbums }:any) => { 
    return ( 
        <div> 
            <h1>All Albums</h1> 
            {allAlbums.map((album:any) => ( 
                <div>{album.title}</div>)) 
            } 
        </div> 
    ) 
} 
  
export default Albums