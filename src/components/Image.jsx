import { IKImage } from 'imagekitio-react'
import React from 'react'

export const Image = ({imagePath,className,w,h,alt}) => {
  return (
    <IKImage
        className={className}
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
        path={imagePath}
        loading='lazy'
        lqip={{ active: true, quality: 20 }}
        width={w}
        height={h}
    />
  )
}
