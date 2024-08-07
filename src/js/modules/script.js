// Установить конечную дату и время
function generateCalendar(year, month, day) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    let calendarHtml = '<table>';
    calendarHtml += '<tr>';
    for (const dayOfWeek of daysOfWeek) {
        calendarHtml += `<th>${dayOfWeek}</th>`;
    }
    calendarHtml += '</tr><tr>';

    let emptyCells = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
    for (let i = 0; i < emptyCells; i++) {
        calendarHtml += '<td></td>';
    }

    for (let currentDay = 1; currentDay <= daysInMonth; currentDay++) {
        if ((emptyCells + currentDay) % 7 === 0) {
            calendarHtml += `<td${currentDay === day ? ' class="highlight"' : ''}>${currentDay}</td></tr><tr>`;
        } else {
            calendarHtml += `<td${currentDay === day ? ' class="highlight"' : ''}>${currentDay}</td>`;
        }
    }

    calendarHtml += '</tr></table>';
    document.getElementById('calendar').innerHTML = calendarHtml;
}

function startCountdown(targetDate) {
    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML =
            `
            <div class="timer__items">
            <div class="timer__item">
                <div class="timer__value">
                    ${days}
                </div>
                <div class="timer__label">
                    дней
                </div>
            </div>

            <div class="timer__item">
                /
            </div>

            <div class="timer__item">
                <div class="timer__value">
                    ${hours}
                </div>
                <div class="timer__label">
                    часов
                </div>
            </div>

            <div class="timer__item">
                /
            </div>

            <div class="timer__item">
                <div class="timer__value">
                    ${minutes}
                </div>
                <div class="timer__label">
                    минут
                </div>
            </div>

            <div class="timer__item">
                /
            </div>

            <div class="timer__item">
                <div class="timer__value">
                    ${seconds}
                </div>
                <div class="timer__label">
                    секунд
                </div>
            </div>
            </div>
           `;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('timer').innerHTML = 'Время истекло';
        }
    }

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
}

// Укажите дату здесь
const year = 2024;
const month = 12; // Июль (месяцы в JavaScript считаются с 0, то есть 0 - январь, 1 - февраль и т.д.)
const day = 28; // Укажите день, который нужно выделить

generateCalendar(year, month, day);

const targetDate = new Date(year, month, day).getTime();
startCountdown(targetDate);





const playButton = document.querySelector(".audio__button");
const palyerBody = document.querySelector(".audio");
const player = document.getElementById("player");

playButton.addEventListener("click", function (e) {
    palyerBody.classList.toggle('start-play');
    playerToggle();
});

let playerToggle = () => {
    if (palyerBody.closest('.start-play')) {
        playerSart();
    } else {
        playerStop();
    }
}

let playerStop = () => {
    player.pause();
}

let playerSart = () => {
    player.play();
}

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length) {
    window.addEventListener("scroll", animOmScroll);
    function animOmScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_animation-start');
            }
            else {
                if (!animItem.classList.contains("_animation-one-play")) {
                    animItem.classList.remove('_animation-start');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(animOmScroll, '100')
    //animOmScroll();
}