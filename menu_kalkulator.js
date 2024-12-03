const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => {menu.classList.toggle('open');});




document.getElementById("tovabb").addEventListener("click", haromopcio)

let ossz_sutemeny = 0
let ossz_torta = 0
let ossz_unnepi = 0

function haromopcio() {
    let sutemeny = document.getElementById("sutemeny")
    let torta = document.getElementById("torta")
    let unnepi = document.getElementById("unnepi")


    let sutemenyReszletek = document.getElementById("sutemeny_reszletek")
    if (sutemeny.checked) {
        sutemenyReszletek.style.display = "block"
    } else {
        sutemenyReszletek.style.display = "none"; ossz_sutemeny = 0
    }

    let tortaReszletek = document.getElementById("torta_reszletek")
    if (torta.checked) {
        tortaReszletek.style.display = "block"
    } else {
        tortaReszletek.style.display = "none"; ossz_torta = 0
    }

    let elorendelesReszletek = document.getElementById("elorendeles_reszletek")
    if (unnepi.checked) {
        elorendelesReszletek.style.display = "block"
    } else {
        elorendelesReszletek.style.display = "none"; ossz_unnepi = 0
    }


    //ha nincs bejelölve egyik sem, ne jelenjen meg a következő rész
    let osszesites = document.getElementById("osszesites")
    if (unnepi.checked || sutemeny.checked || torta.checked) {
        osszesites.style.display = "block"
    } else {
        osszesites.style.display = "none"
    }
}

// mákos vagy diós

document.getElementById("makos").addEventListener("change", bejglivaltozatok)
document.getElementById("dios").addEventListener("change", bejglivaltozatok)


function bejglivaltozatok() {
    let makos = document.getElementById("makos")
    let dios = document.getElementById("dios")
    let makosdiv = document.getElementById("makosdiv")
    let diosdiv = document.getElementById("diosdiv")

    if (makos.checked) {
        makosdiv.style.display = "block"
    } else {
        makosdiv.style.display = "none"
    }

    if (dios.checked) {
        diosdiv.style.display = "block"
    } else {
        diosdiv.style.display = "none"
    }
}

// bejglik hibái

function bejglihibak() {
    let ossz_bejgli = parseInt(document.getElementById("bejgli").value)
    let makos_db = parseInt(document.getElementById("makos_mennyiseg").value)
    let dios_db = parseInt(document.getElementById("dios_mennyiseg").value)

    if (makos_db + dios_db < ossz_bejgli) {
        alert("Hiba: Nem választott ki elegendő diós és/vagy mákos bejglit!")
        return false}


    if (makos_db + dios_db > ossz_bejgli) {
        alert("Hiba: A mákos és diós bejgli mennyisége együtt nem haladhatja meg az összes bejgli mennyiségét!")
        return false}

    return true
}

// button amin lefut
document.getElementById("bejglihibak").addEventListener("click", ha_bejgli_true) 
function ha_bejgli_true(){
    if (bejglihibak()) {unnepi_reszosszeg() }}
//ha bejglihibak true, akkor lefut unnepi_reszosszeg



function sutemenyek_reszosszeg() {
    const pite_ar = 1200
    const tarte_ar = 1400
    const sajttorta_ar = 1500
    const eclair_ar = 1400

    const kepviselo_ar = 1100
    const sacher_ar = 2000
    const hazi_ar = 1000
    const esterhazy_ar = 2300

    let pite_m = parseFloat(document.getElementById("pite").value)
    let tarte_m = parseFloat(document.getElementById("tarte").value)
    let sajttorta_m = parseFloat(document.getElementById("sajttorta").value)
    let eclair_m = parseFloat(document.getElementById("eclair").value)

    let kepviselo_m = parseFloat(document.getElementById("kepviselo").value)
    let sacher_m = parseFloat(document.getElementById("sacher").value)
    let hazi_m = parseFloat(document.getElementById("hazi").value)
    let esterhazy_m = parseFloat(document.getElementById("esterhazy").value)

    ossz_sutemeny = (pite_m * pite_ar) + (tarte_m * tarte_ar) + (sajttorta_m * sajttorta_ar) + (eclair_m * eclair_ar) + (kepviselo_m * kepviselo_ar) + (sacher_m * sacher_ar) + (hazi_m * hazi_ar) + (esterhazy_m * esterhazy_ar)

    document.getElementById("sutemenytotal").innerText = ossz_sutemeny + " Ft"
}

function torta_reszosszeg() {
    const repat_ar = 1500
    const citromt_ar = 1600
    const csokit_ar = 1900
    const vorost_ar = 1800

    let repat_m = parseFloat(document.getElementById("repat").value)
    let citromt_m = parseFloat(document.getElementById("citromt").value)
    let csokit_m = parseFloat(document.getElementById("csokit").value)
    let vorost_m = parseFloat(document.getElementById("vorost").value)

    ossz_torta = (repat_m * repat_ar) + (citromt_m * citromt_ar) + (csokit_m * csokit_ar) + (vorost_m * vorost_ar)

    document.getElementById("tortatotal").innerText = ossz_torta + " Ft"}

function unnepi_reszosszeg() {

    const mezes_ar = 6000
    const bejgli_ar = 4500
    const zserbo_ar = 7500
    const kuglof_ar = 10000

    let mezes_m = parseFloat(document.getElementById("mezes").value)
    let bejgli_m = parseFloat(document.getElementById("bejgli").value)
    let zserbo_m = parseFloat(document.getElementById("zserbo").value) 
    let kuglof_m = parseFloat(document.getElementById("kuglof").value) 

    ossz_unnepi = (mezes_m * mezes_ar) + (bejgli_m * bejgli_ar) + (zserbo_m * zserbo_ar) + (kuglof_m * kuglof_ar)

    document.getElementById("unnepitotal").innerText = ossz_unnepi + " Ft"}

// szallitasi
let szallitasi_koltseg = 0

document.getElementById("hazhozigen").addEventListener("change", hazhozigen)
function hazhozigen() {
    if (document.getElementById("hazhozigen").checked) {
        szallitasi_koltseg = 2000 }}

document.getElementById("hazhoznem").addEventListener("change", hazhoznem) 
function hazhoznem(){
    if (document.getElementById("hazhoznem").checked) {
        szallitasi_koltseg = 0
    }}



// kedvezmény
let kedvezmeny = 1

document.getElementById("kedvezmeny").addEventListener("change", kedvezmeny_valasztas)
function kedvezmeny_valasztas() {
    const valasztott_kedvezmeny = document.getElementById("kedvezmeny").selectedIndex
    if (valasztott_kedvezmeny == 1){kedvezmeny = 0.9 }
    if (valasztott_kedvezmeny == 2){kedvezmeny = 0.95}}


// csomagolás

let csomagolas = 0

document.getElementById("papir").addEventListener("change", csomagolasar)
document.getElementById("kartya").addEventListener("change", csomagolasar)


function csomagolasar(){
if (document.getElementById("papir").checked && document.getElementById("kartya").checked) {
    csomagolas = 850
} else if (document.getElementById("papir").checked) {
    csomagolas = 500
} else if (document.getElementById("kartya").checked) {
    csomagolas = 350
}}

    
// dátumkezelés
document.getElementById("osszesites_g").addEventListener("click", ha_datum_jo)

function napok_szamolas() {
    let datum_string = document.getElementById('datum').value
    
    // választott egyáltalán dátumot? --> nem teljesül a dátum:
    if (!datum_string) {alert("Kérem válasszon egy dátumot!")
        return false
    }
    
    // konverzió
    let datum_date = new Date(datum_string)

    // mai dátum
    let mai_datum = new Date()
    
    // napok különbsége
    let kulonbseg = datum_date - mai_datum

    // negatív nap
    if (kulonbseg < 0) {
        alert("A kiválasztott dátum már elmúlt!")
        return false
    } else {
        // kerekítés
        let napok = Math.floor(kulonbseg / (1000 * 60 * 60 * 24))
        if (napok < 6) {
            alert("Kérjük legalább egy héttel előre rendeljen!")
            return false
        }
    }
    return true // minden jó
}

// összesítés button feltétele a helyes dátum
function ha_datum_jo() {
    if (napok_szamolas()) {vegso_osszesites()}}


// végső összesítés
function vegso_osszesites() {
    if (ossz_sutemeny + ossz_torta + ossz_unnepi == 0) {
        alert("Nem választott terméket!")
    } else {
        document.getElementById("ossz_termekek").innerText = ((ossz_sutemeny + ossz_torta + ossz_unnepi + szallitasi_koltseg + csomagolas) * kedvezmeny) + " Ft"
    }

    let elkuldes = document.getElementById("elkuldes")
    if ((ossz_sutemeny + ossz_torta + ossz_unnepi > 0) && napok_szamolas()) {
        elkuldes.style.display = "block"
    } else {
        elkuldes.style.display = "none"
    }

}


