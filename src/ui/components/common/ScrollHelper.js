import React from 'react';

class ScrollHelper extends React.Component {
	scrollToBottom() {
		this.messagesEnd.scrollIntoView({ behavior:"auto" });
	}
	componentDidUpdate() {
		this.scrollToBottom();
	}
	render() {
		return (
			<div style={{ float:"left", clear: "both" }}
				ref={(el) => { this.messagesEnd = el; }}>
			</div>
		);
	}
}

export default ScrollHelper;
