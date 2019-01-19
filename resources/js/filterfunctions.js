var tierssclicked = false;
var tiersclicked = false;
var tieraclicked = false;
var tierbclicked = false;
var tiercclicked = false;
var tierdclicked = false;

var skillboardclearclicked = false;
var skillsizeupclicked = false;
var skillpuctypechangeclicked = false;
var skilluniqueclicked = false;

var characterhitagiclicked = false;
var characterkarenclicked = false;
var characterkoyomiclicked = false;
var charactermayoiclicked = false;
var charactermemeclicked = false;
var characternadekoclicked = false;
var characterougiclicked = false;
var charactershinobuclicked = false;
var charactersodachiclicked = false;
var charactersurugaclicked = false;
var charactertsubasaclicked = false;
var characteryotsugiclicked = false;
var characterdeishuuclicked = false;
var characteryozuruclicked = false;
var characterblackhanekawaclicked = false;
var characterbokuclicked = false;
var charactertomoclicked = false;
var characterjunclicked = false;

// Reset Filter

function resetfilter() {
    $('#pucpuc').DataTable().columns().search("").draw();
}


// Filter tier

function filtertier(filter) {
    $('#pucpuc').DataTable().column(4).search(filter).draw();
}

function activatetier(filter) {
    $("#tier" + filter).css('background', '#4b4642');
}

function deactivatetier() {
    $("#tierss").css('background', '');
    $("#tiers").css('background', '');
    $("#tiera").css('background', '');
    $("#tierb").css('background', '');
    $("#tierc").css('background', '');
    $("#tierd").css('background', '');
}

function dotierfilter(clicked, filter) {
    deactivatetier();
    if (!clicked) {
        filtertier(filter);
        activatetier(filter);
        clicked = true;
    } else {
        filtertier("");
        clicked = false;
    }

    tierssclicked = false;
    tiersclicked = false;
    tieraclicked = false;
    tierbclicked = false;
    tiercclicked = false;
    tierdclicked = false;

    switch (filter) {
        case "ss": tierssclicked = clicked; break;
        case "s": tiersclicked = clicked; break;
        case "a": tieraclicked = clicked; break;
        case "b": tierbclicked = clicked; break;
        case "c": tiercclicked = clicked; break;
        case "d": tierdclicked = clicked; break;
    }
}


// Filter Skill

function filterskill(filter) {
    $('#pucpuc').DataTable().column(3).search(filter).draw();
}

function activateskill(filter) {
    $("#skill" + filter).css('background', '#4b4642');
}

function deactivateskill() {
    $("#skillboardclear").css('background', '');
    $("#skillsizeup").css('background', '');
    $("#skillpuctypechange").css('background', '');
    $("#skillunique").css('background', '');
}

function doskillfilter(clicked, filter) {
    var filterobject = filter.replace(/\s+/g, '').toLowerCase();
    
    deactivateskill();
    if (!clicked) {
        filterskill(filter);
        activateskill(filterobject);
        clicked = true;
    } else {
        filterskill("");
        clicked = false;
    }

    skillboardclearclicked = false;
    skillsizeupclicked = false;
    skillpuctypechangeclicked = false;
    skilluniqueclicked = false;

    switch (filterobject) {
        case "boardclear": skillboardclearclicked = clicked; break;
        case "sizeup": skillsizeupclicked = clicked; break;
        case "puctypechange": skillpuctypechangeclicked = clicked; break;
        case "unique": skilluniqueclicked = clicked; break;
    }
}


// Filter Character

function filtercharacter(filter) {
    $('#pucpuc').DataTable().column(1).search(filter).draw();
}

function activatecharacter(filter) {
    $("#character" + filter).css('background', '#4b4642');
}

function deactivatecharacter() {
    $("#characterhitagi").css('background', '');
    $("#characterkaren").css('background', '');
    $("#characterkoyomi").css('background', '');
    $("#charactermayoi").css('background', '');
    $("#charactermeme").css('background', '');
    $("#characternadeko").css('background', '');
    $("#characterougi").css('background', '');
    $("#charactershinobu").css('background', '');
    $("#charactersodachi").css('background', '');
    $("#charactersuruga").css('background', '');
    $("#charactertsubasa").css('background', '');
    $("#characteryotsugi").css('background', '');
    $("#characterdeishuu").css('background', '');
    $("#characteryozuru").css('background', '');
    $("#characterblackhanekawa").css('background', '');
    $("#characterboku").css('background', '');
    $("#charactertomo").css('background', '');
    $("#characterjun").css('background', '');
}

function docharacterfilter(clicked, filter) {
    var filterobject = filter.replace(/\s+/g, '').toLowerCase();
    
    deactivatecharacter();
    if (!clicked) {
        filtercharacter(filter);
        activatecharacter(filterobject);
        clicked = true;
    } else {
        filtercharacter("");
        clicked = false;
    }

    characterhitagiclicked = false;
    characterkarenclicked = false;
    characterkoyomiclicked = false;
    charactermayoiclicked = false;
    charactermemeclicked = false;
    characternadekoclicked = false;
    characterougiclicked = false;
    charactershinobuclicked = false;
    charactersodachiclicked = false;
    charactersurugaclicked = false;
    charactertsubasaclicked = false;
    characteryotsugiclicked = false;
    characterdeishuuclicked = false;
    characteryozuruclicked = false;
    characterblackhanekawaclicked = false;
    characterbokuclicked = false;
    charactertomoclicked = false;
    characterjunclicked = false;

    switch (filterobject) {
        case "hitagi": characterhitagiclicked = clicked; break;
        case "karen": characterkarenclicked = clicked; break;
        case "koyomi": characterkoyomiclicked = clicked; break;
        case "mayoi": charactermayoiclicked = clicked; break;
        case "meme": charactermemeclicked = clicked; break;
        case "nadeko": characternadekoclicked = clicked; break;
        case "ougi": characterougiclicked = clicked; break;
        case "shinobu": charactershinobuclicked = clicked; break;
        case "sodachi": charactersodachiclicked = clicked; break;
        case "suruga": charactersurugaclicked = clicked; break;
        case "tsubasa": charactertsubasaclicked = clicked; break;
        case "yotsugi": characteryotsugiclicked = clicked; break;
        case "deishuu": characterdeishuuclicked = clicked; break;
        case "yozuru": characteryozuruclicked = clicked; break;
        case "blackhanekawa": characterblackhanekawaclicked = clicked; break;
        case "boku": characterbokuclicked = clicked; break;
        case "tomo": charactertomoclicked = clicked; break;
        case "jun": characterjunclicked = clicked; break;
    }
}
