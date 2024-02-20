export const exerciseOptions = {
    method: 'GET',
    url: 'https://gym-fit.p.rapidapi.com/exercises/search',
    params: {
      number: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'gym-fit.p.rapidapi.com'
    }
  };


//create async function 
export const fetchData = async (url, options) => {
    //define as const since once fetched it will not change
    const response = await fetch(url, options);
    const data = await response.json();
    
    return data;

}