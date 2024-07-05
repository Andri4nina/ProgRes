import React from 'react'
import CardEtu from '../../../../Etudiants/pages/Room/components/CardEtu'
import OtherEtu from '../../../../Etudiants/pages/Room/components/OtherEtu'

const ListConProf = () => {
  return (
   <>
       <div className="">
                <div className="grid sm:grid-cols-2   gap-1 w-full px-2 ">
                 
                    <CardEtu />
                    <CardEtu />
                    <CardEtu />
                    <CardEtu />
                    <CardEtu />
                    <OtherEtu />
                </div>
            </div>
   </>
  )
}

export default ListConProf