import pacientes from "./data/pacientes.js";

let dataHoje = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
}).toString().split("/").reverse().join("-");

const tbody = document.querySelector("tbody");

pacientes.forEach(pf => {

    let dtFormatoBrasil = pf.dataExame.split("-").reverse().join("/");

    // verificar se é telefone ou celular
    let foneFormatado = "";
    switch (pf.telefone.split("").length) {
        case 10:
            foneFormatado = pf.telefone.replace(/^(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")
            break;
        case 11:
            foneFormatado = pf.telefone.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
            break;
    }

    // verificar se a consulta está marcada para hoje
    pf.dataExame == dataHoje ?

        tbody.innerHTML += `
            <tr>
            <td class="bg-secondary text-white">${pf.nome}</td>
            <td class="bg-secondary text-white">${dtFormatoBrasil}</td>
            <td class="bg-secondary text-white">${foneFormatado}</td>
            <td class="bg-secondary text-white">${pf.email}</td>
            </tr>   
    
    `
        :

        tbody.innerHTML += `
            <tr>
            <td class="">${pf.nome}</td>
            <td class="">${dtFormatoBrasil}</td>
            <td class="">${foneFormatado}</td>
            <td class="">${pf.email}</td>
            </tr>   

    `
});
