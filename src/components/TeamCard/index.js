// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {id, name, teamImageUrl} = teamData
    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="team-card">
          <img src={teamImageUrl} className="image" alt={`${name}`} />
          <p className="para">{name}</p>
        </li>
      </Link>
    )
  }
}
