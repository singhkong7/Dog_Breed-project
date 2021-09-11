import React from 'react'

const Subcategory = (props) => {
    const handleChange=(event)=>{
        props.onSelect(event.target.value)
    }
    return (
        <div >
        <select className="form-select" aria-label="Default select example" onChange={handleChange}>
            <option selected>Select SubBreed</option>
            {
                (props.subSelections).map((subSelection,id)=>(
                    <option value={subSelection} key={id}>{subSelection}</option>
                ))
            }   
        </select>        
    </div>
    )
}

export default Subcategory
