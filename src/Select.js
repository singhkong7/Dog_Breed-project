import React from 'react'

const Select = (props) => {
    // const len=props.items.length;
    // console.log(len);
    const handleChange=(event)=>{
        props.onSelect(event.target.value)
    }
    return (
        <div >
            <select className="form-select" aria-label="Default select example" onChange={handleChange}>
                <option selected>Select Dog Breed</option>
                {
                    Object.keys(props.items).map((item,id)=>(
                        <option value={item} key={id}>{item}</option>
                    ))
                }
            </select>        
        </div>
    )
}

export default Select
