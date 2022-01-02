// Dependent dropdown/datalist and dynamic program descriptions
let cegep1 = document.querySelector('#cegep1');

cegep1.addEventListener('change', () => {
    let cegepOne = document.querySelector('#cegep1').value;
    let cegepName1 = document.querySelector('#cegep-name1');
    let program1 = document.querySelector('#program1');
    let programGrid1 = document.querySelector('#program-grid1');
    programGrid1.src = '../assets/blank.png';
    programGrid1.style.boxShadow = 'none';

    if (cegepOne === 'marianopolis') {
        program1.removeAttribute('readonly');
        program1.placeholder = "Type or select a program";
        program1.setAttribute('list', 'mari-programs');
        cegepName1.innerHTML = 'Marianopolis College';

        program1.addEventListener('change', () => {
            let programOne = document.querySelector('#program1').value;

            if (programOne === 'Arts and Sciences') {
                programGrid1.src = '../assets/marianopolis/mari-artsandscience.png';
                programGrid1.alt = 'Marianopolis Arts and Science program grid';
            }
            else if (programOne === 'Arts, Literature, and Communication') {
                programGrid1.src = '../assets/marianopolis/mari-alc.png';
                programGrid1.alt = 'Marianopolis Arts, Literature, and Communication program grid';
            }
            else if (programOne === 'Liberal Arts') {
                programGrid1.src = '../assets/marianopolis/mari-liberalarts.png';
                programGrid1.alt = 'Marianopolis Liberal Arts program grid';
            }
            else if (programOne === 'Music') {
                programGrid1.src = '../assets/marianopolis/mari-music.png';
                programGrid1.alt = 'Marianopolis Music program grid';
            }
            else if (programOne === 'Music and ALC') {
                programGrid1.src = '../assets/marianopolis/mari-musicandalc.png';
                programGrid1.alt = 'Marianopolis Music and ALC program grid';
            }
            else if (programOne === 'Music and Science') {
                programGrid1.src = '../assets/marianopolis/mari-musicandscience.png';
                programGrid1.alt = 'Marianopolis Music and Science program grid';
            }
            else if (programOne === 'Music and Social Science') {
                programGrid1.src = '../assets/marianopolis/mari-musicandsocialscience.png';
                programGrid1.alt = 'Marianopolis Music and Social Science program grid';
            }
            else if (programOne === 'Health Science') {
                programGrid1.src = '../assets/marianopolis/mari-healthscience.png';
                programGrid1.alt = 'Marianopolis Health Science program grid';
            }
            else if (programOne === 'Pure and Applied Science') {
                programGrid1.src = '../assets/marianopolis/mari-pureandappliedscience.png';
                programGrid1.alt = 'Marianopolis Pure and Applied Science program grid';
            }
            else if (programOne === 'Honours Science') {
                programGrid1.src = '../assets/marianopolis/mari-honoursscience.png';
                programGrid1.alt = 'Marianopolis Honours Science program grid';
            }
            else if (programOne === 'General Social Science') {
                programGrid1.src = '../assets/marianopolis/mari-generalsocialscience.png';
                programGrid1.alt = 'Marianopolis General Social Science program grid';
            }
            else if (programOne === 'Honours Social Science') {
                programGrid1.src = '../assets/marianopolis/mari-honourssocialscience.png';
                programGrid1.alt = 'Marianopolis Honours Social Science program grid';
            }
            else if (programOne === 'Commerce') {
                programGrid1.src = '../assets/marianopolis/mari-commerce.png';
                programGrid1.alt = 'Marianopolis Commerce program grid';
            }
            else if (programOne === 'Honours Commerce') {
                programGrid1.src = '../assets/marianopolis/mari-honourscommerce.png';
                programGrid1.alt = 'Marianopolis Honours Commerce program grid';
            }
            else if (programOne === 'Math and Finance') {
                programGrid1.src = '../assets/marianopolis/mari-mathandfinance.png';
                programGrid1.alt = 'Marianopolis Math and Finance program grid';
            }
            else if (programOne === 'Social Science Two-Math') {
                programGrid1.src = '../assets/marianopolis/mari-socialsciencetwomath.png';
                programGrid1.alt = 'Marianopolis Social Science Two-Math program grid';
            }
            else if (programOne === 'Law, Society and Justice') {
                programGrid1.src = '../assets/marianopolis/mari-lawsocietyandjustice.png';
                programGrid1.alt = 'Marianopolis Law, Society and Justice program grid';
            }
            else if (programOne === 'Global Studies and International Affairs') {
                programGrid1.src = '../assets/marianopolis/mari-globalstudies.png';
                programGrid1.alt = 'Marianopolis Global Studies and International Affairs program grid';
            }
            else if (programOne === 'Psychology') {
                programGrid1.src = '../assets/marianopolis/mari-psychology.png';
                programGrid1.alt = 'Marianopolis Psychology program grid';
            }
            programGrid1.style.boxShadow = '0px 4px 16px 5px #002966';
        });

    }
    else if (cegepOne === 'dawson') {
        program1.removeAttribute('readonly');
        program1.placeholder = "Type or select a program";
        program1.setAttribute('list', 'dawson-programs');
        cegepName1.innerHTML = 'Dawson College';

        program1.addEventListener('change', () => {
            let programOne = document.querySelector('#program1').value;
            let programGrid1 = document.querySelector('#program-grid1');

            if (programOne === 'Arts and Culture') {
                programGrid1.src = '../assets/dawson/dawson-artsandculture.png';
                programGrid1.alt = 'Dawson Arts and Culture program grid';
            }
            else if (programOne === 'Cinema-Communications') {
                programGrid1.src = '../assets/dawson/dawson-cinemacommunications.png';
                programGrid1.alt = 'Dawson Cinema-Communications program grid';
            }
            else if (programOne === 'Interactive Media Arts') {
                programGrid1.src = '../assets/dawson/dawson-interactivemediaarts.png';
                programGrid1.alt = 'Dawson Interactive Media Arts program grid';
            }
            else if (programOne === 'Languages') {
                programGrid1.src = '../assets/dawson/dawson-languages.png';
                programGrid1.alt = 'Dawson Languages program grid';
            }
            else if (programOne === 'Literature') {
                programGrid1.src = '../assets/dawson/dawson-literature.png';
                programGrid1.alt = 'Dawson Literature program grid';
            }
            else if (programOne === 'Studio Arts') {
                programGrid1.src = '../assets/dawson/dawson-studioarts.png';
                programGrid1.alt = 'Dawson Studio Arts program grid';
            }
            else if (programOne === 'Visual Arts') {
                programGrid1.src = '../assets/dawson/dawson-visualarts.png';
                programGrid1.alt = 'Dawson Visual Arts program grid';
            }
            else if (programOne === 'Liberal Arts') {
                programGrid1.src = '../assets/dawson/dawson-liberalarts.png';
                programGrid1.alt = 'Dawson Liberal Arts program grid';
            }
            else if (programOne === 'General Studies (Social Science)') {
                programGrid1.src = '../assets/dawson/dawson-generalstudies.png';
                programGrid1.alt = 'Dawson Social Science, General Studies program grid';
            }
            else if (programOne === 'Commerce') {
                programGrid1.src = '../assets/dawson/dawson-commerce.png';
                programGrid1.alt = 'Dawson Commerce program grid';
            }
            else if (programOne === 'Child Studies') {
                programGrid1.src = '../assets/dawson/dawson-childstudies.png';
                programGrid1.alt = 'Dawson Child Studies program grid';
            }
            else if (programOne === 'Environmental Studies') {
                programGrid1.src = '../assets/dawson/dawson-environmentalstudies.png';
                programGrid1.alt = 'Dawson Environmental Studies program grid';
            }
            else if (programOne === 'International Business Studies') {
                programGrid1.src = '../assets/dawson/dawson-internationalbusiness.png';
                programGrid1.alt = 'Dawson International Business Studies program grid';
            }
            else if (programOne === 'Law, Society and Justice') {
                programGrid1.src = '../assets/dawson/dawson-lawsocietyandjustice.png';
                programGrid1.alt = 'Dawson Law, Society and Justice program grid';
            }
            else if (programOne === 'North-South Studies') {
                programGrid1.src = '../assets/dawson/dawson-northsouthstudies.png';
                programGrid1.alt = 'Dawson North-South Studies program grid';
            }
            else if (programOne === 'Psychology') {
                programGrid1.src = '../assets/dawson/dawson-psychology.png';
                programGrid1.alt = 'Dawson Psychology program grid';
            }
            else if (programOne === 'Travel & Tourism') {
                programGrid1.src = '../assets/dawson/dawson-travelandtourism.png';
                programGrid1.alt = 'Dawson Travel and Tourism program grid';
            }
            else if (programOne === 'Health Science') {
                programGrid1.src = '../assets/dawson/dawson-healthscience.png';
                programGrid1.alt = 'Dawson Health Science program grid';
            }
            else if (programOne === 'Pure and Applied Science') {
                programGrid1.src = '../assets/dawson/dawson-pureandappliedscience.png';
                programGrid1.alt = 'Dawson Pure and Applied Science program grid';
            }
            else if (programOne === 'Environmental Science') {
                programGrid1.src = '../assets/dawson/dawson-environmentalscience.png';
                programGrid1.alt = 'Dawson Environmental Science program grid';
            }
            else if (programOne === 'Enriched Science') {
                programGrid1.src = '../assets/dawson/dawson-enrichedscience.png';
                programGrid1.alt = 'Dawson Enriched Science program information and program grid redirection';
            }
            programGrid1.style.boxShadow = '0px 4px 16px 5px #002966';
        });
    }
    else if (cegepOne === 'vanier') {
        program1.removeAttribute('readonly');
        program1.placeholder = "Type or select a program";
        program1.setAttribute('list', 'vanier-programs');
        cegepName1.innerHTML = 'Vanier College';

        program1.addEventListener('change', () => {
            let programOne = document.querySelector('#program1').value;
            let programGrid1 = document.querySelector('#program-grid1');

            if (programOne === 'Communications, Media and Studio Arts') {
                programGrid1.src = '../assets/vanier/vanier-communications.png';
                programGrid1.alt = 'Vanier Communications, Media and Studio Arts program grid';
            }
            else if (programOne === 'Languages and Cultures') {
                programGrid1.src = '../assets/vanier/vanier-languagesandcultures.png';
                programGrid1.alt = 'Vanier Languages and Cultures program grid';
            }
            else if (programOne === 'Liberal Arts') {
                programGrid1.src = '../assets/vanier/vanier-liberalarts.png';
                programGrid1.alt = 'Vanier Liberal Arts program grid';
            }
            else if (programOne === 'Music') {
                programGrid1.src = '../assets/vanier/vanier-music.png';
                programGrid1.alt = 'Vanier Music program grid';
            }
            else if (programOne === 'Languages and Cultures and Music') {
                programGrid1.src = '../assets/vanier/vanier-languagesandculturesandmusic.png';
                programGrid1.alt = 'Vanier Languages and Cultures and Music program grid';
            }
            else if (programOne === 'Science and Music') {
                programGrid1.src = '../assets/vanier/vanier-scienceandmusic.png';
                programGrid1.alt = 'Vanier Science and Music program grid';
            }
            else if (programOne === 'Social Science and Music') {
                programGrid1.src = '../assets/vanier/vanier-socialscienceandmusic.png';
                programGrid1.alt = 'Vanier Social Science and Music program grid';
            }
            else if (programOne === 'Health Science') {
                programGrid1.src = '../assets/vanier/vanier-healthscience.png';
                programGrid1.alt = 'Vanier Health Science program grid';
            }
            else if (programOne === 'Pure and Applied Science') {
                programGrid1.src = '../assets/vanier/vanier-pureandappliedscience.png';
                programGrid1.alt = 'Vanier Pure and Applied Science program grid';
            }
            else if (programOne === 'Honours Science') {
                programGrid1.src = '../assets/vanier/vanier-honoursscience.png';
                programGrid1.alt = 'Vanier Honours Science program information and redirect to regular program grids';
            }
            else if (programOne === 'Computer Science and Math') {
                programGrid1.src = '../assets/vanier/vanier-computerscienceandmath.png';
                programGrid1.alt = 'Vanier Computer Science and Math program grid';
            }
            else if (programOne === 'Science in English & French') {
                programGrid1.src = '../assets/vanier/vanier-scienceenglishfrench.png';
                programGrid1.alt = 'Vanier Science in English and French program grid';
            }
            else if (programOne === 'Science and Social Science') {
                programGrid1.src = '../assets/vanier/vanier-scienceandsocialscience.png';
                programGrid1.alt = 'Vanier Science and Social Science program grid';
            }
            else if (programOne === 'General Social Science') {
                programGrid1.src = '../assets/vanier/vanier-generalsocialscience.png';
                programGrid1.alt = 'Vanier General Social Science program grid';
            }
            else if (programOne === 'Child Studies') {
                programGrid1.src = '../assets/vanier/vanier-childstudies.png';
                programGrid1.alt = 'Vanier Child Studies program grid';
            }
            else if (programOne === 'International Studies') {
                programGrid1.src = '../assets/vanier/vanier-internationalstudies.png';
                programGrid1.alt = 'Vanier International Studies program grid';
            }
            else if (programOne === 'Law & Society') {
                programGrid1.src = '../assets/vanier/vanier-lawandsociety.png';
                programGrid1.alt = 'Vanier Law and Society program grid';
            }
            else if (programOne === 'Psychology') {
                programGrid1.src = '../assets/vanier/vanier-psychology.png';
                programGrid1.alt = 'Vanier Psychology program grid';
            }
            else if (programOne === 'Sport & Leisure Studies') {
                programGrid1.src = '../assets/vanier/vanier-sportandleisurestudies.png';
                programGrid1.alt = 'Vanier Sport and Leisure Studies program grid';
            }
            else if (programOne === 'Social Science in English & French') {
                programGrid1.src = '../assets/vanier/vanier-socialscienceenglishfrench.png';
                programGrid1.alt = 'Vanier Social Science in English and French program grid';
            }
            else if (programOne === 'Commerce') {
                programGrid1.src = '../assets/vanier/vanier-commerce.png';
                programGrid1.alt = 'Vanier Commerce program grid';
            }
            else if (programOne === 'Honours Social Science & Commerce') {
                programGrid1.src = '../assets/vanier/vanier-honourssocialscience.png';
                programGrid1.alt = 'Vanier Honours Social Science and Commerce program information and program grid redirection';
            }
            programGrid1.style.boxShadow = '0px 4px 16px 5px #002966';
        });
    }
    else if (cegepOne === 'jabbott') {
        program1.removeAttribute('readonly');
        program1.placeholder = "Type or select a program";
        program1.setAttribute('list', 'jabbott-programs');
        cegepName1.innerHTML = 'John Abbott College';

        program1.addEventListener('change', () => {
            let programOne = document.querySelector('#program1').value;
            let programGrid1 = document.querySelector('#program-grid1');

            if (programOne === 'Arts and Sciences') {
                programGrid1.src = '../assets/johnabbott/jabbott-artsandsciences.png';
                programGrid1.alt = 'John Abbott Arts and Sciences program grid';
            }
            else if (programOne === 'Media') {
                programGrid1.src = '../assets/johnabbott/jabbott-media.png';
                programGrid1.alt = 'John Abbott Media program grid';
            }
            else if (programOne === 'Literature') {
                programGrid1.src = '../assets/johnabbott/jabbott-literature.png';
                programGrid1.alt = 'John Abbott Literature program grid';
            }
            else if (programOne === 'Languages') {
                programGrid1.src = '../assets/johnabbott/jabbott-languages.png';
                programGrid1.alt = 'John Abbott Languages program grid';
            }
            else if (programOne === 'Theatre') {
                programGrid1.src = '../assets/johnabbott/jabbott-theatre.png';
                programGrid1.alt = 'John Abbott Theatre program grid';
            }
            else if (programOne === 'Multidisciplinary ALC') {
                programGrid1.src = '../assets/johnabbott/jabbott-multidisciplinary.png';
                programGrid1.alt = 'John Abbott Multidisciplinary Arts, Literature and Communication program grid';
            }
            else if (programOne === 'Visual Arts') {
                programGrid1.src = '../assets/johnabbott/jabbott-visualarts.png';
                programGrid1.alt = 'John Abbott Visual Arts program grid';
            }
            else if (programOne === 'Liberal Arts') {
                programGrid1.src = '../assets/johnabbott/jabbott-liberalarts.png';
                programGrid1.alt = 'John Abbott Liberal Arts program grid';
            }
            else if (programOne === 'Science') {
                programGrid1.src = '../assets/johnabbott/jabbott-science.png';
                programGrid1.alt = 'John Abbott Science program grid';
            }
            else if (programOne === 'Honours Science') {
                programGrid1.src = '../assets/johnabbott/jabbott-honoursscience.png';
                programGrid1.alt = 'John Abbott Honours Science program information and redirect to program grid';
            }
            else if (programOne === 'Science and Social Science') {
                programGrid1.src = '../assets/johnabbott/jabbott-scienceandsocialscience.png';
                programGrid1.alt = 'John Abbott Science and Social Science program grid';
            }
            else if (programOne === 'General Social Science') {
                programGrid1.src = '../assets/johnabbott/jabbott-generalsocialscience.png';
                programGrid1.alt = 'John Abbott General Social Science program grid';
            }
            else if (programOne === 'Social Science with Mathematics') {
                programGrid1.src = '../assets/johnabbott/jabbott-socialsciencewithmath.png';
                programGrid1.alt = 'John Abbott Social Science with Mathematics program grid';
            }
            else if (programOne === 'Commerce') {
                programGrid1.src = '../assets/johnabbott/jabbott-commerce.png';
                programGrid1.alt = 'John Abbott Commerce program grid';
            }
            else if (programOne === 'Psychology') {
                programGrid1.src = '../assets/johnabbott/jabbott-psychology.png';
                programGrid1.alt = 'John Abbott Psychology program grid';
            }
            else if (programOne === 'Honours Social Science') {
                programGrid1.src = '../assets/johnabbott/jabbott-honourssocialscience.png';
                programGrid1.alt = 'John Abbott Honours Social Science program information and redirect to program grids';
            }
            programGrid1.style.boxShadow = '0px 4px 16px 5px #002966';
        });
    }
    else if (cegepOne === 'champ-stlam') {
        program1.removeAttribute('readonly');
        program1.placeholder = "Type or select a program";
        program1.setAttribute('list', 'champ-stlam-programs');
        cegepName1.innerHTML = 'Champlain College St-Lambert';

        program1.addEventListener('change', () => {
            let programOne = document.querySelector('#program1').value;
            let programGrid1 = document.querySelector('#program-grid1');

            if (programOne === 'Digital Arts & New Media') {
                programGrid1.src = '../assets/stlambert/champ-stlam-digitalarts.png';
                programGrid1.alt = 'Champlain St-Lambert Digital Arts and New Media program grid';
            }
            else if (programOne === 'Film & New Media') {
                programGrid1.src = '../assets/stlambert/champ-stlam-filmandnewmedia.png';
                programGrid1.alt = 'Champlain St-Lambert Film and New Media program grid';
            }
            else if (programOne === 'Language & Culture') {
                programGrid1.src = '../assets/stlambert/champ-stlam-languageandculture.png';
                programGrid1.alt = 'Champlain St-Lambert Language and Culture program grid';
            }
            else if (programOne === 'Law and Civilization') {
                programGrid1.src = '../assets/stlambert/champ-stlam-lawandcivilization.png';
                programGrid1.alt = 'Champlain St-Lambert Law and Civilization program grid';
            }
            else if (programOne === 'Law, Civilization and Mathematics') {
                programGrid1.src = '../assets/stlambert/champ-stlam-lawcivilizationandmath.png';
                programGrid1.alt = 'Champlain St-Lambert Law, Civilization and Mathematics program grid';
            }
            else if (programOne === 'Computer Science & Mathematics') {
                programGrid1.src = '../assets/stlambert/champ-stlam-computerscienceandmath.png';
                programGrid1.alt = 'Champlain St-Lambert Computer Science and Mathematics program grid';
            }
            else if (programOne === 'Health Science') {
                programGrid1.src = '../assets/stlambert/champ-stlam-healthscience.png';
                programGrid1.alt = 'Champlain St-Lambert Health Science program grid';
            }
            else if (programOne === 'Pure and Applied Science') {
                programGrid1.src = '../assets/stlambert/champ-stlam-pureandappliedscience.png';
                programGrid1.alt = 'Champlain St-Lambert Pure and Applied Science program grid';
            }
            else if (programOne === 'General Social Science') {
                programGrid1.src = '../assets/stlambert/champ-stlam-generalsocialscience.png';
                programGrid1.alt = 'Champlain St-Lambert General Social Science program grid';
            }
            else if (programOne === 'Commerce') {
                programGrid1.src = '../assets/stlambert/champ-stlam-commerce.png';
                programGrid1.alt = 'Champlain St-Lambert Commerce program grid';
            }
            else if (programOne === 'Criminology') {
                programGrid1.src = '../assets/stlambert/champ-stlam-criminology.png';
                programGrid1.alt = 'Champlain St-Lambert Criminology program grid';
            }
            else if (programOne === 'Education') {
                programGrid1.src = '../assets/stlambert/champ-stlam-education.png';
                programGrid1.alt = 'Champlain St-Lambert Education program grid';
            }
            else if (programOne === 'Psychology') {
                programGrid1.src = '../assets/stlambert/champ-stlam-psychology.png';
                programGrid1.alt = 'Champlain St-Lambert Psychology program grid';
            }
            else if (programOne === 'World Studies') {
                programGrid1.src = '../assets/stlambert/champ-stlam-worldstudies.png';
                programGrid1.alt = 'Champlain St-Lambert World Studies program grid';
            }
            programGrid1.style.boxShadow = '0px 4px 16px 5px #002966';
        });
    }
    else if (cegepOne === 'champ-stlaw') {
        program1.removeAttribute('readonly');
        program1.placeholder = "Type or select a program";
        program1.setAttribute('list', 'champ-stlaw-programs');
        cegepName1.innerHTML = 'Champlain College St-Lawrence';

        program1.addEventListener('change', () => {
            let programOne = document.querySelector('#program1').value;
            let programGrid1 = document.querySelector('#program-grid1');

            if (programOne === 'Arts, Literature and Communication') {
                programGrid1.src = '../assets/stlawrence/champ-stlaw-alc.png';
                programGrid1.alt = 'Champlain St-Lawrence Arts, Literature and Communication program grid';
            }
            else if (programOne === 'ALC with prior Spanish') {
                programGrid1.src = '../assets/stlawrence/champ-stlaw-alcpriorspanish.png';
                programGrid1.alt = 'Champlain St-Lawrence Arts, Literature and Communication with prior Spanish program grid';
            }
            else if (programOne === 'Science and ALC') {
                programGrid1.src = '../assets/stlawrence/champ-stlaw-scienceandalc.png';
                programGrid1.alt = 'Champlain St-Lawrence Science and ALC program grid';
            }
            else if (programOne === 'Health Science') {
                programGrid1.src = '../assets/stlawrence/champ-stlaw-healthscience.png';
                programGrid1.alt = 'Champlain St-Lawrence Health Science program grid';
            }
            else if (programOne === 'Pure and Applied Science') {
                programGrid1.src = '../assets/stlawrence/champ-stlaw-pureandappliedscience.png';
                programGrid1.alt = 'Champlain St-Lawrence Pure and Applied Science program grid';
            }
            else if (programOne === 'Science and Social Science') {
                programGrid1.src = '../assets/stlawrence/champ-stlaw-scienceandsocialscience.png';
                programGrid1.alt = 'Champlain St-Lawrence Science and Social Science program grid';
            }
            else if (programOne === 'Social Science: Discovery') {
                programGrid1.src = '../assets/stlawrence/champ-stlaw-discovery.png';
                programGrid1.alt = 'Champlain St-Lawrence Social Science: Discovery program grid';
            }
            else if (programOne === 'Social Science: Psychology, Society & Health') {
                programGrid1.src = '../assets/stlawrence/champ-stlaw-psychology.png';
                programGrid1.alt = 'Champlain St-Lawrence Social Science: Psychology, Society and Health program grid';
            }
            else if (programOne === 'Social Science: International') {
                programGrid1.src = '../assets/stlawrence/champ-stlaw-international.png';
                programGrid1.alt = 'Champlain St-Lawrence Social Science: International program grid';
            }
            else if (programOne === 'Commerce') {
                programGrid1.src = '../assets/stlawrence/champ-stlaw-commerce.png';
                programGrid1.alt = 'Champlain St-Lawrence Commerce program grid';
            }
            else if (programOne === 'Social Science: Mathematics') {
                programGrid1.src = '../assets/stlawrence/champ-stlaw-mathematics.png';
                programGrid1.alt = 'Champlain St-Lawrence Social Science: Mathematics program grid';
            }
            else if (programOne === 'Social Science and ALC') {
                programGrid1.src = '../assets/stlawrence/champ-stlaw-socialscienceandalc.png';
                programGrid1.alt = 'Champlain St-Lawrence Social Science and ALC program grid';
            }
            programGrid1.style.boxShadow = '0px 4px 16px 5px #002966';
        });
    }
    else if (cegepOne === 'champ-lennox') {
        program1.removeAttribute('readonly');
        program1.placeholder = "Type or select a program";
        program1.setAttribute('list', 'champ-lennox-programs');
        cegepName1.innerHTML = 'Champlain College Lennoxville';

        program1.addEventListener('change', () => {
            let programOne = document.querySelector('#program1').value;
            let programGrid1 = document.querySelector('#program-grid1');

            if (programOne === 'Creative Arts') {
                programGrid1.src = '../assets/lennoxville/champ-lennox-creativearts.png';
                programGrid1.alt = 'Champlain Lennoxville Creative Arts program grid';
            }
            else if (programOne === 'Languages and Communication') {
                programGrid1.src = '../assets/lennoxville/champ-lennox-languagesandcommunication.png';
                programGrid1.alt = 'Champlain Lennoxville Languages and Communication program grid';
            }
            else if (programOne === 'Visual Arts') {
                programGrid1.src = '../assets/lennoxville/champ-lennox-visualarts.png';
                programGrid1.alt = 'Champlain Lennoxville Visual Arts program grid';
            }
            else if (programOne === 'Liberal Arts') {
                programGrid1.src = '../assets/lennoxville/champ-lennox-liberalarts.png';
                programGrid1.alt = 'Champlain Lennoxville Liberal Arts program grid';
            }
            else if (programOne === 'Health Science') {
                programGrid1.src = '../assets/lennoxville/champ-lennox-healthscience.png';
                programGrid1.alt = 'Champlain Lennoxville Health Science program grid';
            }
            else if (programOne === 'Pure and Applied Science') {
                programGrid1.src = '../assets/lennoxville/champ-lennox-pureandappliedscience.png';
                programGrid1.alt = 'Champlain Lennoxville Pure and Applied Science program grid';
            }
            else if (programOne === 'General Social Science') {
                programGrid1.src = '../assets/lennoxville/champ-lennox-generalsocialscience.png';
                programGrid1.alt = 'Champlain Lennoxville General Social Science program grid';
            }
            else if (programOne === 'Social Science: Mathematics') {
                programGrid1.src = '../assets/lennoxville/champ-lennox-mathematics.png';
                programGrid1.alt = 'Champlain Lennoxville Social Science: Mathematics program grid';
            }
            else if (programOne === 'Commerce') {
                programGrid1.src = '../assets/lennoxville/champ-lennox-commerce.png';
                programGrid1.alt = 'Champlain Lennoxville Commerce program grid';
            }
            else if (programOne === 'Psychology') {
                programGrid1.src = '../assets/lennoxville/champ-lennox-psychology.png';
                programGrid1.alt = 'Champlain Lennoxville Psychology program grid';
            }
            else if (programOne === 'Criminology') {
                programGrid1.src = '../assets/lennoxville/champ-lennox-criminology.png';
                programGrid1.alt = 'Champlain Lennoxville Criminology program grid';
            }
            programGrid1.style.boxShadow = '0px 4px 16px 5px #002966';
        });
    }
    else if (cegepOne === 'heritage') {
        program1.removeAttribute('readonly');
        program1.placeholder = "Type or select a program";
        program1.setAttribute('list', 'heritage-programs');
        cegepName1.innerHTML = 'Heritage College';

        program1.addEventListener('change', () => {
            let programOne = document.querySelector('#program1').value;
            let programGrid1 = document.querySelector('#program-grid1');

            if (programOne === 'Visual Arts') {
                programGrid1.src = '../assets/heritage/heritage-visualarts.png';
                programGrid1.alt = 'Heritage College Visual Arts program grid';
            }
            else if (programOne === 'Liberal Arts') {
                programGrid1.src = '../assets/heritage/heritage-liberalarts.png';
                programGrid1.alt = 'Heritage College Liberal Arts program grid';
            }
            else if (programOne === 'Science') {
                programGrid1.src = '../assets/heritage/heritage-science.png';
                programGrid1.alt = 'Heritage College Science program grid';
            }
            else if (programOne === 'General Social Science') {
                programGrid1.src = '../assets/heritage/heritage-generalsocialscience.png';
                programGrid1.alt = 'Heritage College General Social Science program grid';
            }
            else if (programOne === 'Social Science with Math') {
                programGrid1.src = '../assets/heritage/heritage-socialsciencewithmath.png';
                programGrid1.alt = 'Heritage College Social Science with Math program grid';
            }
            else if (programOne === 'Commerce') {
                programGrid1.src = '../assets/heritage/heritage-commerce.png';
                programGrid1.alt = 'Heritage College Commerce program grid';
            }
            programGrid1.style.boxShadow = '0px 4px 16px 5px #002966';
        });
    }
});

let cegep2 = document.querySelector('#cegep2');

cegep2.addEventListener('change', () => {
    let cegepTwo = document.querySelector('#cegep2').value;
    let cegepName2 = document.querySelector('#cegep-name2');
    let program2 = document.querySelector('#program2');
    let programGrid2 = document.querySelector('#program-grid2');
    programGrid2.src = '../assets/blank.png';
    programGrid2.style.boxShadow = 'none';

    if (cegepTwo === 'marianopolis') {
        program2.removeAttribute('readonly');
        program2.placeholder = "Type or select a program";
        program2.setAttribute('list', 'mari-programs');
        cegepName2.innerHTML = 'Marianopolis College';

        program2.addEventListener('change', () => {
            let programTwo = document.querySelector('#program2').value;

            if (programTwo === 'Arts and Sciences') {
                programGrid2.src = '../assets/marianopolis/mari-artsandscience.png';
                programGrid2.alt = 'Marianopolis Arts and Science program grid';
            }
            else if (programTwo === 'Arts, Literature, and Communication') {
                programGrid2.src = '../assets/marianopolis/mari-alc.png';
                programGrid2.alt = 'Marianopolis Arts, Literature, and Communication program grid';
            }
            else if (programTwo === 'Liberal Arts') {
                programGrid2.src = '../assets/marianopolis/mari-liberalarts.png';
                programGrid2.alt = 'Marianopolis Liberal Arts program grid';
            }
            else if (programTwo === 'Music') {
                programGrid2.src = '../assets/marianopolis/mari-music.png';
                programGrid2.alt = 'Marianopolis Music program grid';
            }
            else if (programTwo === 'Music and ALC') {
                programGrid2.src = '../assets/marianopolis/mari-musicandalc.png';
                programGrid2.alt = 'Marianopolis Music and ALC program grid';
            }
            else if (programTwo === 'Music and Science') {
                programGrid2.src = '../assets/marianopolis/mari-musicandscience.png';
                programGrid2.alt = 'Marianopolis Music and Science program grid';
            }
            else if (programTwo === 'Music and Social Science') {
                programGrid2.src = '../assets/marianopolis/mari-musicandsocialscience.png';
                programGrid2.alt = 'Marianopolis Music and Social Science program grid';
            }
            else if (programTwo === 'Health Science') {
                programGrid2.src = '../assets/marianopolis/mari-healthscience.png';
                programGrid2.alt = 'Marianopolis Health Science program grid';
            }
            else if (programTwo === 'Pure and Applied Science') {
                programGrid2.src = '../assets/marianopolis/mari-pureandappliedscience.png';
                programGrid2.alt = 'Marianopolis Pure and Applied Science program grid';
            }
            else if (programTwo === 'Honours Science') {
                programGrid2.src = '../assets/marianopolis/mari-honoursscience.png';
                programGrid2.alt = 'Marianopolis Honours Science program grid';
            }
            else if (programTwo === 'General Social Science') {
                programGrid2.src = '../assets/marianopolis/mari-generalsocialscience.png';
                programGrid2.alt = 'Marianopolis General Social Science program grid';
            }
            else if (programTwo === 'Honours Social Science') {
                programGrid2.src = '../assets/marianopolis/mari-honourssocialscience.png';
                programGrid2.alt = 'Marianopolis Honours Social Science program grid';
            }
            else if (programTwo === 'Commerce') {
                programGrid2.src = '../assets/marianopolis/mari-commerce.png';
                programGrid2.alt = 'Marianopolis Commerce program grid';
            }
            else if (programTwo === 'Honours Commerce') {
                programGrid2.src = '../assets/marianopolis/mari-honourscommerce.png';
                programGrid2.alt = 'Marianopolis Honours Commerce program grid';
            }
            else if (programTwo === 'Math and Finance') {
                programGrid2.src = '../assets/marianopolis/mari-mathandfinance.png';
                programGrid2.alt = 'Marianopolis Math and Finance program grid';
            }
            else if (programTwo === 'Social Science Two-Math') {
                programGrid2.src = '../assets/marianopolis/mari-socialsciencetwomath.png';
                programGrid2.alt = 'Marianopolis Social Science Two-Math program grid';
            }
            else if (programTwo === 'Law, Society and Justice') {
                programGrid2.src = '../assets/marianopolis/mari-lawsocietyandjustice.png';
                programGrid2.alt = 'Marianopolis Law, Society and Justice program grid';
            }
            else if (programTwo === 'Global Studies and International Affairs') {
                programGrid2.src = '../assets/marianopolis/mari-globalstudies.png';
                programGrid2.alt = 'Marianopolis Global Studies and International Affairs program grid';
            }
            else if (programTwo === 'Psychology') {
                programGrid2.src = '../assets/marianopolis/mari-psychology.png';
                programGrid2.alt = 'Marianopolis Psychology program grid';
            }
            programGrid2.style.boxShadow = '0px 4px 16px 5px #002966';
        });

    }
    else if (cegepTwo === 'dawson') {
        program2.removeAttribute('readonly');
        program2.placeholder = "Type or select a program";
        program2.setAttribute('list', 'dawson-programs');
        cegepName2.innerHTML = 'Dawson College';

        program2.addEventListener('change', () => {
            let programTwo = document.querySelector('#program2').value;
            let programGrid2 = document.querySelector('#program-grid2');

            if (programTwo === 'Arts and Culture') {
                programGrid2.src = '../assets/dawson/dawson-artsandculture.png';
                programGrid2.alt = 'Dawson Arts and Culture program grid';
            }
            else if (programTwo === 'Cinema-Communications') {
                programGrid2.src = '../assets/dawson/dawson-cinemacommunications.png';
                programGrid2.alt = 'Dawson Cinema-Communications program grid';
            }
            else if (programTwo === 'Interactive Media Arts') {
                programGrid2.src = '../assets/dawson/dawson-interactivemediaarts.png';
                programGrid2.alt = 'Dawson Interactive Media Arts program grid';
            }
            else if (programTwo === 'Languages') {
                programGrid2.src = '../assets/dawson/dawson-languages.png';
                programGrid2.alt = 'Dawson Languages program grid';
            }
            else if (programTwo === 'Literature') {
                programGrid2.src = '../assets/dawson/dawson-literature.png';
                programGrid2.alt = 'Dawson Literature program grid';
            }
            else if (programTwo === 'Studio Arts') {
                programGrid2.src = '../assets/dawson/dawson-studioarts.png';
                programGrid2.alt = 'Dawson Studio Arts program grid';
            }
            else if (programTwo === 'Visual Arts') {
                programGrid2.src = '../assets/dawson/dawson-visualarts.png';
                programGrid2.alt = 'Dawson Visual Arts program grid';
            }
            else if (programTwo === 'Liberal Arts') {
                programGrid2.src = '../assets/dawson/dawson-liberalarts.png';
                programGrid2.alt = 'Dawson Liberal Arts program grid';
            }
            else if (programTwo === 'General Studies (Social Science)') {
                programGrid2.src = '../assets/dawson/dawson-generalstudies.png';
                programGrid2.alt = 'Dawson Social Science, General Studies program grid';
            }
            else if (programTwo === 'Commerce') {
                programGrid2.src = '../assets/dawson/dawson-commerce.png';
                programGrid2.alt = 'Dawson Commerce program grid';
            }
            else if (programTwo === 'Child Studies') {
                programGrid2.src = '../assets/dawson/dawson-childstudies.png';
                programGrid2.alt = 'Dawson Child Studies program grid';
            }
            else if (programTwo === 'Environmental Studies') {
                programGrid2.src = '../assets/dawson/dawson-environmentalstudies.png';
                programGrid2.alt = 'Dawson Environmental Studies program grid';
            }
            else if (programTwo === 'International Business Studies') {
                programGrid2.src = '../assets/dawson/dawson-internationalbusiness.png';
                programGrid2.alt = 'Dawson International Business Studies program grid';
            }
            else if (programTwo === 'Law, Society and Justice') {
                programGrid2.src = '../assets/dawson/dawson-lawsocietyandjustice.png';
                programGrid2.alt = 'Dawson Law, Society and Justice program grid';
            }
            else if (programTwo === 'North-South Studies') {
                programGrid2.src = '../assets/dawson/dawson-northsouthstudies.png';
                programGrid2.alt = 'Dawson North-South Studies program grid';
            }
            else if (programTwo === 'Psychology') {
                programGrid2.src = '../assets/dawson/dawson-psychology.png';
                programGrid2.alt = 'Dawson Psychology program grid';
            }
            else if (programTwo === 'Travel & Tourism') {
                programGrid2.src = '../assets/dawson/dawson-travelandtourism.png';
                programGrid2.alt = 'Dawson Travel and Tourism program grid';
            }
            else if (programTwo === 'Health Science') {
                programGrid2.src = '../assets/dawson/dawson-healthscience.png';
                programGrid2.alt = 'Dawson Health Science program grid';
            }
            else if (programTwo === 'Pure and Applied Science') {
                programGrid2.src = '../assets/dawson/dawson-pureandappliedscience.png';
                programGrid2.alt = 'Dawson Pure and Applied Science program grid';
            }
            else if (programTwo === 'Environmental Science') {
                programGrid2.src = '../assets/dawson/dawson-environmentalscience.png';
                programGrid2.alt = 'Dawson Environmental Science program grid';
            }
            else if (programTwo === 'Enriched Science') {
                programGrid2.src = '../assets/dawson/dawson-enrichedscience.png';
                programGrid2.alt = 'Dawson Enriched Science program information and program grid redirection';
            }
            programGrid2.style.boxShadow = '0px 4px 16px 5px #002966';
        });
    }
    else if (cegepTwo === 'vanier') {
        program2.removeAttribute('readonly');
        program2.placeholder = "Type or select a program";
        program2.setAttribute('list', 'vanier-programs');
        cegepName2.innerHTML = 'Vanier College';

        program2.addEventListener('change', () => {
            let programTwo = document.querySelector('#program2').value;
            let programGrid2 = document.querySelector('#program-grid2');

            if (programTwo === 'Communications, Media and Studio Arts') {
                programGrid2.src = '../assets/vanier/vanier-communications.png';
                programGrid2.alt = 'Vanier Communications, Media and Studio Arts program grid';
            }
            else if (programTwo === 'Languages and Cultures') {
                programGrid2.src = '../assets/vanier/vanier-languagesandcultures.png';
                programGrid2.alt = 'Vanier Languages and Cultures program grid';
            }
            else if (programTwo === 'Liberal Arts') {
                programGrid2.src = '../assets/vanier/vanier-liberalarts.png';
                programGrid2.alt = 'Vanier Liberal Arts program grid';
            }
            else if (programTwo === 'Music') {
                programGrid2.src = '../assets/vanier/vanier-music.png';
                programGrid2.alt = 'Vanier Music program grid';
            }
            else if (programTwo === 'Languages and Cultures and Music') {
                programGrid2.src = '../assets/vanier/vanier-languagesandculturesandmusic.png';
                programGrid2.alt = 'Vanier Languages and Cultures and Music program grid';
            }
            else if (programTwo === 'Science and Music') {
                programGrid2.src = '../assets/vanier/vanier-scienceandmusic.png';
                programGrid2.alt = 'Vanier Science and Music program grid';
            }
            else if (programTwo === 'Social Science and Music') {
                programGrid2.src = '../assets/vanier/vanier-socialscienceandmusic.png';
                programGrid2.alt = 'Vanier Social Science and Music program grid';
            }
            else if (programTwo === 'Health Science') {
                programGrid2.src = '../assets/vanier/vanier-healthscience.png';
                programGrid2.alt = 'Vanier Health Science program grid';
            }
            else if (programTwo === 'Pure and Applied Science') {
                programGrid2.src = '../assets/vanier/vanier-pureandappliedscience.png';
                programGrid2.alt = 'Vanier Pure and Applied Science program grid';
            }
            else if (programTwo === 'Honours Science') {
                programGrid2.src = '../assets/vanier/vanier-honoursscience.png';
                programGrid2.alt = 'Vanier Honours Science program information and redirect to regular program grids';
            }
            else if (programTwo === 'Computer Science and Math') {
                programGrid2.src = '../assets/vanier/vanier-computerscienceandmath.png';
                programGrid2.alt = 'Vanier Computer Science and Math program grid';
            }
            else if (programTwo === 'Science in English & French') {
                programGrid2.src = '../assets/vanier/vanier-scienceenglishfrench.png';
                programGrid2.alt = 'Vanier Science in English and French program grid';
            }
            else if (programTwo === 'Science and Social Science') {
                programGrid2.src = '../assets/vanier/vanier-scienceandsocialscience.png';
                programGrid2.alt = 'Vanier Science and Social Science program grid';
            }
            else if (programTwo === 'General Social Science') {
                programGrid2.src = '../assets/vanier/vanier-generalsocialscience.png';
                programGrid2.alt = 'Vanier General Social Science program grid';
            }
            else if (programTwo === 'Child Studies') {
                programGrid2.src = '../assets/vanier/vanier-childstudies.png';
                programGrid2.alt = 'Vanier Child Studies program grid';
            }
            else if (programTwo === 'International Studies') {
                programGrid2.src = '../assets/vanier/vanier-internationalstudies.png';
                programGrid2.alt = 'Vanier International Studies program grid';
            }
            else if (programTwo === 'Law & Society') {
                programGrid2.src = '../assets/vanier/vanier-lawandsociety.png';
                programGrid2.alt = 'Vanier Law and Society program grid';
            }
            else if (programTwo === 'Psychology') {
                programGrid2.src = '../assets/vanier/vanier-psychology.png';
                programGrid2.alt = 'Vanier Psychology program grid';
            }
            else if (programTwo === 'Sport & Leisure Studies') {
                programGrid2.src = '../assets/vanier/vanier-sportandleisurestudies.png';
                programGrid2.alt = 'Vanier Sport and Leisure Studies program grid';
            }
            else if (programTwo === 'Social Science in English & French') {
                programGrid2.src = '../assets/vanier/vanier-socialscienceenglishfrench.png';
                programGrid2.alt = 'Vanier Social Science in English and French program grid';
            }
            else if (programTwo === 'Commerce') {
                programGrid2.src = '../assets/vanier/vanier-commerce.png';
                programGrid2.alt = 'Vanier Commerce program grid';
            }
            else if (programTwo === 'Honours Social Science & Commerce') {
                programGrid2.src = '../assets/vanier/vanier-honourssocialscience.png';
                programGrid2.alt = 'Vanier Honours Social Science and Commerce program information and program grid redirection';
            }
            programGrid2.style.boxShadow = '0px 4px 16px 5px #002966';
        });
    }
    else if (cegepTwo === 'jabbott') {
        program2.removeAttribute('readonly');
        program2.placeholder = "Type or select a program";
        program2.setAttribute('list', 'jabbott-programs');
        cegepName2.innerHTML = 'John Abbott College';

        program2.addEventListener('change', () => {
            let programTwo = document.querySelector('#program2').value;
            let programGrid2 = document.querySelector('#program-grid2');

            if (programTwo === 'Arts and Sciences') {
                programGrid2.src = '../assets/johnabbott/jabbott-artsandsciences.png';
                programGrid2.alt = 'John Abbott Arts and Sciences program grid';
            }
            else if (programTwo === 'Media') {
                programGrid2.src = '../assets/johnabbott/jabbott-media.png';
                programGrid2.alt = 'John Abbott Media program grid';
            }
            else if (programTwo === 'Literature') {
                programGrid2.src = '../assets/johnabbott/jabbott-literature.png';
                programGrid2.alt = 'John Abbott Literature program grid';
            }
            else if (programTwo === 'Languages') {
                programGrid2.src = '../assets/johnabbott/jabbott-languages.png';
                programGrid2.alt = 'John Abbott Languages program grid';
            }
            else if (programTwo === 'Theatre') {
                programGrid2.src = '../assets/johnabbott/jabbott-theatre.png';
                programGrid2.alt = 'John Abbott Theatre program grid';
            }
            else if (programTwo === 'Multidisciplinary ALC') {
                programGrid2.src = '../assets/johnabbott/jabbott-multidisciplinary.png';
                programGrid2.alt = 'John Abbott Multidisciplinary Arts, Literature and Communication program grid';
            }
            else if (programTwo === 'Visual Arts') {
                programGrid2.src = '../assets/johnabbott/jabbott-visualarts.png';
                programGrid2.alt = 'John Abbott Visual Arts program grid';
            }
            else if (programTwo === 'Liberal Arts') {
                programGrid2.src = '../assets/johnabbott/jabbott-liberalarts.png';
                programGrid2.alt = 'John Abbott Liberal Arts program grid';
            }
            else if (programTwo === 'Science') {
                programGrid2.src = '../assets/johnabbott/jabbott-science.png';
                programGrid2.alt = 'John Abbott Science program grid';
            }
            else if (programTwo === 'Honours Science') {
                programGrid2.src = '../assets/johnabbott/jabbott-honoursscience.png';
                programGrid2.alt = 'John Abbott Honours Science program information and redirect to program grid';
            }
            else if (programTwo === 'Science and Social Science') {
                programGrid2.src = '../assets/johnabbott/jabbott-scienceandsocialscience.png';
                programGrid2.alt = 'John Abbott Science and Social Science program grid';
            }
            else if (programTwo === 'General Social Science') {
                programGrid2.src = '../assets/johnabbott/jabbott-generalsocialscience.png';
                programGrid2.alt = 'John Abbott General Social Science program grid';
            }
            else if (programTwo === 'Social Science with Mathematics') {
                programGrid2.src = '../assets/johnabbott/jabbott-socialsciencewithmath.png';
                programGrid2.alt = 'John Abbott Social Science with Mathematics program grid';
            }
            else if (programTwo === 'Commerce') {
                programGrid2.src = '../assets/johnabbott/jabbott-commerce.png';
                programGrid2.alt = 'John Abbott Commerce program grid';
            }
            else if (programTwo === 'Psychology') {
                programGrid2.src = '../assets/johnabbott/jabbott-psychology.png';
                programGrid2.alt = 'John Abbott Psychology program grid';
            }
            else if (programTwo === 'Honours Social Science') {
                programGrid2.src = '../assets/johnabbott/jabbott-honourssocialscience.png';
                programGrid2.alt = 'John Abbott Honours Social Science program information and redirect to program grids';
            }
            programGrid2.style.boxShadow = '0px 4px 16px 5px #002966';
        });
    }
    else if (cegepTwo === 'champ-stlam') {
        program2.removeAttribute('readonly');
        program2.placeholder = "Type or select a program";
        program2.setAttribute('list', 'champ-stlam-programs');
        cegepName2.innerHTML = 'Champlain College St-Lambert';

        program2.addEventListener('change', () => {
            let programTwo = document.querySelector('#program2').value;
            let programGrid2 = document.querySelector('#program-grid2');

            if (programTwo === 'Digital Arts & New Media') {
                programGrid2.src = '../assets/stlambert/champ-stlam-digitalarts.png';
                programGrid2.alt = 'Champlain St-Lambert Digital Arts and New Media program grid';
            }
            else if (programTwo === 'Film & New Media') {
                programGrid2.src = '../assets/stlambert/champ-stlam-filmandnewmedia.png';
                programGrid2.alt = 'Champlain St-Lambert Film and New Media program grid';
            }
            else if (programTwo === 'Language & Culture') {
                programGrid2.src = '../assets/stlambert/champ-stlam-languageandculture.png';
                programGrid2.alt = 'Champlain St-Lambert Language and Culture program grid';
            }
            else if (programTwo === 'Law and Civilization') {
                programGrid2.src = '../assets/stlambert/champ-stlam-lawandcivilization.png';
                programGrid2.alt = 'Champlain St-Lambert Law and Civilization program grid';
            }
            else if (programTwo === 'Law, Civilization and Mathematics') {
                programGrid2.src = '../assets/stlambert/champ-stlam-lawcivilizationandmath.png';
                programGrid2.alt = 'Champlain St-Lambert Law, Civilization and Mathematics program grid';
            }
            else if (programTwo === 'Computer Science & Mathematics') {
                programGrid2.src = '../assets/stlambert/champ-stlam-computerscienceandmath.png';
                programGrid2.alt = 'Champlain St-Lambert Computer Science and Mathematics program grid';
            }
            else if (programTwo === 'Health Science') {
                programGrid2.src = '../assets/stlambert/champ-stlam-healthscience.png';
                programGrid2.alt = 'Champlain St-Lambert Health Science program grid';
            }
            else if (programTwo === 'Pure and Applied Science') {
                programGrid2.src = '../assets/stlambert/champ-stlam-pureandappliedscience.png';
                programGrid2.alt = 'Champlain St-Lambert Pure and Applied Science program grid';
            }
            else if (programTwo === 'General Social Science') {
                programGrid2.src = '../assets/stlambert/champ-stlam-generalsocialscience.png';
                programGrid2.alt = 'Champlain St-Lambert General Social Science program grid';
            }
            else if (programTwo === 'Commerce') {
                programGrid2.src = '../assets/stlambert/champ-stlam-commerce.png';
                programGrid2.alt = 'Champlain St-Lambert Commerce program grid';
            }
            else if (programTwo === 'Criminology') {
                programGrid2.src = '../assets/stlambert/champ-stlam-criminology.png';
                programGrid2.alt = 'Champlain St-Lambert Criminology program grid';
            }
            else if (programTwo === 'Education') {
                programGrid2.src = '../assets/stlambert/champ-stlam-education.png';
                programGrid2.alt = 'Champlain St-Lambert Education program grid';
            }
            else if (programTwo === 'Psychology') {
                programGrid2.src = '../assets/stlambert/champ-stlam-psychology.png';
                programGrid2.alt = 'Champlain St-Lambert Psychology program grid';
            }
            else if (programTwo === 'World Studies') {
                programGrid2.src = '../assets/stlambert/champ-stlam-worldstudies.png';
                programGrid2.alt = 'Champlain St-Lambert World Studies program grid';
            }
            programGrid2.style.boxShadow = '0px 4px 16px 5px #002966';
        });
    }
    else if (cegepTwo === 'champ-stlaw') {
        program2.removeAttribute('readonly');
        program2.placeholder = "Type or select a program";
        program2.setAttribute('list', 'champ-stlaw-programs');
        cegepName2.innerHTML = 'Champlain College St-Lawrence';

        program2.addEventListener('change', () => {
            let programTwo = document.querySelector('#program2').value;
            let programGrid2 = document.querySelector('#program-grid2');

            if (programTwo === 'Arts, Literature and Communication') {
                programGrid2.src = '../assets/stlawrence/champ-stlaw-alc.png';
                programGrid2.alt = 'Champlain St-Lawrence Arts, Literature and Communication program grid';
            }
            else if (programTwo === 'ALC with prior Spanish') {
                programGrid2.src = '../assets/stlawrence/champ-stlaw-alcpriorspanish.png';
                programGrid2.alt = 'Champlain St-Lawrence Arts, Literature and Communication with prior Spanish program grid';
            }
            else if (programTwo === 'Science and ALC') {
                programGrid2.src = '../assets/stlawrence/champ-stlaw-scienceandalc.png';
                programGrid2.alt = 'Champlain St-Lawrence Science and ALC program grid';
            }
            else if (programTwo === 'Health Science') {
                programGrid2.src = '../assets/stlawrence/champ-stlaw-healthscience.png';
                programGrid2.alt = 'Champlain St-Lawrence Health Science program grid';
            }
            else if (programTwo === 'Pure and Applied Science') {
                programGrid2.src = '../assets/stlawrence/champ-stlaw-pureandappliedscience.png';
                programGrid2.alt = 'Champlain St-Lawrence Pure and Applied Science program grid';
            }
            else if (programTwo === 'Science and Social Science') {
                programGrid2.src = '../assets/stlawrence/champ-stlaw-scienceandsocialscience.png';
                programGrid2.alt = 'Champlain St-Lawrence Science and Social Science program grid';
            }
            else if (programTwo === 'Social Science: Discovery') {
                programGrid2.src = '../assets/stlawrence/champ-stlaw-discovery.png';
                programGrid2.alt = 'Champlain St-Lawrence Social Science: Discovery program grid';
            }
            else if (programTwo === 'Social Science: Psychology, Society & Health') {
                programGrid2.src = '../assets/stlawrence/champ-stlaw-psychology.png';
                programGrid2.alt = 'Champlain St-Lawrence Social Science: Psychology, Society and Health program grid';
            }
            else if (programTwo === 'Social Science: International') {
                programGrid2.src = '../assets/stlawrence/champ-stlaw-international.png';
                programGrid2.alt = 'Champlain St-Lawrence Social Science: International program grid';
            }
            else if (programTwo === 'Commerce') {
                programGrid2.src = '../assets/stlawrence/champ-stlaw-commerce.png';
                programGrid2.alt = 'Champlain St-Lawrence Commerce program grid';
            }
            else if (programTwo === 'Social Science: Mathematics') {
                programGrid2.src = '../assets/stlawrence/champ-stlaw-mathematics.png';
                programGrid2.alt = 'Champlain St-Lawrence Social Science: Mathematics program grid';
            }
            else if (programTwo === 'Social Science and ALC') {
                programGrid2.src = '../assets/stlawrence/champ-stlaw-socialscienceandalc.png';
                programGrid2.alt = 'Champlain St-Lawrence Social Science and ALC program grid';
            }
            programGrid2.style.boxShadow = '0px 4px 16px 5px #002966';
        });
    }
    else if (cegepTwo === 'champ-lennox') {
        program2.removeAttribute('readonly');
        program2.placeholder = "Type or select a program";
        program2.setAttribute('list', 'champ-lennox-programs');
        cegepName2.innerHTML = 'Champlain College Lennoxville';

        program2.addEventListener('change', () => {
            let programTwo = document.querySelector('#program2').value;
            let programGrid2 = document.querySelector('#program-grid2');

            if (programTwo === 'Creative Arts') {
                programGrid2.src = '../assets/lennoxville/champ-lennox-creativearts.png';
                programGrid2.alt = 'Champlain Lennoxville Creative Arts program grid';
            }
            else if (programTwo === 'Languages and Communication') {
                programGrid2.src = '../assets/lennoxville/champ-lennox-languagesandcommunication.png';
                programGrid2.alt = 'Champlain Lennoxville Languages and Communication program grid';
            }
            else if (programTwo === 'Visual Arts') {
                programGrid2.src = '../assets/lennoxville/champ-lennox-visualarts.png';
                programGrid2.alt = 'Champlain Lennoxville Visual Arts program grid';
            }
            else if (programTwo === 'Liberal Arts') {
                programGrid2.src = '../assets/lennoxville/champ-lennox-liberalarts.png';
                programGrid2.alt = 'Champlain Lennoxville Liberal Arts program grid';
            }
            else if (programTwo === 'Health Science') {
                programGrid2.src = '../assets/lennoxville/champ-lennox-healthscience.png';
                programGrid2.alt = 'Champlain Lennoxville Health Science program grid';
            }
            else if (programTwo === 'Pure and Applied Science') {
                programGrid2.src = '../assets/lennoxville/champ-lennox-pureandappliedscience.png';
                programGrid2.alt = 'Champlain Lennoxville Pure and Applied Science program grid';
            }
            else if (programTwo === 'General Social Science') {
                programGrid2.src = '../assets/lennoxville/champ-lennox-generalsocialscience.png';
                programGrid2.alt = 'Champlain Lennoxville General Social Science program grid';
            }
            else if (programTwo === 'Social Science: Mathematics') {
                programGrid2.src = '../assets/lennoxville/champ-lennox-mathematics.png';
                programGrid2.alt = 'Champlain Lennoxville Social Science: Mathematics program grid';
            }
            else if (programTwo === 'Commerce') {
                programGrid2.src = '../assets/lennoxville/champ-lennox-commerce.png';
                programGrid2.alt = 'Champlain Lennoxville Commerce program grid';
            }
            else if (programTwo === 'Psychology') {
                programGrid2.src = '../assets/lennoxville/champ-lennox-psychology.png';
                programGrid2.alt = 'Champlain Lennoxville Psychology program grid';
            }
            else if (programTwo === 'Criminology') {
                programGrid2.src = '../assets/lennoxville/champ-lennox-criminology.png';
                programGrid2.alt = 'Champlain Lennoxville Criminology program grid';
            }
            programGrid2.style.boxShadow = '0px 4px 16px 5px #002966';
        });
    }
    else if (cegepTwo === 'heritage') {
        program2.removeAttribute('readonly');
        program2.placeholder = "Type or select a program";
        program2.setAttribute('list', 'heritage-programs');
        cegepName2.innerHTML = 'Heritage College';

        program2.addEventListener('change', () => {
            let programTwo = document.querySelector('#program2').value;
            let programGrid2 = document.querySelector('#program-grid2');

            if (programTwo === 'Visual Arts') {
                programGrid2.src = '../assets/heritage/heritage-visualarts.png';
                programGrid2.alt = 'Heritage College Visual Arts program grid';
            }
            else if (programTwo === 'Liberal Arts') {
                programGrid2.src = '../assets/heritage/heritage-liberalarts.png';
                programGrid2.alt = 'Heritage College Liberal Arts program grid';
            }
            else if (programTwo === 'Science') {
                programGrid2.src = '../assets/heritage/heritage-science.png';
                programGrid2.alt = 'Heritage College Science program grid';
            }
            else if (programTwo === 'General Social Science') {
                programGrid2.src = '../assets/heritage/heritage-generalsocialscience.png';
                programGrid2.alt = 'Heritage College General Social Science program grid';
            }
            else if (programTwo === 'Social Science with Math') {
                programGrid2.src = '../assets/heritage/heritage-socialsciencewithmath.png';
                programGrid2.alt = 'Heritage College Social Science with Math program grid';
            }
            else if (programTwo === 'Commerce') {
                programGrid2.src = '../assets/heritage/heritage-commerce.png';
                programGrid2.alt = 'Heritage College Commerce program grid';
            }
            programGrid2.style.boxShadow = '0px 4px 16px 5px #002966';
        });
    }
});