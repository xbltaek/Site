// Получаем все секции
const sections = document.querySelectorAll("section");
let currentSectionIndex = 0; // Начальная секция

// Добавляем обработчик событий на скролл
window.addEventListener("wheel", (event) => {
  // Определяем направление прокрутки
  const direction = event.deltaY > 0 ? 1 : -1;

  // Рассчитываем индекс следующей секции
  let nextSectionIndex = currentSectionIndex + direction;

  // Ограничиваем переход, чтобы не выйти за пределы секций
  if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
    // Прокручиваем к следующей секции
    sections[nextSectionIndex].scrollIntoView({ behavior: "smooth" });
    // Обновляем текущий индекс секции
    currentSectionIndex = nextSectionIndex;
  }
});
