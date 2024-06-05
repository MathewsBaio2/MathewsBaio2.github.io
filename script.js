import { Country } from "./module/country.js";
import { buscarPais, instanciarCountry, paisesChaves } from "./module/restApi.js";


// Seletores principais

const nomeEn = document.querySelector('h3');
const bandeira = document.querySelector('#bandeira')
const brasao = document.querySelector('#brasao')
const info = document.querySelector('.country-info')
const content = document.querySelector('.showing-content');
const loading = document.querySelector('.loading');
const loadingProgress = document.querySelector('progress');


// hamb menu mobile

const hamb = document.querySelector('.hamb');
const menu = document.querySelector('.menu');

hamb.addEventListener('click', event => {
    menu.classList.toggle('active');
})

// instanciação de objetos

let ger = await instanciarCountry("germany");
let aus = await instanciarCountry("austria");
let bel = await instanciarCountry("belgium");
let bul = await instanciarCountry("bulgaria");
let cze = await instanciarCountry("czechia");
let cyp = await instanciarCountry("cyprus");
let cro = await instanciarCountry("croatia");
let den = await instanciarCountry("denmark");
let slok = await instanciarCountry("slovakia");
let slov = await instanciarCountry("slovenia");
let spa = await instanciarCountry("spain");
let est = await instanciarCountry("estonia");
let fin = await instanciarCountry("finland");
let fra = await instanciarCountry("france");
let gre = await instanciarCountry("greece");
let hun = await instanciarCountry("hungary");
let ire = await instanciarCountry("ireland");
// let ita = await instanciarCountry("italy");
let lat = await instanciarCountry("latvia");
let lit = await instanciarCountry("lithuania");
let lux = await instanciarCountry("luxembourg");
let mal = await instanciarCountry("malta");
let net = await instanciarCountry("netherlands");
let pol = await instanciarCountry("poland");
let por = await instanciarCountry("portugal");
let rom = await instanciarCountry("romania");
let swe = await instanciarCountry("sweden");


const paises = [ger, aus, bel, bul, cze, cyp, cro, den, slok, slov, spa, est, fin, fra, gre, hun, ire, lat, lit, lux, mal, net, pol, por, rom, swe];


// botões frente e trás

const prox = document.querySelector('#prox');
const ant = document.querySelector('#ant');

let paisIndex = 0;

prox.addEventListener('click', event => {

    content.style.display = 'none'
    loading.style.display = 'flex'

    loadingScreen()

    paisIndex++;

    if (paisIndex == paises.length) {
        paisIndex = 0;
    }

    nomeEn.textContent = paises[paisIndex].nomeEn;

    bandeira.setAttribute('src', paises[paisIndex].urlBandeira);

    brasao.setAttribute('src', paises[paisIndex].urlBrasao);
    
    info.innerHTML = `<p><span class="text-destaque"> Official Name:</span> ${paises[paisIndex].nomeOficial}</p>
    <p><span class="text-destaque">Capital:</span> ${paises[paisIndex].capital}</p>
    <p><span class="text-destaque">Population:</span> ${paises[paisIndex].pop}</p>
    <p><span class="text-destaque">Timezone:</span> ${paises[paisIndex].fuzo}</p>
    <p><span class="text-destaque">Area:</span> ${paises[paisIndex].area}</p>`

    setTimeout(() => {
        content.style.display = 'block'
        loading.style.display = 'none'
        loadingProgress.setAttribute('value', 0);  
    }, 1500);


})

ant.addEventListener('click', event => {

    content.style.display = 'none'
    loading.style.display = 'flex'

    loadingScreen()

    paisIndex--;

    if (paisIndex == -1) {
        paisIndex = paises.length - 1;
    }

    nomeEn.textContent = paises[paisIndex].nomeEn;

    bandeira.setAttribute('src', paises[paisIndex].urlBandeira);

    brasao.setAttribute('src', paises[paisIndex].urlBrasao);
    
    info.innerHTML = `<p><span class="text-destaque"> Official Name:</span> ${paises[paisIndex].nomeOficial}</p>
    <p><span class="text-destaque">Capital:</span> ${paises[paisIndex].capital}</p>
    <p><span class="text-destaque">Population:</span> ${paises[paisIndex].pop}</p>
    <p><span class="text-destaque">Timezone:</span> ${paises[paisIndex].fuzo}</p>
    <p><span class="text-destaque">Area:</span> ${paises[paisIndex].area}</p>`

    setTimeout(() => {
        content.style.display = 'block'
        loading.style.display = 'none'
        loadingProgress.setAttribute('value', 0);  
    }, 1500);


})



export {nomeEn, bandeira, brasao, info, paises, paisIndex}


// Botão de busca

const form =  document.forms[0];
const selector = form.elements[0];
const btn = form.elements[1];


form.addEventListener('submit', event => {

    event.preventDefault();

    content.style.display = 'none'
    loading.style.display = 'flex'

    loadingScreen()
    

    buscarPais(selector.value);
    paisIndex = paisesChaves.indexOf(selector.value)


    setTimeout(() => {
        content.style.display = 'block'
        loading.style.display = 'none'
        loadingProgress.setAttribute('value', 0);  
    }, 1500);

})



// Tela de loading



function loadingScreen() {
    
    let load = 0;
    
    setTimeout(() => {

        load += 33
        loadingProgress.setAttribute('value', load);    
    
    }, 500);

    setTimeout(() => {

        load += 33
        loadingProgress.setAttribute('value', load);    
    
    }, 1000);

    setTimeout(() => {

        load += 34
        loadingProgress.setAttribute('value', load);    
    
    }, 1300);
    
}
    








