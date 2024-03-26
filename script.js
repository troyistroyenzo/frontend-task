document.addEventListener('DOMContentLoaded', function() {
    // Content arrays
    var titles = [
        'Egestas Consectetur Ligula Parturient Amet',
        'Vivamus Sollicitudin Felis Venenatis Ultrices',
        'Consectetur Adipiscing Elit.',
        'Praesent Blandit Turpis Gravida Arcu',
        'Nulla Vitae Elit Libero Pharetra Augue',
        'Curabitur Lobortis Id Lorem Id Bibendum',
    ];
    
    var subtitles = [
    'Pellentesque Ornare Sem Lacinia Quam Venenatis Vestibulum',
    'Aenean eu Leo Quam. Pellentesque Ornare',
    'Nullam Id Dolor Id Nibh Ultricies Vehicula Ut Id Elit',
    'Cras Justo Odio, Dapibus Ac Facilisis In, Egestas Eget Quam',
    'Donec Ullamcorper Nulla Non Metus Auctor Fringilla',
    'Cursus Amet, Consectetur Adipiscing Elit',
];

    var years = ['2014', '2016', '2017', '2018', '2021', '2022'];
    
    var clickCount = 0; // Initialize click counter
    var orangeSection = document.querySelector('.orange-section');

    function changeTextWithFade(element, newText) {
        // Fade out
        element.style.opacity = 0;
        // Wait for fade out, change text, and fade in
        setTimeout(function() {
            element.textContent = newText;
            element.style.opacity = 1;
        }, 400); // Adjust timing to match CSS transition
    }

    orangeSection.addEventListener('click', function() {
        if (clickCount < titles.length) {
            changeTextWithFade(orangeSection.querySelector('.main-title'), titles[clickCount]);
            changeTextWithFade(orangeSection.querySelector('.subtitle'), subtitles[clickCount]);
            changeTextWithFade(orangeSection.querySelector('.year'), years[clickCount]);
            
            clickCount++;
        } else {
            console.log('All changes have been made.');
        }
    });
});

