import './index.css'

const cryptoCurrencyItem = props => {
  const {getCurrency} = props
  const {
    changePercent24Hr,
    explorer,
    marketCapUsd,
    maxSupply,
    name,
    priceUsd,
    rank,
    supply,
    symbol,
    volumeUsd24Hr,
    vwap24Hr,
  } = getCurrency

  return (
    <tr className="table-row-data">
      <td className="rank">{rank}</td>
      <td className="crypto-logo">
        <a href={explorer} className="symbol-name-container">
          <img
            src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
            alt="icon"
            className="currency-img"
          />
          <h4>
            {name}
            <p className="symbol-ui">{symbol}</p>
          </h4>
        </a>
      </td>
      <td>${Math.round(priceUsd)}</td>
      <td>${Math.round(marketCapUsd)}b</td>
      <td>${Math.round(vwap24Hr)}</td>
      <td>{Math.round(supply)}</td>
      <td>${Math.round(volumeUsd24Hr)}</td>
      <td>{Math.round(changePercent24Hr)}</td>
    </tr>
  )
}
export default cryptoCurrencyItem
