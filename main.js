'use strict';

//elementi html
const elementUtente = document.getElementById('utente');
const elementKmUtente = document.getElementById('km'); //selezione per id con get element by id
const elementEtaUtente = document.querySelector('.eta-utente'); //selezione per classe css
const elementButtonGenera = document.querySelector('#genera'); //selezione per id con query selector
const elementButtonAnnulla = document.getElementById('annulla');

//campi biglietto virtuale
const elementBigliettoVirtuale = document.getElementById('biglietto-virtuale');
const elementNomeUtente = document.getElementById('nome-utente');
const elementTariffaBiglietto = document.getElementById('tariffa-biglietto');
const elementCarrozzaBiglietto = document.getElementById('carrozza-biglietto');
const elementCpBiglietto = document.getElementById('cp-biglietto"');
const elementPrezzoBiglietto = document.getElementById('prezzo-biglietto');

//dati calcolo biglietto
const costoBigliettoKm = 0.21;
const scontoMinorennePercentuale = 20;
const scontoOverPercentuale = 40;
const etaDefault = 'minorenne';

/* calcolo del biglietto */

elementButtonGenera.addEventListener('click', function () {
  let prezzoBiglietto = costoBigliettoKm * Number(elementKmUtente.value);
  let tariffa = 'Tariffa Maggiorenne';

  if (elementEtaUtente.value === 'minorenne') {
    prezzoBiglietto -= (prezzoBiglietto * scontoMinorennePercentuale) / 100;
    tariffa = 'Tariffa Minorenne';
  } else if (elementEtaUtente.value === 'over') {
    prezzoBiglietto -= (prezzoBiglietto * scontoOverPercentuale) / 100;
    tariffa = 'Tariffa Over';
  }

  //assegno valori dom
  elementNomeUtente.innerHTML = elementUtente.value;
  elementTariffaBiglietto.innerText = tariffa;
  elementPrezzoBiglietto.innerHTML = `${prezzoBiglietto.toFixed(2)} €`;

  //mostro biglietto virtuale
  elementBigliettoVirtuale.classList.remove('hidden');
});

/* reset del biglietto */

elementButtonAnnulla.addEventListener('click', function () {
  elementUtente.value = '';
  elementKmUtente.value = '';
  elementEtaUtente.value = etaDefault;
  console.log('svuoto i campi di input e nascondo il biglietto virtuale');
  elementBigliettoVirtuale.classList.add('hidden');
});
