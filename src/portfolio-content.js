export const navTags = ["ux", "dev", "physical"];
export const projects = [{
    name: "Geometric Puzzle Box #1",
    tags: ["dev", "physical", "game design", "art"],
    description: "Mechanical puzzles embedded into a transforming geometrical form.",
    hash: "puzzle-box",
    thumbnail: {
      type: "image",
      src: "puzzle-box.png",
      width: 320,
      height: 320,
      alt: "A render of the puzzle sphere."
    },
    content: [{
      heading: "Heading 1",
      text: "I designed, modeled, and fabricated a 3D printed puzzle box with mechanical puzzles embedded into a transforming geometrical form. This was my final thesis project for the Bachelor of Interaction Design program at Sheridan. The end result was a 3D printed mechanical puzzle sphere (only loosely called a puzzle box), with twelve uniquely solvable rotating ring puzzles embedded on the faces of a dodecahedron. The project acted as an exploration of studio practice, digital fabrication, puzzle design, play-testing, and algorithmic generation. The driving force behind it was my personal passion for puzzles and fascination with mixing the digital with the physical. The process started in two intertwined areas: puzzles and geometry. In order to create something that mixed digital and physical, I had to discover a physical form that worked well with a particular type of puzzle, and vice-versa. From there it went through testing, iteration, reiteration, retesting, more reiteration and testing, and finally fabrication. Over the course of the project I encountered a ton of challenges and a handful of eureka moments that I’m going to go over here.",
      visual: {
        type: "image",
        sources: [{
          src: 'http://dev.scott-wilson.ca/img/thumb/puzzle-box.png',
          type: "image/png",
          media: "(min-width: 1024px)"
        },{
          src: 'http://dev.scott-wilson.ca/img/puzzle-box-vertical.png',
          type: "image/png",
          media: "(orientation: portrait)"
        },{
          src: 'http://dev.scott-wilson.ca/img/puzzle-box-square.png',
          type: "image/png",
          media: "(min-width: 200px)"
        }],
          defaultSrc: 'http://dev.scott-wilson.ca/img/puzzle-box-square.png',
        // width: 600,
        // height: 360,
        alt: "A render of the puzzle sphere."
      }
    }, {
      heading: "Heading 2",
      text: "I started by looking at puzzles I personally loved. I drew inspiration from one puzzle in particular, called Slitherlink, created by Nikoli who also created Sudoku. I used paper prototypes and recruited a variety of players to test out possible puzzle types. Some players came back to help test multiple iterations, and others were new to the project, only trying a single version. The main things I was looking for in a puzzle was that the rules can be learned without guidance or supervision, and that I could conceive of a way to make the puzzle in physical form. After creating and testing several different puzzle types, I landed on a rotating rings puzzle that worked well with the physical forms I was considering. This type of puzzle had a number of benefits:",
      visual: {
        type: "vimeo",
        src: 'https://player.vimeo.com/video/266817920?loop=1',//wide
        width: 640,
        height: 360,
        // src: 'https://player.vimeo.com/video/266867847?loop=1',//tall
        // width: 640,
        // height: 1382,
        title: "Geometric Puzzle Sphere - Interaction"
      }
    },{
      heading: "Heading 3",
      text: "I started by looking at puzzles I personally loved. I drew inspiration from one puzzle in particular, called Slitherlink, created by Nikoli who also created Sudoku. I used paper prototypes and recruited a variety of players to test out possible puzzle types. Some players came back to help test multiple iterations, and others were new to the project, only trying a single version. The main things I was looking for in a puzzle was that the rules can be learned without guidance or supervision, and that I could conceive of a way to make the puzzle in physical form. After creating and testing several different puzzle types, I landed on a rotating rings puzzle that worked well with the physical forms I was considering. This type of puzzle had a number of benefits:",
      visual: {
        type: "vimeo",
        // src: 'https://player.vimeo.com/video/266817920?loop=1',//wide
        // width: 640,
        // height: 360,
        src: 'https://player.vimeo.com/video/266867847?loop=1',//tall
        width: 640,
        height: 1138,
        title: "Geometric Puzzle Sphere - Interaction"
      }
    }, {
      heading: "Heading 4",
      text: "I started by looking at puzzles I personally loved. I drew inspiration from one puzzle in particular, called Slitherlink, created by Nikoli who also created Sudoku. I used paper prototypes and recruited a variety of players to test out possible puzzle types. Some players came back to help test multiple iterations, and others were new to the project, only trying a single version. The main things I was looking for in a puzzle was that the rules can be learned without guidance or supervision, and that I could conceive of a way to make the puzzle in physical form. After creating and testing several different puzzle types, I landed on a rotating rings puzzle that worked well with the physical forms I was considering. This type of puzzle had a number of benefits:",
      visual: {
        type: "video",
        sources: [{
          src: 'http://dev.scott-wilson.ca/vid/scott-wilson-puzzle-cube-interaction.mp4',
          type: "video/mp4"
        }],
        width: 720,
        height: 1280
      }
    }]
  },
  {
    name: "W.I.P. Installation",
    tags: ["dev", "physical", "art"],
    description: "A large projection-mapped sculptural installation using Rhino 3D, Grasshopper, and TouchDesigner",
    hash: "w-i-p",
    thumbnail: {
      type: "image",
      src: "w-i-p.jpg",
      width: 320,
      height: 320,
      alt: "A render of the puzzle sphere."
    },
  },
  {
    name: "Escape from the Tower",
    tags: ["dev", "physical", "game design"],
    description: "Electronic Escape Room puzzles in historic Casa Loma.",
    hash: "escape-from-the-tower",
    thumbnail: {
      type: "image",
      src: "escape-from-the-tower.jpg",
      width: 320,
      height: 320,
      alt: "A render of the puzzle sphere."
    }
  },
  {
    name: "HeForShe Kinetic Typography",
    tags: ["motion graphics"],
    description: "Impactful motion graphics video project",
    hash: "he-for-she",
    thumbnail: {
      type: "image",
      src: "he-for-she.png",
      width: 320,
      height: 320,
      alt: "A render of the puzzle sphere."
    }
  },
  {
    name: "Canadian Youth Mental Health",
    tags: ["ux", "dev", "dataviz"],
    description: "Interactive data visualization site",
    hash: "canadian-youth",
    thumbnail: {
      type: "image",
      src: "canadian-youth.jpg",
      width: 320,
      height: 320,
      alt: "A render of the puzzle sphere."
    }
  },
  {
    name: "Toronto Fringe Festival",
    tags: ["ux", "dev", "research"],
    description: "Mobile app design project",
    hash: "toronto-fringe-festival",
    thumbnail: {
      type: "image",
      src: "toronto-fringe-festival.png",
      width: 320,
      height: 320,
      alt: "A render of the puzzle sphere."
    }
  },
  {
    name: "SLATE Redesign",
    tags: ["ux", "ui", "research"],
    description: "Redesigned interface using user-centered design strategies, including user research, constructing personas, and creating context scenarios and key paths.",
    hash: "slate",
    thumbnail: {
      type: "image",
      src: "slate.png",
      width: 320,
      height: 320,
      alt: "A render of the puzzle sphere."
    },
  }
];
