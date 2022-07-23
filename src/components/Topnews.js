import { useEffect, useState } from 'react'
import "../styles/topnews.css"

function Topnews() {

  //This is just to get the current date dispplayed for this component
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


  const [topNews, setTopNews] = useState([])

useEffect(() => {
  getTopNewsApi();
},[]);

const getTopNewsApi = async () => {
  const api = await fetch('https://newsapi.org/v2/everything?q=crypto&apiKey=351a633ac3404a0fa4234f9e35718bf3');

const data = await api.json()

  setTopNews(data.articles)
};


  return (

<div className='topnews-container'>
  <h2>Top News - {date}</h2>
  
  {topNews.splice(0,5).map((news) => {
        return (
          <div className='topnews-card'>
            <img src={news.urlToImage} alt="articleimage"/>
            <div className='card-info'>
            <a target="_blank" rel="noopener noreferrer" href={news.url}>{news.title}</a>
            <p>{news.description}</p>
            </div>
          </div>
          
        )
    })}

    
    
    </div>
  )
}

export default Topnews