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

    boldKey.textContent = infoKey; // create a bold "key"
    // if the description matching the (bold)key is empty, set description to empty string
    // else, add a colon and space before the description
    normValue.textContent = description.length > 0 ? `: ${description}` : '';

    // append the key and description to the list of program details
    list.appendChild(boldKey);
    list.appendChild(normValue);
    (num === 1 ? progOneList : progTwoList).appendChild(list);
}

// Helper async function to dynamically generate and display
// data/information on the user's selected program(s)
const fetchProgData = async (num, cegepId, program) => {
    // fetch and wait for data from the JSON file of the selected CEGEP
    const request = new Request(`https://cw118.github.io/quetudesinfo/compare-programs/programs/${cegepId}.json`);
    console.log(request);
    const response = await fetch(request);
    const programs = await response.json();

    // fetch data for the selected program of the selected CEGEP
    let progData = programs[program];

    for (const key of Object.keys(progData)) {
        if (key === 'Program Grid') {
            // Special case, the 'Program Grid' key has a value of another JSON object
            progGrid = progData[key]; // "sub"-JSON object with data related to program grid

            const subTitle = document.createElement('p');
            subTitle.style.fontSize = '19px';
            subTitle.style.textDecoration = 'underline';
            subTitle.style.marginTop = '12px';
            subTitle.style.marginBottom = '6px';
            subTitle.textContent = 'Program Grid'; // add a "Program Grid" subtitle
            (num === 1 ? progOneList : progTwoList).appendChild(subTitle);

            // call helper function to generate and append details/info
            // related to the program grid of the selected program
            for (const subKey of Object.keys(progGrid)) {
                let description = progGrid[subKey];
                generateInfoList(num, subKey, description);
            }

        } else {
            // usual case, just generate a list item for each key/value pair
            // since the value isn't a JSON object like 'Program Grid'
            let description = progData[key];
            generateInfoList(num, key, description);
        }
    }
}

cegep1.addEventListener('change', () => {
    const cegepOne = document.querySelector('#cegep1'); // <select> for cegep 1
    const cegepOneId = cegepOne.value; // CEGEP 'id' used to name each CEGEP's JSON file
    const cegepName1 = document.querySelector('#cegep-name1'); // title with CEGEP name
    const program1 = document.querySelector('#program1'); // input element for program 1

    // set CEGEP name title to the text of the selected CEGEP
    cegepName1.textContent = cegepOne.options[cegepOne.selectedIndex].textContent;
    program1.removeAttribute('readonly'); // allow user to select a program
    program1.placeholder = "Type or select a program";
    program1.setAttribute('list', cegepOneId); // link the program <select> to the
                                               // datalist for the selected CEGEP

    program1.addEventListener('change', () => {
        progOneList.textContent = ''; // clear the program information lists
        let programOne = program1.value; // save the program name

        // create and append the program name as a title
        const title = document.createElement('p');
        title.style.fontSize = '21px';
        title.style.fontWeight = 'bold';
        title.style.textDecoration = 'underline';
        title.textContent = programOne;
        progOneList.appendChild(title);
        
        // remove spaces and characters from program name to be the same format as
        // the JSON title (e.g. 'Health Science' is 'HealthScience' in the JSON)
        let program = programOne.replace(/ \(.+\)/, '').replace(/[ ,\-\&:]/g, '');

        // pass num of 1 (CEGEP 1), the ID of the CEGEP (used to name each JSON file),
        // the program name as formatted in the JSON file
        fetchProgData(1, cegepOneId, program);
    });
});

// see the cegep1 event listener for comments/explanations
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
        
        let program = programTwo.replace(/ \(.+\)/, '').replace(/[ ,\-\&:]/g, '');

        fetchProgData(2, cegepTwoId, program);
    });
});
