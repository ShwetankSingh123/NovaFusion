import React from 'react'
import Game from '../components/Game';
import Timer from '../components/Timer/Timer';

const Games = () => {
  return (
    <>
    <div style={{display:"flex",flexWrap:"wrap"}}>
    <Game
        image="https://img.freepik.com/premium-photo/3d-rendering-tennis-player-action_853677-33156.jpg?size=626&ext=jpg&ga=GA1.1.121246274.1691675306&semt=ais_user_b"
        name="Runner Game"
        description="A game where you have to run as far as you can."
        linkOfGame="https://shwetanksingh123.github.io/RunnerGame/"
      />

      <Game
        image="https://img.freepik.com/free-photo/digital-art-style-pirate-character-portrait_23-2151486801.jpg?size=626&ext=jpg&ga=GA1.1.121246274.1691675306&semt=ais_user_b"
        name="RPG Game"
        description="A game where you have to fight monsters and save the world."
        linkOfGame="https://shwetanksingh123.github.io/RPGGame/"
      />

      <Game
        image="https://img.freepik.com/free-photo/war-conflict-landscape-with-soldiers-shooting_23-2149766342.jpg?size=626&ext=jpg&ga=GA1.1.121246274.1691675306&semt=ais_user_b"
        name="Sphere Shooter"
        description="A game in which you are in a tank and you have to destroy the enemies."
        linkOfGame="https://shwetanksingh123.github.io/SphereShooterBuild/"
      />

      <Game
        image="https://img.freepik.com/free-photo/3d-view-powerful-gun_23-2150888705.jpg?size=626&ext=jpg&ga=GA1.1.121246274.1691675306&semt=ais_user_b"
        name="Rumble Ranger"
        description="2D shooting game."
        linkOfGame="https://shwetanksingh123.github.io/RumbleRanger/"
      />

    </div>
    <Timer/>
    </>
  )
}

export default Games;