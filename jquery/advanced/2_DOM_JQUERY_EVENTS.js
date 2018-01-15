/* TODO:1. Napisz skrypt, który po spowoduje, że po,
kliknięciu elementu o #scroll-to-top, strona zostanie płynnie przewinięta do góry */ /* $elem.animate */

const $scrollToTopBtn = $('#scroll-top-btn');
const $page = $('body, html');

function scrollToTop() {
    const animationTime = 700;

    $page.animate({ scrollTop: 0}, animationTime);
}

$scrollToTopBtn.on('click', scrollToTop);


/* TODO:2. Napisz skrypt, który spowoduje, że linki w menu będą przewijać do odpowiedniej sekcji */
const $navbar = $('.navbar-nav');
const $navLinks = $navbar.find('a');

function scrollToSection() {
    const animationTime = 400;
    const anchor = $(this).attr('href');

    $(this)
        .parent()
        .addClass('active')
        .siblings()
        .removeClass('active');

    $page.animate({ scrollTop: $(anchor).offset().top }, animationTime);
}

$navLinks.on('click', scrollToSection);

/* TODO:3. Rozszerz skrypt z zadania drugiego, tak aby dodawał klasę active do aktywnego elementu listy na kliknięcie go i czyścił pozostałe

/* TODO:4. Napisz skrypt, który będzie nasłuchiwać na scroll window,
jeśli scroll wyniesie więcej niż 80px, to doda klasę navbar-effect do elementu o klasie .navbar */

function handleNavbarEffect() {
    const effectThreschold = 80;

    $(window).scrollTop() > effectThreschold ?
        $navbar.addClass('navbar-effect') :
        $navbar.removeClass('navbar-effect');
}

$(window).on('scroll', handleNavbarEffect);

/* TODO:5. Napisz skrypt, który nasłuchuje na zaznaczenie checkboxa #terms-cbx, jeśli jest zaznaczony, to button #send-btn
to ma być odblokowany */

const $termsCbx = $('#terms-cbx');
const $sendBtn = $('#send-btn');

function toggleSubmitBtnDisability() {
    const isTermsCbxUnchecked = !$termsCbx.prop('checked');
    $sendBtn.prop('disabled', isTermsCbxUnchecked);
}

$termsCbx.on('click', toggleSubmitBtnDisability);


/* TODO:6. Wypełnij element select #cars, poniższą tablicą samochodów:
['BMW', 'Mazda', 'Mercedes', 'Audi'] */
const cars = ['BMW', 'Mazda', 'Mercedes', 'Audi'];
const $carsList = $('#cars');

const getOptions = () => {
    return cars.map(car => $(`<option value="${car}">${car}</option>`));
};

$carsList.append(getOptions());

/* TODO:7. Napisz metodę, która wyświetli w konsoli wybraną wartość z selecta z listą samochodów, po kliknięciu tego selecta */

function showSelectedCar() {
    console.log($(this).val());
};

$carsList.on('change', showSelectedCar);

/* TODO:8. Napisz skrypt, który sprawdzi poprawność powtórznego hasła oraz jego wymagana długość (conajmniej 6 znaków).
jeśli warunki zostaną spełnione, odblokuj guzik #submit-btn */

const $submitBtn = $('#submit-btn');
const $passInput = $('#pass-input');
const $passRepeatInput = $('#repeat-pass-input');

function isPassInvalid() {
    const MIN_REQUIRED_PASS_LENGTH = 6;
    return $passInput.val() !== $passRepeatInput.val() ||
        $passInput.val().length < MIN_REQUIRED_PASS_LENGTH;
}

function validateSubmitBtn() {
    $submitBtn.prop('disabled', isPassInvalid());
}

$passInput.add($passRepeatInput).on('keyup', validateSubmitBtn); // add - łaczy selektory w 1


/* TODO:EXTRAS!. ZADANIE DODATKOWE W MIEDZY CZASIE!
/ Na podstawie tablicy userów:
[
   {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
   {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
   {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
   {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
];

- stworzyć dynamicznie tabelę <table> i wypełnić ją danymi z tablicy users. (mamy!)

A.
- Pierwsza komórka powinna zawierać checkbox, zaznaczenie checkboxa
  ma wyświetlić w konsoli ID danego użytkownika
- Ostatnia komórka powinna zawierać X z klasą remove-icon, który usuwa dany rząd
- rząd powinien zawierać klasę table-row
- komórka powinna zawierać klasę table-cell
- najechanie na rząd ma go podświetlić

B.
- nad tabela być formularz, który pobiera dane usera i puszuje go do tablicy users i od razu pokazuje na widoku.
- formularz ma mieć select, z 5 miastami do wyboru (Twoja decyzja), pozostałe wartości pobrane z inputów textowych
- przycisk do dodania użytkownika ma być odblokowany jeśli wiek age > 18 a firstName ma więcej niż 3 litery
*/

const users = [
    {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
    {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
    {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
    {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
];

const $table = $('<table class="table table-dark">').appendTo('body');

const getRowsWithUsers = () => {
    return users.map(user => {
        return $(`
        <tr>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.city}</td>
        </tr>
        `)
    })
};

$table.append(getRowsWithUsers());
