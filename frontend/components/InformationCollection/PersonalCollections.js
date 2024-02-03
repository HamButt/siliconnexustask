import React from 'react'
import Headbar from './Headbar'
import ItemizedDeduction from './ItemizedDeduction';
import PrepSheet from './PrepSheet';


function PersonalCollections() {
    const [component,setComponent] = React.useState(false)

  return (

    <div>
       
        <div className="bg-white mx-5 px-5 pt-5">
          <p className='text-[#1B1B1B] text-[20px]' >Personal Collection</p>
          <div className="tabs mt-5">
              <button className='p-2 rounded-t-md border-b-1 border-black' style={{background: component ? "" : "#0B2558", color: component ? "#0B2558" : "white"}} onClick={()=> setComponent(false)}>Prep Sheet</button>
              <button className='bg-white p-2 rounded-t-md border-b-1 border-black' style={{background: component ? "#0B2558" : "", color: component ? "white" : "#0B2558"}} onClick={()=> setComponent(true)}>Itemized Deductions</button>
          </div>

        {component ?  <ItemizedDeduction/> : <PrepSheet/> }

        </div>
    </div>
  )
}

export default PersonalCollections