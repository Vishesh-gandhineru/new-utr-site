import React from 'react'

type MapMarkerProps = {
    text: string,
    onClick?: () => void
    lat: number,
    lng: number
    
}

const MapMarker = ({text , onClick} : MapMarkerProps) => {
  return (
    <div onClick={onClick}>{text}</div>
  )
}

export default MapMarker