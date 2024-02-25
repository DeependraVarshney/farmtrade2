import React from 'react'
import { useId } from 'react'

function Select({
    options,
    label,
    className="",
    ...props
},ref) {
    const id= useId()

  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-balck outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {options?.map((option) =>(
                <option key={option} value={option}>
                    {option}
                </option>

            ))}//we are not doing map directly because when there is no value inside options then our app may crash thats why we are looping optionally

        </select>
    </div>
  )
}

export default React.forwardRef(Select)