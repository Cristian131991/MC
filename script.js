
let fechaActual = new Date();

function cambiarSemana(direccion) {
    fechaActual.setDate(fechaActual.getDate() + direccion * 7);
    generarCalendario();
}

function generarCalendario() {
    const calendario = document.getElementById("calendario");
    calendario.innerHTML = "";
    
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    const horaInicio = 8;
    const horaFin = 19;

    const inicioSemana = new Date(fechaActual);
    const dia = inicioSemana.getDay();
    const diferencia = dia === 0 ? -6 : 1 - dia;
    inicioSemana.setDate(fechaActual.getDate() + diferencia);

    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = "<th>Hora</th>" + diasSemana.map(d => `<th>${d}</th>`).join("");
    thead.appendChild(headerRow);
    tabla.appendChild(thead);

    const tbody = document.createElement("tbody");
    for (let h = horaInicio; h <= horaFin; h++) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${h.toString().padStart(2, '0')}:00</td>` + diasSemana.map(() => "<td></td>").join("");
        tbody.appendChild(row);
    }
    tabla.appendChild(tbody);
    calendario.appendChild(tabla);
}

window.onload = generarCalendario;
