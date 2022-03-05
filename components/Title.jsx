import React from 'react'

function Title({ children, tag, size, color }) {
  const Tag = tag;

  return (
    <>
      <Tag>{ children }</Tag>

      <style jsx>{`
          ${tag} {
            color: ${color};
            font-size: ${size};
            font-weight: 600;
            text-align: center;
            line-height: 1.8rem;
          }
        `}</style>
    </>
  )
}

export default Title;