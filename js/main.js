function handlePracticeFusion() {
    window.open('https://www.patientfusion.com/doctor/susan-king-md-45784', '_blank');
}

// If we want to do a breadcrumb
function getPath() {
    const home = '/drking/';
    const currentPath = window.location.pathname;
    const formattedPath = window.location.pathname.replace(home, '').replace('-', ' ').replace('.html', '');
    const finalPath = (currentPath === home) ? '' : `-&nbsp;<a class="header-link" href="${currentPath}">${formattedPath}</a>`;
    
    return `<a class="header-link" href="${home}"><img src="images/site/home.png" alt="Home icon" height="18" width="18">&nbsp;Home</a>&nbsp;${finalPath}`;
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
                        <button class="button-primary">
                            <img src="images/site/invoice.svg" alt="Pay Invoice" height="16" width="16" /><span class="pl-5">Pay Invoice</span>
                        </button>
                    </div>
                </div>
                <nav>
                    <div class="logo">
                        <a class="tab-link" href="/">
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
                    <div class="nav-container">
                        <div class="tab-container">
                            <div id="home" class="tab">
                                <img src="images/site/home.svg" alt="Home icon" height="18" width="18">&nbsp;
                                <a class="tab-link" href="index.html">Home</a>
                            </div>
                            <div id="appointments" class="tab">
                                <img src="images/site/appointments-icon.svg" alt="Appointments icon" height="18" width="18">&nbsp;
                                <a class="tab-link" href="appointments.html">Appointments</a>
                            </div>
                            <div id="insurance" class="tab">
                                <img src="images/site/insurance-icon.svg" alt="Insurance icon" height="18" width="18">&nbsp;
                                <a class="tab-link" href="insurance.html">Insurance</a>
                            </div>
                            <div id="office-team" class="tab">
                                <img src="images/site/team-icon.svg" alt="Team icon" height="18" width="18">&nbsp;
                                <a class="tab-link" href="office-team.html">Office Team</a>
                            </div>
                            <div id="our-policies" class="tab">
                                <img src="images/site/policies-icon.svg" alt="Policies icon" height="18" width="18">&nbsp;
                                <a class="tab-link" href="our-policies.html">Our Policies</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
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
                <div class="resources-wrapper">
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
                <div class="footer">
                    <p>Copyright &copy; 2025 Susan C. King MD 1907 Cypress Creek Rd. Suite 104 Cedar Park, TX 78613 | <a href="terms-of-use.html">Terms and Conditions of Use</a> | <a href="web-site-privacy-information.html">Web Site Privacy Information</a></p>
                </div>
            </footer>    
        `;
    }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
