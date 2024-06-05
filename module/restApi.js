import { Country } from "./country.js";
import { nomeEn, bandeira, brasao, info } from "../script.js";


let paisesChaves = ["germany", "austria", "belgium", "bulgaria", 'czechia', 'cyprus', 'croatia', 'denmark', 'slovakia', 'slovenia', 'spain', 'estonia', 'finland', 'france', 'greece', 'hungary', 'ireland', 'italy', 'latvia', 'lithuania', 'luxembourg', 'malta', 'netherlands', 'poland', 'portugal', 'romania', 'sweden'];


async function buscarPais(nomeChave) {

    const response = await fetch(`https://restcountries.com/v3.1/name/${nomeChave}`);
    const data = await response.json();    


    nomeEn.textContent = data[0].name.common

    bandeira.setAttribute('src', data[0].flags.svg);

    brasao.setAttribute('src', data[0].coatOfArms.svg);

    if (data[0].altSpellings[2] == undefined) {

        info.innerHTML = `<p><span class="text-destaque"> Official Name:</span> ${data[0].name.official}</p>
        <p><span class="text-destaque">Capital:</span> ${data[0].capital}</p>
        <p><span class="text-destaque">Population:</span> ${data[0].population}</p>
        <p><span class="text-destaque">Timezone:</span> ${data[0].timezones[0]}</p>
        <p><span class="text-destaque">Area:</span> ${data[0].area}</p>`
        
    } else {

        info.innerHTML = `<p><span class="text-destaque"> Official Name:</span> ${data[0].altSpellings[2]}</p>
        <p><span class="text-destaque">Capital:</span> ${data[0].capital}</p>
        <p><span class="text-destaque">Population:</span> ${data[0].population}</p>
        <p><span class="text-destaque">Timezone:</span> ${data[0].timezones[0]}</p>
        <p><span class="text-destaque">Area:</span> ${data[0].area}</p>`

    }
    
    

}

async function instanciarCountry(nomeChave) {
    
    const response = await fetch(`https://restcountries.com/v3.1/name/${nomeChave}`);
    const data = await response.json();

    let nomeEn = data[0].name.common;
    let urlBandeira = data[0].flags.svg
    let urlBrasao = data[0].coatOfArms.svg
    let nomeOficial = data[0].altSpellings[2]
    let capital = data[0].capital
    let pop = data[0].population
    let fuzo = data[0].timezones[0]
    let area = data[0].area

    if (nomeOficial == undefined) {
        nomeOficial = data[0].name.official;
    }

    let country = new Country(
        nomeEn,
        urlBandeira,
        urlBrasao,
        nomeOficial,
        capital,
        pop,
        fuzo,
        area
    )
    
    return country 

}


export {instanciarCountry, buscarPais, paisesChaves}