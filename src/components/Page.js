import React from 'react'
import { Footer } from './Footer'

function Page(props) {
    const { children } = props
    return (
      <>
        <div className="px-4 py-32 lg:px-0">{children}</div>
        <Footer />
      </>
    )
  }

export default Page