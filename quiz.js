const faq = [
  {
    pytanie: "1. Czym jest JavaScript i do czego się go wykorzystuje?",
    odpowiedz: "JavaScript to język programowania służący do tworzenia stron interaktywnych. Wykorzystuje się go do manipulacji DOM, obsługi zdarzeń, komunikacji z serwerem (AJAX), tworzenia gier, aplikacji mobilnych i backendu (Node.js)."
  },
  {
    pytanie: "2. Jaka jest różnica między let, const i var?",
    odpowiedz: "var ma zasięg funkcji (function-scoped) i jest podnoszony (hoisting). let i const mają zasięg blokowy (block-scoped). const nie może być ponownie przypisany po deklaracji, let może."
  },
  {
    pytanie: "3. Jakie znasz typy danych w JavaScript?",
    odpowiedz: "string, number, boolean, null, undefined, object, symbol, bigint. null i undefined to osobne typy – null to celowy brak wartości, undefined to brak przypisania."
  },
  {
    pytanie: "4. Jak sprawdzić typ zmiennej?",
    odpowiedz: "Za pomocą operatora typeof: typeof zmienna – zwraca string z nazwą typu, np. 'string', 'number', 'boolean', 'object', 'undefined'."
  },
  {
    pytanie: "5. Jak utworzyć tablicę w JavaScript?",
    odpowiedz: "let arr = []; lub let arr = new Array(); – pierwszy zapis jest preferowany i najczęściej używany."
  },
  {
    pytanie: "6. Jak dodać element na końcu tablicy?",
    odpowiedz: "arr.push(element) – dodaje element na koniec tablicy i zwraca nową długość."
  },
  {
    pytanie: "7. Jak usunąć ostatni element tablicy?",
    odpowiedz: "arr.pop() – usuwa i zwraca ostatni element tablicy."
  },
  {
    pytanie: "8. Czym różni się tablica od obiektu?",
    odpowiedz: "Tablica ma numeryczne indeksy (0, 1, 2...) i zachowuje kolejność elementów. Obiekt ma klucze-nazwy (własności) i nie gwarantuje kolejności."
  },
  {
    pytanie: "9. Jak odwołać się do właściwości obiektu?",
    odpowiedz: "Dwoma sposobami: obiekt.właściwość lub obiekt[\"właściwość\"] – drugi pozwala na klucze ze spacjami lub dynamiczne."
  },
  {
    pytanie: "10. Jak sprawdzić długość tablicy lub stringa?",
    odpowiedz: "Za pomocą właściwości .length – arr.length lub str.length – zwraca liczbę elementów/znaków."
  },
  {
    pytanie: "11. Do czego służy return w funkcji?",
    odpowiedz: "return zwraca wartość z funkcji do miejsca jej wywołania i natychmiast przerywa jej wykonanie – kod po return nie jest wykonywany."
  },
  {
    pytanie: "12. Jak zdefiniować funkcję?",
    odpowiedz: "Trzy sposoby: function nazwa() {}, const nazwa = function() {}, const nazwa = () => {} (funkcja strzałkowa)."
  },
  {
    pytanie: "13. Czym jest funkcja strzałkowa?",
    odpowiedz: "Skróconą składnią definiowania funkcji: () => {}. Nie posiada własnego this, nie ma arguments. Idealna do callbacków i krótkich funkcji."
  },
  {
    pytanie: "14. Jaka jest różnica między parametrem a argumentem funkcji?",
    odpowiedz: "Parametr to nazwa zmiennej w deklaracji funkcji (function foo(x)), argument to wartość przekazywana przy wywołaniu (foo(10)). x to parametr, 10 to argument."
  }
];

function rysujFAQ() {
  const kontener = document.getElementById('faq');
  faq.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'faq-element';
    div.innerHTML = `
      <div class="faq-pytanie" data-index="${i}">
        <span>${item.pytanie}</span>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <div class="faq-odpowiedz" id="odp-${i}">
        <p>${item.odpowiedz}</p>
      </div>`;
    kontener.appendChild(div);
  });

  document.querySelectorAll('.faq-pytanie').forEach(el => {
    el.addEventListener('click', () => {
      const index = el.dataset.index;
      const odp = document.getElementById('odp-' + index);
      const element = el.closest('.faq-element');
      const otwarte = odp.classList.contains('otwarta');

      document.querySelectorAll('.faq-odpowiedz.otwarta').forEach(o => {
        o.style.height = '0';
        o.classList.remove('otwarta');
      });
      document.querySelectorAll('.faq-pytanie.aktywne').forEach(p => p.classList.remove('aktywne'));
      document.querySelectorAll('.faq-element.aktywne').forEach(e => e.classList.remove('aktywne'));

      if (!otwarte) {
        odp.classList.add('otwarta');
        el.classList.add('aktywne');
        element.classList.add('aktywne');
        odp.style.height = odp.scrollHeight + 'px';
      }
    });
  });
}

function przelaczMotyw() {
  const jasny = document.documentElement.dataset.motyw === 'jasny';
  if (jasny) delete document.documentElement.dataset.motyw;
  else document.documentElement.dataset.motyw = 'jasny';
  localStorage.setItem('motyw', jasny ? 'ciemny' : 'jasny');
}

if (localStorage.getItem('motyw') === 'jasny') {
  document.documentElement.dataset.motyw = 'jasny';
}

rysujFAQ();
