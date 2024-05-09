
const quizData = [
    {
        question: "1. Что изображено под цифрой '17' на отбойном молотке?",
        image: "img/1.jpg", // Placeholder; replace with actual image URL
        correct: "Ударник",
        options: [
            "Ударник",
            "Сальник",
            "Молоток",
            "Цилиндр"
        ]
    },
    {
        question: "2. Что изображено под цифрой '2' на ручном перфораторе?",
        image: "img/2.jpg", // Placeholder; replace with actual image URL
        correct: "Поршень-ударник",
        options: [
            "Поршень-ударник",
            "Молоточек",
            "Втулка",
            "Поршень"
        ]
    },
    {
        question: "3 Что изображено под цифрой '3' на центробежном насосе?",
        image: "img/3.jpg", // Placeholder; replace with actual image URL
        correct: "Направляющий аппарат",
        options: [
            "Направляющий аппарат",
            "Центробежная система",
            "Всасывающий канал",
            "Система воздуха"
        ]
    },
    {
        question: "4 Что изображено под цифрой '6' на винтовом насосе?",
        image: "img/4.jpg", // Placeholder; replace with actual image URL
        correct: "Сальник.",
        options: [
            "Поршень-ударник",
            "Винтовая система",
            "Сальник.",
            "Экцентрик"
        ]
    },
    {
        question: "5. Что изображено под цифрой '1' на регулируемом направляющем аппарате вентилятора ВМ-8М ?",
        image: "img/5.jpg", // Placeholder; replace with actual image URL
        correct: "Лопатки с поворотными закрылками.",
        options: [
            "Поршень-ударник",
            "Лопатки с поворотными закрылками.",
            "Ударник",
            "Крылья с закрылками"
        ]
    },
    {
        question: "6. Что изображено под цифрой '5' на компрессоре ДЭН-45ШМ «ШАХТЕР»?",
        image: "img/6.jpg", // Placeholder; replace with actual image URL
        correct: "Система масловоздушная",
        options: [
            "Поршень-ударник",
            "Сальник",
            "Система масловоздушная",
            "Система воздушная"
        ]
    },
    {
        question: "7 Что изображено под цифрой '6' на компрессоре УКВШ - 5/72?",
        image: "img/7.jpg", // Placeholder; replace with actual image URL
        correct: "Датчик давления",
        options: [
            "Поршень-ударник",
            "Контроллер",
            "Датчик температуры",
            "Датчик давления"
        ]
    },
    {
        question: "8 Что изображено под цифрой '8' на Шахтном электровозе АМД-8 Д?",
        image: "img/8.jpg", // Placeholder; replace with actual image URL
        correct: "Контроллер",
        options: [
            "Система масловоздушная",
            "Контроллер",
            "Электро-система",
            "Система управления"
        ]
    },
    {
        question: "9. Что изображено под цифрой '8' на шахтной вагонетке ВД 3,3 ?",
        image: "img/9.jpg", // Placeholder; replace with actual image URL
        correct: "Затворы для открывания и закрывания",
        options: [
            "Поршень-ударник",
            "Затворы",
            "Затворы для открывания и закрывания",
            "Держатели"
        ]
    },
    {
        question: "10. Что расположено под цифрой '5' на погрузочной машине 1ПНБ2 ?",
        image: "img/10.jpg", // Placeholder; replace with actual image URL
        correct: "Система управления",
        options: [
            "Система управления",
            "Система давления",
            "Цилиндрическая система",
            "Затворы"
        ]
    },
    {
        question: "11. Что расположено под цифрой '1' на проходческом комбайне ГПКС ?",
        image: "img/11.jpg", // Placeholder; replace with actual image URL
        correct: "Стреловидный исполнительный орган",
        options: [
            "Поршень-ударник",
            "Лопатка",
            "Стреловидный исполнительный орган",
            "Проходимый ударник"
        ]
    },
    {
        question: "12 Что расположено под цифрой '10' на электроузле комбайна SL 300 ?",
        image: "img/12.jpg", // Placeholder; replace with actual image URL
        correct: "Аварийный - Стоп",
        options: [
            "Поршень-ударник",
            "Аварийный - Стоп",
            "Система давления",
            "Cтоп-сигнал"
        ]
    },
    {
        question: "13 Что расположено под цифрой '2' на узле резания комбайна SL 300 ?",
        image: "img/13.jpg", // Placeholder; replace with actual image URL
        correct: "Двигатель резания ",
        options: [
            "Поршень-ударник",
            "Прокручивающий вал",
            "Стреловидный исполнительный орган",
            "Двигатель резания "
        ]
    },
    {
        question: "14 Что расположено под цифрой *3* на гусеничном ходовом механизме?",
        image: "img/14.jpg", // Placeholder; replace with actual image URL
        correct: "Регулируемый гидромотор",
        options: [
            "Регулируемый гидромотор",
            "Мотор",
            "Регулируемый мотор",
            "Двигатель"
        ]
    },
    {
        question: "15 Что расположено под цифрами '7-8' на питателе проходческого комбайна ГПКС ?",
        image: "img/15.jpg", // Placeholder; replace with actual image URL
        correct: "Нагребающие лапы",
        options: [
            "Поршень-ударник",
            "Нагребающие лапы",
            "Гидроусилитель",
            "Ротор"
        ]
    },
    {
        question: "16 Что расположено под цифрой '9' на шахтном самоходном вагоне 10ВС15 ?",
        image: "img/16.jpg", // Placeholder; replace with actual image URL
        correct: "Кабельный барабан",
        options: [
            "Поршень",
            "Cтартор",
            "Кабельный барабан",
            "Пневмо-барабан"
        ]
    },
    {
        question: "17 Что необходимо сделать если возникает большое усилие на рукоятке для запуска и работы отбойного молотка или молоток не останавливается?",
        image: "link_to_image_2.jpg", // Placeholder; replace with actual image URL
        correct: "Вывернуть ниппель, снять рукоятку. Промыть и отжать вентиль. Удалить посторонние предметы.",
        options: [
            "Поршень-ударник",
            "Google",
            "Вывернуть ниппель, снять рукоятку. Промыть и отжать вентиль. Удалить посторонние предметы.",
            "Microsoft"
        ]
    },
    {
        question: "18 Какая допускается максимальная длина резинового рукава от воздуховода до отбойного молотка?",
        image: "link_to_image_2.jpg", // Placeholder; replace with actual image URL
        correct: "Не более 10-12 м.",
        options: [
            "Не более 10-12 м.",
            "Google",
            "The World Wide Web Consortium",
            "Microsoft"
        ]
    }
    // Add more questions as needed
];

let currentQuestionIndex = 0;
const quizArea = document.getElementById("quiz-area");

function displayQuestion() {
    const q = quizData[currentQuestionIndex];
    const img = `<img src="${q.image}" class="img-fluid mb-3">`;
    const optionsHtml = q.options.map((option, index) =>
        `<li class="list-group-item" onclick="selectOption('${option}', this)">${option}</li>`
    ).join('');

    quizArea.innerHTML = `
        <div class="quiz-header">
            <h2>${q.question}</h2>
            ${img}
            <ul class="list-group">
                ${optionsHtml}
            </ul>
        </div>
    `;
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        quizArea.innerHTML = "<h3>End of the Quiz!</h3>";
    }
}

function selectOption(option, element) {
    if (option === quizData[currentQuestionIndex].correct) {
        element.classList.add("list-group-item-success");
    } else {
        element.classList.add("list-group-item-danger");
    }
}

document.addEventListener("DOMContentLoaded", displayQuestion);