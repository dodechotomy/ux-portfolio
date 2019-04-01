export const navTags = ["ux", "dev", "physical"];
export const projects = [{
    name: "Geometric Puzzle Box #1",
    tags: ["dev", "physical", "game design", "art"],
    description: "Mechanical puzzles embedded into a transforming geometrical form.",
    hash: "puzzle-box",
    thumbnail: {
      type: "image",
      src: "http://scott-wilson.ca/img/thumb/puzzle-box.png",
      width: 320,
      height: 320,
      alt: "A render of the puzzle sphere."
    },
    content: [{
      heading: "Heading 0",
      text: `
Over the course of the project I’ve been responsible for a number of things. It was a small core team, so we’ve all had to take on multiple roles and stretch our comfort zones. I’ve gathered together some highlights to give an idea of my contributions and strengths across:
- Design
- Procedural Geometry
- Fabrication
- Projection Mapping
`,
      visual: {
        type: "image",
        caption:"A render of the puzzle sphere.",
        sources: [{
          src: 'http://scott-wilson.ca/img/thumb/puzzle-box.png',
          type: "image/png",
          media: "(min-width: 1024px)"
        },{
          src: 'http://scott-wilson.ca/img/puzzle-box-vertical.png',
          type: "image/png",
          media: "(orientation: portrait)"
        },{
          src: 'http://scott-wilson.ca/img/puzzle-box-square.png',
          type: "image/png",
          media: "(min-width: 200px)"
        }],
          defaultSrc: 'http://scott-wilson.ca/img/puzzle-box-square.png',
        // width: 600,
        // height: 360,
        alt: "A render of the puzzle sphere."
      }
    },{
      heading: "Heading 1",
      type:"md",
      text: `Over the course of the project I’ve been responsible for a number of things. It was a small core team, so we’ve all had to take on multiple roles and stretch our comfort zones. I’ve gathered together some highlights to give an idea of my contributions and strengths across:
- Design
- Procedural Geometry
- Fabrication
- Projection Mapping
`,
      visual: {
        type: "image",
        caption:"A render of the puzzle sphere.",
        sources: [{
          src: 'http://scott-wilson.ca/img/thumb/puzzle-box.png',
          type: "image/png",
          media: "(min-width: 1024px)"
        },{
          src: 'http://scott-wilson.ca/img/puzzle-box-vertical.png',
          type: "image/png",
          media: "(orientation: portrait)"
        },{
          src: 'http://scott-wilson.ca/img/puzzle-box-square.png',
          type: "image/png",
          media: "(min-width: 200px)"
        }],
          defaultSrc: 'http://scott-wilson.ca/img/puzzle-box-square.png',
        // width: 600,
        // height: 360,
        alt: "A render of the puzzle sphere."
      }
    }, {
      heading: "Heading 2",
      text: "I started by looking at puzzles I personally loved. I drew inspiration from one puzzle in particular, called Slitherlink, created by Nikoli who also created Sudoku. I used paper prototypes and recruited a variety of players to test out possible puzzle types. Some players came back to help test multiple iterations, and others were new to the project, only trying a single version. The main things I was looking for in a puzzle was that the rules can be learned without guidance or supervision, and that I could conceive of a way to make the puzzle in physical form. After creating and testing several different puzzle types, I landed on a rotating rings puzzle that worked well with the physical forms I was considering. This type of puzzle had a number of benefits:",
      visual: {
        type: "vimeo",
        caption:"A render of the puzzle sphere.",
        src: 'https://player.vimeo.com/video/266817920?loop=1',//wide
        width: 640,
        height: 360,
        // src: 'https://player.vimeo.com/video/266867847?loop=1',//tall
        // width: 640,
        // height: 1382,
        title: "Geometric Puzzle Sphere - Interaction",
        fallBack: "http://scott-wilson.ca/img/ducks.jpg"
      }
    },{
      heading: "Heading 3",
      text: "I started by looking at puzzles I personally loved. I drew inspiration from one puzzle in particular, called Slitherlink, created by Nikoli who also created Sudoku. I used paper prototypes and recruited a variety of players to test out possible puzzle types. Some players came back to help test multiple iterations, and others were new to the project, only trying a single version. The main things I was looking for in a puzzle was that the rules can be learned without guidance or supervision, and that I could conceive of a way to make the puzzle in physical form. After creating and testing several different puzzle types, I landed on a rotating rings puzzle that worked well with the physical forms I was considering. This type of puzzle had a number of benefits:",
      visual: {
        type: "vimeo",
        caption:"A render of the puzzle sphere.",
        // src: 'https://player.vimeo.com/video/266817920?loop=1',//wide
        // width: 640,
        // height: 360,
        src: 'https://player.vimeo.com/video/266867847?loop=1',//tall
        width: 640,
        height: 1138,
        title: "Geometric Puzzle Sphere - Interaction",
        fallBack: "http://scott-wilson.ca/img/ducks.jpg"
      }
    }, {
      heading: "Heading 4",
      text: "I started by looking at puzzles I personally loved. I drew inspiration from one puzzle in particular, called Slitherlink, created by Nikoli who also created Sudoku. I used paper prototypes and recruited a variety of players to test out possible puzzle types. Some players came back to help test multiple iterations, and others were new to the project, only trying a single version. The main things I was looking for in a puzzle was that the rules can be learned without guidance or supervision, and that I could conceive of a way to make the puzzle in physical form. After creating and testing several different puzzle types, I landed on a rotating rings puzzle that worked well with the physical forms I was considering. This type of puzzle had a number of benefits:",
      visual: {
        type: "video",
        caption:"A render of the puzzle sphere.",
        sources: [{
          src: 'http://scott-wilson.ca/vid/scott-wilson-puzzle-cube-interaction.mp4',
          type: "video/mp4"
        }],
        width: 720,
        height: 1280,
        fallBack: "http://scott-wilson.ca/img/ducks.jpg"
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
      src: "http://scott-wilson.ca/img/thumb/w-i-p.jpg",
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
      src: "http://scott-wilson.ca/img/thumb/escape-from-the-tower.jpg",
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
      src: "http://scott-wilson.ca/img/thumb/he-for-she.png",
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
      src: "http://scott-wilson.ca/img/thumb/canadian-youth.jpg",
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
      src: "http://scott-wilson.ca/img/thumb/toronto-fringe-festival.png",
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
      src: "http://scott-wilson.ca/img/thumb/slate.png",
      width: 320,
      height: 320,
      alt: "A render of the puzzle sphere."
    },
  }
];
