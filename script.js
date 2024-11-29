//Добавляет плавную прокрутку страницы
function scrollToSelection(selectionId) {
    const selection = document.getElementById(selectionId)
    selection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}