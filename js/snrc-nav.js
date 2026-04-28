// SNRC shared nav injection
(function () {
  const root   = window.SNRC_ROOT   || '';
  const active = window.SNRC_ACTIVE || '';

  const nav = [
    { key: 'portal',    label: 'Portal',                   href: root + 'index.html' },
    { key: 'entities',  label: 'Entity catalogue',         href: root + 'files/entities/index.html' },
    { key: 'journals',  label: 'Field journals',           href: root + 'files/journals/index.html' },
    { key: 'divisions', label: 'Divisions',                href: root + 'files/divisions/index.html' },
    { key: 'framework', label: 'Classification framework', href: root + 'files/framework/index.html' },
  ];

  const navLinks = nav.map(n =>
    `<a href="${n.href}"${n.key === active ? ' class="active"' : ''}>${n.label}</a>`
  ).join('');

  const headerHTML = `
<header class="site-header">
  <div class="header-top">
    <div>
      <div class="header-eyebrow">International Treaty Organization &mdash; Est. 2007</div>
      <div class="site-title">Sub Nautical Research Coalition</div>
    </div>
    <div class="header-meta">
      <div>SNRC / PUBLIC ARCHIVE</div>
      <div>Access tier: <strong>1 &mdash; Public</strong></div>
      <div style="font-family:var(--mono);font-size:10px;">Session: PUBLIC &nbsp;&middot;&nbsp; 2031-04-20</div>
    </div>
  </div>
  <nav class="header-nav">${navLinks}</nav>
</header>`;

  const footerHTML = `
<footer class="site-footer">
  <span>SNRC PUBLIC ARCHIVE &mdash; Materials distributed in accordance with public dissemination standards. 2007 Maritime Secrecy Accord.</span>
  <span>Node: pub-relay-01</span>
</footer>`;

  document.addEventListener('DOMContentLoaded', function () {
    const wrap = document.querySelector('.site-wrap');
    if (!wrap) return;
    wrap.insertAdjacentHTML('afterbegin', headerHTML);
    wrap.insertAdjacentHTML('beforeend', footerHTML);
  });
})();
