import React from "react";

export const Input = (props) => {
  return (
    <div className="input">
      <p className="input__name">{props.inputName}</p>
      <input id={props.id} type={props.type} name={props.name} value={props.value} onChange={props.onChange}
        className="input__field" minLength={props.minLength} maxLength={props.maxLength} required />
      <span className={`input__error input__error_${props.error}`}>Что-то пошло не так...</span>
    </div>
  )
}