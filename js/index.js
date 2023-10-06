const select = document.querySelector(".change-lang");
const allLang = ['en', 'es', 'de', 'ua'];
select.addEventListener('change', changeURLLanguage);

function changeURLLanguage () {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if(!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    document.querySelector('.lang-1').innerHTML = langArr['first-header-h2'][hash];
    document.querySelector('.lang-2').innerHTML = langArr['first-header-h3'][hash];
    document.querySelector('.after-before').innerHTML = langArr['after'][hash];
    document.querySelector('.sec-text').innerHTML = langArr['second-text'][hash];
    document.querySelector('.t-text-p').innerHTML = langArr['third-text-p'][hash];
    document.querySelector('.t-text-h3').innerHTML = langArr['third-text-h3'][hash];
    document.querySelector('.help-h3').innerHTML = langArr['help-h2'][hash];
    document.querySelector('.help-p').innerHTML = langArr['help-p'][hash];
    document.querySelector('.join-h2').innerHTML = langArr['join-h2'][hash];
    document.querySelector('.join-p').innerHTML = langArr['join-p'][hash];
    document.querySelector('.donate').innerHTML = langArr['donate'][hash];
    document.querySelector('.about-p').innerHTML = langArr['about'][hash];
    document.querySelector('.foot-2').innerHTML = langArr['privacy'][hash];
    document.querySelector('.foot-3').innerHTML = langArr['cookies'][hash];
    document.querySelector('.foot-4').innerHTML = langArr['contact'][hash];

    if(hash == 'en') {
        document.getElementById("flag").src = "source/britukr.png"
    } else if (hash == 'de') {
        document.getElementById("flag").src = "source/gerukr.png"
    } else if (hash == 'es') {
        document.getElementById("flag").src = "source/spainukr.png"
    } else {
        document.getElementById("flag").src = "source/ukr.png"
    }

    
    console.log(hash);
    
}

changeLanguage();
