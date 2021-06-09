//npm packages
import React from "react";
import SearchBar from "./SearchBar";
//project files
import youTube from "../api/youtube";
import { VideoList } from "./VideoList";
import { VideoDetail } from "./VideoDetail";

export default class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onSearchSubmit("react.js");
	}

	onSearchSubmit = async (query) => {
		const res = await youTube
			.get("/search", {
				params: {
					q: query,
				},
			})
			.then(({ data: { items } }) => items);

		this.setState({ videos: res, selectedVideo: res[0] });
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};
	render() {
		return (
			<div className="ui container">
				<SearchBar onSearchSubmit={this.onSearchSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								videosList={this.state.videos}
								onSelect={this.onVideoSelect}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
