import React from 'react'
import { Helmet } from 'react-helmet'

const MetaInfo = ({ogTitle, ogDescription, ogImage }) => {
  return (
    <>

    <Helmet>
         <meta property="og:title" content={ogTitle} />
         <meta property="og:description" content={ogDescription} />
         <meta property="og:image" content={ogImage} />

    </Helmet>
      
    </>
  )
}

export default MetaInfo
