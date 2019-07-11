import React from 'react';

const FormItem = props => {
    let labelText = props.name;
    labelText = labelText.substring(0, labelText.indexOf("Collection"));
    labelText = labelText.replace("Mixed", "Mix");
    const defaultChecked =  (props.index === 0) ? "defaultChecked" : "";
    let defaultValue;
    if (labelText.indexOf("Red") > -1) {
        defaultValue = "all-reds";
    } else if (labelText.indexOf("White") > -1) {
        defaultValue = "all-whites";
    } else {
        defaultValue = "mixed"
    }

    return (
        <label className="wine-options">
        <input type="radio" className="radio" name="wineSelect" defaultChecked={defaultChecked} data-bom={props.id} defaultValue={defaultValue} />
        <b>{labelText}</b>  + 2 BONUS Bottles & Glasses + <b>JUST ${props.price}</b>
        <a href="#single-wine-modal" className="toggle-single-wine-modal" data-bom={props.id} data-title={labelText} data-toggle="modal" data-target="#single-wine-modal" style={{textDecoration: 'none'}}>view wines</a>
      </label>
    );
  }

export default FormItem