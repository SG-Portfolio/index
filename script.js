// Sélection des composants clés
const menuToggleBtn = document.getElementById('menu-toggle-btn');
const subNavbar = document.getElementById('sub-navbar');
const contentPanel = document.getElementById('content-panel');
const panelInnerContent = document.getElementById('panel-inner-content');
const closePanelBtn = document.getElementById('close-panel-btn');

// 1. Gestion du bouton d'allumage MENU (Affiche / Cache la sub-navbar)
menuToggleBtn.addEventListener('click', () => {
  subNavbar.classList.toggle('show');
});

// 2. Clic sur l'une des catégories (Projets, Galerie, Profile)
document.querySelectorAll('.cat-btn').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');

    // Action A : Masquer immédiatement la sub-navbar de sélection
    subNavbar.classList.remove('show');

    // Action B : Cloner et injecter le contenu du template demandé
    const template = document.getElementById(`tpl-${target}`);
    panelInnerContent.innerHTML = '';
    panelInnerContent.appendChild(template.content.cloneNode(true));

    // Action C : Faire monter le panneau de contenu et assombrir le fond
    contentPanel.classList.add('open');
    document.body.classList.add('panel-active');
  });
});

// 3. Fonction pour fermer la fenêtre de contenu et restaurer l'état initial
function closePanel() {
  contentPanel.classList.remove('open');
  document.body.classList.remove('panel-active');
  subNavbar.classList.toggle('show');
}

closePanelBtn.addEventListener('click', closePanel);