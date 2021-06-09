//npm packages

//project files
import { VideoItem } from "./VideoItem"


export const VideoList = ({videosList, onSelect}) => {
  console.log(videosList)
  const renderedList = videosList.map(item => {
    return <VideoItem key={item.id.videoID} item={item} onSelect={onSelect} />
  })
  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  )
}
