export default {
  name: "Escape from the Tower",
  tags: ["dev", "physical", "game design"],
  description: "An interactive p5.js web app that generates unique, cohesive images for a design conference.",
  hash: "escape-from-the-tower",
  thumbnail: {
    type: "image",
    src: "http://dev.scott-wilson.ca/img/thumb/escape-from-the-tower.jpg",
    alt: "A colorful scattering of triangles and cubes from the generator."
  },
  content: [{
      type: "md",
      heading: "The Project",
      text: `I helped build the [Escape from the Tower](https://www.escapecasaloma.com/) game in Casa Loma in Toronto. It's the first escape game in the Casa Loma Escape series created by [Secret City Adventures](https://www.secretcityadventures.com/).
##### The Problem — Turn abstract designs into physical puzzles
I was the lead puzzle tech and was responsible for translating the puzzles designed by the game designers into physical interactive pieces. Overall, the most challenging aspect was ensuring that the pieces could take daily use and abuse, both by players, and by the tourists visiting the castle during the day. I think I was successful, but there are definitely challenges that I feel I could tackle much better now that I have more experience under my belt. Stay tuned below for more specifics.

I created about ten pieces for the project, ranging from laser cut puzzles to Arduino powered electronics. Each posed their own challenge, and each required a different solution.

##### Results — Successful launch and followups
The game launched successfully in September 2015, and has since lead to two more games in the Casa Loma Escape series. The puzzles weren't flawless, and I continued to make repairs and upgrades for another year. The game is still running, and another tech is in charge of maintenance now.

##### Press and Ratings
The Casa Loma Escape series is rated 4.5 stars on [Trip Advisor Canada](https://www.tripadvisor.ca/Attraction_Review-g155019-d8514286-Reviews-Casa_Loma_Escape_Series_A_Secret_City_Adventure-Toronto_Ontario.html), and Escape from the Tower was covered by the [Toronto Star](https://www.thestar.com/life/2015/08/05/the-star-gets-an-exclusive-preview-of-casa-lomas-new-escape-game.html), and [BlogTO](http://www.blogto.com/sports_play/2015/08/new_casa_loma_escape_game_might_be_torontos_best/), who said it "might be Toronto's best" escape game.`,
      visual: {
        type: "image",
        caption: "The first floor of the tower. Photograph 2017 All Rights Reserved. Company & Co.",
        sources: [{
          src: "http://dev.scott-wilson.ca/img/escape-from-the-tower/switch.jpg",
          type: "image/jpg"
        }],
        defaultSrc: "http://dev.scott-wilson.ca/img/escape-from-the-tower/switch.jpg",
        alt: "A large electric power switch sitting on a table, with puzzles visible in the background."
      }
    },
    {
      heading: "Coordinate Machine",
      type: "md",
      text: `Players should have the coordinates of four German U-boats that they need to relay to Allied Command. Each set of U-boat coordinates was the solution to one of the other four puzzles on this level.

##### Problem — Check players' solutions
We had to create _something_ that could plausibly fit in the 1940s, that could tell whether the players had the answers correct, and that gives them physical evidence that they could proceed to the next step.

##### Solution — Telephone patch cabinet
I worked mostly with the production designer on this piece. He sourced an antique switchboard, which we re-purposed to be a coordinate machine, a sort of combination of punch-card and patch-board. I devised a system that would have players use the telephone patch's grid of plugs above to input the coordinates. The rows were labeled A - I and the columns from 1 - 10. This way, we could check whether the four cables were in the correct slots. Thankfully, the patch cables were close enough to 1/4" audio jacks, so I removed the existing connections from the inside of the cabinet, and attached a new Arduino circuit to only the four jacks that mattered, and the four cable ends.

When all four circuits complete, a card dispenser spits out a pre-punched card that contains the correct four coordinates. This way, we didn't need to actually punch cards each time, because only the correct solution will ever be dispensed.

##### Challenges
**Durability** — The patch cables had a tendency to fray under sustained use, so we've had to replace them several times.

**Logic** — It's never quite explained how the machine knows what the correct answers are. Instead, the actors in the game usher people quickly to the next floor.

**Dispenser** — The coordinate card dispenser is not as reliable as I would have liked. It uses a servo motor to push up the bottom of the card, but has a tendency to jam. I'd like to replace it with either a commercially available card feeder, or a 3D printed version.

**Theme** — We did end up fudging the theme somewhat. The switchboard we found was actually from the '50s.`,
      visual: {
        type: "image",
        caption: "Players input German U-boat coordinates into a converted telephone switchboard. Photograph by me, puzzle 2015 All Rights Reserved. Company & Co.",
        sources: [{
          src: 'http://dev.scott-wilson.ca/img/escape-from-the-tower/coordinates.jpg',
          type: "image/png"
        }],
        defaultSrc: 'http://dev.scott-wilson.ca/img/escape-from-the-tower/coordinates.jpg',
        alt: "An antique telephone switchboard, with patch cables and rows of telephone jack sockets."
      }
    }, {
      heading: "Copper Pipe Circuit",
      type: "md",
      text: `This is one of four puzzles on the first floor. It requires players to find pieces hidden around the room, and assemble them into a shape in order to unlock a 'key' to the next floor.

##### Problem — Check the assembled pieces of the puzzle
The puzzle designers wanted players to put together pieces they found around the room, and fit that puzzle to the theme of the first floor, an Electrical Room.

##### Solution — Copper Pipes
In order to check if all the pieces were assembled correctly, I came up with the idea of using pieces that connect valves on a steam-powered machine. Instead of actual steam, which would be hazardous and difficult to work with, I used a low-voltage current passed through a series of copper pipes. The pipe pieces were soldered into unique shapes, and had to be slotted together before being attached to the table. 

Once all ten pieces are present, the table dispenses a fuse, which is one of four 'keys' needed to ascend to the next level. I used an Arduino to check the circuit and control the fuse dispenser.

##### Challenges
**Accuracy** — I found that certain people were conductive enough to complete the circuit using their arms. I reworked the circuit to require lower resistance, and a stable connection, but it would still be possible to trick it using a length of wire or a long metal rod. We limited the availability of these things, and decided to accept some of these more creative solutions as out-of-box-thinking.

**Uniqueness** — We found in testing that the pipes could be connected in ways we didn't anticipate to complete the puzzle. I added bolts to act as corner indicators and to stop players from connecting pipes where they aren't supposed to.

**Signalling** — In some games, the players didn't hear when the fuse was dispensed, and tried to keep working on the puzzle after it was solved. I added a light to the dispenser, and a metal plate that makes a louder _clang_ when the fuse comes out.`,
      visual: {
        type: "image",
        caption: "Players assemble copper piping to complete an electrical circuit. Photo and puzzle copyright 2015 All Rights Reserved. Company & Co.",
        sources: [{
          src: 'http://dev.scott-wilson.ca/img/escape-from-the-tower/pipes.jpg',
          type: "image/png"
        }],
        defaultSrc: 'http://dev.scott-wilson.ca/img/escape-from-the-tower/pipes.jpg',
        alt: "A close up of players' hands touching and gesturing at a grid of copper pipes on the table."
      }
    },
    {
      heading: "Electrical Gauges Puzzle ",
      type: "md",
      text: `This is another of the puzzles on the first floor. It requires players to solve a mathematical puzzle to unlock a 'key' to the next floor.

##### Problem — Present a math problem and check the solution
This piece needed to communicate a mathematical puzzle that has a unique solution, check the solution to the problem, and dispense a 'key'.

##### Solution — Power Gauges
The math behind this puzzle has three sets of clues that give three numbers. Each set has a pattern between the three numbers in each row.

My solution was to have the numbers represented as three types of electrical gauges on a power panel. Each set has one gauge that players can spin, acting as a dial to input the answer. The other gauges are fixed to a number that players read off of the meter. Players need to infer the relationships between the sets of numbers, and adjust the free gauges to match the pattern.

Once the three dials are in the right positions, the box dispenses a fuse, just like the Copper Pipes puzzle.

##### Challenges
**Legibility** — In early versions, players had trouble reading the numbers off the gauges. We found that it was because some fell between tick marks. I adjusted the tick marks so that the correct number was always a whole tick mark.

**Signalling** — As in the Pipes puzzle, the players didn't always hear when the fuse was dispensed. I made the same modifications to this puzzle.`,
      visual: {
        type: "image",
        caption: "Players solve a mathematical relationship to restore power. Photograph by me, puzzle copyright 2015 All Rights Reserved. Company & Co.",
        sources: [{
          src: 'http://dev.scott-wilson.ca/img/escape-from-the-tower/gauges.jpg',
          type: "image/png"
        }],
        defaultSrc: 'http://dev.scott-wilson.ca/img/escape-from-the-tower/gauges.jpg',
        alt: "27 gauges in an electrical panel and instructions make up the puzzle."
      }
    },
    {
      type: "md",
      heading: "Topographical Map",
      text: `This is one of the maps on the second floor, in the Map Room. It requires players to find pieces around the room, to activate a radio, and to decipher and follow a series of cryptic clues from the radio.

##### Problem — Allow players to chart a course underwater
For this puzzle, players listen to the intercepted transmissions of a U-boat, and follow its course through an underwater landscape.

I had to present a series of ridges and valleys in a way that players could interpret descriptions of the geography and recreate the course the U-boat took.

##### Solution — Topographical Pieces
I created a group of pieces that can be assembled into a topographical map. The table in the center of the room has an outline of the bottom layer, and each piece has the outline of the piece that stacks on top of it. As players find the pieces, they match the outlines and stack them to recreate the map.

This puzzle didn't require electronics, instead, I designed the pieces in Illustrator, and had them laser cut out of plywood, including engraving the correct outlines.

##### Challenges
**Complexity** — This puzzle was taking players too long in testing, so I simplified the pieces by gluing some of the smaller layers together. I also had the pieces painted to match their depth, so deeper pieces are darker blue.

**Fragility** — A few of the pieces were long and thin enough that they risked snapping. In some cases I redesigned the piece, and in others, I doubled the thickness of the piece to reinforce it.`,
      visual: {
        type: "image",
        caption: "Players reconstruct a topographical map from hidden puzzle pieces. Photograph by me, puzzle copyright 2015 All Rights Reserved. Company & Co.",
        alt:"A close up of lasercut wooden topographical map pieces on the table.",
        sources: [{
          src: 'http://dev.scott-wilson.ca/img/escape-from-the-tower/topographical.jpg',
          type: "image/png"
        }],
        defaultSrc: 'http://dev.scott-wilson.ca/img/escape-from-the-tower/topographical.jpg',
      }
    },
    {
      type: "md",
      heading: "Conclusions",
      text: `Going into the project, I had never soldered a circuit, done any user testing, or created any props. Throughout the project I learned game design from the puzzle designers, prop design from the production designer, and interactive circuits from the internet.

I was able to deliver a product that delights players daily, reinforces the immersive theme, and offers interactive solutions to game design problems.
`
    }
  ]
}
