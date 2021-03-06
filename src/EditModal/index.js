// THIS IS THE ONE THAT I MADE BASED ON YOUTUBE TUTORIALS
// this code is no longer active, not depeting just in case

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
	render() {
		if (!this.props.show) {
			return null;
		}
	
	// the gray background
	const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

  // the modal 'window'
  const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return (
    	<div className='backdrop' style={backdropStyle}>
    		<div className="modal" style={modalStyle}>
    		{this.props.children}

        <input type="text" value="This is where we will put whatever element we are editing"/>

    			<div className="footer">
    				<button onClick={this.props.onClose}>Edit</button>
    			</div>
    		</div>
    	</div>
    );
}
}

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool,
	children: PropTypes.node
};

export default Modal;