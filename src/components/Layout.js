import React from 'react'
import './all.sass'
import './blogs.scss'

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}

export default TemplateWrapper
