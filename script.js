// ============================================================
// 01. PROJECT DATA
// Add or edit project cards in this array.
// Place PDF files in assets/ and use paths like assets/file.pdf.
// collection: "main" or "slcc"
// category: "defense", "offense", "crypto", "research", "design", "justice"
// ============================================================

const projects = [
        {
        "title": "(IN PROGRESS) AI-Assisted SOC Investigation & Threat Detection Capstone",
        "category": "offense",
        "label": "Group Project",
        "symbol": "$_",
        "art": "cream",
        "tools": [
            "Wazuh",
            "Sysmon",
            "MITRE ATT&CK",
           "AI"
        ],
        "summary": "Developing an AI-assisted SOC investigation platform that uses Wazuh security telemetry to support threat detection, event analysis, and incident reporting. The team is implementing controlled attack scenarios involving RDP brute force, SMB lateral movement, and compromised administrator credentials.",
        "context": "The project combines SIEM monitoring, simulated attacks, and AI-assisted investigation workflows to improve how security incidents are analyzed and documented.",
        "work": "My responsibilities include configuring the Wazuh SIEM and integrating Sysmon with Windows Server 2022 to collect security telemetry. I am developing and testing custom detection rules for our three attack scenarios: RDP brute force, SMB lateral movement, and compromised administrator credentials. I also analyze security events in Wazuh to verify detections and support the team's AI-assisted investigation workflow.",
        "lesson": "This ongoing project is strengthening my understanding of SIEM deployment, security event correlation, detection engineering, and collaborative incident investigations. It also highlights the importance of validating detection rules against actual telemetry before relying on AI-generated conclusions.",
        "pdf": "assets/Capstone_Checkpoint1.pdf",
        "collection": "main"
    },
    {
        "title": "Strategic Network Response",
        "category": "defense",
        "label": "Network Analysis",
        "symbol": "NDR",
        "art": "dark",
        "tools": [
            "Snort",
            "Zeek",
            "MITRE ATT&CK",
            "Incident Response"
        ],
        "summary": "Analyzed Snort alerts and Zeek DNS and connection logs for suspected malware, command-and-control traffic, and ransomware indicators. Assessed business risks and recommended containment and investigation steps.",
        "context": "An academic network incident analysis assignment used Snort alerts and Zeek DNS and connection logs to evaluate suspicious host activity. The brief was completed for CYBR 4550 in October 2026.",
        "work": "Correlated suspicious DNS lookups with HTTP connections and reviewed PowerShell, possible C2, and ransomware-related alerts. Documented suspected MITRE ATT&CK mappings, potential business impact, and a response strategy covering host isolation, indicator blocking, endpoint investigation, and forensic evidence preservation.",
        "lesson": "The brief connects technical indicators to business risk and response priorities. The analysis describes suspected activity; confirming malware execution, data theft, or file encryption would require additional endpoint and network evidence.",
        "pdf": "assets/Strategic_Network_Response.pdf",
        "collection": "main"
    },
    {
        "title": "Cyber Kill Chain",
        "category": "defense",
        "label": "Framework",
        "symbol": "NDR",
        "art": "dark",
        "tools": [
            "Detection Sources",
            "Attack Analysis"
        ],
        "summary": "Mapped an instructor-led attack demonstration to the seven Cyber Kill Chain phases and identified internal data sources for detecting compromise.",
        "context": "Analyzing a fictional attack from the point of view of the attacker.",
        "work": "Documented phase descriptions, demonstration examples, and screenshot evidence.Recommended firewall/network logs, endpoint detection, web server logs, and account logs as detection sources.",
        "lesson": "Demonstrates technical analysis, documentation, and the ability to connect findings to practical considerations.",
        "pdf": "assets/KillChain_Ortiz.pdf",
        "collection": "main"
    },
    {
        "title": "Telnet vs. SSH",
        "category": "defense",
        "label": "Network Security Assessment",
        "symbol": "NDR",
        "art": "dark",
        "tools": [
            "Pen Testing",
            "Packet Analysis",
            "Wireshark"
        ],
        "summary": "Conducted a hands-on security assessment comparing Telnet and SSH in a controlled lab environment. Using Nmap, Wireshark, and Metasploit, I investigated network traffic, tested authentication vulnerabilities, and evaluated how encryption and authentication methods affect system security.",
        "context": "I focused on comparing Telnet and SSH to investigate how weak credentials, unencrypted communication, and authentication configurations can expose systems to unauthorized access.",
        "work": "Used Nmap to identify open ports and running services on an Ubuntu target system. I then captured and analyzed Telnet and SSH traffic using Wireshark, identifying plaintext credentials in Telnet while confirming that SSH communication was encrypted.",
        "lesson": "Reinforced the importance of disabling insecure services like Telnet, enforcing stronger authentication policies, and monitoring suspicious login attempts.",
        "pdf": "assets/Telnet_VS_SSH.pdf",
        "collection": "main"
    },
    {
        "title": "SOC Monitoring & Incident Investigation",
        "category": "offense",
        "label": "SIEM Monitoring",
        "symbol": "$_",
        "art": "cream",
        "tools": [
            "Threat Detection",
            "Kibana",
            "Tailscale",
            "Auditbeat",
            "Elasticsearch"
        ],
        "summary": "Built and configured a Security Operations Center (SOC) lab using two Ubuntu virtual machines to collect, monitor, and investigate endpoint security events. ",
        "context": "I configured two Ubuntu virtual machines connected through Tailscale, deployed Elasticsearch and Kibana using Docker, and set up Auditd and Auditbeat to collect and forward endpoint activity.",
        "work": "Using Auditd, Auditbeat, Elasticsearch, and Kibana, I analyzed 73 security event records, investigated six events, and verified a successful file-monitoring detection. During configuration, I resolved authentication errors between Auditbeat and Elasticsearch by correcting service account credentials and updating the keystore.",
        "lesson": "Learned the importance of troubleshooting each component of a logging pipeline and verifying that security telemetry is successfully collected.",
        "pdf": "assets/SOC_Monitoring.pdf",
        "collection": "main"
    },
    {
        "title": "Diffe-Hellman Key Exchange: MITM Diagram",
        "category": "crypto",
        "label": "Cryptography",
        "symbol": "⊕",
        "art": "blue",
        "tools": [
            "Diffie–Hellman",
            "MITM",
            "Certificates",
            "LucidChart"
        ],
        "summary": "Created a security diagram demonstrating how a Man-in-the-Middle (MITM) attack compromises Diffie-Hellman key exchange and how certificate authorities (CAs) help prevent it.",
        "context": "The goal was to understand how attackers intercept and modify public key exchanges when authentication is missing, and how digital certificates protect communication.",
        "work": "Designed two diagrams comparing an unsecured Diffie-Hellman exchange with one protected by CA authentication. Illustrated how an attacker substitutes public values and how certificate verification rejects those changes.",
        "lesson": "I learned that encryption alone does not prevent MITM attacks. Authenticating public keys through trusted certificates is essential for establishing secure communication.",
        "pdf": "assets/MITM_Diagram.pdf",
        "collection": "main"
    },
    {
        "title": "Volunteer Scheduling & Hours Tracking App",
        "category": "design",
        "label": "UVU / Academic project",
        "symbol": "UX",
        "art": "blue",
        "tools": [
            "Systems Analysis",
            "Database Design",
            "Workflow Design",
            "Team Project"
        ],
        "summary": "Collaborated on a system analysis and design proposal for managing UVU club events, volunteer sign-ups, attendance, and service hours.",
        "context": "The deliverable is a system design proposal rather than a deployed application. The goal was to replace manual spreadsheets, paper records, and group chats with a centralized system that simplifies volunteer coordination and reduces reporting errors.",
        "work": "As project manager, I coordinated team responsibilities, managed deadlines, and organized the final documentation. I developed process models and use cases while collaborating with teammates on database structures, system workflows, and web/mobile interface prototypes.",
        "lesson": "I strengthened my project management, teamwork, and systems analysis skills. I also learned how clear communication, organized workflows, and effective system design help solve real-world issues.",
        "pdf": "assets/Club_Volunteer_GroupProject.pdf",
        "collection": "main"
    },
    {
        "title": "Mexico's Digital Divide: Internet Access & Social Impact",
        "category": "research",
        "label": " Digital Ethics",
        "symbol": "R",
        "art": "tan",
        "tools": [
            "Digital Inclusion",
            "Technology Policy",
            "NRI Analysis"
        ],
        "summary": "Conducted research on internet accessibility and digital inequality in Mexico, analyzing how connectivity affects education, communication, and socioeconomic opportunities.",
        "context": "The goal was to evaluate Mexico's digital development using the 2022 and 2023 Network Readiness Index (NRI), focusing on internet usage, household connectivity, social media, and internet access in schools.",
        "work": "Analyzed NRI data and academic research to compare internet accessibility across Mexico. Identified regional inequalities, infrastructure limitations, and educational gaps, then developed recommendations for improving digital inclusion.",
        "lesson": "I learned that increasing internet access does not always mean equal opportunities. This research strengthened my data analysis skills and understanding of how technology, economic inequality, and public policy affect communities.",
        "pdf": "assets/Internet_Mexico_Usage_Paper.pdf",
        "collection": "main"
    },
    {
        "title": "Mitigating Web Application Vulnerabilities",
        "category": "offense",
        "label": "Vulnerability Mitigation",
        "symbol": "$_",
        "art": "cream",
        "tools": [
            "Access Control",
            "Web Security",
            "Ettercap"
        ],
        "summary": "Completed a hands-on security lab focused on mitigating web application vulnerabilities, protecting network communications, and strengthening server authentication.",
        "context": "To understand how insecure communications, outdated web servers, and weak authentication methods expose systems to unauthorized access and cyberattacks.",
        "work": "Investigated HTTP Man-in-the-Middle (MITM) risks using Ettercap, examined HTTPS protection, and updated an Nginx web server. Configured SSH access controls to disable password authentication and reject unauthorized key-only logins.",
        "lesson": "I learned how encryption, software updates, and secure authentication work together to reduce security risks. This lab strengthened my skills in server hardening, access control, and vulnerability mitigation.",
        "pdf": "assets/Mitigating_Web_Appl_Vuln.pdf",
        "collection": "main"
    },
    {
        "title": "AES-256 Cryptanalysis: Related-Key Attacks & Encryption Security",
        "category": "research",
        "label": "AES Encryption",
        "symbol": "R",
        "art": "tan",
        "tools": [
            "AES-256",
            "Cryptanalysis",
            "Security Research"
        ],
        "summary": "Researched related-key attacks against AES-256 encryption, examining why reduced-round versions are vulnerable while attacks against the full 14-round cipher remain impractical in real-world environments.",
        "context": "The goal was to understand how weaknesses in AES-256's key schedule affect encryption security and why additional encryption rounds increase resistance to attacks.",
        "work": "Analyzed academic cryptanalysis research on AES-256, focusing on key expansion, differential attacks, and computational complexity. Compared attacks against reduced-round and full-round encryption to evaluate their practical limitations.",
        "lesson": "I learned that encryption strength depends on more than key length. This research strengthened my understanding of how key schedules, diffusion, and computational complexity influence cryptographic security.",
        "pdf": "assets/M4_ResearchAES_Paper.pdf",
        "collection": "main"
    },
    {
        "title": "ECC & the Post-Quantum Transition",
        "category": "research",
        "label": "Post Quantum",
        "symbol": "R",
        "art": "tan",
        "tools": [
            "ECC",
            "Quantum Computing",
            "TLS",
            "Network Security"
        ],
        "summary": "Researched the challenges of migrating TLS from elliptic curve cryptography to post-quantum approaches, including performance, compatibility, and hybrid deployments.",
        "context": "Understanding how quantum algorithms threaten traditional encryption and what technical challenges organizations face when adopting quantum-resistant security methods.",
        "work": "Explored quantum threats to ECC, long-term confidentiality concerns, implementation costs, and organizational barriers to cryptographic migration.",
        "lesson": "I learned that transitioning to quantum-resistant cryptography requires more than replacing encryption algorithms and the challenges of protecting future communications.",
        "pdf": "assets/M10_Research_ECC_Post_Quantum_Era_Ortiz.pdf",
        "collection": "main"
    },
    //Template for future projects.
   // {
        //"title": "()",
       // "category": "offense",
        //"label": "UVU / Academic project",
        //"symbol": "↗",
        //"art": "blue",
        //"tools": [
           // "Nmap",
           // "Wireshark",
           // "Metasploit",
            //"SSH"
       // ],
       // "summary": "",
       // "context": " ",
        //"work": "",
       // "lesson": "",
       // "pdf": "assets/.pdf",
        //"collection": "main"
   // },
   //CJ Projects.
    {
        "title": "Innocence Project: The Case of Wilton Dedge",
        "category": "justice",
        "label": "SLCC / Criminal Justice associate degree",
        "symbol": "CJ",
        "art": "cream",
        "tools": [
            "Case Research",
            "Evidence Evaluation",
            "Forensic Science"
        ],
        "summary": "Presented a wrongful-conviction case study examining the evidence, investigative failures, and DNA testing discussed in Wilton Dedge’s exoneration.",
        "context": "Showing how unreliable forensic evidence, eyewitness misidentification, and false testimony can lead to wrongful convictions within the criminal justice system.",
        "work": "Investigated the case's evidence, criminal proceedings, and contributing factors to Dedge's wrongful conviction. Analyzed how DNA testing challenged earlier forensic findings and presented the case through a detailed research presentation.",
        "lesson": "I learned the importance of reliable forensic evidence, unbiased investigations, and proper evidence evaluation.",
        "pdf": "assets/SLCC_Innocence_Project.pdf",
        "collection": "slcc"
    },
    {
        "title": "Mock Crime Scene Debriefing",
        "category": "justice",
        "label": "SLCC / Criminal Justice associate degree",
        "symbol": "CJ",
        "art": "cream",
        "tools": [
            "Chain Of Custody",
            "Evidence Documentation",
            "Team Investigation"
        ],
        "summary": "Contributed to a team debriefing of a simulated crime scene, documenting evidence, investigative timelines, and outstanding forensic requests.",
        "context": "A simulated crime scene exercise for SLCC Crime Scene Processing coursework, presented as a team debriefing. This is a classroom scenario.",
        "work": "Served as a forensics recorder, crime scene security team member, and criminalist. Responsibilities included evidence control and chain of custody, timeline organization, evidence documentation, and assistance with forensic requests.",
        "lesson": "Demonstrates evidence evaluation, research, and clear investigative communication.",
        "pdf": "assets/SLCC_Mock_Crime_Scene_Debriefing_Presentation.pdf",
        "collection": "slcc"
    },
    {
        "title": "Wrongful Convictions & Race",
        "category": "justice",
        "label": "SLCC / Criminal Justice associate degree",
        "symbol": "CJ",
        "art": "cream",
        "tools": [
            "Research",
            "Justice & Ethics",
            "Policy Analysis"
        ],
        "summary": "Researched racial disparities in wrongful convictions, their consequences, and approaches to improving fairness, accountability, and support for exonerees.",
        "context": "Selected work from my Criminal Justice associate degree at Salt Lake Community College.",
        "work": "Examined contributing factors, case examples, the Innocence Project, compensation policy, and differing reform perspectives. Proposed education and public awareness as tools for change.",
        "lesson": "Demonstrates evidence evaluation, research, and clear investigative communication.",
        "pdf": "assets/SLCC_Wrongful_Convictions_and_Race.pdf",
        "collection": "slcc"
    },
    {
        "title": "Criminal Profiling: Past, Present & Future",
        "category": "justice",
        "label": "SLCC / Criminal Justice associate degree",
        "symbol": "CJ",
        "art": "cream",
        "tools": [
            "Behavioral Analysis",
            "Historical Research",
            "Critical Evaluation"
        ],
        "summary": "Explored the development of criminal profiling, its use in investigations, and debates about its scientific validity and limitations.",
        "context": "Selected work from my Criminal Justice associate degree at Salt Lake Community College.",
        "work": "Reviewed historical developments, investigative tools, high-profile cases, criticisms, and emerging directions in criminal profiling.",
        "lesson": "Demonstrates evidence evaluation, research, and clear investigative communication.",
        "pdf": "assets/SLCC_History_of_Criminal_Profiling_Final.pdf",
        "collection": "slcc"
    }
];

// ============================================================
// 02. BUILD PROJECT CARDS
// ============================================================

const grid = document.querySelector('#projectgrid');

projects.forEach((project, index) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.category = project.category;
    card.dataset.collection = project.collection;

    card.innerHTML = `
        <div class="art ${project.art}" aria-hidden="true">
            <span>
                PROJECT / ${String(index + 1).padStart(2, '0')}<br>
                ────────────<br>
                ${project.collection === 'slcc' ? 'CRIMINAL JUSTICE' : project.category.toUpperCase()}
            </span>
            <span class="symbol">${project.symbol}</span>
        </div>
        <div class="cardbody">
            <div class="meta">${project.label}</div>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <div class="tags">
                ${project.tools.map(tool => `<span class="tag">${tool}</span>`).join('')}
            </div>
            <button class="read" data-project="${index}" aria-label="Read case study: ${project.title}">
                Read case study <span aria-hidden="true">↗</span>
            </button>
            ${project.pdf ? `<a class="directpdf" href="${project.pdf}" target="_blank" rel="noopener" aria-label="View PDF: ${project.title}">View project PDF ↗</a>` : ''}
        </div>
    `;

    grid.append(card);
});

// ============================================================
// 03. FILTER PROJECTS
// ============================================================

let collection = 'main';
let filter = 'all';

function update() {
    document.querySelectorAll('.card').forEach(card => {
        card.hidden = card.dataset.collection !== collection ||
            (filter !== 'all' && card.dataset.category !== filter);
    });
}

document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
        filter = button.dataset.filter;

        document.querySelectorAll('.filter').forEach(item => {
            item.setAttribute('aria-pressed', String(item === button));
        });

        update();
    });
});

// ============================================================
// 04. SWITCH BETWEEN CYBERSECURITY & SLCC TABS
// ============================================================

const tabs = [...document.querySelectorAll('[data-collection]')];

function selectTab(button) {
    collection = button.dataset.collection;
    filter = 'all';

    tabs.forEach(tab => {
        tab.setAttribute('aria-selected', String(tab === button));
        tab.tabIndex = tab === button ? 0 : -1;
    });

    document.querySelector('#projectpanel').setAttribute('aria-labelledby', button.id);
    document.querySelector('.filters').hidden = collection === 'slcc';

    document.querySelectorAll('.filter').forEach(item => {
        item.setAttribute('aria-pressed', String(item.dataset.filter === 'all'));
    });

    document.querySelector('#collectiontitle').textContent = collection === 'slcc'
        ? 'My Criminal Justice foundation'
        : 'Cybersecurity & Technology';

    document.querySelector('#collectiondescription').textContent = collection === 'slcc'
        ? 'These are the projects I’m proudest of from completing my Associate of Science in Criminal Justice at Salt Lake Community College. They reflect my interest in investigation, evidence, and the people affected by the justice system.'
        : 'Security labs, cryptography research, and technology projects from my studies at Utah Valley University.';

    update();
}

tabs.forEach((button, index) => {
    button.addEventListener('click', () => selectTab(button));

    button.addEventListener('keydown', event => {
        let nextIndex;

        if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') nextIndex = (index + tabs.length - 1) % tabs.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = tabs.length - 1;

        if (nextIndex !== undefined) {
            event.preventDefault();
            tabs[nextIndex].focus();
            selectTab(tabs[nextIndex]);
        }
    });
});

update();

// ============================================================
// 05. PROJECT CASE STUDY POPUP (MODAL)
// ============================================================

const modal = document.querySelector('#modal');

document.querySelectorAll('[data-project]').forEach(button => {
    button.addEventListener('click', () => {
        const project = projects[Number(button.dataset.project)];

        document.querySelector('#detail').innerHTML = `
            <div class="eyebrow">${project.label}</div>
            <h2 id="modaltitle">${project.title}</h2>
            <div class="tags">
                ${project.tools.map(tool => `<span class="tag">${tool}</span>`).join('')}
            </div>
            <h4>The context</h4>
            <p>${project.context}</p>
            <h4>The work</h4>
            <p>${project.work}</p>
            <h4>Skills & perspective</h4>
            <p>${project.lesson}</p>
            ${project.pdf ? `<a class="button" href="${project.pdf}" target="_blank" rel="noopener">View full project PDF ↗</a>` : ''}
        `;

        modal.setAttribute('aria-labelledby', 'modaltitle');
        modal.showModal();
    });
});

document.querySelector('.close').addEventListener('click', () => modal.close());

modal.addEventListener('click', event => {
    if (event.target === modal) {
        const bounds = modal.getBoundingClientRect();
        if (
            event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom
        ) {
            modal.close();
        }
    }
});

// ============================================================
// 06. UPDATE COPYRIGHT YEAR AUTOMATICALLY
// ============================================================

document.querySelector('#year').textContent = new Date().getFullYear();
