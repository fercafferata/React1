const getMovie = async (pag) => {
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=6aba441d5df3e6a2518c33d095dc72c9`;
    try{
        const response = await fetch(URL)
        const json = await response.json()        
        return json
    }catch(err){
        console.log("Error" + err);
    }
}

const getDataMovie = async (id) => {
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=6aba441d5df3e6a2518c33d095dc72c9`;
    try{
        const response = await fetch(URL)
        const json = await response.json()
        return json
    }catch(err){
        console.log("Error" + err);
    }
}

const getCredits = async (id) => {
    const URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=6aba441d5df3e6a2518c33d095dc72c9`;
    try{
        const response = await fetch(URL)
        const json = await response.json()
        return json
    }catch(err){
        console.log("Error" + err);
    }
}


export {getMovie, getDataMovie, getCredits};