import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		let txt = this.props.txt
		return (
				<div>
						<h1> {txt} </h1>
				</div>
		);
	}

}

App.propTypes = {
	txt: React.propTypes.string,
	cat: React.propTypes.number.isRequired
}

ReactDOM.render(
	<App cat={3} txt="hello blah blah"/>,
	document.getElementById('app')
);

export default App;
