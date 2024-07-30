import React from 'react'
import App1 from './AdminApp/src/App'

const Adminapp = () => {
    const shouldRenderSubApp1 = true;
  return (
    <div>
    {shouldRenderSubApp1 &&
      <App1 />}
    </div>
  )
}

export default Adminapp
