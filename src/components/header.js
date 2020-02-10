import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const navItemStyle = {
  fontFamily: 'Sanchez',
  fontSize: '11px',
  letterSpacing: '.1em',
}

const navItemActive = {
  color: 'white',
}

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        padding: `30px 0`,
      }}
    >
      <div className="title-row"
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <h1 style={{ margin: 0, letterSpacing: '2px' }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle.toUpperCase()}
          </Link>
        </h1>
        <ul style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '400px',
        }}>
          <li style={navItemStyle}><Link to="/branded" activeStyle={navItemActive}>commercial/branded</Link></li>
          <li style={navItemStyle}><Link to="/narrative" activeStyle={navItemActive}>narrative</Link></li>
          <li style={navItemStyle}><Link to="/about/" activeStyle={navItemActive}>about</Link></li>
        </ul>
      </div>
      <h2
        style={{
          fontFamily: 'Europa, serif',
          fontSize: '12px',
          letterSpacing: '.04em',
          lineHeight: '2em',
          color: '#aaa',
          marginBottom: 0,
        }}
      >
        producer
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
