//npm packages

//project files
import "../style/VideoItem.css";

export const VideoItem = ({ item, onSelect }) => {

const handleClick = () => {
  onSelect(item)
}
	return (
		<div onClick={handleClick} className="video-item item">
			<img className="ui image" src={item.snippet.thumbnails.medium.url} alt="thumbnail"/>
			<div className="content">
				<div className="header">{item.snippet.title}</div>
			</div>
		</div>
	);
};
