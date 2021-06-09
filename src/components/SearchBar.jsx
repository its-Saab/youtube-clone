//npm packages
import React from "react";
//project files

export default class SearchBar extends React.Component {
	state = { term: "" };

	onInputChange = ({ target: { value } }) => {
		this.setState({ term: value });
	};

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSearchSubmit(this.state.term);
	};
	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<input
							placeholder="Search..."
							value={this.state.term}
							type="text"
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}
