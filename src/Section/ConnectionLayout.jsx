import React from 'react'
import ConnectionRequestSection from './connectionRequestSection'
import ConnectionSection from './ConnectionSection'

function ConnectionLayout() {

  return (
    <div className='w-full mt-[10vh] h-full flex flex-col min-h-screen items-center bg-screen '>
      <ConnectionRequestSection />
      <ConnectionSection />
    </div>

  )
}

export default ConnectionLayout
