/* ============================================================
   TAG HELPERS
   ============================================================ */
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
/* ============================================================
   RENDER LIST — grouped by year, newest first
   ============================================================ */
function renderArchive() {
  const list = document.getElementById('archive-list');

  // sort newest first by date string
  const sorted = [...projects].sort((a, b) => {
    const yearA = parseInt(a.date) || 0;
    const yearB = parseInt(b.date) || 0;
    return yearB - yearA;
  });

  // group by year
  const groups = {};
  sorted.forEach(p => {
    const year = parseInt(p.date) || p.date;
    if (!groups[year]) groups[year] = [];
    groups[year].push(p);
  });

  Object.keys(groups)
    .sort((a, b) => b - a)
    .forEach(year => {
      const group = document.createElement('div');
      group.className = 'archive-year-group';
      group.innerHTML = `<div class="archive-year-label">${year}</div>`;

      groups[year].forEach(p => {
        const row = document.createElement('div');
        row.className = 'archive-row';
        row.innerHTML = `
          ${p.image
            ? `<img class="archive-thumb" src="${p.image}" alt="${p.title}">`
            : `<div class="archive-thumb-placeholder">No img</div>`
          }
          <div class="archive-info">
            <div class="archive-title">${p.title}</div>
            <div class="archive-desc">${p.desc}</div>
          </div>
          <div class="archive-tags">
            ${p.tags.map(t => `<span class="tag ${tagClass(t)}">${t}</span>`).join('')}
          </div>`;

        row.addEventListener('click', () => openArchiveModal(p.id));
        group.appendChild(row);
      });

      list.appendChild(group);
    });
}

/* ============================================================
   MODAL
   ============================================================ */
function openArchiveModal(id) {
  const p = projects.find(p => p.id === id);
  if (!p) return;

  document.getElementById('archive-modal-hero').src = p.image || '';
  document.getElementById('archive-modal-hero').style.display = p.image ? 'block' : 'none';
  document.getElementById('archive-modal-title').textContent = p.title;
  document.getElementById('archive-modal-meta').textContent = p.date;
  document.getElementById('archive-modal-desc').textContent = p.desc;

  document.getElementById('archive-modal-tags').innerHTML =
    p.tags.map(t => `<span class="tag ${tagClass(t)}">${t}</span>`).join('');

  const detailsEl = document.getElementById('archive-modal-details');
  if (p.details) {
    let html = '';
    if (p.details.intro) html += `<p class="modal-intro">${p.details.intro}</p>`;
    if (p.details.sections) {
      p.details.sections.forEach(s => {
        html += `<div class="modal-section">`;
        if (s.heading) html += `<h3 class="modal-section-heading">${s.heading}</h3>`;
        if (s.text)    html += `<p class="modal-section-text">${s.text}</p>`;
        if (s.image)   html += `<img class="modal-section-img" src="${s.image}" alt="">`;
        if (s.images) {
          html += `<div class="modal-img-grid">`;
          s.images.forEach(src => { html += `<img class="modal-section-img" src="${src}" alt="">`; });
          html += `</div>`;
        }
        if (s.gallery) {
          html += `<div class="modal-gallery">`;
          s.gallery.forEach(src => { html += `<img class="modal-gallery-img" src="${src}" alt="">`; });
          html += `</div>`;
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

  document.getElementById('archive-modal').scrollTop = 0;
  document.getElementById('archive-modal-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
  resetArchiveArrow();
}

function closeArchiveModal() {
  document.getElementById('archive-modal-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('archive-modal-close').addEventListener('click', closeArchiveModal);
document.getElementById('archive-modal-backdrop').addEventListener('click', e => {
  if (e.target === document.getElementById('archive-modal-backdrop')) closeArchiveModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeArchiveModal();
});

// scroll arrow
const archiveModalEl = document.getElementById('archive-modal');
const archiveArrowWrap = document.getElementById('archive-scroll-arrow');
const archiveArrowBtn  = document.getElementById('archive-arrow-btn');

archiveArrowBtn.addEventListener('click', () => {
  archiveModalEl.scrollBy({ top: archiveModalEl.clientHeight * 0.75, behavior: 'smooth' });
});

archiveModalEl.addEventListener('scroll', () => {
  const nearBottom = archiveModalEl.scrollTop + archiveModalEl.clientHeight >= archiveModalEl.scrollHeight - 40;
  archiveArrowWrap.classList.toggle('hidden', nearBottom);
});

function resetArchiveArrow() {
  setTimeout(() => {
    const scrollable = archiveModalEl.scrollHeight > archiveModalEl.clientHeight + 10;
    archiveArrowWrap.classList.toggle('hidden', !scrollable);
  }, 100);
}

renderArchive();
