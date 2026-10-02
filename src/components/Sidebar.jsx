import { suggestions } from '../data/instagramData.js'

export default function Sidebar() {
  return (
    <aside className="right-column">
      <div className="my-account"><img className="avatar avatar-large" src="/myprofil.avif" alt="" /><div className="account-names"><strong>moi</strong><span>Mon profil</span></div><span className="text-button">Compte</span></div>
      <div className="suggestion-heading"><strong>Suggestions pour toi</strong></div>
      <div className="suggestions">{suggestions.map((person) => <div className="suggestion" key={person.user}><img className="avatar" src={person.image} alt="" /><div className="account-names"><strong>{person.user}</strong><span>{person.name}</span></div><span className="text-button">Suggestion</span></div>)}</div>
    </aside>
  )
}