import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = matchData

    return (
      <li className={`match-card ${matchStatus}`}>
        <img
          src={competingTeamLogo}
          className="match-card-logo"
          alt={`competing team ${competingTeam}`}
        />
        <p className="match-card-name">{competingTeam}</p>
        <p className="match-card-name">{result}</p>
        <p className="match-card-name">{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
// Write your code here
