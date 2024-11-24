// Funkcja do animacji tekstu
function typeText(elementId, text, speed, callback) {
    const element = document.getElementById(elementId);
    element.textContent = ""; // Wyczyszczenie zawartości przed rozpoczęciem
    let index = 0;
    const interval = setInterval(() => {
        element.textContent += text[index];
        index++;
        if (index === text.length) {
            clearInterval(interval);
            if (callback) callback();
        }
    }, speed);
}

// Funkcja obsługująca kliknięcie przycisku 1"Sekwencja Medycznych działąń ratowniczych
function onButtonClick1() {
    const container = document.getElementById('container');
    
    // Usuwamy wszystkie dzieci kontenera (czyli wszystkie elementy w kontenerze)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Tworzymy element na napis "Wypadek podczas spaceru"
    const accidentMessage = document.createElement('div');
    accidentMessage.id = 'accident-message';
    accidentMessage.style.fontSize = '48px';
    accidentMessage.style.fontWeight = 'bold';
    accidentMessage.style.color = '#333';
    accidentMessage.style.textAlign = 'center';
    container.appendChild(accidentMessage);

    // Animujemy napis "Wypadek podczas spaceru"
    typeText('accident-message', 'Wypadek podczas spaceru', 100, () => {
        // Po animacji wyświetlamy opis sytuacji
        setTimeout(() => {
            const situationMessage = document.createElement('div');
            situationMessage.style.fontSize = '24px';
            situationMessage.style.color = '#333';
            situationMessage.style.textAlign = 'center';
            situationMessage.style.marginTop = '20px';
            situationMessage.textContent = 'Podczas spaceru w parku Dorosły uczestnik zasłabł i przewrócił się na ziemię. Jest nieprzytomny i nie reaguje na wołanie. Na miejscu nie ma profesjonalnej pomocy, a Ty musisz podjąć sekwencję działań ratowniczych, aby zwiększyć jego szanse na przeżycie.';
            container.appendChild(situationMessage);

            // Wyświetlenie pytania po krótkim opóźnieniu
            setTimeout(displayFirstQuestion, 2000); // Czekamy 2 sekundy przed wyświetleniem pytania
        }, 1000); // Czekamy 1 sekundę przed wyświetleniem opisu sytuacji
    });
}

// Funkcja do wyświetlania pierwszego pytania 1
function displayFirstQuestion() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 1: Osoba leży na ziemi, nie rusza się i nie reaguje. Co robisz najpierw?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Sprawdzam, czy miejsce zdarzenia jest bezpieczne dla mnie i innych.', action: displaySecondQuestion },
        { text: 'B. Od razu kładę się na ziemi, żeby udzielić pomocy.', action: null },
        { text: 'C. Wołam innych i czekam, aż ktoś inny coś zrobi.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania drugiego pytania 1
function displaySecondQuestion() {
    const container = document.getElementById('container');


    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 2: Miejsce jest bezpieczne. Co robisz teraz?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Sprawdzam, czy osoba oddycha i reaguje na bodźce.', action: displayThirdQuestion },
        { text: 'B. Próbuję podnieść osobę na nogi.', action: null },
        { text: 'C. Przykrywam ją kurtką i czekam na pomoc.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania trzeciego pytania 1
function displayThirdQuestion() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 3: Osoba jest nieprzytomna, ale oddycha. Co robisz?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Układam ją w pozycji bocznej ustalonej, aby zabezpieczyć drogi oddechowe.', action: displayfourthQuestion },
        { text: 'B. Zostawiam ją na plecach i czekam na pomoc.', action: null },
        { text: 'C. Kładę ją na brzuchu, aby była stabilniejsza.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania Czwartego pytania 1
function displayfourthQuestion() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 4: Co robisz, jeśli osoba nie oddycha?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Czekam, aż ktoś bardziej wykwalifikowany przyjdzie pomóc.', action: null },
        { text: 'B. Natychmiast rozpoczynam resuscytację krążeniowo-oddechową (RKO).', action: displayfivethQuestion },
        { text: 'C. Sprawdzam puls co kilka minut i obserwuję.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania piątego pytania 1
function displayfivethQuestion() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 5: Jak wykonujesz resuscytację krążeniowo-oddechową?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Skupiam się tylko na oddechach ratowniczych, pomijając uciski.', action: null },
        { text: 'B. Uciskam klatkę piersiową tylko kilka razy, aby nie uszkodzić żeber.', action: null },
        { text: 'C. Uciskam klatkę piersiową na środku mostka, 30 razy, a następnie wykonuję 2 oddechy ratownicze (jeśli to możliwe)', action: showSuccessMessage }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania zielonego komunikatu i przycisku powrotu
function showSuccessMessage() {
    const container = document.getElementById('container');

    // Usunięcie wszystkich dzieci z kontenera
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Dodanie zielonego komunikatu
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '24px';
    successMessage.style.color = 'green';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '30px';
    successMessage.textContent = 'Super znasz się na Sekwencji medycznych działań ratowniczych.';
    container.appendChild(successMessage);

    // Dodanie przycisku "Powrót"
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Powrót';
    returnButton.style.display = 'block';
    returnButton.style.margin = '30px auto';
    returnButton.style.padding = '10px 20px';
    returnButton.style.fontSize = '18px';
    returnButton.style.backgroundColor = '#007bff';
    returnButton.style.color = '#fff';
    returnButton.style.border = 'none';
    returnButton.style.borderRadius = '5px';
    returnButton.style.cursor = 'pointer';

    // Przypisanie działania przycisku "Powrót"
    returnButton.onclick = () => {
        resetToScenarioSelection();
    };
    container.appendChild(returnButton);
}

// Funkcja obsługująca kliknięcie przycisku 2 Postępowanie w zatrzymaniu krążenia
function onButtonClick2() {
    const container = document.getElementById('container');
    
    // Usuwamy wszystkie dzieci kontenera (czyli wszystkie elementy w kontenerze)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Tworzymy element na napis "Zatrzymanie krążenia"
    const accidentMessage = document.createElement('div');
    accidentMessage.id = 'accident-message';
    accidentMessage.style.fontSize = '48px';
    accidentMessage.style.fontWeight = 'bold';
    accidentMessage.style.color = '#333';
    accidentMessage.style.textAlign = 'center';
    container.appendChild(accidentMessage);

    // Animujemy napis "Wypadek podczas spaceru"
    typeText('accident-message', 'Zatrzymanie krążenia w wyniku zawału serca', 100, () => {
        // Po animacji wyświetlamy opis sytuacji
        setTimeout(() => {
            const situationMessage = document.createElement('div');
            situationMessage.style.fontSize = '24px';
            situationMessage.style.color = '#333';
            situationMessage.style.textAlign = 'center';
            situationMessage.style.marginTop = '20px';
            situationMessage.textContent = 'Jesteś w sklepie, kiedy zauważasz, że osoba w średnim wieku nagle traci przytomność i upada na ziemię. Sprawdzasz jej stan i zauważasz, że nie oddycha, a puls jest niewyczuwalny. Przechodnie patrzą na Ciebie z niepokojem, ale nikt nie podejmuje działania. Musisz szybko podjąć odpowiednie kroki, by ratować życie tej osoby.';
            container.appendChild(situationMessage);

            // Wyświetlenie pytania po krótkim opóźnieniu
            setTimeout(displayFirstQuestion2, 2000); // Czekamy 2 sekundy przed wyświetleniem pytania
        }, 1000); // Czekamy 1 sekundę przed wyświetleniem opisu sytuacji
    });
}

// Funkcja do wyświetlania pierwszego pytania 2
function displayFirstQuestion2() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 1: Osoba nie oddycha, a puls jest niewyczuwalny. Co robisz w pierwszej kolejności?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Układam poszkodowanego w pozycji półsiedzącej', action: null },
        { text: 'B. Natychmiast zaczynam resuscytację krążeniowo-oddechową (RKO).', action: displaySecondQuestion2 },
        { text: 'C. Sprawdzam, czy jest bezpiecznie w pobliżu..', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania drugiego pytania 2
function displaySecondQuestion2() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 2: Jak zaczynasz resuscytację krążeniowo-oddechową (RKO)?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Uciskam klatkę piersiową na środku mostka, wykonując 30 ucisków.', action: displayThirdQuestion2 },
        { text: 'B. Wykonuję 2 oddechy ratownicze, zanim zacznę uciskać..', action: null },
        { text: 'C. Sprawdzam puls ponownie i czekam.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania trzeciego pytania 2
function displayThirdQuestion2() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 3: Jak prawidłowo wykonać uciski klatki piersiowej?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Uciskam klatkę piersiową na głębokość około 5–6 cm, stosując odpowiednią siłę.', action: displayfourthQuestion2 },
        { text: 'B. Uciskam klatkę piersiową na głębokość 1–2 cm, delikatnie.', action: null },
        { text: 'C. Uciskam klatkę piersiową tylko na jej dolnej części, aby uniknąć uszkodzenia żeber.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania Czwartego pytania 2
function displayfourthQuestion2() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 4: Co robisz po wykonaniu 30 ucisków klatki piersiowej?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Sprawdzam, czy puls wrócił, i czekam. Jak nie to dalej uciskam', action: null },
        { text: 'B. Kontynuuję uciski klatki piersiowej i nie wykonuję oddechów.', action: null },
        { text: 'C. Wykonuję 2 oddechy ratownicze.', action: displayfivethQuestion2 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania Piątego pytania 2
function displayfivethQuestion2() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 5: Co robisz, jeśli nie jesteś w stanie wykonać oddechów ratowniczych?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Czekam na innych ratowników, aby zaczęli oddechy ratownicze', action: null },
        { text: 'B. Sprawdzam puls co kilka minut, czekając na pomoc.', action: null },
        { text: 'C. Kontynuuję tylko uciski klatki piersiowej, w tempie 100-120 na minutę.', action: showSuccessMessage2 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania zielonego komunikatu i przycisku powrotu 2
function showSuccessMessage2() {
    const container = document.getElementById('container');

    // Usunięcie wszystkich dzieci z kontenera
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Dodanie zielonego komunikatu
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '24px';
    successMessage.style.color = 'green';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '30px';
    successMessage.textContent = 'Super! Wiesz jak reagować w przypadku amputacji kończyny.';
    container.appendChild(successMessage);

    // Dodanie przycisku "Powrót"
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Powrót';
    returnButton.style.display = 'block';
    returnButton.style.margin = '30px auto';
    returnButton.style.padding = '10px 20px';
    returnButton.style.fontSize = '18px';
    returnButton.style.backgroundColor = '#007bff';
    returnButton.style.color = '#fff';
    returnButton.style.border = 'none';
    returnButton.style.borderRadius = '5px';
    returnButton.style.cursor = 'pointer';

    // Przypisanie działania przycisku "Powrót"
    returnButton.onclick = () => {
        resetToScenarioSelection();
    };
    container.appendChild(returnButton);
}

// Funkcja obsługująca kliknięcie przycisku 3"wstrząs"
function onButtonClick3() {
    const container = document.getElementById('container');
    
    // Usuwamy wszystkie dzieci kontenera (czyli wszystkie elementy w kontenerze)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Tworzymy element na napis 
    const accidentMessage = document.createElement('div');
    accidentMessage.id = 'accident-message';
    accidentMessage.style.fontSize = '48px';
    accidentMessage.style.fontWeight = 'bold';
    accidentMessage.style.color = '#333';
    accidentMessage.style.textAlign = 'center';
    container.appendChild(accidentMessage);

    // Animujemy napis 
    typeText('accident-message', 'Wstrząs po poważnym wypadku komunikacyjnym', 100, () => {
        // Po animacji wyświetlamy opis sytuacji
        setTimeout(() => {
            const situationMessage = document.createElement('div');
            situationMessage.style.fontSize = '24px';
            situationMessage.style.color = '#333';
            situationMessage.style.textAlign = 'center';
            situationMessage.style.marginTop = '20px';
            situationMessage.textContent = 'Po wypadku drogowym na ruchliwej drodze, jeden z pasażerów pojazdu jest przytomny, ale wygląda na bardzo osłabionego. Ma blady kolor skóry, jest spocony, ma przyspieszony oddech, a jego tętno jest słabe. Jest wyraźnie oszołomiony i ma zimne dłonie. Mimo że nie ma krwotoku, jego stan zdrowia wymaga natychmiastowej interwencji, ponieważ może to być wstrząs.';
            container.appendChild(situationMessage);

            // Wyświetlenie pytania po krótkim opóźnieniu
            setTimeout(displayFirstQuestion3, 2000); // Czekamy 2 sekundy przed wyświetleniem pytania
        }, 1000); // Czekamy 1 sekundę przed wyświetleniem opisu sytuacji
    });
}

// Funkcja do wyświetlania pierwsze pytania 3
function displayFirstQuestion3() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 1: Jakie są pierwsze kroki w przypadku podejrzenia wstrząsu?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Rozpoczynam resuscytację krążeniowo-oddechową (RKO).', action: null },
        { text: 'B. Natychmiast podaję poszkodowanemu dużo wody.', action: null },
        { text: 'C. Sprawdzam, czy miejsce wypadku jest bezpieczne.', action: displaysecondQuestion3 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania drugiego pytania 3
function displaysecondQuestion3() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 2: Miejsce wypadku jest bezpieczne. Co robisz teraz?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Układam poszkodowanego na plecach, podnoszę nogi, aby poprawić krążenie.', action: displaythirdQuestion3 },
        { text: 'B. Pozostawiam poszkodowanego w pozycji siedzącej, aby poczuł się bardziej komfortowo.', action: null },
        { text: 'C. Staram się uspokoić poszkodowanego, nie zmieniając jego pozycji.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania trzeciego pytania 3
function displaythirdQuestion3() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 3: Poszkodowany ma blady kolor skóry i zimne dłonie. Co robisz w tej sytuacji?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Podaję poszkodowanemu dużo wody, aby poprawić jego stan.', action: null },
        { text: 'B. Owijam poszkodowanego kocem, aby zapobiec wychłodzeniu.', action: displayfourthQuestion3 },
        { text: 'C. Przyprawiam go do wymiotów, aby pobudzić organizm.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania Czwartego pytania 3
function displayfourthQuestion3() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 4: Poszkodowany zaczyna tracić przytomność. Co robisz teraz?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Utrzymuję poszkodowanego w pozycji leżącej, monitoruję jego oddech i puls.', action: displayfivethQuestion3 },
        { text: 'B. Próbuję zmusić go do picia wody, aby się obudził.', action: null },
        { text: 'C. Kładę go na brzuchu, aby uniknąć zadławienia.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania piątego pytania 3
function displayfivethQuestion3() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 5: Kiedy należy wezwać profesjonalną pomoc medyczną?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Zawsze, niezależnie od tego, jak mało poważny wydaje się stan poszkodowanego.', action: displaysixthQuestion3 },
        { text: 'B. Tylko w przypadku, gdy poszkodowany nie odzyskuje przytomności.', action: null },
        { text: 'C. Dopiero po tym, jak poszkodowany zacznie się lepiej czuć.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania szósego pytania 3
function displaysixthQuestion3() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 6: Co robić, jeśli nie masz dostępu do telefonu i nie możesz wezwać pomocy?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Opuszczam miejsce wypadku, aby szukać telefonu.', action: null },
        { text: 'B. Kontynuuję monitorowanie stanu poszkodowanego, starając się go uspokoić, i szukam pomocy w najbliższym możliwym miejscu.', action: showSuccessMessage3 },
        { text: 'C. Pozostawiam poszkodowanego, czekając, aż ktoś inny wezwie pomoc.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}
// Funkcja do wyświetlania zielonego komunikatu i przycisku powrotu 3
function showSuccessMessage3() {
    const container = document.getElementById('container');

    // Usunięcie wszystkich dzieci z kontenera
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Dodanie zielonego komunikatu
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '24px';
    successMessage.style.color = 'green';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '30px';
    successMessage.textContent = 'Super! Wiesz jak reagować w przypadku amputacji kończyny.';
    container.appendChild(successMessage);

    // Dodanie przycisku "Powrót"
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Powrót';
    returnButton.style.display = 'block';
    returnButton.style.margin = '30px auto';
    returnButton.style.padding = '10px 20px';
    returnButton.style.fontSize = '18px';
    returnButton.style.backgroundColor = '#007bff';
    returnButton.style.color = '#fff';
    returnButton.style.border = 'none';
    returnButton.style.borderRadius = '5px';
    returnButton.style.cursor = 'pointer';

    // Przypisanie działania przycisku "Powrót"
    returnButton.onclick = () => {
        resetToScenarioSelection();
    };
    container.appendChild(returnButton);
}

// Funkcja obsługująca kliknięcie przycisku 4"Rany i amputacja urazowa"
function onButtonClick4() {
    const container = document.getElementById('container');
    
    // Usuwamy wszystkie dzieci kontenera (czyli wszystkie elementy w kontenerze)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Tworzymy element na napis 
    const accidentMessage = document.createElement('div');
    accidentMessage.id = 'accident-message';
    accidentMessage.style.fontSize = '48px';
    accidentMessage.style.fontWeight = 'bold';
    accidentMessage.style.color = '#333';
    accidentMessage.style.textAlign = 'center';
    container.appendChild(accidentMessage);

    // Animujemy napis 
    typeText('accident-message', 'Amputacja urazowa w wyniku wypadku przemysłowego', 100, () => {
        // Po animacji wyświetlamy opis sytuacji
        setTimeout(() => {
            const situationMessage = document.createElement('div');
            situationMessage.style.fontSize = '24px';
            situationMessage.style.color = '#333';
            situationMessage.style.textAlign = 'center';
            situationMessage.style.marginTop = '20px';
            situationMessage.textContent = 'W wyniku wypadku w fabryce doszło do poważnego urazu – część ciała jednej z osób została zmiażdżona przez maszynę, co skutkowało amputacją ręki na wysokości nadgarstka. Poszkodowany jest świadomy, ale silnie krwawi.';
            container.appendChild(situationMessage);

            // Wyświetlenie pytania po krótkim opóźnieniu
            setTimeout(displayfirstQuestion4, 2000); // Czekamy 2 sekundy przed wyświetleniem pytania
        }, 1000); // Czekamy 1 sekundę przed wyświetleniem opisu sytuacji
    });
}

// Funkcja do wyświetlania pierwsze pytania 4
function displayfirstQuestion4() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 1: Co robisz, gdy zauważasz, że osoba doznała amputacji urazowej i intensywnie krwawi?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Natychmiast próbuję zatamować krwotok.', action: displaysecondQuestion4 },
        { text: 'B. Sprawdzam, czy poszkodowany jest przytomny, a następnie przeszukuję miejsce wypadku.', action: null },
        { text: 'C. Ignoruję krwotok, skupiając się na innych obrażeniach poszkodowanego.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}
// Funkcja do wyświetlania drugiego pytania 4
function displaysecondQuestion4() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 2: Jakie metody powinieneś zastosować w celu tamowania krwotoku z amputowanej kończyny?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Podnoszę amputowaną kończynę powyżej poziomu serca.', action: null },
        { text: 'B. Używam czystej tkaniny (np. ręcznika, bandaża) i mocno uciskam miejsce krwawienia.', action: displayThirdQuestion4 },
        { text: 'C. Używam improwizowanego opatrunku, ale nie uciskam rany.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania trzeciego pytania 4
function displayThirdQuestion4() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 3: Co robisz, jeśli krwotok nie ustaje, mimo uciskania rany?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Zastosuj opaskę uciskową powyżej miejsca amputacji.', action: displayfourthQuestion4 },
        { text: 'B. Próbuj zatamować krwotok przy użyciu innych czystych materiałów.', action: null },
        { text: 'C. Używam improwizowanego opatrunku, żeby nałożyć jak najwiecej materiału.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania czwartego pytania 4
function displayfourthQuestion4() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 4: Jak należy postępować z amputowaną kończyną?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Schować do worka na smieci.', action: null },
        { text: 'B. Umieszczam amputowaną kończynę w czystym opakowaniu, zabezpieczając ją przed zanieczyszczeniem.', action: displayfivethQuestion4 },
        { text: 'C. Pozostawiam amputowaną kończynę na miejscu wypadku, nie dotykając jej.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania piątego pytania 4
function displayfivethQuestion4() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 5: Co robisz, aby zapobiec wstrząsowi u poszkodowanego?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Utrzymuję poszkodowanego w pozycji leżącej, unikałem ruchu i monitoruję jego stan.', action: null },
        { text: 'B. Podaję poszkodowanemu wodę, aby nawodnić organizm.', action: displaysixQuestion4 },
        { text: 'C. Podnoszę poszkodowanego do pozycji siedzącej, aby mógł łatwiej oddychać.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania szóstego pytania 4
function displaysixQuestion4() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 6: Jakie są dalsze kroki w przypadku wstrząsu po amputacji?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Przyprawienie poszkodowanego do wymiotów, aby przywrócić krążenie.', action: null },
        { text: 'B. Wezwanie pomocy medycznej i kontynuowanie działań ratunkowych, aż do jej przybycia.', action: showSuccessMessage4 },
        { text: 'C. Pozostawienie poszkodowanego w spokoju, aż sam odzyska przytomność.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania zielonego komunikatu i przycisku powrotu 4
function showSuccessMessage4() {
    const container = document.getElementById('container');

    // Usunięcie wszystkich dzieci z kontenera
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Dodanie zielonego komunikatu
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '24px';
    successMessage.style.color = 'green';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '30px';
    successMessage.textContent = 'Super! Wiesz jak reagować w przypadku amputacji kończyny.';
    container.appendChild(successMessage);

    // Dodanie przycisku "Powrót"
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Powrót';
    returnButton.style.display = 'block';
    returnButton.style.margin = '30px auto';
    returnButton.style.padding = '10px 20px';
    returnButton.style.fontSize = '18px';
    returnButton.style.backgroundColor = '#007bff';
    returnButton.style.color = '#fff';
    returnButton.style.border = 'none';
    returnButton.style.borderRadius = '5px';
    returnButton.style.cursor = 'pointer';

    // Przypisanie działania przycisku "Powrót"
    returnButton.onclick = () => {
        resetToScenarioSelection();
    };
    container.appendChild(returnButton);
}

// Funkcja obsługująca klikniecie przycisku 5 "Obrażenie i podejrzenia obrażen głowy"
function onButtonClick5() {
    const container = document.getElementById('container');
    
    // Usuwamy wszystkie dzieci kontenera (czyli wszystkie elementy w kontenerze)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Tworzymy element na napis 
    const accidentMessage = document.createElement('div');
    accidentMessage.id = 'accident-message';
    accidentMessage.style.fontSize = '48px';
    accidentMessage.style.fontWeight = 'bold';
    accidentMessage.style.color = '#333';
    accidentMessage.style.textAlign = 'center';
    container.appendChild(accidentMessage);

    // Animujemy napis 
    typeText('accident-message', 'Upadek z wysokości i podejrzenie obrażeń głowy', 100, () => {
        // Po animacji wyświetlamy opis sytuacji
        setTimeout(() => {
            const situationMessage = document.createElement('div');
            situationMessage.style.fontSize = '24px';
            situationMessage.style.color = '#333';
            situationMessage.style.textAlign = 'center';
            situationMessage.style.marginTop = '20px';
            situationMessage.textContent = 'Podczas remontu na budowie jeden z pracowników spadł z rusztowania z wysokości około 2 metrów. Uderzył głową o betonową powierzchnię. Po upadku poszkodowany jest przytomny, ale skarży się na ból głowy, ma zawroty głowy, nie pamięta dokładnie, co się stało. Widać również otarcia skóry na czole, a w okolicy ucha pojawia się krwawienie. Istnieje podejrzenie urazu głowy.';
            container.appendChild(situationMessage);

            // Wyświetlenie pytania po krótkim opóźnieniu
            setTimeout(displayfirstQuestion5, 2000); // Czekamy 2 sekundy przed wyświetleniem pytania
        }, 1000); // Czekamy 1 sekundę przed wyświetleniem opisu sytuacji
    });
}

// Funkcja do wyświetlania pierwsze pytania 5
function displayfirstQuestion5() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 1: Jaki powinien być Twój pierwszy krok?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Upewniam się, że miejsce zdarzenia jest bezpieczne.', action: displaySecondQuestion5 },
        { text: 'B. Podnoszę poszkodowanego, aby zobaczyć, czy może chodzić.', action: null },
        { text: 'C. Ignoruję miejsce zdarzenia i skupiam się wyłącznie na poszkodowanym.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania drugiego pytania 5
function displaySecondQuestion5() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 2: Co robisz po ocenie bezpieczeństwa?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Pozwalam poszkodowanemu wstać, aby ocenić jego zdolność poruszania się.', action: null },
        { text: 'B. Stabilizuję głowę i szyję poszkodowanego, aby zapobiec dalszym urazom.', action: displaythirdQuestion5 },
        { text: 'C. Podaję poszkodowanemu wodę, aby poprawić jego samopoczucie.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania trzeciego pytania 5
function displaythirdQuestion5() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 3: Jakie są kluczowe objawy, które potwierdzają podejrzenie poważnego urazu głowy?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Ból w rękach lub nogach bez objawów neurologicznych.', action: null },
        { text: 'B. Tylko otarcia skóry na głowie, brak innych objawów.', action: null },
        { text: 'C. Zawroty głowy, utrata przytomności, krwawienie z uszu lub nosa.', action: displayfourthQuestion5 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania czwartego pytania 5
function displayfourthQuestion5() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 4: Poszkodowany zaczyna tracić przytomność. Co robisz?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Pozostawiam poszkodowanego w tej samej pozycji, nie monitorując jego oddechu.', action: null },
        { text: 'B. Podnoszę poszkodowanego, aby go rozbudzić.', action: null },
        { text: 'C. Układam poszkodowanego w pozycji bocznej bezpiecznej, monitorując jego oddech.', action: displayfivethQuestion5 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania Piątego pytania 5
function displayfivethQuestion5() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 5: Czy podajesz poszkodowanemu jedzenie lub picie?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Nie podaję niczego do jedzenia ani picia.', action: displaysixthQuestion5 },
        { text: 'B. Podaję wodę, aby uniknąć odwodnienia.', action: null },
        { text: 'C. Podaję kawałek cukru, aby podnieść poziom energii.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania Piątego pytania 5
function displaysixthQuestion5() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 6: Kiedy należy wezwać pomoc medyczną?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Zawsze, nawet jeśli objawy wydają się łagodne.', action: showSuccessMessage5 },
        { text: 'B. Tylko wtedy, gdy poszkodowany całkowicie stracił przytomność.', action: null },
        { text: 'C. Dopiero po upływie 30 minut, jeśli objawy się nie poprawią.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania zielonego komunikatu i przycisku powrotu 5
function showSuccessMessage5() {
    const container = document.getElementById('container');

    // Usunięcie wszystkich dzieci z kontenera
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Dodanie zielonego komunikatu
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '24px';
    successMessage.style.color = 'green';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '30px';
    successMessage.textContent = 'Super! Wiesz jak reagować podczas obrazeń głowy.';
    container.appendChild(successMessage);

    // Dodanie przycisku "Powrót"
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Powrót';
    returnButton.style.display = 'block';
    returnButton.style.margin = '30px auto';
    returnButton.style.padding = '10px 20px';
    returnButton.style.fontSize = '18px';
    returnButton.style.backgroundColor = '#007bff';
    returnButton.style.color = '#fff';
    returnButton.style.border = 'none';
    returnButton.style.borderRadius = '5px';
    returnButton.style.cursor = 'pointer';

    // Przypisanie działania przycisku "Powrót"
    returnButton.onclick = () => {
        resetToScenarioSelection();
    };
    container.appendChild(returnButton);
}

// Funkcja obsługująca klikniecie przycisku 6 "Obrażenia i podejrzenia obrażeń kręgosłupa"
function onButtonClick6() {
    const container = document.getElementById('container');
    
    // Usuwamy wszystkie dzieci kontenera (czyli wszystkie elementy w kontenerze)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Tworzymy element na napis 
    const accidentMessage = document.createElement('div');
    accidentMessage.id = 'accident-message';
    accidentMessage.style.fontSize = '48px';
    accidentMessage.style.fontWeight = 'bold';
    accidentMessage.style.color = '#333';
    accidentMessage.style.textAlign = 'center';
    container.appendChild(accidentMessage);

    // Animujemy napis 
    typeText('accident-message', 'Upadek na plecy i podejrzenie urazu kręgosłupa', 100, () => {
        // Po animacji wyświetlamy opis sytuacji
        setTimeout(() => {
            const situationMessage = document.createElement('div');
            situationMessage.style.fontSize = '24px';
            situationMessage.style.color = '#333';
            situationMessage.style.textAlign = 'center';
            situationMessage.style.marginTop = '20px';
            situationMessage.textContent = 'Podczas wspinaczki jeden z uczestników spadł z wysokości około 3 metrów na nierówne podłoże. Poszkodowany leży na plecach, skarży się na silny ból pleców i drętwienie w nogach. Nie jest w stanie poruszyć kończynami dolnymi. Istnieje podejrzenie obrażeń kręgosłupa. ';
            container.appendChild(situationMessage);

            // Wyświetlenie pytania po krótkim opóźnieniu
            setTimeout(displayfirstQuestion6, 2000); // Czekamy 2 sekundy przed wyświetleniem pytania
        }, 1000); // Czekamy 1 sekundę przed wyświetleniem opisu sytuacji
    });
}

// Funkcja do wyświetlania pierwszego pytania 6
function displayfirstQuestion6() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 1: Jaki powinien być Twój pierwszy krok?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Upewniam się, że miejsce zdarzenia jest bezpieczne dla mnie i poszkodowanego.', action: displaySecondQuestion6 },
        { text: 'B. Natychmiast podnoszę poszkodowanego, aby przenieść go w bezpieczne miejsce.', action: null },
        { text: 'C. Skupiam się na zapewnieniu poszkodowanemu jedzenia i picia.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania drugiego pytania 6
function displaySecondQuestion6() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 2: Czy poruszasz poszkodowanego w tej sytuacji?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Nie, stabilizuję głowę i szyję poszkodowanego, a sam pozostawiam go w tej pozycji.', action: displaythirdQuestion6 },
        { text: 'B. Tak, przenoszę poszkodowanego na miękkie podłoże.', action: null },
        { text: 'C. Tak, obracam go na bok, aby ułatwić oddychanie.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania trzeciego pytania 6
function displaythirdQuestion6() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 3: Jak stabilizujesz głowę i szyję poszkodowanego?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Używam własnych dłoni, aby unieruchomić głowę i szyję w neutralnej pozycji.', action: displayfourthQuestion6 },
        { text: 'B. Podkładam poduszki pod głowę poszkodowanego, aby poprawić jego komfort.', action: null },
        { text: 'C. Nic nie robię, ponieważ stabilizacja głowy nie jest konieczna.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania czwartego pytania 6
function displayfourthQuestion6() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 4: Co robisz, jeśli poszkodowany przestaje oddychać?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Przenoszę poszkodowanego na bok, aby poprawić jego oddech.', action: null },
        { text: 'B. Rozpoczynam resuscytację krążeniowo-oddechową (RKO), starając się poruszać poszkodowanego jak najmniej.', action: displayfivethQuestion6 },
        { text: 'C. Ignoruję brak oddechu, skupiając się na stabilizacji kręgosłupa.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania piątego pytania 6
function displayfivethQuestion6() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 5: Jakie objawy mogą wskazywać na poważny uraz kręgosłupa?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Brak widocznych obrażeń i pełna mobilność kończyn.', action: null },
        { text: 'B. Ból pleców, drętwienie lub brak czucia w kończynach, problemy z oddychaniem.', action: displaysixthQuestion6 },
        { text: 'C. Tylko siniaki na plecach, bez innych objawów.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania szóstego pytania 6
function displaysixthQuestion6() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 6: Czy podajesz poszkodowanemu jedzenie lub picie?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Nie, niczego nie podaję, aby uniknąć ryzyka aspiracji lub powikłań.', action: displayseventhQuestion6 },
        { text: 'B. Podaję wodę, aby nawodnić poszkodowanego.', action: null },
        { text: 'C. Podaję coś do jedzenia, aby podnieść poziom energii.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania siódmego pytania 6
function displayseventhQuestion6() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 7: Kiedy należy wezwać pomoc medyczną?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Tylko wtedy, gdy poszkodowany skarży się na silny ból.', action: null },
        { text: 'B. Dopiero po kilku godzinach, jeśli objawy się nie poprawią.', action: null },
        { text: 'C. Natychmiast, w każdej sytuacji podejrzenia urazu kręgosłupa.', action: showSuccessMessage6 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania zielonego komunikatu i przycisku powrotu
function showSuccessMessage6() {
    const container = document.getElementById('container');

    // Usunięcie wszystkich dzieci z kontenera
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Dodanie zielonego komunikatu
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '24px';
    successMessage.style.color = 'green';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '30px';
    successMessage.textContent = 'Super! Wiesz jak reagować podczas obrazeń kręgosłupa.';
    container.appendChild(successMessage);

    // Dodanie przycisku "Powrót"
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Powrót';
    returnButton.style.display = 'block';
    returnButton.style.margin = '30px auto';
    returnButton.style.padding = '10px 20px';
    returnButton.style.fontSize = '18px';
    returnButton.style.backgroundColor = '#007bff';
    returnButton.style.color = '#fff';
    returnButton.style.border = 'none';
    returnButton.style.borderRadius = '5px';
    returnButton.style.cursor = 'pointer';

    // Przypisanie działania przycisku "Powrót"
    returnButton.onclick = () => {
        resetToScenarioSelection();
    };
    container.appendChild(returnButton);
}

// Funkcja obsługująca klikniecie przycisku 7 "Obrażenia i podejrzenia obrażeń klatki piersowej"
function onButtonClick7() {
    const container = document.getElementById('container');
    
    // Usuwamy wszystkie dzieci kontenera (czyli wszystkie elementy w kontenerze)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Tworzymy element na napis 
    const accidentMessage = document.createElement('div');
    accidentMessage.id = 'accident-message';
    accidentMessage.style.fontSize = '48px';
    accidentMessage.style.fontWeight = 'bold';
    accidentMessage.style.color = '#333';
    accidentMessage.style.textAlign = 'center';
    container.appendChild(accidentMessage);

    // Animujemy napis 
    typeText('accident-message', 'Wypadek rowerowy i podejrzenie obrażeń klatki piersiowej', 100, () => {
        // Po animacji wyświetlamy opis sytuacji
        setTimeout(() => {
            const situationMessage = document.createElement('div');
            situationMessage.style.fontSize = '24px';
            situationMessage.style.color = '#333';
            situationMessage.style.textAlign = 'center';
            situationMessage.style.marginTop = '20px';
            situationMessage.textContent = 'Podczas jazdy na rowerze poszkodowany zderzył się z samochodem. Upadł na asfalt, uderzając klatką piersiową o kierownicę. Skarży się na silny ból w klatce piersiowej, ma trudności z oddychaniem i zauważalną asymetrię podczas ruchów klatki piersiowej. Poszkodowany oddycha płytko. Istnieje podejrzenie obrażeń klatki piersiowej, takich jak złamanie żeber lub odma opłucnowa. ';
            container.appendChild(situationMessage);

            // Wyświetlenie pytania po krótkim opóźnieniu
            setTimeout(displayfirstQuestion7, 2000); // Czekamy 2 sekundy przed wyświetleniem pytania
        }, 1000); // Czekamy 1 sekundę przed wyświetleniem opisu sytuacji
    });
}

// Funkcja do wyświetlania pierwszego pytania 7
function displayfirstQuestion7() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 1: Jakie informacje powinieneś zebrać przed przystąpieniem do działania?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Czy poszkodowany ma trudności z oddychaniem, bóle w klatce piersiowej i widoczne obrażenia.', action: displaysecondQuestion7 },
        { text: 'B. Czy poszkodowany był wcześniej operowany w obrębie klatki piersiowej.', action: null },
        { text: 'C. Czy poszkodowany odczuwa zawroty głowy i ma suchość w ustach.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania drugiego pytania 7
function displaysecondQuestion7() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 2: Poszkodowany mówi, że bardzo trudno mu oddychać, ale nie widać żadnych ran. Co powinieneś podejrzewać?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Złamanie kości obojczyka.', action: displaythirdQuestion7 },
        { text: 'B. Odmę opłucnową lub inne uszkodzenia wewnętrzne klatki piersiowej.', action: null },
        { text: 'C. Tylko zmęczenie po upadku.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania trzeciego pytania 7
function displaythirdQuestion7() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 3: Poszkodowany próbuje się poruszać i zmieniać pozycję. Co powinieneś zrobić?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Pozwolić mu na zmianę pozycji, jeśli twierdzi, że to przyniesie ulgę.', action: null },
        { text: 'B. Ułożyć go w pozycji półsiedzącej i zachęcić do pozostania nieruchomym.', action: displayfourthQuestion7 },
        { text: 'C. Ułożyć go na plecach i unieruchomić klatkę piersiową za pomocą bandaża.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania czwartego pytania 7
function displayfourthQuestion7() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 4: Na klatce piersiowej zauważasz ranę penetrującą. Jak postępujesz?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Zakładam szczelny opatrunek, całkowicie zamykając ranę.', action: null },
        { text: 'B. Zakładam jałowy opatrunek zastawkowy (trzy strony zamknięte, jedna otwarta).', action: displayfivethQuestion7 },
        { text: 'C. Nie dotykam rany, aby uniknąć dodatkowego bólu poszkodowanego.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania PIĄTEGO pytania 7
function displayfivethQuestion7() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 5: Jak rozpoznasz, że doszło do odmy prężnej?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. A. Poszkodowany skarży się na nasilający się ból, widać asymetrię klatki piersiowej, dochodzi do narastającej duszności i sinicy.', action: displaysixthQuestion7 },
        { text: 'B. Poszkodowany odczuwa jedynie delikatny ból w miejscu uderzenia, ale oddycha normalnie.', action: null },
        { text: 'C. Poszkodowany nie ma żadnych widocznych objawów, ale skarży się na zawroty głowy.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania szóstego pytania 7
function displaysixthQuestion7() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 6: Poszkodowany traci przytomność. Jakie działanie podejmiesz w pierwszej kolejności?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Rozpoczynam resuscytację krążeniowo-oddechową (RKO).', action: displayseventhQuestion7 },
        { text: 'B. Kładę poszkodowanego na bok, aby ułatwić oddychanie.', action: null },
        { text: 'C. Staram się utrzymać poszkodowanego w pozycji siedzącej.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania siódmego pytania 7
function displayseventhQuestion7() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 7: Poszkodowany z raną klatki piersiowej zaczyna kaszleć krwią. Co to może oznaczać?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Uszkodzenie płuca lub dużych naczyń wewnętrznych.', action: null },
        { text: 'B. Tylko drobne obrażenia w okolicy nosa i gardła.', action: null },
        { text: 'C. Uszkodzenie płuca lub dużych naczyń wewnętrznych.', action: displayeighthQuestion7 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania ósmego pytania 7
function displayeighthQuestion7() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 8: Co robisz, jeśli podejrzewasz złamanie żeber, ale nie ma rany penetrującej?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Stosuję delikatny opatrunek uciskowy, aby unieruchomić klatkę piersiową.', action: null },
        { text: 'B. Staram się masować klatkę piersiową, aby złagodzić ból.', action: null },
        { text: 'C. Pozwalam poszkodowanemu swobodnie oddychać bez dodatkowego ucisku.', action: showSuccessMessage7 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania zielonego komunikatu i przycisku powrotu
function showSuccessMessage7() {
    const container = document.getElementById('container');

    // Usunięcie wszystkich dzieci z kontenera
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Dodanie zielonego komunikatu
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '24px';
    successMessage.style.color = 'green';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '30px';
    successMessage.textContent = 'Super! Wiesz jak reagować podczas obrazeń klatki Piersowej.';
    container.appendChild(successMessage);

    // Dodanie przycisku "Powrót"
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Powrót';
    returnButton.style.display = 'block';
    returnButton.style.margin = '30px auto';
    returnButton.style.padding = '10px 20px';
    returnButton.style.fontSize = '18px';
    returnButton.style.backgroundColor = '#007bff';
    returnButton.style.color = '#fff';
    returnButton.style.border = 'none';
    returnButton.style.borderRadius = '5px';
    returnButton.style.cursor = 'pointer';

    // Przypisanie działania przycisku "Powrót"
    returnButton.onclick = () => {
        resetToScenarioSelection();
    };
    container.appendChild(returnButton);
}

// Funkcja obsługująca klikniecie przycisku 8 "Obrażenia i podejrzenia obrażeń brzucha"
function onButtonClick8() {
    const container = document.getElementById('container');
    
    // Usuwamy wszystkie dzieci kontenera (czyli wszystkie elementy w kontenerze)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Tworzymy element na napis 
    const accidentMessage = document.createElement('div');
    accidentMessage.id = 'accident-message';
    accidentMessage.style.fontSize = '48px';
    accidentMessage.style.fontWeight = 'bold';
    accidentMessage.style.color = '#333';
    accidentMessage.style.textAlign = 'center';
    container.appendChild(accidentMessage);

    // Animujemy napis 
    typeText('accident-message', 'Upadek z wysokości i podejrzenie obrażeń brzucha', 100, () => {
        // Po animacji wyświetlamy opis sytuacji
        setTimeout(() => {
            const situationMessage = document.createElement('div');
            situationMessage.style.fontSize = '24px';
            situationMessage.style.color = '#333';
            situationMessage.style.textAlign = 'center';
            situationMessage.style.marginTop = '20px';
            situationMessage.textContent = 'Podczas pracy na drabinie osoba spadła z wysokości około dwóch metrów, uderzając o kant metalowego stołu w okolicy brzucha. Skarży się na silny ból w okolicy podbrzusza, ma trudności z poruszaniem się, a na ubraniu widoczna jest plama krwi. Poszkodowany jest blady, spocony, skarży się na nudności. Istnieje podejrzenie obrażeń wewnętrznych w obrębie jamy brzusznej. ';
            container.appendChild(situationMessage);

            // Wyświetlenie pytania po krótkim opóźnieniu
            setTimeout(displayfirstQuestion8, 2000); // Czekamy 2 sekundy przed wyświetleniem pytania
        }, 1000); // Czekamy 1 sekundę przed wyświetleniem opisu sytuacji
    });
}

// Funkcja do wyświetlania pierwszego pytania 8
function displayfirstQuestion8() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 1: Jaką pierwszą czynność wykonasz na miejscu zdarzenia?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Upewnię się, że miejsce zdarzenia jest bezpieczne, a następnie zbadam stan poszkodowanego.', action: displaySecondQuestion8 },
        { text: 'B. Położę poszkodowanego na plecach i natychmiast wezwę pomoc.', action: null },
        { text: 'C. Unieruchomię poszkodowanego i poczekam na przyjazd ratowników, nie badając jego stanu.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania drugiego pytania 8
function displaySecondQuestion8() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 2: Jak rozpoznasz poważne obrażenia jamy brzusznej?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Poszkodowany skarży się na ból brzucha, ma nudności, występuje twardość i napięcie w jamie brzusznej.', action: displaythirdQuestion8 },
        { text: 'B. Poszkodowany odczuwa jedynie delikatny ból w okolicy uderzenia.', action: null },
        { text: 'C. Poszkodowany porusza się swobodnie, mimo niewielkiego bólu.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania trzeciego pytania 8
function displaythirdQuestion8() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 3: Jak powinien być ułożony poszkodowany z podejrzeniem obrażeń brzucha?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. W pozycji leżącej z nogami uniesionymi do góry.', action: displayfourthquestion8 },
        { text: 'B. W pozycji na plecach z lekko ugiętymi kolanami.', action: null },
        { text: 'C. W pozycji półsiedzącej, aby zmniejszyć ucisk na jamę brzuszną.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania czwartego pytania 8
function displayfourthquestion8() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 4: Co robisz w przypadku, gdy z brzucha wystaje narząd wewnętrzny (np. jelito)?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Staram się delikatnie wprowadzić narząd z powrotem do jamy brzusznej.', action: null },
        { text: 'B. Zakrywam narząd wilgotnym, jałowym opatrunkiem i unieruchamiam go.', action: displayfivethquestion8 },
        { text: 'C. Pozostawiam narząd bez zabezpieczenia, aby uniknąć nacisku na niego.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania piątego pytania 8
function displayfivethquestion8() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 5: Kiedy należy wezwać pomoc medyczną?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A.  Jeśli ból brzucha nie ustępuje w ciągu kilku godzin.', action: null },
        { text: 'B. Dopiero gdy poszkodowany straci przytomność.', action: null },
        { text: 'C. Natychmiast, w każdej sytuacji podejrzenia obrażeń jamy brzusznej.', action: displaysixthquestion8 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania szóstego pytania 8
function displaysixthquestion8() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 6: Jakie objawy mogą wskazywać na wewnętrzny krwotok w jamie brzusznej?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Bladość, zimny pot, przyspieszony puls, spadek ciśnienia tętniczego.', action: displayseventhquestion8 },
        { text: 'B. Tylko ból brzucha i drobne otarcia.', action: null },
        { text: 'C. Zaczerwienienie skóry w okolicy brzucha i brak innych objawów.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania siódmego pytania 8
function displayseventhquestion8() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 7: Poszkodowany wymiotuje krwią. Co to może oznaczać?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Krwotok wewnętrzny w wyniku uszkodzenia żołądka lub innych narządów wewnętrznych.', action: displayeighthquestion8 },
        { text: 'B. Drobne obrażenia zewnętrzne, które nie są istotne.', action: null },
        { text: 'C. Niewielkie podrażnienie układu pokarmowego.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania ósmego pytania 8
function displayeighthquestion8() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 8: Jakich działań należy unikać w przypadku podejrzenia obrażeń brzucha?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Podawania jedzenia i picia.', action: showSuccessmessage8 },
        { text: 'B. Utrzymywania poszkodowanego w pozycji leżącej.', action: null },
        { text: 'C. Zakładania opatrunku na rany brzucha.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania zielonego komunikatu i przycisku powrotu 8
function showSuccessmessage8() {
    const container = document.getElementById('container');

    // Usunięcie wszystkich dzieci z kontenera
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Dodanie zielonego komunikatu
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '24px';
    successMessage.style.color = 'green';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '30px';
    successMessage.textContent = 'Super! Wiesz jak reagować podczas obrazeń brzucha.';
    container.appendChild(successMessage);

    // Dodanie przycisku "Powrót"
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Powrót';
    returnButton.style.display = 'block';
    returnButton.style.margin = '30px auto';
    returnButton.style.padding = '10px 20px';
    returnButton.style.fontSize = '18px';
    returnButton.style.backgroundColor = '#007bff';
    returnButton.style.color = '#fff';
    returnButton.style.border = 'none';
    returnButton.style.borderRadius = '5px';
    returnButton.style.cursor = 'pointer';

    // Przypisanie działania przycisku "Powrót"
    returnButton.onclick = () => {
        resetToScenarioSelection();
    };
    container.appendChild(returnButton);
}

// Funkcja obsługująca klikniecie przycisku 9 "Obrażenia i podejrzenia obrażeń brzucha"
function onButtonClick9() {
    const container = document.getElementById('container');
    
    // Usuwamy wszystkie dzieci kontenera (czyli wszystkie elementy w kontenerze)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Tworzymy element na napis 
    const accidentMessage = document.createElement('div');
    accidentMessage.id = 'accident-message';
    accidentMessage.style.fontSize = '48px';
    accidentMessage.style.fontWeight = 'bold';
    accidentMessage.style.color = '#333';
    accidentMessage.style.textAlign = 'center';
    container.appendChild(accidentMessage);

    // Animujemy napis 
    typeText('accident-message', 'Wypadek komunikacyjny i podejrzenie obrażeń miednicy', 100, () => {
        // Po animacji wyświetlamy opis sytuacji
        setTimeout(() => {
            const situationMessage = document.createElement('div');
            situationMessage.style.fontSize = '24px';
            situationMessage.style.color = '#333';
            situationMessage.style.textAlign = 'center';
            situationMessage.style.marginTop = '20px';
            situationMessage.textContent = 'Podczas wypadku samochodowego pasażer został uwięziony w pojeździe i wyciągnięty przez ratowników. Skarży się na silny ból w dolnej części pleców oraz biodrach, a każda próba ruchu powoduje nasilenie bólu. Poszkodowany jest blady, spocony i osłabiony. Nie widać otwartych ran, ale istnieje podejrzenie złamania miednicy i uszkodzenia narządów wewnętrznych. ';
            container.appendChild(situationMessage);

            // Wyświetlenie pytania po krótkim opóźnieniu
            setTimeout(displayfirstquestion9, 2000); // Czekamy 2 sekundy przed wyświetleniem pytania
        }, 1000); // Czekamy 1 sekundę przed wyświetleniem opisu sytuacji
    });
}

// Funkcja do wyświetlania pierwszego pytania 9
function displayfirstquestion9() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 1: Jakie są najczęstsze objawy sugerujące obrażenia miednicy?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Silny ból w dolnej części pleców, biodrach lub kroczu, niezdolność do poruszania kończynami dolnymi.', action: displaysecondquestion9 },
        { text: 'B. Delikatny ból brzucha i lekki dyskomfort przy poruszaniu się.', action: null },
        { text: 'C. Ból głowy i nudności.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania drugiego pytania 9
function displaysecondquestion9() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 2: Co robisz, jeśli podejrzewasz złamanie miednicy?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Utrzymuję poszkodowanego w pozycji leżącej i ograniczam jego ruchy.', action: displaythirdquestion9 },
        { text: 'B. Próbuję unieruchomić miednicę bandażami elastycznymi.', action: null },
        { text: 'C. Próbuję unieruchomić miednicę bandażami elastycznymi.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania trzeciego pytania 9
function displaythirdquestion9() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 3: Jak powinieneś ułożyć poszkodowanego z podejrzeniem obrażeń miednicy?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Na plecach, z nogami wyprostowanymi.', action: null },
        { text: 'B. Na plecach, z nogami lekko zgiętymi i podpartymi.', action: displayfourthquestion9 },
        { text: 'C. W pozycji bocznej, aby zapewnić wygodę.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania czwartego pytania 9
function displayfourthquestion9() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 4: Jakie jest największe zagrożenie przy obrażeniach miednicy?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Uraz psychiczny poszkodowanego.', action: null },
        { text: 'B. Krwotok wewnętrzny i uszkodzenie narządów wewnętrznych.', action: displayfivethquestion9 },
        { text: 'C. Utrata czucia w kończynach dolnych.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania piątego pytania 9
function displayfivethquestion9() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 5: Co robisz, jeśli poszkodowany ma objawy wstrząsu (bladość, zimny pot, szybkie tętno)?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Wezwę natychmiast pomoc medyczną i ułożę poszkodowanego w pozycji przeciwwstrząsowej.', action: displaysixthquestion9 },
        { text: 'B. Podam poszkodowanemu wodę, aby poprawić jego samopoczucie.', action: null },
        { text: 'C. Staram się rozmasować okolicę miednicy, aby poprawić krążenie.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania szóstego pytania 9
function displaysixthquestion9() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 6: Jeśli miednica jest niestabilna, co powinieneś zrobić?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Unieruchomić miednicę za pomocą specjalnej taśmy (np. pasa stabilizującego miednicę).', action: displayseventhquestion9 },
        { text: 'B. Nie podejmować żadnych działań, aby nie pogorszyć stanu poszkodowanego.', action: null },
        { text: 'C. Spróbować ustabilizować miednicę, przywiązując ją ciasno do nóg.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania siódmego pytania 9
function displayseventhquestion9() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 7: Jak rozpoznasz, że obrażenia miednicy mogą obejmować uszkodzenie pęcherza lub cewki moczowej?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Poszkodowany odczuwa silne pragnienie.', action: displayeighthquestion9 },
        { text: 'B. Poszkodowany nie może oddać moczu lub w moczu widać krew.', action: null },
        { text: 'C. Poszkodowany odczuwa jedynie ból w biodrze.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania ósmego pytania 9
function displayeighthquestion9() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 8: Co robisz, jeśli poszkodowany jest przytomny, ale wyraźnie zdenerwowany i chce się poruszyć?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Pozwalam mu się poruszyć, aby uniknąć dodatkowego stresu.', action: showsuccessmessage9 },
        { text: 'B. Uspokajam go, ograniczam jego ruchy i tłumaczę, dlaczego musi pozostać nieruchomy.', action: null },
        { text: 'C. Staram się unieruchomić go siłą, jeśli nie współpracuje.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania zielonego komunikatu i przycisku powrotu 9
function showsuccessmessage9() {
    const container = document.getElementById('container');

    // Usunięcie wszystkich dzieci z kontenera
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Dodanie zielonego komunikatu
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '24px';
    successMessage.style.color = 'green';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '30px';
    successMessage.textContent = 'Super! Wiesz jak reagować podczas obrazeń miednicy.';
    container.appendChild(successMessage);

    // Dodanie przycisku "Powrót"
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Powrót';
    returnButton.style.display = 'block';
    returnButton.style.margin = '30px auto';
    returnButton.style.padding = '10px 20px';
    returnButton.style.fontSize = '18px';
    returnButton.style.backgroundColor = '#007bff';
    returnButton.style.color = '#fff';
    returnButton.style.border = 'none';
    returnButton.style.borderRadius = '5px';
    returnButton.style.cursor = 'pointer';

    // Przypisanie działania przycisku "Powrót"
    returnButton.onclick = () => {
        resetToScenarioSelection();
    };
    container.appendChild(returnButton);
}

// Funkcja obsługująca klikniecie przycisku 10 "Obrażenia i podejrzenia obrażeń narzódu ruchu"
function onButtonClick10() {
    const container = document.getElementById('container');
    
    // Usuwamy wszystkie dzieci kontenera (czyli wszystkie elementy w kontenerze)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Tworzymy element na napis 
    const accidentMessage = document.createElement('div');
    accidentMessage.id = 'accident-message';
    accidentMessage.style.fontSize = '48px';
    accidentMessage.style.fontWeight = 'bold';
    accidentMessage.style.color = '#333';
    accidentMessage.style.textAlign = 'center';
    container.appendChild(accidentMessage);

    // Animujemy napis 
    typeText('accident-message', 'Upadek z wysokości i podejrzenie obrażeń narządu ruchu', 100, () => {
        // Po animacji wyświetlamy opis sytuacji
        setTimeout(() => {
            const situationMessage = document.createElement('div');
            situationMessage.style.fontSize = '24px';
            situationMessage.style.color = '#333';
            situationMessage.style.textAlign = 'center';
            situationMessage.style.marginTop = '20px';
            situationMessage.textContent = 'Poszkodowany spadł z wysokości około 3 metrów podczas pracy na budowie. Po upadku skarży się na silny ból w nodze i stawie barkowym. Kończyna dolna jest ustawiona w nienaturalnej pozycji, a w okolicy barku występuje obrzęk. Poszkodowany ma trudności z poruszaniem się i odczuwa intensywny ból przy próbie poruszania nogą. Ponadto, w okolicy stawu barkowego pojawiło się zasinienie.';
            container.appendChild(situationMessage);

            // Wyświetlenie pytania po krótkim opóźnieniu
            setTimeout(displayfirstquestion10, 2000); // Czekamy 2 sekundy przed wyświetleniem pytania
        }, 1000); // Czekamy 1 sekundę przed wyświetleniem opisu sytuacji
    });
}

// Funkcja do wyświetlania pierwszego pytania 10
function displayfirstquestion10() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 1: Jakie mogą być objawy sugerujące złamanie kości w obrębie kończyny dolnej?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Wzmożona tkliwość przy ucisku, zasinienie i obrzęk, zniekształcenie kończyny, niemożność poruszania stawem.', action: displaysecondquestion10 },
        { text: 'B. Ból w obrębie kości, ale brak widocznych objawów na skórze.', action: null },
        { text: 'C. Ból w okolicy kości, uczucie ciepła i świądu w miejscu urazu.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania drugiego pytania 10
function displaysecondquestion10() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 2: Jakie ryzyko stwarza manipulacja kończyną przy podejrzeniu złamania?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Zwiększenie ryzyka powstania dodatkowych obrażeń mięśni i tkanek miękkich.', action: null },
        { text: 'B. Zwiększenie ryzyka pogłębienia obrażeń stawów i uszkodzeń naczyń krwionośnych, pogorszenie obrażeń wewnętrznych.', action: displaythirdquestion10 },
        { text: 'C. Zwiększenie ryzyka dehydratacji organizmu i osłabienie sił życiowych.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania trzeciego pytania 10
function displaythirdquestion10() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 3: W jakiej sytuacji unieruchomienie kończyny jest szczególnie niezbędne w przypadku złamań?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Kiedy nie występuje zniekształcenie kończyny, ale ból jest intensywny.', action: null },
        { text: 'B. Kiedy występuje zniekształcenie kończyny, nawet jeśli brak jest bólu.', action: null },
        { text: 'C. W przypadku otwartego złamania, szczególnie przy widocznej kości, w celu zapobiegania infekcji.', action: displayfourthquestion10 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania czwartego pytania 10
function displayfourthquestion10() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 4: Co zrobić, jeśli poszkodowany ma widoczne objawy złamania kości, ale zachowało się pełne czucie i ruchomość w stawie?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Kontynuuję oceny kliniczne i pozostawiam poszkodowanego w spoczynku, czekając na pomoc medyczną.', action: null },
        { text: 'B. Próbuję ustabilizować staw w jak najdogodniejszej pozycji, by zmniejszyć ból i poprawić komfort poszkodowanego.', action: null },
        { text: 'C. Podejmuję decyzję o natychmiastowej reanimacji, gdyż jest to stan zagrażający życiu.', action: displayfivethquestion10 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania piątego pytania 10
function displayfivethquestion10() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 5: Jakie działania powinno się podjąć w przypadku urazu kręgosłupa przy obrażeniu kończyny?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Ustalamy, czy poszkodowany odczuwa ból w obrębie szyi, klatki piersiowej lub kręgosłupa i unieruchamiamy go w tej pozycji.', action: displaysixthquestion10 },
        { text: 'B. Podnosimy poszkodowanego do pozycji siedzącej, aby ocenić jego zdolność do poruszania się.', action: null },
        { text: 'C. Nie podejmujemy żadnych działań, ponieważ uszkodzenie kręgosłupa nie wpływa na obrażenia kończyn.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania szóstego pytania 10
function displaysixthquestion10() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 6: Jakie objawy wskazują na możliwość uszkodzenia więzadeł lub ścięgien, a nie złamania kości?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Ból ograniczony do jednego miejsca, obrzęk w obrębie stawu, niestabilność stawu przy próbie ruchu', action: displayseventhquestion10 },
        { text: 'B. Zniekształcenie kości, zasinienie i niemożność poruszania stawem.', action: null },
        { text: 'C. Ból w okolicy kości, ale brak ograniczenia ruchomości stawu.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania siódmego pytania 10
function displayseventhquestion10() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 7: Co zrobić, jeśli poszkodowany ma objawy podejrzenia złamania biodra, ale nie wykazuje objawów wstrząsu?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Natychmiast ułożyć poszkodowanego w pozycji leżącej, unieruchomić kończynę dolną, czekać na przyjazd karetki.', action: displayeighthquestion10 },
        { text: 'B. Umożliwić poszkodowanemu poruszanie kończyną, aby upewnić się, że nie ma złamania.', action: null },
        { text: 'C. Wykonać prostą manipulację w celu ustawienia kończyny w prawidłowej pozycji.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania ósmego pytania 10
function displayeighthquestion10() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 8: Jakie jest największe niebezpieczeństwo związane z otwartym złamaniem kości w obrębie kończyny dolnej?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Ryzyko infekcji rany i uszkodzenia naczyń krwionośnych.', action: showsuccessmessage10 },
        { text: 'B. Ryzyko wstrząsu spowodowanego dużą utratą krwi.', action: null },
        { text: 'C. Ryzyko obrzęku i bólu w okolicy rany.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania zielonego komunikatu i przycisku powrotu 10
function showsuccessmessage10() {
    const container = document.getElementById('container');

    // Usunięcie wszystkich dzieci z kontenera
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Dodanie zielonego komunikatu
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '24px';
    successMessage.style.color = 'green';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '30px';
    successMessage.textContent = 'Super! Wiesz jak reagować podczas obrazeń narządu ruchu.';
    container.appendChild(successMessage);

    // Dodanie przycisku "Powrót"
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Powrót';
    returnButton.style.display = 'block';
    returnButton.style.margin = '30px auto';
    returnButton.style.padding = '10px 20px';
    returnButton.style.fontSize = '18px';
    returnButton.style.backgroundColor = '#007bff';
    returnButton.style.color = '#fff';
    returnButton.style.border = 'none';
    returnButton.style.borderRadius = '5px';
    returnButton.style.cursor = 'pointer';

    // Przypisanie działania przycisku "Powrót"
    returnButton.onclick = () => {
        resetToScenarioSelection();
    };
    container.appendChild(returnButton);
}

// Funkcja obsługująca klikniecie przycisku 11 "Wysoka temperatura i oparzenia"
function onButtonClick11() {
    const container = document.getElementById('container');
    
    // Usuwamy wszystkie dzieci kontenera (czyli wszystkie elementy w kontenerze)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Tworzymy element na napis 
    const accidentMessage = document.createElement('div');
    accidentMessage.id = 'accident-message';
    accidentMessage.style.fontSize = '48px';
    accidentMessage.style.fontWeight = 'bold';
    accidentMessage.style.color = '#333';
    accidentMessage.style.textAlign = 'center';
    container.appendChild(accidentMessage);

    // Animujemy napis 
    typeText('accident-message', 'Kontakt z wysoką temperaturą i oparzenie', 100, () => {
        // Po animacji wyświetlamy opis sytuacji
        setTimeout(() => {
            const situationMessage = document.createElement('div');
            situationMessage.style.fontSize = '24px';
            situationMessage.style.color = '#333';
            situationMessage.style.textAlign = 'center';
            situationMessage.style.marginTop = '20px';
            situationMessage.textContent = 'oszkodowany podczas pracy przy piecu hutniczym dotknął rozgrzanej metalowej powierzchni. Doznał poparzenia dłoni, które objawia się zaczerwienieniem, obrzękiem i obecnością pęcherzy na skórze. Narzeka na silny ból i pieczenie. W pobliżu nie ma dostępu do profesjonalnego zestawu pierwszej pomocy, ale dostępna jest zimna woda i czysta odzież.';
            container.appendChild(situationMessage);

            // Wyświetlenie pytania po krótkim opóźnieniu
            setTimeout(displayfirstquestion11, 2000); // Czekamy 2 sekundy przed wyświetleniem pytania
        }, 1000); // Czekamy 1 sekundę przed wyświetleniem opisu sytuacji
    });
}

// Funkcja do wyświetlania pierwszego pytania 11
function displayfirstquestion11() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 1: Co powinno być pierwszym działaniem w przypadku oparzenia termicznego?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Schłodzenie miejsca oparzenia zimną wodą przez co najmniej 10–15 minut.', action: displaysecondquestion11 },
        { text: 'B. Zastosowanie maści na oparzenia bezpośrednio na skórę.', action: null },
        { text: 'C. Nałożenie wilgotnego opatrunku, aby natychmiast zabezpieczyć miejsce oparzenia.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania drugiego pytania 11
function displaysecondquestion11() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 2: Jak postąpić z pęcherzami, które powstały w wyniku oparzenia?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Przebić je sterylną igłą, aby zapobiec dalszemu obrzękowi.', action: null },
        { text: 'B. Pozostawić je nietknięte, ponieważ chronią głębsze warstwy skóry przed zakażeniem.', action: displaythirdquestion11 },
        { text: 'C. Nałożyć opatrunek uciskowy, aby zapobiec ich pęknięciu.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania trzeciego pytania 11
function displaythirdquestion11() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 3: Jakie są kluczowe objawy oparzenia drugiego stopnia?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Zaczerwienienie skóry, ból i pęcherze z przejrzystym płynem surowiczym.', action: displayfourthquestion11 },
        { text: 'B. Całkowity brak bólu i martwica tkanek.', action: null },
        { text: 'C. Silne zaczerwienienie, obrzęk, ale brak pęcherzy.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania czwartego pytania 11
function displayfourthquestion11() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 4: Jakie działanie jest nieprawidłowe w przypadku pierwszej pomocy przy oparzeniu?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Zastosowanie zimnej wody do schłodzenia miejsca oparzenia.', action: null },
        { text: 'B. Nałożenie tłuszczu lub masła na miejsce oparzenia, aby złagodzić ból.', action: displayfivethquestion11 },
        { text: 'C. Osłonięcie oparzenia sterylnym, wilgotnym opatrunkiem po schłodzeniu.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania piątego pytania 11
function displayfivethquestion11() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 5: Co należy zrobić, jeśli poszkodowany z poważnym oparzeniem wykazuje objawy wstrząsu?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Schłodzić całe ciało zimną wodą, aby zapobiec dalszemu rozwojowi wstrząsu.', action: null },
        { text: 'B. Ułożyć go w pozycji leżącej z uniesionymi nogami i zabezpieczyć przed utratą ciepła.', action: displaysixthquestion11 },
        { text: 'C. Nie podejmować żadnych działań i czekać na przyjazd służb medycznych.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania szóstego pytania 11
function displaysixthquestion11() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 6: Dlaczego stosowanie lodu na oparzenie jest niewskazane?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Może spowodować dalsze uszkodzenie tkanek i wychłodzenie skóry.', action: displayseventhquestion11 },
        { text: 'B. Może wywołać alergię', action: null },
        { text: 'C. Nie jest skuteczne w zmniejszaniu bólu oparzenia.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania siódmego pytania 11
function displayseventhquestion11() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 7: Jakie działanie jest wskazane przy dużym oparzeniu obejmującym ponad 10% powierzchni ciała?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Natychmiastowe nałożenie kremu na oparzenia, aby złagodzić ból.', action: null },
        { text: 'B. Przykrycie całego ciała wilgotnym prześcieradłem, aby schłodzić większy obszar skóry.', action: null },
        { text: 'C. Schłodzenie tylko miejsca oparzenia przez krótki czas, by uniknąć wychłodzenia organizmu.', action: displayeighthquestion11 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania ósmego pytania 11
function displayeighthquestion11() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 8: Kiedy oparzenie wymaga natychmiastowego kontaktu z lekarzem?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Gdy powierzchnia oparzenia przekracza 1% powierzchni ciała.', action: null },
        { text: 'B. Gdy występuje oparzenie twarzy, dłoni, stóp lub dróg oddechowych.', action: showSuccessMessage11 },
        { text: 'C. Gdy poszkodowany odczuwa ból, ale nie występują pęcherze.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania zielonego komunikatu i przycisku powrotu 10
function showSuccessMessage11() {
    const container = document.getElementById('container');

    // Usunięcie wszystkich dzieci z kontenera
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Dodanie zielonego komunikatu
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '24px';
    successMessage.style.color = 'green';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '30px';
    successMessage.textContent = 'Super! Wiesz jak reagować podczas oparzeń.';
    container.appendChild(successMessage);

    // Dodanie przycisku "Powrót"
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Powrót';
    returnButton.style.display = 'block';
    returnButton.style.margin = '30px auto';
    returnButton.style.padding = '10px 20px';
    returnButton.style.fontSize = '18px';
    returnButton.style.backgroundColor = '#007bff';
    returnButton.style.color = '#fff';
    returnButton.style.border = 'none';
    returnButton.style.borderRadius = '5px';
    returnButton.style.cursor = 'pointer';

    // Przypisanie działania przycisku "Powrót"
    returnButton.onclick = () => {
        resetToScenarioSelection();
    };
    container.appendChild(returnButton);
}

// Funkcja obsługująca klikniecie przycisku 12 "Wysoka temperatura i oparzenia"
function onButtonClick12() {
    const container = document.getElementById('container');
    
    // Usuwamy wszystkie dzieci kontenera (czyli wszystkie elementy w kontenerze)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Tworzymy element na napis 
    const accidentMessage = document.createElement('div');
    accidentMessage.id = 'accident-message';
    accidentMessage.style.fontSize = '48px';
    accidentMessage.style.fontWeight = 'bold';
    accidentMessage.style.color = '#333';
    accidentMessage.style.textAlign = 'center';
    container.appendChild(accidentMessage);

    // Animujemy napis 
    typeText('accident-message', 'Zatrucie wziewne w zamkniętym pomieszczeniu', 100, () => {
        // Po animacji wyświetlamy opis sytuacji
        setTimeout(() => {
            const situationMessage = document.createElement('div');
            situationMessage.style.fontSize = '24px';
            situationMessage.style.color = '#333';
            situationMessage.style.textAlign = 'center';
            situationMessage.style.marginTop = '20px';
            situationMessage.textContent = 'W niewentylowanym garażu, gdzie pracuje uruchomiony silnik spalinowy, przebywa osoba. Po około 15 minutach poszkodowany zaczyna odczuwać zawroty głowy, nudności i osłabienie. Osoba wychodzi z garażu, ale wkrótce traci przytomność na świeżym powietrzu. W pobliżu znajduje się świadek zdarzenia, który wzywa pomoc.';
            container.appendChild(situationMessage);

            // Wyświetlenie pytania po krótkim opóźnieniu
            setTimeout(displayfirstquestion12, 2000); // Czekamy 2 sekundy przed wyświetleniem pytania
        }, 1000); // Czekamy 1 sekundę przed wyświetleniem opisu sytuacji
    });
}

// Funkcja do wyświetlania pierwszego pytania 12
function displayfirstquestion12() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 1: Co powinien zrobić świadek w pierwszej kolejności, widząc osobę, która straciła przytomność po opuszczeniu zadymionego pomieszczenia?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Położyć poszkodowanego w pozycji bezpiecznej i wezwać pomoc medyczną.', action: displaysecondquestion12 },
        { text: 'B. Rozpocząć resuscytację krążeniowo-oddechową (RKO).', action: null },
        { text: 'C. Wprowadzić poszkodowanego z powrotem do garażu, by upewnić się, że miejsce zdarzenia jest bezpieczne.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania drugiego pytania 12
function displaysecondquestion12() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 2: Jakie substancje najprawdopodobniej były przyczyną zatrucia w tym zdarzeniu?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Tlenek węgla (CO), gaz bezbarwny i bezwonny.', action: displaythirdquestion12 },
        { text: 'B. Dwutlenek siarki (SO₂), gaz o ostrym zapachu.', action: null },
        { text: 'C. Chlor (Cl₂), gaz o intensywnym zapachu.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania trzeciego pytania 12
function displaythirdquestion12() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 3: Jakie są pierwsze objawy zatrucia tlenkiem węgla?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Kaszel, bóle brzucha i biegunka.', action: null },
        { text: 'B. Zawroty głowy, osłabienie, nudności.', action: displayfourthquestion12 },
        { text: 'C. Ostry ból gardła, łzawienie i duszności.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania czwartego pytania 12
function displayfourthquestion12() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 4: Co zrobić, jeśli poszkodowany przestaje oddychać przed przyjazdem służb ratunkowych?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Pozostawić go w pozycji bezpiecznej i czekać na pomoc.', action: null },
        { text: 'B. Rozpocząć resuscytację krążeniowo-oddechową (RKO) od 30 uciśnięć klatki piersiowej.', action: displayfivethquestion12 },
        { text: 'C. Przenieść poszkodowanego z powrotem do miejsca zdarzenia, aby zebrać więcej informacji dla ratowników.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania piątego pytania 12
function displayfivethquestion12() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 5: Jaki jest mechanizm działania tlenku węgla na organizm?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Powoduje podrażnienie płuc i kaszel poprzez działanie drażniące.', action: null },
        { text: 'B. Blokuje hemoglobinę, ograniczając transport tlenu do tkanek.', action: displaysixthquestion12 },
        { text: 'C. Wprowadza nadmiar tlenu do krwi, powodując hipoksję.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania szóstego pytania 12
function displaysixthquestion12() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 6: Jakie urządzenie może pomóc w uniknięciu podobnych zdarzeń w przyszłości?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Czujnik dymu.', action: null },
        { text: 'B. Czujnik tlenku węgla (CO).', action: displayseventhquestion12 },
        { text: 'C. Higrometr, miernik wilgotności powietrza.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania siedem pytania 12
function displayseventhquestion12() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 7: Jak należy postąpić, jeśli poszkodowany oddycha, ale wykazuje objawy ciężkiego zatrucia, takie jak dezorientacja lub sinica?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Zapewnić dostęp do świeżego powietrza i monitorować jego stan do przyjazdu pomocy.', action: displayeighthquestion12 },
        { text: 'B. Podać poszkodowanemu dużą ilość wody do picia.', action: null },
        { text: 'C. Zastosować zimne okłady na klatkę piersiową, aby obniżyć ciśnienie.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania ósmego pytania 12
function displayeighthquestion12() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 8: W jaki sposób lekarze w szpitalu leczą ciężkie zatrucie tlenkiem węgla?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Podają antybiotyki i leki przeciwbólowe.', action: null },
        { text: 'B. Stosują tlenoterapię w komorze hiperbarycznej.', action: showsuccessmessage12 },
        { text: 'C. Podają środki chemiczne neutralizujące tlenek węgla.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania zielonego komunikatu i przycisku powrotu 12
function showsuccessmessage12() {
    const container = document.getElementById('container');

    // Usunięcie wszystkich dzieci z kontenera
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Dodanie zielonego komunikatu
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '24px';
    successMessage.style.color = 'green';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '30px';
    successMessage.textContent = 'Super! Wiesz jak reagować podczas zatrucia';
    container.appendChild(successMessage);

    // Dodanie przycisku "Powrót"
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Powrót';
    returnButton.style.display = 'block';
    returnButton.style.margin = '30px auto';
    returnButton.style.padding = '10px 20px';
    returnButton.style.fontSize = '18px';
    returnButton.style.backgroundColor = '#007bff';
    returnButton.style.color = '#fff';
    returnButton.style.border = 'none';
    returnButton.style.borderRadius = '5px';
    returnButton.style.cursor = 'pointer';

    // Przypisanie działania przycisku "Powrót"
    returnButton.onclick = () => {
        resetToScenarioSelection();
    };
    container.appendChild(returnButton);
}

// Funkcja obsługująca klikniecie przycisku 13 "Toniecie"
function onButtonClick13() {
    const container = document.getElementById('container');
    
    // Usuwamy wszystkie dzieci kontenera (czyli wszystkie elementy w kontenerze)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Tworzymy element na napis 
    const accidentMessage = document.createElement('div');
    accidentMessage.id = 'accident-message';
    accidentMessage.style.fontSize = '48px';
    accidentMessage.style.fontWeight = 'bold';
    accidentMessage.style.color = '#333';
    accidentMessage.style.textAlign = 'center';
    container.appendChild(accidentMessage);

    // Animujemy napis 
    typeText('accident-message', 'Tonięcie w jeziorze', 100, () => {
        // Po animacji wyświetlamy opis sytuacji
        setTimeout(() => {
            const situationMessage = document.createElement('div');
            situationMessage.style.fontSize = '24px';
            situationMessage.style.color = '#333';
            situationMessage.style.textAlign = 'center';
            situationMessage.style.marginTop = '20px';
            situationMessage.textContent = 'Podczas letniego wypoczynku nad jeziorem grupa znajomych zauważyła, że jeden z uczestników kąpieli oddalił się od brzegu. W pewnym momencie osoba ta zaczęła gwałtownie machać rękami, krztusić się i wzywać pomocy. Po kilku chwilach zniknęła pod wodą. Jeden z obserwatorów, który nie jest wykwalifikowanym ratownikiem, postanowił pomóc. Wyciągnął poszkodowanego na brzeg, gdzie osoba leży nieprzytomna i nie oddycha.';
            container.appendChild(situationMessage);

            // Wyświetlenie pytania po krótkim opóźnieniu
            setTimeout(displayfirstquestion13, 2000); // Czekamy 2 sekundy przed wyświetleniem pytania
        }, 1000); // Czekamy 1 sekundę przed wyświetleniem opisu sytuacji
    });
}

// Funkcja do wyświetlania pierwszego pytania 13
function displayfirstquestion13() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 1: Co powinien zrobić świadek zdarzenia po wyciągnięciu tonącego na brzeg?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Zacząć od masażu serca, bez sprawdzania oddechu.', action: null },
        { text: 'B. Rozpocząć resuscytację krążeniowo-oddechową (RKO).', action: null },
        { text: 'C. Sprawdzić, czy poszkodowany oddycha, i wezwać pomoc medyczną.', action: displaysecondquestion13 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania drugiego pytania 13
function displaysecondquestion13() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 2: Jakie kroki należy podjąć, jeśli poszkodowany nie oddycha?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Ułożyć poszkodowanego na boku i poczekać na przyjazd ratowników.', action: null },
        { text: 'B. Położyć poszkodowanego na brzuchu, aby woda wyciekła z dróg oddechowych, i dopiero potem rozpocząć RKO.', action: null },
        { text: 'C. Rozpocząć resuscytację krążeniowo-oddechową (RKO) od 30 uciśnięć klatki piersiowej i 2 wdechów.', action: displaythirdquestion13 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania trzeciego pytania 13
function displaythirdquestion13() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 3: Co zrobić, jeśli poszkodowany zaczął oddychać po RKO?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Kontynuować uciski klatki piersiowej, aby wzmocnić krążenie.', action: null },
        { text: 'B. Pozostawić poszkodowanego w tej samej pozycji i zająć się innymi obowiązkami.', action: null },
        { text: 'C. Ułożyć poszkodowanego w pozycji bezpiecznej i monitorować jego oddech.', action: displayfourthquestion13 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania czwartego pytania 13
function displayfourthquestion13() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 4: Dlaczego przy tonącym należy unikać bezpośredniego kontaktu w wodzie, jeśli nie jest się ratownikiem?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Próbując ratować, można utrudnić dostęp ratownikom.', action: null },
        { text: 'B. Kontakt z tonącym może spowodować zakażenie bakteryjne.', action: null },
        { text: 'C. Tonący może wciągnąć ratującego pod wodę, powodując podwójne zagrożenie.', action: displayfivethquestion13 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania piątego pytania 13
function displayfivethquestion13() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 5: Jak najlepiej pomóc tonącemu, jeśli znajduje się w wodzie, a ratujący nie ma kwalifikacji ratowniczych?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Wskoczyć do wody i podpłynąć, by pomóc mu utrzymać się na powierzchni.', action: null },
        { text: 'B. Wezwać innych świadków do wspólnej akcji w wodzie.', action: null },
        { text: 'C. Podać przedmiot unoszący się na wodzie, np. linę, deskę lub koło ratunkowe, i spróbować go wyciągnąć na brzeg.', action: displaysixthquestion13 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania szóstego pytania 13
function displaysixthquestion13() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 6: Co zrobić, jeśli w trakcie RKO poszkodowany zacznie wymiotować?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Przerwać RKO i zaczekać, aż przestanie wymiotować.', action: null },
        { text: 'B. Obrócić poszkodowanego na bok i zakończyć działania ratownicze.', action: null },
        { text: 'C. Oczyścić drogi oddechowe i kontynuować resuscytację.', action: displayseventhquestion13 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania siódmego pytania 13
function displayseventhquestion13() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 7: Jakie są typowe objawy wtórnego utonięcia, które mogą wystąpić po uratowaniu tonącego?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Gorączka, wysypka skórna i ból gardła.', action: null },
        { text: 'B. Zawroty głowy, krwotok z nosa, drgawki.', action: null },
        { text: 'C. Kaszel, trudności w oddychaniu, osłabienie.', action: displayeighthquestion13 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania ósmego pytania 13
function displayeighthquestion13() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 8: Co jest kluczowe podczas rozmowy z dyspozytorem pogotowia, gdy zgłaszasz przypadek tonięcia?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Podanie danych osobowych poszkodowanego i historii medycznej.', action: null },
        { text: 'B. Szczegółowe opisanie, co poszkodowany robił przed wypadkiem.', action: null },
        { text: 'C. Podanie lokalizacji zdarzenia i stanu poszkodowanego (np. nieprzytomny, brak oddechu).', action: showsuccessmessage13 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania zielonego komunikatu i przycisku powrotu 10
function showsuccessmessage13() {
    const container = document.getElementById('container');

    // Usunięcie wszystkich dzieci z kontenera
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Dodanie zielonego komunikatu
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '24px';
    successMessage.style.color = 'green';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '30px';
    successMessage.textContent = 'Super! Wiesz jak reagować podczas toniecia ';
    container.appendChild(successMessage);

    // Dodanie przycisku "Powrót"
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Powrót';
    returnButton.style.display = 'block';
    returnButton.style.margin = '30px auto';
    returnButton.style.padding = '10px 20px';
    returnButton.style.fontSize = '18px';
    returnButton.style.backgroundColor = '#007bff';
    returnButton.style.color = '#fff';
    returnButton.style.border = 'none';
    returnButton.style.borderRadius = '5px';
    returnButton.style.cursor = 'pointer';

    // Przypisanie działania przycisku "Powrót"
    returnButton.onclick = () => {
        resetToScenarioSelection();
    };
    container.appendChild(returnButton);
}

// Funkcja obsługująca klikniecie przycisku 13 "Toniecie"
function onButtonClick14() {
    const container = document.getElementById('container');
    
    // Usuwamy wszystkie dzieci kontenera (czyli wszystkie elementy w kontenerze)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Tworzymy element na napis 
    const accidentMessage = document.createElement('div');
    accidentMessage.id = 'accident-message';
    accidentMessage.style.fontSize = '48px';
    accidentMessage.style.fontWeight = 'bold';
    accidentMessage.style.color = '#333';
    accidentMessage.style.textAlign = 'center';
    container.appendChild(accidentMessage);

    // Animujemy napis 
    typeText('accident-message', 'Wychłodzenie w lesie podczas zimowego biwaku', 100, () => {
        // Po animacji wyświetlamy opis sytuacji
        setTimeout(() => {
            const situationMessage = document.createElement('div');
            situationMessage.style.fontSize = '24px';
            situationMessage.style.color = '#333';
            situationMessage.style.textAlign = 'center';
            situationMessage.style.marginTop = '20px';
            situationMessage.textContent = 'Podczas zimowego biwaku w lesie jedna z osób z grupy traci orientację w czasie powrotu do obozowiska. Po kilkugodzinnych poszukiwaniach odnaleziono ją w stanie znacznego wychłodzenia: poszkodowany jest blady, osłabiony, trzęsie się z zimna i ma problemy z mówieniem. Świadkowie sytuacji muszą działać, aby uratować jego życie. W pobliżu nie ma bezpośredniego dostępu do służb ratunkowych.';
            container.appendChild(situationMessage);

            // Wyświetlenie pytania po krótkim opóźnieniu
            setTimeout(displayFirstQuestion14, 2000); // Czekamy 2 sekundy przed wyświetleniem pytania
        }, 1000); // Czekamy 1 sekundę przed wyświetleniem opisu sytuacji
    });
}

// Funkcja do wyświetlania pierwszego pytania 14
function displayFirstQuestion14() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 1: Jaki jest pierwszy krok, który należy podjąć, widząc osobę z objawami wychłodzenia?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Zdjąć mokre ubrania i ogrzać poszkodowanego.', action: null },
        { text: 'B. Podać gorący napój i zostawić poszkodowanego, aby odpoczął.', action: null },
        { text: 'C. Przenieść poszkodowanego w cieplejsze miejsce i wezwać pomoc medyczną.', action: displaysecondquestion14 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania drugiego pytania 14
function displaysecondquestion14() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 2: Co jest szczególnie niebezpieczne w przypadku ciężkiego wychłodzenia?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Nagłe przegrzanie organizmu w wyniku intensywnego ogrzewania.', action: null },
        { text: 'B. Brak bólu, który mógłby ostrzec o uszkodzeniach skóry.', action: null },
        { text: 'C. Ryzyko zatrzymania akcji serca z powodu obniżenia temperatury ciała.', action: displaythirdquestion14 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania drugiego pytania 14
function displaythirdquestion14() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 3: Jak najlepiej ogrzewać osobę wychłodzoną?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Przez ogrzewanie od wewnątrz ciepłymi płynami i od zewnątrz kocami lub folią NRC.', action: displayfourthquestion14 },
        { text: 'B. Przez masowanie kończyn w celu poprawy krążenia.', action: null },
        { text: 'C. Przez szybkie ogrzewanie w gorącej kąpieli.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania czwartego pytania 14
function displayfourthquestion14() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 4: Co zrobić, jeśli poszkodowany jest nieprzytomny, ale oddycha?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Pozostawić go w pozycji leżącej na plecach.', action: null },
        { text: 'B. Ułożyć w pozycji bezpiecznej i zabezpieczyć przed dalszym wychłodzeniem.', action: displayfivethquestion14 },
        { text: 'C. Rozpocząć resuscytację krążeniowo-oddechową (RKO).', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania piątego pytania 14
function displayfivethquestion14() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 5: Jakie są charakterystyczne objawy umiarkowanego wychłodzenia?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Trudności w oddychaniu i utrata czucia w kończynach.', action: null },
        { text: 'B. Długotrwałe drżenie mięśni, apatia, splątanie.', action: null },
        { text: 'C. Zatrzymanie oddechu i sinica skóry.', action: displaysixthquestion14 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania szóstego pytania 14
function displaysixthquestion14() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 6: Dlaczego nie należy intensywnie rozmasowywać kończyn wychłodzonej osoby?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Może to spowodować poważne uszkodzenie mięśni.', action: null },
        { text: 'B. Intensywne masowanie może przemieścić zimną krew z kończyn do serca, powodując jego zatrzymanie.', action: displayseventhquestion14 },
        { text: 'C. Masaż zwiększa ryzyko odmrożeń na masowanych obszarach.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania siódmego pytania 14
function displayseventhquestion14() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 7: Jakie napoje są odpowiednie dla osoby z wychłodzeniem?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Gorące, słodkie napoje, takie jak herbata z miodem.', action: displayeighthquestion14 },
        { text: 'B. Alkohol, który poprawia krążenie i uczucie ciepła.', action: null },
        { text: 'C. Chłodne napoje, aby uniknąć szoku termicznego.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania siódmego pytania 14
function displayeighthquestion14() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 8: Jakie środki zapobiegawcze można podjąć, aby uniknąć wychłodzenia w takich warunkach?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Używanie wilgotnych ubrań, aby poprawić izolację cieplną.', action: null },
        { text: 'B. Ubieranie się warstwowo, zabezpieczanie się przed wilgocią i wiatrem.', action: showSuccessMessage14 },
        { text: 'C. Ograniczenie ruchu, aby oszczędzać energię i nie wychładzać organizmu.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania zielonego komunikatu i przycisku powrotu 14
function showSuccessMessage14() {
    const container = document.getElementById('container');

    // Usunięcie wszystkich dzieci z kontenera
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Dodanie zielonego komunikatu
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '24px';
    successMessage.style.color = 'green';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '30px';
    successMessage.textContent = 'Super! Wiesz jak reagować podczas wychłodzenia';
    container.appendChild(successMessage);

    // Dodanie przycisku "Powrót"
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Powrót';
    returnButton.style.display = 'block';
    returnButton.style.margin = '30px auto';
    returnButton.style.padding = '10px 20px';
    returnButton.style.fontSize = '18px';
    returnButton.style.backgroundColor = '#007bff';
    returnButton.style.color = '#fff';
    returnButton.style.border = 'none';
    returnButton.style.borderRadius = '5px';
    returnButton.style.cursor = 'pointer';

    // Przypisanie działania przycisku "Powrót"
    returnButton.onclick = () => {
        resetToScenarioSelection();
    };
    container.appendChild(returnButton);
}

// Funkcja obsługująca klikniecie przycisku 15 "Zaburzenia krążeniowo-oddechowe w stanach nieurazowych"
function onButtonClick15() {
    const container = document.getElementById('container');
    
    // Usuwamy wszystkie dzieci kontenera (czyli wszystkie elementy w kontenerze)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Tworzymy element na napis 
    const accidentMessage = document.createElement('div');
    accidentMessage.id = 'accident-message';
    accidentMessage.style.fontSize = '48px';
    accidentMessage.style.fontWeight = 'bold';
    accidentMessage.style.color = '#333';
    accidentMessage.style.textAlign = 'center';
    container.appendChild(accidentMessage);

    // Animujemy napis 
    typeText('accident-message', 'Nagłe zatrzymanie krążenia w domu', 100, () => {
        // Po animacji wyświetlamy opis sytuacji
        setTimeout(() => {
            const situationMessage = document.createElement('div');
            situationMessage.style.fontSize = '24px';
            situationMessage.style.color = '#333';
            situationMessage.style.textAlign = 'center';
            situationMessage.style.marginTop = '20px';
            situationMessage.textContent = 'Podczas rodzinnego spotkania jedna z osób nagle upada na podłogę. Poszkodowany nie reaguje na próby nawiązania kontaktu i nie wykazuje oznak oddychania. W pobliżu nie ma AED. Pozostali członkowie rodziny, którzy nie mają dużego doświadczenia w udzielaniu pierwszej pomocy, muszą podjąć działania, aby uratować życie tej osoby.';
            container.appendChild(situationMessage);

            // Wyświetlenie pytania po krótkim opóźnieniu
            setTimeout(displayFirstQuestion15, 2000); // Czekamy 2 sekundy przed wyświetleniem pytania
        }, 1000); // Czekamy 1 sekundę przed wyświetleniem opisu sytuacji
    });
}

// Funkcja do wyświetlania pierwszego pytania 15
function displayFirstQuestion15() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 1: Co należy zrobić w pierwszej kolejności po stwierdzeniu braku reakcji i oddechu u poszkodowanego?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Rozpocząć uciskanie klatki piersiowej.', action: null },
        { text: 'B. Upewnić się, że miejsce zdarzenia jest bezpieczne, wezwać pomoc i rozpocząć uciskanie klatki piersiowej.', action: displaySecondQuestion15 },
        { text: 'C. Obrócić poszkodowanego na bok, aby zapobiec zadławieniu.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania drugiego pytania 15
function displaySecondQuestion15() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 2: Jakie jest prawidłowe tempo ucisków klatki piersiowej podczas RKO?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Około 50 ucisków na minutę.', action: null },
        { text: 'B. Około 100-120 ucisków na minutę.', action: displayThirdQuestion15 },
        { text: 'C. Około 150-180 ucisków na minutę.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania drugiego pytania 15
function displayThirdQuestion15() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 3: Jaką głębokość powinny osiągać uciski klatki piersiowej u dorosłego?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Około 1-2 cm.', action: null },
        { text: 'B. Około 5-6 cm.', action: displayfourthQuestion15 },
        { text: 'C. Na wyczucie.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania czwartego pytania 15
function displayfourthQuestion15() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 4: Co zrobić, jeśli podczas uciskania klatki piersiowej usłyszy się dźwięk przypominający trzask?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Natychmiast przerwać resuscytację i czekać na pomoc medyczną.', action: null },
        { text: 'B. Kontynuować uciskanie klatki piersiowej, zgodnie z wytycznymi.', action: displayfivethQuestion15 },
        { text: 'C. Obrócić poszkodowanego na bok i sprawdzić jego oddech.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania piątego pytania 15
function displayfivethQuestion15() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 5: Jak postąpić, jeśli poszkodowany zaczyna oddychać podczas resuscytacji?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Natychmiast przerwać RKO, ułożyć poszkodowanego w pozycji bezpiecznej i monitorować jego stan.', action: displaysixthquestion15 },
        { text: 'B. Kontynuować uciski klatki piersiowej przez kolejne 2 minuty, aby upewnić się, że jego serce działa.', action: null },
        { text: 'C. Pozostawić poszkodowanego w tej samej pozycji i zaczekać na przyjazd ratowników.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania szóstego pytania 15
function displaysixthquestion15() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 6: Co należy zrobić, jeśli do dyspozycji jest AED?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Zastosować AED dopiero po 5 minutach od rozpoczęcia RKO.', action: null },
        { text: 'B. Natychmiast podłączyć AED i postępować zgodnie z jego instrukcjami głosowymi.', action: displayseventhquestion15 },
        { text: 'C. Użyć AED tylko wtedy, gdy poszkodowany zacznie oddychać.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania siódmego pytania 15
function displayseventhquestion15() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 7: Jak długo należy prowadzić RKO?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Do momentu przyjazdu ratowników medycznych lub odzyskania oddechu przez poszkodowanego.', action: displayeighthquestion15 },
        { text: 'B. Przez maksymalnie 10 minut, aby uniknąć zmęczenia ratującego.', action: null },
        { text: 'C. Do czasu, aż poszkodowany odzyska świadomość.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania ósmego pytania 15
function displayeighthquestion15() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 8: Jakie są objawy wskazujące na możliwe zatrzymanie krążenia?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Sinica, brak reakcji na bodźce, brak oddechu.', action: showSuccessMessage15 },
        { text: 'B. Wysoka gorączka, drżenie mięśni, splątanie.', action: null },
        { text: 'C. Nagły ból w klatce piersiowej, obfite pocenie, szybki oddech.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania zielonego komunikatu i przycisku powrotu 15
function showSuccessMessage15() {
    const container = document.getElementById('container');

    // Usunięcie wszystkich dzieci z kontenera
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Dodanie zielonego komunikatu
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '24px';
    successMessage.style.color = 'green';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '30px';
    successMessage.textContent = 'Super! Wiesz jak reagować podczas zatrzymania krążenia';
    container.appendChild(successMessage);

    // Dodanie przycisku "Powrót"
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Powrót';
    returnButton.style.display = 'block';
    returnButton.style.margin = '30px auto';
    returnButton.style.padding = '10px 20px';
    returnButton.style.fontSize = '18px';
    returnButton.style.backgroundColor = '#007bff';
    returnButton.style.color = '#fff';
    returnButton.style.border = 'none';
    returnButton.style.borderRadius = '5px';
    returnButton.style.cursor = 'pointer';

    // Przypisanie działania przycisku "Powrót"
    returnButton.onclick = () => {
        resetToScenarioSelection();
    };
    container.appendChild(returnButton);
}

// Funkcja obsługująca klikniecie przycisku 15 "Zaburzenia krążeniowo-oddechowe w stanach nieurazowych"
function onButtonClick16() {
    const container = document.getElementById('container');
    
    // Usuwamy wszystkie dzieci kontenera (czyli wszystkie elementy w kontenerze)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Tworzymy element na napis 
    const accidentMessage = document.createElement('div');
    accidentMessage.id = 'accident-message';
    accidentMessage.style.fontSize = '48px';
    accidentMessage.style.fontWeight = 'bold';
    accidentMessage.style.color = '#333';
    accidentMessage.style.textAlign = 'center';
    container.appendChild(accidentMessage);

    // Animujemy napis 
    typeText('accident-message', 'Kobieta w ciąży w stanie nagłego zagrożenia życia', 100, () => {
        // Po animacji wyświetlamy opis sytuacji
        setTimeout(() => {
            const situationMessage = document.createElement('div');
            situationMessage.style.fontSize = '24px';
            situationMessage.style.color = '#333';
            situationMessage.style.textAlign = 'center';
            situationMessage.style.marginTop = '20px';
            situationMessage.textContent = 'Podczas spaceru w parku kobieta w zaawansowanej ciąży nagle traci przytomność. Na miejscu znajduje się jej partner, który zauważa, że kobieta nie reaguje na bodźce i ma trudności z oddychaniem. Jej brzuch jest twardy, a skóra blada, co może sugerować stan zagrożenia. W pobliżu nie ma profesjonalnych służb medycznych, a kobieta wydaje się być w 7-8 miesiącu ciąży.';
            container.appendChild(situationMessage);

            // Wyświetlenie pytania po krótkim opóźnieniu
            setTimeout(displayFirstQuestion16, 2000); // Czekamy 2 sekundy przed wyświetleniem pytania
        }, 1000); // Czekamy 1 sekundę przed wyświetleniem opisu sytuacji
    });
}

// Funkcja do wyświetlania pierwszego pytania 15
function displayFirstQuestion16() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 1: Co powinieneś zrobić w pierwszej kolejności, widząc kobietę w ciąży, która straciła przytomność?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Natychmiast spróbować przywrócić jej przytomność przez potrząsanie.', action: null },
        { text: 'B. Upewnić się, że miejsce jest bezpieczne, i wezwać pomoc medyczną.', action: displaySecondQuestion16 },
        { text: 'C. Zastosować sztuczne oddychanie i uciski klatki piersiowej.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania drugiego pytania 15
function displaySecondQuestion16() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 2: Jakie powinny być pierwsze działania ratownicze, jeśli poszkodowana nie oddycha, a serce nie bije?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Rozpocząć resuscytację krążeniowo-oddechową (RKO), nie martwiąc się o stan ciąży.', action: null },
        { text: 'B. Wykonać 30 ucisków na klatce piersiowej, a następnie 2 oddechy ratunkowe.', action: null },
        { text: 'C. Zastosować RKO, pamiętając o unikalnych zasadach, takich jak unikanie uciskania dolnej części brzucha.', action: displayThirdQuestion16 }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania drugiego pytania 15
function displayThirdQuestion16() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 3: Jeśli kobieta w ciąży ma trudności z oddychaniem, co należy zrobić?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Ułożyć ją w pozycji siedzącej, by pomóc w oddychaniu.', action: displayfourthQuestion16 },
        { text: 'B. Ułożyć ją na plecach, z nogami uniesionymi.', action: null },
        { text: 'C. Ułożyć ją na boku i monitorować oddech, aby uniknąć aspiracji.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania czwartego pytania 15
function displayfourthQuestion16() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 4: W przypadku zatrzymania akcji serca u kobiety w ciąży, co należy zrobić z jej brzuchem?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Ustawić ją w pozycji leżącej na plecach i kontynuować standardową resuscytację.', action: null },
        { text: 'B. Delikatnie przechylić ją na bok, aby uniknąć ucisku na żyłę główną.', action: displayfivethQuestion16 },
        { text: 'C. Wykonać RKO, kładąc jedną rękę na brzuchu, aby chronić płód.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania piątego pytania 15
function displayfivethQuestion16() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 5: Co należy zrobić, jeśli po 2 minutach resuscytacji nie widać poprawy?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Kontynuować resuscytację do momentu przyjazdu służb medycznych.', action: displaysixthquestion16 },
        { text: 'B. Zatrzymać RKO i czekać na przyjazd karetki.', action: null },
        { text: 'C. Rozpocząć reanimację na przemian z oddechami i uciskami klatki piersiowej, ale przerwać co 5 minut na odpoczynek.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania szóstego pytania 15
function displaysixthquestion16() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 6: Co zrobić, jeśli kobieta zaczyna krwawić po utracie przytomności?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Zastosować opatrunek uciskowy na brzuch.', action: null },
        { text: 'B. Delikatnie unikać manipulacji przy brzuchu i zastosować opatrunek uciskowy na zewnętrzne krwawiące rany.', action: displayseventhquestion16 },
        { text: 'C. Rozpocząć masaż brzucha, aby zapobiec krwawieniu.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania siódmego pytania 15
function displayseventhquestion16() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 7: Jakie objawy mogą sugerować zagrożenie życia kobiety w ciąży poza utratą przytomności?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Bóle brzucha, zawroty głowy, silne krwawienie z dróg rodnych.', action: displayeighthquestion16 },
        { text: 'B. Silne bóle głowy, zaczerwienienie skóry, gorączka.', action: null },
        { text: 'C. Uczucie zimna, drżenie mięśni, nudności.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania ósmego pytania 15
function displayeighthquestion16() {
    const container = document.getElementById('container');

    // Dodajemy pytanie
    const question = document.createElement('div');
    question.style.fontSize = '20px';
    question.style.color = '#333';
    question.style.textAlign = 'center';
    question.style.marginTop = '30px';
    question.textContent = 'Pytanie 8: Jakie środki zapobiegawcze należy podjąć, aby zmniejszyć ryzyko wypadków u kobiet w ciąży?';
    container.appendChild(question);

    // Opcje odpowiedzi
    const answers = [
        { text: 'A. Regularnie kontrolować ciśnienie krwi i unikać wysiłku fizycznego.', action: showSuccessMessage16 },
        { text: 'B. Unikać długich spacerów, aby nie narazić się na zmęczenie.', action: null },
        { text: 'C. Regularnie przeprowadzać konsultacje medyczne, przestrzegać zaleceń lekarza i unikać stresujących sytuacji.', action: null }
    ];

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.style.fontSize = '18px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '20px';
        button.style.margin = '10px';
        button.style.backgroundColor = 'white';
        button.style.border = '2px solid black';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';
        button.textContent = answer.text;

        // Obsługa kliknięcia odpowiedzi
        button.onclick = () => {
            if (answer.action) answer.action();
        };
        container.appendChild(button);
    });
}

// Funkcja do wyświetlania zielonego komunikatu i przycisku powrotu 15
function showSuccessMessage16() {
    const container = document.getElementById('container');

    // Usunięcie wszystkich dzieci z kontenera
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Dodanie zielonego komunikatu
    const successMessage = document.createElement('div');
    successMessage.style.fontSize = '24px';
    successMessage.style.color = 'green';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '30px';
    successMessage.textContent = 'Super! Wiesz jak reagować podczas ratowania kobity w ciąży';
    container.appendChild(successMessage);

    // Dodanie przycisku "Powrót"
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Powrót';
    returnButton.style.display = 'block';
    returnButton.style.margin = '30px auto';
    returnButton.style.padding = '10px 20px';
    returnButton.style.fontSize = '18px';
    returnButton.style.backgroundColor = '#007bff';
    returnButton.style.color = '#fff';
    returnButton.style.border = 'none';
    returnButton.style.borderRadius = '5px';
    returnButton.style.cursor = 'pointer';

    // Przypisanie działania przycisku "Powrót"
    returnButton.onclick = () => {
        resetToScenarioSelection();
    };
    container.appendChild(returnButton);
}
// Inicjalizacja gry
function startGame() {
    typeText(
        "welcome-message",
        "Witam w Scenariuszach Pierwszej Pomocy, stworzonej przez studentów Akademii Pożarniczej",
        100,
        () => {
            typeText("welcome-message2", "Pora wybrać scenariusz:", 100, () => {
                showActionButton(); // Pokazanie przycisku po zakończeniu animacji "Pora..."
            });
        }
    );
}

// Wyświetlenie przycisku po zakończeniu animacji
function showActionButton() {
    const chooseScenario = document.getElementById("choose-scenario");

    // Wyświetl scenariusze
    chooseScenario.style.display = "block";
}

// Uruchomienie gry po załadowaniu strony
document.addEventListener("DOMContentLoaded", startGame);

// Funkcja resetująca bez animacji powitalnych
function resetToScenarioSelection() {
    const container = document.getElementById('container');

    // Usunięcie istniejącej zawartości kontenera
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Wyświetlenie listy scenariuszy
    const welcomeMessage = document.createElement('div');
    welcomeMessage.id = 'welcome-message';
    welcomeMessage.style.fontSize = '24px';
    welcomeMessage.style.color = '#333';
    welcomeMessage.style.textAlign = 'center';
    welcomeMessage.style.marginBottom = '20px';
    welcomeMessage.textContent = 'Pora wybrać scenariusz:';
    container.appendChild(welcomeMessage);

    const chooseScenario = document.createElement('div');
    chooseScenario.id = 'choose-scenario';
    chooseScenario.style.textAlign = 'center';

    const scenarios = [
        { text: 'Sekwencja medycznych działań ratowniczych', action: onButtonClick1 },
        { text: 'Postępowanie w zatrzymaniu krążenia', action: onButtonClick2 },
        { text: 'Wstrząs', action: onButtonClick3 },
        { text: 'Rany i amputacja urazowa', action: onButtonClick4 },
		{ text: 'Obrażenia i podejrzenia obrażeń głowy', action: onButtonClick5 },
		{ text: 'Obrażenia i podejrzenia obrażeń kręgosłupa', action: onButtonClick6 },
		{ text: 'Obrażenia i podejrzenia obrażeń klatki Piersowej', action: onButtonClick7 },
		{ text: 'Obrażenia i podejrzenia obrażeń Brzucha', action: onButtonClick8 },
		{ text: 'Obrażenia i podejrzenia obrażeń Miednicy', action: onButtonClick9 },
		{ text: 'Obrażenia i podejrzenia obrażeń narządu ruchu', action: onButtonClick10 },
		{ text: 'Działanie wysokiej temperatury, oparzenia', action: onButtonClick11 },
		{ text: 'Chemiczne, zatrucie wziewne i porażenie prądem elektrycznym', action: onButtonClick12 },
		{ text: 'Toniecie', action: onButtonClick13 },
		{ text: 'wychłodzenie', action: onButtonClick14 },
		{ text: 'Zaburzenia krążeniowo-oddechowe w stanach nieurazowych', action: onButtonClick15 },
		{ text: 'Kobieta w widocznej ciąży w stanie nagłego zagrożenia życia/zdrowia.', action: onButtonClick16 }
    ];

    scenarios.forEach(scenario => {
        const button = document.createElement('button');
        button.textContent = scenario.text;
        button.style.display = 'block';
        button.style.margin = '10px auto';
        button.style.padding = '10px 20px';
        button.style.fontSize = '18px';
        button.style.background = 'linear-gradient(90deg, #007BFF, #00CFFF)'; // Gradient na tle przycisku
        button.style.color = '#fff';
        button.style.border = '1px solid black';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
		button.style.color = 'black'; 
        button.onclick = scenario.action;
        chooseScenario.appendChild(button);
    });
	

    container.appendChild(chooseScenario);
}


// Tworzymy serwer WebSocket na porcie 8081
const server = new WebSocket.Server({ port: 105 });