import React from 'react'
import players from './playerr'
import Player from './Player'

const newList = players.map(player => <Player name={player.name} image={player.image} team={player.team} age={player.age} nationality={player.nationality} jerseyNumber={player.jerseyNumber}/>)

const PlayerList = () => {
  return (
    newList
  )
}

export default PlayerList