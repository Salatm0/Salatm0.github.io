const SVG = {
  facebook: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>`,
  twitter:  `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>`,
  instagram:`<svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>`,
  linkedin: `<svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>`,
  location: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"/></svg>`,
  layers:   `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"/></svg>`
};

const socialLinks = [
  {href:'https://web.facebook.com/abvtherecordmusic/',svg:SVG.facebook,label:'Facebook'},
  {href:'https://x.com/Abovetherecord_',svg:SVG.twitter,label:'X'},
  {href:'https://www.instagram.com/abovetherecordmusic/',svg:SVG.instagram,label:'Instagram'},
  {href:'https://www.linkedin.com/company/abovetherecordmusic/',svg:SVG.linkedin,label:'LinkedIn'},
];

function flatIcons(cls){
  return socialLinks.map(s=>`<a href="${s.href}" class="${cls}" aria-label="${s.label}" target="_blank">${s.svg}</a>`).join('');
}

/* Arrow span for dropdowns */
const ARR = `<span class="dd-arrow">&#9660;</span>`;

const HEADER_HTML = `
<header class="site-header" id="siteHeader">
  <!-- DESKTOP -->
  <div class="header-desktop">
    <a href="index.html" class="header-logo">
      <img src="https://abovetherecord.com/wp-content/uploads/2024/10/ATR-Logo-Design-01-1024x1024.jpg" alt="ATR"/>
    </a>
    <ul class="desktop-nav" id="desktopNav">
      <li class="active"><a href="index.html">HOME</a></li>
      <li class="has-drop">
        <a href="about.html">ABOUT ${ARR}</a>
        <ul>
          <li><a href="our-social-impact.html">Our Social Impact</a></li>
          <li><a href="our-label.html">Our Label</a></li>
        </ul>
      </li>
      <li><a href="book-an-artist.html">BOOK AN ARTIST</a></li>
      <li><a href="features.html">FEATURES</a></li>
      <li><a href="services.html">SERVICES</a></li>
      <li class="has-drop">
        <a href="our-team.html">OUR TEAM ${ARR}</a>
        <ul>
          <li><a href="about.html">Our Founder</a></li>
          <li><a href="our-social-impact.html">Our Social Impact</a></li>
        </ul>
      </li>
      <li><a href="shop.html">SHOP</a></li>
      <li class="has-drop">
        <a href="#">CAREERS ${ARR}</a>
        <ul>
          <li><a href="careers-event-specialist.html">Event Specialist</a></li>
          <li><a href="careers-admin.html">Admin Assistant</a></li>
          <li><a href="careers-marketing.html">Marketing &amp; Comms Specialist</a></li>
          <li><a href="join-advisory-board.html">Join our Advisory Board</a></li>
          <li><a href="volunteer.html">Volunteer</a></li>
        </ul>
      </li>
    </ul>
    <div class="header-social">${flatIcons('hdr-icon')}</div>
  </div>
  <!-- MOBILE -->
  <div class="header-mobile">
    <button class="mobile-hamburger" id="mobileToggle"><span></span><span></span><span></span></button>
    <a href="index.html"><img class="mobile-hero-img" src="https://abovetherecord.com/wp-content/uploads/2024/10/cropped-BBB9EF67-E5B7-4F6B-81B6-24C1D9DF11AA.jpeg" alt="ATR"/></a>
  </div>
  <nav class="mobile-nav" id="mobileNav">
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li class="sub-item"><a href="our-social-impact.html">Our Social Impact</a></li>
      <li class="sub-item"><a href="our-label.html">Our Label</a></li>
      <li><a href="book-an-artist.html">Book An Artist</a></li>
      <li><a href="features.html">Features</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="our-team.html">Our Team</a></li>
      <li class="sub-item"><a href="about.html">Our Founder</a></li>
      <li class="sub-item"><a href="our-social-impact.html">Our Social Impact</a></li>
      <li><a href="shop.html">Shop</a></li>
      <li><a href="careers-event-specialist.html">Event Specialist</a></li>
      <li><a href="careers-admin.html">Admin Assistant</a></li>
      <li><a href="careers-marketing.html">Marketing &amp; Comms</a></li>
      <li><a href="join-advisory-board.html">Join Advisory Board</a></li>
      <li><a href="volunteer.html">Volunteer</a></li>
    </ul>
  </nav>
</header>`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="footer-wave">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
      <path class="shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"/>
    </svg>
  </div>
  <div class="footer-body">
    <div class="footer-addr">${SVG.location}<p>1001 Yakima Ave, Suite 1, Tacoma, WA 98405</p></div>
    <div class="footer-grow-col">${SVG.layers}<p>Grow with Us</p></div>
    <div class="footer-social-col">${flatIcons('ftr-icon')}</div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 Above The Record. All rights reserved.</p>
    <span class="scroll-top" onclick="window.scrollTo({top:0,behavior:'smooth'})">&#8593; Scroll to Top</span>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (!app) return;
  app.insertAdjacentHTML('afterbegin', HEADER_HTML);
  app.insertAdjacentHTML('beforeend', FOOTER_HTML);

  /* Active nav highlight */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.desktop-nav > li').forEach(li => {
    const a = li.querySelector(':scope > a');
    if (a && a.getAttribute('href') === page) {
      li.classList.add('active');
    } else if (page !== 'index.html') {
      li.classList.remove('active');
    }
  });

  /* Mobile toggle */
  document.getElementById('mobileToggle').addEventListener('click', () => {
    document.getElementById('mobileNav').classList.toggle('open');
  });
});