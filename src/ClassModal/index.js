import React from 'react';
import './style.css'

const Modal = (props) => {
	
	const cssClass = props.showEdit ? 'Modal-Open' : "Modal-Closed"

	return (
		<div className={cssClass}>
			<input type="text" value={props.editedMovie}/>
			<button> Edit </button>
		</div>
	)

}

export default Modal;