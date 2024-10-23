// Получаем все навигационные ссылки
const navLinks = document.querySelectorAll(".header__nav-link")

// Функция для обновления активной навигационной ссылки при скролле
function updateActiveNavLink() {
  const fromTop = window.scrollY + 4

  navLinks.forEach((navLink) => {
    const sectionId = navLink.getAttribute("href").substring(1)
    const section = document.getElementById(sectionId)

    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      navLink.classList.add("active")
    } else {
      navLink.classList.remove("active")
    }
  })
}

// Слушаем событие скролла страницы и обновляем активную навигационную ссылку
window.addEventListener("scroll", updateActiveNavLink)

// Вызываем функцию обновления активной навигационной ссылки при загрузке страницы
window.addEventListener("load", updateActiveNavLink)
