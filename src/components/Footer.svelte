<footer class="footer">
  <div class="footer-row">
    <div class="footer-column">
      <ul>
        <li><a href="/whatiscegep/englishcegeps">English CEGEPs</a></li>
        <li><a href="/whatiscegep/programs">CEGEP Programs</a></li>
        <li><a href="/programcomparisontool">Program Comparison Tool</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <ul>
        <li><a href="/applyingtocegep/choosingacegepandprogram">Choosing a CEGEP and Program</a></li>
        <li><a href="/applyingtocegep/applicationmodules">Application Modules</a></li>
        <li><a href="/cegeplinks">CEGEP Links</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <ul>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/about/disclaimersandterms">Disclaimers and Terms</a></li>
        <li><a href="/about/project">About QUÉtudes-info</a></li>
      </ul>
    </div>
  </div>
  <p>&#169; 2021-23 QUÉtudes-info&#8482;. <a href="https://github.com/cw118/quetudesinfo/blob/main/LICENSE.md" target="_blank" class="text-light">See the prose content and source code licenses.</a></p>
</footer>

<style>
  
.footer {
  position: relative;
  width: 100%;
  background-color: white;
  z-index: 1000;
  font-size: 18px;
  padding-top: 20px;
  text-align: center;
  border-top: solid 1.5px black;

  display: flex;
  flex-direction: column;
}

.footer a {
  text-decoration: none;
  transition: color 0.15s;
}

.footer a:hover {
  color: #3c3c3c;
}

.footer p {
  font-size: 19px;
  color: #fff;
  margin-bottom: 0;
  padding: 8px 0px 4px;
  border-top: solid 1px #1a1a1a;
  background-color: #002266;
  font-weight: normal;
}

.footer p a {
  text-decoration: underline;
}

.footer-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 335px) {
  .footer p {
    font-size: 17px;
  }
}

.footer-column ul {
  list-style: none;
  line-height: 1.8;
}

.footer-column ul li a {
  color: black;
}

@media screen and (max-width: 1023px) {
  div.footer-row {
    display: none;
  }
  .footer {
    padding-top: 0;
  }
  .footer p {
    border-top: none;
    padding: 10px 5px;
  }
}
</style>