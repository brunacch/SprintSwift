// Interações: menu lateral (mobile), dropdown do perfil, fechar com Esc e clique fora
(function () {
  const app = document.getElementById('app');
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const profileBtn = document.getElementById('profileBtn');
  const profileMenu = document.getElementById('profileMenu');

  // Abre/fecha sidebar no mobile
  sidebarToggle?.addEventListener('click', () => {
    const isOpen = sidebar.getAttribute('data-open') === 'true';
    sidebar.setAttribute('data-open', String(!isOpen));
    sidebarToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  // Dropdown do perfil
  profileBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = profileMenu.getAttribute('data-open') === 'true';
    profileMenu.setAttribute('data-open', String(!open));
    profileBtn.setAttribute('aria-expanded', String(!open));
  });

  // Fechar dropdown ao clicar fora
  document.addEventListener('click', () => {
    profileMenu?.setAttribute('data-open', 'false');
    profileBtn?.setAttribute('aria-expanded', 'false');
  });
  profileMenu?.addEventListener('click', (e) => e.stopPropagation());

  // Fechar tudo com Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // fecha menu lateral no mobile
      sidebar?.setAttribute('data-open', 'false');
      sidebarToggle?.setAttribute('aria-expanded', 'false');
      // fecha dropdown
      profileMenu?.setAttribute('data-open', 'false');
      profileBtn?.setAttribute('aria-expanded', 'false');
    }
  });

  // Exemplo: colapsar sidebar no desktop (opcional)
  // app.classList.toggle('is-collapsed');
})();
