const toggleIcon = document.getElementById('toggle-icon');
let isDarkMode = false;

toggleIcon.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  isDarkMode = !isDarkMode;
  toggleIcon.textContent = isDarkMode ? '☀️' : '🌙';
});
const translations = {
  en: {
    home: "Home",
    findDoctor: "Find a doctor",
    apps: "Apps",
    testimonials: "Testimonials",
    aboutUs: "About us",
    heroTitle: "Virtual healthcare for you",
    heroText: "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone",
    consult: "Consult today",
    ourServices: "Our services"
  },
  ru: {
    home: "Главная",
    findDoctor: "Найти врача",
    apps: "Приложения",
    testimonials: "Отзывы",
    aboutUs: "О нас",
    heroTitle: "Виртуальная медицинская помощь для вас",
    heroText: "Trafalgar предоставляет прогрессивную и доступную медицинскую помощь через мобильные и онлайн-платформы",
    consult: "Проконсультироваться",
    ourServices: "Наши услуги"
  },
  uz: {
    home: "Bosh sahifa",
    findDoctor: "Shifokor topish",
    apps: "Ilovalar",
    testimonials: "Fikrlar",
    aboutUs: "Biz haqimizda",
    heroTitle: "Siz uchun virtual sog‘liqni saqlash",
    heroText: "Trafalgar sizga zamonaviy va arzon tibbiy xizmatlarni mobil va onlayn tarzda taqdim etadi",
    consult: "Hozir murojaat qiling",
    ourServices: "Xizmatlarimiz"
  }
};

document.getElementById('language-select').addEventListener('change', function () {
  const lang = this.value;
  changeLanguage(lang);
});

function changeLanguage(lang) {
  document.querySelector('.header__list li:nth-child(1) a').textContent = translations[lang].home;
  document.querySelector('.header__list li:nth-child(2) a').textContent = translations[lang].findDoctor;
  document.querySelector('.header__list li:nth-child(3) a').textContent = translations[lang].apps;
  document.querySelector('.header__list li:nth-child(4) a').textContent = translations[lang].testimonials;
  document.querySelector('.header__list li:nth-child(5) a').textContent = translations[lang].aboutUs;
  document.querySelector('.hero__title').textContent = translations[lang].heroTitle;
  document.querySelector('.hero__text').textContent = translations[lang].heroText;
  document.querySelector('.hero__link').textContent = translations[lang].consult;
  document.querySelector('.home__title').textContent = translations[lang].ourServices;
}