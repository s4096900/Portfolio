/* ============================================================
   PROJECTS — shared between main.js and archive.js
   ============================================================
   This file is loaded before main.js and archive.js.
   Edit projects here and they update everywhere automatically.

   Fields:
   ┌─────────────────────────────────────────────────────────┐
   │  id       – unique number                               │
   │  featured – true = shows on main portfolio page         │
   │  title    – project name                                │
   │  date     – e.g. '2025' or 'March 2024'                 │
   │  tags     – array of tag strings                        │
   │  image    – path to thumbnail image                     │
   │  desc     – one sentence shown on the card              │
   │  details  – full case study content (optional)          │
   └─────────────────────────────────────────────────────────┘
   ============================================================ */

const projects = [

  // ── PROJECT 1 ────────────────────────────────────────────
  {
    id: 1,
    featured: true,
    date: '2026',
    title: 'Leather Deck Box',
    tags: ['Physical', 'Mixed'],
    image: 'img/pouch_f.JPG',
    desc: 'A handmade leather deck box for trading card games',
    details: {
      intro: "Having previously used small cardboard deck boxes before transitioning to using the Twin Suns Gamegenic one, I felt there was lots of variety and good design with in deck boxes for Star Wars Unlimited decks. However, I didn't find that they worked for me and my use cases.",
      sections: [
        {
          heading: 'The Idea',
          text: 'To create my own deck box for my deck making it unique and ergonomic for me.',
        },
        {
          heading: 'Process',
          text: "Informed by Barron Domenici's (CabalCoffees) flatpack deck box system, I aimed to develop a low-profile alternative — lighter than wood, without relying on 3D-printed plastic.Leather was selected for its weight-to-strength ratio. A wooden prototype was used to derive a flat net pattern, allowing the final piece to be cut from a single leather sheet and minimise stitching. The leather was wet-moulded over a wooden form — submerged for one hour then clamped for several days — to achieve a rigid, form-fitting shape. The piece was finished with a grey-raven dye.",
          images: ['img/pouchp.png', 'img/pouchu.png',],
           imageSize: 'natural',
        },
        {
          heading: 'Outcome',
          text: "The completed deck box features a magnetic clasp and two embroidered iron patches. The single-sheet construction keeps weight low while maintaining structural rigidity. The piece has been in regular use and performs as intended.",
          images: ['img/pouch_f.JPG', 'img/pouchb.JPG',],
        }
      ]
    },
  },

  // ── PROJECT 2 ────────────────────────────────────────────
  {
    id: 2,
    featured: true,
    date: '2026',
    title: 'Ambient Voices',
    tags: ['VFX', 'Mixed'],
    image: 'img/td1.gif',
    desc: 'Immersive projection mapping experience using TouchDesigner',
    details: {
      intro: 'Ambient Voices was a project I created as part of a duo to explore projection mapping and reactive visuals using TouchDesigner. The project uses a combination of real world trackers and a projected digital enviroment.',
      sections: [
        {
          heading: 'The Brief',
          text: 'Create an immersive enviroment with a hidden force for a user to experince.',
        },
        {
          heading: 'Initial Visuals',
          text: 'The project started as two sepereate projects that were combined morphing the best elements. The sonic based intererence field that is revealed through a handheld deivce, and a 3D game enviormnet when the user walks around the space and orbs react to their presence.',
         images: ['img/prior1.png','img/prior2.png',],
          imageSize: 'natural', 
        },
        {
            heading: 'Process',
            text: 'The blendding of the project moved towards a more cohesive experience, where the user would use the handheld device to find sounds (voices) hidden in the space, and as they found them the environment would respond. Through the orb visuals, there were several itterations the visuals workoing wiht colour and bloom before setting on the cell like visuals that are used in the final peice.',
          images: ['img/ptd1.png','img/ptd2.png',],
            imageSize: 'natural', 
        },
        {
          heading: 'Outcome',
          text: "The final piece was an immersive experience where the user could explore the space and find hidden music stems that would trigger visual responses in the environment and collect them to build a song as the ending. The project was projected on to a large wall with a taped area on the ground to define the space to search within.",
          images: ['img/td2.png','img/td1.gif', 'img/td3.png',],
        },
        {
          heading: 'Video Demonstration',
          iframeUrl: 'https://www.youtube.com/embed/Td9Gn9Qnw04?si=QUzS8bQ4S6zpwFBH',
        }
      ]
    },
  },

  // ── PROJECT 3 ────────────────────────────────────────────
  
  {
    id: 3,
    featured: true,
    date: '2026',
    title: 'Token Caddy',
    tags: ['CAD', 'Physical', 'Mixed'],
    image: 'img/cadf1.JPG',
    desc: 'Rededsigned MetalFABtokens SWU token holder',
    details: {
      intro: 'Having completed my new deck box, I wanted to redesign my token caddy with the same design ethos, trying to make it unique and make it optimal for myself. I feel that many other designers and I design by trying to make things in our lives work and function best for us.',
      sections: [
        {
          heading: 'The idea',
          text: 'To redesign the token holder made by MetalFABtokens that designed for their tokens set products used for the Star Wars Unlimited TCG (SWU). The old token holder was made to work with the Gamegenic deck pod, and since I now had my own new deck box, I needed a new token caddy as well.',
          image:['img/cadold.JPG']
        },
        {
          heading: 'Process',
          text: "The design brief was to create a token holder that rolls inside a standard playmat. Dimensions were taken from the mat's rolled profile to establish a cylindrical form, with a flattened base added to allow stable table placement. 3D printing was selected to achieve the required geometric precision. Each token compartment was measured individually and modelled from scratch rather than adapted from the original metalFABtokens design due to fit discrepancies. Two initial prototypes tested layout and sizing on partial sections — both failed due to tolerances too tight for the tokens. The third iteration achieved near-correct tolerances but revealed compartment overlap on one side. This was resolved by removing the conflicting compartment and increasing depth across the remaining slots. The final prototype incorporated pin-and-hole alignment features, designed to accept magnets in the finished version.",
          images: ['img/cadp1.jpg', 'img/cm2.png',],
          imageSize: 'natural'
        },
        {images: ['img/cm1.png', 'img/cm3.jpg',],
          imageSize: 'natural'
        },
      
        {
          heading: 'Outcome',
          text: "5mm magnets were inserted into the alignment holes and a lid was added to allow the piece to roll cleanly inside the playmat. The flattened base retained for stable placement on both mat and table. The holder functions as intended — the only noted issue is magnet strength at certain angles, which does not affect standard use and remains a candidate for refinement in a future iteration.",
          images: ['img/cadf2.JPG', 'img/cadf3.JPG',],
        }
      ]
    },
  },

  // ── PROJECT 4 ────────────────────────────────────────────
  {
    id: 4,
    featured: true,
    date: '2025',
    title: 'Lux Lutum',
    tags: ['Digital'],
    image: 'img/luxmain.png',
    desc: 'Minecraft megabase',
    details: {
      intro: "This project is the culmativy work of 2+ years, 85 thousand mud blocks and countless other reasorces taking 1 & 1/2 years to design and prototype in a creative world, then followed by a year of collecting the resources and building it in survival on my friend group's MC server.",
      sections: [
        {
          heading: 'The Idea',
          text: "This project was my aim to create a creatively designed megabase on my friend group's Minecraft server.",
        },
        {
          heading: 'Phase 1',
          text: "Development began with a small pillar derived from Minecraft's Ancient City structure, which was progressively scaled up to the final design. The original small pillar was repurposed as the floating elements encircling the main structure. Axiom — a Minecraft modelling tool offering symmetry, array and shaping functions — was used to ensure uniformity across the pillar faces and ring geometry, though the majority of the design was executed by hand. Construction proceeded base-up: framing first, then wall infill, then the ring.",
          images: ['img/luxd1.png', 'img/luxd2.png',]
        },
        {images: ['img/luxp1.png', 'img/luxp2.png',],
          imageSize: 'full'
        },
        {
          heading: 'Phase 2',
          text: "Following completion of the primary forms and outer point detailing, construction stalled — a combination of resource underestimation and the absence of Creative mode tools in the Survival environment made finishing the facade work significantly more challenging. After several weeks the project was resumed. Litematica — a schematic overlay tool — was used during facade construction to assist with placement accuracy and spacing.",
          images: ['img/luxp3.png', 'img/luxp4.png', 'img/luxf.png',],
          imageSize: 'full'
        },
        {
          heading: 'Outcome',
          text: "All facade detailing was completed in Survival. The finished structure met the original design intent and stands as the largest and most technically complex build undertaken on the server to date.",
        images: ['img/luxf1.png', 'img/luxf2.png', 'img/luxf3.png',],
        }
      ]
    },
  },

  // ── PROJECT 5 ────────────────────────────────────────────
  {
    id: 5,
    featured: true,
    date: '2026',
    title: 'VFX Project',
    tags: ['VFX'],
      comingSoon: true,
    image: 'img/your-image.jpg',
    desc: 'A coallation of experiments within NUKE software.',
    details: {
      intro: 'Coming soon',
      sections: [
        {
          heading: 'The Brief',
          text: 'Coming soon',
        },
        {
          heading: 'Process',
          text: 'Coming soon',
          image: 'img/your-process.jpg'
        },
        {
          heading: 'Outcome',
          text: 'Coming soon',
          image: 'img/your-outcome.jpg'
        }
      ]
    },
  },

];
