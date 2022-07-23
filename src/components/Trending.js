import { useEffect, useState } from 'react'
import "../styles/trending.css"
import Converter from './Converter';
function Trending() {

 

  const [trending, setTrending] = useState([]);


  useEffect(() => {
      getTrendApi();
  },[]);


  const  getTrendApi = async () =>{

    const api = await fetch(`https://api.coingecko.com/api/v3/search/trending`);

        const data = await api.json();

        setTrending(data.coins)
  };
  
  return (
    
    <div className='trend-contianer'>
      <Converter/>
      <h2>Trending Coins</h2>
        
        {trending.map((trend) => {
                
              return (
                
                <div className='trending'>
                    <div key={trend.id} className="trend-cards">
                        <img src={trend.item.small} alt=""/>
                        <p>{trend.item.name}</p>
                        <div>#{trend.item.market_cap_rank}</div>
                    </div>
                    
                </div>
                
            )
        })}
    </div>
    
  )
}

export default Trending