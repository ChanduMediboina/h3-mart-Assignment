import {BiSearchAlt2} from 'react-icons/bi'

import {AiFillSetting} from 'react-icons/ai'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="top-header">
      <p className="top-header-heading">
        Buy,sell& swap your assets. No KYC. No added fees. Decentralized.
      </p>
    </div>
    <div className="bottom-header">
      <p className="coin-heading">Coins</p>
      <p className="coin-heading">Exchange</p>
      <p className="coin-heading">Swap</p>
      <img
        src="https://res.cloudinary.com/dxnk6ejnn/image/upload/v1673535647/coin_cap_logo_edv1xw.png"
        alt="company logo"
        className="logo-img"
      />
      <p className="coin-heading">USD</p>
      <p className="coin-heading">English</p>
      <BiSearchAlt2 />
      <AiFillSetting className="setting-icon" />
    </div>
  </div>
)
export default Header
