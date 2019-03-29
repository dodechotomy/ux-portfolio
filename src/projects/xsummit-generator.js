const bgColour = {backgroundColor:"rgba(236, 240, 243, 1)"};
export default {
  name: "Autodesk X Summit Generator",
  tags: ["coding", "art", "ux"],
  description: "An interactive p5.js web app that generates unique, cohesive images for a design conference.",
  hash: "x-summit-generator",
  style: bgColour,
  thumbnail: {
    type: "image",
    src: "http://dev.scott-wilson.ca/img/thumb/x-summit-generator.png",
    alt: "A colorful scattering of triangles and cubes from the generator."
  },
  content: [{
      type: "md",
      heading: "The Project",
      text: `
During my internship at Autodesk I was tasked with designing and building an image generator that was used to create images for Autodesk’s internal design conference, X Summit.

X Summit Generator is an interactive web app that generates unique, cohesive images using p5.js. The images were used as slide backgrounds for presentations, as well as in the signage and branding of the event.

It’s live online, at [xsummitgenerator.autodesk.com](http://xsummitgenerator.autodesk.com), if you want to generate some images.
      `,
      visual: {
        type: "image",
        caption: "An example generated image.",
        style: bgColour,
        sources: [{
          src: "http://dev.scott-wilson.ca/img/thumb/x-summit-generator.png",
          type: "image/png"
        }],
        defaultSrc: "http://dev.scott-wilson.ca/img/thumb/x-summit-generator.png",
        alt: "A colorful scattering of triangles and cubes from the generator."
      }
    },
    {
      heading: "My Role",
      type: "md",
      text: `I created the app from scratch in p5.js, coded it, and designed the interface. It went through several iterations, including implementing requested features such as batch generation and animation.

The main objectives for this project were:
- Generate interesting variations on X Summit’s existing branding
- Generate unique and cohesive images
- Make the generator accessible and easy to use for presenters and organizers`,
      visual: {
        type: "image",
        caption: "The generator's interface.",
        sources: [{
          src: 'http://dev.scott-wilson.ca/img/x-summit-generator/xsummit-interface.jpg',
          type: "image/png"
        }],
        defaultSrc: 'http://dev.scott-wilson.ca/img/x-summit-generator/xsummit-interface.jpg',
        alt: "The generator's interface showing the control panel, and an image that was just generated."
      }
    }, {
      heading: "In Use",
      type: "md",
      text: `Images from the generator were integrated into the room signs, wayfinding, slide title pages, and swag of the event. The variety and familiarity of the images granted conference a very distinct and instantly recognizable visual identity. `,
      visual: {
        type: "gallery",
        caption: "Pictures of the images used on signs, slideshows, and other places at the X Summit conference.",
        root: "http://dev.scott-wilson.ca/img/x-summit-generator/gallery-1/",
        sources: [{
            src: "IMG_20170926_123733.jpg",
            alt: "A large sign reading 'X Summit' with a busy, detailed image from the generator as the background."
          },
          {
            src: "IMG_20170926_144501.jpg",
            alt: "A sign reading 'Harbour Ballroom C' with a busy, detailed image from the generator over a purple background."
          },
          {
            src: "IMG_20170926_144531.jpg",
            alt: "A sign reading 'Play Space 1' with a mostly teal and white image from the generator."
          },
          {
            src: "IMG_20170926_172420.jpg",
            alt: "A close up of the X Summit sign showing details of the generated pattern."
          },
          {
            src: "IMG_20170926_172433.jpg",
            alt: "A close up of the X Summit sign showing details of the generated pattern."
          },
          {
            src: "IMG_20170926_180101.jpg",
            alt: "A generated image used as a background image for the title slide of a Pecha Kucha presentation."
          },
          {
            src: "IMG_20170926_200229.jpg",
            alt: "A sign reading 'X Summit' with a large X logo, and a generated image with larger elements and a blue background."
          },
          {
            src: "IMG_20170928_195730.jpg",
            alt: "An animated version of the generator running on two screens during a social event at the X Summit conference."
          }
        ],
      }
    },
    {
      heading: "Alignment with Existing Branding ",
      type: "md",
      text: `This banner was part of the branding for the event and was designed by Greg Fowler. It was the source of the triangle/hexagon/cube motif of the images. The colours of the original branding were replaced with a new colour palette for the event. Componenets and patterns from this image were what I used to form the visual vocabulary coded into the generator.`,
      visual: {
        type: "image",
        style: bgColour,
        caption: "The original branding for the event that the variations are based on. Designed by Greg Fowler.",
        sources: [{
          src: 'http://dev.scott-wilson.ca/img/x-summit-generator/originalbranding.png',
          type: "image/png"
        }],
        defaultSrc: 'http://dev.scott-wilson.ca/img/x-summit-generator/originalbranding.png',
        alt: "Autodesk X Summit 2017 banner."
      }
    },
    {
      type: "md",
      heading: "Variety and Familiarity",
      text: `In order to achieve a wider variety of generated images, I included code which mutated the way the generator draws, changing aspects such as:

* global and relative scale of elements
* subset of colour scheme used
* faux 3d shading
* distribution of elements
* special structures (stacks and florets)
* internal knockouts and cutouts
* rotation of triangles

Almost every aspect of the generator is subject to some randomization, enabling it to generate novel images that still share a visual language.
`,
      visual: {
        type: "gallery",
        root: "http://dev.scott-wilson.ca/img/x-summit-generator/gallery-2/",
        caption: "Pictures of the images used on signs, slideshows, and other places at the X Summit conference.",
        style: bgColour,
        sources: [{
            src: "unnamed1.png",
            alt: "Seven large blue cubes on a pink hexagon in the foreground, very large green and blue cubes in the background."
          },
          {
            src: "unnamed2.png",
            alt: "A colourful variety of medium scale cubes, triangles, and hexagons."
          },
          {
            src: "unnamed3.png",
            alt: "A field of small cubes on a background of white, transitioning to a transparent corner."
          },
          {
            src: "unnamed4.png",
            alt: "A scattering of small colourful triangles on a background of white and grey, transitioning to a transparent corner."
          },
          {
            src: "unnamed5.png",
            alt: "Large triangles and hexagons covering the image, mostly obscuring cubes."
          },
          {
            src: "unnamed6.png",
            alt: "A floret of seven pink cubes on a pale blue cube on a background of colourful triangles over white and grey. Many of the triangles a white hole cut out of the middle."
          },
          {
            src: "unnamed7.png",
            alt: "A chaotic field of hexagons, with the triangles being too large and off-axis, spilling out of their spot in the grid. A large stack of blue trapezoids sits to the right."
          },
          {
            src: "unnamed8.png",
            alt: "An example of more detailed field. Smaller scale cubes and hexagons populate a busy foreground."
          },
          {
            src: "unnamed9.png",
            alt: "An example of an extremely detailed field. Very small scale cubes and hexagons densely populate a busy foreground."
          }
        ],
      }
    }
  ]
}
