let currentDate = new Date();

function renderCalendar(date) {
  const calendario = document.getElementById("calendario");
  calendario.innerHTML = "";

  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - date.getDay());

  for (let i = 0; i < 7; i++) {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    const div = document.createElement("div");
    div.textContent = day.toDateString();
    calendario.appendChild(div);
  }
}

function cambiarSemana(offset) {
  currentDate.setDate(currentDate.getDate() + offset * 7);
  renderCalendar(currentDate);
}

document.addEventListener("DOMContentLoaded", () => {
  renderCalendar(currentDate);
});
