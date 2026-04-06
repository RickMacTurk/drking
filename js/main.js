function handlePracticeFusion() {
    window.open('appointments.html', '_self');
}

function handlePayments() {
    window.open('pay-invoice.html', '_self');
}

function handleOpenMenu() {
    document.getElementById('menu-nav').style.display = "block";
}

function handleCloseMenu() {
    document.getElementById('menu-nav').style.display = "none";
}

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="header-container">
                    <div class="call-office">
                        <div class="phone-img"><img src="images/site/smartphone.svg" alt="Phone icon" height="20" width="20" /></div>
                        <div class="phone-number">(512) 346-7966</div>
                    </div>
                    <div class="header-buttons">
                        <button class="button-primary" onclick="handlePracticeFusion()">
                            <img src="images/site/pf_16.png" alt="Book with Practice Fusion" height="16" width="16" /><span class="pl-5">Book Appointment</span>
                        </button>
                        <button class="button-primary" onclick="handlePayments()">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z" stroke="var(--highlight-text)" stroke-width="1.5"/>
                                <path d="M8 12H16" stroke="var(--highlight-text)" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M8 8H16" stroke="var(--highlight-text)" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M8 16H13" stroke="var(--highlight-text)" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            <span class="pl-5">Pay Invoice</span>
                        </button>
                        <div class="button-secondary" onclick="handlePracticeFusion()" title="Book Appointment" >
                            <img src="images/site/pf_24.png" alt="Book with Practice Fusion" height="24" width="24" />
                        </div>
                        <div class="button-secondary" onclick="handlePayments()" title="Pay Invoice" >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z" stroke="var(--button-background)" stroke-width="1.5"/>
                                <path d="M8 12H16" stroke="var(--button-background)" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M8 8H16" stroke="var(--button-background)" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M8 16H13" stroke="var(--button-background)" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <nav>
                    <div class="logo-primary">
                        <a class="tab-link" href="index.html">
                            <svg version="1.1" id="logo-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80" height="80" viewBox="0 0 1634.3589 1621.8223" enable-background="new 0 0 1634.3589 1621.8223" xml:space="preserve">
                                <g>
                                    <path fill="none" stroke="#000000" stroke-miterlimit="10" d="M43.3653,815.9111"/>
                                    <polygon fill="currentcolor" points="41.8891,542.9337 546.9691,542.9337 546.9691,35.5902 1085.278,35.5902 1085.278,542.9596 1592.8286,542.9596 1592.8286,1079.3282 1089.236,1079.3282 1089.236,1586.2321 549.0645,1586.2321 549.0645,1079.5869 41.902,1079.5869"/>
                                    <polyline fill="none" stroke="#FFFFFF" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="43.3653,815.9111 192.3589,815.9111 217.6922,743.9111 275.0255,1055.9111 321.6922,563.2445 355.0255,861.2445 390.3589,815.9111 668.3588,815.9111 693.0255,746.5778 750.3588,1055.9111 797.0255,563.2445 831.6922,862.5778 864.3588,815.9111 1217.6921,815.9111 1243.0255,742.5778 1300.3589,1055.9111 1346.3589,563.2445 1379.0255,865.9111 1411.6921,817.9111 1590.9935,817.9111 "/>
                                </g>
                            </svg>
                        </a>
                        <div class="logo-text">
                            <div class="name">Specialists in Family Medicine</div>
                            <div class="title">Susan C. King MD, Janet MacTurk FNP</div>
                        </div>
                    </div>
                    <div class="logo-secondary">
                        <a class="tab-link" href="index.html">
                            <svg version="1.1" id="logo-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60" height="60" viewBox="0 0 1634.3589 1621.8223" enable-background="new 0 0 1634.3589 1621.8223" xml:space="preserve">
                                <g>
                                    <path fill="none" stroke="#000000" stroke-miterlimit="10" d="M43.3653,815.9111"/>
                                    <polygon fill="currentcolor" points="41.8891,542.9337 546.9691,542.9337 546.9691,35.5902 1085.278,35.5902 1085.278,542.9596 1592.8286,542.9596 1592.8286,1079.3282 1089.236,1079.3282 1089.236,1586.2321 549.0645,1586.2321 549.0645,1079.5869 41.902,1079.5869"/>
                                    <polyline fill="none" stroke="#FFFFFF" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="43.3653,815.9111 192.3589,815.9111 217.6922,743.9111 275.0255,1055.9111 321.6922,563.2445 355.0255,861.2445 390.3589,815.9111 668.3588,815.9111 693.0255,746.5778 750.3588,1055.9111 797.0255,563.2445 831.6922,862.5778 864.3588,815.9111 1217.6921,815.9111 1243.0255,742.5778 1300.3589,1055.9111 1346.3589,563.2445 1379.0255,865.9111 1411.6921,817.9111 1590.9935,817.9111 "/>
                                </g>
                            </svg>
                        </a>
                        <div class="logo-text">
                            <div class="name">Specialists in Family Medicine</div>
                            <div class="title">Susan C. King MD, Janet MacTurk FNP</div>
                        </div>
                    </div>
                    <div class="nav-container">
                        <div class="tab-container">
                            <div id="home" class="tab">
                                <a class="tab-link" href="index.html">
                                    <img src="images/site/home.svg" alt="Home icon" height="18" width="18" title="Home">&nbsp;
                                    <div class="tab-label">Home</div>
                                </a>
                            </div>
                            <div id="appointments" class="tab">
                                <a class="tab-link" href="appointments.html">
                                    <img src="images/site/appointments-icon.svg" alt="Appointments icon" height="18" width="18" title="Appointments">&nbsp;
                                    <div class="tab-label">Appointments</div>
                                </a>
                            </div>
                            <div id="insurance" class="tab">
                                <a class="tab-link" href="insurance.html">
                                    <img src="images/site/insurance-icon.svg" alt="Insurance icon" height="18" width="18" title="Insurance">&nbsp;
                                    <div class="tab-label">Insurance</div>
                                </a>
                            </div>
                            <div id="office-team" class="tab">
                                <a class="tab-link" href="office-team.html">
                                    <img src="images/site/team-icon.svg" alt="Team icon" height="18" width="18" title="Office Team">&nbsp;
                                    <div class="tab-label">Office Team</div>
                                </a>
                            </div>
                            <div id="our-policies" class="tab">
                                <a class="tab-link" href="our-policies.html">
                                    <img src="images/site/policies-icon.svg" alt="Policies icon" height="18" width="18" title="Our Policies">&nbsp;
                                    <div class="tab-label">Our Policies</div>
                                </a>
                            </div>
                        </div>
                        <div class="menu">
                            <a id="menu" href="javascript:void(0);" onclick="handleOpenMenu()"><img src="images/site/menu.svg" alt="Menu" height="32" width="32"></a>
                       </div>
                    </div>
                </nav>
            </header>
        `;
    }
}

class Menu extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="menu-nav">
                <div class="close-menu">
                    <a href="javascript:void(0);" onclick="handleCloseMenu()" id="close-nav">
                        <img src="images/site/close-circle.svg" alt="Menu" height="32" width="32">
                    </a>
                </div>
                <a href="index.html" class="tab-link pb-10">HOME</a>
                <a href="appointments.html" class="tab-link pb-10">APPOINTMENTS</a>
                <a href="insurance.html" class="tab-link pb-10">INSURANCE</a>
                <a href="office-team.html" class="tab-link pb-10">OFFICE TEAM</a>
                <a href="our-policies.html" class="tab-link">OUR POLICIES</a>
            </div>
        `;
    }
}

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
                <div class="resources-wrapper-primary">
                    <div class="resources-container">
                        <div class="resource">
                            <div class="resources-heading">New Patient Info</div>
                            <div class="resources-item"><a href="pdf/newpatient.pdf" target="_blank">Registration Form</a></div>
                            <div class="resources-item"><a href="pdf/wellnessform.pdf" target="_blank">Wellness Form</a></div>
                            <div class="resources-item"><a href="pdf/medicalhistory.pdf" target="_blank">Medical History </a></div>
                            <div class="resources-item"><a href="pdf/patientfinancial.pdf" target="_blank">Financial Form</a></div>
                        </div>
                    </div>
                    <div class="resources-container">
                        <div class="resource">
                            <div class="resources-heading">Healthy Eating</div>
                            <div class="resources-item"><a href="high-fiber-diet.html">High Fiber Diet</a></div>
                            <div class="resources-item"><a href="heart-healthy-meals.html">Heart Healthy Meals</a></div>
                            <div class="resources-item"><a href="healthy-eating.html">Healthy Eating</a></div>
                            <div class="resources-item"><a href="cutting-calories.html">Cutting Calories</a></div>
                            <div class="resources-item"><a href="cholesterol-improvement.html">Cholesterol Improvement with Diet & Exercise</a></div>
                        </div>
                    </div>
                    <div class="resources-container">
                        <div class="resource">
                            <div class="resources-heading">External Resources</div>
                            <div class="resources-item"><a href="https://familydoctor.org/" target="_blank">FamilyDoctor.Org</a></div>
                            <div class="resources-item"><a href="https://health.gov/" target="_blank">Health.Gov</a></div>
                            <div class="resources-item"><a href="https://womenshealth.gov/" target="_blank">WomensHealth.Gov</a></div>
                            <div class="resources-item"><a href="https://opa.hhs.gov/adolescent-health" target="_blank">GirlsHealth.Gov</a></div>
                        </div>
                    </div>
                    <div class="resources-container">
                        <div class="resource">
                            <div class="resources-heading">Screening Guidelines</div>
                            <div class="resources-item"><a href="mens-health-needs.html">Guidelines for Men</a></div>
                            <div class="resources-item"><a href="womens-health-needs.html">Guidelines for Women</a></div>
                        </div>
                    </div>
                </div>
                <div class="resources-wrapper-secondary">
                    <div class="resources-container">
                        <div class="resource">
                            <div class="resources-heading">New Patient Info</div>
                            <div class="resources-item"><a href="pdf/newpatient.pdf" target="_blank">Registration Form</a></div>
                            <div class="resources-item"><a href="pdf/wellnessform.pdf" target="_blank">Wellness Form</a></div>
                            <div class="resources-item"><a href="pdf/medicalhistory.pdf" target="_blank">Medical History </a></div>
                            <div class="resources-item"><a href="pdf/patientfinancial.pdf" target="_blank">Financial Form</a></div>
                        </div>
                    </div>
                    <div class="resources-container">
                        <div class="resource">
                            <div class="resources-heading">Healthy Eating</div>
                            <div class="resources-item"><a href="high-fiber-diet.html">High Fiber Diet</a></div>
                            <div class="resources-item"><a href="heart-healthy-meals.html">Heart Healthy Meals</a></div>
                            <div class="resources-item"><a href="healthy-eating.html">Healthy Eating</a></div>
                            <div class="resources-item"><a href="cutting-calories.html">Cutting Calories</a></div>
                            <div class="resources-item"><a href="cholesterol-improvement.html">Cholesterol Improvement with Diet & Exercise</a></div>
                        </div>
                    </div>
                </div>
                <div class="resources-wrapper-secondary">
                    <div class="resources-container">
                        <div class="resource">
                            <div class="resources-heading">External Resources</div>
                            <div class="resources-item"><a href="https://familydoctor.org/" target="_blank">FamilyDoctor.Org</a></div>
                            <div class="resources-item"><a href="https://health.gov/" target="_blank">Health.Gov</a></div>
                            <div class="resources-item"><a href="https://womenshealth.gov/" target="_blank">WomensHealth.Gov</a></div>
                            <div class="resources-item"><a href="https://opa.hhs.gov/adolescent-health" target="_blank">GirlsHealth.Gov</a></div>
                        </div>
                    </div>
                    <div class="resources-container">
                        <div class="resource">
                            <div class="resources-heading">Screening Guidelines</div>
                            <div class="resources-item"><a href="mens-health-needs.html">Guidelines for Men</a></div>
                            <div class="resources-item"><a href="womens-health-needs.html">Guidelines for Women</a></div>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <p>Copyright &copy; 2025 Susan C. King MD 1907 Cypress Creek Rd. Suite 104 Cedar Park, TX 78613 | <a href="terms-of-use.html">Terms and Conditions of Use</a> | <a href="web-site-privacy-information.html">Web Site Privacy Information</a></p>
                </div>
            </footer>    
        `;
    }
}

customElements.define('main-header', Header);
customElements.define('menu-nav', Menu);
customElements.define('main-footer', Footer);
