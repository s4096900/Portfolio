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
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.featured && p.tags.includes(activeFilter));

  if (!filtered.length) {
    gallery.innerHTML = '<p style="padding:40px 60px;color:var(--mid);font-size:.9rem;">No projects in this category yet.</p>';
    return;
  }

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

        if (s.image) {
          const sizeClass = s.imageSize === 'full' ? ' modal-section-img--full' : '';
          const sizeStyle = (s.imageSize && s.imageSize !== 'full') ? ` style="max-width:${s.imageSize}"` : '';
          html += `<img class="modal-section-img${sizeClass}"${sizeStyle} src="${s.image}" alt="${s.heading || ''}">`;
        }

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
        if (s.iframeUrl) {
          html += `
            <div class="modal-iframe-container">
              <iframe 
                src="${s.iframeUrl}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>
          `;
        }

        html += `</div>`; // Existing closing div for the section
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

// scroll arrow
const modalEl   = document.getElementById('modal');
const arrowWrap = document.getElementById('modal-scroll-arrow');
const arrowBtn  = document.getElementById('modal-arrow-btn');

arrowBtn.addEventListener('click', () => {
  modalEl.scrollBy({ top: modalEl.clientHeight * 0.75, behavior: 'smooth' });
});

modalEl.addEventListener('scroll', () => {
  const nearBottom = modalEl.scrollTop + modalEl.clientHeight >= modalEl.scrollHeight - 40;
  arrowWrap.classList.toggle('hidden', nearBottom);
});

function resetArrow() {
  setTimeout(() => {
    const scrollable = modalEl.scrollHeight > modalEl.clientHeight + 10;
    arrowWrap.classList.toggle('hidden', !scrollable);
  }, 100);
}