let datum = new Date();
// let nap = datum.getDate();
let nap = 40;

let ajtok = document.getElementsByClassName('wrapper');
let kepek = [
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
    'https://source.unsplash.com/mou0S7ViElQ',
];

let keretKepek = [
    // {
    //     elsoKep: './kep_01.png',
    //     masodikKep: './kep_01.png',
    //     harmadikKep: './kep_01.png',
    //     negyedikKep: './kep_01.png',
    // },
];

for (let i = 1; i < 25; i++) {
    if (i < 10) {
        let obj = {
            elsoKep: `./kep_01/3135789_00${i}.jpg`,
            masodikKep: `./kep_02/3093091_00${i}.jpg`,
            harmadikKep: `./kep_03/3117654_00${i}.jpg`,
            negyedikKep: `./kep_04/3183797_00${i}.jpg`,
        };

        keretKepek.push(obj);
    } else {
        let obj = {
            elsoKep: `./kep_01/3135789_0${i}.jpg`,
            masodikKep: `./kep_02/3093091_0${i}.jpg`,
            harmadikKep: `./kep_03/3117654_0${i}.jpg`,
            negyedikKep: `./kep_04/3183797_0${i}.jpg`,
        };

        keretKepek.push(obj);
    }
}

let nyitoLogika = true;
let zaroLogika = true;

function kitar(element) {
    if (nyitoLogika) {
        let gyerekek = element.children;
        gyerekek[1].style.transform = 'rotateY(-140deg)';
        gyerekek[2].style.transform = 'rotateY(140deg)';
    }
}

function becsuk(element) {
    if (zaroLogika) {
        let gyerekek = element.children;
        gyerekek[1].style.transform = 'rotateY(0deg)';
        gyerekek[2].style.transform = 'rotateY(0deg)';
    }
}

function megnyit(kep, logika) {
    if (logika) {
        let rejtett = document.getElementById('rejtett');
        rejtett.style.display = 'block';
        rejtett.style.backgroundImage = `url(${kep})`;
        nyitoLogika = false;
    }
}

function kepBezar(element) {
    element.style.display = 'none';
    nyitoLogika = true;
}

function ajtoRajzol(kep, keretkep, logika) {
    let szoveg = `<img src=${kep} onclick="megnyit('${kep}', ${logika})" />`;
    szoveg += '<div id="left-door" class="door">';
    szoveg += `<div class="shape" style="background-image: url('${keretkep.elsoKep}')"></div>`;
    szoveg += `<div class="shape" style="background-image: url('${keretkep.masodikKep}')"></div>`;
    szoveg += '<div id="left-knob" class="knob"></div>';
    szoveg += '</div>';
    szoveg += '<div id="right-door" class="door">';
    szoveg += `<div class="shape" style="background-image: url('${keretkep.harmadikKep}')"></div>`;
    szoveg += `<div class="shape" style="background-image: url('${keretkep.negyedikKep}')"></div>`;
    szoveg += '<div id="right-knob" class="knob"></div>';
    szoveg += '</div>';

    return szoveg;
}

for (let i = 0; i < ajtok.length; i++) {
    if (i + 2 < nap) {
        ajtok[i].innerHTML = ajtoRajzol(kepek[i], keretKepek[i], true);
    } else {
        ajtok[i].innerHTML = ajtoRajzol(kepek[i], keretKepek[0], false);
    }
}

for (let i = 0; i < ajtok.length; i++) {
    if (i + 2 < nap) {
        if (nyitoLogika) {
            ajtok[i].addEventListener('mouseenter', () => {
                kitar(ajtok[i]);
                if (!zaroLogika) {
                    nyitoLogika = false;
                }
            });
        }
        ajtok[i].addEventListener('mouseleave', () => becsuk(ajtok[i]));
    }
}
