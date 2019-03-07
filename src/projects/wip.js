export default {
  name: "W.I.P Installation",
  tags: ["dev", "physical", "art"],
  description: "A large projection-mapped sculptural installation using Rhino 3D, Grasshopper, and TouchDesigner",
  hash: "w-i-p",
  thumbnail: {
    type: "image",
    src: "http://dev.scott-wilson.ca/img/thumb/w-i-p.jpg",
    alt: "A mockup of the design, with an example projection"
  },
  content: [{
    heading: "The Project",
    type: "md",
    text: `Work-In-Progress (yes, that’s the name) is an installation project designed and being built by an interdisciplinary group at Sheridan College. Standing 6’-6” tall with a footprint of 11’-4” by 8’-4”, the installation consists of CNC cut and etched acrylic panels forming a faceted sculpture supported by an aluminum and steel skeleton on a plywood and steel base. Projected onto the facets are images and videos of Sheridan students engaged in the process of creating, and the works they’ve created.
The main objectives for this project were:
- Represent Sheridan students from every faculty
- Make visible the creativity that happens in Sheridan’s studios, classrooms, and labs
- Show off Sheridan’s interdisciplinary community

The project is still ongoing, currently in the fabrication phase.
      `,
    visual: {
      type: "image",
      caption: "A mockup of the design, with an example projection.",
      sources: [{
        src: 'http://dev.scott-wilson.ca/img/wip/WIP mockup.jpg',
        type: "image/jpg"
      }],
      defaultSrc: 'http://dev.scott-wilson.ca/img/wip/WIP mockup.jpg',
      alt: "A mockup of the design, with an example projection."
    }
  }, {
    heading: "My Roles",
    type: "md",
    text: `Over the course of the project I’ve been responsible for a number of things. It was a small core team, so we’ve all had to take on multiple roles and stretch our comfort zones. I’ve gathered together some highlights to give an idea of my contributions and strengths across:
- Design
- Procedural Geometry
- Fabrication
- Projection Mapping
      `,
    visual: {
      type: "image",
      caption: "An example of the geometry generated in Rhino and Grasshopper.",
      sources: [{
        src: 'http://dev.scott-wilson.ca/img/wip/Rhinoceros Geometry.png',
        type: "image/png"
      }],
      defaultSrc: 'http://dev.scott-wilson.ca/img/wip/Rhinoceros Geometry.png',
      alt: "A mockup of the design, with an example projection."
    }
  }, {
    heading: "Design",
    type: "md",
    text: `During the conception and initial design phase of the project, I was responsible for creating 3D mockups of concepts being discussed, researching potential projection mapping solutions, and generally contributing ideas for the project. Some of the key contributions I brought to the project were using Rhino/Grasshopper for procedurally generating geometry, and TouchDesigner for projection mapping.
`,
    visual: {
      type: "image",
      caption: "The base form, with stellated spikes.",
      sources: [{
        src: 'http://dev.scott-wilson.ca/img/wip/2 stellated mesh.png',
        type: "image/png"
      }],
      defaultSrc: 'http://dev.scott-wilson.ca/img/wip/2 stellated mesh.png',
      alt: "A mockup of the design, with an example projection."
    }
  }, {
    type: "md",
    text: `#### Procedural Geometry
I used Rhinoceros 3D and Grasshopper (a plugin for Rhino) for a wide variety of purposes over the course of this project.
##### Data Representation
One of the core concepts of this project was using the form of the sculpture to somehow represent Sheridan’s students. We decided to do this by equating the number of facets of the sculpture to the number of degree, diploma, and certificate granting programs at Sheridan. I used Rhino 3D to take an abstract mesh form, and reduce it to the desired number of faces, in order to create a faceted, 3D representation of the data at the core of the design. We used this a seed to generate the rest of the geometry for the sculpture.
##### Generating Geometry
Using the faceted base form, I created a Grasshopper network to generate the geometry we would use to fabricate the pieces of the sculpture, and that will power the projection mapping. Grasshopper allowed me to use visual programming, creating a network of connected nodes to perform mathematical and geometric transformations, growing spikes out of the existing form. These ends of these spikes act as windows into the sculpture, allowing people to see the inner skeleton. I also generated curved outlines of the panels, incorporating offsets to allow for the skeleton that would support them.
##### Data Extraction
Also with Grasshopper, I created networks that extract data from the 3D model to inform our design process—things like measurements, dimensions, running lengths, angles between facets, and other data. We used this data to revise the base form, and to create budget estimates for materials and fabrication. Because this data was extracted automatically, we were able to revise our estimates immediately when we made any changes to the model.
##### Part Labels and Manifests
In order to organize our production and assembly, I create a system in Grasshopper to label each piece generated, and output spreadsheets of each piece, including dimensions, bend angles, and how it connects to other pieces.
`,
    visuals: [{
      type: "vimeo",
      caption: "The generated geometry changing according to a parameter being changed.",
      src:"https://player.vimeo.com/video/285653692",
      width: 1280,
      height: 720,
      title:"WIP Grasshopper Demonstration",
      // fallBack: "http://dev.scott-wilson.ca/img/ducks.jpg"
    },{
      type: "image",
      caption: "The full Grasshopper network, including geometry generation, data extraction, and vector file export.",
      sources: [{
        src: 'http://dev.scott-wilson.ca/img/wip/GrasshopperArtboard.png',
        type: "image/png"
      }],
      defaultSrc: 'http://dev.scott-wilson.ca/img/wip/GrasshopperArtboard.png',
      alt: "A mockup of the design, with an example projection.",
      style:{backgroundColor: "white"}
    }]
  }, {
    type: "md",
    text: `#### Fabrication
I was responsible for creating vector files for CNC, laser, and waterjet cutting, as well as cut lists for aluminum, and parts manifests for custom bent aluminum brackets.
##### CNC
I generated the CNC vector files in Grasshopper from the 3D model, and then exported them to Illustrator where I and the other team members prepared them by adding the etch pattern and panel hole locations.
##### Laser and Waterjet
The laser and waterjet files I generated with p5.js using data extracted from the model with Grasshopper.
##### Paper Mockups
In order to clearly show the design, we made a number of small-scale paper models of the sculpture. I exported from Rhino/Grasshopper an unfolded version of the 3D model, which I took into Illustrator to turn into a papercraft template. We printed the templates, laser-cut the outlines and score-lines, and then folded and glued them to create accurate, full-colour scale models. We used these models for presentations, and to test projection mapping.
##### 3D Printed Mockups
I 3D printed a few versions of the design for a scale model of the space, in order to show the different sizes we were proposing for the sculpture. I also plan on using a larger 3D print to test the final projection mapping setup. `,
    visual: {
      type: "image",
      caption: "The flow of data from model to fabrication.",
      sources: [{
        src: 'http://dev.scott-wilson.ca/img/wip/DimensionsExtraction.png',//http://dev.scott-wilson.ca/img/wip/GrasshopperArtboard 1@3x.png',
        type: "image/png"
      }],
      defaultSrc: 'http://dev.scott-wilson.ca/img/wip/DimensionsExtraction.png',
      alt: "A diagram showing the flow of data from model to fabrication.",
      style:{backgroundColor: "white"}
    }
  }, {
    type: "md",
    text: `#### Projection Mapping
I’m currently working on creating the projection mapping setup that will be projected onto the sculpture once it’s installed. I’m using TouchDesigner, with the CamSchnappr component, to do the mapping, and to pull media from a tagged database of student work and archival footage. Stay tuned for more updates!
##### Proof of Concept
For pitch presentations and in-progress gallery exhibits, I’ve created a partial implementation that projects onto a prototype fragment of the sculpture.
`,
    visuals: [{
      type: "vimeo",
      caption: "A prototype projection mapping running on a paper model of the WIP installation.",
      src:"https://player.vimeo.com/video/285654120",
      width: 1280,
      height: 720,
      title:"WIP Installation Projection Mapping Demo",
      // fallBack: "http://dev.scott-wilson.ca/img/ducks.jpg"
    },{
      type: "image",
      caption: "Projection mapping running on a prototype fragment.",
      sources: [{
        src: 'http://dev.scott-wilson.ca/img/wip/Prototype Projection Mapping.jpg',//http://dev.scott-wilson.ca/img/wip/GrasshopperArtboard 1@3x.png',
        type: "image/jpg"
      }],
      defaultSrc: 'http://dev.scott-wilson.ca/img/wip/Prototype Projection Mapping.jpg',
      alt: "Projection mapping running on a prototype fragment."
    }]
  },  {
    heading:"The Team",
    type: "md",
    text: `The core team consists of Claire Ironside (Interaction Design professor), Doug Donald (Illustration professor), Duncan Foy (Photography graduate), Alex Geddie (Faculty Technologist), and me. We’ve also relied on the help of David Hillman (Welding), Peter Fleming (Furniture), and Sarah Lindsay (Furniture).
`,
    visual: {
      type: "image",
      caption: "Left to right: Doug Donald, Scott Wilson, Claire Ironside. Photo credit Duncan Foy.",
      sources: [{
        src: 'http://dev.scott-wilson.ca/img/wip/WIP Team.png',//http://dev.scott-wilson.ca/img/wip/GrasshopperArtboard 1@3x.png',
        type: "image/png"
      }],
      defaultSrc: 'http://dev.scott-wilson.ca/img/wip/WIP Team.png',
      alt: "Doug Donald, Scott Wilson, Claire Ironside. Photo credit Duncan Foy."
    }
  }]
}
