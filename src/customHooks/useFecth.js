export function useFetch (apiUrl){
    var apiData = '';
    fetch(apiUrl)
    .then((res)=>{res.json})
    .then((data)=>{
        apiData = JSON.stringify(data);
        return apiData;
    })
}