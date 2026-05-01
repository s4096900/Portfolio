/* ============================================================
   PROJECTS
   ============================================================
   Each project needs these fields:
   ┌─────────────────────────────────────────────────────────┐
   │  id    – unique number                                  │
   │  title – project name shown on the card                 │
   │  tags  – e.g. ['digital'] or ['print', 'branding']      │
   │  image – path to your image, e.g. 'img/mywork.jpg'      │
   │  desc  – one sentence shown when card is expanded       │
   └─────────────────────────────────────────────────────────┘

   ============================================================ */

const projects = [

  // ── PROJECT 1 ────────────────────────────────────────────
  {
    id: 1,
    title: 'Leather Deck Box',
    tags: ['Physical', 'Mixed'],
    image: 'img/pouch_f.JPG',
    desc: 'A handmade leather deck box for trading card games',
    details: {
      intro: "Having previously used small cardboard deck boxes before transitioning to using the Twin Suns Gamegenic one, I felt there was lots of variety and good design with in deck boxes for Star Wars Unlimited decks. However, I didn't find that they worked for me and my use cases.",
      sections: [
        {
          heading: 'The Idea',
          text: 'I wanted to create my own deck box for my deck making it unique and ergonomic for me.',
        },
        {
          heading: 'Process',
          text: "Taking inspiration from Barron Domenici from CabalCoffees, who designed the flatpack deck box system, I started thinking about how I could create my own low profile deck box. I initially started making one out of wood, and while that one was turning out well, I felt that I could make another that was lighter and easier to carry. The flatpack by Domenici is good and very light and is 3D printed, but I didn't want to copy that and am not too fond of using plastic. Upon some reaserch I thought leather was an excellent material for the weight to strength ratio. I started by turning the wooden one into a size template, which I then used to unfold and form a net. This allowed me to cut the leather in a single sheet and would minimize sewing. Once sewed up I wet molded it. This process involves putting a block of wood inside and then submerging it in water for an hour, before then clamping it for a few days to dry and hold the shape. The left photo details how it looked fully dry and molded. The right image was taken after dying the leather a darker grey with some raven tones. What can also be observed is how the deck box holds cards when in use.",
          images: ['img/pouchp.png', 'img/pouchu.png',],
           imageSize: 'natural',
        },
        {
          heading: 'Outcome',
          text: "The finished deck box also has a magnetic clasp and two iron patches from the 'Keep Tassie Wild', I liked to have that little note about where I came from and the extra colour and detail. The deck box works very well, and I am very satisfied with how it has been functioning and looking so far.",
          images: ['img/pouch_f.JPG', 'img/pouchb.JPG',],
        }
      ]
    },
  },

  // ── PROJECT 2 ────────────────────────────────────────────
  {
    id: 2,
    title: 'Multi media experiment',
    tags: ['VFX', 'Mixed'],
    image: 'img/td1.png',
    desc: 'Creating projection mapped visuals using TouchDesigner',
    details: {
      intro: 'This project is a proof of concept I worked on aiming to try and showcase a unqiue idea of projection mapping visuals on to trees to blend the digital and the organic through texture and light ',
      sections: [
        {
          heading: 'The Brief',
          text: 'Create a proof of concept projection mapped project using TouchDesigner',
        },
        {
          heading: 'Process',
          text: ' I started with a cylinder in TouchDesign to map the visuals using a variety of nodes to make a pulsing, glowing and shifting shape. I wanted it to feel semi organic and almost alive. It swirls around as a rainbow that shifts to red. From that, I then tested with a laser projector onto a wall, giving me great results. The shifting and fading looked exactly the way I wanted. There was a slight colour discrepancy between the wall projector and the render output, see the middle and right photos. But I felt that for a proof of conceptm it does make the message clear.',
         images: ['img/tdnode.png','img/tdbb.png', 'img/td1.png',],
          imageSize: 'natural', 
        },
        {
          heading: 'Outcome',
          text: "The next and final stage was to test onto a tree, and while I did manage to get this working, at the time I could only use a small, old LED projector, meaning there was a lot of light leak and extra softness added in. This was disappointing because it suddenly didn't feel like the same project I was aiming for, however it does articulate areas to improve on during further revisions in the future, like using a darker area to project and a higher quality projector.",
          image: 'img/tdrw.png'
        }
      ]
    },
  },

  // ── PROJECT 3 ────────────────────────────────────────────
  
  {
    id: 3,
    title: 'Token Caddy',
    tags: ['CAD', 'Physical', 'Mixed'],
    image: 'img/cadf1.JPG',
    desc: 'Rededsigned metalFABtokens SWU token holder',
    details: {
      intro: 'Having completed my new deck box, I wanted to redesign my token caddy with the same design ethos, trying to make it unique and make it optimal for myself. I feel that many other designers and I design by trying to make things in our lives work and function best for us.',
      sections: [
        {
          heading: 'The idea',
          text: 'To redesign the token holder made by metalFABtokens that designed for their tokens set products used for the Star Wars Unlimited TCG (SWU). The old token holder was made to work with the Gamegenic deck pod, and since I now had my own new deck box, I needed a new token caddy as well.',
          image:['img/cadold.JPG']
        },
        {
          heading: 'Process',
          text: "I decided that I wanted the token holder to roll up into my playmat, as that is something that is brought with me when I play, so I started by measuring it and seeing how I could make a round tube like shape to fit inside its natural rolled up dimesnions. I then thought about how I could have it sit on the table, so I flattened out the bottom. I decided to stick with a 3D printed version of this, as to try and make the complex geometry out of another material would be challenging and not be able to get the quality I needed. It wasn't as simple as transferring over the profiles from the original, as there were some issues so I had to remeasure each metal token and create its hole. Now I didn't take photos of every prototype; the first two I made were small sections of the bigger ones with different layouts and sizes. The problems with them were that the tolerances were too tight to fit the tokens. After redesigning, I got to the top left image, this one has pretty close to right tolerances to fit, however what can be seen on left hand side is that there is some clipping where two compartments overlap. To fix this I ended up removing that last one and expanding the depth of the others to make sure to fit enough tokens. As seen in the other images this worked; the tolerance issue had been fixed. These versions also have pins and holes; these in the final version will be used with magnets to align them together.",
          images: ['img/cadp1.jpg', 'img/cm2.png',],
          imageSize: 'natural'
        },
        {images: ['img/cm1.png', 'img/cm3.jpg',],
          imageSize: 'natural'
        },
      
        {
          heading: 'Outcome',
          text: "To finish it off, I inserted some small 5mm magnets into the holes and created a lid so that it could roll up properly. I still kept the flat bottom design as this allows it to sit flush on the mat or a table. It worked surprisingly well with the only issue being that the magnets aren't quite strong enough to hold the weight at certain angles. This is a minor issue and can be tweaked if I ever decide to update and refine the project further. ",
          images: ['img/cadf2.JPG', 'img/cadf3.JPG',],
        }
      ]
    },
  },

  // ── PROJECT 4 ────────────────────────────────────────────
  {
    id: 4,
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
          text: "Inititially I started with a small pillar based on a simple design from the Ancient City in Minecraft. I then built a larger and larger one, eventually landing on this version. This version actually uses the original small pillar as the floating ones that encircle the main one. While Minecraft isn't known for being a 3D modelling software, a new tool called Axiom has made the rise. This tool allows for a numerous array of tools found in 3D modelling programs, which help with shaping and creating an array. I used such tools as the symmetry point, allowing the pillar face design and the ring to all look uniform. While these tools helped with effciency the majority of the design was made by hand. After working on the spacing and layout I was finally ready to start construction. This started from the base up, making the frame ethen filling out the walls and making the ring.",
          images: ['img/luxd1.png', 'img/luxd2.png',]
        },
        {images: ['img/luxp1.png', 'img/luxp2.png',],
          imageSize: 'full'
        },
        {
          heading: 'Phase 2',
          text: "Once I had finished the main shapes and the finer details on the outer points and the ring, I stop whether it was due to burnout or lack of times I felt that I couldn't do anymore and that the faces didn't need detailing. I had overestimated the sheer amount of reasources need to make and then complete the pillar. The other fact was that while designing and building in Creative was fantastic with both Creative flight and the Axiom tools, I didn't have those in survival which meant it was going to be insanely challenging to finish the intricate details. It then stood like this for a few weeks before I made a decision to push through. The final image is a progress image taken during the face design construction. Here I used a tool called Litematica this allows for schematics to be overlayed within Minecraft to help with placement and spacing of designs.",
          images: ['img/luxp3.png', 'img/luxp4.png', 'img/luxf.png',],
          imageSize: 'full'
        },
        {
          heading: 'Outcome',
          text: "Finishing it off was incredibly fulfilling. I am very glad I decided to finish off all the detailing, even though it was an incredible amount of work; the end project looked stunning.",
        images: ['img/luxf1.png', 'img/luxf2.png', 'img/luxf3.png',],
        }
      ]
    },
  },

  // ── PROJECT 5 ────────────────────────────────────────────
  {
    id: 5,
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



let activeFilter = 'all';

function tagClass(t) {
  const map = {
    'Physical': 'tag-physical',
    'CAD':      'tag-cad',
    'Mixed':    'tag-mixed',
    'Digital':  'tag-digital',
    'VFX':      'tag-vfx',
    'tag2':     'tag-tag2',
  };
  return map[t] || 'tag-physical';
}

function buildCard(p) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.id = p.id;

  const mediaHTML = p.comingSoon
    ? `<div class="card-coming-soon"><span>Coming Soon</span></div>`
    : `<img class="card-img" src="${p.image}" alt="${p.title}">`;

  card.innerHTML = `
    <button class="card-close" aria-label="Close">✕</button>
    ${mediaHTML}
    <div class="card-body">
      <div class="card-title">${p.title}</div>
      <div class="tags">
        ${p.tags.map(t => `<span class="tag ${tagClass(t)}">${t}</span>`).join('')}
      </div>
    </div>
    <div class="card-expand-info">
      <p>${p.desc}</p>
      <button class="read-more-btn" onclick="openModal(${p.id})">Read more</button>
    </div>`;

  card.addEventListener('click', e => {
    if (e.target.classList.contains('card-close')) {
      card.classList.remove('expanded');
      return;
    }
    const wasExpanded = card.classList.contains('expanded');
    card.closest('.scroll-track')
        .querySelectorAll('.card.expanded')
        .forEach(c => c.classList.remove('expanded'));
    if (!wasExpanded) {
      card.classList.add('expanded');
      setTimeout(() => {
        const track = card.closest('.scroll-track');
        const trackRect = track.getBoundingClientRect();
        const cardRect  = card.getBoundingClientRect();
        const offset    = cardRect.left - trackRect.left - 60 + track.scrollLeft;
        track.scrollTo({ left: offset, behavior: 'smooth' });
      }, 50);
    }
  });

  return card;
}

function render() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  const filtered = activeFilter === 'all'
    ? [...projects]
    : projects.filter(p => p.tags.includes(activeFilter));

  if (!filtered.length) {
    gallery.innerHTML = '<p style="padding:40px 60px;color:var(--mid);font-size:.9rem;">No projects in this category yet.</p>';
    return;
  }

  // Always single row
  const rows_data = [filtered];

  rows_data.forEach(rowProjects => {
    if (!rowProjects.length) return;

    const rowEl = document.createElement('div');
    rowEl.className = 'row';
    rowEl.innerHTML = `
      <div class="scroll-track-wrap">
        <div class="scroll-track"></div>
      </div>`;

    const track = rowEl.querySelector('.scroll-track');
    rowProjects.forEach(p => track.appendChild(buildCard(p)));

    // drag-to-scroll
    let isDown = false, startX, scrollLeft;
    track.addEventListener('mousedown', e => {
      isDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    track.addEventListener('mouseleave', () => isDown = false);
    track.addEventListener('mouseup',    () => isDown = false);
    track.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      track.scrollLeft = scrollLeft - (x - startX) * 1.4;
    });

    gallery.appendChild(rowEl);
  });
}

document.addEventListener('click', e => {
  if (!e.target.closest('.card')) {
    document.querySelectorAll('.card.expanded').forEach(c => {
      c.classList.remove('expanded');
    });
  }
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    render();
  });
});

render();

/* ============================================================
   MODAL — opens when "Read more" is clicked
   ============================================================ */
function openModal(id) {
  const p = projects.find(p => p.id === id);
  if (!p) return;

  document.getElementById('modal-hero').src = p.image || '';
  document.getElementById('modal-hero').alt = p.title;
  document.getElementById('modal-hero').style.display = p.image ? 'block' : 'none';
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-desc').textContent = p.desc;

  const tagsEl = document.getElementById('modal-tags');
  tagsEl.innerHTML = p.tags.map(t => `<span class="tag ${tagClass(t)}">${t}</span>`).join('');

  const detailsEl = document.getElementById('modal-details');
  if (p.details) {
    let html = '';
    if (p.details.intro) {
      html += `<p class="modal-intro">${p.details.intro}</p>`;
    }
    if (p.details.sections) {
      p.details.sections.forEach(s => {
        html += `<div class="modal-section">`;
        if (s.heading) html += `<h3 class="modal-section-heading">${s.heading}</h3>`;
        if (s.text)    html += `<p class="modal-section-text">${s.text}</p>`;

        // Render Single Image
        if (s.image) {
          const sizeClass = s.imageSize === 'full' ? ' modal-section-img--full' : '';
          const sizeStyle = (s.imageSize && s.imageSize !== 'full') ? ` style="max-width:${s.imageSize}"` : '';
          html += `<img class="modal-section-img${sizeClass}"${sizeStyle} src="${s.image}" alt="${s.heading || ''}">`;
        }
        
        // Render Image Grid
        if (s.images) {
          if (s.imageSize === 'full') {
            html += `<div class="modal-img-grid modal-img-grid--full">`;
            s.images.forEach(src => {
              html += `<img class="modal-section-img" src="${src}" alt="${s.heading || ''}">`;
            });
            html += `</div>`;
          } else if (s.imageSize === 'natural') {
            const heightStyle = s.imageHeight ? ` style="height:${s.imageHeight};width:auto;max-width:45%"` : '';
            html += `<div class="modal-img-grid modal-img-grid--natural">`;
            s.images.forEach(src => {
              html += `<img class="modal-section-img"${heightStyle} src="${src}" alt="${s.heading || ''}">`;
            });
            html += `</div>`;
          } else {
            const fitClass = s.imageFit === 'contain' ? ' modal-img-grid--contain' : '';
            html += `<div class="modal-img-grid${fitClass}">`;
            s.images.forEach(src => {
              html += `<img class="modal-section-img" src="${src}" alt="${s.heading || ''}">`;
            });
            html += `</div>`;
          }
        }
        html += `</div>`;
      });
    }
    detailsEl.innerHTML = html;
    detailsEl.style.display = 'block';
  } else {
    detailsEl.innerHTML = '';
    detailsEl.style.display = 'none';
  }

  document.getElementById('modal').scrollTop = 0;
  document.getElementById('modal-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
  resetArrow();
}

function closeModal() {
  document.getElementById('modal-backdrop').classList.remove('open');
  document.body.style.overflow = '';

}

document.getElementById('about-btn').addEventListener('click', () => {
  document.getElementById('about-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
});

document.getElementById('about-close').addEventListener('click', () => {
  document.getElementById('about-backdrop').classList.remove('open');
  document.body.style.overflow = '';
});

document.getElementById('about-backdrop').addEventListener('click', e => {
  if (e.target === document.getElementById('about-backdrop')) {
    document.getElementById('about-backdrop').classList.remove('open');
    document.body.style.overflow = '';
  }
});

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-backdrop').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-backdrop')) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// scroll arrow — click scrolls down, hides when near bottom
const modalEl      = document.getElementById('modal');
const arrowWrap    = document.getElementById('modal-scroll-arrow');
const arrowBtn     = document.getElementById('modal-arrow-btn');

arrowBtn.addEventListener('click', () => {
  modalEl.scrollBy({ top: modalEl.clientHeight * 0.75, behavior: 'smooth' });
});

modalEl.addEventListener('scroll', () => {
  const nearBottom = modalEl.scrollTop + modalEl.clientHeight >= modalEl.scrollHeight - 40;
  arrowWrap.classList.toggle('hidden', nearBottom);
});

function resetArrow() {
  // show arrow only if content is actually scrollable
  setTimeout(() => {
    const scrollable = modalEl.scrollHeight > modalEl.clientHeight + 10;
    arrowWrap.classList.toggle('hidden', !scrollable);
  }, 100);
}