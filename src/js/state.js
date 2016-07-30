import React from 'react';
import ReactDOM from 'react-dom';

// state is managed by the Component itself.
class App extends React.Component {
	constructor() {
		 super();
		 this.state = {
			 txt: 'this is the state text',
			 cat: 0
		 }
	}
	update(e) {
		this.setState({ txt: e.target.value })
	}
	render() {
		return (
			<div>
				<h1>State Demo</h1>
				<input type="text"
					onChange={this.update.bind(this)} />
				<h2>{this.state.txt}</h2>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);

export default App;
