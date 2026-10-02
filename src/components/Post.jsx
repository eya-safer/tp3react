import { initialPosts } from '../data/instagramData.js'
import { CommentIcon, HeartIcon, MoreIcon, SaveIcon, ShareIcon } from './Icon.jsx'

export default function Post() {
  return (
    <section className="post-feed">
      {initialPosts.map((post) => (
        <article className="post" key={post.id}>
          <header className="post-header"><img className="avatar" src={post.avatar} alt="" /><div className="post-identity"><strong>{post.user}</strong><span>{post.location}</span></div><span className="post-more"><MoreIcon /></span></header>
          <img className="post-image" src={post.image} alt="Photo publiée" />
          <div className="post-actions"><div className="action-group"><span className="icon"><HeartIcon /></span><span className="icon"><CommentIcon /></span><span className="icon"><ShareIcon /></span></div><span className="icon"><SaveIcon /></span></div>
          <div className="post-details"><strong>{post.likes} J’aime</strong><p><strong>{post.user}</strong> {post.caption}</p>{post.comments.map((comment) => <p key={comment}>{comment}</p>)}<span className="post-time">{post.time}</span></div>
        </article>
      ))}
    </section>
  )
}