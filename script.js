var ASCII = `⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣶⣶⣶⣾⣶⣶⣦⣄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀⠀⠀⢠⣶⣿⠛⠋⠉⠉⠀⠀⠈⠉⠙⣿⣷⡆⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀  ⠀⠀⠀⠀⢀⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣦⡀⠀
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

var readme = [
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
  ['cytat', '"backend > frontend"'],
];

function rysujReadme() {
  var html = '<div class="readme-flex"><pre class="ascii">' + ASCII + '</pre><div>';

  for (var i = 0; i < readme.length; i++) {
    var typ = readme[i][0];
    var a = readme[i][1];
    var b = readme[i][2];
    var link = readme[i][3];

    if (typ === 'naglowek') {
      html += '<div class="wiersz"><span class="wartosc">' + a + '</span></div>';
    } else if (typ === 'linia') {
      html += '<div class="komentarz">' + '-'.repeat(45) + '</div>';
    } else if (typ === 'sekcja') {
      html += '<div class="wiersz"><span class="wartosc">- ' + a + '</span></div>';
    } else if (typ === 'pauza') {
      html += '<div style="height:10px"></div>';
    } else if (typ === 'cytat') {
      html += '<div class="wiersz"><span class="cytat">' + a + '</span></div>';
    } else {
      var kropki = '.'.repeat(Math.max(1, 30 - a.length));
      var wartosc = link ? '<a href="' + link + '">' + b + '</a>' : '<span class="wartosc">' + b + '</span>';
      html += '<div class="wiersz"><span class="komentarz">. </span><span class="klucz">' + a + '</span><span class="komentarz">: ' + kropki + ' </span>' + wartosc + '</div>';
    }
  }

  document.getElementById('readme').innerHTML = html + '</div></div>';
}

function rysujWkresy() {
  var nazwy = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var siatka = '';
  var miesiace = '';
  var suma = 0;

  for (var tydzien = 0; tydzien < 52; tydzien++) {
    siatka += '<div class="kolumna">';
    for (var dzien = 0; dzien < 7; dzien++) {
      var r = Math.random();
      var poziom = '';
      var ile = 0;

      if (r > 0.92) { poziom = 'p4'; ile = 8 + Math.floor(Math.random() * 8); }
      else if (r > 0.82) { poziom = 'p3'; ile = 4 + Math.floor(Math.random() * 5); }
      else if (r > 0.65) { poziom = 'p2'; ile = 2 + Math.floor(Math.random() * 3); }
      else if (r > 0.45) { poziom = 'p1'; ile = 1; }

      suma += ile;
      var data = new Date(2026, 0, 1 + tydzien * 7 + dzien);
      siatka += '<div class="dzien ' + poziom + '" title="' + ile + ' contributions on ' + nazwy[data.getMonth()] + ' ' + data.getDate() + ', 2026"></div>';
    }
    siatka += '</div>';
    if (tydzien % 4 === 0) {
      var nr = Math.floor(tydzien / 4);
      miesiace += '<span>' + (nr < 12 ? nazwy[nr] : '') + '</span>';
    }
  }

  document.getElementById('siatka').innerHTML = siatka;
  document.getElementById('miesiace').innerHTML = miesiace;
  document.getElementById('liczbaWkresow').textContent = suma;
}

function przewinDoReadme() {
  document.getElementById('scroll').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function kopiujEmail(przycisk) {
  navigator.clipboard.writeText('brtszslomski@gmail.com').then(function() {
    var stare = przycisk.innerHTML;
    przycisk.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
    setTimeout(function() { przycisk.innerHTML = stare; }, 1500);
  });
}

function przelaczMotyw() {
  var jasny = document.documentElement.dataset.motyw === 'jasny';
  if (jasny) delete document.documentElement.dataset.motyw;
  else document.documentElement.dataset.motyw = 'jasny';
  localStorage.setItem('motyw', jasny ? 'ciemny' : 'jasny');
}

function grawitacja() {
  var spada = document.body.classList.toggle('grawitacja');
  var elementy = document.querySelectorAll('.bok > *, main > *');

  for (var i = 0; i < elementy.length; i++) {
    var el = elementy[i];
    if (spada) {
      var miejsce = el.getBoundingClientRect();
      var odleglosc = Math.max(0, innerHeight - miejsce.bottom) + 20 + Math.random() * 40;
      el.style.zIndex = 100 + i;
      el.style.transition = 'transform ' + Math.max(0.5, odleglosc / 1400) + 's ease';
      el.style.transform = 'translate(' + (Math.random() * 60 - 30) + 'px, ' + odleglosc + 'px) rotate(' + (Math.random() * 26 - 13) + 'deg)';
    } else {
      el.style.transition = 'transform 0.7s ease';
      el.style.transform = '';
      el.style.zIndex = '';
    }
  }
}

var tagi = document.querySelectorAll('.tag');
for (var i = 0; i < tagi.length; i++) {
  tagi[i].addEventListener('click', function() { this.classList.toggle('wybrany'); });
}

if (localStorage.getItem('motyw') === 'jasny') {
  document.documentElement.dataset.motyw = 'jasny';
}

rysujReadme();
rysujWkresy();
