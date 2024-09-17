import React from 'react'
import { Card, Skeleton } from 'antd';

const PropertyCardLoading = () => {
  return (
    <Card className="!w-full !h-[300px] !shadow-md !border-none !rounded-2xl">
        <Skeleton.Image active className='!w-full !mb-2' />
      <Skeleton active className="h-6 w-1/2 !mb-2" />
  </Card>
  )
}

export default PropertyCardLoading