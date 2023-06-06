import React from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';

function InputSelect(props) {

  const animatedComponents = makeAnimated();

    console.log(props.value && props.value);

  return (
    
    <div className={`my-1 ${props.classes2 && props.classes2}`}>
        {props.label && (<label className={`text-md lg:text-xl xl:text-2xl ${props.classes1 && props.classes1}`} htmlFor="">{props.label && props.label}</label>)}
        <CreatableSelect
        placeholder={props.placeholder && props.placeholder}
        closeMenuOnSelect={true}
        components={animatedComponents}
        defaultValue={[props.default && props.default]}
        isMulti={props.isMulti ? true : false }
        options={props.options && props.options}
        onChange={props.onChange && props.onChange}
        setValue={{value: 'hello', label: "Hello" }}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            // border: 'none',
            // backgroundColor: '#f0efef',
            padding: '2px 5px',
            // border: state.isFocused ? 'none' : 'none !important',
            // outline: state.isFocused ? 'none !important' : 'none',
            // borderBottom: '4px solid red',
          }),
        }}
          />
    </div>
  )
}

export default InputSelect;