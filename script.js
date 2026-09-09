const ASCII = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣶⣶⣶⣾⣶⣶⣦⣄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣶⣿⠛⠋⠉⠉⠀⠀⠈⠉⠙⣿⣷⡆⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣦⡀⠀
⣠⣄⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⡿⠃⠀⠀⠀⠀⠀⠀⣰⣶⣄⠀⠀⠀⠀⠸⣏⢷⠀⠀
⠈⠻⢿⣿⣿⠿⠿⠿⠿⠿⠿⠟⠁⠀⠀⠀⠀⠀⠀⠀⣿⣿⠇⠀⠀⠀⠀⠀⣗⠼⠀⠀
⠀⠀⠀⠙⠻⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⠅
⠀⠀⠀⠀⠀⠈⠙⢿⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠇
⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢘⣿⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡟⠀
⠀⠀⠀⠀⠀⠀⠀⣸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠇⠀
⠀⠀⠀⠀⠀⠀⢀⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡿⠁⠀
⠀⠀⠀⠀⠀⠀⣼⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠇⠀⠀
⠀⠀⠀⠀⠀⢰⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⠀⠀⠀
⠀⠀⠀⠀⠀⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡇⠀⠀⠀`;

// [typ, klucz, wartosc, opcjonalny link]
const readme = [
  ['naglowek', 'avvizo@github'],
  ['linia'],
  ['para', 'Role', 'Junior Backend Developer'],
  ['para', 'Location', 'Poland'],
  ['para', 'Focus', 'CyberSec, Reverse Engineering'],
  ['para', 'Status', 'Seeking Internship/Junior'],
  ['pauza'],
  ['sekcja', 'Stack'],
  ['linia'],
  ['para', 'Languages', 'C/C++, C#/.NET, Java, JavaScript'],
  ['para', 'Tools', 'Git, SQL, REST API, Docker'],
  ['pauza'],
  ['sekcja', 'Contact'],
  ['linia'],
  ['para', 'Email', 'brtszslomski@gmail.com', 'mailto:brtszslomski@gmail.com'],
  ['para', 'Discord', 'd3f4ult_suvko'],
  ['pauza'],
  ['cytat', '"Looking for environments that value code quality."'],
];

function rysujReadme() {
  let html = `<div class="readme-flex"><pre class="ascii">${ASCII}</pre><div>`;
  for (const [typ, a, b, link] of readme) {
    if (typ === 'naglowek') {
      html += `<div class="wiersz"><span class="wartosc">${a}</span></div>`;
    } else if (typ === 'linia') {
      html += `<div class="komentarz">${'-'.repeat(45)}</div>`;
    } else if (typ === 'sekcja') {
      html += `<div class="wiersz"><span class="wartosc">- ${a}</span></div>`;
    } else if (typ === 'pauza') {
      html += '<div style="height:10px"></div>';
    } else if (typ === 'cytat') {
      html += `<div class="wiersz"><span class="cytat">${a}</span></div>`;
    } else {
      const kropki = '.'.repeat(Math.max(1, 30 - a.length));
      const wartosc = link ? `<a href="${link}">${b}</a>` : `<span class="wartosc">${b}</span>`;
      html += `<div class="wiersz"><span class="komentarz">. </span><span class="klucz">${a}</span><span class="komentarz">: ${kropki} </span>${wartosc}</div>`;
    }
  }
  document.getElementById('readme').innerHTML = html + '</div></div>';
}

function rysujWkresy() {
  const nazwy = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let ziarno = 42;
  const los = () => (ziarno = ziarno * 16807 % 2147483647) / 2147483647;

  let siatka = '', miesiace = '', suma = 0;
  for (let tydzien = 0; tydzien < 52; tydzien++) {
    siatka += '<div class="kolumna">';
    for (let dzien = 0; dzien < 7; dzien++) {
      const r = los();
      let poziom = '', ile = 0;
      if (r > 0.92)      { poziom = 'p4'; ile = 8 + Math.floor(los() * 8); }
      else if (r > 0.82) { poziom = 'p3'; ile = 4 + Math.floor(los() * 5); }
      else if (r > 0.65) { poziom = 'p2'; ile = 2 + Math.floor(los() * 3); }
      else if (r > 0.45) { poziom = 'p1'; ile = 1; }
      suma += ile;
      const data = new Date(2026, 0, 1 + tydzien * 7 + dzien);
      siatka += `<div class="dzien ${poziom}" title="${ile} contributions on ${nazwy[data.getMonth()]} ${data.getDate()}, 2026"></div>`;
    }
    siatka += '</div>';
    if (tydzien % 4 === 0) {
      miesiace += `<span>${tydzien / 4 < 12 ? nazwy[tydzien / 4] : ''}</span>`;
    }
  }
  document.getElementById('siatka').innerHTML = siatka;
  document.getElementById('miesiace').innerHTML = miesiace;
  document.getElementById('liczbaWkresow').textContent = suma;
}

function przewinDoReadme() {
  document.getElementById('readme').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function kopiujEmail(przycisk) {
  navigator.clipboard.writeText('brtszslomski@gmail.com').then(() => {
    const stare = przycisk.innerHTML;
    przycisk.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
    setTimeout(() => przycisk.innerHTML = stare, 1500);
  });
}

function przelaczMotyw() {
  const jasny = document.documentElement.dataset.motyw === 'jasny';
  if (jasny) delete document.documentElement.dataset.motyw;
  else document.documentElement.dataset.motyw = 'jasny';
  localStorage.setItem('motyw', jasny ? 'ciemny' : 'jasny');
}

function grawitacja() {
  const spada = document.body.classList.toggle('grawitacja');
  document.querySelectorAll('.bok > *, main > *').forEach((el, i) => {
    if (spada) {
      const miejsce = el.getBoundingClientRect();
      const odleglosc = Math.max(0, innerHeight - miejsce.bottom) + 20 + Math.random() * 40;
      el.style.zIndex = 100 + i;
      el.style.transition = `transform ${Math.max(0.5, odleglosc / 1400)}s cubic-bezier(0.55, 0, 1, 0.45)`;
      el.style.transform = `translate(${Math.random() * 60 - 30}px, ${odleglosc}px) rotate(${Math.random() * 26 - 13}deg)`;
    } else {
      el.style.transition = 'transform 0.7s ease';
      el.style.transform = '';
      el.style.zIndex = '';
    }
  });
}

document.querySelectorAll('.tag').forEach(tag =>
  tag.addEventListener('click', () => tag.classList.toggle('wybrany'))
);

if (localStorage.getItem('motyw') === 'jasny') {
  document.documentElement.dataset.motyw = 'jasny';
}
rysujReadme();
rysujWkresy();
