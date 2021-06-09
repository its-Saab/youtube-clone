//npm packages
import axios from "axios";


//project files


export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: 'video',
		maxResults: 5,
		key: process.env.REACT_APP_API_KEY,
	},
});
