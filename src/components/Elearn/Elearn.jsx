import React from 'react';
import './Elearn.css'


const Elearn = () => {
  return (
    <div>
      <header>
        <h1>Learn Sports</h1>
        <nav>
          <ul>
            <li><a href="#football">Football</a></li>
            <li><a href="#basketball">Basketball</a></li>
            <li><a href="#tennis">Tennis</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="football">
          <h2>Football</h2>
          <p>Football, known as soccer in some countries, is played between two teams of eleven players each. The objective is to score goals by getting the ball into the opposing team's net. Key aspects include:</p>
          <ul>
            <li><strong>Offside Rule:</strong> Players must be onside to participate in active play.</li>
            <li><strong>Fouls:</strong> Includes actions like tripping, holding, or pushing opponents.</li>
            <li><strong>Yellow and Red Cards:</strong> Used to penalize players for misconduct.</li>
          </ul>
          <p><a href="https://youtu.be/oPtXLmHOKEw?si=J0UlTluMRfWEfCav"  target="_blank" rel="noopener noreferrer">Learn more about Football Rules</a></p>
        </section>

        <section id="basketball">
          <h2>Basketball</h2>
          <p>Basketball is a game played between two teams of five players each. The aim is to score by shooting the ball through the opponent's hoop. Key aspects include:</p>
          <ul>
            <li><strong>Dribbling:</strong> Players must dribble the ball while moving around the court.</li>
            <li><strong>Fouls:</strong> Includes personal fouls and technical fouls that affect gameplay.</li>
            <li><strong>Scoring:</strong> Points are scored through field goals and free throws.</li>
          </ul>
          <p><a href="https://youtu.be/wYjp2zoqQrs?si=SG0c0p6TjHBGOE0R" target="_blank" rel="noopener noreferrer">Learn more about Basketball Rules</a></p>
        </section>

        <section id="tennis">
          <h2>Tennis</h2>
          <p>Tennis is a game played between two players (singles) or two pairs of players (doubles). The objective is to hit the ball over the net into the opponent's side of the court. Key aspects include:</p>
          <ul>
            <li><strong>Scoring System:</strong> Matches are played in sets, with points won as 15, 30, 40, and game point.</li>
            <li><strong>Types of Shots:</strong> Includes serves, volleys, and groundstrokes.</li>
            <li><strong>Rules of Play:</strong> Includes service rules, foot faults, and let serves.</li>
          </ul>
          <p><a href="https://youtu.be/1P_Das6OjAk?si=With8Y6E01V-3GW2" target="_blank" rel="noopener noreferrer" >Learn more about Tennis Rules</a></p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Sports Central. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Elearn;
