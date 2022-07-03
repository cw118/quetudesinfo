// Dependent dropdown/datalist and dynamic program descriptions

// Global elements for functions/event listeners
const cegep1 = document.querySelector('#cegep1');
const cegep2 = document.querySelector('#cegep2');
const progOneList = document.querySelector('#program-grid1');
const progTwoList = document.querySelector('#program-grid2');

// Small helper function to create/append elements
const generateInfoList = (num, infoKey, infoDesc) => {
    const list = document.createElement('li');
    const boldKey = document.createElement('strong');
    const normValue = document.createElement('span');

    let description = infoDesc;

    boldKey.textContent = infoKey;
    normValue.textContent = description.length > 0 ? `: ${description}` : '';

    list.appendChild(boldKey);
    list.appendChild(normValue);
    (num === 1 ? progOneList : progTwoList).appendChild(list);
}

// Helper async function to dynamically generate and display
// data/information on the user's selected program(s)
const fetchProgData = async (num, cegepId, program) => {
    const request = new Request(`programs/${cegepId}.json`);
    const response = await fetch(request);
    const programs = await response.json();
    let progData = programs[program];

    for (const key of Object.keys(progData)) {
        if (key === 'Program Grid') {
            progGrid = progData[key];

            const subTitle = document.createElement('p');
            subTitle.style.fontSize = '19px';
            subTitle.style.textDecoration = 'underline';
            subTitle.style.marginTop = '12px';
            subTitle.style.marginBottom = '6px';
            subTitle.textContent = 'Program Grid';
            (num === 1 ? progOneList : progTwoList).appendChild(subTitle);

            for (const subKey of Object.keys(progGrid)) {
                let description = progGrid[subKey];
                generateInfoList(num, subKey, description);
            }

        } else {
            let description = progData[key];
            generateInfoList(num, key, description);
        }
    }
}

cegep1.addEventListener('change', () => {
    const cegepOne = document.querySelector('#cegep1');
    const cegepOneId = cegepOne.value;
    const cegepName1 = document.querySelector('#cegep-name1');
    const program1 = document.querySelector('#program1');

    cegepName1.textContent = cegepOne.options[cegepOne.selectedIndex].textContent;
    program1.removeAttribute('readonly');
    program1.placeholder = "Type or select a program";
    program1.setAttribute('list', cegepOneId);

    program1.addEventListener('change', () => {
        progOneList.textContent = '';
        let programOne = program1.value;

        const title = document.createElement('p');
        title.style.fontSize = '21px';
        title.style.fontWeight = 'bold';
        title.style.textDecoration = 'underline';
        title.textContent = programOne;
        progOneList.appendChild(title);
        
        let program = programOne.replace(/ \(.+\)/, '').replace(/[ ,-]/g, '');

        fetchProgData(1, cegepOneId, program);
    });
});

cegep2.addEventListener('change', () => {
    const cegepTwo = document.querySelector('#cegep2');
    const cegepTwoId = cegepTwo.value;
    const cegepName2 = document.querySelector('#cegep-name2');
    const program2 = document.querySelector('#program2');

    cegepName2.textContent = cegepTwo.options[cegepTwo.selectedIndex].textContent;
    program2.removeAttribute('readonly');
    program2.placeholder = "Type or select a program";
    program2.setAttribute('list', cegepTwoId);

    program2.addEventListener('change', () => {
        progTwoList.textContent = '';
        let programTwo = program2.value;

        const title = document.createElement('p');
        title.style.fontSize = '21px';
        title.style.fontWeight = 'bold';
        title.style.textDecoration = 'underline';
        title.textContent = programTwo;
        progTwoList.appendChild(title);
        
        let program = programTwo.replace(/ \(.+\)/, '').replace(/[ ,-]/g, '');

        fetchProgData(2, cegepTwoId, program);
    });
});