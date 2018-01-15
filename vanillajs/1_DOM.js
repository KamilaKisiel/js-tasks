/* TODO.1 Stwórz element BUTTON w HTML. Następnie podepnij się pod ten przycisk i:
- po najechaniu na przycisk, kolor strony ma się zrobić żółty
- po zjechaniu, tło ma wrócić do koloru białego
- wykorzystaj eventy mouseenter oraz mouseleave.
 */

const button = document.getElementsByTagName('button')[0];
const body = document.getElementsByTagName('body')[0];
button.addEventListener('mouseenter', function() {
    body.style.backgroundColor = 'yellow';
});

button.addEventListener('mouseleave', function() {
    body.style.backgroundColor = 'white';
});

/* TODO.2 Stwórz element INPUT w HTML. Następnie podepnij się pod ten input i:
 - na focus inputa, input ma dostać zielony border o grubości 2px.
 - na blur inputa (utrata focusa), ma stracić zielony border.
 - nadanie bordera ma następić poprzez dodanie klasy (podpowiedź: element.classList.add(nazwa_klasy))

const input = document.getElementById('input');

input.addEventListener('focus', function() {
   this.classList.add('input-border');
});


input.addEventListener('blur', function() {
    this.classList.remove('input-border');
});

/* TODO.3 Podepnij się pod event 'scroll' obiektu window i na scrolla:
 - co każdy ruch scrolla, powinien wyświetlić się console.log z aktualną wartością scrolla.
 */

window.addEventListener('scroll', function() {
    console.log(window.scrollY);
});
