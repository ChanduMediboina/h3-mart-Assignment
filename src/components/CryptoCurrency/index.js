import {useEffect, useState} from 'react'
import CryptoCurrencyItem from '../CryptoCurrencyItem'
import Header from '../Header'
import Pagination from '../Pagination'
import './index.css'

const CryptoCurrency = () => {
  const [cryptoCurrencyList, setCryptoCurrencyList] = useState([])
  const [paginationList, setPaginationList] = useState([])

  const apiCall = async () => {
    const response = await fetch('https://api.coincap.io/v2/assets')
    const data = await response.json()
    setCryptoCurrencyList(data.data)
    setPaginationList(data.data.slice(0, 50))
  }

  useEffect(() => {
    apiCall()
  })

  const onClickViewMoreBtn = () => {
    setPaginationList(cryptoCurrencyList)
  }

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="budget-crypto-container">
          <div className="display-budget">
            <p className="market-heading">
              MARKET CAP<p>$1.05T</p>
            </p>
            <p className="market-heading">
              EXCHANGE VOL
              <p>$51.56B</p>
            </p>
            <p className="market-heading">
              ASSETS
              <p>2,295</p>
            </p>
            <p className="market-heading">
              EXCHANGES
              <p>73</p>
            </p>
            <p className="market-heading">
              MARKETS
              <p>12,563</p>
            </p>
            <p className="market-heading">
              BTC DOM INDEX
              <p>33.3%</p>
            </p>
          </div>
          <div className="table-ui-container">
            <table className="table-container">
              <tr className="table-row">
                <th className="rank-heading">Rank</th>
                <th className="name">Name</th>
                <th>Price</th>
                <th>Market Cap</th>
                <th>VWAP(24HR)</th>
                <th>Supply</th>
                <th>Volume(24Hr)</th>
                <th>Changes(24Hr)</th>
              </tr>

              <tbody>
                {paginationList.map(eachCurrency => (
                  <CryptoCurrencyItem
                    key={eachCurrency.id}
                    getCurrency={eachCurrency}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <Pagination onClickViewMoreBtn={onClickViewMoreBtn} />
        </div>
      </div>
    </>
  )
}
export default CryptoCurrency
