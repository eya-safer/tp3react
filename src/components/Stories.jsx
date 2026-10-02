import { stories } from '../data/instagramData.js'

export function Stories() {
  return <section className="stories">{stories.map((story) => <div className="story" key={story.name}><span className="story-ring"><img src={story.image} alt="" /></span><span>{story.name}</span></div>)}</section>
}