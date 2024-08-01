import React from 'react'
import LocationSearch from '../LocationSearch'
import AddGuest from '../AddGuest'
import DataRangePicker from '../ui/DatePicker'
import { Button } from 'antd'

const HomeFilterBar = () => {
  return (
    <div className='flex items-center gap-12 p-5 border-2 border-blue-300 rounded-xl justify-between max-w-fit'>
        <LocationSearch/>
        <DataRangePicker />
        <AddGuest/>
        <Button type="primary">Search</Button>
    </div>
  )
}

export default HomeFilterBar