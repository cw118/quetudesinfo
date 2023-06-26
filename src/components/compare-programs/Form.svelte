<script>
  import { ChamplainLennoxville, ChamplainStLambert, ChamplainStLawrence, DawsonCollege, HeritageCollege, JohnAbbottCollege, MarianopolisCollege, VanierCollege } from './programData.js';
  export let formId = '';

  const progData = [ChamplainLennoxville, ChamplainStLambert, ChamplainStLawrence, DawsonCollege, HeritageCollege, JohnAbbottCollege, MarianopolisCollege, VanierCollege];

  $: programList = '';
  $: cegepName = '';
  $: cegepIndex = 0;
  $: programName = '';

  $: programInfo = [];
  $: programGrid = [];

  const handleCegepInput = (e) => {
    const cegepSelect = e.currentTarget;
    programList = cegepSelect.value;
    cegepIndex = cegepSelect.selectedIndex;
    cegepName = cegepSelect.options[cegepIndex].textContent;
    programName = '';
  }

  const clearValue = (e) => e.currentTarget.value = '';

  const handleProgramInput = (e) => {
    const programSelect = e.currentTarget;
    programName = programSelect.value;

    if (programName) {
      // index of selected CEGEP in programData array is cegepIndex - 1 (array indexing starts at 0)
      // transform the program data object into an array for easier handling
      const programArray = Object.entries(progData[cegepIndex - 1][programName.replace(/ \(.+\)/, '').replace(/[ ,\-\&:]/g, '')]);

      // program grid entry is at the last index of programArray
      // programArray.pop()[0] just gives 'Program Grid' while programArray.pop()[1] has the actual program grid data
      programGrid = Object.entries(programArray.pop()[1]);
      programInfo = programArray; // program grid has been removed (.pop()) so save remaining entries in programArray here "to be safe"
    }
  }
</script>

<div class="form-group program-compare">
  <label for={`cegep-${formId}`} class="mb-2">Select a CEGEP/College:</label>
  <select name={`cegep-${formId}`} id={`cegep-${formId}`} class="form-select mb-3" on:input={handleCegepInput}>
    <option value="" disabled selected>Please select a CEGEP</option>
    <option value="champ-lennox">Champlain Lennoxville</option>
    <option value="champ-stlam">Champlain St-Lambert</option>
    <option value="champ-stlaw">Champlain St-Lawrence</option>
    <option value="dawson">Dawson College</option>
    <option value="heritage">Heritage College</option>
    <option value="jabbott">John Abbott College</option>
    <option value="marianopolis">Marianopolis College</option>
    <option value="vanier">Vanier College</option>
  </select>

  <label for={`program-${formId}`} class="mb-2">Select a program:</label>
  <input type="text" id={`program-${formId}`} name={`program-${formId}`} class="form-select"
    on:input={handleProgramInput} on:focus={clearValue} autocomplete="off" placeholder={cegepName ? "Type or select a program" : "Please select a CEGEP first"} size="5" list={programList} readonly={programList ? false : true}>
  <hr>

  <div class="program-description">
    <h4 class="cegep-name text-center fw-bold mb-3" id={`cegep-name-${formId}`}>
      {#if cegepName}
        {cegepName}
      {:else}
        Choose a CEGEP and Program
      {/if}
    </h4>

    <div class="ps-1" id={`program-grid-${formId}`}>
      <h5 class="mb-3">{programName}</h5>
      {#if programName}
        <ul>
          {#each programInfo as info (programInfo.indexOf(info))}
            <li class="mt-2 fs-6"><strong>{info[0]}</strong>{info[1] ? `: ${info[1]}` : ''}</li>
          {/each}
        </ul>

        {#if programGrid}
          <h6 class="mb-1 text-decoration-underline">Program Grid</h6>
          <ul>
            {#each programGrid as item (programGrid.indexOf(item))}
              <li class="mt-2 fs-6"><strong>{item[0]}</strong>{item[1] ? `: ${item[1]}` : ''}</li>
            {/each}
          </ul>
        {/if}
      {/if}
    </div>
  </div>

  <datalist id="marianopolis">
    <option value="Arts and Sciences (700.A0)">
    <option value="Arts, Literature, and Communication">
    <option value="Liberal Arts (700.B0)">
    <option value="Music (501.A0)">
    <option value="Music and ALC (500.11)">
    <option value="Music and Science (200.11)">
    <option value="Music and Social Science (300.11)">
    <option value="Health Science">
    <option value="Pure and Applied Science">
    <option value="Honours Science">
    <option value="Core Social Science (300.C1)">
    <option value="Human Behaviour (300.HB)">
    <option value="Law, Society and Justice (300.L1)">
    <option value="Core Social Science, with math (300.C2)">
    <option value="Commerce (300.CM)">
    <option value="Law, Society and Justice, with math (300.L2)">
  </datalist>

  <datalist id="dawson">
    <option value="Arts and Culture (500.G1)">
    <option value="Cinema-Communications (500.G4)">
    <option value="Interactive Media Arts (500.G6)">
    <option value="Languages (500.G3)">
    <option value="Literature (500.G2)">
    <option value="Studio Arts (500.G5)">
    <option value="Visual Arts (510.A0)">
    <option value="Liberal Arts (700.B0)">
    <option value="General Studies, Social Science (300.FA)">
    <option value="Commerce (300.FB)">
    <option value="Child Studies (300.FE)">
    <option value="Environmental Studies (300.FG)">
    <option value="International Business Studies (300.FH)">
    <option value="Law, Society and Justice (300.FK)">
    <option value="North-South Studies (300.FM)">
    <option value="Psychology (300.FP)">
    <option value="Travel & Tourism (300.FT)">
    <option value="Health Science (200.H2)">
    <option value="Pure and Applied Science (200.P2)">
    <option value="Environmental Science (200.E2)">
    <option value="Enriched Science">
  </datalist>

  <datalist id="vanier">
    <option value="Communications, Media and Studio Arts (500.AF)">
    <option value="Languages and Cultures (500.AE)">
    <option value="Liberal Arts (700.B0)">
    <option value="Music (501.A0)">
    <option value="Languages and Cultures and Music (500.11)">
    <option value="Science and Music (200.11)">
    <option value="Social Science and Music (300.11)">
    <option value="Health Science (200.B1)">
    <option value="Pure and Applied Science (200.B2)">
    <option value="Honours Science">
    <option value="Computer Science and Math (200.C0)">
    <option value="Science in English & French (200.D0)">
    <option value="Science and Social Science (200.12)">
    <option value="General Social Science (300.AA)">
    <option value="Child Studies (300.AE)">
    <option value="International Studies (300.AJ)">
    <option value="Law & Society (300.AK)">
    <option value="Psychology (300.AP)">
    <option value="Sport & Leisure Studies (300.AQ)">
    <option value="Social Science in English & French (300.C0)">
    <option value="Commerce (300.MI)">
    <option value="Honours Social Science & Commerce">
  </datalist>

  <datalist id="jabbott">
    <option value="Arts and Sciences (700.A0)">
    <option value="Media (500.AJ)">
    <option value="Literature (500.AH)">
    <option value="Languages (500.AL)">
    <option value="Theatre (500.AK)">
    <option value="Multidisciplinary ALC (500.AE)">
    <option value="Visual Arts (510.A0)">
    <option value="Liberal Arts (700.B0)">
    <option value="Science (200.B0)">
    <option value="Honours Science">
    <option value="Science and Social Science (200.12)">
    <option value="General Social Science (300.M0)">
    <option value="Social Science with Mathematics (300.M1)">
    <option value="Commerce (300.M1)">
    <option value="Psychology">
    <option value="Honours Social Science">
  </datalist>

  <datalist id="champ-stlam">
    <option value="Digital Arts & New Media (500.A1)">
    <option value="Film & New Media (500.A1)">
    <option value="Language & Culture (500.A1)">
    <option value="Law and Civilization (700.B0)">
    <option value="Law, Civilization and Mathematics (700.B0)">
    <option value="Computer Science & Mathematics (200.C0)">
    <option value="Health Science (200.B0)">
    <option value="Pure and Applied Science (200.B0)">
    <option value="General Social Science (300.A0)">
    <option value="Commerce (300.A0)">
    <option value="Criminology (300.A0)">
    <option value="Education (300.A0)">
    <option value="Psychology (300.A0)">
    <option value="World Studies (300.A0)">
  </datalist>

  <datalist id="champ-stlaw">
    <option value="Arts, Literature and Communication (500.L1)">
    <option value="ALC with prior Spanish (500.L2)">
    <option value="Science and ALC (200.16)">
    <option value="Health Science (200.B3)">
    <option value="Pure and Applied Science (200.B4)">
    <option value="Science and Social Science (200.12)">
    <option value="Social Science: Discovery (300.A3)">
    <option value="Social Science: Psychology, Society & Health (300.A4)">
    <option value="Social Science: International (300.A5)">
    <option value="Commerce (400.A3)">
    <option value="Social Science: Mathematics (400.A4)">
    <option value="Social Science and ALC (300.16)">
  </datalist>

  <datalist id="champ-lennox">
    <option value="Creative Arts (500.AF)">
    <option value="Languages and Communication (500.AL)">
    <option value="Visual Arts (510.A0)">
    <option value="Liberal Arts (700.B0)">
    <option value="Health Science (200.B0)">
    <option value="Pure and Applied Science (200.B0)">
    <option value="General Social Science (300.M0 — PR1)">
    <option value="Social Science: Mathematics (300.M1 — PR2)">
    <option value="Commerce (300.M1 — PR1)">
    <option value="Psychology (300.M0 — PR2)">
    <option value="Criminology (300.M0 — PR3)">
  </datalist>

  <datalist id="heritage">
    <option value="Visual Arts (510.A0)">
    <option value="Liberal Arts (700.B0)">
    <option value="Science (200.B0)">
    <option value="General Social Science (300.M0)">
    <option value="Social Science with Math (300.M1 — PR3)">
    <option value="Commerce (300.M1 — PR2)">
  </datalist>
</div>

<style>
.cegep-name {
  margin-bottom: 15px;
}

.program-compare hr {
  color: #000;
}

.program-compare {
  padding: 10px 15px;
}

.program-compare label {
  font-weight: 600;
  font-size: 18px;
}

.program-description {
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>