
/* TODO:1. Na kliknięcie elementu listy, dodaj klasę "active", na odkliknięcie usuń. */

const $listItems = $('li');
function highlight() {
    $(this).toggleClass('active');
}

$listItems.on('click', highlight);

/* TODO:2. Wykorzystaj event "mouseenter" i "mouseleave", aby podświetlać element listy po najechaniu myszką
np za pomocą metody css() lub addClass() / removeClass() */

function highlightOnOver() {
    $(this).addClass('highlight');
}

function highlightOnLeave() {
    $(this).removeClass('highlight');
}

// sposób 1 - przypięte osobno
//$listItems.on('mouseenter', highlightOnOver);
//$listItems.on('mouseleave', highlightOnLeave);

$('ul').on({ // sposób 2 - wiele eventów naraz
    mouseenter: highlightOnOver,
    mouseleave: highlightOnLeave
}, 'li'); // delegacja do LI



/* TODO:3. Dodaj w pliku HTML input i paragraf. W paragrafie pokazuj aktualną wartość textową inputa.
Skorzystaj z metody val(), którą posiada input opakowany w obiekt jQuery.
 */

const $paragraph = $('p');
const $input = $('input');

function fillParagraphWithInputValue() {
    $paragraph.text($input.val());
}

$input.on('keyup', fillParagraphWithInputValue);

/* O:4. Wykorzystaj event scroll na obiekcie window i pokaz w konsoli aktualną wartość scrolla */

$(window).on('scroll', function() {
    console.log($(this).scrollTop());
});

 /* TODO:5. Na kliknięcie elementu listy, przypnij eventHandler z parametrem, który zmieni kolor textu (kolor ma być parametrem)!.*/

function changeColor(color) {
    return function(event) {
        $(this).css('color', color);
    }
}

$listItems.on('click', changeColor('brown'));


 /* TOTODDO:6. Powtórz zadanie nr 1 przy użyciu event delegation */

const $list = $('ul');

$list.on('click', 'li', highlight);
/* TODO:7. Odepnij event w jednym z powyższych przykładow */

$('li').last().off('click');