import * as React from 'react'

 function CenteredColumn({ children }) {
  return (
    <div className="flex flex-col max-w-screen-sm mx-auto justify-content">
      {children}
    </div>
  )
}

export default CenteredColumn