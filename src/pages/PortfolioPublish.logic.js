// Behaviour for the Portfolio Publish screen, ported from the Claude Design source.
import React from 'react';
import { DCLogic } from '../dc/DCLogic.js';
import { __R } from '../dc/resources.js';

const CASES = [
  { id:'move', accent:'#ff3b1f', num:'01', short:'What It Takes to Move', title:'Shifting the work of women’s safety onto society', org:'UAL · London College of Communication', sector:'Public safety', cat:'Service design', disc:['Research','Strategy'], role:'MA Design Management — research, strategy & design', years:'2025–26',
    tags:['Service design','Research','Strategy'], src:'assets/web/assets/ma/ma-poster-wall-web.webp', tone:'#930000', banner:'poster', alt:'What It Takes to Move — poster', posterAR:'4/3', cardPos:'50% 50%',
    question:'How might strategic communication design shift women’s safety in Delhi’s public transit from an individual burden to a shared civic responsibility?',
    bet:'Stereotypes are learned at home and among friends. Surface them through play instead of accusation, and teenagers can unlearn what adults defend.',
    result:'In user testing, kids named stereotypes aloud and picked the game up fastest, women carried the conversation home, and mixed-age groups talked most. Literacy is the clear limit, so an oral and pictorial version comes next.',
    summary:'95% of women in Delhi say fear of male harassment restricts their mobility. The research moved the problem from unsafe journeys to the norms behind them, and the outcome is The Script: a card game that brings those norms to the table at home and among friends.',
    img:'What It Takes to Move poster',
    methods:['interviews','workshops','synthesis','prototyping','usability'],
    flow:['s0','s2','voices','s6','s3','s1','s4','plan','outcome','testing','s5'], nav:['s0','s2','s3','s4','testing','s5'], navL:{s0:'Brief', s3:'Insights', s4:'Design', s5:'Reflection'},
    testing:{h:'What testing showed.', p:'The Script was played with families, friend groups and mixed-age tables. Who engaged, and how, shaped the next version.',
      findings:[
        {k:'Kids', v:'More willing to name stereotypes aloud, and picked up the mechanics faster.'},
        {k:'Women', v:'High engagement. They carried the conversation home to younger family members.'},
        {k:'Mixed-age groups', v:'Richer discussion than single-generation tables.'},
        {k:'Boys with boys', v:'More open and less guarded than in mixed-gender groups.'},
        {k:'Adults', v:'Tended to soften answers or slip into teaching mode instead of playing as equals.'},
        {k:'Older men', v:'Limited engagement, as expected: the game targets younger boys, not settled adult norms.'}],
      imgs:[{src:'assets/web/assets/ma/testing-1.webp', k:'User testing — table'}, {src:'assets/web/assets/ma/testing-2.webp', k:'User testing — cards'}]},
    voicesH:'Audio diaries from Delhi.', voicesP:'Women aged 18–35 who use public transport kept audio diaries of their journeys. Press play to follow each one through its transcript.',
    voices:[
      {who:'Participant A', theme:'Clothing', prompt:'I always try to layer up, even in summers.', dur:20, src:'', transcript:'I always try to layer up even in summers, to not show any part of my skin while using public transport. It feels disgusting, like you are in a museum as a statue, and what for? I have cancelled way too many plans due to travelling alone at night.'},
      {who:'Participant B', theme:'Driving at night', prompt:'At night I have to cover myself up.', dur:16, src:'', transcript:'I like to drive a lot. However, at night I have to cover myself up, so that no one notices it’s a woman driving, to avoid glances and stares, as well as the feeling of not feeling safe.'},
      {who:'Participant C', theme:'Women’s coach', prompt:'If it’s full, I’ll take the next one.', dur:18, src:'', transcript:'I wait to get space in the women’s coach. If it’s filled, I’ll take the next one rather than moving to the common coach. I have experienced someone brushing themselves against me in the common coach. I don’t want to experience it ever again.'},
      {who:'Participant D', theme:'The cab home', prompt:'I wanted to get out, but I couldn’t.', dur:23, src:'', transcript:'I once took a cab home at night. It was fine for a while, but then I could see the driver touching himself inappropriately. It made me feel disgusted and I wanted to get out, but I couldn’t, as he might just stop the car at any random place or take another sketchier path.'}],
    plan:{h:'Change that outlasts the game.', p:'A card game is a moment. Behaviour change is a habit. The plan moves teenage boys from noticing a norm to defending a new one, then keeps the pressure on for six years, so the new norm settles at home, in school and on the street.',
      ladderH:'How the behaviour changes', ladderP:'ADKAR sets the order in which people adopt a behaviour. EAST makes each step land by keeping it easy, attractive, social and timely.',
      stages:[
        {k:'Awareness', shift:'“I notice it.”', d:'Family self-check cards and a first campaign make the norm visible and open room for reflection.', east:['Easy','Attractive']},
        {k:'Desire', shift:'“I want to be different.”', d:'Gamified peer sessions with teenage boys; champions of change identified inside friend groups.', east:['Attractive','Social']},
        {k:'Knowledge', shift:'“I know what to do.”', d:'Facilitated workshops on Connell and Bicchieri, delivered inside schools and youth clubs.', east:['Easy','Timely']},
        {k:'Ability', shift:'“I can do it in the moment.”', d:'Bystander training, piloted early and practised again and again through goal-setting and feedback.', east:['Easy','Timely']},
        {k:'Reinforcement', shift:'“It’s just what we do.”', d:'Ongoing campaigns, peer ambassadors and public momentum keep the change going over time.', east:['Social','Timely']}],
      bands:[{k:'Enablement phase · Awareness → Knowledge', when:'Aug 2026 – 2027', grow:3}, {k:'Engagement phase · Ability → Reinforcement', when:'2027 – 2032', grow:2}],
      roadH:'Roadmap to 2032', roadP:'Short-term work proves the idea, mid-term work builds partners, and long-term work moves it into policy and the city, with review running the whole way.',
      horizons:[{k:'Short term', when:'2026–28', d:'Design, pilot, launch', hz:'S'}, {k:'Mid term', when:'2028–30', d:'Partners, training, education', hz:'M'}, {k:'Long term', when:'2027–32', d:'City-wide, policy, review', hz:'L'}],
      road:[
        {k:'Card deck & workshop design', segs:[[2026.64,2027.14,'S']]},
        {k:'Pilot and iterate with families', segs:[[2026.7,2027.33,'S']]},
        {k:'Campaign launch and rollout', segs:[[2027.17,2027.68,'S']]},
        {k:'Peer support & advocacy', segs:[[2027.48,2028.12,'S']]},
        {k:'Bystander & transport partner training pilot', segs:[[2027.68,2028.13,'S'],[2028.13,2029.45,'M']]},
        {k:'Partner outreach (youth, schools)', segs:[[2027.8,2029.13,'M']]},
        {k:'Women’s economic empowerment', segs:[[2028.71,2030.04,'M']]},
        {k:'Self-check education initiative', segs:[[2029.17,2030.86,'M']]},
        {k:'Public bystander training scale-up', segs:[[2028.46,2031.73,'L']]},
        {k:'City-wide sensitisation campaigns', segs:[[2028.97,2032.24,'L']]},
        {k:'Transport and curriculum policy', segs:[[2028.97,2032.24,'L']]},
        {k:'Longitudinal mapping and review', segs:[[2027.11,2032.24,'L']]}],
      milestone:{k:'Mid-point evaluation', at:2029.5},
      sysH:'Where it plays',
      phases:[
        {k:'Family Edition', when:'At home', goal:'Reach the household, where stereotypes are first passed on.', acts:['Low-stakes and repeatable','Needs no facilitator to enter the home','Reaches homes an institution can’t'], sigK:'Risk alone', sig:'Can reinforce the norms it targets, with no outside reference in the room'},
        {k:'Friend Group Edition', when:'Schools & NGOs', goal:'Engage peer status, the force that actually shifts norms among teenagers.', acts:['Break-time clubs, PSHE sessions, NGO youth workshops','Brings in healthy masculinity, consent and bystander behaviour'], sigK:'Risk alone', sig:'Learning may not survive contact with home life'},
        {k:'Close the loop', when:'Combined', goal:'Friends supply the vocabulary; family gives a safe place to name it where it starts.', acts:['One two-part intervention, not two products','Judging logic differs for each setting'], sigK:'Next', sig:'An oral or picture-led deck for low-literacy players'}]},
    outcome:{h:'The Script, a card game in two editions.', p:'Prompts are adapted from participant interviews and documented Indian household stereotypes. The most convincing, heard-it-before answer wins, which pulls a private assumption into shared talk.',
      items:[
        {k:'The deck', d:'Black prompt cards, white answer cards and the box for the Friend Group Edition.', src:'assets/web/assets/ma/game-a.webp', wide:true},
        {k:'Family Edition', d:'Played at home, where curfews and chores are first explained.', src:'assets/web/assets/ma/game-family.webp'},
        {k:'Friend Group Edition', d:'Played in a circle at school, with a rotating judge each round.', src:'assets/web/assets/ma/game-classroom.webp'},
        {k:'Campaign poster', d:'What It Takes to Move: the street voice of the project.', src:'assets/web/assets/ma/ma-poster-wall-web.webp', tall:true},
        {k:'Postcard', d:'“She shouldn’t have to plan her journey around someone’s behaviour.”', src:'assets/web/assets/ma/postcard-she.webp', tall:true},
        {k:'Finish', d:'Rounded corners, matte textured finish, premium cardstock.', src:'assets/web/assets/ma/game-c.webp'}]},
    secs:[
      {k:'The brief', phase:'Discover', layer:'Strategy', h:'Safety is treated as a woman’s job.', p:'Women change routes, clothing, timings and behaviour to manage risk. Pepper spray, keys between fingers, fake calls: safety is sold individually, while the system that creates the risk stays unchanged.', fig:'poster', src:'assets/web/assets/ma/ma-poster-wall-web.webp', pos:'50% 50%', zoom:1, ar:'595/842'},
      {k:'Reframe', phase:'Define', layer:'Strategy', h:'Not how women can be safer.', p:'Lighting, CCTV and curfews treat a symptom. So the question became how communication design could make safety a shared civic responsibility, and move the stakeholder from women managing risk to the boys who learn the norms.', fig:'the gaze', src:'assets/web/assets/ma/eye.webp', pos:'50% 45%', zoom:1, layout:'full', ar:'21/9'},
      {k:'Research', phase:'Discover', layer:'UX proof', h:'Focus groups, audio diaries and experts.', p:'Focus groups, interviews, journey mapping and anonymous stories with women from Delhi, alongside a behaviour psychologist, a probation psychotherapist and Breakthrough Foundation.', fig:'research system', src:'assets/web/assets/ma/installation-system.webp', pos:'50% 50%', zoom:1, ar:'515/581'},
      {k:'Insights', phase:'Define', layer:'UX proof', h:'Every path led back to how men behave and are raised .', p:'However the problem was framed, nearly every finding returned to how men treat women, and where they learn it. Gender norms are learned early, through families, and bystander silence keeps them going.', fig:'postcard', src:'assets/web/assets/ma/postcard-she.webp', pos:'50% 50%', zoom:1, ar:'297/420'},
      {k:'Direction', phase:'Develop', layer:'Strategy', h:'Design for teenagers, without accusation.', p:'Breakthrough Foundation was the turning point. A fifteen-year-old shown respectful behaviour is being educated; a forty-year-old told the same is more likely to shut down. So the intervention targets adolescence, through family and friends.', fig:'classroom play', src:'assets/web/assets/ma/game-classroom.webp', pos:'50% 55%', zoom:1, layout:'full', ar:'16/9'},
      {k:'Reflection', phase:'Reflect', layer:'Reflection', h:'Not everyone can read the card.', p:'The game assumes players can read silently and aloud with confidence. That quietly excludes the people existing safety work also misses most, so a wider rollout needs an oral or picture-led version.', fig:'the deck', src:'assets/web/assets/ma/game-c.webp', pos:'50% 50%', zoom:1, ar:'3/2'},
      {k:'Fieldwork', phase:'Discover', layer:'UX proof', layout:'field', h:'An exhibition that listened back.', p:'At the UAL show, the installation became a research space. Visitors answered prompts on paper tags, left their own stories, and talked it through. A focus group went deeper on lived experience.',
        imgs:[{src:'assets/web/assets/ma/exhibit-wall-hq.webp', k:'The installation: prompts, touch objects and the poster', big:true}, {src:'assets/web/assets/ma/exhibit-visitor-hq.webp', k:'A visitor writing her response'}, {src:'assets/web/assets/ma/exhibit-tags-hq.webp', k:'Responses collected on paper tags'}, {src:'assets/web/assets/focus-group.webp', k:'Focus group (faces blurred)'}],
        primary:['Focus groups','Semi-structured interviews','Expert interviews','Journey mapping','Anonymous Figma “dropbox”','Exhibition installation','Jaag workshop','Observation','Informal conversations'],
        secondary:['Literature review','Policy analysis','Datasets & statistics','Precedent analysis','Travel vlogs','Social-media research']}]},
  { id:'cray', num:'02', short:'CRAY — Care for stray', title:'Designing one platform for stray animal care', org:'Self-initiated', sector:'Animal welfare', cat:'UX', disc:['Research','Strategy'], role:'Solo UX researcher & designer', years:'2025',
    tldr:[{k:'Problem', v:'People want to help strays but don’t know where to start; adopted pets get abandoned.'}, {k:'Insight', v:'Information, not intent, was the gap.'}, {k:'Solution', v:'Foster first, a which-pet compatibility quiz, and one-tap aid.'}, {k:'Result', v:'Live prototype, four fixes from testing, an icon-led v2.'}],
    tags:['UX','Research','Strategy'], src:'assets/web/assets/cray/cover.webp', tone:'#f4efe9', banner:'cray', layer:'assets/web/assets/cray/phone-hands.webp',
    proto:'https://build-your-dream-2348.lovable.app', protoVideo:'assets/cray/proto-loop.mp4',
    question:'People want to help strays, but don’t know where to start. What would make helping easy?',
    bet:'If aid, fostering and adoption lived in one place, and fostering came before adopting, more people would act and fewer pets would be abandoned.',
    result:'A live prototype with foster-first adoption and a which-pet quiz that checks compatibility. Testing led to four fixes and an icon-led v2 for low-literacy users.',
    summary:'CRAY puts first aid, hospitals, fostering and adoption in one app. Its core bet: foster first, adopt second, so fewer pets are abandoned.',
    img:'street dogs or cats in a public setting',
    methods:['interviews','synthesis','personas','journey','prototyping','usability'],
    flow:['s0','scale','research','s1','s2','s3','testing','s4'], accent:'#b46cf5', nav:['s0','research','s1','s3','testing','s4'], navL:{s0:'Why', s1:'Insight', s3:'Solution', s4:'Reflection'},
    testing:{h:'Four testers, four fixes.', p:'Each person used the prototype on their own phone. One piece of feedback each, and what changed.',
      people:[
        {name:'Kanika', role:'Designer at TCS', task:'Report an injured stray', src:'assets/web/assets/cray/test-kanika.webp', said:'I hit the emergency button by mistake.', fix:'Moved it away from the main actions and added a confirm step.'},
        {name:'Nikhil', role:'Pet owner', task:'Set up a profile', src:'assets/web/assets/cray/test-nikhil.webp', said:'Can it work in regional languages?', fix:'Language switch added to onboarding.'},
        {name:'Geetanjali', role:'Pet owner in a society', task:'Sponsor a stray', src:'assets/web/assets/cray/test-3.webp', said:'I couldn’t find how sponsoring works.', fix:'Guidelines now sit on every sponsor card.'},
        {name:'Khushi', role:'Looking to adopt', task:'Find an NGO to adopt from', src:'assets/web/assets/cray/test-4.webp', said:'I want to learn about what specific NGOs are doing.', fix:'NGO profiles added to Explore.'}],
      findings:[
        {k:'Kanika · Designer at TCS', v:'Tapped the emergency button by mistake. → Moved it away from the main actions and added a confirm step.'},
        {k:'Kanika · Designer at TCS', v:'Couldn’t find how sponsoring works. → Guidelines now sit on every sponsor card.'},
        {k:'Nikhil · Pet owner', v:'Asked for regional languages. → Language switch added to onboarding.'},
        {k:'Nikhil · Pet owner', v:'“I want to learn about what specific NGOs are doing.” → NGO profiles added to Explore.'}],
      imgs:[{src:'assets/web/assets/cray/test-kanika.webp', k:'Kanika, designer at TCS, testing CRAY'}, {src:'assets/web/assets/cray/test-nikhil.webp', k:'Nikhil, pet owner, testing CRAY'}, {src:'assets/web/assets/cray/test-3.webp', k:'Tester using CRAY on a phone'}, {src:'assets/web/assets/cray/test-4.webp', k:'Tester using CRAY outdoors'}]},
    secs:[
      {k:'Why', layer:'Discover', h:'Willing helpers, no clear path.', p:'Adopted pets are often abandoned, and people who want to help don’t know where to start.', ww:[{k:'Why', v:'It began with losing a stray I was attached to. I went down the rabbit hole of why: people at both extremes, those who go out of their way to help and those who harm, and animals that swing between trust and fear.'}, {k:'What', v:'One platform for stray animal care that turns goodwill into action, from first aid to a forever home.'}], fig:'persona', src:'assets/web/assets/cray/persona-journey.webp', pos:'8% 35%', zoom:2.1},
      {k:'Insight', layer:'Define', layout:'cover', journey:{name:'Tarun & mowgli ', role:'Vendor', need:'Wants to adopt a dog, but isn’t sure he has the time with a busy schedule.', stages:[
        {n:'01', k:'Requirement', feat:'Aid', pain:'Found a shivering puppy; no first-aid knowledge and no ambulance to call.', opp:'One-tap emergency help: first aid steps and ambulances.'},
        {n:'02', k:'Discovery', feat:'Aid', pain:'Couldn’t tell which nearby hospitals were real or open.', opp:'A trusted list of vets and hospitals, built with doctors.'},
        {n:'03', k:'Finding aid', feat:'Hospitals', pain:'Arrived to find clinics closed; listed timings were wrong.', opp:'Live, location-based hospital hours.'},
        {n:'04', k:'Shelter', feat:'Sponsor', pain:'Shelter turned the puppy away: no space, little funding.', opp:'Sponsor an animal and show shelter capacity up front.'},
        {n:'05', k:'Foster / adoption', feat:'Foster first', pain:'Couldn’t keep the puppy himself; no foster homes to turn to.', opp:'Foster before adopting, with centres that are checked and monitored.'}]}, cover:'assets/web/assets/cray/insight-dogs.webp', coverAlt:'A photographer crouches to pet two street dogs on an Indian street', h:'Information, not intent, was the gap.', p:'The survey and Tarun\'s journey said the same thing. Tarun is a persona traced through one rescue, from a shivering puppy to a shelter. Hospitals listed the wrong hours, nobody knew first aid, and shelters had no space.', ww:[{k:'I decided', v:'Design for the moment someone finds an animal in trouble, not for browsing. Aid comes first on the home screen.'}], fig:'journey map', src:'assets/web/assets/cray/persona-journey.webp', pos:'88% 78%', zoom:1.75},
      {k:'Structure', layer:'Develop', sort:true,  h:'Helpers sorted the app for me.', p:'The card-sort groups became the four tabs: Home, Aid, Adoption and Explore. “All animals in shelter” scored 3/10 under Home but 9/10 under Adoption, so it moved. Low scorers were merged or dropped.', fig:'information architecture', src:'assets/web/assets/cray/cardsort-ia.webp', pos:'84% 30%', zoom:1.9},
      {k:'Solution', layer:'Deliver', cards:true, screens:[['Which-pet quiz','/quiz'],['Adopt','/adopt'],['Emergency','/emergency'],['Hospitals','/aid/hospitals']], h:'Foster first. Adopt second.', p:'Abandonment starts with a bad match. CRAY slows the decision down without losing the person.', ww:[{k:'Foster first', v:'Adoption starts as a foster period. People live with the animal before they commit, and can step back without abandoning it.'}, {k:'Which pet?', v:'A short quiz about home, routine and budget suggests the right animal. It also scores compatibility, so the shelter sees the fit too.'}, {k:'Aid', v:'An AI symptom scan, a live hospital list and ambulance calls for the moment someone finds an injured animal.'}], fig:'user flow', src:'assets/web/assets/cray/flow-wireframes.webp', pos:'50% 22%', zoom:1.7},
      {k:'Reflection', layer:'Reflect', h:'Not everyone reads the screen.', p:'I built the whole app in English without thinking twice, and that assumption showed my privilege. Testing showed that not every user reads English, or reads at all. V2 adds regional languages and leans on icons, imagery and voice instead of text-heavy screens.', ww:[{k:'Next', v:'Run the compatibility quiz with a shelter, and measure how many fosters turn into adoptions against how many animals are returned.'}], fig:'paper wireframes', src:'assets/web/assets/cray/flow-wireframes.webp', pos:'50% 90%', zoom:1.7}]},
  { id:'ime', num:'03', short:'Birdsong', title:'Birdsong: taking a museum exhibition online', org:'Indian Music Experience Museum', sector:'Culture', cat:'Co-design', disc:['UX'], role:'Design Intern (British Council)', years:'2022',
    tags:['Exhibition design','UI design','Storytelling'], src:'assets/web/assets/ime/cover.webp', tone:'#2e2523',
    question:'How might visitors themselves shape what an inclusive visit looks like?',
    bet:'Visitors would design a better visit than the studio, so we handed them the pen.', result:'A live virtual exhibition on the IME website.',
    summary:'Translating a physical exhibition on songbirds and music into a virtual one, open to anyone, anywhere.',
    img:'co-design session in the gallery',
    methods:['codesign','workshops','personas','blueprint','prototyping'],
    secs:[
      {k:'The brief', layer:'Strategy', h:'A museum for a broader audience.', p:'A music museum wanted its digital and physical touchpoints to welcome a wider, more diverse range of visitors.', fig:'visitor touchpoint inventory'},
      {k:'The question', layer:'Strategy', h:'Who should hold the brief?', p:'Instead of designing for visitors, the approach asked how visitors could design with the museum.', fig:'participation model'},
      {k:'Evidence', layer:'UX proof', h:'Participatory sessions in the space.', p:'Planned and facilitated participatory design sessions and co-design workshops, gathering visitor feedback where the visit actually happens.', fig:'workshop materials'},
      {k:'Synthesis', layer:'UX proof', h:'What visitors said, mapped to where it happened.', p:'Personas and low-fidelity blueprints connected feedback to specific moments in the visit.', fig:'low-fidelity blueprint'},
      {k:'Recommendation', layer:'Strategy', h:'Test fast, hand over ready.', p:'Rapid prototypes tested concepts quickly; the ones that survived were written up as implementation-ready recommendations.', fig:'prototype iterations'},
      {k:'Reflection', layer:'Reflection', h:'The best ideas came from the room.', p:'Co-design changes who holds the brief — and the strongest ideas came from visitors, not the studio.', fig:'visitor quote wall'}]},
  { id:'ava', num:'04', short:'AVA & Dosing Error', title:'A design system for J&J’s AI risk tools', org:'Johnson & Johnson · TCS Interactive', sector:'Healthcare', cat:'UX', disc:['Strategy','Co-design'], role:'UI/UX Designer', years:'2025',
    tags:['Design system','Data UX','Healthcare'], src:'assets/web/assets/ava/hero-mock.webp', tone:'#0b111d',
    question:'How might one design language make AI risk scores readable across clinical quality tools?',
    bet:'Build the system from the densest screens first, and the rest follows.', result:'70% lower error rate; components reused across 3–4 more products.',
    summary:'Unifying the UI of two AI-driven clinical quality platforms with one modular design system.',
    img:'risk overview dashboard', methods:['workshops','prototyping','usability'], secs:[]},
  { id:'pfizer', num:'05', short:'Pfizer.com', title:'Bringing Pentagram’s Pfizer rebrand to the web', org:'Pfizer · Tata Consultancy Services', sector:'Healthcare', cat:'UX', disc:['Strategy','Co-design'], role:'UI Lead', years:'2024–25',
    tags:['Design system','Accessibility','Corporate UI'], src:'assets/web/assets/pfizer/home.webp', tone:'#0000c9',
    question:'How might a new brand become one accessible UI for every Pfizer page?',
    bet:'Set the rules once on pfizer.com, and every other team can follow them.', result:'pfizer.com live in the new brand; its system now guides internal pages and dashboards.',
    summary:'Leading the UI of pfizer.com through Pentagram’s rebrand, and turning it into Pfizer’s corporate design system.',
    img:'Pfizer.com home page', methods:['workshops','prototyping','usability'], secs:[]},
  { id:'halls', num:'06', short:'Student communities', title:'Building a listening loop for student communities', org:'UAL Halls Life · LCC', sector:'Education', cat:'Community', disc:['Strategy'], role:'Community Lead & Student Ambassador', years:'2025–26',
    tags:['Community','Strategy','Research'], src:'assets/web/assets/case-03.webp', tone:'#2a2a2a',
    question:'How can feedback from lived experience reach the people who can change the service?',
    bet:'Showing up every week would surface patterns a survey never would.', result:'[Add result]',
    summary:'Treating everyday community work as a service: capturing recurring concerns across touchpoints and routing them toward more responsive support.',
    img:'halls community event',
    methods:['stakeholder','interviews','synthesis','journey','hmw'],
    secs:[
      {k:'The brief', layer:'Strategy', h:'Many touchpoints, no loop.', p:'Diverse student communities, including students with additional needs, meet the university through many disconnected touchpoints.', fig:'touchpoint map'},
      {k:'The question', layer:'Strategy', h:'How does lived experience travel upward?', p:'Framing community work as a feedback system: what gets heard, where it goes, and who can act on it.', fig:'stakeholder map'},
      {k:'Evidence', layer:'UX proof', h:'Showing up, consistently.', p:'Direct engagement with student groups at events and in halls; recurring feedback documented with care for vulnerability.', fig:'feedback log structure'},
      {k:'Synthesis', layer:'UX proof', h:'The same issue, resurfacing.', p:'Concerns clustered by touchpoint showed where one problem reappeared across channels.', fig:'affinity clusters'},
      {k:'Recommendation', layer:'Strategy', h:'Patterns, not anecdotes.', p:'Shared patterns with staff teams to support more responsive, accessible service interactions.', fig:'opportunity statements'},
      {k:'Reflection', layer:'Reflection', h:'Trust is research infrastructure.', p:'Strategy is not only decks. Consistent presence is how trust — and good data — gets built.', fig:'loop diagram'}]}
];
{ const ORDER = ['ava', 'move', 'pfizer']; CASES.sort((a, b) => { const ia = ORDER.indexOf(a.id), ib = ORDER.indexOf(b.id); return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib); }); }
const METHODS = [
  {id:'stakeholder',name:'Stakeholder mapping',phase:'Frame',d:'Plot who holds influence, who lives with the problem, and who is missing from the room — before any research is planned.',out:'Influence / interest map'},
  {id:'hmw',name:'Opportunity framing',phase:'Frame',d:'Reframe pain points as "How might we…" questions sized to what the team can actually change.',out:'Opportunity statements'},
  {id:'interviews',name:'Discovery interviews',phase:'Discover',d:'Semi-structured conversations with users and frontline staff to surface behaviours, workarounds and unmet needs.',out:'Notes & verbatims'},
  {id:'workshops',name:'Workshop facilitation',phase:'Discover',d:'Structured sessions that put business, tech and users in one conversation — and end with shared decisions.',out:'Boards & decision log'},
  {id:'codesign',name:'Co-design sessions',phase:'Discover',d:'Participatory sessions where users generate and critique ideas, shifting who holds the brief.',out:'Co-created concepts'},
  {id:'synthesis',name:'Qualitative synthesis',phase:'Define',d:'Cluster findings into themes, tensions and insight statements a team can act on.',out:'Insight statements'},
  {id:'personas',name:'Personas',phase:'Define',d:'Behaviour-led archetypes grounded in research, used to test decisions against real needs.',out:'Persona set'},
  {id:'journey',name:'Journey mapping',phase:'Define',d:'The end-to-end experience across touchpoints and pain points — one picture for many teams.',out:'Current-state journey'},
  {id:'blueprint',name:'Service blueprint',phase:'Define',d:'Front-stage actions linked to back-stage processes and systems, showing where the service actually breaks.',out:'Service blueprint'},
  {id:'prioritisation',name:'Impact / effort prioritisation',phase:'Strategise',d:'Weigh opportunities against user value, feasibility and operational cost with the people who will deliver them.',out:'Prioritisation matrix'},
  {id:'roadmap',name:'Service roadmap',phase:'Strategise',d:'Sequence improvements into now / next / later so strategy becomes deliverable work.',out:'Now–next–later roadmap'},
  {id:'prototyping',name:'Rapid prototyping',phase:'Deliver',d:'Low-fidelity concepts built fast, to test an idea before anyone commits budget to it.',out:'Paper & clickable prototypes'},
  {id:'usability',name:'Usability testing',phase:'Deliver',d:'Observed, task-based sessions that turn opinions about an interface into evidence.',out:'Findings & fixes list'}
];
const PHASES = ['All','Frame','Discover','Define','Strategise','Deliver'];
const FILTERS = ['All','Strategy','Service design','Research','Co-design','Community'];
const NOW = new Date(), NOWY = NOW.getFullYear() + NOW.getMonth() / 12;
const TCS_YRS = Math.max(4, NOW.getFullYear() - 2022 - (NOW.getMonth() < 9 ? 1 : 0));
const NUMW = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve'];
const TCS_WORD = NUMW[TCS_YRS] || String(TCS_YRS);
const T0 = 2018, T1 = Math.max(2027, Math.ceil(NOWY + 0.25));
const TIMELINE = [
  {id:'bdes',row:0,title:'B.Des Product Design',org:'Amity University, Noida',dates:'2018 — 2022',s:2018.6,e:2022.45,pts:['Undergraduate degree in product design — the foundation for a human-centred practice.']},
  {id:'ma',row:0,title:'MA Design Management',org:'London College of Communication, UAL',dates:'2025 — 2026',s:2025.7,e:2026.75,pts:['Design management and strategy, completed alongside professional practice.','The academic grounding for the move from UX into strategy.']},
  {id:'ime',row:1,title:'UI/UX Design Intern',org:'Indian Music Experience Museum · British Council',dates:'Jan — Aug 2022',s:2022.0,e:2022.65,pts:['Planned and facilitated participatory design sessions and co-design workshops.','Used rapid prototyping, personas and low-fidelity blueprints to test concepts and support implementation-ready recommendations.']},
  {id:'tcs',row:1,title:'UI/UX & Service Designer',org:'Tata Consultancy Services',dates:'Oct 2022 — present · ' + TCS_YRS + '+ yrs',s:2022.75,e:Math.max(2026.75, NOWY),pts:['Planned and conducted discovery research across healthcare-related service and digital projects.','Facilitated workshops, co-design sessions and user testing.','Created journey maps, user flows and service processes in Figma.','Balanced user needs with operational and technical constraints alongside BAs, developers and stakeholders.']},
  {id:'amb',row:2,title:'Student Ambassador',org:'London College of Communication',dates:'Sep 2025 — present',s:2025.67,e:Math.max(2026.3, NOWY - 0.6),pts:['Gathered lived-experience insights from diverse student groups to support more inclusive service interactions.','Documented recurring feedback; supported events and public-facing activity.']},
  {id:'halls',row:2,title:'Community Lead',org:'UAL Halls Life',dates:'Dec 2025 — present',s:2026.32,e:Math.max(2026.95, NOWY + 0.05),pts:['Supported diverse student communities, including those with additional needs.','Identified recurring concerns across touchpoints, contributing to more responsive support.']}
];
const pct = v => ((v - T0) / (T1 - T0) * 100).toFixed(3) + '%';
const INK = '#000000', CREAM = '#f4f4f4', RED = 'var(--yj-accent, #ff4d2e)';
const MONO = "Geist,sans-serif", SERIF = "'Instrument Serif',serif";
const SCRIM = 'linear-gradient(to top, rgba(0,0,0,0.62), rgba(0,0,0,0) 42%)';
const REVEAL = {
  wipe:['inset(0 100% 0 0)','inset(0 0% 0 0)'], rise:['inset(100% 0 0 0)','inset(0% 0 0 0)'],
  circle:['circle(0% at 50% 60%)','circle(110% at 50% 60%)'], diag:['polygon(0 0,0 0,0 0)','polygon(0 0,220% 0,0 220%)']
};

class Component extends DCLogic {
  state = { screen:'home', face:0, hp:0, ci:0, si:0, phase:'All', mid:'journey', tid:'tcs', filter:'All', ctaHover:false, nextHover:false };
  heroRef = React.createRef();
  chatRef = React.createRef();
  navRef = React.createRef(); subNavRef = React.createRef(); jRef = React.createRef();
  storyRef = React.createRef(); storyBar = React.createRef();
  scrollToStory(j) { const el = this.storyRef.current && this.storyRef.current.querySelector(`[data-story="${j}"]`); if (el) window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - 150, behavior:'smooth'}); }
  syncStory() {
    const root = this.storyRef.current; if (!root) return;
    const items = root.querySelectorAll('[data-story]'); if (!items.length) return;
    const mid = window.innerHeight * 0.5; let si = 0;
    [...items].map(el => ({t:el.getBoundingClientRect().top, j:+el.getAttribute('data-story')})).sort((a, b) => a.t - b.t).forEach(o => { if (o.t < mid && o.j < 90) si = o.j; });
    const r = root.getBoundingClientRect(), p = Math.min(1, Math.max(0, (mid - r.top) / r.height));
    if (this.storyBar.current) this.storyBar.current.style.width = (p * 100) + '%';
    if (si !== this.state.si) this.setState({si});
  }
  mzRef = React.createRef(); mzTrack = React.createRef(); mzBar = React.createRef();
  mzDist() { const t = this.mzTrack.current; return t ? Math.max(0, t.scrollWidth - window.innerWidth) : 0; }
  syncMz() {
    const w = this.mzRef.current, t = this.mzTrack.current; if (!w || !t) return;
    const dist = this.mzDist(), H = Math.round(window.innerHeight + dist) + 'px';
    if (this.state.mzH !== H) this.setState({mzH:H});
    const p = dist ? Math.min(1, Math.max(0, -w.getBoundingClientRect().top / dist)) : 0;
    t.style.transform = `translate3d(${-p * dist}px,0,0)`;
    if (this.mzBar.current) this.mzBar.current.style.width = (p * 100) + '%';
    const cards = t.querySelectorAll('[data-phase]'), cx = window.innerWidth * 0.35; let ph = null;
    cards.forEach(c => { const r = c.getBoundingClientRect(); if (r.left <= cx) ph = c.getAttribute('data-phase'); });
    ph = ph || (cards[0] && cards[0].getAttribute('data-phase'));
    if (ph && ph !== this.state.mzPhase) this.setState({mzPhase:ph});
  }
  mzGo(ph) {
    const w = this.mzRef.current, t = this.mzTrack.current; if (!w || !t) return;
    const c = t.querySelector(`[data-phase="${ph}"]`); if (!c) return;
    const dist = this.mzDist(), x = Math.min(dist, Math.max(0, c.offsetLeft - 48));
    const top = w.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({top: top + x + 2, behavior:'smooth'});
  }
  hzRef = React.createRef(); hzTrack = React.createRef(); hzBar = React.createRef();
  armDrops() {
    if (typeof IntersectionObserver === 'undefined') return;
    if (!this._dropSeen) this._dropSeen = new WeakSet();
    if (!this._dropIO) this._dropIO = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return; const el = e.target; this._dropIO.unobserve(el);
      if (el._hold) el._hold.cancel();
      el.animate([{transform:'translateY(-75vh)', opacity:0}, {transform:'translateY(18px)', opacity:1, offset:0.62}, {transform:'translateY(-8px)', offset:0.8}, {transform:'translateY(0)', opacity:1}],
        {duration:1300, easing:'cubic-bezier(.3,.7,.35,1)'});
    }), {threshold:0.25});
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('[data-yj-drop]').forEach(el => {
      if (this._dropSeen.has(el)) return; this._dropSeen.add(el); if (reduce) return;
      el._hold = el.animate([{transform:'translateY(-75vh)', opacity:0}], {duration:1, fill:'forwards'});
      this._dropIO.observe(el);
    });
  }
  armMotion() {
    if (typeof IntersectionObserver === 'undefined') return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!this._mvSeen) this._mvSeen = new WeakSet();
    const K = {
      up: [{opacity:0, translate:'0 48px'}, {opacity:1, translate:'0 0'}],
      fade: [{opacity:0}, {opacity:1}],
      scale: [{opacity:0, scale:'0.94', translate:'0 32px'}, {opacity:1, scale:'1', translate:'0 0'}],
      mask: [{clipPath:'inset(99% -5% -15% -5%)', translate:'0 0.35em'}, {clipPath:'inset(-15% -5% -15% -5%)', translate:'0 0'}],
      wipe: [{clipPath:'inset(14% 8% 14% 8%)', opacity:0.2, scale:'1.04'}, {clipPath:'inset(0% 0% 0% 0%)', opacity:1, scale:'1'}]
    };
    if (!this._mvIO) this._mvIO = new IntersectionObserver(es => { let i = 0;
      es.forEach(e => { if (!e.isIntersecting) return; const el = e.target; this._mvIO.unobserve(el);
        const v = el.dataset.yjRv, k = K[v] || K.up;
        el.animate(k, {duration: v === 'mask' || v === 'wipe' ? 1300 : 950, delay: Math.min(i++, 6) * 90, easing:'cubic-bezier(.16,1,.3,1)', fill:'backwards'});
        if (el._hold) { el._hold.cancel(); el._hold = null; }
      }); }, {threshold:0.12, rootMargin:'0px 0px -6% 0px'});
    document.querySelectorAll('[data-yj-rv]').forEach(el => {
      if (this._mvSeen.has(el)) return; this._mvSeen.add(el); if (reduce) return;
      el._hold = el.animate([(K[el.dataset.yjRv] || K.up)[0]], {duration:1, fill:'forwards'});
      this._mvIO.observe(el);
    });
    this._pxEls = reduce ? [] : Array.from(document.querySelectorAll('[data-yj-px]'));
    requestAnimationFrame(() => this.syncPx()); setTimeout(() => this.syncPx(), 400);
    document.querySelectorAll('[data-yj-pulse]').forEach(el => {
      if (this._mvSeen.has(el)) return; this._mvSeen.add(el); if (reduce) return;
      el.animate([{boxShadow:'0 0 0 1.5px #000, 0 0 0 0 rgba(255,77,46,0.65)'}, {boxShadow:'0 0 0 1.5px #000, 0 0 0 9px rgba(255,77,46,0)'}], {duration:1800, iterations:Infinity, easing:'ease-out'});
    });
    document.querySelectorAll('[data-yj-mag]').forEach(el => {
      if (this._mvSeen.has(el)) return; this._mvSeen.add(el); if (reduce || !matchMedia('(hover: hover)').matches) return;
      el.style.transition = (el.style.transition ? el.style.transition + ', ' : '') + 'translate 450ms cubic-bezier(.2,.8,.2,1)';
      el.addEventListener('mousemove', e => { const r = el.getBoundingClientRect(); el.style.translate = ((e.clientX - r.left - r.width / 2) * 0.22).toFixed(1) + 'px ' + ((e.clientY - r.top - r.height / 2) * 0.35).toFixed(1) + 'px'; });
      el.addEventListener('mouseleave', () => { el.style.translate = '0 0'; });
    });
  }
  syncPx() {
    if (this._mvIO) document.querySelectorAll('[data-yj-rv]').forEach(el => { if (!el._hold) return; const r = el.getBoundingClientRect(); if (r.top < window.innerHeight * 0.9 && r.bottom > 0) { el._hold.cancel(); el._hold = null; this._mvIO.unobserve(el); el.animate([{clipPath:'inset(99% -5% -15% -5%)', opacity:0}, {clipPath:'inset(-15% -5% -15% -5%)', opacity:1}], {duration:900, easing:'cubic-bezier(.16,1,.3,1)'}); } });
    const L = this._pxEls; if (!L || !L.length) return; const vh = window.innerHeight;
    for (const el of L) { if (!el.isConnected || !el.parentElement) continue;
      const r = el.parentElement.getBoundingClientRect(); if (r.bottom < -200 || r.top > vh + 200) continue;
      const m = +(el.dataset.yjPxmax || 9999); let o = (r.top + r.height / 2 - vh / 2) * (+el.dataset.yjPx || 0);
      o = Math.max(-m, Math.min(m, o)); el.style.translate = '0 ' + o.toFixed(1) + 'px'; }
  }
  protoWrap = React.createRef();
  protoCheck(src) {
    if (!src || this._pvChecked === src) return; this._pvChecked = src;
    const v = document.createElement('video'); v.muted = true; v.preload = 'metadata';
    v.onloadedmetadata = () => this.setState({protoVidOk:src}); v.src = src;
  }
  protoArm() { clearTimeout(this._pt); const c = CASES[this.state.ci || 0]; c && this.protoCheck(c.protoVideo); this._pt = setTimeout(() => { if (!this._pIn) this.setState({protoLoop:true}); }, 5000); }
  syncHz() {
    const w = this.hzRef.current, t = this.hzTrack.current; if (!w || !t) return;
    const dist = Math.max(0, t.scrollWidth - window.innerWidth);
    const H = Math.round(window.innerHeight + dist) + 'px';
    if (this.state.hzH !== H) this.setState({hzH:H});
    const p = dist ? Math.min(1, Math.max(0, -w.getBoundingClientRect().top / dist)) : 0;
    t.style.transform = `translate3d(${-p * dist}px,0,0)`;
    if (this.hzBar.current) this.hzBar.current.style.width = (p * 100) + '%';
  }

  static Img = function Img(p) {
    const h = React.createElement, [bad, setBad] = React.useState(false);
    if (bad || !p.src) return h('div', {style:{position:'absolute', inset:0, background:p.tone || '#141414', display:'flex', alignItems:'flex-start', padding:'88px 24px 24px', boxSizing:'border-box', font:`12px ${MONO}`, letterSpacing:'0.06em', textTransform:'uppercase', color:'rgba(244,244,244,0.7)'}}, p.label);
    return h('img', {src:p.src, alt:p.alt || '', onError:() => setBad(true), style:{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:p.pos || '50% 50%', transform:p.zoom ? `scale(${p.zoom})` : undefined, transformOrigin:p.pos || '50% 50%'}});
  };

  static K = function K(p) {
    const h = React.createElement, wrap = React.useRef(null), tiltR = React.useRef(null), par = React.useRef(null);
    const [seen, setSeen] = React.useState(false), [hov, setHov] = React.useState(false);
    const lvl = p.level === 'off' ? 0 : p.level === 'subtle' ? 0.5 : 1;
    const jit = React.useMemo(() => 0.95 + Math.random() * 0.1, []);
    const room = (p.parallax || p.shift) ? 1.14 : 1.04;
    React.useEffect(() => {
      const el = wrap.current; if (!el) return;
      if (!lvl) { setSeen(true); return; }
      const io = new IntersectionObserver(es => { if (es[0].isIntersecting) setSeen(true); }, {threshold:0.15});
      io.observe(el);
      let raf; const loop = () => {
        const r = el.getBoundingClientRect(), vh = window.innerHeight;
        if (par.current && r.bottom > -100 && r.top < vh + 100) {
          const pr = Math.max(-1, Math.min(1, ((r.top + r.height / 2) - vh / 2) / (vh / 2 + r.height / 2)));
          const sk = p.skew ? Math.max(-3.5, Math.min(3.5, (window.__kv || 0) * 0.12)) * lvl : 0;
          par.current.style.transform = `translate3d(${(p.shift || 0) * pr * lvl}px,${(p.parallax || 0) * pr * lvl}px,0) skewY(${sk.toFixed(2)}deg) scale(${room})`;
        }
        raf = requestAnimationFrame(loop);
      }; raf = requestAnimationFrame(loop);
      return () => { io.disconnect(); cancelAnimationFrame(raf); };
    }, [lvl]);
    const d = (p.delay || 0) * jit, ease = 'cubic-bezier(.65,0,.35,1)';
    const rv = lvl && REVEAL[p.reveal] ? REVEAL[p.reveal] : null;
    const move = e => {
      if (!p.tilt || !lvl || !tiltR.current) return;
      const r = wrap.current.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      tiltR.current.style.transform = `perspective(900px) rotateX(${(-y * 6 * lvl).toFixed(2)}deg) rotateY(${(x * 8 * lvl).toFixed(2)}deg)`;
      tiltR.current.style.boxShadow = `${(-x * 22).toFixed(1)}px ${(-y * 22 + 14).toFixed(1)}px 40px rgba(0,0,0,0.45)`;
    };
    const leave = () => { setHov(false); if (tiltR.current) { tiltR.current.style.transform = 'perspective(900px)'; tiltR.current.style.boxShadow = 'none'; } };
    const blocks = p.reveal === 'blocks' && lvl ? Array.from({length:24}, (_, i) => h('div', {key:i, style:{background:p.mask || INK,
      transform: seen ? 'scale(0)' : 'scale(1.02)', transition:`transform 620ms ${ease} ${d + ((i % 6) + Math.floor(i / 6)) * 70}ms`}})) : null;
    return h('div', {ref:wrap, onMouseMove:move, onMouseEnter:() => setHov(true), onMouseLeave:leave, onClick:p.onClick, role:p.onClick ? 'button' : undefined, 'aria-label':p.label,
        style:{position:'absolute', inset:0, cursor:p.onClick ? 'pointer' : 'default'}},
      h('div', {ref:tiltR, style:{position:'absolute', inset:0, transform:'perspective(900px)', transition:'transform 450ms cubic-bezier(.2,.7,.2,1), box-shadow 450ms', willChange:'transform'}},
        h('div', {style:{position:'absolute', inset:0, overflow:'hidden', clipPath: rv ? (seen ? rv[1] : rv[0]) : 'none', transition:`clip-path ${1150 * jit}ms ${ease} ${d}ms`}},
          h('div', {ref:par, style:{position:'absolute', inset:0, transform:`scale(${room})`, willChange:'transform'}},
            h('div', {style:{position:'absolute', inset:0, transformOrigin:'50% 60%',
              transform: (seen || !p.settle || !lvl) ? `scale(${hov && p.onClick && lvl ? 1.05 : 1})` : `scale(${1 + .1 * lvl}) rotate(${3 * lvl}deg)`,
              filter: p.blur && lvl && !seen ? 'blur(16px)' : 'blur(0px)',
              transition:`transform ${hov ? 700 : 1500 * jit}ms cubic-bezier(.2,.7,.2,1) ${hov ? 0 : d}ms, filter ${1300 * jit}ms ease ${d + 150}ms`}}, p.children)),
          blocks && h('div', {style:{position:'absolute', inset:0, display:'grid', gridTemplateColumns:'repeat(6,1fr)', gridTemplateRows:'repeat(4,1fr)', pointerEvents:'none'}}, blocks)),
        p.hoverLabel && h('div', {style:{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', pointerEvents:'none', zIndex:3}},
          h('span', {style:{background:CREAM, color:INK, borderRadius:999, padding:'14px 24px', fontSize:17, fontWeight:600, whiteSpace:'nowrap', boxShadow:'0 10px 30px rgba(0,0,0,.35)',
            opacity: hov ? 1 : 0, transform: hov ? 'scale(1)' : 'scale(.85)', transition:`transform 420ms ${ease}, opacity 300ms`}}, p.hoverLabel + ' →'))));
  };

  static Morph = function Morph() {
    const h = React.createElement, [i, setI] = React.useState(0);
    React.useEffect(() => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const t = setInterval(() => setI(n => n + 1), 1500); return () => clearInterval(t);
    }, []);
    const A = 'var(--yj-accent, #ff4d2e)', W = '#f4f4f4';
    const S = [
      {background:A, borderRadius:'50%', inset:'10% 0'},
      {background:W, inset:'14% 6%', rotate:'45deg', scale:'0.82'},
      {background:A, clipPath:'polygon(50% 0,100% 100%,0 100%)', inset:'8% 0'},
      {background:W, borderRadius:'999px 999px 0 0', inset:'0 0'},
      {background:A, clipPath:'polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)', inset:'6% -4%'},
      {background:W, clipPath:'polygon(35% 0,65% 0,65% 35%,100% 35%,100% 65%,65% 65%,65% 100%,35% 100%,35% 65%,0 65%,0 35%,35% 35%)', inset:'10% 0'},
      {background:A, borderRadius:'50% 50% 50% 0', inset:'10% 0'},
      {background:W, clipPath:'polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%)', inset:'12% 0'}
    ];
    const cur = i % S.length;
    return h('span', {'aria-hidden':true, style:{position:'absolute', inset:0, display:'block'}},
      S.map((s, k) => h('span', {key:k, style:{position:'absolute', display:'block', ...s,
        opacity: k === cur ? 1 : 0, scale: k === cur ? (s.scale || '1') : '0.2', rotate: k === cur ? (s.rotate || '0deg') : '-90deg',
        transition:'opacity 450ms ease, scale 650ms cubic-bezier(.3,1.6,.4,1), rotate 650ms cubic-bezier(.3,1.4,.4,1)'}})));
  };

  static Sketch = function Sketch(p) {
    const h = React.createElement, [k, setK] = React.useState(0), [on, setOn] = React.useState(false);
    const ref = React.useRef(null);
    React.useEffect(() => {
      const host = ref.current && ref.current.closest('button'); if (!host) return;
      const enter = () => { setOn(true); setK(x => x + 1); }, leave = () => setOn(false);
      host.addEventListener('mouseenter', enter); host.addEventListener('mouseleave', leave);
      return () => { host.removeEventListener('mouseenter', enter); host.removeEventListener('mouseleave', leave); };
    }, []);
    const paths = [
      ['M28 9c-6-1-11 3-12 10-1 5 1 9-1 13-2 4 0 7 3 9', 1.5, 0],
      ['M28 9c6-1 11 3 12 10 1 5-1 9 1 13 2 4 0 7-3 9', 1.5, 60],
      ['M28 9c-.4 2-1.6 3.4-3.8 4.4M28 9c1.2 2 3.4 3.2 6.4 3.8', 1.2, 180],
      ['M20.5 21c0-6 3.4-9.6 7.5-9.6s7.5 3.6 7.5 9.6c0 6-3.4 10.4-7.5 10.4S20.5 27 20.5 21', 1.4, 220],
      ['M23 18.4c1-.8 2.4-.8 3.4 0M30.6 18.4c1-.8 2.4-.8 3.4 0', 1.2, 420],
      ['M23.6 20.8c.7.7 1.6.7 2.2 0M30.2 20.8c.7.7 1.6.7 2.2 0', 1.4, 470],
      ['M28 22.4c-.3 1.4-.6 2.3.5 2.5', 1.1, 520],
      ['M24.2 26.2c2 2.8 5.6 2.8 7.6 0M24.8 26.7c1.9.7 4.5.7 6.4 0', 1.3, 570],
      ['M20.8 31c3 3.2 11.4 3.2 14.4 0M20.4 33.2c4 3.6 11.2 3.6 15.2 0', 1.4, 330],
      ['M22.4 34.6c-1.2 6-1.2 11.6 0 17.4M33.6 34.6c1.2 6 1.2 11.6 0 17.4M26.4 36.4c-.6 5.2 0 10.4 1 15.6', 1.3, 400],
      ['M18 37c-5 2-8 6-9 15M38 37c5 2 8 6 9 15', 1.4, 280],
      ['M30.4 42.4a1.1 1.1 0 1 1-2.2 0a1.1 1.1 0 1 1 2.2 0M30.6 48.4a1.1 1.1 0 1 1-2.2 0a1.1 1.1 0 1 1 2.2 0', 1.1, 680]
    ];
    const D = 700;
    return h('svg', {ref, key:k, viewBox:'6 6 44 46', width:p.size, height:p.size, fill:'none', stroke:'#000000', strokeLinecap:'round', strokeLinejoin:'round', 'aria-hidden':true,
      style:{display:'block', overflow:'visible', transformOrigin:'50% 60%', transition:'transform 600ms cubic-bezier(.34,1.56,.64,1)', transform: on ? 'rotate(-6deg) scale(1.06)' : 'none'}},
      paths.map(([d, w, delay], i) => h('path', {key:i, d, strokeWidth:w * (p.weight || 1), pathLength:1,
        style: k ? {strokeDasharray:1, strokeDashoffset:1, animation:`yjDraw ${D}ms cubic-bezier(.65,0,.35,1) ${delay}ms forwards`} : {}})));
  };

  static Loader = function Loader(p) {
    // Landing: a clear-sleeve ID badge on a two-strand lanyard (verlet rope physics)
    // above the name set huge along the bottom. Drag/fling the badge; click it,
    // press Enter or use [enter] to go in.
    const h = React.createElement, strapA = React.useRef(null), strapB = React.useRef(null), card = React.useRef(null);
    const [out, setOut] = React.useState(false), [grab, setGrab] = React.useState(false);
    const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    const S = React.useRef({drag:null, leaving:false, lt:0, pts:[], N:16, rot:0});
    const CLIP = 44;
    const enter = React.useCallback(() => {
      const s = S.current; if (s.leaving) return; s.leaving = true; s.lt = performance.now(); s.drag = null;
      setTimeout(() => setOut(true), reduce ? 0 : 420); setTimeout(p.onDone, reduce ? 300 : 1150);
    }, []);
    React.useEffect(() => {
      const s = S.current, N = s.N; let raf, W, H, seg, ax, ay, spread;
      const size = () => { W = innerWidth; H = innerHeight; ax = W < 640 ? W * .68 : W / 2; ay = -12; spread = Math.min(80, W * .07); seg = Math.max(120, H * (W < 640 ? .3 : .36)) / (N - 1);
        if (!s.pts.length) for (let i = 0; i < N; i++) { const x = ax + i * seg * (reduce ? 0 : .7), y = ay + i * seg * (reduce ? 1 : .72); s.pts.push({x, y, px:x, py:y}); } };
      size(); addEventListener('resize', size);
      const key = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); enter(); } };
      addEventListener('keydown', key);
      const tick = t => {
        const P = s.pts, L = P[N - 1];
        if (s.leaving) ay -= Math.min(60, 2 + (t - s.lt) * .05);
        for (let i = 1; i < N; i++) { const q = P[i], vx = (q.x - q.px) * .985, vy = (q.y - q.py) * .985; q.px = q.x; q.py = q.y; q.x += vx; q.y += vy + .55; }
        for (let it = 0; it < 14; it++) {
          P[0].x = ax; P[0].y = ay;
          if (s.drag) { L.x = s.drag.x; L.y = s.drag.y; }
          for (let i = 0; i < N - 1; i++) { const a = P[i], b = P[i + 1], dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || 1, k = (d - seg) / d;
            const last = i + 1 === N - 1 && s.drag, fa = i === 0 ? 0 : (last ? 1 : .5), fb = i === 0 ? 1 : (last ? 0 : .5);
            a.x += dx * k * fa; a.y += dy * k * fa; b.x -= dx * k * fb; b.y -= dy * k * fb; }
        }
        const B = P[N - 2], target = -Math.atan2(L.x - B.x, L.y - B.y) * 180 / Math.PI;
        s.rot += (target - s.rot) * .2;
        if (card.current) card.current.style.transform = `translate3d(${L.x}px,${L.y}px,0) translateX(-50%) rotate(${s.rot}deg)`;
        const path = sgn => { const pt = i => { const f = 1 - i / (N - 1); return [P[i].x + sgn * spread * f * f, P[i].y]; };
          let [x0, y0] = pt(0), d = `M${x0},${y0}`;
          for (let i = 1; i < N - 1; i++) { const [mx, my] = pt(i), [nx, ny] = pt(i + 1); d += ` Q${mx},${my} ${(mx + nx) / 2},${(my + ny) / 2}`; }
          return d + ` L${L.x},${L.y}`; };
        strapA.current && strapA.current.setAttribute('d', path(-1)); strapB.current && strapB.current.setAttribute('d', path(1));
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => { cancelAnimationFrame(raf); removeEventListener('resize', size); removeEventListener('keydown', key); };
    }, []);
    const down = e => { const s = S.current; if (s.leaving) return; const L = s.pts[s.N - 1]; e.currentTarget.setPointerCapture(e.pointerId);
      s.drag = {x:L.x, y:L.y, ox:e.clientX - L.x, oy:e.clientY - L.y, sx:e.clientX, sy:e.clientY, moved:0}; setGrab(true); };
    const move = e => { const g = S.current.drag; if (!g) return; g.x = e.clientX - g.ox; g.y = e.clientY - g.oy; g.moved = Math.max(g.moved, Math.hypot(e.clientX - g.sx, e.clientY - g.sy)); };
    const up = () => { const s = S.current, g = s.drag; if (!g) return; s.drag = null; setGrab(false); if (g.moved < 6) enter(); };
    const ink = '#f4f4f4', serif = "'Source Serif 4', Georgia, serif", display = "'DM Serif Display', Georgia, serif", accent = '#ff4d2e', grey = '#8a8a8a';
    const corner = {fontFamily:serif, fontSize:'clamp(14px, 1.15vw, 17px)', lineHeight:1.3, maxWidth:300, margin:0};
    const bracket = (label, onClick) => h('button', {onClick, style:{all:'unset', cursor:'pointer', color:grey, textDecoration:'underline', textUnderlineOffset:3}}, '[' + label + ']');
    const chip = (txt, bg) => h('span', {style:{display:'inline-block', padding:'3px 8px', borderRadius:999, background:bg, color:'#fff', fontSize:10, fontWeight:600, whiteSpace:'nowrap'}}, txt);
    return h('div', {role:'dialog', 'aria-label':'Welcome. Press Enter to view the portfolio',
        style:{position:'fixed', inset:0, zIndex:10000, background:'#000000', color:ink, overflow:'hidden', touchAction:'none',
          opacity:out ? 0 : 1, transform:out ? 'translateY(-2%)' : 'none', pointerEvents:out ? 'none' : 'auto', transition:'opacity 650ms ease, transform 650ms ease'}},
      h('style', null, '@media (max-width:640px){.yj-land-r{display:none}.yj-land-l{max-width:52vw!important}}'),
      h('div', {style:{position:'absolute', top:'clamp(28px, 9vh, 96px)', left:'clamp(20px, 8vw, 120px)', right:'clamp(20px, 8vw, 120px)', display:'flex', justifyContent:'space-between', gap:24}},
        h('p', {className:'yj-land-l', style:corner}, 'Product & service designer, working across research, strategy & design. ', bracket('enter', enter)),
        h('p', {className:'yj-land-r', style:{...corner, textAlign:'right'}}, 'Case studies with Johnson & Johnson, Pfizer & the British Council.')),
      h('div', {'aria-hidden':true, style:{position:'absolute', left:0, right:0, bottom:'-0.17em', textAlign:'center', whiteSpace:'nowrap', fontFamily:display,
          fontWeight:400, fontSize:'clamp(84px, 22vw, 440px)', lineHeight:1, letterSpacing:'-0.035em', pointerEvents:'none'}}, 'Yashvi Jain'),
      h('svg', {'aria-hidden':true, style:{position:'absolute', inset:0, width:'100%', height:'100%', overflow:'visible', pointerEvents:'none', filter:'drop-shadow(6px 10px 8px rgba(0,0,0,.6))'}},
        h('path', {ref:strapA, fill:'none', stroke:'#5c5c5c', strokeWidth:9, strokeLinecap:'round', strokeLinejoin:'round'}),
        h('path', {ref:strapB, fill:'none', stroke:'#6e6e6e', strokeWidth:9, strokeLinecap:'round', strokeLinejoin:'round'})),
      h('div', {ref:card, role:'button', tabIndex:0, 'data-cursor':'Drag', 'aria-label':'Yashvi Jain badge. Click to enter', onPointerDown:down, onPointerMove:move, onPointerUp:up, onPointerCancel:up,
          style:{position:'absolute', left:0, top:0, width:'clamp(200px, 54vw, 270px)', paddingTop:CLIP, transformOrigin:'50% 0', cursor:grab ? 'grabbing' : 'grab', userSelect:'none', willChange:'transform'}},
        // metal swivel clip from the strap knot down into the sleeve's slot
        h('svg', {width:22, height:CLIP + 14, viewBox:`0 0 22 ${CLIP + 14}`, style:{position:'absolute', left:'50%', top:0, marginLeft:-11, zIndex:2, overflow:'visible'}},
          h('defs', null, h('linearGradient', {id:'yjMetal', x1:0, x2:1}, h('stop', {offset:0, stopColor:'#9a9a9a'}), h('stop', {offset:.5, stopColor:'#f2f2f2'}), h('stop', {offset:1, stopColor:'#8c8c8c'}))),
          h('rect', {x:6, y:0, width:10, height:16, rx:3, fill:'url(#yjMetal)', stroke:'#777', strokeWidth:.6}),
          h('rect', {x:3, y:14, width:16, height:12, rx:3, fill:'none', stroke:'url(#yjMetal)', strokeWidth:3}),
          h('path', {d:`M11 26 L11 ${CLIP + 2} q0 6 -5 6`, fill:'none', stroke:'url(#yjMetal)', strokeWidth:2.6, strokeLinecap:'round'})),
        // clear plastic sleeve
        h('div', {style:{position:'relative', aspectRatio:'0.7', borderRadius:16, background:'linear-gradient(160deg, rgba(255,255,255,.2), rgba(255,255,255,.08))',
            border:'1px solid rgba(255,255,255,.28)', boxShadow:'0 30px 60px -20px rgba(0,0,0,.9), inset 0 0 0 4px rgba(255,255,255,.06), inset 0 1px 0 rgba(255,255,255,.35)', backdropFilter:'blur(1.5px)', WebkitBackdropFilter:'blur(1.5px)'}},
          h('span', {style:{position:'absolute', left:16, top:14, width:16, height:16, borderRadius:'50%', border:'1.5px solid rgba(255,255,255,.35)'}}),
          h('span', {style:{position:'absolute', right:16, top:14, width:16, height:16, borderRadius:'50%', border:'1.5px solid rgba(255,255,255,.35)'}}),
          h('span', {style:{position:'absolute', left:'50%', top:6, width:54, height:9, marginLeft:-27, borderRadius:6, border:'1.5px solid rgba(255,255,255,.35)', background:'#000'}}),
          h('span', {style:{position:'absolute', left:10, right:10, top:40, height:1, background:'rgba(255,255,255,.18)'}}),
          // printed insert
          h('div', {style:{position:'absolute', left:14, right:14, top:50, bottom:14, background:'#ffffff', color:'#0d0d0d', borderRadius:4, boxShadow:'0 0 0 1px rgba(0,0,0,.05)', padding:'18px 16px 14px', display:'flex', flexDirection:'column', justifyContent:'space-between', overflow:'hidden'}},
            h('div', {style:{fontFamily:display, fontWeight:400, fontSize:'clamp(40px, 13vw, 56px)', lineHeight:.86, letterSpacing:'-0.03em', transform:'rotate(-7deg)', transformOrigin:'0 0', marginTop:6}},
              h('div', null, 'Yashvi'), h('div', {style:{color:accent, marginLeft:'0.55em'}}, 'Jain')),
            h('div', {style:{fontFamily:serif, fontSize:11, color:grey, lineHeight:1.35}},
              h('div', {style:{fontStyle:'italic'}}, 'Studied'), h('div', {style:{color:'#555'}}, 'MA Design Management'),
              h('div', {style:{fontStyle:'italic', marginTop:8}}, 'Selected work'),
              h('div', {style:{display:'flex', flexWrap:'wrap', gap:4, marginTop:4}}, chip('Johnson & Johnson', '#c8102e'), chip('Pfizer', '#0000c9'), chip('British Council', '#232323')))))));
  };

  static Louvre = function Louvre(p) {
    const h = React.createElement, ref = React.useRef(null);
    const [sz, setSz] = React.useState({w:0,h:0}), [hot, setHot] = React.useState({}), [mx, setMx] = React.useState(null);
    const slatSt = React.useRef([]), prevIdx = React.useRef(p.index), lastJ = React.useRef(-1), timers = React.useRef({});
    React.useEffect(() => {
      const el = ref.current; if (!el) return;
      const ro = new ResizeObserver(() => setSz({w:el.clientWidth, h:el.clientHeight}));
      ro.observe(el); return () => { ro.disconnect(); Object.values(timers.current).forEach(clearTimeout); };
    }, []);
    const n = p.n || 20, k = p.faces.length, sw = sz.w / n;
    const idxChanged = prevIdx.current !== p.index; prevIdx.current = p.index;
    const cool = j => { clearTimeout(timers.current[j]); timers.current[j] = setTimeout(() => setHot(o => { const c = {...o}; delete c[j]; return c; }), 520); };
    const heat = j => { clearTimeout(timers.current[j]); setHot(o => o[j] ? o : {...o, [j]:true}); };
    const slats = [], pop = p.pop ?? 1.2, sig = 0.85;
    const g = [...Array(n)].map((_, i) => mx == null ? 0 : Math.exp(-Math.pow(i + .5 - mx * n, 2) / (2 * sig * sig)));
    const wts = g.map(v => 1 + pop * v), tot = wts.reduce((a, b) => a + b, 0);
    let acc = 0; const L = [], W = [];
    wts.forEach(v => { const w = v / tot * sz.w; L.push(acc); W.push(w); acc += w; });
    const EASE = 'cubic-bezier(.22,1,.36,1)';
    if (sz.w > 0) for (let i = 0; i < n; i++) {
      const target = p.hoverFlip && hot[i] ? (p.index + 1) % k : p.index;
      let st = slatSt.current[i] || (slatSt.current[i] = {r:0, a:target, b:target, delay:0, dur:0});
      const shown = st.r % 2 === 0 ? st.a : st.b;
      if (shown !== target) {
        if (st.r % 2 === 0) st.b = target; else st.a = target;
        st.r += 1;
        st.delay = idxChanged ? i * (p.stagger ?? 34) : 0;
        st.dur = idxChanged ? (p.dur || 1300) : 820;
      }
      const side = (f, back) => h('div', {key:back ? 'b' : 'a', style:{position:'absolute', inset:0, overflow:'hidden', backfaceVisibility:'hidden', WebkitBackfaceVisibility:'hidden',
          transform: back ? 'rotateY(180deg)' : 'rotateY(0deg)', boxShadow:'inset -1px 0 0 rgba(0,0,0,0.22)'}},
        h('div', {style:{position:'absolute', top:0, left:-L[i], width:sz.w, height:sz.h, transition:`left 700ms ${EASE}`}}, p.faces[f]));
      const lift = g[i];
      slats.push(h('div', {key:i, style:{position:'absolute', top:0, bottom:0, left:L[i], width:W[i] + 1, zIndex: Math.round(lift * 10),
          transformStyle:'preserve-3d', transform:`translateZ(${lift * 60}px) scaleY(${1 + lift * 0.02})`,
          boxShadow: lift > .05 ? `0 0 ${40 * lift}px rgba(0,0,0,${0.55 * lift})` : 'none',
          transition:`left 700ms ${EASE}, width 700ms ${EASE}, transform 700ms ${EASE}, box-shadow 700ms ${EASE}`}},
        h('div', {style:{position:'absolute', inset:0, transformStyle:'preserve-3d', willChange:'transform',
          transform:`rotateY(${-180 * st.r}deg)`, transition:`transform ${st.dur || 1300}ms cubic-bezier(.65,0,.35,1) ${st.delay}ms`}}, [side(st.a, false), side(st.b, true)])));
    }
    return h('div', {ref, role:p.onClick ? 'button' : undefined, 'aria-label':p.label,
      onMouseMove: e => { if (!sw) return; const r = ref.current.getBoundingClientRect(); const fx = (e.clientX - r.left) / r.width;
        if (p.popHover !== false) setMx(fx);
        if (!p.hoverFlip) return; let j = 0; while (j < n - 1 && L[j + 1] <= e.clientX - r.left) j++;
        if (j !== lastJ.current) { if (lastJ.current >= 0) cool(lastJ.current); lastJ.current = j; heat(j); } },
      onMouseEnter: p.onEnter, onMouseLeave: () => { setMx(null); if (lastJ.current >= 0) cool(lastJ.current); lastJ.current = -1; p.onLeave && p.onLeave(); }, onClick: p.onClick,
      style:{position:'absolute', inset:0, perspective:p.perspective || '2400px', cursor:p.onClick ? 'pointer' : 'default', overflow:'hidden', background:INK}}, slats);
  };

  mountCursor() {
    if (this._cur || !window.matchMedia('(pointer:fine)').matches) return;
    const el = document.createElement('div'), lab = document.createElement('span');
    el.setAttribute('aria-hidden', 'true');
    Object.assign(el.style, {position:'fixed', left:'0', top:'0', width:'24px', height:'24px', marginLeft:'-12px', marginTop:'-12px', borderRadius:'50%', background:'#f4f4f4',
      mixBlendMode:'difference', pointerEvents:'none', zIndex:'10001', display:'flex', alignItems:'center', justifyContent:'center',
      transition:'width 450ms cubic-bezier(.22,1,.36,1), height 450ms cubic-bezier(.22,1,.36,1), margin 450ms cubic-bezier(.22,1,.36,1), opacity 250ms', opacity:'0', willChange:'transform'});
    Object.assign(lab.style, {fontFamily:"Geist,sans-serif", fontSize:'11px', letterSpacing:'0.08em', textTransform:'uppercase', color:'#000000', opacity:'0', transition:'opacity 250ms', whiteSpace:'nowrap'});
    el.appendChild(lab); document.body.appendChild(el); document.documentElement.classList.add('yj-cur');
    let tx = -100, ty = -100, x = -100, y = -100, size = 24;
    const setSize = (n, text) => { if (n === size && lab.textContent === (text || '')) return; size = n; el.style.width = el.style.height = n + 'px'; el.style.marginLeft = el.style.marginTop = (-n / 2) + 'px'; lab.textContent = text || ''; lab.style.opacity = text ? '1' : '0'; };
    this._curMove = e => {
      tx = e.clientX; ty = e.clientY; el.style.opacity = '1';
      const t = e.target.closest ? e.target.closest('button, a, [role="button"]') : null;
      if (!t) setSize(24);
      else if (t.getAttribute('data-cursor')) setSize(84, t.getAttribute('data-cursor'));
      else if (t.closest('[aria-label="Featured work"]') || t.getAttribute('aria-label') === 'Contact') setSize(110, 'View');
      else setSize(64);
    };
    this._curLeave = () => { el.style.opacity = '0'; };
    window.addEventListener('mousemove', this._curMove, {passive:true}); window.addEventListener('resize', this._mvS); setTimeout(this._mvS, 400);
    document.addEventListener('mouseleave', this._curLeave);
    const loop = () => { x += (tx - x) * 0.18; y += (ty - y) * 0.18; el.style.transform = `translate3d(${x}px,${y}px,0)`; this._curRaf = requestAnimationFrame(loop); };
    loop();
    this._cur = el;
  }
  unmountCursor() {
    if (!this._cur) return;
    cancelAnimationFrame(this._curRaf); window.removeEventListener('mousemove', this._curMove); document.removeEventListener('mouseleave', this._curLeave);
    this._cur.remove(); this._cur = null; document.documentElement.classList.remove('yj-cur');
  }
  applyAccent() { const c = this.state.screen === 'case' && CASES[this.state.ci || 0]; document.documentElement.style.setProperty('--yj-accent', (c && c.accent) || (this.props.accent ?? '#ff4d2e')); document.documentElement.style.setProperty('--yj-base', this.props.accent ?? '#ff4d2e'); if (c && c.id === 'cray') document.documentElement.setAttribute('data-case', c.id); else document.documentElement.removeAttribute('data-case'); }
  sendChat(q) {
    q = (q || '').trim(); if (!q || this.state.chatBusy) return;
    const msgs = [...(this.state.chatMsgs || []), {role:'user', text:q}];
    this.setState({chatMsgs:msgs, chatInput:'', chatBusy:true});
    const history = msgs.slice(-8).map(m => (m.role === 'user' ? 'Visitor: ' : 'Agent: ') + m.text).join('\n');
    const prompt = `You are the portfolio agent for Yashvi Jain, answering visitors (recruiters at strategy/consulting firms, agencies, in-house design leaders) on her portfolio site. Ground answers in her case studies wherever possible — cite the project by its exact name as listed (e.g. "What It Takes to Move", "Pfizer.com") so the site can link it, then the problem, what she did and the outcome. Speak about her in the third person, warmly and concisely (2–4 short sentences, plain text, no markdown). Only use the facts below; if unsure, say so and suggest emailing yashvi.jain.yj@gmail.com.

FACTS:
- London-based. Positioning: designer, researcher and thinker, "where AI (actual intelligence) meets AI (artificial intelligence)". 4 years of design strategy, experience design and design thinking. Open to design strategy, service design and UX roles, hybrid or remote.
- ACTIVELY LOOKING for new opportunities right now. Has recently COMPLETED her MA Design Management, London College of Communication, UAL (2025–26) — graduated, not currently studying. B.Des Product Design, Amity University (2018–22).
- UI/UX & Service Designer, Tata Consultancy Services, Oct 2022–present: discovery research on healthcare-related service and digital projects; workshops, co-design and user testing; journey maps, user flows and service processes in Figma; balanced user needs with operational/technical constraints alongside BAs, developers and stakeholders.
- UI/UX Design Intern, Indian Music Experience Museum (British Council), 2022: participatory/co-design workshops, rapid prototyping, personas, low-fidelity blueprints, implementation-ready recommendations.
- Student Ambassador (Marketing), LCC, 2025–; Community Lead, UAL Halls Life, Dec 2025–: lived-experience insight, recurring feedback, inclusive service interactions.
- Case studies on the site (use these details; recommend the most relevant one by name):
${Component.caseBrief()}
- Methods: stakeholder mapping, opportunity framing, discovery interviews, workshop facilitation, co-design, qualitative synthesis, personas, journey mapping, service blueprints, impact/effort prioritisation, service roadmaps, rapid prototyping, usability testing.
- Tools: Figma, Adobe CS, Microsoft 365, ChatGPT, Claude, UX Pilot.
- Contact: yashvi.jain.yj@gmail.com, +44 7344 124313.

CONVERSATION:
${history}
Agent:`;
    const done = text => this.setState(st => ({chatBusy:false, chatMsgs:[...st.chatMsgs, {role:'agent', text}]}));
    (window.claude && window.claude.complete ? window.claude.complete(prompt) : Promise.reject())
      .then(t => done(String(t).trim()))
      .catch(() => done("I couldn't reach my brain just now — email Yashvi directly at yashvi.jain.yj@gmail.com and she'll reply herself."));
  }
  componentDidMount() {
    window.addEventListener('keydown', this._mvK = e => { if (e.key === 'Escape' && this.state.mvRules) this.setState({mvRules:false}); });
    this._fcT = setInterval(() => { if (document.hidden || this.state.lb || this.state.fcHold) return; const n = 5; this.setState(s => ({fcI:((s.fcI || 0) + 1) % n})); }, 5000);
    window.addEventListener('scroll', this._mvS = () => { cancelAnimationFrame(this._mvR); this._mvR = requestAnimationFrame(() => this.onMvScroll()); }, {passive:true});
    if (window.speechSynthesis) { this._voices = speechSynthesis.getVoices(); speechSynthesis.addEventListener('voiceschanged', () => { this._voices = speechSynthesis.getVoices(); }); } setTimeout(() => { this.armDrops(); this.armMotion(); }, 0); this._moMo = new MutationObserver(() => { clearTimeout(this._moT); this._moT = setTimeout(() => this.armMotion(), 150); }); this._moMo.observe(document.body, {childList:true, subtree:true});
    
    this._pBlur = () => setTimeout(() => { const f = this.protoWrap.current && this.protoWrap.current.querySelector('iframe'); if (f && document.activeElement === f) { this._pIn = true; this.setState({protoLoop:false}); } }, 0);
    window.addEventListener('blur', this._pBlur); this.protoArm();
    this._pTick = setInterval(() => { if (this._pPause || document.hidden || this.state.screen !== 'case' || !CASES[this.state.ci || 0].proto || matchMedia('(prefers-reduced-motion: reduce)').matches) return; this.setState(st => ({protoI:(st.protoI || 0) + 1})); }, 1600);
    this.applyAccent();
    this._stk = setInterval(() => { if (this._stkPause || document.hidden || this.state.screen !== 'case' || matchMedia('(prefers-reduced-motion: reduce)').matches) return; this.setState(st => ({wwFront:((st.wwFront || 0) + 1) % 3, sortFront: st.sortSpread ? (st.sortFront || 0) : ((st.sortFront || 0) + 1) % 4, jFront: st.jSpread ? (st.jFront || 0) : ((st.jFront || 0) + 1) % 5})); }, 8000);
    if (this.props.customCursor ?? true) this.mountCursor();
    try { history.scrollRestoration = 'manual'; } catch (e) {}
    { let user = false; const mark = () => { user = true; };
      ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(ev => window.addEventListener(ev, mark, {once:true, passive:true}));
      const top = () => { if (!user && this.state.screen === 'home' && window.scrollY > 0) window.scrollTo(0, 0); };
      top(); [50, 200, 500, 1000, 1800, 3000].forEach(t => setTimeout(top, t)); }
    this._navY = window.scrollY;
    this._onScroll = () => { this.syncHero(); this.syncHz(); this.syncStory(); this.syncMz(); this.syncNav(); };
    this._onResize = () => { this.syncHz(); this.syncMz(); }; window.addEventListener('resize', this._onResize);
    window.addEventListener('scroll', this._onScroll, {passive:true});
    let last = window.scrollY, v = 0;
    const tick = () => { const y = window.scrollY; v = v * 0.85 + (y - last) * 0.15; last = y; window.__kv = v; this.syncPx(); this._vr = requestAnimationFrame(tick); };
    tick();
    this._lastFace = 0; this._lastT = Date.now();
    this._timer = setInterval(() => {
      const s = this.state;
      if (s.screen !== 'home') { this._lastT = Date.now(); return; }
      if (s.face !== this._lastFace) { this._lastFace = s.face; this._lastT = Date.now(); return; }
      const el = this.heroRef.current;
      if (!el || el.getBoundingClientRect().bottom < window.innerHeight * 0.6) { this._lastT = Date.now(); return; }
      if (Date.now() - this._lastT >= (this.props.autoAdvance ?? 15) * 1000) { this._lastT = Date.now(); this.goFace(s.face + 1); }
    }, 500);
  }
  componentDidUpdate() {
    if (this._mvS) this._mvS(); setTimeout(() => { this.armDrops(); this.armMotion(); }, 0); this.syncHz(); this.syncMz(); const c = this.chatRef.current; if (c) c.scrollTop = c.scrollHeight; this.applyAccent(); (this.props.customCursor ?? true) ? this.mountCursor() : this.unmountCursor(); }
  syncJourney() {
    const t = this.jRef.current; if (!t || this._jUser) return;
    const r = t.getBoundingClientRect(), vh = window.innerHeight, m = t.scrollWidth - t.clientWidth; if (m <= 0) return;
    const p = Math.min(1, Math.max(0, (vh * 0.8 - r.top) / (vh * 1.1)));
    t.style.scrollBehavior = 'auto'; t.scrollLeft = p * m; t.style.scrollBehavior = '';
  }
  syncNav() {
    const el = this.navRef.current; if (!el) return;
    const y = window.scrollY, d = y - (this._navY ?? y);
    if (Math.abs(d) < 6 && y > window.innerHeight) return;
    this._navY = y;
    const hide = y > window.innerHeight && d > 0;
    const sub = this.subNavRef.current;
    if (sub) sub.style.top = hide ? '0px' : Math.max(0, Math.round(el.getBoundingClientRect().height + el.offsetTop - 24)) + 'px';
    const fl = this.mvRef.current && this.mvRef.current.querySelector('[data-mv-float]');
    if (fl) { const on = y > window.innerHeight; fl.style.top = hide ? '0px' : Math.round(el.getBoundingClientRect().height + el.offsetTop + 12) + 'px'; fl.style.opacity = on ? '1' : '0'; fl.style.pointerEvents = on ? 'auto' : 'none'; fl.style.transform = on ? 'none' : 'translateY(-12px)'; }
    if (hide === this._navHidden) return;
    this._navHidden = hide;
    el.style.transform = hide ? 'translateY(-160%)' : 'none';
    el.style.opacity = hide ? '0' : '1';
  }
  componentWillUnmount() { clearInterval(this._fcT); clearInterval(this._stk); clearTimeout(this._pt); clearInterval(this._pTick); window.removeEventListener('blur', this._pBlur); this._dropIO && this._dropIO.disconnect(); this._mvIO && this._mvIO.disconnect();
    this.unmountCursor(); window.removeEventListener('scroll', this._onScroll); clearInterval(this._timer); cancelAnimationFrame(this._vr); }

  syncHero() {
    if ((this.props.heroMode ?? 'scroll') !== 'scroll' || this.state.screen !== 'home') return;
    const el = this.heroRef.current; if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const p = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / Math.max(1, total)));
    const f = Math.min(2, Math.floor(p * 3));
    if (f !== this.state.face || Math.abs(p - this.state.hp) > 0.005) this.setState({face:f, hp:p});
  }
  goFace(i) {
    i = (i + 3) % 3;
    if ((this.props.heroMode ?? 'scroll') === 'scroll' && this.heroRef.current) {
      const el = this.heroRef.current, total = el.offsetHeight - window.innerHeight;
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({top: top + total * (i + 0.5) / 3, behavior:'smooth'});
    } else this.setState({face:i});
  }
  go(screen, extra) { this.setState({screen, face:0, hp:0, ...(extra || {})}); window.scrollTo(0, 0); }
  openCase(i) { this.go('case', {ci:i, si:0, protoLoop:false}); this._pIn = false; this.protoArm(); }

  static caseBrief() {
    const clip = (x, n) => String(x || '').replace(/\s+/g, ' ').slice(0, n);
    return CASES.filter(c => c.id !== 'halls').map(c => {
      const bits = [`• ${c.short} — ${c.title} (${[c.org, c.sector, c.years].filter(Boolean).join(', ')})`];
      if (c.role) bits.push('Role: ' + clip(c.role, 160));
      if (c.question) bits.push('Question: ' + clip(c.question, 220));
      if (c.summary) bits.push('Summary: ' + clip(c.summary, 260));
      (c.tldr || []).forEach(x => bits.push(x.k + ': ' + clip(x.v, 200)));
      (c.secs || []).slice(0, 6).forEach(x => x.h && bits.push((x.k || 'Section') + ': ' + clip(x.h, 90) + ' — ' + clip(x.p, 220)));
      if (c.tags) bits.push('Tags: ' + c.tags.join(', '));
      return bits.join('\n  ');
    }).join('\n');
  }
  extraVals(cur, s) {
    const flow = cur.flow || ['story'], ord = k => { const i = flow.indexOf(k); return i < 0 ? 99 : i; };
    const playing = s.vCase === s.ci ? s.vPlay : null, fmt = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
    const voices = (cur.voices || []).map((v, i) => {
      const on = playing === i, t = on ? (s.vT || 0) : 0, frac = Math.min(1, t / v.dur);
      const bars = Array.from({length:44}, (_, j) => { const r = Math.abs(Math.sin((j + 1) * (i + 2) * 12.9898) * 43758.5453) % 1;
        return {hh: Math.round(18 + r * 82 * (0.55 + 0.45 * Math.sin(j / 5 + i))) + '%', c: on && j / 44 < frac ? 'var(--yj-accent, #ff4d2e)' : '#4a4a4a'}; });
      return {...v, n:String(i + 1).padStart(2, '0'), on, off:!on, bars, time:fmt(t), durL:fmt(v.dur), line: on ? 'var(--yj-accent, #ff4d2e)' : '#333333',
        btnBg: on ? 'var(--yj-accent, #ff4d2e)' : '#f4f4f4', hasT: !!v.transcript,
        ...(() => { const w = (v.transcript || '').split(' '), k = on ? Math.ceil(w.length * frac) : 0; return {tA: w.slice(0, k).join(' '), tB: (k ? ' ' : '') + w.slice(k).join(' ')}; })(),
        srcNote: v.src ? '' : 'Recording to add', noT: !v.transcript, noSrc: !v.src, toggle:() => this.voiceToggle(i, v)};
    });
    const HZ = {S:'#5c5c5c', M:'var(--yj-accent, #ff4d2e)', L:'#f4f4f4'}, Y0 = 2026.5, YS = 6, pc = y => ((y - Y0) / YS * 100).toFixed(2) + '%';
    const plan = cur.plan ? {...cur.plan,
      stages:(cur.plan.stages || []).map((st, i, a) => ({...st, n:String(i + 1).padStart(2, '0'), eastL:st.east.join(' · '), meter:a.map((_, k) => ({c: k <= i ? 'var(--yj-accent, #ff4d2e)' : '#2a2a2a'}))})),
      bands:(cur.plan.bands || []).map((bd, i) => ({...bd, bg: i ? 'linear-gradient(160deg,#3a2260,#1a1124)' : '#141414'})),
      hasLadder: !!(cur.plan.stages || []).length, hasRoad: !!(cur.plan.road || []).length,
      horizons:(cur.plan.horizons || []).map(z => ({...z, c:HZ[z.hz]})),
      road:(cur.plan.road || []).map(r => ({...r, segs:r.segs.map(([a, b, z]) => ({l:pc(a), w:pc(Y0 + (b - a)), c:HZ[z]}))})),
      ticks:[['2026–27',2027],['2028',2028],['2029',2029],['2030',2030],['2031',2031],['2032',2032]].map(([t, y]) => ({t, l:pc(y)})),
      ...(() => {
        const HL = {S:'Short term', M:'Mid term', L:'Long term'}, YRS = [2027, 2028, 2029, 2030, 2031, 2032], LBL = ['2026–27', '2028', '2029', '2030', '2031', '2032'];
        const sel = s.roadY ?? 2, y0 = YRS[sel] - 0.5, y1 = YRS[sel] + 0.5, hzF = s.roadHz || null;
        const rows = (cur.plan.road || []).map(r => { const A = r.segs[0][0], B = r.segs[r.segs.length - 1][1], z = r.segs[r.segs.length - 1][2], z0 = r.segs[0][2];
          const act = A < y1 && B > y0, show = !hzF || hzF === z || hzF === z0, yr = v => Math.round(v * 10) / 10, f = v => String(Math.floor(v));
          const lp = (A - Y0) / YS * 100, right = lp > 62;
          return {k:r.k, z, hzL: z0 !== z ? 'Short → mid' : HL[z], when: f(A) === f(B) ? f(A) : f(A) + '–' + f(B).slice(2), act,
            segs:r.segs.map(([p, q, zz]) => ({l:pc(p), w:pc(Y0 + (q - p)), c:HZ[zz]})), op: hzF ? (show ? 1 : 0.12) : (act ? 1 : 0.32),
            labL: right ? 'auto' : pc(A), labR: right ? (100 - (B - Y0) / YS * 100).toFixed(2) + '%' : 'auto', labAlign: right ? 'right' : 'left', fg: (hzF ? show : act) ? '#f4f4f4' : '#8c8c8c', show}; });
        const groups = ['S', 'M', 'L'].map(z => ({z, k:HL[z], c:HZ[z], rows:rows.filter(r => r.z === z)}));
        const live = hzF ? rows.filter(r => r.show) : rows.filter(r => r.act);
        return {roadYears: YRS.map((y, i) => ({t:LBL[i], on: i === sel, l:pc(y - 0.5), w:pc(Y0 + 1), bg: i === sel ? 'var(--yj-accent, #ff4d2e)' : 'transparent', fg: i === sel ? '#000000' : '#cccccc', line: i === sel ? 'var(--yj-accent, #ff4d2e)' : '#333333', go:() => this.setState({roadY:i, roadHz:null})})),
          roadGroups: groups, roadCol:{l:pc(y0), w:pc(Y0 + 1)}, roadSel:{t: hzF ? HL[hzF] : LBL[sel], n:String(live.length).padStart(2, '0'), list:live.map(r => ({k:r.k, c:HZ[r.z]})), phase: YRS[sel] <= 2027 ? 'Enablement phase · Awareness → Knowledge' : 'Engagement phase · Ability → Reinforcement'},
          roadPrev:() => this.setState({roadY:Math.max(0, sel - 1), roadHz:null}), roadNext:() => this.setState({roadY:Math.min(YRS.length - 1, sel + 1), roadHz:null}),
          roadHzBtns: ['S', 'M', 'L'].map(z => ({k:HL[z], c:HZ[z], on: hzF === z, line: hzF === z ? HZ[z] : '#333333', go:() => this.setState({roadHz: hzF === z ? null : z})}))};
      })(),
      msLeft: cur.plan.milestone ? pc(cur.plan.milestone.at) : '0%', msK: cur.plan.milestone ? cur.plan.milestone.k : '',
      phases:cur.plan.phases.map((p, i, a) => ({...p, sigK: p.sigK || 'Signal', n:String(i + 1).padStart(2, '0'), last: i === a.length - 1, arrow: i < a.length - 1}))} : null;
    const outcome = cur.outcome ? {...cur.outcome, items:cur.outcome.items.map(o => ({...o, col: (o.big || o.wide) ? 'span 2' : 'span 1', row: (o.big || o.tall) ? 'span 2' : 'span 1',
      open:() => this.setState({lb:o.src, lbAlt:o.k})}))} : null;
    return {ordStory:ord('story'), ordVoices:ord('voices'), ordPlan:ord('plan'), ordOutcome:ord('outcome'),
      hasVoices: voices.length > 0, voiceList:voices, hasPlan: !!plan, plan, hasOutcome: !!outcome, outcome};
  }
  mvRef = React.createRef();
  mvGo(k) { const r = this.mvRef.current, el = r && r.querySelector('[data-mv="' + k + '"]'); if (el) window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - (k === 'top' ? 400 : 120), behavior:'smooth'}); }
  onMvScroll() { const r = this.mvRef.current; if (!r) return;
    const vh = window.innerHeight, still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    r.querySelectorAll('[data-paper]').forEach(el => { if (still) { el.style.transform = 'none'; return; } const top = el.getBoundingClientRect().top, p = Math.max(0, Math.min(1, (vh - top) / (vh * 0.6))); el.style.transformOrigin = '50% 0'; el.style.transform = p >= 1 ? 'none' : 'perspective(1400px) rotateX(' + ((1 - p) * 16).toFixed(2) + 'deg) translateY(' + ((1 - p) * 48).toFixed(1) + 'px)'; el.style.opacity = String(0.3 + 0.7 * p); });
    r.querySelectorAll('[data-hs]').forEach(w => { const tr = w.querySelector('[data-hs-track]'); if (!tr) return; const dist = Math.max(0, tr.scrollWidth - window.innerWidth), want = (dist + vh) + 'px'; if (w.style.height !== want) w.style.height = want; const p = dist ? Math.max(0, Math.min(1, -w.getBoundingClientRect().top / dist)) : 0; tr.style.transform = 'translate3d(' + (-p * dist).toFixed(1) + 'px,0,0)'; const bar = w.querySelector('[data-hs-bar]'); if (bar) bar.style.width = (p * 100).toFixed(1) + '%'; }); let a = 'top'; r.querySelectorAll('[data-mv]').forEach(el => { if (el.getBoundingClientRect().top < 240) a = el.getAttribute('data-mv'); }); if (a !== this.state.mvAct) this.setState({mvAct:a}); }
  mvVals(s, cur) {
    if (s.screen === 'case' && cur.id === 'pfizer') return {isMove:false, isIme:false, isAva:false, isPfizer:true, isCaseStd:false, mvRef:this.mvRef};
    if (s.screen === 'case' && cur.id === 'ava') return {isMove:false, isIme:false, isAva:true, isCaseStd:false, mvRef:this.mvRef};
    if (s.screen === 'case' && cur.id === 'ime') { const o = f => () => this.setState({lb:__R('assets/web/assets/ime/' + f.replace(/\.\w+$/, '.webp')), lbAlt:f}); const Y = {c:'#ec3013', w:600}, N = {c:'#201e1d', w:400};
      return {isMove:false, isIme:true, isCaseStd:false, mvRef:this.mvRef, ime:{paper:(this.props.imeTexture ?? 'paper') === 'paper' ? 'url(' + __R('assets/web/assets/ime/paper.webp') + ')' : 'none',
        open:Object.fromEntries(['dull-world.jpg', 'utopia.jpg', 'mac-1.png', 'mac-2.png', 'mac-3.png', 'research-visits.png', 'physical.png', 'visit-1.png', 'visit-2.png', 'visit-3.png', 'visit-4.png', 'phys-1.png', 'phys-2.png', 'phys-3.png', 'phys-4.png', 'phys-5.png', 'phys-6.png', 'phys-7.png', 'phys-8.png', 'phys-9.png', 'textures.png', 'logo-sketches.png', 'logo-final.png', 'madhubani.png', 'illustrations.png', 'ia.png', 'content-ideation.png', 'wireframes.png', 'concept-board.png', 'references.png'].map(f => [f.replace(/\W/g, '_'), o(f)])),
        palette:['#1C2565', '#3C593E', '#E8A85A', '#D56D54', '#333333'],
        facts:[{k:'My role', v:'UI designer · web and mobile'}, {k:'Client', v:'Indian Music Experience Museum'}, {k:'Programme', v:'British Council · Our Shared Cultural Heritage'}, {k:'Timeline', v:'6 months · 2022'}],
        brief:[{k:'Problem', v:'The physical exhibit was limited by its location.'}, {k:'Goal', v:'Open Birdsong to a much larger audience, online.'}, {k:'Ambition', v:'Deepen appreciation and mindfulness toward the environment, through music.'}],
        galleries:[{n:'01', k:'Nature’s Symphony', v:'The musical world of birds: their song, calls and unique physiology.'}, {n:'02', k:'Myths and Legends', v:'Birds in Indian mythology and history.'}, {n:'03', k:'Songs of Nature', v:'The melodious world of songbirds, and their tunes.'}, {n:'04', k:'Birds in Music', v:'How birds inspired Indian music, from classical and folk to instrumental.'}],
        team:[{k:'Mentors', people:[{n:'Sahana Mohan', r:'Curatorial', ...N}, {n:'Aditi Dhamija', r:'Design', ...N}, {n:'Amit Goyal', r:'Technical', ...N}]},
          {k:'Content & design', people:[{n:'Amrita Mukherjee', r:'Content', ...N}, {n:'Rhea Sokhanda', r:'Content', ...N}, {n:'Ananya S R', r:'Design', ...N}, {n:'Yashvi Jain', r:'Design', ...Y}]},
          {k:'Development', people:[{n:'Nishtha', r:'Development', ...N}, {n:'Khushi', r:'Development', ...N}]}]}};
    }
    if (!(s.screen === 'case' && cur.id === 'move')) return {isMove:false, isIme:false, isCaseStd: s.screen === 'case'};
    const S = k => cur.secs.find(x => x.k === k) || {}, open = (src, k) => () => this.setState({lb:src, lbAlt:k});
    const fmt = x => Math.floor(x / 60) + ':' + String(Math.floor(x % 60)).padStart(2, '0'), pad = j => String(j + 1).padStart(2, '0');
    const V = cur.voices, playing = s.vCase === s.ci ? s.vPlay : null, ti = playing ?? (s.mvTrack || 0), tv = V[ti], on = playing === ti;
    const tt = on ? (s.vT || 0) : 0, frac = Math.min(1, tt / tv.dur), w = tv.transcript.split(' '), wk = Math.round(w.length * frac);
    const pick = j => () => { if (playing != null && playing !== j) this.voiceToggle(j, V[j]); else this.setState({mvTrack:j}); };
    const act = s.mvAct || 'top', go = k => () => this.mvGo(k);
    const NAV = [['top','Front page'],['method','Analysis'],['research','Investigation'],['insight','Findings'],['product','The Script'],['testing','Report card'],['strategy','The plan'],['reflect','Opinion']];
    const P = cur.plan, O = cur.outcome, T = cur.testing, F = S('Fieldwork'), fi = (F.imgs || []).map(x => ({...x, open:open(x.src, x.k)}));
    const items = O.items.map(o => ({...o, open:open(o.src, o.k)}));
    return {isMove:true, isCaseStd:false, mvRef:this.mvRef, mv:{
      nav: NAV.map(([k, l]) => ({k, l, go:go(k), c: act === k ? '#141210' : '#5e5650', u: act === k ? '#c4161c' : 'transparent'})),
      goResearch:go('research'), goProblem:go('problem'),
      brief:S('The brief'), reframe:S('Reframe'), research:S('Research'), insight:S('Insights'), direction:S('Direction'), reflect:S('Reflection'),
      openPoster:open(__R('assets/web/assets/ma/ma-poster-wall-web.webp'), 'Campaign poster'), openEye:open(__R('assets/web/assets/ma/eye.webp'), 'The gaze'), openPostcard:open(__R('assets/web/assets/ma/postcard-she.webp'), 'Postcard'),
      facts:[{k:'My role', v:'Research, strategy & design'}, {k:'Context', v:'MA Design Management · UAL LCC'}, {k:'Timeline', v:cur.years}, {k:'Sector', v:cur.sector}],
      glance:[{n:'A', k:'The challenge', v:cur.question}, {n:'B', k:'My role', v:'Sole designer and researcher: framing, primary research, behaviour-change strategy, service model, game design and testing.'}, {n:'C', k:'The bet', v:cur.bet}, {n:'D', k:'The result', v:cur.result}],
      skills:[
        {n:'004.', k:'Strategy', d:'A six-year behaviour-change plan built on ADKAR and EAST, phased into a roadmap to 2032.', go:go('strategy')},
        {n:'005.', k:'Service design', d:'One intervention across two settings, home and school, designed as a single loop.', go:go('service')},
        {n:'006.', k:'Product design', d:'The Script: a card game in two editions, prototyped and tested with families and friend groups.', go:go('product')}],
      hmw:[
        {n:'Draft 01', q:'How might we shift the cognitive and physical safety burden from women to ethical, intersectional service infrastructure for the society to be responsible?'},
        {n:'Draft 02', q:'How might we shift the safety burden from women to challenge the mindset for the society to be responsible, whilst providing safer infrastructure?'},
        {n:'Final', q:cur.question}],
      tl:(() => { const pc = v => (v / 11 * 100).toFixed(2) + '%', L = [0.31, 2.41, 4.3, 6.03, 8.3, 10.16];
        const PH = ['Diagnosing the paradigm', 'Situating the norm within intersecting structures', 'Evidencing the behaviour empirically', 'Diagnosing behavioural gaps by actor', 'Designing and prototyping norm-challenging interventions', 'Piloting, testing and evaluating normative shift'];
        const G = [
          ['Primary', '#6b625b', '#ffffff', [['Focus group', 0.09, 0.97], ['Anonymous drop box (virtual)', 0.11, 1.97], ['Expert interviews', 2.03, 9.67], ['Conferences', 3.32, 4.89], ['Audio diaries', 4.26, 6.47], ['Observational research', 6.57, 7.92], ['Participatory methods', 6.94, 8.99]]],
          ['Secondary', '#141210', '#ffffff', [['Literature review', 0.09, 9.44], ['Case studies', 0.13, 2.41], ['Case studies', 4.89, 8.43], ['Competitive analysis', 8.6, 9.76]]],
          ['Analysis', '#c4161c', '#ffffff', [['PESTEL', 0.09, 4.65], ['Stakeholder analysis', 0.31, 3.58], ['Trend analysis', 3.76, 5.5], ['Journey mapping', 5.68, 8.04], ['Thematic analysis', 6.94, 8.7], ['Affinity mapping', 7.77, 8.84]]],
          ['Design & test', '#d9cfbf', '#141210', [['Brainstorming', 8.53, 10.22], ['Crazy 8s', 8.55, 9.59], ['Iteration', 9.16, 11], ['Concept testing', 9.16, 11], ['Workshop', 9.7, 10.87]]]];
        const lines = L.map(x => ({left:pc(x)}));
        return {months:['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          phases:PH.map((k, i) => ({n:String(i + 1), k, left:pc(L[i]), width:pc((L[i + 1] ?? 11) - L[i])})),
          groups:G.map(([k, c, fg, rows]) => ({k, c, fg, lines, rows:rows.map(([rk, a, b]) => ({k:rk, left:pc(a), width:pc(b - a)}))}))}; })(),
      tldr:[
        {k:'Problem', v:'In Delhi, women do the work of staying safe, changing routes, clothes and timings, while the norms behind harassment go unchallenged.'},
        {k:'Approach', v:'Eleven months of mixed-method research with women from Delhi and UK experts, organised by two systems frameworks combined into one matrix.'},
        {k:'Outcome', v:'The Script: a peer-led card game for families and teenage friend groups, backed by a six-year behaviour-change plan.'},
        {k:'My role', v:'Researcher and designer from framing to testing. MA Design Management, UAL London College of Communication.'}],
      reach:[{n:'7', k:'women in focus groups'}, {n:'7', k:'expert interviews: 4 in India, 3 in the UK'}, {n:'6', k:'primary research methods'}, {n:'11', k:'months, Nov to Sep'}],
      expertsIN:[
        {who:'Animesh Sharma', role:'Evaluation head · Breakthrough Foundation', q:'Teach a fifteen-year-old and he learns. Tell a forty-year-old and he shuts down.', take:'A fifteen-year-old shown respectful behaviour is being educated; a forty-year-old told the same is likely to shut down. This turned the design towards adolescents.'},
        {who:'Dr Tasneem Deo', role:'Associate Professor · National Law University, Delhi', q:'Women are in work and education. The city hasn’t caught up.', take:'Women are far more present in work and education, but urban architecture and legal frameworks haven’t caught up.'},
        {who:'Investigating officer', role:'Delhi Police', q:'Victims stay silent to protect their freedom at home.', take:'Reporting is blocked by family pressure: victims fear backlash at home that could end their studies or their freedom to travel.'}],
      experts:[
        {who:'Susan Leadbetter', role:'WSP · Gender-inclusive design', q:'Peer-led change among men beats top-down messaging.', take:'Safety is context-specific, and cosmetic “pink-washing” is no substitute for structural inclusion. Peer-led male behaviour change works better than top-down messaging.'},
        {who:'Dr Sarah Lewis', role:'Criminologist · DCrimJ', q:'Redesign the system, not the individual.', take:'Redesigning the system, not “fixing” individuals, cut violence in a high-violence London prison within four weeks. Co-creation with lived experience is the fix.'},
        {who:'Amy Tempest', role:'Principal Area Planner · Transport for London', q:'Lighting helps. Community consultation is the real lever.', take:'Lighting and CCTV help but guarantee nothing. Structured community consultation, like women’s safety audits, is the real lever.'}],
      ethics:[
        {k:'Informed consent', v:'Every participant signed a consent form covering purpose, data use and the right to withdraw at any time.'},
        {k:'Anonymity', v:'Identities, diaries and exhibition feedback were anonymised and stored securely. Quotes were validated with participants before use.'},
        {k:'Care after disclosure', v:'Support resources were shared after every session that touched on distressing experiences.'},
        {k:'Positionality', v:'Working remotely through a local contact in Delhi, I reflected on bias and power in mediated, cross-cultural research.'}],
      clusters:[
        {n:'01', k:'Safety shouldn’t depend on clothing', v:'Appearance is treated as a risk variable. Women want it removed from the equation, not just improved.', cnt:3},
        {n:'02', k:'Time of day shouldn’t decide risk', v:'The most consistent demand: an end to the curfew imposed by darkness rather than actual danger.', cnt:5},
        {n:'03', k:'An end to self-surveillance', v:'The mental checklist before every trip is as heavy as the physical risk itself.', cnt:4},
        {n:'04', k:'Independence without a male escort', v:'Freedom is currently conditional on borrowed male protection. Women want it unconditional.', cnt:2},
        {n:'05', k:'Accountability on offenders', v:'The clearest call for systemic change, across education, enforcement and infrastructure.', cnt:5}].map(c => ({...c, cntL:c.cnt + ' of 5', dots:[0, 1, 2, 3, 4].map(i => ({c: i < c.cnt ? '#c4161c' : '#d9cfbf'}))})),
      journeys:[
        {k:'Journey today', d:'Current-state journey map of a woman’s commute.', src:__R('assets/web/assets/ma/journey-current.webp'), open:open(__R('assets/web/assets/ma/journey-current.webp'), 'Journey today')},
        {k:'Journey wanted', d:'Desired-state journey map, built from the five themes.', src:__R('assets/web/assets/ma/journey-desired.webp'), open:open(__R('assets/web/assets/ma/journey-desired.webp'), 'Journey wanted')}],
      whyGame:[
        {k:'No facilitator needed', v:'Peer-led play removes the “being lectured” trigger that causes resistance.'},
        {k:'Game night, not intervention', v:'Teenage boys join for fun, and the norm surfaces through play.'},
        {k:'Low cost, easy to scale', v:'A deck can be piloted through schools’ informal spaces and youth organisations.'}],
      rounds:[
        {n:'01', k:'Family self-check', p:'What would you let your son do that you wouldn’t let your daughter?', v:'Prompt cards for honest talk at home: “What would you let your son do that you wouldn’t let your daughter?”'},
        {n:'02', k:'Two truths and a norm', p:'Two real stories. One stereotype. Guess the fake.', v:'Share two real experiences and one gender stereotype. The group guesses which one is made up.'},
        {n:'03', k:'Anonymous confession', p:'Write down one thing you’ve assumed about women.', v:'Write down a gendered assumption you’ve held. It’s read aloud anonymously and the group discusses the behaviour, not the person.'}],
      limits:[
        {k:'Remote fieldwork', s:'Delhi data came via a local contact and audio diaries.', v:'I couldn’t travel to Delhi, so data came through a local contact and audio diaries, with participants who knew both London and Delhi.'},
        {k:'Disability gap', s:'Flagged by exhibition visitors. Include disabled voices next.', v:'Visitors at the exhibition flagged that disabled voices were missing. Future rounds need deliberate inclusion.'},
        {k:'Few male voices', s:'The design targets men; the next round must hear them.', v:'The design targets masculine norms, yet the research lacks men. The next phase should bring them in.'}],
      waffle:Array.from({length:100}, (_, i) => ({c: i < 95 ? '#c4161c' : '#d9cfbf'})),
      eng:[['Kids', 4, 'High'], ['Women', 4, 'High'], ['Mixed-age groups', 4, 'High'], ['Boys with boys', 3, 'Open'], ['Adults', 2, 'Guarded'], ['Older men', 1, 'Limited']].map(([k, n, l]) => ({k, l, w:(n / 4 * 100) + '%', c: n >= 3 ? '#c4161c' : '#9a8f86', v:(T.findings.find(f => f.k === k) || {}).v})),
      road:P.road.map(r => ({k:r.k, segs:r.segs.map(([a, b, hz]) => ({left:((a - 2026.5) / 6 * 100).toFixed(2) + '%', width:((b - a) / 6 * 100).toFixed(2) + '%', c:{S:'#9a8f86', M:'#c4161c', L:'#141210'}[hz]}))})),
      kpis:[
        {h:'Short term · 2026–27', goal:'Norms get named at home', m:['Families completing three or more self-check rounds','Share of players who name a stereotype aloud','Pre/post shift in gendered-permission answers']},
        {h:'Mid term · 2028–29', goal:'Peers start correcting peers', m:['Schools and youth orgs running friend-group sessions','Boys reporting they challenged a friend’s remark','Mid-point evaluation: internalised change vs compliance']},
        {h:'Long term · 2030–32', goal:'Movement stops being negotiated', m:['Women reporting fewer route, clothing and timing changes','Harassment reports acted on by transport and police','Pledge uptake carried into policy and partner programmes']}],
      ticks:[2027, 2028, 2029, 2030, 2031, 2032].map(y => ({y, left:((y - 2026.5) / 6 * 100).toFixed(2) + '%'})), mile:((2029.5 - 2026.5) / 6 * 100).toFixed(2) + '%',
      essay:[...O.items, {k:'The Conscious Citizen Pledge', d:'A take-home commitment to self-accountability, the first step to allyship.', src:__R('assets/web/assets/ma/pledge-card.webp')}].filter((_, i) => ![0, 3, 4, 5, 6].includes(i)).map((o, i) => ({...o, n:String(i + 1).padStart(2, '0'), w: i === 0 ? '820px' : '440px', open:open(o.src, o.k)})),
      fc:(() => { const fi2 = [...fi, {k:'Expert interview (faces blurred)'}], n = fi2.length, i = Math.min(s.fcI || 0, n - 1), set = j => () => { clearInterval(this._fcT); this._fcT = setInterval(() => { if (document.hidden || this.state.lb || this.state.fcHold) return; this.setState(s => ({fcI:((s.fcI || 0) + 1) % n})); }, 5000); this.setState({fcI:(j + n) % n}); };
        return {x:(-i * 100) + '%', n:String(i + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0'), cap:(fi2[i] || {}).k, prev:set(i - 1), next:set(i + 1), hold:() => this.setState({fcHold:true}), release:() => this.setState({fcHold:false}),
          dots:fi2.map((_, j) => ({i:j + 1, go:set(j), w: j === i ? '28px' : '8px', c: j === i ? '#c4161c' : '#c9c0b2'}))}; })(),
      steps:['The judge reads a prompt card aloud: a fill-in-the-blank scenario, e.g. why a curfew applies to one sibling and not another.', 'Each other player submits an answer card, or their own line, that completes it as convincingly as possible, not as exaggeratedly as possible.', 'Submissions are read aloud without attribution, and the judge picks the strongest completion against that round’s criterion.', 'Rounds are won on realism: the most authentic, “heard-it-before” line wins, pulling an implicit stereotype into the open as shared knowledge.', 'The judge rotates each round. Play ends with a discussion on which lines felt familiar, and why.'].map((v, i) => ({v, n:String(i + 1), bg: i === 0 ? '#c4161c' : '#f3eee4', fg: i === 0 ? '#ffffff' : '#141210'})),
      rulesOpen:!!s.mvRules, openRules:() => this.setState({mvRules:true}), closeRules:() => this.setState({mvRules:false}), stop:e => e.stopPropagation(),
      expertsAll:[...[
        {who:'Animesh Sharma', org:'Breakthrough Foundation', cc:'IN', q:'Teach a fifteen-year-old and he learns. Tell a forty-year-old and he shuts down.'},
        {who:'Dr Tasneem Deo', org:'National Law University, Delhi', cc:'IN', q:'Women are in work and education. The city hasn’t caught up.'},
        {who:'Investigating officer', org:'Delhi Police', cc:'IN', q:'Victims stay silent to protect their freedom at home.'},
        {who:'Susan Leadbetter', org:'WSP · Gender-inclusive design', cc:'UK', q:'Peer-led change among men beats top-down messaging.'},
        {who:'Dr Sarah Lewis', org:'Criminologist', cc:'UK', q:'Redesign the system, not the individual.'},
        {who:'Amy Tempest', org:'Transport for London', cc:'UK', q:'Lighting helps. Community consultation is the real lever.'}]].map(x => ({...x, ini:x.who.replace(/^Dr /, '').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase(), bar: x.cc === 'IN' ? '#c4161c' : '#141210', bg:'#ebe4d6'})),
      skillsTop:[
        {n:'01', k:'Strategy', d:'Systems framing and a six-year behaviour-change plan to 2032.', see:'The plan', go:go('strategy')},
        {n:'02', k:'Service design', d:'One intervention across home and friend groups, built from 7 expert interviews.', see:'Investigation', go:go('research')},
        {n:'03', k:'Product design', d:'The Script: a card game prototyped and tested with families.', see:'The Script', go:go('product')}],
      mq:Object.fromEntries([['script_red_backs','Friend Group Edition: card backs'],['script_red_prompt','Friend Group Edition: prompt and answer'],['script_box','Box'],['script_card_1','Card back, light'],['script_card_2','Answer card'],['script_card_3','Card back, dark'],['script_card_4','Prompt card'],['script_spread','Three cards']].map(([key, k]) => [key, open(__R('assets/ma/' + key.replace(/_/g, '-') + '.png'), k)])),
      setup:[{n:'4–10', k:'Players'}, {n:'7', k:'Cards each'}, {n:'1', k:'Rotating judge'}],
      play:[['Read', 'The judge reads a fill-in-the-blank prompt.'], ['Answer', 'Everyone plays the most convincing card.'], ['Judge', 'Answers are read out anonymously.'], ['Win on realism', 'The most “heard-it-before” line takes it.'], ['Talk', 'Rotate the judge. End on what felt familiar.']].map(([k, v], i) => ({k, v, n:String(i + 1).padStart(2, '0'), c: i === 0 ? '#c4161c' : '#b3a99c'})),
      field:F, primary:F.primary || [], fieldImgs:[...fi, {k:'Expert interview (faces blurred)', src:__R('assets/web/assets/ma/expert-interview.webp'), open:open(__R('assets/web/assets/ma/expert-interview.webp'), 'Expert interview')}], question:cur.question, oneLiner:'A card game that brings the gender norms behind women’s unsafe journeys in Delhi to the family table and the friend circle, so safety stops being a woman’s job.', secondary:F.secondary || [], fBig:fi[0] || {}, fSmall:fi.slice(1),
      track:{...tv, n:pad(ti), on, off:!on, time:fmt(tt), durL:fmt(tv.dur), pct:(frac * 100).toFixed(1) + '%', tA:w.slice(0, wk).join(' '), tB:(wk ? ' ' : '') + w.slice(wk).join(' '),
        toggle:() => this.voiceToggle(ti, tv), prev:pick((ti + V.length - 1) % V.length), next:pick((ti + 1) % V.length)},
      tracks:V.map((v, j) => ({...v, n:pad(j), durL:fmt(v.dur), pick:pick(j), c: j === ti ? '#141210' : '#5e5650', b: j === ti ? '#c4161c' : '#c9c0b2', st: j === ti && on ? 'Playing' : fmt(v.dur)})),
      plan:P, stages:P.stages.map((st, i, a) => ({...st, n:pad(i), eastL:st.east.join(' · '), h:Math.round(28 + i * 72 / (a.length - 1)) + '%'})),
      bands:P.bands, horizons:P.horizons.map(hz => ({...hz, items:P.road.filter(r => r.segs[r.segs.length - 1][2] === hz.hz).map(r => r.k)})),
      phases:P.phases.map((ph, i) => ({...ph, n:pad(i)})),
      outcome:O, deck:items[0], items:items.slice(1),
      testing:{...T, imgs:T.imgs.map(x => ({...x, open:open(x.src, x.k)}))}, result:cur.result, summary:cur.summary
    }};
  }
  voiceToggle(i, v) {
    const s = this.state;
    if (this._va) { this._va.pause(); this._va = null; }
    clearInterval(this._vt); clearInterval(this._vw); clearTimeout(this._vw); const tok = this._vTok = (this._vTok || 0) + 1;
    this._vs = null; if (window.speechSynthesis) speechSynthesis.cancel();
    if (s.vCase === s.ci && s.vPlay === i) { this.setState({vPlay:null, vT:0}); return; }
    this.setState({vCase:s.ci, vPlay:i, vT:0});
    const done = () => { clearInterval(this._vt); this._vs = null; this.setState({vPlay:null, vT:0}); };
    const timer = () => { const t0 = Date.now(); this._vt = setInterval(() => {
      if (this._vs) return;
      const t = this._va ? this._va.currentTime : (Date.now() - t0) / 1000;
      if (!this._va && t >= v.dur) { done(); return; }
      this.setState({vT:t});
    }, 250); };
    if (v.src) { this._va = new Audio(v.src); this._va.play().catch(() => {}); this._va.onended = done; timer(); return; }
    if (!window.speechSynthesis || !v.transcript) { timer(); return; }
    const speak = vs => {
      if (tok !== this._vTok) return;
      const fem = /female|samantha|karen|moira|tessa|fiona|serena|victoria|allison|ava|susan|zira|aria|jenny|sonia|libby|natasha|emma|michelle|google uk english female|google us english/i;
      const en = vs.filter(x => /^en[-_](GB|US|AU|IE|CA|NZ|ZA)$/i.test(x.lang) && !/\bmale\b|daniel|alex|fred|rishi|ravi|guy|ryan|thomas|oliver/i.test(x.name)), rank = x => (/natural|online|neural|premium|enhanced/i.test(x.name) ? 0 : 2) + (/GB|US/i.test(x.lang) ? 0 : 1);
      const pool = en.filter(x => fem.test(x.name)).sort((a, b) => rank(a) - rank(b));
      if (!pool.length) { timer(); return; }
      const femP = pool.filter(x => fem.test(x.name)), voice = femP.length > 1 ? femP[i % 2] : pool[0], P = [[1.0, 0.92], [0.97, 0.95], [1.03, 0.9], [0.98, 0.88]][i % 4];
      const parts = v.transcript.match(/[^.,;?!]+[.,;?!]*\s*/g) || [v.transcript], L = v.transcript.length;
      let off = 0, k = 0;
      const next = () => {
        if (tok !== this._vTok) return;
        if (k >= parts.length) { done(); return; }
        const txt = parts[k], base = off, u = new SpeechSynthesisUtterance(txt.trim());
        u.voice = voice; u.lang = voice.lang; u.pitch = P[0]; u.rate = P[1] + (Math.sin((i + 1) * (k + 3)) * 0.03);
        u.onboundary = e => { if (this._vs === u) this.setState({vT: v.dur * Math.min(1, (base + e.charIndex) / L)}); };
        u.onend = () => { if (this._vs !== u) return; off += txt.length; k++; this.setState({vT: v.dur * Math.min(1, off / L)}); this._vw = setTimeout(next, /[.?!]\s*$/.test(txt) ? 420 : 170); };
        u.onerror = () => { if (this._vs === u) done(); };
        this._vs = u; speechSynthesis.speak(u);
      };
      next(); timer();
    };
    const vs = this._voices && this._voices.length ? this._voices : speechSynthesis.getVoices();
    if (vs.length) { speak(vs); return; }
    const t0 = Date.now(); this._vw = setInterval(() => {
      const got = speechSynthesis.getVoices();
      if (got.length || Date.now() - t0 > 1000) { clearInterval(this._vw); this._voices = got; speak(got); }
    }, 100);
  }
  pic(c, extra) {
    const h = React.createElement, I = Component.Img;
    if (c.id === 'pfizer') return h('div', {style:{position:'absolute', inset:0, overflow:'hidden', background:'#0000c9', display:'flex', alignItems:'center', justifyContent:'center'}},
      h('img', {src:__R('assets/web/assets/pfizer/cover-kid.webp'), alt:'', style:{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'55% 40%', opacity:0.28, filter:'grayscale(1)', mixBlendMode:'luminosity', pointerEvents:'none'}}),
      h('img', {src:__R('assets/logos/pfizer-white.svg'), alt:'Pfizer', style:{position:'relative', width:'38%', maxWidth:360, height:'auto', pointerEvents:'none'}}));
    if (c.id === 'ava') return h('div', {style:{position:'absolute', inset:0, overflow:'hidden', background:'#c8102e url("' + __R('assets/web/assets/ava/pattern.webp') + '") center / cover'}},
      h('img', {src:__R('assets/web/assets/ava/cover-banner.webp'), alt:'Johnson & Johnson · Dosing Error · AVA', style:{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'contain', objectPosition:'50% 50%', pointerEvents:'none'}}));
    if (c.banner === 'cray' || c.banner === 'poster') return h('div', {style:{position:'absolute', inset:0, background:c.tone, overflow:'hidden'}},
      h('img', {src:c.src, alt:c.alt || 'CRAY — Safer streets. Happier strays.', style:{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:c.cardPos || '0% 50%'}}),
      extra !== false && h('div', {style:{position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.82), rgba(0,0,0,0.35) 34%, rgba(0,0,0,0) 55%)'}}));
    return h('div', {style:{position:'absolute', inset:0, background:c.tone}},
      h(I, {src:c.src, pos:c.pos, tone:c.tone, alt:c.title, label:`Add image — ${c.src} · ${c.img}`}),
      c.layer && h('div', {style:{position:'absolute', inset:0, background:'linear-gradient(100deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.45) 100%)'}}),
      c.layer && h('img', {src:c.layer, alt:'', style:{position:'absolute', right:'-6%', bottom:'-4%', width:'78%', maxWidth:'760px', height:'auto', filter:'drop-shadow(0 30px 40px rgba(0,0,0,0.5))', pointerEvents:'none'}}),
      extra !== false && h('div', {style:{position:'absolute', inset:0, background:SCRIM}}));
  }
  portrait(pos, scrim) {
    const h = React.createElement, I = Component.Img;
    return h('div', {style:{position:'absolute', inset:0, background:'#141414'}},
      h(I, {src:__R('assets/web/assets/yashvi.webp'), pos:pos || '50% 35%', alt:'Portrait of Yashvi Jain', label:'Portrait'}),
      scrim && h('div', {style:{position:'absolute', inset:0, background:SCRIM}}));
  }

  static Fade = function Fade() {
    const R = React, ce = R.createElement, imgs = ['IMG_3619', 'IMG_3615', 'IMG_3621', 'IMG_3620', 'IMG_3625'].map(n => __R('uploads/' + n + '.jpeg'));
    const [i, setI] = R.useState(0);
    R.useEffect(() => { if (matchMedia('(prefers-reduced-motion: reduce)').matches) return; const t = setInterval(() => { if (!document.hidden) setI(x => (x + 1) % imgs.length); }, 2400); return () => clearInterval(t); }, []);
    return ce('div', {style:{position:'absolute', inset:0}}, ...imgs.map((src, k) => ce('img', {key:k, src, alt: k === i ? 'The Cost of a Trace installation' : '', loading:'lazy', style:{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', opacity: k === i ? 1 : 0, transform: k === i ? 'scale(1.06)' : 'scale(1)', transition:'opacity 0.9s ease, transform 3s ease'}})));
  };

  static Zine = function Zine() {
    const R = React, ce = R.createElement;
    const F = n => __R('uploads/' + n.replace(/ /g, '%20'));
    const pg = [[F('Frame 10.jpg'),'R'],[F('Frame 8.jpg'),'L'],[F('Frame 8.jpg'),'R'],[F('Frame 9.jpg'),'L'],[F('Frame 9.jpg'),'R'],[F('2.jpg'),'L'],[F('2.jpg'),'R'],[F('Frame 10.jpg'),'L']];
    const NL = pg.length / 2, [p, setP] = R.useState(0), [dir, setDir] = R.useState(1), [hov, setHov] = R.useState(false), [act, setAct] = R.useState(-1);
    const step = R.useCallback(() => { setP(cur => { let d = dir; if (cur + d > NL || cur + d < 0) d = -d; setDir(d); const nx = cur + d; setAct(d > 0 ? cur : nx); return nx; }); }, [dir]);
    R.useEffect(() => { if (hov || matchMedia('(prefers-reduced-motion: reduce)').matches) return; const t = setInterval(() => { if (!document.hidden) step(); }, 2600); return () => clearInterval(t); }, [hov, step]);
    R.useEffect(() => { if (act < 0) return; const t = setTimeout(() => setAct(-1), 950); return () => clearTimeout(t); }, [act, p]);
    const face = ([src, side], back) => ce('div', {style:{position:'absolute', inset:0, backgroundImage:'url("' + src + '")', backgroundSize:'200% 100%', backgroundPosition: side === 'L' ? '0% 50%' : '100% 50%', backfaceVisibility:'hidden', WebkitBackfaceVisibility:'hidden', transform: back ? 'rotateY(180deg)' : 'none', boxShadow:'0 14px 34px rgba(0,0,0,0.5)'}},
      ce('div', {style:{position:'absolute', inset:0, background:'linear-gradient(' + (back ? 270 : 90) + 'deg, rgba(0,0,0,0.25), rgba(0,0,0,0) 16%)'}}));
    const leaves = [];
    for (let k = 0; k < NL; k++) { const f = k < p, sh = act === k;
      leaves.push(ce('div', {key:k, style:{position:'absolute', left:'50%', top:0, width:'50%', height:'100%', transformOrigin:'0 50%', transformStyle:'preserve-3d', transform: f ? 'rotateY(-180deg)' : 'rotateY(0deg)', transition:'transform 0.9s cubic-bezier(.45,.05,.25,1)', zIndex: sh ? 50 : (f ? k + 1 : NL - k)}}, face(pg[2 * k], false), face(pg[2 * k + 1], true))); }
    const shift = p === 0 ? '-25%' : p === NL ? '25%' : '0%';
    const dots = Array.from({length: NL + 1}, (_, i) => ce('span', {key:i, style:{width:i === p ? 18 : 6, height:6, background: i === p ? '#f4f4f4' : '#555555', transition:'width .3s, background .3s'}}));
    return ce('div', {role:'button', tabIndex:0, 'aria-label':'Turn zine page', onClick:step, onKeyDown:e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); step(); } }, onMouseEnter:() => setHov(true), onMouseLeave:() => setHov(false),
      style:{position:'absolute', inset:0, cursor:'pointer', outline:'none'}},
      ce('div', {style:{position:'absolute', inset:0, perspective:1600, transform:'translateX(' + shift + ')', transition:'transform 0.9s cubic-bezier(.45,.05,.25,1)'}}, ...leaves),
      ce('div', {style:{position:'absolute', left:0, right:0, bottom:10, zIndex:80, display:'flex', gap:6, justifyContent:'center'}}, ...dots));
  };

  renderVals() {
    const v = this._rv(), seen = new WeakSet();
    const walk = (o, d) => { if (d > 5 || !o || typeof o !== 'object' || seen.has(o) || o.$$typeof) return; seen.add(o);
      if (Array.isArray(o)) { for (const x of o) walk(x, d + 1); return; }
      if (Object.getPrototypeOf(o) !== Object.prototype) return;
      try { if (Object.isExtensible(o)) {
        if (typeof o.src === 'string' && !o.imgP) o.imgP = { src: o.src };
        if (typeof o.cover === 'string' && !o.coverP) o.coverP = { src: o.cover };
      } } catch (e) {}
      for (const k in o) walk(o[k], d + 1); };
    try { walk(v, 0); } catch (e) {} return v;
  }
  _rv() {
    const h = React.createElement, s = this.state, P = this.props, L = Component.Louvre, K = Component.K, I = Component.Img;
    const mode = P.heroMode ?? 'scroll', slatCount = P.slatCount ?? 20, hoverFlip = P.hoverFlip ?? true, level = P.kinetics ?? 'full';
    const navDef = [['Work','work'],['About','approach'],['Contact','contact']];
    const nav = navDef.map(([label, key]) => ({label, onClick:() => this.go(key), bg: (s.screen === key || (key === 'work' && s.screen === 'case')) ? 'rgba(255,255,255,0.16)' : 'transparent'}));
    const CATS = ['All', 'Strategy', 'UX', 'Co-design', 'Service design'], wc = s.wcat || 'All';
    const inCat = (c, f) => f === 'All' || c.cat === f || (c.disc || []).includes(f);
    const isPlayTab = wc === 'Play';
    const wTabs = [['Projects', 'All', String(CASES.filter(c => c.id !== 'halls').length).padStart(2,'0'), !isPlayTab], ['Play', 'Play', '07', isPlayTab]].map(([label, k, count, on]) => ({label, count, onClick:() => this.setState({wcat:k}), fg: on ? CREAM : '#8c8c8c', line: on ? 'var(--yj-accent, #ff4d2e)' : 'transparent'}));
    this._wTabs = wTabs;
    const cats = CATS.filter(f => f !== 'Play').map(f => { const on = wc === f; return {label:f, count: String(f === 'Play' ? 7 : CASES.filter(c => c.id !== 'halls' && inCat(c, f)).length).padStart(2,'0'), onClick:() => this.setState({wcat:f}),
      bg: on ? CREAM : 'transparent', fg: on ? INK : CREAM, line: on ? CREAM : '#666666'}; });
    const covReveal = {care:'wipe', cray:'circle', ime:'diag', halls:'wipe'};
    const cases = CASES.map((c, i) => ({...c, open:() => this.openCase(i), ctaO: s.hovCase === c.id ? 1 : 0, ctaY: s.hovCase === c.id ? '0px' : '8px',
      hovOn:() => this.setState({hovCase:c.id}), hovOff:() => this.setState(st => st.hovCase === c.id ? {hovCase:null} : null),
      cover: h(K, {key:'cov' + c.id, level, parallax:40, label:c.title, onClick:() => this.openCase(i)}, this.pic(c, false))})).filter(c => c.id !== 'halls');
    const workList = cases.filter(c => ['move', 'pfizer', 'ava'].includes(c.id) && (s.filter === 'All' || c.tags.includes(s.filter)));
    const catList = cases.filter(c => c.id !== 'halls' && inCat(c, s.wcat || 'All'));
    const filters = FILTERS.map(f => { const on = s.filter === f; return {label:f, count:String(f === 'All' ? CASES.length : CASES.filter(c => c.tags.includes(f)).length).padStart(2, '0'),
      onClick:() => this.setState({filter:f}), bg: on ? CREAM : 'transparent', fg: on ? INK : CREAM, line: on ? CREAM : '#666666'}; });

    const fc = CASES[s.face] || CASES[0];
    const faceInfo = {num:String(s.face + 1).padStart(2, '0'), title:fc.short, meta:`${fc.org} — ${fc.sector} — ${fc.years}`};
    const hero = h(L, {n:slatCount, index:s.face, hoverFlip, popHover:true, pop:P.slatPop ?? 1.2, label:'Featured work',
      onClick: () => this.openCase(s.face),
      faces:CASES.slice(0, 3).map(c => this.pic(c))});
    const segs = [0,1,2].map(i => ({label:'Slide ' + (i + 1), onClick:() => this.goFace(i), bg: i === s.face ? CREAM : 'rgba(244,244,244,0.55)'}));

    const cur = CASES[s.ci];
    const sec = {...(cur.secs[s.si] || cur.secs[0]), n:String(s.si + 1).padStart(2, '0')};
    const FLOW = cur.flow || cur.secs.map((_, j) => 's' + j), XL = {voices:'Voices', plan:'Strategy', outcome:'Outcome', testing:'Testing', scale:'The scale', research:'Research', proto:'Prototype'}, XP = {voices:'Discover', plan:'Develop', outcome:'Deliver', testing:'Deliver', scale:'Discover', research:'Define', proto:'Deliver'};
    const chapters = FLOW.map(key => { const si = key[0] === 's' && /^s\d+$/.test(key) ? +key.slice(1) : -1; const x = si >= 0 ? cur.secs[si] : null;
      return {key, k: x ? x.k : XL[key], phaseL: x ? (x.phase || x.layer) : XP[key]}; });
    const chOf = key => { const i = FLOW.indexOf(key); return {idx:i, n:String(i + 1).padStart(2, '0'), phase: i >= 0 ? chapters[i].phaseL : ''}; };
    const secs = chapters.map((x, j) => ({...x, n:String(j + 1).padStart(2, '0'), onClick:() => this.scrollToStory(j),
      color: j === s.si ? INK : '#999999', pill: j === s.si ? CREAM : 'transparent', line: j === s.si ? CREAM : '#666666', dot: j === s.si ? RED : 'transparent', bar: j <= s.si ? CREAM : '#333333',
      notFirst: j > 0, conn: j === s.si ? 'var(--yj-accent, #ff4d2e)' : 'transparent',
      cBg: j < s.si ? CREAM : 'transparent', cFg: j < s.si ? INK : j === s.si ? CREAM : '#666666', cLine: j === s.si ? 'var(--yj-accent, #ff4d2e)' : j < s.si ? CREAM : '#444444',
      lbl: j === s.si ? CREAM : j < s.si ? '#bbbbbb' : '#666666', cur: j === s.si ? 'step' : undefined}));
    const NAVK = cur.nav || null, navJ = NAVK ? FLOW.map((k, j) => NAVK.includes(k) ? j : -1).filter(j => j >= 0) : null;
    const navAct = navJ ? navJ.filter(j => j <= s.si).pop() ?? navJ[0] : null;
    const secsNav = navJ ? navJ.map(j => { const on = j === navAct; return {...secs[j], k: (cur.navL || {})[FLOW[j]] || secs[j].k, lbl: on ? CREAM : j < s.si ? '#bbbbbb' : '#666666', conn: on ? 'var(--yj-accent, #ff4d2e)' : 'transparent', cur: on ? 'step' : undefined}; }) : secs;
    const secsFull = cur.secs.map((x, j) => { const o = FLOW.indexOf('s' + j); return {...x, idx: o < 0 ? 90 + j : o, phaseL: x.phase || x.layer}; }).map((x, j) => ({...x, idx:x.idx, hasStat:!!x.stat, noStat:!x.stat, hasWW:false, wwCards:!!(x.ww && x.ww.length && x.cards), wwRows:!!(x.ww && x.ww.length && !x.cards),
        ww:(x.ww || []).map((w, wi, arr) => { const nW = arr.length, d = ((wi - (this.state.wwFront || 0)) % nW + nW) % nW, f = d === 0;
          return {...w, n:String(wi + 1).padStart(2, '0'), total:String(nW).padStart(2, '0'), z: 10 - d,
            tf: f ? 'translateY(0) scale(1) rotateX(0deg)' : (this.state.stkHov ? `translateY(${-d * 74}px) scale(${1 - d * 0.04}) rotateX(${4 + d * 3}deg)` : `translateY(${-d * 54}px) scale(${1 - d * 0.06}) rotateX(${10 + d * 6}deg)`),
            op: d > 2 ? 0 : 1, txtO: f ? 1 : 0.25, cur: f ? 'default' : 'pointer',
            bg: f ? 'linear-gradient(160deg,#3a2260,#1a1124)' : 'linear-gradient(180deg,#1a1a1d,#111113)',
            line: f ? '#6b3fa8' : '#262626',
            dotBg: f ? 'var(--yj-accent, #ff4d2e)' : '#222222', dotFg: f ? '#0a0a0a' : '#8c8c8c', fg: f ? '#f4f4f4' : '#8c8c8c',
            pip: f ? 'var(--yj-accent, #ff4d2e)' : '#333333', pipW: f ? '28px' : '12px', go:() => this.setState({wwFront:wi})}; }), hasSort:!!x.sort, fImgs:(x.imgs || []).map(fi => ({...fi, col: fi.big ? '1 / -1' : 'auto', ar: fi.big ? '21/10' : '4/5', open:() => this.setState({lb:fi.src, lbAlt:fi.k})})), pCount:String((x.primary || []).length).padStart(2, '0'), sCount:String((x.secondary || []).length).padStart(2, '0'), hasJourney:!!x.journey, journey: x.journey ? {...x.journey, stages:x.journey.stages.map((st, si, arr) => { const n = arr.length, d = ((si - (this.state.jFront || 0)) % n + n) % n, f = d === 0, sp = this.state.jSpread;
          return {...st, z: 10 - d, left: ((sp ? 0 : 11) + d * (sp ? 10.5 : 5)) + '%', tf: f ? 'rotateY(0deg) scale(1)' : `rotateY(${sp ? -4 : -14}deg) scale(${1 - d * (sp ? 0.02 : 0.05)})`, txtO: f ? 1 : 0.2, cur: f ? 'default' : 'pointer',
            bg: f ? 'linear-gradient(160deg,#2a1840,#141018)' : 'linear-gradient(180deg,#1a1a1d,#111113)', line: f ? '#6b3fa8' : '#2a2a2c', dotBg: f ? 'var(--yj-accent, #ff4d2e)' : '#222222', dotFg: f ? '#0a0a0a' : '#8c8c8c', pip: f ? 'var(--yj-accent, #ff4d2e)' : '#333333', pipW: f ? '28px' : '12px', go:() => this.setState({jFront:si})}; })} : null, hasScreens:!!(x.screens && cur.proto), screens:(x.screens || []).map(([k, p], si, arr) => { const mid = (arr.length - 1) / 2, off = si - mid; return {k, href:(cur.proto || '').replace(/\/$/, '') + p, rot:(off * 5) + 'deg', ty:(Math.abs(off) * 22) + 'px', z: 5 - Math.round(Math.abs(off) * 2), delay:(si * 0.8) + 's'}; }), hasPhone:!!(x.phone && cur.proto), phoneHref: cur.proto && x.phone ? cur.proto.replace(/\/$/, '') + x.phone : '#', canZoom:!!x.src, zoomCursor: x.src ? 'zoom-in' : 'default', openZoom: x.src ? () => this.setState({lb:x.src, lbAlt:x.fig}) : undefined, n:String(x.idx + 1).padStart(2, '0'), textOrder: x.idx % 2 ? 2 : 1, figOrder: x.idx % 2 ? 1 : 2,
      ...(() => { const mode = x.layout || 'split', ar = x.ar || '4/3', [w, hh] = ar.split('/').map(Number), por = w / hh < 1;
        return {isSplit: mode === 'split', isFull: mode === 'full', isText: mode === 'text', isCover: mode === 'cover', isField: mode === 'field', ar, dir: (x.ww && x.ww.length) ? 'row-reverse' : (x.idx % 2 ? 'row-reverse' : 'row'),
          figGrow: por ? '0' : '1.2', figBasis: por ? 'min(100%,440px)' : '480px', figMax: por ? '520px' : '100%'}; })(),
      fig: h(K, {key:`fig${s.ci}-${j}`, level, parallax:50},
        h('div', {style:{position:'absolute', inset:0, background:'#141414'}}, h(I, {src:x.src || `assets/case-${cur.num}-${String(j + 1).padStart(2, '0')}.jpg`, pos:x.pos, zoom:x.zoom, tone:'#141414', label:`Add figure — assets/case-${cur.num}-${String(j + 1).padStart(2, '0')}.jpg · ${x.fig}`})))}));
    let nextI = (s.ci + 1) % CASES.length; while (CASES[nextI].id === 'halls') nextI = (nextI + 1) % CASES.length;
    const nx = CASES[nextI];
    const nextBanner = h(K, {key:'next' + nextI, level, parallax:0, label:'Next case', onClick:() => this.openCase(nextI)},
      h('div', {style:{position:'absolute', inset:0}}, this.pic(nx),
        h('div', {'data-ink':'light', style:{position:'absolute', inset:0, padding:'clamp(20px,3vw,40px)', display:'flex', flexDirection:'column', justifyContent:'space-between', pointerEvents:'none', background:'linear-gradient(180deg,rgba(0,0,0,0.35) 0%,rgba(0,0,0,0) 35%,rgba(0,0,0,0) 50%,rgba(0,0,0,0.7) 100%)', boxSizing:'border-box'}},
          h('span', {style:{font:`13px ${MONO}`, letterSpacing:'0.08em', textTransform:'uppercase', color:CREAM}}, '(Next case)'),
          h('div', {style:{display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:24, flexWrap:'wrap'}},
            h('span', {style:{fontFamily:SERIF, fontStyle:'italic', fontSize:'clamp(28px,3.2vw,48px)', lineHeight:1, color:CREAM, minWidth:0}}, nx.short),
            h('span', {style:{flex:'none', background:CREAM, color:INK, borderRadius:999, padding:'12px 22px', fontSize:16, fontWeight:600, whiteSpace:'nowrap'}}, 'Open case study →')))));

    const phases = PHASES.map(ph => { const on = s.phase === ph; return {label:ph, count: ph === 'All' ? METHODS.length : METHODS.filter(m => m.phase === ph).length,
      onClick:() => this.setState({phase:ph}), bg: on ? CREAM : 'transparent', fg: on ? INK : CREAM, line: on ? CREAM : '#666666'}; });
    const methodList = METHODS.filter(m => s.phase === 'All' || m.phase === s.phase).map(m => ({...m, onClick:() => this.setState({mid:m.id}),
      bg: s.mid === m.id ? RED : '#141414', fg: s.mid === m.id ? INK : CREAM}));
    const mUsed = cases.filter(c => c.methods.includes(s.mid));

    const tracks = ['Education','Practice','Community'].map((label, r) => ({label, items: TIMELINE.filter(t => t.row === r).map(t => ({...t, left:pct(t.s), width:pct(T0 + (t.e - t.s)),
      onClick:() => this.setState({tid:t.id}), bg: s.tid === t.id ? RED : '#222222', fg: s.tid === t.id ? INK : CREAM}))}));
    const years = []; for (let y = T0; y < T1; y++) years.push({y, left:pct(y)});

    return {
      zineEl: this._zineEl || (this._zineEl = h(Component.Zine)),
      muteRef: this._muteRef || (this._muteRef = el => {
        if (!el || el._yjLoop) return;
        el._yjLoop = true; el.muted = true; el.defaultMuted = true; el.volume = 0; el.loop = true; el.autoplay = true; el.playsInline = true;
        const go = () => { if (el.paused && !document.hidden) el.play().catch(() => {}); };
        el.addEventListener('ended', () => { el.currentTime = 0; go(); });
        el.addEventListener('pause', () => setTimeout(go, 150));
        el.addEventListener('canplay', go);
        document.addEventListener('visibilitychange', go);
        go();
      }),
      instEl: this._instEl || (this._instEl = h(Component.Fade)),
      muteRef: this._muteRef || (this._muteRef = v => { if (!v) return; v.muted = true; v.defaultMuted = true; v.setAttribute('muted', ''); const p = v.play(); if (p) p.catch(() => {}); }),
      ...this.mvVals(s, cur),
      hdr: {pill:CREAM, pillFg:INK}, navRef:this.navRef,
      chatOpen: !!s.chatOpen, chatFab: !s.chatOpen, chatRef:this.chatRef, chatBusy: !!s.chatBusy, chatInput: s.chatInput || '',
      chatMsgs: [{role:'agent', text:"Hi — I'm Yashvi's portfolio agent. Ask me about her strategy work, how she runs research, or whether she'd fit your team."}, ...(s.chatMsgs || [])].map(m => ({...m,
        ...(() => { const links = m.role === 'agent' ? CASES.map((cs, i) => ({cs, i})).filter(({cs}) => cs.id !== 'halls' && [cs.short, cs.short.split(/[:—]/)[0].trim(), cs.title].some(n => n && n.length > 2 && m.text.toLowerCase().includes(n.toLowerCase()))).map(({cs, i}) => ({label:'Open ' + cs.short, open:() => { this.setState({chatOpen:false}); this.openCase(i); }})) : []; return {links, hasLinks: links.length > 0}; })(),
        align: m.role === 'user' ? 'flex-end' : 'flex-start', bg: m.role === 'user' ? '#f4f4f4' : '#1a1a1a', fg: m.role === 'user' ? '#000000' : '#f4f4f4'})),
      chatShowSuggest: !(s.chatMsgs || []).length,
      chatSuggest: ['Which project best shows her strategy work?', 'How does she use AI in her process?', 'Is she available, and where?'].map(t => ({text:t, onClick:() => this.sendChat(t)})),
      openChat:() => this.setState({chatOpen:true}), closeChat:() => this.setState({chatOpen:false}),
      chatType: e => this.setState({chatInput:e.target.value}),
      chatSubmit: e => { e.preventDefault(); this.sendChat(this.state.chatInput); },
      socials:[{k:'LI', href:'https://www.linkedin.com/in/yashvi-jain-b049851ba/'}, {k:'CV', href:__R('uploads/assets-1790874602631-0p68.pdf')}],
      loader: s.loaded ? null : h(Component.Loader, {onDone:() => this.setState({loaded:true})}),
      shapeMorph: h(Component.Morph), sketchBig: h(Component.Sketch, {size:'0.62em', weight:1.1}), sketchSmall: h(Component.Sketch, {size:46, weight:1.05}),
      fabEnter:() => this.setState({fabHover:true}), fabLeave:() => this.setState({fabHover:false}),
      fabLabelW: s.fabHover ? '160px' : '0px', fabLabelO: s.fabHover ? 1 : 0, fabLabelP: s.fabHover ? '14px 0 18px' : '0',
      hzRef:this.hzRef, hzTrack:this.hzTrack, hzBar:this.hzBar, hzH: s.hzH || '100vh',
      catList, cats, isWork: s.screen === 'work', isPlay: (s.wcat || 'All') === 'Play', notPlay: (s.wcat || 'All') !== 'Play', wIndexCount: String(cases.length).padStart(2,'0'),
      nav, filters, workList, workCount:workList.length, cases, hero, faceInfo, segs, heroRef:this.heroRef,
      heroWrapH: mode === 'scroll' ? '300vh' : '100vh',
      heroOpen:() => this.openCase(s.face),
      goHome:() => this.go('home'), goContact:() => this.go('contact'), goApproach:() => this.go('approach'),
      isHome:s.screen === 'home', isCase:s.screen === 'case', isApproach:s.screen === 'approach', isExp:s.screen === 'experience', isContact:s.screen === 'contact',
      showCta: s.screen !== 'contact',
      introImg: h(K, {key:'intro', level, parallax:50}, this.portrait('50% 35%')),
      aboutImg: h(K, {key:'about', level, parallax:60}, this.portrait('50% 30%')),
      caseHero: h(K, {key:'hero' + s.ci, level, parallax:90}, this.pic(cur)),
      secFig: h(K, {key:`fig${s.ci}-${s.si}`, level, parallax:40},
        h('div', {style:{position:'absolute', inset:0, background:'#141414'}}, h(I, {src:`assets/case-${cur.num}-${sec.n}.jpg`, tone:'#141414', label:`Add figure — assets/case-${cur.num}-${sec.n}.jpg · ${sec.fig}`}))),
      mzRef:this.mzRef, mzTrack:this.mzTrack, mzBar:this.mzBar, mzH: s.mzH || '100vh',
      mzPhases: PHASES.filter(p => p !== 'All').map(p => { const on = (s.mzPhase || 'Frame') === p; return {label:p, onClick:() => this.mzGo(p), bg: on ? CREAM : 'transparent', fg: on ? INK : CREAM, line: on ? CREAM : '#666666'}; }),
      methodAll: METHODS.map((m, j) => ({...m, n:String(j + 1).padStart(2, '0'), line: (s.mzPhase || 'Frame') === m.phase ? RED : '#333333',
        used: CASES.map((c, i) => ({num:c.num, short:c.short, open:() => this.openCase(i), has:c.methods.includes(m.id)})).filter(u => u.has)})),
      stop:e => { if (e.target.closest && e.target.closest('image-slot')) e.preventDefault(); },
      recs:[
        {quote:'She approached every project with a thoughtful design mindset, ensuring that user needs and business goals were always well balanced… she took full ownership of her responsibilities and delivered with both accountability and excellence. Any team would be fortunate to have her.', slot:'rec-arpit-vyas', img:__R('assets/recs/arpit.jpeg'), name:'Arpit Vyas', role:'Product Experience Strategist', rel:'Managed Yashvi · Apr 2026'},
        {quote:'Her ability to understand and articulate complex design requirements is matched only by her strong sense of aesthetics and usability… Her communication skills are outstanding, ensuring smooth collaboration with team members and business.', slot:'rec-geetanjali-chuttani', img:__R('assets/recs/geet.jpeg'), name:'Geetanjali Chuttani', role:'Associate Design Director – UX', rel:'Managed Yashvi · May 2024'},
        {quote:'An exceptional designer. Continues to make us proud.', slot:'rec-siddhartha-gigoo', img:__R('assets/web/assets/recs/siddhartha.webp'), name:'Siddhartha Gigoo', role:'Head of TCS Interactive Design Studios', rel:'Managed Yashvi · Mar 2025'}],
      certs:[
        {title:'Enterprise Design Thinking Practitioner', org:'IBM', logo:__R('assets/certs/ibm.svg'), h:40, date:'Issued Nov 2025'},
        {title:'Customer Experience (CX) Foundations', org:'LinkedIn', logo:__R('assets/certs/linkedin.png'), date:'Issued Mar 2024'}].map(c => ({...c, logoImg: React.createElement('img', {src:c.logo, alt:c.org + ' logo', style:{height:c.h || 32, width:'auto', maxWidth:120, objectFit:'contain', filter:'brightness(0) invert(1)'}})})),
      stackPause:() => { this._stkPause = true; this.setState({stkHov:true}); }, stackPlay:() => { this._stkPause = false; this.setState({stkHov:false}); }, phoneLive: !!this.state.phoneLive, phoneEv: this.state.phoneLive ? 'auto' : 'none', phoneRing: this.state.phoneLive ? '2px solid var(--yj-accent, #ff4d2e)' : 'none', phoneBtnL: this.state.phoneLive ? 'Done interacting' : 'Interact here', phoneBtnBg: this.state.phoneLive ? 'var(--yj-accent, #ff4d2e)' : '#f4f4f4', phoneBtnFg: '#0a0a0a', phoneToggle:() => this.setState(st => ({phoneLive:!st.phoneLive})), sortStkOn:() => this.setState({sortSpread:true}), sortStkOff:() => this.setState({sortSpread:false}), jRef:this.jRef, jProg:(this.state.jP || 0.18) * 100 + '%', jScroll:e => { const t = e.currentTarget, m = t.scrollWidth - t.clientWidth; this.setState({jP: m > 0 ? Math.max(0.18, t.scrollLeft / m) : 1}); }, jPrev:() => this.setState(st => ({jFront:((st.jFront || 0) + 4) % 5})), jNext:() => this.setState(st => ({jFront:((st.jFront || 0) + 1) % 5})), jOn:() => this.setState({jSpread:true}), jOff:() => this.setState({jSpread:false}), subNavRef:this.subNavRef, secsNav, secsFull, chTotal:String(FLOW.length).padStart(2, '0'), chV:chOf('voices'), chP:chOf('plan'), chO:chOf('outcome'), chT:chOf('testing'), chS:chOf('scale'), chR:chOf('research'), chPr:chOf('proto'), hasProtoSec: FLOW.includes('proto'), ordScale:Math.max(0, FLOW.indexOf('scale')), ordResearch:Math.max(0, FLOW.indexOf('research')), ordProto:Math.max(0, FLOW.indexOf('proto')),
      hasTesting: !!cur.testing, resultTop: !cur.testing, ordTesting: Math.max(0, FLOW.indexOf('testing')),
      testing: cur.testing ? {...cur.testing, hasPeople: !!(cur.testing.people && cur.testing.people.length), noPeople: !(cur.testing.people && cur.testing.people.length), people:(cur.testing.people || []).map(p => ({...p, open:() => this.setState({lb:p.src, lbAlt:p.name})})), imgs:cur.testing.imgs.map(t => ({...t, open:() => this.setState({lb:t.src, lbAlt:t.k})}))} : null,
      storyRef:this.storyRef, storyBar:this.storyBar,
      cur:{...cur, facts:[{k:'Role', v:cur.role}, {k:'Organisation', v:cur.org}, {k:'Sector', v:cur.sector}, {k:'Timeline', v:cur.years}, ...(cur.scope ? [{k:'Scope', v:cur.scope}] : [])], hasTldr: !!cur.tldr, tldr: cur.tldr || []},
      curMethods: cur.methods.map(id => ({name:METHODS.find(m => m.id === id).name, onClick:() => this.go('approach', {mid:id, phase:'All'})})),
      secs, sec,
      secPrev:() => this.setState(st => ({si:Math.max(0, st.si - 1)})),
      secNext:() => s.si < chapters.length - 1 ? this.setState({si:s.si + 1}) : this.openCase(nextI),
      secNextLabel: s.si < chapters.length - 1 ? `Next: ${chapters[s.si + 1].k}` : 'Next case', nextBanner,
      principles:[
        {n:'01', t:'Assumptions are a starting point, not a plan', d:'Write them down, then go and test them with the people who live the problem.'},
        {n:'02', t:'Rough and early beats polished and late', d:'A paper prototype in week one teaches more than a deck in month three.'},
        {n:'03', t:'Find who it’s really for', d:'Rarely the average user. Usually the one the service fails first.'}],
      phases, methodList, msel:METHODS.find(m => m.id === s.mid), mUsed, mUnused: mUsed.length === 0,
      tracks, years, tsel: TIMELINE.find(t => t.id === s.tid), pivotLeft: pct(2025.67),
      lbOpen: !!s.lb, lbImg: s.lb ? React.createElement('img', {src:s.lb, alt:s.lbAlt || '', style:{maxWidth:'100%', maxHeight:'100%', objectFit:'contain', background:'#ffffff'}}) : null, lbClose: () => this.setState({lb:null}),
      protoVideo: cur.protoVideo || '', protoLoopOn: !!s.protoLoop && !!cur.protoVideo && s.protoVidOk === cur.protoVideo,
      protoVidErr: () => this.setState({protoVidBad:true, protoLoop:false}),
      protoActive: () => { this._pIn = true; clearTimeout(this._pt); if (this.state.protoLoop) this.setState({protoLoop:false}); },
      protoRest: () => { this._pIn = false; this.protoArm(); },
      ...(() => {
        const L = cur.proto ? [['Home','/'],['Compatibility quiz','/quiz'],['Adopt','/adopt'],['Meet Lion','/adopt/lion'],['Emergency','/emergency'],['Hospitals','/aid/hospitals'],['Scan AI','/aid/scan'],['Donate','/donate']] : [];
        const N = L.length || 1, a = (s.protoI || 0) % N;
        const protoScreens = L.map(([k, p], i) => {
          let o = ((i - a) % N + N) % N; if (o > N / 2) o -= N; const ao = Math.abs(o);
          return {k, n:String(i + 1).padStart(2, '0'), href:cur.proto.replace(/\/$/, '') + p,
            tf:`translateX(${o * 210}px) translateY(${ao * 26}px) rotate(${o * 5}deg) scale(${Math.max(0.5, 1 - ao * 0.14)})`,
            op: ao > 2 ? 0 : 1, z: 10 - ao, fx: ao ? `brightness(${Math.max(0.35, 1 - ao * 0.3)})` : 'none', line: ao ? '#333333' : '#f4f4f4',
            dot: i === a ? 'var(--yj-accent, #ff4d2e)' : '#333333', dotW: i === a ? '32px' : '12px', go:() => this.setState({protoI:i})};
        });
        return {protoScreens, protoNow: protoScreens[a] || {}, protoCount: String(L.length).padStart(2, '0'),
          protoPause:() => { this._pPause = true; }, protoPlay:() => { this._pPause = false; }};
      })(),
      ...this.extraVals(cur, s),
      isPosterCover: !!cur.banner, notPosterCover: !cur.banner, posterAR: cur.posterAR || '1448/1086', posterMaxW: cur.posterAR && cur.posterAR !== '4/3' ? '600px' : '1100px', posterBg: cur.tone,
      posterImg: cur.banner ? React.createElement('img', {src:cur.src, alt:cur.alt || 'CRAY — Safer streets. Happier strays.', style:{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}}) : null,
      goWork:() => this.go('work'), caseTotal: String(CASES.length).padStart(2, '0'), hasProto: !!cur.proto, crayRes: (() => { const A = 'var(--yj-accent, #ff4d2e)';
        const donut = (yes, yl, nl) => ({yes, no:Math.round((100 - yes) * 10) / 10, yl, nl, bg:`conic-gradient(${A} 0 ${yes}%, #333333 ${yes}% 100%)`});
        const bars = a => a.map(([k, v]) => ({k, v:v + '%', w:v + '%'}));
        const N = () => (k, w = 400) => ({k, w, fg:'#dddddd', bg:'transparent'});
        const C = {aid:'#b46cf5', ani:'#c792f8', mat:'#d9b8fb', ado:'#9a52e0', pro:'#7a3fbf'}, FG = {aid:'#140c1c', ani:'#140c1c', mat:'#140c1c', ado:'#ffffff', pro:'#ffffff'};
        const Y = N(), R = N(), O = N(), G = N(), P = N(), B = N(), PD = k => ({k, w:600, fg:'#f4f4f4', bg:'#3a2260'});
        const L = (items, k) => ({k:k || '', hasK:!!k, items});
        const raw = [
          {k:'Aid', c:C.aid, hfg:FG.aid, grow:1, basis:'110px', lanes:[L([Y('Report crime'), Y('Ask for rescue vehicle'), Y('Emergency'), Y('Diseases')])]},
          {k:'Animals', c:C.ani, hfg:FG.ani, grow:1, basis:'130px', lanes:[L([R('Dogs'), R('Cats'), O('Profile: photos, videos, details')])]},
          {k:'Match', c:C.mat, hfg:FG.mat, grow:1, basis:'120px', lanes:[L([G('Questionnaire'), G('Compatibility checker'), G('Add to calendar')])]},
          {k:'Adoption', c:C.ado, hfg:FG.ado, grow:2, basis:'240px', lanes:[L([P('Adoption centre details'), P('Animals available'), P('Lost & found'), P('Foster / sponsor an animal'), P('Give for adoption / report')], 'Browse'), L([PD('Schedule a visit'), P('Apply for adoption'), P('Background check approved'), P('Adopted'), P('Counselling / accessories')], 'Adopt')]},
          {k:'Profile', c:C.pro, hfg:FG.pro, grow:1, basis:'110px', lanes:[L([B('Profile setup'), B('Verify'), B('Favourites'), B('Progress tracker'), B('Logout')])]}];
        const iaH = this.state.iaHov;
        const iaCols = raw.map((col, ci, arr) => ({...col, count:String(col.lanes.reduce((t, l) => t + l.items.length, 0)),
          tint:'linear-gradient(180deg,#1a1a1d,#111113)', edge2:'#2a2a2c',
          lnL: ci === 0 ? '50%' : '-6px', lnR: ci === arr.length - 1 ? '50%' : '-6px', op: iaH && iaH !== col.k ? 0.4 : 1,
          on:() => this.setState({iaHov:col.k}), off:() => this.setState(st => st.iaHov === col.k ? {iaHov:null} : null)}));
        const hv = (key, k) => { const cur = this.state[key], on = cur === k; return {op: cur && !on ? 0.35 : 1, sy: on ? 1.06 : 1, ty: on ? '-4px' : '0px', on:() => this.setState({[key]:k}), off:() => this.setState(st => st[key] === k ? {[key]:null} : null)}; };
        return {
          ia: iaCols,
          food: bars([['Milk', 60], ['Biscuits', 10], ['Bread', 10], ['Eggs / chicken', 10], ['Pet food', 8], ['Rice', 2]]).map((b, i) => ({...b, f:parseFloat(b.v), c:['var(--yj-accent, #ff4d2e)', 'color-mix(in oklab, var(--yj-accent, #ff4d2e) 70%, #f4f4f4)', 'color-mix(in oklab, var(--yj-accent, #ff4d2e) 45%, #f4f4f4)', '#f4f4f4', '#8c8c8c', '#4a4a4a'][i], ...hv('fHov', b.k)})),
          contrib: [['Water', 82.6, 0], ['Feed', 82.6, 0], ['Shelter', 56.6, 0], ['Play', 7, 0], ['Vaccinate', 30.4, 1], ['Check-ups', 21.7, 1], ['Neuter', 8.7, 1]].map(([k, v, r]) => ({k, v:v + '%', hgt:v + '%', c: r ? 'var(--yj-accent, #ff4d2e)' : '#f4f4f4', ...hv('cHov', k)})),
          common: bars([['Keep bowls of water', 82.6], ['Feed', 82.6], ['Provide shelter', 56.6], ['Play', 7]]),
          rare: bars([['Vaccinate', 30.4], ['Take for check-ups', 21.7], ['Neuter', 8.7]]),
          sponsor: donut(69.6, 'Would sponsor', 'Would not'),
          reach: donut(73.9, 'Find it hard', 'Find it easy'),
          aware: donut(56.5, 'Unaware', 'Aware'),
          sort: [
            {k:'Home', items:[['Emergency', 8], ['Reminders', 7], ['Compatibility quiz', 9], ['Report abuse', 5]]},
            {k:'Aid', items:[['AI reports analyser', 10], ['Treatments', 10], ['Vaccines / medicines', 10], ['Hospital', 10], ['Sponsor', 8]]},
            {k:'Adoption', items:[['Adoption centre', 10], ['Counselling before adoption', 10], ['Adoption process', 10], ['Schedule a visit', 9], ['Foster pet', 8]]},
            {k:'Explore', items:[['Verification', 10], ['Events', 10], ['Community', 10], ['Favourites', 7]]}
          ].map((g, gi) => { const on = this.state.sortHov === g.k, sel = this.state.sortItem && this.state.sortItem[0] === g.k ? this.state.sortItem[1] : -1, top = sel >= 0 ? g.items[sel] : g.items.reduce((m, it) => it[1] > m[1] ? it : m, g.items[0]);
            const D = {"Home":"What people want first: emergencies, reminders and a quick fit check.","Aid":"Medical help scored highest, with every item at full marks but one.","Adoption":"The full adoption journey, from finding a centre to counselling.","Explore":"Trust builders: verification, events and community."};
            const nS = 4, dS = ((gi - (this.state.sortFront || 0)) % nS + nS) % nS, fS = dS === 0, sp = this.state.sortSpread;
            return {...g, n:'C — ' + (gi + 1), desc:D[g.k], legY: on ? '0px' : '6px', z: 10 - dS, left: (dS * (sp ? 22 : 9)) + '%', tf: fS ? 'rotateY(0deg) scale(1)' : `rotateY(${sp ? -4 : -14}deg) scale(${1 - dS * (sp ? 0.02 : 0.05)})`, cur: fS ? 'default' : 'pointer', go:() => this.setState({sortFront:gi}), pip: fS ? 'var(--yj-accent, #ff4d2e)' : '#333333', pipW: fS ? '28px' : '12px', desc:D[g.k], cO: on ? 1 : 0, cT: on ? 'translate(0,0) rotate(-8deg)' : 'translate(-10px,8px) rotate(0deg)', bg: (on || fS) ? 'linear-gradient(160deg,#3a2260,#1a1124)' : 'linear-gradient(180deg,#1a1a1d,#111113)', line: on ? '#6b3fa8' : '#2a2a2c',
            on:() => this.setState({sortHov:g.k}), off:() => this.setState(st => st.sortHov === g.k ? {sortHov:null, sortItem:null} : null),
            rk: top[0], rv: String(top[1]), count:String(g.items.length).padStart(2, '0'),
            items:g.items.map(([k, v], ii) => { const act = sel === ii; return {k, v:String(v), w: v * 10 + '%', hgt: (v * 10) + '%', lc: act ? 'var(--yj-accent, #ff4d2e)' : (on ? '#f4f4f4' : '#8c8c8c'), lw: act ? '4px' : '2px', rowBg: act ? '#3a2260' : 'transparent', rowFg: act ? '#f4f4f4' : '#bbbbbb',
              pick:() => this.setState({sortHov:g.k, sortItem:[g.k, ii]})}; })}; })}; })(), protoUrl: cur.proto || '#', wTabs: this._wTabs, tcsWord: TCS_WORD, nowYear: NOW.getFullYear(),
      offClock:[
        {n:'01', k:'Bakeaway', src:__R('assets/web/assets/about/bakery.webp'), alt:'Chocolate mirror-glaze cake by Bakeaway', slot:'about-bake', ph:'Drop a Bakeaway bake', v:'My home bakery. Every order is made from scratch, by hand, start to finish.', link:'A recipe is a service blueprint: the steps are simple, the care isn’t.', href:'https://www.instagram.com/bakeaway_yashvijain/', cta:'@bakeaway_yashvijain'},
        {n:'02', k:'Travel', src:__R('assets/web/assets/about/travel.webp'), alt:'Yashvi walking towards the sea at sunset', slot:'about-travel', ph:'Drop a travel photo', v:'New places, with no fixed itinerary. I watch how people move through streets, stations and markets.', link:'It’s fieldwork I don’t have to write up.', href:'', cta:''},
        {n:'03', k:'Reading', src:__R('assets/web/assets/about/reading.webp'), alt:'Yashvi reading a book on the grass', slot:'about-read', ph:'Drop a photo of your books', v:'Always halfway through something. Fiction for the people, non-fiction for the systems.', link:'Good stories and good services both start with who it’s for.', href:'', cta:''}].map(o => ({...o, noSrc: !o.src, bg: o.src ? 'url("' + o.src + '")' : 'none'})),
      aboutFacts:[
        {k:'Industry', big:TCS_YRS + '+ yrs', v:'UX & service design at Tata Consultancy Services', tags:[TCS_YRS + '+ years', 'UX & service design', 'Tata Consultancy Services']},
        {k:'Education', big:'MA , B.Design', v:'Design Management, LCC — UAL, 2026', tags:['MA Design Management', 'LCC — UAL, 2026', 'B.Design']},
        {k:'Sectors', big:'Health-Tech/Pharma, Cultural Probs', v:'Museums, Exhibitions', tags:['Health-tech', 'Pharma', 'Culture', 'Museums', 'Exhibitions']},
        {k:'Based in', big:'London', v:'Hybrid · Remote', tags:['London', 'Delhi', 'Hybrid', 'Remote']}],
      skills:[
        {t:'Strategy & management', items:['Stakeholder engagement','Cross-functional teamwork','Insight communication','Concept development']},
        {t:'User research', items:['Discovery research','Interviews','Usability testing','Workshop facilitation','Co-design','Qualitative synthesis']},
        {t:'Service design', items:['Service blueprints','Journey mapping','Process mapping','User flows','Personas']},
        {t:'Inclusive practice', items:['Accessibility','Lived-experience insight','Inclusive communication','Vulnerable-user sensitivity']},
        {t:'Tools', items:['Figma','Adobe Creative Suite','Microsoft 365','ChatGPT','Claude','UX Pilot']}],
      skillsCore: [
        {t:'Strategy', items:['Stakeholder engagement','Cross-functional teamwork','Insight communication','Concept development']},
        {t:'Research', items:['Discovery research','Interviews','Usability testing','Workshop facilitation','Co-design','Qualitative synthesis']},
        {t:'Service design', items:['Service blueprints','Journey mapping','Process mapping','User flows','Personas']},
        {t:'Inclusive practice', items:['Accessibility','Lived-experience insight','Inclusive communication','Vulnerable users']}].map((x, i) => ({...x, n:String(i + 1).padStart(2, '0')})),
      toolsList:['Figma','Adobe CS','Microsoft 365','ChatGPT','Claude','UX Pilot'],
      contacts:[
        {k:'Email', v:'yashvi.jain.yj@gmail.com', href:'mailto:yashvi.jain.yj@gmail.com'},
        {k:'Based in', v:'London, UK', href:'#'},
        {k:'LinkedIn', v:'yashvi-jain', href:'https://www.linkedin.com/in/yashvi-jain-b049851ba/'},
        {k:'CV', v:'Download PDF ↓', href:__R('uploads/assets-1790874602631-0p68.pdf')}],
      cta: h(L, {popHover:false, n:16, index:s.ctaHover ? 1 : 0, dur:1000, stagger:26, label:'Contact',
        onEnter:() => this.setState({ctaHover:true}), onLeave:() => this.setState({ctaHover:false}), onClick:() => this.go('contact'),
        faces:[
          h('div', {style:{position:'absolute', inset:0, background:RED, color:INK, padding:'clamp(24px,3vw,44px)', display:'flex', flexDirection:'column', justifyContent:'space-between'}},
            h('span', {style:{font:`13px ${MONO}`, letterSpacing:'0.08em', textTransform:'uppercase'}}, '(Designer · Researcher · Thinker — open to roles)'),
            h('span', {style:{fontFamily:"Geist,'Geist Display',sans-serif", fontStretch:'62%', fontWeight:800, fontSize:'clamp(48px,7.50vw,135px)', lineHeight:0.82, textTransform:'uppercase'}}, 'Have a messy problem?')),
          h('div', {style:{position:'absolute', inset:0, background:CREAM, color:INK, padding:'clamp(24px,3vw,44px)', display:'flex', flexDirection:'column', justifyContent:'space-between'}},
            h('span', {style:{font:`13px ${MONO}`, letterSpacing:'0.08em', textTransform:'uppercase', color:RED}}, '(Get in touch)'),
            h('span', {style:{fontFamily:SERIF, fontStyle:'italic', fontSize:'clamp(48px,7.50vw,135px)', lineHeight:0.9}}, "Let's frame it →"))]})
    };
  }
}

export default Component;
