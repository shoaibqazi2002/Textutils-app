import React from "react";

function Alert(props) {
  const capital=(word)=>{
    const lower= word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);  }
  return (
   <div style={{height:'50px'}}>
{ props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capital(props.alert.type)}</strong> : 
        {capital(props.alert.msg)}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      </div>)}
   </div>
    )
  
}

export default Alert;
