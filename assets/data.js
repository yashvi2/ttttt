/*
  Portfolio content.
  ---------------------------------------------------------------
  All copy lives here so it can be edited without touching layout.

  Before publishing, check every field marked  // CHECK
  Project copy describes process and ownership in general terms.
  It deliberately contains no invented metrics, participant counts
  or findings. Replace general statements with specifics you can
  disclose, and remove anything that does not match what happened.
*/

window.SITE = {
  name: "Yashvi Jain",
  role: "Product Designer",
  location: "London, UK",
  email: "yashvi.jain.yj@gmail.com",
  linkedin: "https://www.linkedin.com/in/yashvi-jain-b049851ba/",
  cv: "",         // CHECK: path or URL to your CV PDF, e.g. "assets/Yashvi_Jain_CV.pdf"
  portfolioPdf: "", // CHECK: path or URL to a portfolio PDF, if you have one
  portrait: "assets/img/portrait.jpg",
  illustration: "assets/img/illustration.png"
};

window.PROJECTS = [
  {
    id: "pfizer",
    category: "digital",
    timeline: "", // CHECK: e.g. "6 months, 2023" (shown on the case study when filled)
    tools: "",    // CHECK: e.g. "Figma, Miro, Jira" (shown instead of methods when filled)
    image: "", // CHECK: add a project image, e.g. "assets/img/pfizer.jpg" (anonymised if needed)
    num: "01",
    client: "Pfizer",
    via: "Delivered at Tata Consultancy Services",
    kind: "Enterprise digital experience",
    title: "Making complex information easier to navigate",
    summary:
      "Restructuring a content-heavy enterprise experience so people could find, understand and act on the information they needed.",
    filters: ["research", "ux"],
    flow: ["Challenge", "Research", "Insights", "Design", "Collaboration", "Outcome"],
    visual: "ia",
    meta: {
      Role: "UX / UI Designer",
      Team: "Design, business analysis, development, client stakeholders",
      Methods: "Discovery research, IA, usability testing, accessibility review",
      Transfers: "Banking, public services, SaaS, any regulated content platform"
    },
    split: {
      mine: "Discovery research planning, information architecture, wireframes and interface design, accessibility checks, usability test sessions.",
      team: "Business analysts owned requirements. Developers owned build and technical architecture. Client stakeholders owned content and approvals.",
      outcome: "A clearer structure and content hierarchy, agreed with stakeholders and handed to development with documented components."
    },
    sections: {
      context:
        "A large organisation needed a digital experience that carried a high volume of detailed, regulated information. Content had grown over time and was shaped by internal structures more than by the people using it.",
      challenge:
        "Make dense information easier to navigate without losing accuracy. Every change had to respect regulatory review, brand standards, accessibility requirements and what the development team could realistically build.",
      role:
        "I worked as the UX / UI designer in a cross-functional TCS team. I planned and ran discovery research, restructured the information architecture, designed the interface and supported the team through build.",
      research:
        "I reviewed the existing content and navigation, spoke with stakeholders about how content was produced and approved, and ran sessions with users to see where they got lost. I mapped the current structure against the tasks people were trying to complete.",
      insights: [
        "The structure mirrored how the organisation was arranged, not how people looked for information.",
        "People needed the right information at the right moment, not everything at once.",
        "Accessibility issues and hierarchy issues were often the same problem seen from two sides."
      ],
      opportunity:
        "Reorganise around user tasks, introduce a clear content hierarchy, and build reusable patterns so future content would stay consistent after launch.",
      design:
        "A task-led information architecture, revised navigation, page templates with a consistent hierarchy, and components documented for reuse. Wireframes first, then high-fidelity designs in Figma.",
      validation:
        "Tree-testing style checks of the new structure, usability sessions on key journeys, and accessibility review against WCAG criteria. I iterated on labels and page order between rounds.",
      collaboration:
        "I worked with business analysts to trace each design decision back to a requirement, with developers to check feasibility early, and with client stakeholders through regular reviews and approvals.",
      outcome:
        "The team moved forward with a structure and design approach that stakeholders had agreed and developers had validated as buildable.", // CHECK: add a disclosed, verified outcome if you have one
      reflection:
        "I would bring content owners into the research earlier. Many structural problems started upstream in how content was written and approved."
    }
  },
  {
    id: "jnj",
    category: "digital",
    timeline: "", // CHECK: e.g. "6 months, 2023" (shown on the case study when filled)
    tools: "",    // CHECK: e.g. "Figma, Miro, Jira" (shown instead of methods when filled)
    image: "", // CHECK: add a project image, e.g. "assets/img/jnj.jpg" (anonymised if needed)
    num: "02",
    client: "Johnson & Johnson",
    via: "Delivered at Tata Consultancy Services",
    kind: "Enterprise experience",
    title: "Designing experiences within complex ecosystems",
    summary:
      "Mapping how different people, teams and systems met across one experience, then designing for the whole journey rather than a single screen.",
    filters: ["research", "ux", "service"],
    flow: ["Many users", "Many systems", "Journey mapping", "Design", "Alignment"],
    visual: "journey",
    meta: {
      Role: "UI / UX & Service Designer",
      Team: "Design, business analysis, development, client stakeholders",
      Methods: "Discovery research, workshops, journey mapping, user flows, testing",
      Transfers: "Financial services, consulting, enterprise platforms"
    },
    split: {
      mine: "Research sessions and workshops, journey maps and user flows, UX design, accessibility considerations, insight communication.",
      team: "Business analysts and client stakeholders shaped scope and requirements. Developers owned build and integration.",
      outcome: "A shared view of the end-to-end journey that helped the team prioritise and design against real user needs."
    },
    sections: {
      context:
        "The experience served several groups of people with different goals, working across multiple teams and systems inside a large organisation.",
      challenge:
        "Design for complexity. Different users needed different things from the same experience, and every decision touched other teams, other tools and enterprise constraints.",
      role:
        "I led discovery activities for my workstream, facilitated workshops with stakeholders, produced journey maps and user flows, and designed the interface.",
      research:
        "I ran discovery research and workshops to understand each user group, their goals and their pain points. I mapped where the experience moved between teams and systems, and where it broke down.",
      insights: [
        "The hardest moments sat in the handovers between teams and systems, not inside any one screen.",
        "Different user groups shared many underlying needs, which made a common pattern possible.",
        "Stakeholders held different mental models of the same journey. Making it visible was part of the work."
      ],
      opportunity:
        "Use a shared journey map as the reference point for the team, then design flows that reduced friction at the handovers.",
      design:
        "Journey maps across user groups, user flows for priority tasks, and interface designs that kept terminology and patterns consistent across the ecosystem.",
      validation:
        "User testing on key flows, stakeholder walkthroughs of the journey map, and accessibility review. Feedback went back into the maps as well as the screens.",
      collaboration:
        "I worked with business analysts and developers to balance user needs against operational and technical constraints, and translated findings into recommendations each team could act on.",
      outcome:
        "The journey map became a shared artefact for prioritisation, and the designs moved into delivery with clearer rationale behind them.", // CHECK
      reflection:
        "I would set up a lightweight way to keep the journey map current after handover, so it stays useful as the service changes."
    }
  },
  {
    id: "data",
    category: "digital",
    timeline: "", // CHECK: e.g. "6 months, 2023" (shown on the case study when filled)
    tools: "",    // CHECK: e.g. "Figma, Miro, Jira" (shown instead of methods when filled)
    image: "", // CHECK: add a project image, e.g. "assets/img/data.jpg" (anonymised if needed)
    num: "03",
    client: "Enterprise client",
    via: "TCS · client anonymised",
    kind: "Data / digital product",
    title: "Turning complex data into useful decisions",
    summary:
      "Designing a dashboard experience around the decisions people needed to make, not the volume of data available.",
    filters: ["ux", "data"],
    flow: ["Complex information", "User need", "Design system", "Actionable experience"],
    visual: "dashboard",
    meta: {
      Role: "UX / UI Designer",
      Team: "Design, data, development, business stakeholders",
      Methods: "Task analysis, information hierarchy, prototyping, usability testing",
      Transfers: "Banking, fintech, consulting, business intelligence"
    },
    split: {
      mine: "Task analysis, information hierarchy, dashboard layouts and interaction patterns, prototypes and usability testing.",
      team: "Data and development teams owned data sources, logic and build. Stakeholders defined the reporting scope.",
      outcome: "A dashboard structure organised around priority decisions, with reusable chart and table patterns."
    },
    sections: {
      context:
        "Teams relied on data spread across reports and tools. The information existed, but getting to an answer took too long.",
      challenge:
        "Turn a large amount of data into an experience that supports decisions. Show what matters first, and keep detail available without overwhelming people.",
      role:
        "I designed the dashboard experience: the information hierarchy, layouts, interaction patterns and visual treatment of data.",
      research:
        "I spoke with the people who used the reports about the questions they were trying to answer, how often, and what they did next. I audited existing reports for overlap and gaps.",
      insights: [
        "People started with a question, not a dataset.",
        "A small number of indicators drove most decisions. The rest was supporting detail.",
        "Trust depended on knowing where a number came from and how current it was."
      ],
      opportunity:
        "Organise the dashboard around decisions: a summary of what needs attention, then drill-down paths to the evidence behind it.",
      design:
        "Summary-first layouts, consistent chart and table patterns, clear states for status and exceptions, filters that match how people think about the data, and visible data freshness.",
      validation:
        "Prototype testing with representative users on real tasks, checking whether they could find answers and explain what they saw. Accessibility checks on colour, contrast and chart labelling.",
      collaboration:
        "I worked closely with the data and development teams on what was feasible, and with stakeholders to agree priorities for the first release.",
      outcome:
        "A decision-led dashboard structure and a set of reusable data patterns handed over for build.", // CHECK: add the 30 days → 3 days outcome here only if it belongs to this project
      reflection:
        "I would test with live data earlier. Real values expose edge cases that sample data hides."
    }
  },
  {
    id: "ai",
    category: "experiments",
    timeline: "", // CHECK: e.g. "6 months, 2023" (shown on the case study when filled)
    tools: "",    // CHECK: e.g. "Figma, Miro, Jira" (shown instead of methods when filled)
    image: "", // CHECK: add a project image, e.g. "assets/img/ai.jpg" (anonymised if needed)
    num: "04",
    client: "Self-initiated",
    via: "Exploratory study",
    kind: "AI / emerging technology",
    title: "Designing human experiences with emerging technology",
    summary:
      "Exploring how people build, lose and recover trust in AI-assisted tools, and what that means for interface patterns.",
    filters: ["research", "ai"],
    flow: ["Expectations", "Trust", "Transparency", "Control", "Patterns"],
    visual: "ai",
    meta: {
      Role: "Designer & researcher (independent)",
      Team: "Independent study",
      Methods: "Literature review, interviews, concept prototypes, cognitive walkthroughs",
      Transfers: "Any organisation adopting AI in services or products"
    },
    split: {
      mine: "All research, synthesis, concept design and prototyping.",
      team: "Independent work. Feedback from peers and tutors.", // CHECK
      outcome: "A set of design principles and interaction patterns for AI-assisted experiences, with concept prototypes."
    },
    sections: {
      context:
        "Organisations are adding AI to products and services quickly. The interaction patterns are still forming, and many experiences ask people to trust output they cannot inspect.",
      challenge:
        "Understand what people expect from AI-assisted tools, where those expectations break, and how design can support trust, transparency and control.",
      role:
        "I set the research questions, ran the research, synthesised findings and designed concept prototypes.",
      research:
        "I reviewed guidance on responsible and human-centred AI, used current tools such as ChatGPT, Claude and UX Pilot critically, and spoke with people about how they use AI in their work.",
      insights: [
        "Confidence in AI output was rarely calibrated. People either over-trusted it or dismissed it.",
        "Showing sources and uncertainty helped people judge output, but too much explanation added cognitive load.",
        "People wanted to stay in control of the final decision, especially when stakes were high."
      ],
      opportunity:
        "Design patterns that make AI output inspectable and correctable, and that keep the person clearly in charge.",
      design:
        "Concept prototypes showing sources, confidence cues, editable suggestions, clear boundaries of what the system can do, and accessible alternatives to conversational interfaces.",
      validation:
        "Cognitive walkthroughs and informal feedback sessions on the concepts, focused on comprehension and perceived control.",
      collaboration:
        "Shared work in progress with peers and tutors and refined the principles through critique.", // CHECK
      outcome:
        "A working set of principles and patterns I now apply when designing with AI.",
      reflection:
        "Next I would test the patterns in a real service context with a specific domain, such as financial guidance, where the cost of misplaced trust is clear."
    }
  },
  {
    id: "service",
    category: "physical",
    timeline: "", // CHECK: e.g. "6 months, 2023" (shown on the case study when filled)
    tools: "",    // CHECK: e.g. "Figma, Miro, Jira" (shown instead of methods when filled)
    image: "", // CHECK: add a project image, e.g. "assets/img/service.jpg" (anonymised if needed)
    num: "05",
    client: "Student support services",
    via: "MA Design Management, LCC",
    kind: "Service / systems design",
    title: "Understanding the system behind the experience",
    summary:
      "Mapping the people, touchpoints and organisational processes behind a student support experience to find where the system, not the individual, was failing.",
    filters: ["research", "service"],
    flow: ["Stakeholders", "Journeys", "Blueprint", "Pain points", "Interventions"],
    visual: "blueprint",
    meta: {
      Role: "Service designer & researcher",
      Team: "MA project", // CHECK: solo or group
      Methods: "Stakeholder mapping, interviews, journey mapping, service blueprinting, co-design",
      Transfers: "Public services, banking operations, healthcare pathways"
    },
    split: {
      mine: "Research, stakeholder and journey mapping, service blueprint, opportunity framing and concept development.", // CHECK
      team: "Peers and tutors contributed through critique. Students and staff contributed through research and co-design.",
      outcome: "A service blueprint and a set of systemic interventions framed for the organisation."
    },
    sections: {
      context:
        "Students move between many teams when they need support: accommodation, wellbeing, course teams and administration. Each team works well on its own. The experience between them is harder.",
      challenge:
        "Look beyond individual touchpoints and understand the service as a system, including the parts students never see.",
      role:
        "I led the research and mapping work, drawing on my experience supporting student communities to shape the questions.",
      research:
        "Interviews and conversations with students and staff, stakeholder mapping, and journey mapping of real support situations from first need to resolution.",
      insights: [
        "Students often had to repeat their story to each new team.",
        "Front-line staff were working around process gaps rather than through them.",
        "The service was designed team by team, so nobody owned the whole journey."
      ],
      opportunity:
        "Design at the level of the system: shared information, clearer handovers and a visible route through support.",
      design:
        "A stakeholder ecosystem map, current-state journey maps, a service blueprint showing front-stage and back-stage activity, and a set of interventions ranging from quick fixes to structural change.",
      validation:
        "Co-design and feedback sessions with students and staff to test whether the blueprint matched their experience and whether the interventions were realistic.",
      collaboration:
        "Worked with students, staff and tutors across the project, using the maps as shared material for discussion.",
      outcome:
        "A blueprint and prioritised interventions framed for the people who could act on them.",
      reflection:
        "I would spend more time with the back-stage teams. Their constraints explained most of what students experienced."
    }
  },
  {
    id: "culture",
    category: "physical",
    timeline: "", // CHECK: e.g. "6 months, 2023" (shown on the case study when filled)
    tools: "",    // CHECK: e.g. "Figma, Miro, Jira" (shown instead of methods when filled)
    image: "", // CHECK: add a project image, e.g. "assets/img/culture.jpg" (anonymised if needed)
    num: "06",
    client: "Indian Music Experience Museum",
    via: "UI/UX Design Intern · British Council",
    kind: "Social / cultural design",
    title: "Design beyond the interface",
    summary:
      "Participatory research and co-design with museum visitors to shape more inclusive digital and physical touchpoints.",
    filters: ["research", "service"],
    flow: ["Context", "Participation", "Co-design", "Prototype", "Recommend"],
    visual: "participation",
    meta: {
      Role: "UI/UX Design Intern",
      Team: "Museum team, British Council programme",
      Methods: "Participatory design, co-design workshops, personas, rapid prototyping, blueprints",
      Transfers: "Cultural organisations, public services, community programmes"
    },
    split: {
      mine: "Planning and facilitating participatory sessions, gathering visitor feedback, personas, low-fidelity blueprints and prototypes.",
      team: "Museum staff owned the collection, programme and final decisions.",
      outcome: "Implementation-ready recommendations for digital and service touchpoints."
    },
    sections: {
      context:
        "A music museum wanted its visitor experience to work for a wide range of people, across physical galleries and digital touchpoints.",
      challenge:
        "Understand a diverse visitor base in context and involve them in shaping the experience, rather than designing on their behalf.",
      role:
        "As a design intern supported by the British Council, I planned and facilitated participatory design sessions and turned what we learned into prototypes and recommendations.",
      research:
        "Contextual observation in the museum, visitor conversations, and co-design workshops where participants shaped ideas directly.",
      insights: [
        "Visitors engaged differently depending on who they came with and why they came.",
        "Some barriers were about confidence and language, not interface design.",
        "Participants were most engaged when they could bring their own stories into the experience."
      ],
      opportunity:
        "Design touchpoints that invite participation and work for different ways of visiting.",
      design:
        "Personas, low-fidelity service blueprints and rapid prototypes of digital and physical touchpoints.",
      validation:
        "Tested concepts with visitors through quick prototype sessions and refined them with museum staff.",
      collaboration:
        "Worked with museum staff to keep recommendations realistic for their operations and resources.",
      outcome:
        "A set of implementation-ready recommendations shared with the museum team.",
      reflection:
        "This project taught me that the most useful design research often happens away from the screen."
    }
  }
];

/* Project groups on the homepage */
window.CATEGORIES = [
  ["physical", "Physical experiences", "Spaces, services and the people moving through them."],
  ["digital", "Digital experiences", "Products and platforms for complex organisations."],
  ["experiments", "Experiments", "Things I make to learn: materials, prototypes and new technology."]
];

/* Small experiments shown without a full case study.
   CHECK: confirm the descriptions match what you built. */
window.EXPERIMENTS = [
  {
    title: "Printing with clay",
    note: "Testing how a digital file turns into a tactile object, one layer of clay at a time.",
    video: "assets/img/clay-printing.mp4",
    poster: "assets/img/clay-printing-poster.jpg",
    tags: ["Material", "Making"]
  },
  {
    title: "The finished vessel",
    note: "Small, imperfect and very satisfying to hold. The ridges come straight from the print path.",
    image: "assets/img/clay-vessel.jpg",
    tags: ["Material", "Form"]
  },
  {
    title: "Light that responds",
    note: "A quick electronics prototype: a distance sensor and an LED strip, exploring how an object can notice people nearby.",
    video: "assets/img/sensor-light.mp4",
    poster: "assets/img/sensor-light-poster.jpg",
    tags: ["Prototype", "Interaction"]
  }
];

/* Talks, sharing work and hackathons.
   CHECK: add your photos (src) and real captions when you have them. */
window.MOMENTS = [
  { src: "", caption: "Sharing work in a crit", kind: "Talk" },
  { src: "", caption: "Hackathon, hour 20", kind: "Hackathon" },
  { src: "", caption: "Presenting to a room", kind: "Talk" },
  { src: "", caption: "Team sketching session", kind: "Hackathon" }
];

window.CASE_SECTIONS = [
  ["context", "Context", "What was happening?"],
  ["challenge", "Challenge", "What needed solving?"],
  ["role", "My role", "What did I own?"],
  ["research", "Research", "What did I learn?"],
  ["insights", "Insights", "What changed my understanding?"],
  ["opportunity", "Opportunity", "What did the research reveal?"],
  ["design", "Design", "What did I create?"],
  ["validation", "Validation", "How did I test the direction?"],
  ["collaboration", "Collaboration", "Who did I work with?"],
  ["outcome", "Outcome", "What changed?"],
  ["reflection", "Reflection", "What would I do differently?"]
];
