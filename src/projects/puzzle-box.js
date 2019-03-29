export default {
  name: "Geometric Puzzle Box",
  tags: ["coding", "physical", "game design", "art", "fabrication"],
  description: "Mechanical puzzles embedded into a transforming geometrical form.",
  hash: "puzzle-box",
  thumbnail: {
    type: "image",
    src: "http://dev.scott-wilson.ca/img/thumb/puzzle-box.png",
    alt: "A render of the puzzle sphere."
  },
  content: [{
    heading: "The Project",
    type: "md",
    text: `I designed, modeled, and fabricated a 3D printed puzzle box with mechanical puzzles embedded into a transforming geometrical form.

This was my final thesis project for the Bachelor of Interaction Design program at Sheridan. The end result was a 3D printed mechanical puzzle sphere (only loosely called a puzzle box), with twelve uniquely solvable rotating ring puzzles embedded on the faces of a dodecahedron. The project acted as an exploration of studio practice, digital fabrication, puzzle design, play-testing, and algorithmic generation. The driving force behind it was my personal passion for puzzles and fascination with mixing the digital with the physical. The process started in two intertwined areas: puzzles and geometry. In order to create something that mixed digital and physical, I had to discover a physical form that worked well with a particular type of puzzle, and vice-versa. From there it went through testing, iteration, reiteration, retesting, more reiteration and testing, and finally fabrication. Over the course of the project I encountered a ton of challenges and a handful of eureka moments that I’m going to go over here.
      `,
    visual: {
      type: "image",
      caption: "A render of the final design.",
      sources: [{
        src: 'http://dev.scott-wilson.ca/img/puzzle-box/Geometric Puzzle Box 1.png',
        type: "image/png"
      }],
      defaultSrc: 'http://dev.scott-wilson.ca/img/puzzle-box/Geometric Puzzle Box 1.png',
      alt: "A render of the puzzle sphere."
    }
  }, {
    heading: "Puzzle Conception and Design",
    type: "md",
    text: `I started by looking at puzzles I personally loved. I drew inspiration from one puzzle in particular, called [Slitherlink](https://www.nikoli.co.jp/en/puzzles/slitherlink.html), created by [Nikoli](http://nikoli.co.jp/en/) who also created Sudoku. I used paper prototypes and recruited a variety of players to test out possible puzzle types. Some players came back to help test multiple iterations, and others were new to the project, only trying a single version. The main things I was looking for in a puzzle was that the rules can be learned without guidance or supervision, and that I could conceive of a way to make the puzzle in physical form.

After creating and testing several different puzzle types, I landed on a rotating rings puzzle that worked well with the physical forms I was considering. This type of puzzle had a number of benefits:

* easy to learn without help or introduction
* unique solutions
* wide range of difficulty levels
* equivalent to a combination lock


The last point was a very important part of this whole project coming together. Many of the puzzles I was looking at featured a solution that needed many elements to be correct, spread over the whole puzzle. This works great digitally, or with a person checking the solution, but I wanted something that could built to physically check its own solutions. So, these rotating ring puzzles are theoretically equivalent to a combination lock, a well-understood mechanism that I could confidently design to be 3D printed.

      `,
    visual: {
      type: "image",
      caption: "An example puzzle, in the solved position.",
      sources: [{
        src: 'http://dev.scott-wilson.ca/img/puzzle-box/Rotating Rings Puzzle.png',
        type: "image/png"
      }],
      defaultSrc: 'http://dev.scott-wilson.ca/img/puzzle-box/Rotating Rings Puzzle.png',
      alt: "An example puzzle, in the solved position."
    }
  }, {
    heading: "Geometry",
    type: "md",
    text: `The platonic solids were a clear place to draw inspiration. They’re naturally beautiful, familiar to many people, and geometrically unique. The key piece of geometric interconnectedness I discovered in my research was a way to use a cube to transform one dodecahedron into another. I won’t go into the details here, but this video shows what I mean. I opted to use this transformation as a the final reward for solving all the puzzles. In my testing, I found that people were always surprised by the transformation taking place, and always wanted to know more about how it worked.
`,
    visual: {
      type: "image",
      caption: "The five platonic solids, plus a cuboctahedron and a rhombic dodecahedron",
      sources: [{
        src: 'http://dev.scott-wilson.ca/img/puzzle-box/polyhedra.png',
        type: "image/png"
      }],
      defaultSrc: 'http://dev.scott-wilson.ca/img/puzzle-box/polyhedra.png',
      alt: "The five platonic solids, plus a cuboctahedron and a rhombic dodecahedron"
    }
  }, {
    type: "md",
    heading: "Puzzle Generator Algorithm",
    text: `[See it in action here!](http://phoenix.sheridanc.on.ca/~ixd1971/puzzle_generator/generator.html)

One of the requirements for my degree’s thesis project was that it feature some form of programming. I decided to satisfy this by creating an algorithm to generate puzzles for my project. The decision was motivated by two things: I needed puzzles guaranteed to have only one solution, which is difficult to establish with hand-made puzzles, and I wanted to put my computer science background to work.
I started by breaking down the way I had been creating puzzles by hand so that I could translate it into a procedure that I could code. I realized that I was essentially following the following steps:
- Take a ring.
- Divide its inner and outer perimeter with a number of connection points.
- Draw lines connecting points to one another until all connection points were used.

I took those steps and created an algorithm to follow them and create puzzles. There were a thousand details that had to be addressed as I went. Everything from which points could be connected, to how to draw lines around a ring that don’t overlap.

After a puzzle was created, the algorithm had to check if it was solvable, because that wasn’t guaranteed by the previous steps. I relied on a simple, inefficient, but effective brute-force method, checking every possible position of each ring, and simply throwing out any puzzle that wasn’t solvable, or that had more than one solution. This wouldn’t be at all suitable for real-time generation, as it could take up to several minutes to generate a valid puzzle, depending on the complexity, and didn’t offer any guarantee it would ever even finish. But it was the right method for this project, because I didn’t need the puzzles quickly, I just needed a lot of them. The time I could have spent to create a more bulletproof, more elegant generator was better spent elsewhere on the project.

I coded the generator in [p5.js](https://p5js.org/), gave it a simple HTML interface, and the option to download as SVG, which enabled me to have them printed on vinyl stickers.
`,
    visual: {
      type: "image",
      caption: "The interface of the puzzle generator.",
      sources: [{
        src: 'http://dev.scott-wilson.ca/img/puzzle-box/generator.png',
        type: "image/png"
      }],
      defaultSrc: 'http://dev.scott-wilson.ca/img/puzzle-box/generator.png',
      alt: "The interface of the puzzle generator."
    }
  }, {
    type: "md",
    heading: "Mechanical Design",
    text: `I knew pretty early in the project that I would end up 3D printing all or most of it—it’s where my fabrication strengths were, and it’s a natural fit for a digital creation made physical. It was also the only way I would be able to create the multiple iterations I needed to develop the physical mechanisms. I used Fusion 360 to design the rotating ring locking mechanisms, drawing on my understanding of how combination locks work, and research into design for 3D printing. Before I started 3D modelling, I sketched the mechanisms to ensure I understood how they would fit together, how the parts would interlock.

I designed a modular puzzle mechanism that could attach to the main form in any of twelve spots. The three rotating rings and the fixed outer ring of the puzzle base all have flat tops for vinyl stickers, which contain the lines that make up the puzzle’s solution.
The puzzle is solved when all three rings are in the correct position, enabling the spring-loaded bar to pop forward, disengaging the hooks that lock it to the main form.

The particular shape of the sliding bar and the inner track of the rotating rings was designed to create a tactile click when the user spins the ring from one position to the next. This is essential to creating a good user experience, and it helps prevent the rings from staying halfway between positions. The bar is spring-loaded using the spring from a mechanical pencil.
`,
    visual: {
      type: "image",
      caption: "A cross-section of the final rotating rings module design.",
      sources: [{
        src: 'http://dev.scott-wilson.ca/img/puzzle-box/RotRings v122.png',
        type: "image/png"
      }],
      defaultSrc: 'http://dev.scott-wilson.ca/img/puzzle-box/RotRings v122.png',
      alt: "A cross-section of the final rotating rings module design.",
    }
  }, {
    type: "md",
    heading: "Fabrication",
    text: `I did almost all of the printing for this project myself, on my own two 3D printers. This allowed me to iterate extremely quickly, without going through the school’s fabrication lab, which would have added another several days to each iteration. Additionally, the cost of having the large pieces printed would have been prohibitive any other way.

All-in-all, the fabrication was one of the most challenging parts, between maintaining my printers, dialing in the settings,dealing with failed prints, and overcoming the design restrictions of FFF printing. I had contingency plans in place if I encountered equipment breakdowns, or other challenges, but I was lucky enough not to have to use them. I did use the school’s fabrication service for the very smallest pieces, as they needed to be stronger and more finely detailed than my printers could do.
`,
    visual: {
      type: "vimeo",
      caption: "Assembly video of the printed parts.",
      src: "https://player.vimeo.com/video/266817920",
      width: 1280,
      height: 720,
      title: "Geometric Puzzle Box #1",
      // fallBack: "http://dev.scott-wilson.ca/img/ducks.jpg"
    }
  }, {
    heading: "Future Steps",
    type: "md",
    text: `I don’t plan on creating another version of this, but if I did, there are several things I would change or improve, given the additional time.

##### A stronger hinge design

Custom plastic hinges worked out, but adding a metal axle to each would improve the durability and reduce the chance of snapping the small pieces.

##### More finely-tuned difficulties

I used a mix of hand-made and algorithm generated puzzles, but I encountered a large jump in their difficulties. The hand-made ones were all quite easy, suitable to teach the puzzle’s rules. The generated ones were often much too difficult. This was mostly because of the restriction that each puzzle have single solution, which pushed the complexity required too high. In another iteration of the generator, I could include an understanding of symmetry into the connection procedure, which would allow it to create simpler puzzles that still have clear solutions.

##### Lighter core pieces

The six large core pieces are quite heavy, and take a long time and a lot of material to print. In another iteration, I would investigate using a combination of 3D printed and laser cut acrylic pieces to create the core parts, allowing them to be more lightweight, while retaining their function.

##### More generous tolerances

In the inverted, second configuration, the puzzle modules fit very tightly in the core, which puts tension on all the hinges, and adds resistance to the spring-loaded bars, diminishing the ease rotation and worsening the overall experience.

##### Small, hidden delights

There are many hollow or empty sections of the form that could be used better to add to the experience. Whether it’s inset puzzles that give small extras, or non-functional graphical and aesthetic details, I would love to add more texture and more delight to the project.

`,
    visual: {
      type: "image",
      caption: "One of the core pieces, and the small hinges attached to it.",
      sources: [{
        src: 'http://dev.scott-wilson.ca/img/puzzle-box/AmbiDodec Pin Clip Hinge v96.png',
        type: "image/png"
      }],
      defaultSrc: 'http://dev.scott-wilson.ca/img/puzzle-box/AmbiDodec Pin Clip Hinge v96.png',
      alt: "One of the core pieces, and the small hinges attached to it."
    }
  }]
}
