import React from 'react'
import CryptoMarkets from "../components/CryptoMarkets"

function Coins() {
  return (
    <main>
        <CryptoMarkets
        key={crypto.id}/>
    </main>
  )
}

export default Coins