const url = `https://bing-news-search1.p.rapidapi.com/news/`;
const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': '25e395749fmsh42328a5f7a739d9p11db61jsn390a0331a3ae',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
	}
};

export const  fetchNewsApi = async (location)=>{
    const res = await fetch(`${url}search?q=${location}%weather&freshness=Day&textFormat=Raw&safeSearch=Off`, options)
    const  data = await  res.json()
    return data
}


// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }