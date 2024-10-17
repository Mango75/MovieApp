import { SearchableKeys, iMovie } from './../types/types';

export const filterFunction = (filter:string,movies:iMovie[],type:"Genre"|"Language")=>{
    const filteredMovies = movies.filter((movie)=> movie[type]?.includes(filter))
    return filteredMovies;
}

export const filterArrayCreation=(inputArray:iMovie[],type:"Genre"|"Language")=>{
    let filterArray: string[] = [];
    
    inputArray.forEach((movie)=>{
      let filter= movie[type]?.split(', ');
      filter?.forEach((genre)=>{
        if(!filterArray.includes(genre)){
          filterArray= [...filterArray,genre]
        }
      })
    })
    
    filterArray.sort((a,b)=>a.localeCompare(b))
    return filterArray;

}

export const createArrayFromString =(array?:string)=>{
    let stringArray= array?.split(", ");
    return stringArray?.sort((a,b)=>a.localeCompare(b))
}



export const searchFunction = (
  searchword: string, 
  keys: SearchableKeys[], 
  searchArray: iMovie[]
): iMovie[] => {   
  return searchArray.filter((movie) =>
    keys.some(key => movie[key as keyof iMovie]?.toLowerCase().includes(searchword.toLowerCase()))
  );
};