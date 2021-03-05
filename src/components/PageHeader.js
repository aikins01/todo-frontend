import React from 'react'
export function PageHeader(props) {
    const { title, subtitle } = props
    return (
      <div className="flex flex-col space-y-2 md:items-center md:text-center">
        <h1>{title}</h1>
        {subtitle && <p className="text-2xl">{subtitle}</p>}
      </div>
    )
  }