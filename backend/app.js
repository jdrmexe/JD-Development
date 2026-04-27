
/* ═══════════════════════════════════════
   DOWNLOAD TRACKING (localStorage)
   ═══════════════════════════════════════ */
   function getDownloads(id) {
    const d = localStorage.getItem('dl_' + id);
    return d ? parseInt(d, 10) : 0;
  }
  
  function incrementDownload(id) {
    const current = getDownloads(id);
    localStorage.setItem('dl_' + id, current + 1);
    return current + 1;
  }
  
  /* ═══════════════════════════════════════
     PAGES
     ═══════════════════════════════════════ */
  let currentProductId = null;
  
  function showPage(page, productId) {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('product-page').style.display = 'none';
    document.getElementById('about-page').style.display = 'none';
    document.getElementById('tos-page').style.display = 'none';
  
    ['nav-home','nav-about','nav-tos'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.remove('active');
    });
  
    if (page === 'home') {
      document.getElementById('home-page').style.display = 'block';
      const navHome = document.getElementById('nav-home');
      if (navHome) navHome.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'product') {
      loadProductDetail(productId);
      document.getElementById('product-page').style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
      document.getElementById('about-page').style.display = 'block';
      const navAbout = document.getElementById('nav-about');
      if (navAbout) navAbout.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'tos') {
      document.getElementById('tos-page').style.display = 'block';
      const navTos = document.getElementById('nav-tos');
      if (navTos) navTos.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  function loadProductDetail(productId) {
    const p = PRODUCTS.find(x => x.id === productId);
    if (!p) return;
    currentProductId = productId;
  
    document.getElementById('detail-tag').textContent = p.tag || 'Script';
    document.getElementById('detail-name').textContent = p.name;
    document.getElementById('detail-price').textContent = p.price === 0 ? 'Free' : `£${p.price.toFixed(2)}`;
    document.getElementById('detail-desc').textContent = p.description;
    document.getElementById('detail-category').textContent = p.category;
    document.getElementById('detail-version').textContent = p.version || '1.0';
    document.getElementById('detail-downloads').textContent = getDownloads(productId).toLocaleString();
  
    const btn = document.getElementById('detail-download-btn');
    btn.href = p.downloadUrl;
  
    // Image
    const wrap = document.getElementById('detail-image-wrap');
    if (p.image) {
      wrap.innerHTML = `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block;"/>`;
    } else {
      wrap.innerHTML = `
        <div class="detail-image-placeholder">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
          <span>Product Preview</span>
        </div>`;
    }
  }
  
  function trackDownload() {
    if (!currentProductId) return;
    const newCount = incrementDownload(currentProductId);
    document.getElementById('detail-downloads').textContent = newCount.toLocaleString();
  }
  
  /* ═══════════════════════════════════════
     GRID RENDERING
     ═══════════════════════════════════════ */
  function renderGrid(products) {
    const grid = document.getElementById('products-grid');
    const count = document.getElementById('results-count');
    count.textContent = `${products.length} result${products.length !== 1 ? 's' : ''}`;
  
    grid.innerHTML = products.map(p => {
      const dlCount = getDownloads(p.id);
      const priceLabel = p.price === 0 ? '<span style="color:#38c97b;font-weight:700">Free</span>' : `£${p.price.toFixed(2)}`;
      const imageBlock = p.image
        ? `<img class="card-image" src="${p.image}" alt="${p.name}" loading="lazy"/>`
        : `<div class="card-placeholder">
             <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
             <span>Preview</span>
           </div>`;
      return `
        <div class="product-card" onclick="showPage('product','${p.id}')">
          ${imageBlock}
          <div class="card-body">
            <div class="card-tag">${p.category}</div>
            <div class="card-name">${p.name}</div>
            <div class="card-meta">
              <div class="card-price">${priceLabel}</div>
              <div class="card-downloads">
                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                ${dlCount.toLocaleString()}
              </div>
            </div>
          </div>
        </div>`;
    }).join('');
  }
  
  function applyFilters() {
    const avail = document.getElementById('filter-avail').value;
    const price = document.getElementById('filter-price').value;
    const sort  = document.getElementById('filter-sort').value;
  
    let list = [...PRODUCTS];
  
    if (avail === 'free')    list = list.filter(p => p.price === 0);
    if (avail === 'premium') list = list.filter(p => p.price > 0);
  
    if (price === 'asc')  list.sort((a,b) => a.price - b.price);
    if (price === 'desc') list.sort((a,b) => b.price - a.price);
  
    if (sort === 'downloads') list.sort((a,b) => getDownloads(b.id) - getDownloads(a.id));
    if (sort === 'name')      list.sort((a,b) => a.name.localeCompare(b.name));
  
    renderGrid(list);
  }
  
  function toggleMobileNav() {
    document.getElementById('mobile-nav').classList.toggle('open');
  }
  
  /* ─── INIT ─── */
  renderGrid(PRODUCTS);
  showPage('home');