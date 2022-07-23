import React, { useEffect, useState } from 'react'
import Popup from "./Popup";
import "../styles/cryptomarkets.css"
import close from "../images/xmark-solid.svg"



function CryptoMarkets() {

   const [marketData, setMarketData] = useState([]);


    useEffect(() => {
        getMarketApi();
    },[]);


    const getMarketApi = async () => {
        const api = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7`);

        const data = await api.json();

        setMarketData(data)
    };

 

    const [buttonPopup, setButton] = useState(false);



  return (
    <div className='coin-grid'>
        
        {marketData.map((crypto) => {
                    

            return (
                
                
                
                <div className='coin-container '>
                    <div key={crypto.id} className="coin-cards " onClick={()=> setButton(true)}  >
                        <img src={crypto.image} alt="" />
                        <h2>{crypto.name}</h2>
                        
                          {/* Displays green or red depending if the coin is positive or negative */}

                        {crypto.price_change_percentage_24h < 0 ?(
                            <p className='coin-percent red'>
                                {crypto.price_change_percentage_24h.toFixed(2)}
                            %</p>
                        ) : (<p className='coin-percent green'>
                        {crypto.price_change_percentage_24h.toFixed(2)}
                    %</p>)
                    
                    }

                        <h3 className='current-price'>USD: $ {crypto.current_price.toLocaleString()}</h3>
                        <div className='market-cap'> Mkt Cap: $ {crypto.market_cap.toLocaleString()}</div>
                    </div>

                   {/*Popup for more info on coins */}

                    <Popup trigger={buttonPopup}>
                        <div className='popup-card'>
                            
                            <div className="popup-info">
                            <img src={close} alt="" onClick={()=> setButton(false)} />
                                    <li><strong>Total Volume: $</strong>{crypto.total_volume.toLocaleString()}</li>
                                    <li><strong>Supply: </strong> {crypto.circulating_supply.toFixed()}</li>
                                    <li><strong>Max supply: </strong> {crypto.max_supply} </li>
                                    <li><strong>ATH: $</strong>{crypto.ath.toLocaleString()}</li>
                                    <li><strong>ATL: $</strong>{crypto.atl}</li>
                            </div>
                        </div>
                    </Popup>
                </div>
            )
        })}
    </div>
  )
}

export default CryptoMarkets