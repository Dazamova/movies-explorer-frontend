import React from "react";
export const Container = (props) => {

  return (
    <div className={`container container_type_${props.type}`}>
      {props.children}
    </div>
  )
}