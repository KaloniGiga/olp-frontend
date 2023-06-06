import React, { useState } from "react";
import Select from "react-select";

const CustomSelect = ({ options, setValues, value }) => {
  const colorStyles = {
    control: (styles) => ({
      ...styles,
      borderColor: styles.isFocused ? "#f21d3d" : "#f21d3d",
      boxShadow: styles.isFocused ? "0 0 0 transparent" : "0 0 0 transparent",
      "&:hover": {
        borderColor: styles.isFocused ? "#f21d3d" : "#f21d3d",
      },
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: data.color,
        "&:hover": { backgroundColor: "#f21d3d67" },
      };
    },
  };

  const handleChange = (selectedValue) => {
    setValues({ ...value, looking_for: selectedValue });
    setValues({ ...value, agefrom: selectedValue });
    setValues({ ...value, ageto: selectedValue });
    setValues({ ...value, caste: selectedValue });
  };

  return (
    <>
      <Select
        menuPlacement="top"
        options={options}
        defaultvalue={value}
        onChange={handleChange}
        styles={colorStyles}
        className="select lg:w-[150px]"
      />
    </>
  );
};

export default CustomSelect;
