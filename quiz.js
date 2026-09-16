const pytania = [
  { q: "1. Czym jest JavaScript i do czego się go wykorzystuje?", a: "JavaScript to język programowania służący do tworzenia stron interaktywnych. Wykorzystuje się go do manipulacji DOM, obsługi zdarzeń, komunikacji z serwerem, tworzenia gier i backendu (Node.js)." },
  { q: "2. Jaka jest różnica między let, const i var?", a: "var ma zasięg funkcji, let i const mają zasięg blokowy. const nie może być ponownie przypisany po deklaracji, let może." },
  { q: "3. Jakie znasz typy danych w JavaScript?", a: "string, number, boolean, null, undefined, object, symbol, bigint." },
  { q: "4. Jak sprawdzić typ zmiennej?", a: "Za pomocą operatora typeof, np. typeof zmienna – zwraca string z nazwą typu." },
  { q: "5. Jak utworzyć tablicę w JavaScript?", a: "let arr = []; lub let arr = new Array();" },
  { q: "6. Jak dodać element na końcu tablicy?", a: "arr.push(element) – dodaje element na koniec i zwraca nową długość." },
  { q: "7. Jak usunąć ostatni element tablicy?", a: "arr.pop() – usuwa i zwraca ostatni element." },
  { q: "8. Czym różni się tablica od obiektu?", a: "Tablica ma numeryczne indeksy (0, 1, 2...), obiekt ma klucze-nazwy." },
  { q: "9. Jak odwołać się do właściwości obiektu?", a: "obiekt.właściwość lub obiekt[\"właściwość\"]." },
  { q: "10. Jak sprawdzić długość tablicy lub stringa?", a: "Za pomocą właściwości .length – np. arr.length lub str.length." },
  { q: "11. Do czego służy return w funkcji?", a: "Zwraca wartość z funkcji i przerywa jej wykonanie." },
  { q: "12. Jak zdefiniować funkcję?", a: "function nazwa() {}, const nazwa = function() {}, const nazwa = () => {}." },
  { q: "13. Czym jest funkcja strzałkowa?", a: "Skróconą składnią: () => {}. Nie ma własnego this, nie ma arguments." },
  { q: "14. Jaka jest różnica między parametrem a argumentem?", a: "Parametr to nazwa w deklaracji (function foo(x)), argument to wartość przy wywołaniu (foo(10))." }
];

function rysuj() {
  var lista = document.getElementById('faq');

  for (var i = 0; i < pytania.length; i++) {
    var div = document.createElement('div');
    div.className = 'faq-element';
    div.innerHTML =
      '<div class="faq-pytanie" onclick="toggle(this)">' +
        '<span>' + pytania[i].q + '</span>' +
        '<i class="fa-solid fa-chevron-down"></i>' +
      '</div>' +
      '<div class="faq-odpowiedz">' +
        '<p>' + pytania[i].a + '</p>' +
      '</div>';
    lista.appendChild(div);
  }
}

function toggle(el) {
  var odp = el.nextElementSibling;
  var bylo = odp.classList.contains('otwarta');

  // zamknij wszystkie
  var wszystkie = document.querySelectorAll('.faq-odpowiedz.otwarta');
  for (var i = 0; i < wszystkie.length; i++) {
    wszystkie[i].classList.remove('otwarta');
  }
  var wszystkieQ = document.querySelectorAll('.faq-pytanie.aktywne');
  for (var i = 0; i < wszystkieQ.length; i++) {
    wszystkieQ[i].classList.remove('aktywne');
  }

  if (!bylo) {
    odp.classList.add('otwarta');
    el.classList.add('aktywne');
  }
}

function przelaczMotyw() {
  var jasny = document.documentElement.dataset.motyw === 'jasny';
  if (jasny) delete document.documentElement.dataset.motyw;
  else document.documentElement.dataset.motyw = 'jasny';
  localStorage.setItem('motyw', jasny ? 'ciemny' : 'jasny');
}

if (localStorage.getItem('motyw') === 'jasny') {
  document.documentElement.dataset.motyw = 'jasny';
}

rysuj();
