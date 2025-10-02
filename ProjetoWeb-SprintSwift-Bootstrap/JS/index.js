document.addEventListener('DOMContentLoaded', () => {
  const sidebar      = document.getElementById('sidebar');
  const sidebarToggle= document.getElementById('sidebarToggle');
  const profileBtn   = document.getElementById('profileBtn');
  const profileMenu  = document.getElementById('profileMenu');

  // Sidebar (mobile) - só ativa se existir o botão
  if (sidebar && sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      const open = sidebar.getAttribute('data-open') === 'true';
      sidebar.setAttribute('data-open', String(!open));
      sidebarToggle.setAttribute('aria-expanded', String(!open));
    });
  }

  // Dropdown do perfil
  if (profileBtn && profileMenu) {
    profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = profileMenu.getAttribute('data-open') === 'true';
      profileMenu.setAttribute('data-open', String(!open));
      profileBtn.setAttribute('aria-expanded', String(!open));
    });

    // Clicar fora fecha
    document.addEventListener('click', () => {
      profileMenu.setAttribute('data-open', 'false');
      profileBtn.setAttribute('aria-expanded', 'false');
    });

    // Esc fecha tudo
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        profileMenu.setAttribute('data-open', 'false');
        profileBtn.setAttribute('aria-expanded', 'false');
        if (sidebar && sidebarToggle) {
          sidebar.setAttribute('data-open', 'false');
          sidebarToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  // pega o arquivo atual (ex.: "missoes.html", "index.html")
  const path = window.location.pathname.toLowerCase();
  const current = (path.endsWith('/') || path === '')
    ? 'index.html'
    : path.split('/').pop();

  document.querySelectorAll('.sidebar__nav a.nav__link').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (!href || href === '#') return;

    // compara apenas o arquivo (funciona mesmo se estiver em /pages/…)
    const file = href.split('/').pop();
    const match = (file === current) || (file === 'index.html' && current === 'index.html');

    a.classList.toggle('is-active', match);
    if (match) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
});
