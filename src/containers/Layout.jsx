import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout