// Behaviour for the Portfolio Publish screen, ported from the Claude Design source.
import React from 'react';
import { DCLogic } from '../dc/DCLogic.js';
import { __R } from '../dc/resources.js';

const CASES = [
  { id:'move', cardLine:'A card game that got families and teens naming stereotypes aloud in testing.', accent:'#ff3b1f', num:'01', short:'What It Takes to Move', title:'Shifting the work of women’s safety onto society', org:'UAL · London College of Communication', sector:'Public safety', cat:'Service design', disc:['Research','Strategy'], role:'MA Design Management — research, strategy & design', years:'2025–26',
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
        {k:'Postcard', d:'Front and back: “She shouldn’t have to plan her journey around someone’s behaviour.”', src:'assets/web/assets/ma/postcard-mockup.webp', tall:true},
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
  { id:'ava', cardLine:'70% fewer errors, with components reused across 3–4 more products.', num:'04', short:'AVA & Dosing Error', title:'A design system for J&J’s AI risk tools', org:'Johnson & Johnson · TCS Interactive', sector:'Healthcare', cat:'UX', disc:['Strategy','Co-design'], role:'UI/UX Designer', years:'2025',
    tags:['Design system','Data UX','Healthcare'], src:'assets/web/assets/ava/hero-mock.webp', tone:'#0b111d',
    question:'How might one design language make AI risk scores readable across clinical quality tools?',
    bet:'Build the system from the densest screens first, and the rest follows.', result:'70% lower error rate; components reused across 3–4 more products.',
    summary:'Unifying the UI of two AI-driven clinical quality platforms with one modular design system.',
    img:'risk overview dashboard', methods:['workshops','prototyping','usability'], secs:[]},
  { id:'pfizer', cardLine:'Led the UI of pfizer.com through Pentagram’s rebrand; it became Pfizer’s design system.', num:'05', short:'Pfizer.com', title:'Bringing Pentagram’s Pfizer rebrand to the web', org:'Pfizer · Tata Consultancy Services', sector:'Healthcare', cat:'UX', disc:['Strategy','Co-design'], role:'UI Lead', years:'2024–25',
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
const MONO = "'Schibsted Grotesk',sans-serif", SERIF = "'Libre Caslon Text',Georgia,serif";
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

  static LandingHero = function LandingHero(p) {
    // Home hero: a green ID card on a wide printed lanyard (verlet rope physics)
    // above the name set huge along the bottom. Part of the page, not a gate:
    // the nav sits on top and Selected work follows below.
    const h = React.createElement, wrap = React.useRef(null);
    const straps = [React.useRef(null)], prints = [React.useRef(null)], cards = [React.useRef(null)];
    const tagBox = React.useRef(null), tagEls = React.useRef([]), nameRef = React.useRef(null), wordA = React.useRef(null), wordB = React.useRef(null);
    const TAGS = ['Health tech', 'Pharma', 'Life sciences', 'Socio-cultural probes'];
    const [grab, setGrab] = React.useState(-1);
    const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    const S = React.useRef({N:16, vis:true, tags:null, hist:[], ropes:[{pts:[], rot:0, drag:null, fx:.66, fxm:.5, len:.34, lenm:.13, sw:.7}]});
    const CLIP = 64;
    React.useEffect(() => {
      const s = S.current, N = s.N, el = wrap.current; let raf = 0, W, H, ay = -40;
      const size = () => { W = el.clientWidth; H = el.clientHeight; const m = W < 640;
        s.ropes.forEach(r => { r.ax = W * (m ? r.fxm : r.fx); r.seg = Math.max(m ? 50 : 100, H * (m ? r.lenm : r.len)) / (N - 1);
          if (!r.pts.length) for (let i = 0; i < N; i++) { const x = r.ax + i * r.seg * (reduce ? 0 : r.sw), y = ay + i * r.seg * (reduce ? 1 : .72); r.pts.push({x, y, px:x, py:y}); } }); };
      size(); const ro = new ResizeObserver(size); ro.observe(el);
      const tick = () => {
        s.ropes.forEach((r, ri) => {
          const P = r.pts, L = P[N - 1], seg = r.seg;
          for (let i = 1; i < N; i++) { const q = P[i], vx = (q.x - q.px) * .985, vy = (q.y - q.py) * .985; q.px = q.x; q.py = q.y; q.x += vx; q.y += vy + .55; }
          // while dragging, the card eases toward the pointer through a soft spring instead of snapping to it
          if (r.drag) { const g = r.drag; g.sx2 = g.sx2 == null ? L.x : g.sx2 + (g.x - g.sx2) * .28; g.sy2 = g.sy2 == null ? L.y : g.sy2 + (g.y - g.sy2) * .28; }
          for (let it = 0; it < 14; it++) {
            P[0].x = r.ax; P[0].y = ay;
            if (r.drag) { L.x = r.drag.sx2; L.y = r.drag.sy2; }
            for (let i = 0; i < N - 1; i++) { const a = P[i], b = P[i + 1], dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || 1, k = (d - seg) / d;
              const last = i + 1 === N - 1 && r.drag, fa = i === 0 ? 0 : (last ? 1 : .5), fb = i === 0 ? 1 : (last ? 0 : .5);
              a.x += dx * k * fa; a.y += dy * k * fa; b.x -= dx * k * fb; b.y -= dy * k * fb; }
          }
          const B = P[N - 2], target = -Math.atan2(L.x - B.x, L.y - B.y) * 180 / Math.PI;
          r.rot += (target - r.rot) * (r.drag ? .14 : .2);
          const c = cards[ri].current; if (c) c.style.transform = `translate3d(${L.x}px,${L.y}px,0) translateX(-50%) rotate(${r.rot}deg)`;
          if (ri === 0) floatTags(L, r.rot);
          let d = `M${P[0].x},${P[0].y}`;
          for (let i = 1; i < N - 1; i++) { const m = P[i], n = P[i + 1]; d += ` Q${m.x},${m.y} ${(m.x + n.x) / 2},${(m.y + n.y) / 2}`; }
          d += ` L${L.x},${L.y}`;
          straps[ri].current && straps[ri].current.setAttribute('d', d); prints[ri].current && prints[ri].current.setAttribute('d', d);
        });
        if (!reduce) para();
        raf = s.vis ? requestAnimationFrame(tick) : 0;
      };
      // Domain tags: low-gravity ("anti-gravity") bodies inside the card. They drift down
      // into the card, bump into each other, and slosh when the card swings.
      const floatTags = (L, rot) => {
        const box = tagBox.current; if (!box) return;
        const hs = s.hist; hs.push(L.x, L.y); if (hs.length > 6) hs.splice(0, 2);
        if (!s.tags) {
          const BW = box.clientWidth, BH = box.clientHeight; if (!BW || !tagEls.current[3] || !tagEls.current[3].offsetWidth) return;
          s.tags = tagEls.current.map((e, i) => { const w = e.offsetWidth, hh = e.offsetHeight;
            return {e, w, h:hh, x:Math.random() * Math.max(0, BW - w), y:reduce ? BH - hh * (i + 1) - 4 * i : -hh - i * 34 - 10, vx:(Math.random() - .5) * .6, vy:0, a:0, dragS:0}; });
        }
        const BW = box.clientWidth, BH = box.clientHeight, T = s.tags;
        const ax = hs.length === 6 ? (hs[4] - hs[2]) - (hs[2] - hs[0]) : 0, ay = hs.length === 6 ? (hs[5] - hs[3]) - (hs[3] - hs[1]) : 0;
        const th = rot * Math.PI / 180, co = Math.cos(th), sn = Math.sin(th), G = .045, K = .55;
        const wx = -ax * K, wy = G - ay * K, fx = wx * co + wy * sn, fy = -wx * sn + wy * co;
        for (const t of T) {
          if (!reduce) { t.vx = (t.vx + fx) * .986; t.vy = (t.vy + fy) * .986; t.x += t.vx; t.y += t.vy; }
          if (t.w >= BW) { t.x = (BW - t.w) / 2; t.vx = 0; } else { if (t.x < 0) { t.x = 0; t.vx *= -.45; } if (t.x + t.w > BW) { t.x = BW - t.w; t.vx *= -.45; } }
          if (t.y + t.h > BH) { t.y = BH - t.h; t.vy *= -.35; t.vx *= .94; }
          if (t.y >= 0) t.in = true; if (t.in && t.y < 0) { t.y = 0; t.vy *= -.35; }
        }
        for (let it = 0; it < 3; it++) for (let i = 0; i < T.length; i++) for (let j = i + 1; j < T.length; j++) {
          const A = T[i], B2 = T[j], ox = Math.min(A.x + A.w, B2.x + B2.w) - Math.max(A.x, B2.x), oy = Math.min(A.y + A.h, B2.y + B2.h) - Math.max(A.y, B2.y);
          if (ox <= 0 || oy <= 0) continue;
          if (oy < ox) { const d = (A.y < B2.y ? -1 : 1) * oy / 2; A.y += d; B2.y -= d; const v = (A.vy + B2.vy) / 2; A.vy = v; B2.vy = v; }
          else { const d = (A.x < B2.x ? -1 : 1) * ox / 2; A.x += d; B2.x -= d; const v = (A.vx + B2.vx) / 2; A.vx = v; B2.vx = v; }
        }
        for (const t of T) { if (t.y + t.h > BH) t.y = BH - t.h; if (t.in && t.y < 0) t.y = 0; if (t.w < BW) t.x = Math.max(0, Math.min(BW - t.w, t.x)); }
        for (const t of T) { t.a += (Math.max(-14, Math.min(14, t.vx * 6)) - t.a) * .12; t.e.style.transform = `translate3d(${t.x}px,${t.y}px,0) rotate(${t.a}deg)`; t.e.style.opacity = t.y + t.h < 0 ? 0 : 1; }
      };
      // Name parallax: the name drifts slower than the page on scroll, its two words
      // spread apart, and it shifts slightly against the pointer.
      let mx = 0, my = 0, pmx = 0, pmy = 0;
      const para = () => {
        const n = nameRef.current; if (!n) return;
        const r = el.getBoundingClientRect(), sc = Math.max(0, -r.top), k = Math.min(1, sc / Math.max(1, r.height));
        pmx += (mx - pmx) * .08; pmy += (my - pmy) * .08;
        n.style.transform = `translate3d(${(-pmx * 14).toFixed(2)}px,${(-sc * .35 - pmy * 8).toFixed(2)}px,0)`;
        if (wordA.current) wordA.current.style.transform = `translate3d(${(-k * 9).toFixed(2)}vw,0,0)`;
        if (wordB.current) wordB.current.style.transform = `translate3d(${(k * 9).toFixed(2)}vw,0,0)`;
      };
      const onMove = e => { if (reduce) return; const r = el.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width - .5; my = (e.clientY - r.top) / r.height - .5; };
      const onScroll = () => { if (!reduce && !s.vis) para(); };
      el.addEventListener('pointermove', onMove); addEventListener('scroll', onScroll, {passive:true});
      // only animate while the hero is on screen
      const io = new IntersectionObserver(([e]) => { s.vis = e.isIntersecting; if (s.vis && !raf) raf = requestAnimationFrame(tick); });
      io.observe(el); raf = requestAnimationFrame(tick);
      return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); el.removeEventListener('pointermove', onMove); removeEventListener('scroll', onScroll); };
    }, []);
    const local = e => { const r = wrap.current.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    const down = ri => e => { const s = S.current, r = s.ropes[ri], L = r.pts[s.N - 1], [x, y] = local(e); e.currentTarget.setPointerCapture(e.pointerId);
      r.drag = {x:L.x, y:L.y, ox:x - L.x, oy:y - L.y, sx:x, sy:y, moved:0}; setGrab(ri); };
    const move = ri => e => { const g = S.current.ropes[ri].drag; if (!g) return; const [x, y] = local(e); g.x = x - g.ox; g.y = y - g.oy; g.moved = Math.max(g.moved, Math.hypot(x - g.sx, y - g.sy)); };
    const up = ri => () => { const r = S.current.ropes[ri], g = r.drag; if (!g) return; r.drag = null; setGrab(-1); if (g.moved < 6 && p.onWork) p.onWork(); };
    const ink = '#141414', green = 'var(--yj-accent, #b6f23a)';
    const sans = "'Schibsted Grotesk', sans-serif", cond = sans, display = "'Libre Caslon Display', Georgia, serif";
    const corner = {fontFamily:sans, fontSize:15, lineHeight:1.5, letterSpacing:'.005em', color:'#55514b', maxWidth:420, margin:0};
    const link = (label, props) => h(props.href ? 'a' : 'button', {...props, style:{all:'unset', cursor:'pointer', color:ink, textDecoration:'underline', textUnderlineOffset:4, textDecorationThickness:1, marginRight:18, whiteSpace:'nowrap'}}, label);
    const print = Array(14).fill('YASHVI JAIN ✳ ').join('');
    const idCard = ri => h('div', {key:ri, ref:cards[ri], className:'yj-card', role:'button', tabIndex:0, 'data-cursor':'Drag', 'aria-label':'Yashvi Jain ID card. Drag it, or click to see selected work',
        onPointerDown:down(ri), onPointerMove:move(ri), onPointerUp:up(ri), onPointerCancel:up(ri), onKeyDown:e => { if ((e.key === 'Enter' || e.key === ' ') && p.onWork) { e.preventDefault(); p.onWork(); } },
        style:{position:'absolute', left:0, top:0, width:'clamp(150px, min(46vw, 34svh), 280px)', paddingTop:CLIP, transformOrigin:'50% 0', cursor:grab === ri ? 'grabbing' : 'grab', userSelect:'none', willChange:'transform', touchAction:'none'}},
      // metal split ring + lobster clasp from the strap end down into the card's slot
      h('svg', {width:40, height:CLIP + 16, viewBox:`0 0 40 ${CLIP + 16}`, style:{position:'absolute', left:'50%', top:-14, marginLeft:-20, zIndex:2, overflow:'visible'}},
        h('defs', null, h('linearGradient', {id:'yjMetal' + ri, x1:0, x2:1}, h('stop', {offset:0, stopColor:'#8d8d8d'}), h('stop', {offset:.5, stopColor:'#f5f5f5'}), h('stop', {offset:1, stopColor:'#7d7d7d'}))),
        h('circle', {cx:20, cy:18, r:15, fill:'none', stroke:`url(#yjMetal${ri})`, strokeWidth:3.2}),
        h('path', {d:'M20 33 L20 40', stroke:`url(#yjMetal${ri})`, strokeWidth:4, strokeLinecap:'round'}),
        h('path', {d:'M20 40 C11 44 11 60 17 66 L20 70 L23 66 C29 60 29 44 20 40 Z', fill:'none', stroke:`url(#yjMetal${ri})`, strokeWidth:3}),
        h('path', {d:`M20 70 L20 ${CLIP + 22}`, stroke:`url(#yjMetal${ri})`, strokeWidth:2.6, strokeLinecap:'round'})),
      h('div', {style:{position:'relative', aspectRatio:'0.68', borderRadius:14, background:green, color:'#0a0a0a',
          boxShadow:'0 30px 50px -24px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.5)', padding:'clamp(14px, 4.5vw, 24px)', paddingTop:40, display:'flex', flexDirection:'column'}},
        h('span', {style:{position:'absolute', left:'50%', top:14, width:48, height:9, marginLeft:-24, borderRadius:6, background:'#0a0a0a'}}),
        h('span', {'aria-hidden':true, style:{position:'absolute', inset:0, borderRadius:14, pointerEvents:'none', background:'linear-gradient(125deg, rgba(255,255,255,.28) 0%, rgba(255,255,255,0) 32%, rgba(255,255,255,0) 62%, rgba(255,255,255,.14) 100%)'}}),
        h('div', {style:{fontFamily:display, fontWeight:400, fontSize:'clamp(36px, 11vw, 60px)', lineHeight:.88, letterSpacing:'-0.03em'}}, 'Yashvi', h('br'), 'Jain'),
        h('div', {style:{marginTop:10, fontFamily:cond, fontWeight:600, fontSize:'clamp(12px, 3.6vw, 16px)', lineHeight:1.15, letterSpacing:'.02em', textTransform:'uppercase'}}, 'Product & service', h('br'), 'designer'),
        h('div', {style:{flex:1, display:'flex', flexDirection:'column', justifyContent:'flex-start', gap:6, padding:'10px 0'}},
          h('div', {style:{fontFamily:cond, fontWeight:500, fontSize:10, letterSpacing:'.16em', textTransform:'uppercase', opacity:.7}}, 'Domains'),
          h('div', {ref:tagBox, style:{position:'relative', flex:1, minHeight:'clamp(92px, 27vw, 118px)', clipPath:'inset(0 -24px 0 -24px)'}},
            TAGS.map((t, i) => h('span', {key:t, ref:e => { tagEls.current[i] = e; }, style:{position:'absolute', left:0, top:0, opacity:0, willChange:'transform', fontFamily:cond, fontWeight:600, fontSize:'clamp(9px, 2.4vw, 11px)', letterSpacing:'.04em', textTransform:'uppercase', lineHeight:1, padding:'6px 9px', borderRadius:999, whiteSpace:'nowrap',
                ...(i % 3 === 0 ? {background:'#0a0a0a', color:green, border:'1.5px solid #0a0a0a'} : {background:'#ffffff', color:'#0a0a0a', border:'1.5px solid #0a0a0a'}), boxShadow:'0 3px 0 rgba(0,0,0,.85)'}}, t)))),
        h('div', {style:{display:'flex', justifyContent:'flex-end', alignItems:'flex-end', gap:8}},
          h('div', {style:{fontFamily:cond, fontWeight:500, fontSize:11, letterSpacing:'.12em', textAlign:'right', lineHeight:1.4}}, 'PORTFOLIO', h('br'), 'ID 2026 · YJ'))));
    return h('section', {ref:wrap, 'aria-label':'Introduction',
        style:{position:'relative', height:'100svh', minHeight:620, background:'#f4f1ea', color:ink, overflow:'hidden'}},
      h('style', null, '@media (max-width:640px) and (max-height:640px){.yj-land-top p{display:none}}@media (max-width:640px){.yj-land-r{display:none}.yj-land-top{top:auto!important;bottom:calc(17vw + 24px);right:88px!important}}'),
      h('h1', {style:{position:'absolute', width:1, height:1, overflow:'hidden', clip:'rect(0 0 0 0)', margin:0}}, 'Yashvi Jain, product and service designer in London'),
      h('div', {className:'yj-land-top', style:{position:'absolute', top:'clamp(120px, 17vh, 160px)', left:'clamp(20px, 5vw, 72px)', right:'clamp(20px, 5vw, 72px)', display:'flex', justifyContent:'space-between', gap:24, zIndex:1}},
        h('div', {style:corner},
          h('p', {style:{margin:0, fontSize:'clamp(22px, 2vw, 30px)', lineHeight:1.15, letterSpacing:'-0.015em', color:ink, fontWeight:500}}, 'Product & service designer'),
          h('p', {style:{margin:'8px 0 0'}}, 'Research, strategy & design for health, pharma and social change.'),
          h('div', {style:{marginTop:10}}, link('[Selected work ↓]', {onClick:p.onWork}), link('[Download CV ↓]', {href:p.cv, target:'_blank', rel:'noopener'}))),
        h('p', {className:'yj-land-r', style:{...corner, textAlign:'right', color:'#55514b'}}, 'London, UK')),
      h('div', {ref:nameRef, 'aria-hidden':true, style:{position:'absolute', left:0, right:0, bottom:'-0.1em', textAlign:'center', whiteSpace:'nowrap', fontFamily:cond,
          fontFamily:display, fontWeight:400, fontSize:'clamp(58px, 17.5vw, 360px)', lineHeight:1, letterSpacing:'-0.035em', pointerEvents:'none', willChange:'transform'}},
        h('span', {ref:wordA, style:{display:'inline-block'}}, 'Yashvi'), ' ', h('span', {ref:wordB, style:{display:'inline-block'}}, 'Jain')),
      h('svg', {'aria-hidden':true, style:{position:'absolute', inset:0, width:'100%', height:'100%', overflow:'visible', pointerEvents:'none', filter:'drop-shadow(4px 10px 10px rgba(0,0,0,.18))'}},
        h('defs', null, h('path', {id:'yjStrapPath0', ref:prints[0]})),
        [0].map(ri => h('g', {key:ri},
          // plain woven strap: dark band with a faint edge highlight
          h('path', {ref:straps[ri], fill:'none', stroke:'#2b2b2b', strokeWidth:22, strokeLinecap:'butt', strokeLinejoin:'round'}),
          h('use', {href:'#yjStrapPath' + ri, fill:'none', stroke:'#3d3d3d', strokeWidth:14, strokeLinecap:'butt', strokeLinejoin:'round'})))),
      idCard(0));
  };

  static BentoHero = function BentoHero(p) {
    // Home hero: a bento grid built on three things Yashvi loves, tulips,
    // coffee and the sea. The name appears once, in the main tile.
    const h = React.createElement;
    const ink = '#141414', grey = '#55514b';
    const disp = "'Libre Caslon Display', Georgia, serif", sans = "'Schibsted Grotesk', sans-serif";
    const tile = (extra) => ({position:'relative', borderRadius:22, overflow:'hidden', ...extra});
    const cap = (k, v, color) => h('div', {style:{position:'absolute', left:20, right:20, bottom:18, color, fontFamily:sans}},
      h('div', {style:{fontSize:12, fontWeight:600, letterSpacing:'.14em', textTransform:'uppercase', opacity:.75}}, k),
      h('div', {style:{marginTop:4, fontFamily:disp, fontSize:'clamp(20px, 1.7vw, 26px)', lineHeight:1.1, letterSpacing:'-0.01em'}}, v));
    const btn = (label, props, solid) => h(props.href ? 'a' : 'button', {...props, style:{all:'unset', cursor:'pointer', display:'inline-flex', alignItems:'center', gap:8, padding:'13px 22px', borderRadius:999, fontFamily:sans, fontSize:16, fontWeight:500,
      ...(solid ? {background:ink, color:'#f4f1ea'} : {border:'1.5px solid ' + ink, color:ink})}}, label);

    // Sea: three layered waves drifting at different speeds
    const wave = (d, fill, dur, delay, op) => h('path', {d, fill, opacity:op, className:'yj-wave', style:{animationDuration:dur + 's', animationDelay:delay + 's'}});
    const W1 = 'M0 60 C 150 20 300 100 450 60 S 750 20 900 60 S 1200 100 1350 60 S 1650 20 1800 60 V 200 H 0 Z';
    const sea = h('div', {className:'yj-bt yj-bt-sea', style:tile({background:'linear-gradient(180deg,#d6ecf3 0%,#a9d3e3 45%,#5e9fbe 100%)'})},
      h('span', {'aria-hidden':true, className:'yj-sun', style:{position:'absolute', right:'14%', top:'16%', width:'18%', aspectRatio:'1', borderRadius:'50%', background:'radial-gradient(circle,#fff7e0 0 45%,rgba(255,247,224,0) 70%)'}}),
      h('svg', {'aria-hidden':true, viewBox:'0 0 900 200', preserveAspectRatio:'none', style:{position:'absolute', left:0, bottom:0, width:'200%', height:'62%'}},
        wave(W1, '#7fb7cf', 14, 0, .7), wave(W1.replace(/60/g, '85'), '#4f8fb0', 10, -3, .85), wave(W1.replace(/60/g, '115'), '#2f6f95', 7, -1, 1)),
      cap('The sea', 'Calm on top, deep research underneath.', '#ffffff'));

    // Tulips: three stems that sway, each at its own pace
    const tulip = (x, hgt, col, dur, rot) => h('g', {className:'yj-tulip', style:{transformOrigin:`${x}px 300px`, animationDuration:dur + 's', '--r':rot + 'deg'}},
      h('path', {d:`M${x} 300 C ${x - 4} ${300 - hgt * .5} ${x + 4} ${300 - hgt * .8} ${x} ${300 - hgt}`, stroke:'#3f7a4a', strokeWidth:5, fill:'none', strokeLinecap:'round'}),
      h('path', {d:`M${x} ${300 - hgt * .35} C ${x - 34} ${300 - hgt * .5} ${x - 36} ${300 - hgt * .75} ${x - 8} ${300 - hgt * .8} C ${x - 14} ${300 - hgt * .6} ${x - 6} ${300 - hgt * .45} ${x} ${300 - hgt * .35}`, fill:'#5b9a64'}),
      h('path', {d:`M${x - 22} ${300 - hgt - 6} C ${x - 24} ${300 - hgt - 40} ${x - 12} ${300 - hgt - 52} ${x - 6} ${300 - hgt - 44} L ${x} ${300 - hgt - 58} L ${x + 6} ${300 - hgt - 44} C ${x + 12} ${300 - hgt - 52} ${x + 24} ${300 - hgt - 40} ${x + 22} ${300 - hgt - 6} C ${x + 14} ${300 - hgt + 8} ${x - 14} ${300 - hgt + 8} ${x - 22} ${300 - hgt - 6} Z`, fill:col}));
    const tulips = h('div', {className:'yj-bt yj-bt-tulip', style:tile({background:'#f7dbe0'})},
      h('svg', {'aria-hidden':true, viewBox:'0 0 260 300', style:{position:'absolute', right:'-4%', top:'4%', height:'70%'}},
        tulip(80, 150, '#e0566f', 4.2, 4), tulip(135, 190, '#f08aa0', 5.1, -3), tulip(188, 135, '#d63f5c', 4.6, 5)),
      cap('Tulips', 'Ideas need a season to bloom.', '#5a1f2c'));

    // Coffee: a cup with rising steam; the tile is the contact prompt
    const steam = (x, delay) => h('path', {className:'yj-steam', d:`M${x} 120 C ${x - 14} 100 ${x + 14} 86 ${x} 64 C ${x - 12} 46 ${x + 10} 34 ${x} 18`, stroke:'#8a6a52', strokeWidth:5, fill:'none', strokeLinecap:'round', style:{animationDelay:delay + 's'}});
    const coffee = h('div', {className:'yj-bt yj-bt-coffee', style:{borderRadius:22}}, h('button', {onClick:p.onContact, 'aria-label':'Contact: let’s talk over coffee', style:{all:'unset', boxSizing:'border-box', display:'block', width:'100%', height:'100%', minHeight:180, position:'relative', borderRadius:22, overflow:'hidden', cursor:'pointer', background:'#ead9c4'}},
      h('svg', {'aria-hidden':true, viewBox:'0 0 260 300', style:{position:'absolute', left:'50%', top:'6%', height:'68%', transform:'translateX(-50%)'}},
        steam(110, 0), steam(140, .9), steam(170, 1.7),
        h('ellipse', {cx:140, cy:262, rx:96, ry:16, fill:'#d8c2a6'}),
        h('path', {d:'M66 140 H214 L202 236 C 199 252 186 262 170 262 H110 C 94 262 81 252 78 236 Z', fill:'#fffaf2'}),
        h('path', {d:'M214 160 C 252 160 252 214 206 214', stroke:'#fffaf2', strokeWidth:14, fill:'none'}),
        h('ellipse', {cx:140, cy:142, rx:74, ry:12, fill:'#6b4a35'}),
        h('path', {d:'M128 140 C 132 132 148 132 152 140 C 148 146 132 146 128 140 Z', fill:'#e8d3b8'})),
      cap('Coffee', 'Let’s talk over coffee →', '#3b2618')));

    const main = h('div', {className:'yj-bt yj-bt-main', style:tile({background:'#fffdf8', padding:'clamp(24px, 3.2vw, 48px)', display:'flex', flexDirection:'column', justifyContent:'space-between', gap:28, border:'1px solid #e6e1d6'})},
      h('div', {style:{fontFamily:sans, fontSize:13, fontWeight:500, letterSpacing:'.14em', textTransform:'uppercase', color:grey, display:'flex', alignItems:'center', gap:10}},
        h('span', {style:{width:8, height:8, borderRadius:'50%', background:'var(--yj-accent, #b6f23a)', boxShadow:'0 0 0 4px rgba(182,242,58,.25)'}}), 'London · open to roles'),
      h('div', null,
        h('h1', {style:{margin:0, fontFamily:disp, fontWeight:400, color:ink}}, 'Yashvi Jain'),
        h('p', {style:{margin:'18px 0 0', fontFamily:sans, fontSize:'clamp(18px, 1.5vw, 22px)', lineHeight:1.4, color:ink, maxWidth:'30ch'}},
          'Product & service designer for health, pharma and social change.'),
        h('p', {style:{margin:'10px 0 0', fontFamily:sans, fontSize:16, lineHeight:1.5, color:grey, maxWidth:'44ch'}},
          'Four years at TCS on J&J and Pfizer, and an MA in Design Management from UAL.')),
      h('div', {style:{display:'flex', gap:12, flexWrap:'wrap'}},
        btn('Selected work ↓', {onClick:p.onWork}, true),
        btn('Download CV', {href:p.cv, target:'_blank', rel:'noopener'}, false)));

    return h('section', {'aria-label':'Introduction', className:'yj-bento',
        style:{boxSizing:'border-box', minHeight:'100svh', padding:'clamp(96px, 13vh, 120px) clamp(16px, 4vw, 56px) clamp(24px, 4vh, 48px)', background:'#f4f1ea', display:'grid',
          gridTemplateColumns:'repeat(12, 1fr)', gridTemplateRows:'1fr 1fr', gap:'clamp(10px, 1.2vw, 16px)'}},
      h('style', null, `
        .yj-bento .yj-bt-main{grid-column:1 / span 6;grid-row:1 / span 2}
        .yj-bento .yj-bt-sea{grid-column:7 / span 6;grid-row:1}
        .yj-bento .yj-bt-tulip{grid-column:7 / span 3;grid-row:2}
        .yj-bento .yj-bt-coffee{grid-column:10 / span 3;grid-row:2}
        .yj-bento .yj-bt{transition:transform 500ms cubic-bezier(.2,.7,.2,1), box-shadow 500ms}
        .yj-bento .yj-bt:not(.yj-bt-main):hover{transform:translateY(-4px) rotate(-.4deg);box-shadow:0 24px 40px -24px rgba(0,0,0,.35)}
        .yj-wave{animation:yjWave linear infinite}
        @keyframes yjWave{to{transform:translateX(-50%)}}
        .yj-tulip{animation:yjSway ease-in-out infinite alternate}
        @keyframes yjSway{from{transform:rotate(calc(var(--r) * -1))}to{transform:rotate(var(--r))}}
        .yj-bt-tulip:hover .yj-tulip{animation-duration:1.4s !important}
        .yj-steam{stroke-dasharray:140;animation:yjSteam 2.8s ease-in-out infinite;opacity:0}
        @keyframes yjSteam{0%{stroke-dashoffset:140;opacity:0;transform:translateY(10px)}40%{opacity:.8}100%{stroke-dashoffset:0;opacity:0;transform:translateY(-14px)}}
        .yj-sun{animation:yjSun 6s ease-in-out infinite alternate}
        @keyframes yjSun{to{transform:translateY(8px) scale(1.05)}}
        @media (max-width:820px){
          .yj-bento{grid-template-columns:1fr 1fr !important;grid-template-rows:auto 200px 200px !important;min-height:auto !important}
          .yj-bento .yj-bt-main{grid-column:1 / span 2;grid-row:1}
          .yj-bento .yj-bt-sea{grid-column:1 / span 2;grid-row:2}
          .yj-bento .yj-bt-tulip{grid-column:1;grid-row:3}
          .yj-bento .yj-bt-coffee{grid-column:2;grid-row:3}
          .yj-bento .yj-bt-tulip svg{height:50% !important}
        }
        @media (prefers-reduced-motion:reduce){.yj-wave,.yj-tulip,.yj-steam,.yj-sun{animation:none !important}.yj-steam{opacity:.5}}
      `),
      main, sea, tulips, coffee);
  };

  static BrandHero = function BrandHero(p) {
    // Home hero as a brand-board bento: plum frame, dusty blue, cream,
    // terracotta and mauve tiles. The wordmark is the only place the name appears.
    const h = React.createElement;
    // bright board: light grey frame, white and lime-gradient tiles, one black tile
    const C = {frame:'#efefec', blue:'linear-gradient(135deg,#f8fde3 0%,#d8f468 100%)', cream:'#ffffff', ink:'#111111', terra:'#0b0b0b', soft:'#5a5a5a', lime:'#d4f25c'};
    const disp = "'Libre Caslon Display', Georgia, serif", sans = "'Schibsted Grotesk', sans-serif";
    const T = (cls, style, ...kids) => h('div', {className:'yj-br ' + cls, style:{position:'relative', overflow:'hidden', borderRadius:6, ...style}}, ...kids);
    const chip = (label, props, dark) => h(props.href ? 'a' : 'button', {...props, style:{all:'unset', cursor:'pointer', display:'inline-flex', alignItems:'center', gap:6, padding:'7px 12px', borderRadius:4,
      fontFamily:sans, fontSize:13, fontWeight:500, background:dark ? C.ink : '#ffffff', color:dark ? C.cream : C.ink, boxShadow:'0 1px 0 rgba(0,0,0,.08)'}}, label);

    const wordmark = T('yj-br-a', {background:C.blue, display:'flex', alignItems:'center', justifyContent:'center'},
      h('span', {style:{fontFamily:sans, fontWeight:900, fontSize:'clamp(64px, 8.4vw, 150px)', letterSpacing:'-0.06em', lineHeight:.8, color:C.ink}}, 'yashvi'));

    // Achievement tile: a 3D chrome-and-copper tulip trophy (three.js, loaded
    // on demand). Without WebGL the big "70%" shows in its place.
    const cv = React.useRef(null), [is3d, set3d] = React.useState(false);
    React.useEffect(() => {
      let off = null, dead = false;
      const probe = document.createElement('canvas');
      if (!(probe.getContext('webgl2') || probe.getContext('webgl'))) return;
      import('../three/trophy.js').then(m => {
        if (dead || !cv.current) return;
        try { off = m.mountTrophy(cv.current, {onReady:() => !dead && set3d(true)}); } catch (e) { console.warn('3D tile unavailable', e); }
      }).catch(() => {});
      return () => { dead = true; off && off(); };
    }, []);
    const achieve = T('yj-br-b', {background:C.cream, display:'flex', flexDirection:'column', alignItems:'center', padding:'18px 22px 22px', color:C.ink},
      h('div', {style:{alignSelf:'stretch', display:'flex', alignItems:'center', justifyContent:'space-between', fontFamily:disp, fontSize:20}},
        h('span', {'aria-hidden':true, style:{fontFamily:sans, fontSize:20}}, '←'), 'Achievement', h('span', {style:{width:20}})),
      h('div', {style:{flex:1, alignSelf:'stretch', position:'relative', minHeight:0}},
        h('canvas', {ref:cv, 'aria-hidden':true, style:{position:'absolute', inset:0, width:'100%', height:'100%', display:'block', opacity:is3d ? 1 : 0, transition:'opacity .8s ease'}}),
        is3d ? null : h('div', {style:{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:disp, fontSize:'clamp(64px, 6.4vw, 112px)', letterSpacing:'-0.03em'}}, '70%')),
      h('div', {style:{fontFamily:disp, fontSize:'clamp(13px, 1.2vw, 18px)', border:'1.5px solid ' + C.ink, borderRadius:4, padding:'4px 10px', whiteSpace:'nowrap', margin:'4px 0 12px', textAlign:'center'}}, '70% fewer errors · J&J'),
      chip('AVA & Dosing Error →', {onClick:p.onWork}, false));

    const card = T('yj-br-c', {background:C.cream, display:'flex', alignItems:'center', justifyContent:'center', padding:'clamp(16px, 2.4vw, 40px)'},
      h('div', {className:'yj-br-card', style:{width:'100%', maxWidth:340, background:C.blue, borderRadius:'18px 46px 18px 18px', padding:14, boxShadow:'0 30px 50px -30px rgba(0,0,0,.3)', display:'flex', flexDirection:'column', gap:14}},
        h('div', {style:{aspectRatio:'4/3.4', borderRadius:'10px 36px 10px 10px', overflow:'hidden', background:'#ddd'}},
          h('img', {src:__R('assets/web/assets/yashvi.webp'), alt:'Portrait of Yashvi Jain', style:{width:'100%', height:'100%', objectFit:'cover', objectPosition:'50% 28%', display:'block'}})),
        h('div', {style:{fontFamily:disp, fontSize:'clamp(28px, 2.6vw, 42px)', lineHeight:1, letterSpacing:'-0.02em', color:C.ink, padding:'0 4px'}}, 'Product &', h('br'), 'service designer'),
        h('div', {style:{display:'flex', alignItems:'flex-end', justifyContent:'space-between', padding:'0 4px 2px', color:C.ink}},
          h('span', {style:{fontFamily:sans, fontSize:30, fontWeight:500, lineHeight:1}}, '4', h('span', {style:{fontSize:12, marginLeft:4}}, 'yrs at TCS')),
          chip('Download CV →', {href:p.cv, target:'_blank', rel:'noopener'}, false))));

    // Recommendations rotate every 5s in the same glass card (paused while
    // hovered or focused, and under reduced motion). Tap to see the next one.
    const RECS = [
      {img:__R('assets/web/assets/recs/siddhartha.webp'), who:'Siddhartha Gigoo · Head of TCS Interactive', q:'An exceptional designer. Continues to make us proud.'},
      {img:__R('assets/recs/arpit.jpeg'), who:'Arpit Vyas · Product Experience Strategist', q:'A thoughtful design mindset… she took full ownership and delivered.'},
      {img:__R('assets/recs/geet.jpeg'), who:'Geetanjali Chuttani · Associate Design Director, UX', q:'Her communication skills are outstanding.'}];
    const [ri, setRi] = React.useState(0), hold = React.useRef(false);
    React.useEffect(() => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const t = setInterval(() => { if (!hold.current && !document.hidden) setRi(i => (i + 1) % RECS.length); }, 5000);
      return () => clearInterval(t);
    }, []);
    const r = RECS[ri];
    const note = T('yj-br-d', {background:'linear-gradient(180deg,#d9eef9 0%,#f7faf0 100%)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:12, padding:18},
      h('button', {key:ri, className:'yj-br-note', 'aria-live':'polite', 'aria-label':'Recommendation ' + (ri + 1) + ' of ' + RECS.length + '. Show next', onClick:() => setRi((ri + 1) % RECS.length),
          onMouseEnter:() => { hold.current = true; }, onMouseLeave:() => { hold.current = false; }, onFocus:() => { hold.current = true; }, onBlur:() => { hold.current = false; },
          style:{all:'unset', cursor:'pointer', boxSizing:'border-box', width:'100%', maxWidth:380, display:'flex', gap:14, alignItems:'center', padding:12, borderRadius:16, background:'rgba(255,255,255,.7)', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', border:'1px solid rgba(255,255,255,.9)', boxShadow:'0 20px 40px -28px rgba(0,0,0,.35)', position:'relative', color:C.ink}},
        h('img', {src:r.img, alt:'', style:{width:56, height:56, borderRadius:10, objectFit:'cover', flex:'none'}}),
        h('span', {style:{display:'block', minWidth:0}},
          h('span', {style:{display:'block', fontFamily:sans, fontSize:11, opacity:.8}}, r.who),
          h('span', {style:{display:'block', fontFamily:sans, fontSize:'clamp(15px, 1.25vw, 18px)', lineHeight:1.25, marginTop:3}}, '“' + r.q + '”')),
        h('span', {style:{position:'absolute', top:-8, right:-8, minWidth:22, height:22, padding:'0 6px', boxSizing:'border-box', borderRadius:999, background:C.lime, color:C.ink, fontFamily:sans, fontSize:11, fontWeight:600, display:'flex', alignItems:'center', justifyContent:'center'}}, (ri + 1) + '/' + RECS.length)),
      h('div', {'aria-hidden':true, style:{display:'flex', gap:6}}, RECS.map((_, i) => h('span', {key:i, style:{width:i === ri ? 18 : 6, height:6, borderRadius:999, background:i === ri ? C.ink : 'rgba(17,17,17,.2)', transition:'width 300ms cubic-bezier(.2,.7,.2,1)'}}))));

    const chat = T('yj-br-e', {background:C.terra, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16, padding:20, color:C.cream},
      h('div', {'aria-hidden':true, style:{position:'absolute', inset:'-10%', backgroundImage:`url(${__R('assets/web/assets/about/bakery.webp')})`, backgroundSize:'cover', backgroundPosition:'50% 50%', filter:'blur(18px) saturate(.8)', opacity:.22}}),
      h('span', {'aria-hidden':true, style:{position:'relative', width:44, height:44, borderRadius:'50%', background:C.lime, display:'flex', alignItems:'center', justifyContent:'center'}},
        h('span', {style:{width:14, height:14, borderRadius:'50%', background:C.cream, boxShadow:'0 0 0 4px #d4f25c, 0 0 0 6px ' + C.cream}})),
      h('div', {style:{position:'relative', fontFamily:sans, fontSize:13, opacity:.85}}, 'What’s next?'),
      h('button', {onClick:p.onContact, 'aria-label':'Contact Yashvi', style:{all:'unset', cursor:'pointer', position:'relative', display:'flex', alignItems:'center', gap:14, padding:'12px 12px 12px 18px', borderRadius:10, background:'rgba(255,255,255,.14)', border:'1px solid rgba(255,255,255,.3)', backdropFilter:'blur(8px)', fontFamily:disp, fontSize:'clamp(16px, 1.3vw, 20px)'}},
        'Let’s talk over coffee', h('span', {style:{width:30, height:30, borderRadius:6, background:'#ffffff', color:C.ink, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:sans, fontSize:16}}, '↑')));

    const mini = (title, line, bg) => h('div', {className:'yj-br-mini', style:{minWidth:0, borderRadius:14, background:bg, padding:'clamp(12px, 1.2vw, 18px)', boxSizing:'border-box', display:'flex', flexDirection:'column', justifyContent:'space-between', gap:10, color:C.ink, boxShadow:'0 20px 30px -26px rgba(0,0,0,.4)'}},
      h('div', {style:{fontFamily:disp, fontSize:'clamp(20px, 1.9vw, 30px)', lineHeight:1, letterSpacing:'-0.01em'}}, title),
      h('div', {style:{display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:8}},
        h('div', {style:{fontFamily:sans, fontSize:'clamp(11px, .9vw, 13px)', lineHeight:1.3}}, line),
        h('span', {'aria-hidden':true, style:{flex:'none', width:28, height:28, borderRadius:'50%', background:'rgba(255,255,255,.7)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:sans, fontSize:16}}, '+')));
    const motifs = T('yj-br-f', {background:C.cream, display:'grid', gridTemplateColumns:'repeat(3, minmax(0, 1fr))', gap:'clamp(8px, .9vw, 14px)', padding:'clamp(10px, 1.4vw, 22px)'},
      mini('The Tulips', 'Ideas need a season to bloom.', 'linear-gradient(180deg,#ffe6ee 0%,#ff9fbd 100%)'),
      mini('The Sea', 'Calm on top, deep research underneath.', 'linear-gradient(180deg,#e6f5ff 0%,#7cc6f2 100%)'),
      mini('The Coffee', 'Every brief starts with a conversation.', 'linear-gradient(180deg,#fff6cc 0%,#f6c445 100%)'));

    // Haptics: a short buzz on every tap of a button or link (Android and
    // other browsers that support navigator.vibrate; others just ignore it).
    React.useEffect(() => {
      if (!('vibrate' in navigator)) return;
      const tap = e => { if (e.pointerType !== 'mouse' && e.target.closest && e.target.closest('button, a, [role="button"]')) { try { navigator.vibrate(10); } catch (_) {} } };
      document.addEventListener('pointerdown', tap, {passive:true});
      return () => document.removeEventListener('pointerdown', tap);
    }, []);

    return h('section', {'aria-label':'Introduction', className:'yj-brand',
        style:{boxSizing:'border-box', height:'100svh', minHeight:640, padding:'112px 10px 10px', background:C.frame, display:'grid',
          gridTemplateColumns:'1fr 1fr 1.25fr', gridTemplateRows:'1fr 1fr 0.62fr', gap:10}},
      h('h1', {style:{position:'absolute', width:1, height:1, overflow:'hidden', clip:'rect(0 0 0 0)', margin:0}}, 'Yashvi Jain, product and service designer in London'),
      h('style', null, `
        .yj-brand .yj-br-a{grid-column:1;grid-row:1}
        .yj-brand .yj-br-b{grid-column:1;grid-row:2 / span 2}
        .yj-brand .yj-br-c{grid-column:2;grid-row:1 / span 2}
        .yj-brand .yj-br-d{grid-column:2;grid-row:3}
        .yj-brand .yj-br-e{grid-column:3;grid-row:1}
        .yj-brand .yj-br-f{grid-column:3;grid-row:2 / span 2}
        .yj-br-card{transition:transform 600ms cubic-bezier(.2,.7,.2,1)}
        .yj-br-c:hover .yj-br-card{transform:translateY(-6px) rotate(-1deg)}
        .yj-brand button,.yj-brand a{transition:transform 160ms cubic-bezier(.3,1.6,.4,1)}
        .yj-brand button:active,.yj-brand a:active{transform:scale(.95)}
        .yj-br-mini{transition:transform 300ms cubic-bezier(.2,.7,.2,1)}
        .yj-br-mini:hover{transform:translateY(-4px)}
        .yj-br-note{animation:yjBrNote 600ms cubic-bezier(.2,1.3,.4,1) both}
        @keyframes yjBrNote{from{transform:translateY(14px);opacity:0}}
        @media (max-width:820px){
          .yj-brand{height:auto !important;padding-top:72px !important;grid-template-columns:1fr 1fr !important;grid-template-rows:170px auto 360px 150px 230px !important}
          .yj-brand .yj-br-a{grid-column:1 / span 2;grid-row:1}
          .yj-brand .yj-br-c{grid-column:1 / span 2;grid-row:2}
          .yj-brand .yj-br-b{grid-column:1;grid-row:3}
          .yj-brand .yj-br-e{grid-column:2;grid-row:3}
          .yj-brand .yj-br-d{grid-column:1 / span 2;grid-row:4}
          .yj-brand .yj-br-f{grid-column:1 / span 2;grid-row:5}
          .yj-brand .yj-br-b > div:nth-child(2) > div:first-child{font-size:56px !important}
        }
        @media (prefers-reduced-motion:reduce){.yj-br-note{animation:none !important}}
      `),
      wordmark, achieve, card, note, chat, motifs);
  };

    // Stickers: black line drawings on white die-cut stickers. Draggable.
  static YjSticker = function YjSticker({kind, className, rot}) {
    const h = React.createElement, YEL = '#ffd60a', INK = '#111111', PAPER = '#ffffff';
      const ref = React.useRef(null), st = React.useRef({x:0, y:0, sx:0, sy:0, on:false});
      const down = e => { const s0 = st.current; s0.on = true; s0.x0 = s0.x; s0.y0 = s0.y; s0.sx = e.clientX - s0.x; s0.sy = e.clientY - s0.y; e.currentTarget.setPointerCapture(e.pointerId); ref.current.classList.add('yj-st-drag'); try { navigator.vibrate && navigator.vibrate(8); } catch (_) {} };
      const move = e => { const s0 = st.current; if (!s0.on) return; s0.x = e.clientX - s0.sx; s0.y = e.clientY - s0.sy; ref.current.style.translate = s0.x + 'px ' + s0.y + 'px'; };
      const moved = React.useRef(0), [full, setFull] = React.useState(false);
      const up = e => { const s0 = st.current; if (s0.on && kind === 'coffee' && Math.hypot(e.clientX - s0.sx - s0.x0, e.clientY - s0.sy - s0.y0) < 4) { setFull(f => !f); try { navigator.vibrate && navigator.vibrate(12); } catch (_) {} } s0.on = false; ref.current && ref.current.classList.remove('yj-st-drag'); };
      const ink = {stroke:INK, strokeWidth:4, fill:'none', strokeLinecap:'round', strokeLinejoin:'round'};
      const art = kind === 'tulips'
        ? h('svg', {viewBox:'0 0 140 160'},
            h('path', {d:'M70 152 V78 M70 152 C 62 122 50 104 36 90 M70 152 C 80 124 92 106 106 94', ...ink}),
            h('path', {d:'M70 140 C 52 130 44 116 46 100 C 60 108 67 122 70 140 Z M72 136 C 90 128 98 116 98 102 C 84 108 76 120 72 136 Z', ...ink, fill:PAPER}),
            h('path', {className:'yj-tl yj-tl2', d:'M54 52 C 54 32 62 24 70 20 C 78 24 86 32 86 52 C 86 68 79 78 70 78 C 61 78 54 68 54 52 Z M62 26 L66 46 L70 20 L74 46 L78 26', ...ink, fill:YEL}),
            h('path', {className:'yj-tl yj-tl1', d:'M20 70 C 18 54 24 46 32 42 C 42 44 48 52 48 66 C 48 80 42 88 34 88 C 26 88 21 80 20 70 Z', ...ink, fill:PAPER}),
            h('path', {className:'yj-tl yj-tl3', d:'M92 76 C 92 60 98 52 106 48 C 116 52 122 60 122 74 C 122 88 115 94 107 94 C 98 94 92 88 92 76 Z', ...ink, fill:PAPER}))
        : h('svg', {viewBox:'0 0 140 140'},
            h('g', {className:'yj-steam' + (full ? ' yj-steam-on' : '')}, h('path', {d:'M50 40 C 42 30 58 24 50 12 M70 40 C 62 30 78 24 70 12 M90 40 C 82 30 98 24 90 12', ...ink})),
            h('path', {d:'M106 64 C 130 62 130 100 104 98', ...ink, strokeWidth:5}),
            h('clipPath', {id:'yjCup'}, h('path', {d:'M28 50 H112 L104 110 C 102 118 96 122 88 122 H52 C 44 122 38 118 36 110 Z'})),
            h('path', {d:'M28 50 H112 L104 110 C 102 118 96 122 88 122 H52 C 44 122 38 118 36 110 Z', fill:PAPER}),
            h('rect', {className:'yj-cup-fill', x:20, y:54, width:100, height:70, fill:YEL, clipPath:'url(#yjCup)', style:{transform:`scaleY(${full ? 1 : .32})`}}),
            h('path', {d:'M28 50 H112 L104 110 C 102 118 96 122 88 122 H52 C 44 122 38 118 36 110 Z', ...ink}),
            h('path', {d:'M16 126 H124', ...ink, strokeWidth:5}));
      return h('span', {ref, className:'yj-st ' + className, role:'img', 'aria-label':kind === 'tulips' ? 'Tulips sticker' : 'Coffee sticker. Click for a refill', title:kind === 'coffee' ? (full ? 'Click to drink' : 'Click for a refill') : undefined,
        onPointerDown:down, onPointerMove:move, onPointerUp:up, onPointerCancel:up, style:{'--r':rot + 'deg'}}, art);
    };

  static Dock = function Dock(p) {
    // One floating navigation for every page (replaces the top bar).
    const h = React.createElement;
    return h('nav', {className:'yj-dock', 'aria-label':'Site'},
      p.items.map(it => h('button', {key:it.key, onClick:it.onClick, 'aria-current':it.on ? 'page' : undefined, className:it.on ? 'yj-dock-on' : ''}, it.label)));
  };

  // Generative music for the turntable: one original, royalty-free piece per mood, made in the
  // browser with the Web Audio API (nothing is downloaded). Starts only after a click.
  static Music = (() => {
    const N = n => 440 * Math.pow(2, (n - 69) / 12);
    const SONGS = {
      Happy:{bpm:112, wave:'triangle', swing:0, arp:[0, 4, 7, 12, 7, 4, 0, 7], chords:[[60, 64, 67], [55, 59, 62], [57, 60, 64], [53, 57, 60]], bass:[48, 43, 45, 41], lp:5200, crackle:0.012},
      Calm:{bpm:58, wave:'sine', swing:0, arp:[0, 7, 12, 16], chords:[[62, 66, 69, 73], [55, 59, 62, 66]], bass:[38, 43], lp:2400, crackle:0.01, pad:true},
      Focus:{bpm:88, wave:'sine', swing:0, arp:[0, 7, 12, 7, 3, 7, 12, 15], chords:[[57, 60, 64], [53, 57, 60], [60, 64, 67], [55, 59, 62]], bass:[45, 41, 48, 43], lp:3200, crackle:0.008},
      Nostalgic:{bpm:74, wave:'triangle', swing:0.18, arp:[0, 4, 7, 11, 7, 4], chords:[[53, 57, 60, 64], [52, 55, 59, 62], [50, 53, 57, 60], [48, 52, 55, 59]], bass:[41, 40, 38, 36], lp:1900, crackle:0.03, detune:9},
      Night:{bpm:68, wave:'sine', swing:0.22, arp:[0, 3, 7, 10, 14, 10], chords:[[50, 53, 57, 60, 64], [55, 59, 62, 65, 69], [48, 52, 55, 59, 62], [57, 61, 64, 67]], bass:[38, 43, 36, 45], lp:2200, crackle:0.02, trem:true}};
    let ctx = null, master = null, filt = null, noise = null, timer = null, song = null, step = 0, next = 0, on = false;
    const voice = (f, t, dur, vol, wave, det) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = wave; o.frequency.value = f; if (det) o.detune.value = (Math.random() - 0.5) * det;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.03, dur * 0.2));
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(filt); o.start(t); o.stop(t + dur + 0.05);
    };
    const crackle = amt => {
      const len = ctx.sampleRate * 2, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = (Math.random() < 0.0009 ? (Math.random() * 2 - 1) * 0.9 : 0) + (Math.random() * 2 - 1) * 0.02;
      const src = ctx.createBufferSource(), g = ctx.createGain(), hp = ctx.createBiquadFilter();
      hp.type = 'highpass'; hp.frequency.value = 1200; g.gain.value = amt * 6;
      src.buffer = buf; src.loop = true; src.connect(hp); hp.connect(g); g.connect(master); src.start(); return src;
    };
    const tick = () => {
      const S = song, beat = 60 / S.bpm / 2; // eighth notes
      while (next < ctx.currentTime + 0.25) {
        const bar = Math.floor(step / 8) % S.chords.length, ch = S.chords[bar], i = step % 8;
        const sw = (step % 2) ? beat * S.swing : 0, t = next + sw;
        if (i === 0) {
          ch.forEach(n => voice(N(n), t, beat * (S.pad ? 8 : 6), S.pad ? 0.05 : 0.035, S.pad ? 'sine' : 'sine', S.detune));
          voice(N(S.bass[bar]), t, beat * 4, 0.11, 'sine');
        }
        if (i === 4) voice(N(S.bass[bar] + 7), t, beat * 3, 0.06, 'sine');
        const a = S.arp[step % S.arp.length];
        if (!S.pad || i % 2 === 0) voice(N(ch[0] + 12 + a), t, beat * (S.pad ? 3 : 1.6), S.trem ? 0.045 : 0.05, S.wave, S.detune);
        next += beat; step++;
      }
    };
    return {
      moods:Object.keys(SONGS),
      playing:() => on,
      level() { const M = Component.Music; if (!on || !M._an) return 0; M._an.getFloatTimeDomainData(M._buf); let q = 0; for (let i = 0; i < M._buf.length; i++) q += M._buf[i] * M._buf[i]; return Math.sqrt(q / M._buf.length); },
      play(m) {
        const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false;
        if (!ctx) { ctx = new AC(); master = ctx.createGain(); master.gain.value = 0.7; const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 4; const boost = ctx.createGain(); boost.gain.value = 3.2; master.connect(boost); boost.connect(comp); const an = ctx.createAnalyser(); an.fftSize = 512; comp.connect(an); an.connect(ctx.destination); this._an = an; this._buf = new Float32Array(an.fftSize); filt = ctx.createBiquadFilter(); filt.type = 'lowpass'; filt.connect(master); }
        ctx.resume(); this.stop(true);
        song = SONGS[m] || SONGS.Happy; filt.frequency.value = song.lp; step = 0; next = ctx.currentTime + 0.05;
        noise = crackle(song.crackle); timer = setInterval(tick, 60); tick(); on = true; return true;
      },
      stop(keep) {
        clearInterval(timer); timer = null; if (noise) { try { noise.stop(); } catch (e) {} noise = null; }
        if (!keep && ctx) { master.gain.setTargetAtTime(0, ctx.currentTime, 0.05); setTimeout(() => { if (!on && ctx) master.gain.value = 0.7; }, 300); }
        if (keep && ctx) master.gain.value = 0.7;
        on = false;
      }};
  })();

  static Glow = function Glow(P) {
    P = P || {};
    // WebGL shader for the intro tile: slow domain-warped noise flowing from yellow through
    // cream to ultramarine, kept to the right so text sits on yellow. Static under reduced motion.
    const h = React.createElement, ref = React.useRef(null);
    React.useEffect(() => {
      const cv = ref.current; if (!cv) return;
      const gl = cv.getContext('webgl', {premultipliedAlpha:false, antialias:false}); if (!gl) { cv.style.display = 'none'; return; }
      const vs = 'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
      const v3 = a => 'vec3(' + a.map(x => x.toFixed(3)).join(',') + ')';
      const base = v3(P.base || [1, .84, .04]), mid = v3(P.mid || [.97, .95, .86]), core = v3(P.core || [.17, .23, 1]);
      const cx = (P.cx ?? 1.06).toFixed(3), cyW = (P.cy ?? .30).toFixed(3), cyN = (P.cyNarrow ?? -.02).toFixed(3), rW = (P.rad ?? .58).toFixed(3), rN = (P.radNarrow ?? .2).toFixed(3);
      const fs = `precision mediump float;uniform vec2 r;uniform float t;uniform vec2 m;uniform float e;
        float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);}
        float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p*=2.;a*=.5;}return v;}
        void main(){vec2 uv=gl_FragCoord.xy/r;vec2 p=uv*vec2(r.x/r.y,1.)*1.5;
          vec2 q=vec2(fbm(p+t*.06),fbm(p+vec2(5.2,1.3)-t*.045));
          float f=fbm(p+2.4*q+vec2(t*.03,-t*.015));
          float asp=r.x/r.y;float wide=smoothstep(1.15,1.9,asp);float rad=mix(${rN},${rW},wide)*(1.-.62*e);
          vec2 c=vec2(${cx}+(m.x-.5)*.04,mix(${cyN},${cyW},wide)+(m.y-.5)*.04+sin(t*.18)*.04);
          float d=length((uv-c)*vec2(asp*.62,1.));
          float base=1.-smoothstep(0.,rad,d+(f-.5)*.34);
          float b=smoothstep(.0,1.,base);
          vec3 Y=${base},C=${mid},B=${core};
          vec3 col=mix(Y,C,smoothstep(.05,.42,b));col=mix(col,B,smoothstep(.38,.92,b));
          gl_FragColor=vec4(col,1.);}`;
      const sh = (type, src) => { const o = gl.createShader(type); gl.shaderSource(o, src); gl.compileShader(o); return o; };
      const pr = gl.createProgram(); gl.attachShader(pr, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(pr);
      if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { cv.style.display = 'none'; return; }
      gl.useProgram(pr);
      const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(pr, 'a'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      const uR = gl.getUniformLocation(pr, 'r'), uT = gl.getUniformLocation(pr, 't'), uM = gl.getUniformLocation(pr, 'm'), uE = gl.getUniformLocation(pr, 'e');
      let ev = 0;
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      let mx = .5, my = .5, tx = .5, ty = .5, raf = 0, vis = true, t0 = performance.now();
      const size = () => { const k = Math.min(devicePixelRatio || 1, 1.5) * 0.6, w = cv.clientWidth, hh = cv.clientHeight; cv.width = Math.max(1, w * k | 0); cv.height = Math.max(1, hh * k | 0); gl.viewport(0, 0, cv.width, cv.height); };
      const draw = now => { mx += (tx - mx) * .04; my += (ty - my) * .04; gl.uniform2f(uR, cv.width, cv.height); gl.uniform1f(uT, reduce ? 12 : (now - t0) / 1000); gl.uniform2f(uM, mx, my);
        if (P.react) { const M = Component.Music, tgt = M.playing() ? Math.min(1, .5 + M.level() * 7) : 0; ev += (tgt - ev) * (tgt > ev ? .18 : .05); }
        gl.uniform1f(uE, ev); gl.drawArrays(gl.TRIANGLES, 0, 3); };
      const loop = now => { draw(now); if (!reduce && vis && !document.hidden) raf = requestAnimationFrame(loop); };
      const ro = new ResizeObserver(() => { size(); draw(performance.now()); }); ro.observe(cv);
      const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; cancelAnimationFrame(raf); if (vis && !reduce) raf = requestAnimationFrame(loop); }); io.observe(cv);
      const mv = e => { const b = cv.getBoundingClientRect(); tx = (e.clientX - b.left) / b.width; ty = 1 - (e.clientY - b.top) / b.height; };
      const vz = () => { cancelAnimationFrame(raf); if (!document.hidden && vis && !reduce) raf = requestAnimationFrame(loop); };
      addEventListener('pointermove', mv, {passive:true}); document.addEventListener('visibilitychange', vz);
      size(); raf = requestAnimationFrame(loop);
      return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); removeEventListener('pointermove', mv); document.removeEventListener('visibilitychange', vz); };
    }, []);
    return h('canvas', {ref, className:'yj-g', 'aria-hidden':true, style:{position:'absolute', inset:0, width:'100%', height:'100%', borderRadius:'inherit', zIndex:0, pointerEvents:'none', display:'block'}});
  };

  static ContactBento = function ContactBento(p) {
    // Contact in the dashboard system: one yellow focal tile, flat white tiles,
    // the actions recruiters use (copy email, LinkedIn, CV), and the agent as an option.
    const h = React.createElement;
    const YEL = '#ffd60a', INK = '#111111', GREY = '#6b6b6b', LINE = '#e3e3e0';
    const F = "'Schibsted Grotesk', sans-serif", EMAIL = 'yashvi.jain.yj@gmail.com';
    const [copied, setCopied] = React.useState(false);
    const copy = async () => { try { await navigator.clipboard.writeText(EMAIL); } catch (_) { const ta = document.createElement('textarea'); ta.value = EMAIL; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (_) {} ta.remove(); } setCopied(true); setTimeout(() => setCopied(false), 1800); };
    const london = () => new Date().toLocaleTimeString('en-GB', {timeZone:'Europe/London', hour:'2-digit', minute:'2-digit'});
    const [now, setNow] = React.useState(london());
    React.useEffect(() => { const t = setInterval(() => setNow(london()), 20000); return () => clearInterval(t); }, []);
    const label = t => h('span', {style:{fontSize:14, color:GREY}}, t);
    const row = (k, v, act) => h('div', {key:k, className:'yj-ct2-row'}, h('span', null, label(k), h('span', {style:{display:'block', fontSize:17, fontWeight:600, marginTop:2, wordBreak:'break-word'}}, v)), act);
    return h('div', {className:'yj-ct2', role:'region', 'aria-label':'Contact Yashvi Jain'},
      h('style', null, `
        .yj-ct2{box-sizing:border-box;min-height:100svh;padding:28px 28px 110px;background:#f6f6f3;font-family:${F};color:${INK};display:grid;grid-template-columns:repeat(12,minmax(0,1fr));grid-auto-rows:minmax(0,auto);gap:28px;align-content:start;
          background-image:radial-gradient(circle, #e4e3de 1px, transparent 1.2px);background-size:24px 24px}
        .yj-ct2 > div{box-sizing:border-box;background:#fff;border-radius:18px;padding:clamp(20px,2vw,32px);min-width:0;animation:yjCtRise 600ms cubic-bezier(.2,.7,.2,1) both}
        .yj-ct2 > div:nth-child(3){animation-delay:80ms}.yj-ct2 > div:nth-child(4){animation-delay:160ms}.yj-ct2 > div:nth-child(5){animation-delay:240ms}
        @keyframes yjCtRise{from{opacity:0;translate:0 18px}}
        .yj-ct2-hero{grid-column:span 7;background:${YEL} !important;display:flex;flex-direction:column;justify-content:space-between;gap:28px;min-height:420px}
        .yj-ct2-hero h1{margin:0;font-weight:600;font-size:clamp(44px,5.4vw,88px) !important;line-height:.95 !important;letter-spacing:-0.05em !important}
        .yj-ct2-ways{grid-column:span 5;display:flex;flex-direction:column}
        .yj-ct2-row{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:16px 0;border-top:1px solid ${LINE}}
        .yj-ct2-row:first-of-type{border-top:0}
        .yj-ct2-btn{all:unset;cursor:pointer;box-sizing:border-box;font-family:${F};font-size:15px;font-weight:600;padding:11px 18px;border-radius:999px;border:1.5px solid ${INK};color:${INK};white-space:nowrap;text-decoration:none;transition:background 200ms ease,color 200ms ease}
        .yj-ct2-btn:hover{background:${INK};color:#fff}
        .yj-ct2-btn.solid{background:${INK};color:#fff}.yj-ct2-btn.solid:hover{background:#333}
        .yj-ct2-btn:focus-visible{outline:2px solid ${INK};outline-offset:3px}
        .yj-ct2-info{grid-column:span 4}.yj-ct2-agent{grid-column:span 8;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}
        .yj-ct2-info dl{margin:0;display:grid;gap:14px}.yj-ct2-info dd{margin:2px 0 0;font-size:17px;font-weight:600}
        .yj-ct2-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:${INK};margin-right:8px;animation:yjCtLive 2s ease-in-out infinite}
        @keyframes yjCtLive{50%{opacity:.25}}
        @media (max-width:980px){.yj-ct2-hero,.yj-ct2-ways,.yj-ct2-info,.yj-ct2-agent{grid-column:span 12}}
        @media (max-width:640px){.yj-ct2{padding:16px 16px 110px;gap:18px}.yj-ct2-hero{min-height:300px}}
        @media (prefers-reduced-motion:reduce){.yj-ct2 > div,.yj-ct2-dot{animation:none}}
      `),
      h('div', {className:'yj-ct2-hero'},
        h('span', {style:{display:'flex', justifyContent:'space-between', fontSize:14, flexWrap:'wrap', gap:8}}, h('span', null, 'Contact'), h('span', null, h('span', {className:'yj-ct2-dot', 'aria-hidden':true}), 'Open to roles · London ' + now)),
        h('div', null,
          h('h1', null, 'Got a role, a project, or a wicked problem?'),
          h('p', {style:{margin:'18px 0 0', fontSize:'clamp(16px,1.3vw,19px)', lineHeight:1.5, maxWidth:'44ch'}}, 'Half-formed ideas welcome. A role, a project or just a coffee chat: I usually reply within a day.'))),
      h('div', {className:'yj-ct2-ways'},
        h('h2', {style:{margin:'0 0 8px', fontWeight:600, letterSpacing:'-0.03em'}}, 'Reach me'),
        row('Email', EMAIL, h('button', {className:'yj-ct2-btn solid', onClick:copy, 'aria-live':'polite'}, copied ? 'Copied ✓' : 'Copy email')),
        row('LinkedIn', 'Yashvi Jain', h('a', {className:'yj-ct2-btn', href:p.linkedin, target:'_blank', rel:'noopener'}, 'Open profile ↗')),
        row('CV', 'One page, PDF', h('a', {className:'yj-ct2-btn', href:p.cv, target:'_blank', rel:'noopener'}, 'Download ↓'))),
      h('div', {className:'yj-ct2-info'},
        h('dl', null,
          h('div', null, h('dt', null, label('Based in')), h('dd', null, 'London, UK')),
          h('div', null, h('dt', null, label('Looking for')), h('dd', null, 'Product & service design roles')),
          h('div', null, h('dt', null, label('Sectors')), h('dd', null, 'Health, pharma, public services')))),
      h('div', {className:'yj-ct2-agent'},
        h('div', {style:{maxWidth:'52ch'}}, h('h2', {style:{margin:'0 0 6px', fontWeight:600, letterSpacing:'-0.03em'}}, 'Prefer to ask questions first?'),
          h('p', {style:{margin:0, fontSize:16, lineHeight:1.5, color:'#444'}}, 'My portfolio agent can answer questions about my work and experience, any time. It passes the conversation on to me if you’d like a reply.')),
        h('button', {className:'yj-ct2-btn', onClick:p.onAgent}, 'Ask my agent →')));
  };

  static AboutBento = function AboutBento(p) {
    // About as a bento page in the home system: yellow/black/white/grey,
    // Schibsted Grotesk 600/400, flat tiles, no cards inside tiles.
    const h = React.createElement;
    const YEL = '#ffd60a', INK = '#111111', PAPER = '#ffffff', GREY = '#6b6b6b', LINE = '#e3e3e0';
    const F = "'Schibsted Grotesk', sans-serif";
    const [open, setOpen] = React.useState('tcs');
    const label = (t, x) => h('span', {style:{fontSize:14, color:GREY, ...x}}, t);
    const H = (t, x) => h('h3', {style:{margin:0, fontFamily:F, fontWeight:600, letterSpacing:'-0.03em', ...x}}, t);
    const tile = (cls, kids, x) => h('div', {className:'yj-ab-t ' + cls, style:x}, ...[].concat(kids));
    const exp = [...p.timeline].filter(t => t.id !== 'halls').sort((a, b) => b.s - a.s);
    return h('div', {className:'yj-abg', role:'region', 'aria-label':'About Yashvi Jain'},
      h('style', null, `
        .yj-abg{box-sizing:border-box;padding:28px 28px 110px;background:#f6f6f3;font-family:${F};color:${INK};display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:28px;
          background-image:radial-gradient(circle, #e4e3de 1px, transparent 1.2px);background-size:24px 24px}
        .yj-ab-t{box-sizing:border-box;background:${PAPER};border-radius:18px;padding:clamp(20px, 2vw, 32px);min-width:0;display:flex;flex-direction:column;gap:16px;animation:yjAbRise 600ms cubic-bezier(.2,.7,.2,1) both}
        @keyframes yjAbRise{from{opacity:0;translate:0 20px}}
        .yj-ab-in{grid-column:span 8;background:${YEL};justify-content:space-between;min-height:460px}
        .yj-ab-ph{grid-column:span 4;padding:0;background:#e6e6e3 center 28%/cover no-repeat;filter:grayscale(1);min-height:460px}
        .yj-ab-ex{grid-column:span 8}.yj-ab-sk{grid-column:span 4}
        .yj-ab-rc{grid-column:span 6}.yj-ab-ce{grid-column:span 3}.yj-ab-to{grid-column:span 3}
        .yj-ab-oc{grid-column:span 4;padding:0;position:relative;overflow:hidden;min-height:360px;justify-content:flex-end;color:#fff;text-decoration:none}
        .yj-ab-oc .yj-ab-img{position:absolute;inset:0;background:center/cover no-repeat;filter:grayscale(1);transition:filter 500ms ease,transform 900ms cubic-bezier(.2,.7,.2,1)}
        .yj-ab-oc:hover .yj-ab-img{filter:none;transform:scale(1.04)}
        .yj-ab-oc .yj-ab-cap{position:relative;padding:22px;background:linear-gradient(to top, rgba(0,0,0,.72), rgba(0,0,0,0));display:flex;flex-direction:column;gap:6px}
        .yj-ab-cta{grid-column:span 12;background:${INK};color:#fff;flex-direction:row;align-items:center;justify-content:space-between;flex-wrap:wrap}
        .yj-ab-row{all:unset;box-sizing:border-box;cursor:pointer;display:grid;grid-template-columns:1fr auto;gap:4px 16px;padding:14px 0;border-top:1px solid ${LINE};font-family:${F};width:100%}
        .yj-ab-row:hover .yj-ab-rt{text-decoration:underline;text-underline-offset:4px}
        .yj-ab-row:focus-visible,.yj-ab-btn:focus-visible{outline:2px solid ${INK};outline-offset:3px}
        .yj-ab-pts{grid-column:1 / -1;margin:6px 0 0;padding-left:18px;color:#333;font-size:15px;line-height:1.5}
        .yj-ab-chip{font-size:13px;padding:5px 11px;border:1px solid ${INK};border-radius:999px;white-space:nowrap}
        .yj-ab-btn{all:unset;cursor:pointer;font-family:${F};font-weight:600;font-size:15px;padding:12px 20px;border-radius:999px;background:${YEL};color:${INK}}
        .yj-ab-btn.alt{background:transparent;color:#fff;border:1px solid #fff}
        @media (max-width:1000px){.yj-ab-in,.yj-ab-ex,.yj-ab-rc,.yj-ab-cta{grid-column:span 12}.yj-ab-ph,.yj-ab-sk,.yj-ab-oc{grid-column:span 6}.yj-ab-ce,.yj-ab-to{grid-column:span 6}}
        @media (max-width:640px){.yj-abg{padding:16px 16px 110px;gap:18px}.yj-abg > *{grid-column:span 12 !important}.yj-ab-in,.yj-ab-ph{min-height:320px}}
        @media (prefers-reduced-motion:reduce){.yj-ab-t{animation:none}}
      `),
      tile('yj-ab-in', [
        h('span', {style:{display:'flex', justifyContent:'space-between', fontSize:14}}, h('span', null, 'About'), h('span', null, 'London · open to roles')),
        h('div', {style:{display:'flex', flexDirection:'column', gap:20}},
          h('h1', {style:{margin:0, fontFamily:F, fontWeight:600, fontSize:'clamp(40px, 4.6vw, 76px)', letterSpacing:'-0.05em', lineHeight:.95}}, 'Where actual intelligence', h('br'), 'meets artificial intelligence.'),
          h('p', {style:{margin:0, fontSize:'clamp(16px, 1.25vw, 19px)', lineHeight:1.5, maxWidth:'56ch'}},
            'Four years designing at TCS, and I’ve just completed an MA in Design Management at UAL. I bring the human part (curiosity, empathy, judgement) and use AI to move faster, never to think for me. Every brief starts with two questions: why this, and who is it for?'),
          h('span', {style:{display:'flex', flexWrap:'wrap', gap:8}}, ['4+ years at TCS', 'MA Design Management, UAL', 'B.Des Product Design', 'Healthcare & pharma'].map(k => h('span', {key:k, className:'yj-ab-chip'}, k))))]),
      h('div', {className:'yj-ab-t yj-ab-ph', role:'img', 'aria-label':'Portrait of Yashvi Jain', style:{backgroundImage:`url(${p.portrait})`}}),
      tile('yj-ab-ex', [
        h('span', {style:{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}, H('Experience & education'), label('Tap a role for details')),
        h('div', null, exp.map(t => h('button', {key:t.id, className:'yj-ab-row', 'aria-expanded':open === t.id, onClick:() => setOpen(open === t.id ? null : t.id)},
          h('span', null, h('span', {className:'yj-ab-rt', style:{display:'block', fontWeight:600, fontSize:'clamp(17px, 1.3vw, 20px)', letterSpacing:'-0.01em'}}, t.title), label(t.org)),
          h('span', {style:{fontSize:14, color:GREY, textAlign:'right', whiteSpace:'nowrap'}}, t.dates, ' ', h('span', {'aria-hidden':true, style:{display:'inline-block', marginLeft:8, transition:'transform 250ms', transform:open === t.id ? 'rotate(45deg)' : 'none'}}, '+')),
          open === t.id ? h('ul', {className:'yj-ab-pts'}, t.pts.map((x, i) => h('li', {key:i}, x))) : null)))]),
      tile('yj-ab-sk', [H('Skills'),
        ...p.skills.map(g => h('div', {key:g.t, style:{display:'flex', flexDirection:'column', gap:8}}, label(g.t),
          h('span', {style:{display:'flex', flexWrap:'wrap', gap:6}}, g.items.map(k => h('span', {key:k, className:'yj-ab-chip'}, k)))))]),
      tile('yj-ab-rc', [H('What colleagues say'),
        ...p.recs.map(r => h('figure', {key:r.name, style:{margin:0, paddingTop:14, borderTop:'1px solid ' + LINE, display:'flex', gap:14, alignItems:'flex-start'}},
          h('img', {src:r.img, alt:'', width:44, height:44, style:{width:44, height:44, borderRadius:'50%', objectFit:'cover', filter:'grayscale(1)', flex:'none'}}),
          h('span', {style:{display:'flex', flexDirection:'column', gap:6}},
            h('blockquote', {style:{margin:0, fontSize:16, lineHeight:1.45}}, '“' + r.quote + '”'),
            h('figcaption', {style:{fontSize:14}}, h('b', {style:{fontWeight:600}}, r.name), label(' · ' + r.role)))))]),
      tile('yj-ab-ce', [H('Certifications'),
        ...p.certs.map(c => h('div', {key:c.title, style:{display:'flex', gap:12, alignItems:'center', paddingTop:12, borderTop:'1px solid ' + LINE}},
          h('img', {src:c.logo, alt:c.org, style:{width:40, height:40, objectFit:'contain', filter:'brightness(0)', flex:'none'}}),
          h('span', null, h('span', {style:{display:'block', fontWeight:600, fontSize:15, lineHeight:1.3}}, c.title), label(c.org + ' · ' + c.date))))]),
      tile('yj-ab-to', [H('Tools'), h('span', {style:{display:'flex', flexWrap:'wrap', gap:6}}, p.tools.map(k => h('span', {key:k, className:'yj-ab-chip'}, k))),
        label('Off the clock ↓', {marginTop:'auto'})]),
      ...p.offClock.map(o => h(o.href ? 'a' : 'div', {key:o.k, className:'yj-ab-t yj-ab-oc', ...(o.href ? {href:o.href, target:'_blank', rel:'noopener'} : {})},
        h('span', {className:'yj-ab-img', 'aria-hidden':true, style:{backgroundImage:`url(${o.src})`}}),
        h('span', {className:'yj-ab-cap'},
          h('span', {style:{fontWeight:600, fontSize:22, letterSpacing:'-0.02em'}}, o.k + (o.href ? ' ↗' : '')),
          h('span', {style:{fontSize:14, lineHeight:1.45, opacity:.9}}, o.v)))),
      tile('yj-ab-cta', [
        h('span', {style:{fontWeight:600, fontSize:'clamp(26px, 2.6vw, 40px)', letterSpacing:'-0.04em'}}, 'Let’s work together.'),
        h('span', {style:{display:'flex', gap:10, flexWrap:'wrap'}},
          h('button', {className:'yj-ab-btn', onClick:p.onContact}, 'Contact me →'),
          h('a', {className:'yj-ab-btn alt', href:p.cv, target:'_blank', rel:'noopener'}, 'Download CV ↓'))]));
  };

  static Glance = function Glance(p) {
    // The shared "at a glance" card every case study opens with.
    const h = React.createElement, A = p.accent || '#c4161c', INK = '#201e1d', BODY = '#4a4644', MUTE = '#6b6664';
    const F = "'Schibsted Grotesk', system-ui, sans-serif";
    return h('section', {className:'gl', 'aria-label':'At a glance', style:{fontFamily:F, color:INK, maxWidth:1240, margin:'0 auto', padding:(p.rows ? '56px' : '20px') + ' max(clamp(20px,5vw,80px), env(safe-area-inset-left, 0px)) 8px', boxSizing:'border-box'}},
      h('style', null, `.gl-card{background:#f6f5f4;border-radius:18px;padding:clamp(20px,3vw,36px);display:grid;gap:22px}
        .gl-rows{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px}
        .gl-k{font-size:12px;letter-spacing:.12em;text-transform:uppercase;margin:0 0 8px;font-weight:600;line-height:1.3}
        .gl-rows p{margin:0;font-size:16px;line-height:1.55;color:${BODY}}
        .gl-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px}
        .gl-stat{background:#fff;border-radius:14px;padding:16px 18px;display:flex;flex-direction:column;gap:6px}
        .gl-stat b{font-size:clamp(28px,3vw,44px);letter-spacing:-0.04em;line-height:1;font-weight:600}
        .gl-stat span{font-size:14px;line-height:1.4;color:${BODY}}
        .gl-note{font-size:13px;color:${MUTE};margin:14px 2px 0;display:flex;gap:8px;align-items:baseline}
        @media (max-width:900px){.gl-rows{grid-template-columns:1fr}}`),
      p.rows ? h('div', {className:'gl-card'},
        h('div', {className:'gl-rows'}, ...p.rows.map(([k, v]) => h('div', {key:k}, h('div', {className:'gl-k', role:'heading', 'aria-level':3, style:{color:A}}, k), h('p', null, v)))),
        p.stats ? h('div', {className:'gl-stats'}, ...p.stats.map(([n, k]) => h('div', {key:k, className:'gl-stat'}, h('b', {style:{color:A}}, n), h('span', null, k)))) : null) : null,
      p.note ? h('p', {className:'gl-note'}, h('span', {'aria-hidden':true}, '🔒'), p.note) : null);
  };

  static CaseCraySimple = function CaseCraySimple(p) {
    // CRAY in the AVA/Move case-study structure, with its own purple accent.
    const h = React.createElement, c = p.c;
    const A = '#7a3fc4', A2 = '#b46cf5', INK = '#201e1d', BODY = '#4a4644', MUTE = '#6b6664', LINE = '#e3e1df', SOFT = '#f6f5f4', TINT = '#f3ecfc';
    const F = "'Schibsted Grotesk', system-ui, sans-serif";
    const S = k => (c.secs || []).find(x => x.k === k) || {};
    const img = (src, alt, x) => h('img', {src:__R(src), alt, loading:'lazy', style:{display:'block', width:'100%', height:'100%', objectFit:'cover', borderRadius:12, ...x}});
    const chap = (id, n, k, title, lede, ...kids) => h('section', {id:'cvs-' + id, className:'cvs-sec', 'data-rv':'', 'aria-labelledby':'cvs-h-' + id},
      h('div', {className:'cvs-eye'}, h('span', null, n), ' · ', k), h('h2', {id:'cvs-h-' + id}, title), lede ? h('p', {className:'cvs-lede'}, lede) : null, ...kids);
    const card = (kids, x) => h('div', {className:'cvs-card', style:x}, ...[].concat(kids));
    const root = React.useRef(null);
    React.useEffect(() => {
      const el = root.current; if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
      el.classList.add('cvs-motion');
      const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('rv-in'); io.unobserve(e.target); } }), {rootMargin:'0px 0px -12% 0px', threshold:0.08});
      el.querySelectorAll('[data-rv]').forEach(n => { if (n.getBoundingClientRect().top < innerHeight * .9) n.classList.add('rv-in'); else io.observe(n); });
      return () => io.disconnect();
    }, []);
    const J = (S('Insight').journey || {}), T = c.testing || {}, SOL = S('Solution');
    return h('article', {ref:root, className:'cvs', 'aria-label':'Case study: CRAY, care for stray'},
      h('style', null, `
        .cvs{font-family:${F};color:${INK};background:#fff;padding:clamp(20px,3vw,40px) max(clamp(20px,5vw,80px), env(safe-area-inset-right, 0px)) 40px max(clamp(20px,5vw,80px), env(safe-area-inset-left, 0px))}
        .cvs-in{max-width:1240px;margin:0 auto}
        .cvs-hero{position:relative;display:flex;align-items:flex-end;min-height:clamp(440px,60vh,640px);border-radius:22px;padding:clamp(28px,5vw,72px);overflow:hidden;isolation:isolate;color:#fff;background:${A} center/cover no-repeat}
        .cvs-hero::before{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg, rgba(70,24,128,.94) 0%, rgba(90,36,150,.82) 40%, rgba(0,0,0,0) 75%)}
        .cvs-hero > div{max-width:620px}
        .cvs-hero h1{font-size:clamp(38px,5vw,76px) !important;line-height:.98 !important;letter-spacing:-0.045em !important;margin:14px 0 18px;font-weight:600}
        .cvs-hero p{font-size:clamp(16px,1.3vw,20px);line-height:1.5;margin:0;max-width:40ch;opacity:.95}
        .cvs-tag{font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.9}
        .cvs-title{margin:56px 0 28px;display:grid;gap:18px}
        .cvs-title h2{font-size:clamp(34px,4.2vw,60px) !important;letter-spacing:-0.04em !important;line-height:1 !important;margin:0;font-weight:600}
        .cvs-facts{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:24px;border-top:1px solid ${LINE};padding-top:18px;margin:0}
        .cvs-facts dt{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:${MUTE};margin-bottom:6px}
        .cvs-facts dd{margin:0;font-size:15px;line-height:1.45}
        .cvs-sum{background:${SOFT};border-radius:18px;padding:clamp(20px,3vw,36px);display:grid;gap:22px}
        .cvs-sum-rows{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:24px}
        .cvs-sum-rows h3{font-size:12px !important;letter-spacing:.12em !important;text-transform:uppercase;color:${A};margin:0 0 8px;font-weight:600}
        .cvs-sum-rows p{margin:0;font-size:16px;line-height:1.55;color:${BODY}}
        .cvs-chips{position:sticky;top:12px;z-index:5;display:flex;gap:6px;flex-wrap:wrap;margin:28px 0 0;padding:8px;background:rgba(255,255,255,.9);backdrop-filter:blur(10px);border:1px solid ${LINE};border-radius:999px;width:max-content;max-width:100%}
        .cvs-chips a{font-size:13px;color:${INK};text-decoration:none;padding:6px 12px;border-radius:999px}
        .cvs-chips a:hover,.cvs-chips a:focus-visible{background:${TINT};color:${A};outline:none}
        .cvs-sec{padding:88px 0 0;scroll-margin-top:80px}
        .cvs-eye{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:${MUTE};margin-bottom:12px}.cvs-eye span{color:${A};font-weight:600}
        .cvs-sec h2{font-size:clamp(28px,3vw,44px) !important;letter-spacing:-0.035em !important;line-height:1.05 !important;margin:0 0 14px;font-weight:600;max-width:24ch}
        .cvs-lede{font-size:17px;line-height:1.6;color:${BODY};margin:0 0 28px;max-width:62ch}
        .cvs-card{background:${SOFT};border-radius:16px;padding:20px 22px;min-width:0;transition:transform 350ms cubic-bezier(.2,.7,.2,1)}
        .cvs-card:hover{transform:translateY(-3px)}
        .cvs-grid{display:grid;gap:16px}.c2{grid-template-columns:repeat(2,minmax(0,1fr))}.c3{grid-template-columns:repeat(3,minmax(0,1fr))}.c4{grid-template-columns:repeat(4,minmax(0,1fr))}
        .cvs-k{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:${A};font-weight:600}
        .cvs-p{margin:8px 0 0;line-height:1.55;color:${BODY};font-size:15.5px}
        .cvs-ph{border-radius:12px;overflow:hidden;background:${SOFT}}
        .cvs-cap{font-size:13px;color:${MUTE};margin-top:8px}
        .cvs-jr{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;position:relative}
        .cvs-jr::before{content:'';position:absolute;left:4%;right:4%;top:15px;height:2px;background:${LINE}}
        .cvs-st{position:relative;display:flex;flex-direction:column;gap:8px}
        .cvs-st i{width:32px;height:32px;border-radius:50%;background:${A};color:#fff;font-style:normal;font-size:12px;font-weight:600;display:grid;place-items:center;box-shadow:0 0 0 4px #fff}
        .cvs-st b{font-size:15px}.cvs-pain{font-size:13.5px;line-height:1.45;color:${BODY};background:#fff3f1;border-radius:10px;padding:10px}
        .cvs-opp{font-size:13.5px;line-height:1.45;color:${INK};background:${TINT};border-radius:10px;padding:10px}
        .cvs-sort{display:grid;gap:10px;max-width:560px}
        .cvs-sort-row{display:grid;grid-template-columns:150px 1fr 44px;align-items:center;gap:12px;font-size:14px;color:${BODY}}
        .cvs-sort-row span.t{height:20px;background:${LINE};border-radius:4px;position:relative;overflow:hidden}
        .cvs-sort-row span.t i{position:absolute;inset:0 auto 0 0;background:${A};border-radius:0 4px 4px 0}
        .cvs-person{display:grid;grid-template-rows:auto 1fr;gap:12px}
        .cvs-said{font-size:16px;line-height:1.4;font-weight:500;margin:8px 0}
        .cvs-fix{font-size:14px;line-height:1.45;color:${INK};background:${TINT};border-radius:10px;padding:10px 12px}
        .cvs-btn{display:inline-flex;gap:8px;align-items:center;font-weight:600;font-size:15px;color:#fff;background:${A};padding:12px 20px;border-radius:999px;text-decoration:none}
        .cvs-btn:hover{background:#5d2ea0}.cvs-btn:focus-visible{outline:2px solid ${A};outline-offset:3px}
        .cvs-motion .cvs-sec[data-rv]{opacity:0;transform:translateY(18px);transition:opacity 700ms cubic-bezier(.2,.7,.2,1),transform 700ms cubic-bezier(.2,.7,.2,1)}
        .cvs-motion .cvs-sec.rv-in{opacity:1;transform:none}
        .cvs-motion .cvs-sort-row i{transform:scaleX(0);transform-origin:left;transition:transform 900ms cubic-bezier(.2,.7,.2,1) 200ms}
        .cvs-motion .rv-in .cvs-sort-row i{transform:none}
        @media (max-width:980px){.cvs-facts,.c4{grid-template-columns:repeat(2,minmax(0,1fr))}.cvs-sum-rows{grid-template-columns:repeat(2,minmax(0,1fr))}.cvs-jr{grid-template-columns:1fr}.cvs-jr::before{display:none}.c3{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media (max-width:560px){.cvs-facts,.c2,.c3,.c4,.cvs-sum-rows{grid-template-columns:1fr}.cvs-chips{border-radius:16px}.cvs-sort-row{grid-template-columns:110px 1fr 40px}}
        @media (prefers-reduced-motion:reduce){.cvs-card{transition:none}.cvs-card:hover{transform:none}}
      `),
      h('div', {className:'cvs-in'},
        h('header', {className:'cvs-hero', role:'img', 'aria-label':'A photographer crouches to pet two street dogs on an Indian street', style:{backgroundImage:`url(${__R('assets/web/assets/cray/insight-dogs.webp')})`}},
          h('div', null, h('div', {className:'cvs-tag'}, 'Animal welfare · UX · Self-initiated'),
            h('h1', null, 'Turning goodwill for strays into action.'),
            h('p', null, c.summary))),
        h('div', {className:'cvs-title'},
          h('div', {className:'cvs-eye'}, h('span', null, 'Case study 02'), ' · Self-initiated'),
          h('h2', null, 'CRAY — Care for stray'),
          h('dl', {className:'cvs-facts'}, ...[['My role', c.role], ['Methods', 'Survey, persona journey, card sort, prototyping, usability testing'], ['Output', 'Live prototype and an icon-led v2'], ['Timeline', c.years]].map(([k, v]) => h('div', {key:k}, h('dt', null, k), h('dd', null, v))))),
        h('div', {className:'cvs-sum'},
          h('div', {className:'cvs-sum-rows'}, ...(c.tldr || []).map(x => h('div', {key:x.k}, h('h3', null, x.k), h('p', null, x.v)))),
          c.proto ? h('div', null, h('a', {className:'cvs-btn', href:c.proto, target:'_blank', rel:'noopener'}, 'Try the live prototype ↗')) : null),
        h('nav', {className:'cvs-chips', 'aria-label':'Chapters'},
          ...[['why','Why'],['insight','Insight'],['structure','Structure'],['solution','Solution'],['testing','Testing'],['reflect','Looking back']].map(([id, k]) => h('a', {key:id, href:'#cvs-' + id, onClick:e => { e.preventDefault(); const el = document.getElementById('cvs-' + id); el && el.scrollIntoView({behavior:'smooth', block:'start'}); }}, k))),
        chap('why', '01', 'Why', S('Why').h, S('Why').p,
          h('div', {className:'cvs-grid c2'}, ...(S('Why').ww || []).map(x => card([h('div', {className:'cvs-k'}, x.k), h('p', {className:'cvs-p'}, x.v)])))),
        chap('insight', '02', 'Insight', S('Insight').h, S('Insight').p,
          h('div', {className:'cvs-eye', style:{marginTop:8}}, h('span', null, 'Persona journey'), ' · ' + (J.name || '').trim() + ', ' + (J.role || '') + '. ' + (J.need || '')),
          h('div', {className:'cvs-jr', role:'list'}, ...(J.stages || []).map(st => h('div', {key:st.n, className:'cvs-st', role:'listitem'},
            h('i', null, st.n), h('b', null, st.k), h('div', {className:'cvs-pain'}, h('span', {className:'cvs-k', style:{display:'block', color:'#b3261e', marginBottom:4}}, 'Pain'), st.pain), h('div', {className:'cvs-opp'}, h('span', {className:'cvs-k', style:{display:'block', marginBottom:4}}, 'Opportunity · ' + st.feat), st.opp))))),
        chap('structure', '03', 'Structure', S('Structure').h, S('Structure').p,
          h('figure', {className:'cvs-sort', style:{margin:'0 0 24px'}},
            h('figcaption', {className:'cvs-k', style:{color:MUTE, marginBottom:6}}, '“All animals in shelter”: card-sort agreement'),
            ...[['Under Home', 3], ['Under Adoption', 9]].map(([k, v]) => h('div', {key:k, className:'cvs-sort-row', role:'img', 'aria-label':k + ': ' + v + ' out of 10'}, h('span', null, k), h('span', {className:'t'}, h('i', {style:{width:v * 10 + '%'}})), h('b', null, v + '/10')))),
          h('div', {className:'cvs-ph', style:{aspectRatio:'16/8'}}, img('assets/web/assets/cray/cardsort-ia.webp', 'Card sort results and the four-tab information architecture'))),
        chap('solution', '04', 'Solution', SOL.h, SOL.p,
          h('div', {className:'cvs-grid c3', style:{marginBottom:16}}, ...(SOL.ww || []).map(x => card([h('div', {className:'cvs-k'}, x.k), h('p', {className:'cvs-p'}, x.v)]))),
          h('div', {className:'cvs-grid c2'},
            h('figure', {style:{margin:0}}, h('div', {className:'cvs-ph', style:{aspectRatio:'4/3'}}, img('assets/web/assets/cray/flow-wireframes.webp', 'User flow and wireframes')), h('figcaption', {className:'cvs-cap'}, 'User flow and wireframes')),
            h('figure', {style:{margin:0}}, h('div', {className:'cvs-ph', style:{aspectRatio:'4/3'}}, img('assets/web/assets/cray/phone-hands.webp', 'CRAY on a phone')), h('figcaption', {className:'cvs-cap'}, 'The prototype in hand')))),
        chap('testing', '05', 'Testing', T.h, T.p,
          h('div', {className:'cvs-grid c4'}, ...(T.people || []).map(pp => h('div', {key:pp.name, className:'cvs-person'},
            h('div', {className:'cvs-ph', style:{aspectRatio:'1/1'}}, img(pp.src, pp.name + ' testing CRAY')),
            h('div', null, h('div', {className:'cvs-k'}, pp.name + ' · ' + pp.role), h('div', {style:{fontSize:13, color:MUTE, marginTop:4}}, 'Task: ' + pp.task), h('p', {className:'cvs-said'}, '“' + pp.said + '”'), h('div', {className:'cvs-fix'}, h('b', null, 'Fix: '), pp.fix)))))),
        chap('reflect', '06', 'Looking back', S('Reflection').h, null,
          h('div', {className:'cvs-grid c2'},
            card([h('div', {className:'cvs-k'}, 'What I learned'), h('p', {className:'cvs-p'}, S('Reflection').p)]),
            card([h('div', {className:'cvs-k', style:{color:'#fff'}}, 'Next'), h('p', {className:'cvs-p', style:{color:'#fff'}}, ((S('Reflection').ww || [])[0] || {}).v)], {background:A}))),
        p.next || null));
  };

  static FlipBook = function FlipBook(p) {
    // A booklet of the six-year plan. Desktop shows two-page spreads and turns a
    // real leaf in 3D; phones show one page at a time. Arrow keys work too.
    const h = React.createElement, pages = p.pages, N = pages.length;
    const [wide, setWide] = React.useState(() => typeof matchMedia === 'undefined' || matchMedia('(min-width: 820px)').matches);
    React.useEffect(() => { const m = matchMedia('(min-width: 820px)'); const f = () => setWide(m.matches); m.addEventListener('change', f); return () => m.removeEventListener('change', f); }, []);
    const still = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    const step = wide ? 2 : 1, last = wide ? N - 2 : N - 1;
    const [at, setAt] = React.useState(0), [turn, setTurn] = React.useState(null);
    React.useEffect(() => { setAt(a => wide ? a - (a % 2) : a); }, [wide]);
    const go = dir => {
      if (turn) return;
      const to = Math.max(0, Math.min(last, at + dir * step)); if (to === at) return;
      if (still || !wide) { setAt(to); return; }
      setTurn(dir); setTimeout(() => { setAt(to); setTurn(null); }, 720);
    };
    const pg = i => i >= 0 && i < N ? h('div', {className:'fb-page' + (i === 0 || i === N - 1 ? ' fb-cover' : '')}, pages[i], i > 0 && i < N - 1 ? h('span', {className:'fb-num'}, i) : null) : h('div', {className:'fb-page fb-blank'});
    let left, right, leaf = null;
    if (wide) {
      if (turn === 1) { left = pg(at); right = pg(at + 3); leaf = h('div', {className:'fb-leaf fwd'}, h('div', {className:'fb-side front'}, pg(at + 1)), h('div', {className:'fb-side back'}, pg(at + 2))); }
      else if (turn === -1) { left = pg(at - 2); right = pg(at + 1); leaf = h('div', {className:'fb-leaf bwd'}, h('div', {className:'fb-side front'}, pg(at)), h('div', {className:'fb-side back'}, pg(at - 1))); }
      else { left = pg(at); right = pg(at + 1); }
    }
    const label = wide ? `Pages ${at + 1}–${Math.min(N, at + 2)} of ${N}` : `Page ${at + 1} of ${N}`;
    return h('div', {className:'fb', role:'region', 'aria-roledescription':'booklet', 'aria-label':p.title, tabIndex:0,
        onKeyDown:e => { if (e.key === 'ArrowRight') { e.preventDefault(); go(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); } }},
      h('div', {className:'fb-book' + (wide ? ' wide' : '')},
        wide ? h(React.Fragment, null, h('div', {className:'fb-half l', onClick:() => go(-1)}, left), h('div', {className:'fb-half r', onClick:() => go(1)}, right), leaf, h('span', {className:'fb-spine', 'aria-hidden':true}))
          : h('div', {key:at, className:'fb-half single' + (still ? '' : ' fb-in'), onClick:() => go(1)}, pg(at))),
      h('div', {className:'fb-bar'},
        h('button', {onClick:() => go(-1), disabled:at === 0, 'aria-label':'Previous page'}, '← Back'),
        h('span', {'aria-live':'polite'}, label),
        h('button', {onClick:() => go(1), disabled:at >= last, 'aria-label':'Next page'}, 'Turn page →')));
  };

  static CaseMoveSimple = function CaseMoveSimple(p) {
    // What It Takes to Move, rebuilt in the AVA case-study structure: hero, facts,
    // summary card, six numbered chapters, results, looking back. Own red accent.
    const h = React.createElement, c = p.c;
    const RED = '#c4161c', INK = '#201e1d', BODY = '#4a4644', MUTE = '#6b6664', LINE = '#e3e1df', SOFT = '#f6f5f4', TINT = '#fbeceb';
    const F = "'Schibsted Grotesk', system-ui, sans-serif";
    const S = k => (c.secs || []).find(x => x.k === k) || {};
    const img = (src, alt, x) => h('img', {src:__R(src), alt, loading:'lazy', style:{display:'block', width:'100%', height:'100%', objectFit:'cover', borderRadius:12, ...x}});
    const eyebrow = (n, k) => h('div', {className:'mvs-eye'}, h('span', null, n), ' · ', k);
    const chap = (id, n, k, title, lede, ...kids) => h('section', {id:'mvs-' + id, className:'mvs-sec', 'data-rv':'', 'aria-labelledby':'mvs-h-' + id},
      eyebrow(n, k), h('h2', {id:'mvs-h-' + id}, title), lede ? h('p', {className:'mvs-lede'}, lede) : null, ...kids);
    const card = (kids, x) => h('div', {className:'mvs-card', style:x}, ...[].concat(kids));
    const stat = (n, k, dark) => h('div', {className:'mvs-stat' + (dark ? ' dark' : '')}, h('b', null, n), h('span', null, k));
    const experts = [
      ['Animesh Sharma', 'Evaluation head, Breakthrough Foundation', 'Teach a fifteen-year-old and he learns. Tell a forty-year-old and he shuts down.'],
      ['Dr Tasneem Deo', 'Associate Professor, National Law University Delhi', 'Women are in work and education. The city hasn’t caught up.'],
      ['Investigating officer', 'Delhi Police', 'Victims stay silent to protect their freedom at home.'],
      ['Susan Leadbetter', 'WSP, gender-inclusive design', 'Peer-led change among men beats top-down messaging.'],
      ['Dr Sarah Lewis', 'Criminologist', 'Redesign the system, not the individual.'],
      ['Amy Tempest', 'Transport for London', 'Lighting helps. Community consultation is the real lever.']];
    const play = [['Read', 'The judge reads a fill-in-the-blank prompt.'], ['Answer', 'Everyone plays the most convincing white card.'], ['Judge', 'Answers are read out anonymously.'], ['Win on realism', 'The most “heard-it-before” line takes the round.'], ['Talk', 'Then the table talks about why it sounded so familiar.']];
    const T = c.testing || {}, O = c.outcome || {}, PL = c.plan || {};
    // Motion: reveal sections and draw charts once, as they scroll into view.
    // Content is visible by default; motion is only armed when JS runs and the
    // viewer hasn't asked for reduced motion.
    const root = React.useRef(null);
    React.useEffect(() => {
      const el = root.current; if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
      const items = el.querySelectorAll('[data-rv]');
      el.classList.add('mvs-motion');
      const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('rv-in'); io.unobserve(e.target); } }), {rootMargin:'0px 0px -12% 0px', threshold:0.08});
      items.forEach(n => { const r = n.getBoundingClientRect(); if (r.top < innerHeight * .9) n.classList.add('rv-in'); else io.observe(n); });
      return () => io.disconnect();
    }, []);
    const yr = v => String(Math.floor(v));
    // --- Data visualisation (single red hue; values from the case data only) ---
    const waffle = (n, of) => h('div', {className:'viz-waffle', 'data-rv':'', role:'img', 'aria-label':n + ' out of ' + of},
      ...Array.from({length:of}, (_, i) => h('span', {key:i, className:i < n ? 'on' : '', style:{'--i':i}})));
    const bars = (rows, max, label) => h('figure', {className:'viz viz-bars', 'data-rv':''},
      h('figcaption', null, label),
      h('div', {role:'list'}, ...rows.map(([k, v]) => h('div', {key:k, role:'listitem', className:'viz-row', tabIndex:0, 'aria-label':k + ': ' + v},
        h('span', {className:'viz-k'}, k),
        h('span', {className:'viz-track'}, h('span', {className:'viz-bar', style:{width:(v / max * 100) + '%', '--i':rows.findIndex(x => x[0] === k)}}), h('b', null, v)),
        h('span', {className:'viz-tip', role:'tooltip'}, k + ': ' + v)))));
    const LEVELS = ['Low', 'Medium', 'High'];
    const dots = (rows, label, note) => h('figure', {className:'viz viz-dots', 'data-rv':''},
      h('figcaption', null, label),
      h('div', {className:'viz-dots-head', 'aria-hidden':true}, h('span'), ...LEVELS.map(l => h('span', {key:l}, l))),
      ...rows.map(([k, lv, why]) => h('div', {key:k, className:'viz-dot-row', tabIndex:0, 'aria-label':k + ': ' + LEVELS[lv] + ' engagement. ' + why},
        h('span', {className:'viz-k'}, k),
        ...LEVELS.map((l, i) => h('span', {key:l, className:'viz-cell'}, i === lv ? h('i', {className:'viz-dot l' + i, style:{'--i':rows.findIndex(x => x[0] === k)}}) : h('i', {className:'viz-tick'}))),
        h('span', {className:'viz-tip', role:'tooltip'}, why))),
      note ? h('p', {className:'viz-note'}, note) : null);
    const gantt = (road, ms) => {
      const t0 = 2026.5, t1 = 2032.4, X = v => ((v - t0) / (t1 - t0) * 100) + '%', W = (a2, b2) => ((b2 - a2) / (t1 - t0) * 100) + '%';
      const years = [2027, 2028, 2029, 2030, 2031, 2032];
      return h('figure', {className:'viz viz-gantt', 'data-rv':''},
        h('div', {className:'viz-legend'}, ...[['S', 'Short term'], ['M', 'Mid term'], ['L', 'Long term']].map(([k, l]) => h('span', {key:k}, h('i', {className:'g' + k}), l))),
        h('div', {className:'viz-g-plot'},
          h('div', {className:'viz-g-axis', 'aria-hidden':true},
            ...years.map(y => h('span', {key:y, className:'viz-g-year', style:{left:X(y)}}, h('em', null, "'" + String(y).slice(2)))),
            ms ? h('span', {className:'viz-g-ms', style:{left:X(ms.at)}}, h('em', null, 'Mid-point review')) : null),
          ...road.map(r => h('div', {key:r.k, className:'viz-g-row', tabIndex:0, 'aria-label':r.k + ', ' + r.segs.map(sg => yr(sg[0]) + ' to ' + yr(sg[1])).join(' then ')},
            h('span', {className:'viz-g-k'}, r.k),
            h('span', {className:'viz-g-track'}, ...r.segs.map((sg, i) => h('span', {key:i, className:'viz-g-bar g' + sg[2], style:{left:X(sg[0]), width:W(sg[0], sg[1]), '--i':road.indexOf(r)}}))),
            h('span', {className:'viz-tip', role:'tooltip'}, r.k + ' · ' + yr(r.segs[0][0]) + '–' + yr(r.segs[r.segs.length - 1][1]))))));
    };
    // Graphic language from the project itself: The Script's brush arcs and the red halftone prints.
    const arcs = (col, op, cls) => h('svg', {className:'fb-arcs ' + (cls || ''), viewBox:'0 0 300 400', preserveAspectRatio:'none', 'aria-hidden':true},
      h('path', {d:'M-20 70 C 60 10 140 120 230 50 S 320 20 330 40', stroke:col, strokeWidth:30, fill:'none', strokeLinecap:'round', opacity:op}),
      h('path', {d:'M-30 110 C 40 60 120 150 210 95', stroke:col, strokeWidth:16, fill:'none', strokeLinecap:'round', opacity:op * .6}),
      h('path', {d:'M-20 370 C 70 300 160 410 250 330 S 320 300 330 310', stroke:col, strokeWidth:30, fill:'none', strokeLinecap:'round', opacity:op}));
    const halftone = (src, pos) => h('img', {className:'fb-ht', src:__R(src), alt:'', 'aria-hidden':true, style:{objectPosition:pos || '50% 50%'}});
    const EASTD = {Easy:'Simple to start, nothing to set up.', Attractive:'Fun enough to choose freely.', Social:'Seen and shared among peers.', Timely:'Arrives when the habit is forming.'};
    const P = (eyebrowTxt, title, ...kids) => h('div', {className:'fb-in-page'}, h('svg', {className:'fb-corner', viewBox:'0 0 120 120', 'aria-hidden':true}, h('path', {d:'M10 -10 C 30 50 80 40 130 70', stroke:RED, strokeWidth:14, fill:'none', strokeLinecap:'round'})), h('div', {className:'fb-eye'}, eyebrowTxt), h('h4', {className:'fb-h'}, title), ...kids);
    const para = t => h('p', {className:'fb-p'}, t);
    const hz = k => (PL.road || []).flatMap(r => r.segs.filter(sg => sg[2] === k).map(sg => [r.k, yr(sg[0]) + (yr(sg[1]) !== yr(sg[0]) ? '–' + yr(sg[1]).slice(2) : '')]));
    const HZ = Object.fromEntries((PL.horizons || []).map(x => [x.hz, x]));
    const list = rows => h('ul', {className:'fb-list'}, ...rows.map(([k, v], i) => h('li', {key:i}, h('span', null, k), h('b', null, v))));
    const book = [
      h('div', {className:'fb-cv'}, halftone('assets/web/assets/ma/game-family-ht.webp', '50% 40%'), arcs('#fff', .9), h('div', {className:'fb-eye', style:{color:'#fff'}}, 'What It Takes to Move · Strategy'), h('div', {className:'fb-cv-t'}, 'Change that outlasts the game.'), h('div', {className:'fb-cv-s'}, 'A six-year service and toolkit plan · 2026–2032'), h('div', {className:'fb-cv-hint'}, 'Turn the page →')),
      P('The idea', 'Six years, one habit at a time.', para(PL.p), para('This booklet walks through how the change is built, stage by stage, and when each piece rolls out.')),
      P('The model', PL.ladderH || 'How the behaviour changes', para(PL.ladderP), h('div', {className:'fb-east'}, ...Object.entries(EASTD).map(([k, d]) => h('div', {key:k}, h('b', null, k), h('span', null, d))))),
      ...(PL.stages || []).map((st, i, all) => P('Stage ' + (i + 1) + ' of 5', st.k, h('div', {className:'fb-bignum', 'aria-hidden':true}, '0' + (i + 1)), h('div', {className:'fb-shift'}, st.shift), para(st.d),
        h('div', {className:'fb-ladder', 'aria-hidden':true}, ...all.map((x, j) => h('div', {key:j, className:j === i ? 'on' : j < i ? 'past' : ''}, h('span', {style:{height:(28 + j * 18) + '%'}}), h('em', null, x.k)))),
        h('div', {className:'fb-tags'}, h('span', {className:'fb-tags-k'}, 'EAST:'), ...st.east.map(e => h('span', {key:e}, e))))),
      P('Two phases', 'Enable first, then engage.', ...(PL.bands || []).map(bd => h('div', {key:bd.k, className:'fb-band'}, h('b', null, bd.k), h('span', null, bd.when))), para('Awareness, Desire and Knowledge are built first through the toolkit; Ability and Reinforcement follow once partners and training are in place.')),
      ...['S', 'M', 'L'].map(k => P('Roadmap · ' + (HZ[k] ? HZ[k].when : ''), (HZ[k] ? HZ[k].k : k) + ': ' + (HZ[k] ? HZ[k].d.toLowerCase() : ''), list(hz(k)),
        k === 'L' && PL.milestone ? h('div', {className:'fb-band'}, h('b', null, PL.milestone.k), h('span', null, yr(PL.milestone.at))) : null)),
      P('Roadmap · 2026–2032', 'Every workstream at a glance.', gantt(PL.road || [], PL.milestone)),
      P('Success metrics', 'How we’ll know it’s working.', h('div', {className:'fb-metrics'}, ...[
        ['Awareness', 'Families who can name a norm after one game', 'A short self-check card before and after play. It shows whether the game makes an invisible rule visible.'],
        ['Desire', 'Boys who opt in to a second peer session', 'Coming back by choice is the signal. It separates real interest from going along with a teacher.'],
        ['Knowledge', 'Correct answers on bystander scenarios', 'The same scenarios before and after each workshop. It tests whether people know what to do, not just that they should.'],
        ['Ability', 'Bystander actions reported in the moment', 'Short diary prompts after training. They capture whether people actually stepped in, and how.'],
        ['Reinforcement', 'How “normal” the new behaviour feels', 'Repeated norm-perception surveys in homes and schools to 2032, reviewed at the 2029 mid-point.']]
        .map(([st, m, d], i) => h('div', {key:st, className:'fb-metric'}, h('span', {className:'fb-metric-n'}, '0' + (i + 1)), h('div', null, h('div', {className:'fb-metric-st'}, st), h('b', null, m), h('p', null, d)))))),
      ...(PL.phases || []).map(ph => P('Where it plays · ' + ph.when, ph.k, para(ph.goal), h('ul', {className:'fb-bul'}, ...ph.acts.map((x, i) => h('li', {key:i}, x))), h('div', {className:'fb-note'}, h('b', null, ph.sigK + ': '), ph.sig))),
      h('div', {className:'fb-cv'}, halftone('assets/web/assets/ma/game-classroom-ht.webp', '50% 60%'), arcs('#fff', .9, 'flip'), h('div', {className:'fb-cv-t', style:{fontSize:'clamp(26px, 2.6vw, 38px)'}}, 'From noticing a norm to defending a new one.'), h('div', {className:'fb-cv-s'}, 'Reviewed continuously, with a mid-point evaluation in 2029.'), h('div', {className:'fb-cv-hint'}, '← Back to the start'))];
    if (book.length % 2) book.splice(book.length - 1, 0, P('Notes', 'Measured all the way.', para('Longitudinal mapping and review run from 2027 to 2032, so each phase is judged on what changed, not on what shipped.')));

    return h('article', {ref:root, className:'mvs', 'aria-label':'Case study: What It Takes to Move'},
      h('style', null, `
        .mvs{--red:${RED};font-family:${F};color:${INK};background:#fff;padding:clamp(20px, 3vw, 40px) max(clamp(20px, 5vw, 80px), env(safe-area-inset-right, 0px)) 40px max(clamp(20px, 5vw, 80px), env(safe-area-inset-left, 0px))}
        .mvs-in{max-width:1240px;margin:0 auto}
        .mvs-motion [data-rv]{--ease:cubic-bezier(.2,.7,.2,1)}
        .mvs-motion .mvs-sec[data-rv]{opacity:0;transform:translateY(18px);transition:opacity 700ms var(--ease),transform 700ms var(--ease)}
        .mvs-motion .mvs-sec.rv-in{opacity:1;transform:none}
        .mvs-motion .viz-bars .viz-bar{transform:scaleX(0);transform-origin:left;transition:transform 900ms var(--ease) calc(var(--i, 0) * 90ms + 150ms)}
        .mvs-motion .viz-bars.rv-in .viz-bar{transform:none}
        .mvs-motion .viz-bars .viz-track b{opacity:0;transition:opacity 400ms ease calc(var(--i, 0) * 90ms + 800ms)}
        .mvs-motion .viz-bars.rv-in .viz-track b{opacity:1}
        .mvs-motion .viz-waffle span.on{opacity:.25;transition:opacity 250ms ease calc(var(--i) * 9ms + 200ms)}
        .mvs-motion .viz-waffle.rv-in span.on{opacity:1}
        .mvs-motion .viz-dots .viz-dot{transform:scale(0);transition:transform 450ms cubic-bezier(.3,1.6,.4,1) calc(var(--i, 0) * 110ms + 200ms)}
        .mvs-motion .viz-dots.rv-in .viz-dot{transform:none}
        .mvs-motion .viz-gantt .viz-g-bar{clip-path:inset(0 100% 0 0);transition:clip-path 800ms var(--ease) calc(var(--i, 0) * 60ms + 150ms)}
        .mvs-motion .viz-gantt.rv-in .viz-g-bar{clip-path:inset(0 0 0 0)}
        .mvs-card,.mvs-ph{transition:transform 350ms cubic-bezier(.2,.7,.2,1),box-shadow 350ms ease}
        .mvs-card:hover,.mvs-ph:hover{transform:translateY(-3px);box-shadow:0 14px 26px -18px rgba(0,0,0,.35)}
        .mvs-ph img{transition:transform 700ms cubic-bezier(.2,.7,.2,1)}
        .mvs-ph:hover img{transform:scale(1.03)}
        @media (prefers-reduced-motion:reduce){.mvs-card,.mvs-ph,.mvs-ph img{transition:none}.mvs-card:hover,.mvs-ph:hover,.mvs-ph:hover img{transform:none}}
        .mvs-hero{position:relative;display:flex;align-items:flex-end;min-height:clamp(460px, 64vh, 680px);background:${RED} right 20% center/auto 130% no-repeat;color:#fff;border-radius:22px;padding:clamp(28px,5vw,72px);overflow:hidden;isolation:isolate}
        .mvs-hero::before{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg, rgba(140,10,14,.97) 0%, rgba(150,10,16,.9) 42%, rgba(150,10,16,.15) 70%, rgba(0,0,0,0) 85%), linear-gradient(0deg, rgba(0,0,0,.35), rgba(0,0,0,0) 45%)}
        .mvs-hero > div{max-width:620px}
        .mvs-hero h1{font-size:clamp(40px,5.2vw,80px) !important;line-height:.98 !important;letter-spacing:-0.045em !important;margin:14px 0 18px;font-weight:600}
        .mvs-hero p{font-size:clamp(16px,1.3vw,20px);line-height:1.5;margin:0;max-width:40ch;opacity:.95}
        .mvs-hero .tag{font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.9}
        .mvs-hero figure{margin:0;transform:rotate(3deg);box-shadow:0 30px 60px -30px rgba(0,0,0,.6);border-radius:14px;overflow:hidden;aspect-ratio:4/3}
        .mvs-title{display:grid;grid-template-columns:minmax(0,1fr);gap:18px;margin:56px 0 28px}
        .mvs-title h2{font-size:clamp(36px,4.4vw,64px) !important;letter-spacing:-0.04em !important;line-height:1 !important;margin:0;font-weight:600}
        .mvs-facts{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:24px;border-top:1px solid ${LINE};padding-top:18px}
        .mvs-facts dt{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:${MUTE};margin-bottom:6px}
        .mvs-facts dd{margin:0;font-size:15px;line-height:1.45;color:${INK}}
        .mvs-sum{background:${SOFT};border-radius:18px;padding:clamp(20px,3vw,36px);display:grid;gap:22px}
        .mvs-sum-rows{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px}
        .mvs-sum-rows h3{font-size:12px !important;letter-spacing:.12em !important;text-transform:uppercase;color:${RED};margin:0 0 8px;font-weight:600}
        .mvs-sum-rows p{margin:0;font-size:16px;line-height:1.55;color:${BODY}}
        .mvs-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
        .mvs-stat{background:#fff;border-radius:14px;padding:16px 18px;display:flex;flex-direction:column;gap:6px}
        .mvs-stat b{font-size:clamp(34px,3.4vw,52px);letter-spacing:-0.04em;line-height:1;color:${RED};font-weight:600}
        .mvs-stat span{font-size:14px;line-height:1.4;color:${BODY}}
        .mvs-stat.dark{background:${RED}}.mvs-stat.dark b,.mvs-stat.dark span{color:#fff}
        .mvs-chips{position:sticky;top:12px;z-index:5;display:flex;gap:6px;flex-wrap:wrap;margin:28px 0 0;padding:8px;background:rgba(255,255,255,.88);backdrop-filter:blur(10px);border:1px solid ${LINE};border-radius:999px;width:max-content;max-width:100%}
        .mvs-chips a{font-size:13px;color:${INK};text-decoration:none;padding:6px 12px;border-radius:999px}
        .mvs-chips a:hover,.mvs-chips a:focus-visible{background:${TINT};color:${RED};outline:none}
        .mvs-sec{padding:88px 0 0;scroll-margin-top:80px}
        .mvs-eye{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:${MUTE};margin-bottom:12px}.mvs-eye span{color:${RED};font-weight:600}
        .mvs-sec h2{font-size:clamp(28px,3vw,44px) !important;letter-spacing:-0.035em !important;line-height:1.05 !important;margin:0 0 14px;font-weight:600;max-width:24ch}
        .mvs-lede{font-size:17px;line-height:1.6;color:${BODY};margin:0 0 28px;max-width:62ch}
        .mvs-card{background:${SOFT};border-radius:16px;padding:20px 22px;min-width:0}
        .mvs-grid{display:grid;gap:16px}
        .g2{grid-template-columns:repeat(2,minmax(0,1fr))}.g3{grid-template-columns:repeat(3,minmax(0,1fr))}.g4{grid-template-columns:repeat(4,minmax(0,1fr))}
        .mvs-q{font-size:18px;line-height:1.4;margin:10px 0 0;color:${INK};font-weight:500}
        .mvs-k{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:${RED};font-weight:600}
        .mvs-who{font-size:14px;color:${MUTE};margin-top:10px}
        .mvs-ph{border-radius:12px;overflow:hidden;background:${SOFT};position:relative}
        .mvs-ph figcaption{font-size:13px;color:${MUTE};margin-top:8px}
        .mvs-callout{border-left:3px solid ${RED};background:${TINT};border-radius:0 14px 14px 0;padding:18px 22px}
        .mvs-callout h3{margin:0 0 6px;font-size:18px !important;font-weight:600}.mvs-callout p{margin:0;color:${BODY};line-height:1.55}
        .mvs-steps{counter-reset:s;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;list-style:none;padding:0;margin:20px 0 0}
        .mvs-steps li{counter-increment:s;background:${SOFT};border-radius:14px;padding:16px;font-size:14px;line-height:1.45;color:${BODY}}
        .mvs-steps li::before{content:"0" counter(s);display:block;color:${RED};font-weight:600;font-size:12px;letter-spacing:.1em;margin-bottom:8px}
        .mvs-steps b{display:block;color:${INK};font-size:16px;margin-bottom:4px}
        .fb{outline:none;display:flex;flex-direction:column;align-items:center;gap:16px}
        .fb:focus-visible .fb-book{box-shadow:0 0 0 3px ${RED}, 0 40px 70px -40px rgba(0,0,0,.5)}
        .fb-book{position:relative;width:100%;max-width:440px;aspect-ratio:3/4;perspective:2200px;border-radius:6px;box-shadow:0 40px 70px -40px rgba(0,0,0,.5)}
        .fb-book.wide{max-width:1040px;aspect-ratio:3/2;display:grid;grid-template-columns:1fr 1fr}
        .fb-half{position:relative;min-width:0;cursor:pointer}
        .fb-half.single{position:absolute;inset:0}
        .fb-in{animation:fbIn 450ms cubic-bezier(.2,.7,.2,1)}
        @keyframes fbIn{from{opacity:0;transform:translateX(14px)}}
        .fb-page{position:absolute;inset:0;background:#fbf8f2;color:${INK};overflow:hidden;padding:clamp(20px,3vw,40px);box-sizing:border-box}
        .fb-half.l .fb-page{border-radius:6px 0 0 6px;background-image:linear-gradient(270deg, rgba(0,0,0,.08), rgba(0,0,0,0) 12%)}
        .fb-half.r .fb-page{border-radius:0 6px 6px 0;background-image:linear-gradient(90deg, rgba(0,0,0,.1), rgba(0,0,0,0) 12%)}
        .fb-half.single .fb-page{border-radius:6px}
        .fb-page.fb-blank{background:transparent;box-shadow:none}
        .fb-page.fb-cover{background:${RED};color:#fff}
        .fb-spine{position:absolute;left:50%;top:0;bottom:0;width:2px;transform:translateX(-1px);background:rgba(0,0,0,.12);pointer-events:none}
        .fb-leaf{position:absolute;top:0;bottom:0;left:50%;width:50%;transform-style:preserve-3d;transform-origin:left center;z-index:3;pointer-events:none}
        .fb-leaf.fwd{animation:fbFwd 720ms cubic-bezier(.45,.05,.3,1) forwards}
        .fb-leaf.bwd{left:0;transform-origin:right center;animation:fbBwd 720ms cubic-bezier(.45,.05,.3,1) forwards}
        @keyframes fbFwd{to{transform:rotateY(-180deg)}}
        @keyframes fbBwd{to{transform:rotateY(180deg)}}
        .fb-side{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden}
        .fb-side.back{transform:rotateY(180deg)}
        .fb-side .fb-page{box-shadow:0 0 30px rgba(0,0,0,.18)}
        .fb-num{position:absolute;bottom:14px;right:20px;font-size:12px;color:${MUTE}}
        .fb-half.l .fb-num,.fb-leaf.fwd .back .fb-num,.fb-leaf.bwd .front .fb-num{right:auto;left:20px}
        .fb-in-page{display:flex;flex-direction:column;gap:10px;height:100%}
        .fb-eye{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:${RED};font-weight:600}
        .fb-h{margin:0;font-size:clamp(20px,2vw,28px) !important;line-height:1.1 !important;letter-spacing:-0.025em !important;font-weight:600}
        .fb-p{margin:0;font-size:clamp(13px,1.05vw,15px);line-height:1.55;color:${BODY}}
        .fb-shift{font-size:clamp(20px,2.1vw,30px);line-height:1.15;color:${RED};font-weight:500;letter-spacing:-0.02em}
        .fb-ladder{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px;align-items:end;flex:1;min-height:90px;margin-top:8px}
        .fb-ladder div{display:flex;flex-direction:column;justify-content:flex-end;gap:6px;height:100%}
        .fb-ladder span{display:block;border-radius:6px 6px 2px 2px;background:${LINE}}
        .fb-ladder .past span{background:#e9b9b9}.fb-ladder .on span{background:${RED}}
        .fb-ladder em{font-style:normal;font-size:clamp(9px,.75vw,11px);color:${MUTE};text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fb-ladder .on em{color:${RED};font-weight:600}
        .fb-tags-k{border:0 !important;padding-left:0 !important;color:${MUTE} !important}
        .fb-tags{display:flex;gap:6px;flex-wrap:wrap;margin-top:auto}.fb-tags span{font-size:12px;padding:4px 10px;border-radius:999px;border:1px solid ${RED};color:${RED}}
        .fb-east{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:4px}.fb-east div{background:#fff;border-radius:10px;padding:10px 12px;display:flex;flex-direction:column;gap:2px;font-size:13px;color:${BODY}}.fb-east b{color:${INK}}
        .fb-band{display:flex;justify-content:space-between;gap:12px;border-top:1px solid ${LINE};padding-top:8px;font-size:14px}.fb-band span{color:${MUTE};white-space:nowrap}
        .fb-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;font-size:clamp(12.5px,1vw,14px)}
        .fb-list li{display:flex;justify-content:space-between;gap:12px;padding:7px 0;border-top:1px solid ${LINE}}.fb-list b{color:${RED};font-weight:600;white-space:nowrap}
        .fb-bul{margin:0;padding-left:18px;font-size:clamp(13px,1vw,14.5px);line-height:1.5;color:${BODY}}
        .fb-note{margin-top:auto;font-size:13px;line-height:1.45;background:#fff;border-radius:10px;padding:10px 12px;color:${BODY}}
        .fb-cv{position:relative;display:flex;flex-direction:column;justify-content:center;gap:14px;height:100%}
        .fb-cv > :not(.fb-ht):not(.fb-arcs){position:relative;z-index:2}
        .fb-arcs{position:absolute;inset:calc(-1 * clamp(20px,3vw,40px));width:calc(100% + 2 * clamp(20px,3vw,40px));height:calc(100% + 2 * clamp(20px,3vw,40px));pointer-events:none;z-index:1}
        .fb-arcs.flip{transform:scaleX(-1)}
        .fb-ht{position:absolute;right:calc(-1 * clamp(20px,3vw,40px));bottom:calc(-1 * clamp(20px,3vw,40px));width:78%;height:62%;object-fit:cover;filter:brightness(0) invert(1);opacity:.22;mix-blend-mode:screen;pointer-events:none;z-index:0;-webkit-mask-image:linear-gradient(200deg,#000 40%,transparent 95%);mask-image:linear-gradient(200deg,#000 40%,transparent 95%)}
        .fb-in-page{position:relative}
        .fb-in-page > *{position:relative;z-index:1}
        .fb-corner{position:absolute !important;top:calc(-1 * clamp(20px,3vw,40px));right:calc(-1 * clamp(20px,3vw,40px));width:clamp(70px,8vw,110px);height:auto;opacity:.16;z-index:0 !important}
        .fb-bignum{position:absolute !important;right:0;top:20px;font-size:clamp(70px,9vw,130px);line-height:1;font-weight:600;letter-spacing:-0.05em;color:transparent;-webkit-text-stroke:1.5px ${RED};opacity:.35;z-index:0 !important}
        .fb-cv-t{font-size:clamp(30px,3.4vw,48px);line-height:1;letter-spacing:-0.04em;font-weight:600}
        .fb-cv-s{font-size:15px;opacity:.9}.fb-cv-hint{margin-top:24px;font-size:13px;opacity:.75}
        .fb-bar{display:flex;align-items:center;gap:16px;font-size:14px;color:${MUTE}}
        .fb-bar button{all:unset;cursor:pointer;font-family:${F};font-weight:600;font-size:14px;color:${INK};padding:9px 16px;border-radius:999px;border:1px solid ${INK}}
        .fb-bar button:hover:not(:disabled){background:${INK};color:#fff}
        .fb-bar button:focus-visible{outline:2px solid ${RED};outline-offset:2px}
        .fb-bar button:disabled{opacity:.3;cursor:default}
        @media (prefers-reduced-motion:reduce){.fb-leaf,.fb-in{animation:none}}
        .viz{margin:0;position:relative}
        .viz figcaption{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:${MUTE};margin-bottom:10px}
        .viz-tip{position:absolute;z-index:5;left:0;top:-30px;background:${INK};color:#fff;font-size:12px;line-height:1.3;padding:6px 9px;border-radius:6px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity 150ms ease}
        .viz-row,.viz-dot-row,.viz-g-row{position:relative;outline:none}
        .viz-row:hover .viz-tip,.viz-row:focus-visible .viz-tip,.viz-dot-row:hover .viz-tip,.viz-dot-row:focus-visible .viz-tip,.viz-g-row:hover .viz-tip,.viz-g-row:focus-visible .viz-tip{opacity:1}
        .viz-row:focus-visible,.viz-dot-row:focus-visible,.viz-g-row:focus-visible{box-shadow:0 0 0 2px ${RED};border-radius:6px}
        .viz-waffle{display:grid;grid-template-columns:repeat(20,1fr);gap:2px;margin-top:10px}
        .viz-waffle span{aspect-ratio:1;border-radius:2px;background:rgba(255,255,255,.25)}.viz-waffle span.on{background:#fff}
        .viz-bars [role=list]{display:flex;flex-direction:column;gap:10px}
        .viz-row{display:grid;grid-template-columns:minmax(140px, 220px) 1fr;gap:14px;align-items:center;font-size:14px;color:${BODY}}
        .viz-track{position:relative;display:flex;align-items:center;gap:8px;height:22px}
        .viz-bar{display:block;height:100%;background:${RED};border-radius:0 4px 4px 0;min-width:4px}
        .viz-track b{font-size:14px;color:${INK};font-weight:600}
        .viz-row:hover .viz-bar{filter:brightness(1.12)}
        .viz-dots-head,.viz-dot-row{display:grid;grid-template-columns:minmax(120px, 200px) repeat(3, 1fr);gap:8px;align-items:center}
        .viz-dots-head{font-size:12px;color:${MUTE};text-align:center;border-bottom:1px solid ${LINE};padding-bottom:6px;margin-bottom:4px}
        .viz-dot-row{padding:7px 0;border-bottom:1px solid ${LINE};font-size:14px;color:${BODY}}
        .viz-cell{display:flex;justify-content:center}
        .viz-tick{width:6px;height:6px;border-radius:50%;background:${LINE}}
        .viz-dot{width:14px;height:14px;border-radius:50%;box-shadow:0 0 0 2px #fff}
        .viz-dot.l2{background:${RED}}.viz-dot.l1{background:#e07f7f}.viz-dot.l0{background:#f2c4c4}
        .viz-note{font-size:12.5px;color:${MUTE};margin:8px 0 0}
        .viz-legend{display:flex;gap:12px;font-size:11.5px;color:${MUTE};margin-bottom:8px}
        .viz-legend i{display:inline-block;width:10px;height:10px;border-radius:2px;margin-right:5px;vertical-align:-1px}
        .gS{background:#f0a3a3}.gM{background:#dc4b4b}.gL{background:#8e0d12}
        .viz-g-plot{position:relative;display:flex;flex-direction:column;gap:4px;padding:18px 0 20px}
        .viz-g-axis{position:absolute;left:38%;right:0;top:0;bottom:0;pointer-events:none}
        .viz-g-year{position:absolute;top:14px;bottom:18px;width:1px;background:${LINE}}
        .viz-g-year em{position:absolute;top:-14px;transform:translateX(-50%);font-style:normal;font-size:10.5px;color:${MUTE}}
        .viz-g-ms{position:absolute;top:14px;bottom:18px;width:0;border-left:1.5px dashed ${RED}}
        .viz-g-ms em{position:absolute;bottom:-17px;transform:translateX(-50%);white-space:nowrap;font-style:normal;font-size:10.5px;color:${RED}}
        .viz-g-row{display:grid;grid-template-columns:38% 1fr;align-items:center;gap:0;font-size:clamp(10px,.85vw,11.5px);color:${BODY};min-height:18px}
        .viz-g-k{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-right:8px}
        .viz-g-track{position:relative;height:9px}
        .viz-g-bar{position:absolute;top:0;bottom:0;border-radius:4px;box-shadow:0 0 0 1px #fbf8f2}
        .fb-metrics{display:flex;flex-direction:column;gap:8px;overflow:hidden}
        .fb-metric{display:grid;grid-template-columns:auto 1fr;gap:10px;padding-top:7px;border-top:1px solid ${LINE}}
        .fb-metric-n{font-size:12px;font-weight:600;color:${RED};padding-top:2px}
        .fb-metric-st{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:${MUTE}}
        .fb-metric b{display:block;font-size:clamp(12.5px,1vw,14px);line-height:1.3;color:${INK}}
        .fb-metric p{margin:2px 0 0;font-size:clamp(11px,.85vw,12.5px);line-height:1.4;color:${BODY}}
        @media (max-width:560px){.viz-row{grid-template-columns:1fr;gap:4px}.viz-dots-head,.viz-dot-row{grid-template-columns:1fr repeat(3, 44px)}}
        @media (max-width:980px){.mvs-sum-rows{grid-template-columns:1fr}.mvs-hero::before{background:linear-gradient(0deg, rgba(120,8,12,.95) 0%, rgba(150,10,16,.8) 55%, rgba(0,0,0,.1) 100%)}.mvs-facts,.mvs-stats,.g4{grid-template-columns:repeat(2,minmax(0,1fr))}.g3{grid-template-columns:repeat(2,minmax(0,1fr))}.mvs-steps{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media (max-width:560px){.mvs-facts,.mvs-stats,.g2,.g3,.g4,.mvs-steps{grid-template-columns:1fr}.mvs-chips{border-radius:16px}}
      `),
      h('div', {className:'mvs-in'},
        h('header', {className:'mvs-hero', role:'img', 'aria-label':'The What It Takes to Move campaign poster on a wall', style:{backgroundImage:`url(${__R('assets/web/assets/ma/ma-poster-wall-web.webp')})`}},
          h('div', null, h('div', {className:'tag'}, 'Public safety · Service design · MA, UAL'),
            h('h1', null, 'Making safety everyone’s job, not just hers.'),
            h('p', null, 'A card game that brings the norms behind harassment to the family table, so teenagers can unlearn what adults defend.'))),
        h('div', {className:'mvs-title'},
          h('div', {className:'mvs-eye'}, h('span', null, 'Case study 01'), ' · UAL London College of Communication'),
          h('h2', null, 'What It Takes to Move'),
          h('p', {className:'mvs-lede', style:{margin:0}}, c.summary),
          h('dl', {className:'mvs-facts'},
            ...[['Context', 'MA Design Management, UAL London College of Communication'], ['My role', 'Researcher and designer, from framing to testing'], ['Methods', 'Focus groups, audio diaries, expert interviews, prototyping, user testing'], ['Timeline', '11 months · 2025–26']]
              .map(([k, v]) => h('div', {key:k}, h('dt', null, k), h('dd', null, v))))),
        h('div', {className:'mvs-sum'},
          h('div', {className:'mvs-sum-rows'},
            h('div', null, h('h3', null, 'The problem'), h('p', null, 'Safety in Delhi’s public transport is treated as a woman’s job. She changes routes, clothes and timings, while the norms behind the risk go unchallenged.')),
            h('div', null, h('h3', null, 'What I did'), h('p', null, 'Researched with women and experts in India and the UK, moved the problem to where norms are learned, and designed The Script: a card game for families and friend groups.')),
            h('div', null, h('h3', null, 'The result'), h('p', null, 'In testing, kids named stereotypes aloud and picked the game up fastest. Women carried the conversation home, and mixed-age groups talked most.'))),
          h('div', {className:'mvs-stats'}, h('div', {className:'mvs-stat dark'}, h('b', null, '95%'), h('span', null, 'of women in Delhi say fear of harassment limits how they travel'), waffle(95, 100)), stat('7', 'women in focus groups'), stat('7', 'expert interviews, 4 in India and 3 in the UK'), stat('2', 'editions of the game, tested with families and friend groups'))),
        h('nav', {className:'mvs-chips', 'aria-label':'Chapters'},
          ...[['context','Context'],['research','Research'],['insight','Insight'],['script','The Script'],['testing','Testing'],['plan','The plan'],['reflect','Looking back']].map(([id, k]) => h('a', {key:id, href:'#mvs-' + id, onClick:e => { e.preventDefault(); const el = document.getElementById('mvs-' + id); el && el.scrollIntoView({behavior:'smooth', block:'start'}); }}, k))),
        chap('context', '01', 'Context and users', S('The brief').h || 'Safety is treated as a woman’s job.', S('The brief').p,
          h('div', {className:'mvs-grid g4'}, ...(c.voices || []).map(v => card([h('div', {className:'mvs-k'}, v.theme), h('p', {className:'mvs-q'}, '“' + v.prompt + '”'), h('div', {className:'mvs-who'}, v.who + ', audio diary')])))),
        chap('research', '02', 'Research', 'Focus groups, audio diaries and experts.', S('Research').p,
          h('div', {className:'mvs-grid g3', style:{marginBottom:16}},
            ...[['assets/web/assets/focus-group.webp', 'Focus group with women from Delhi'], ['assets/web/assets/ma/expert-interview.webp', 'Expert interview'], ['assets/web/assets/ma/exhibit-visitor-hq.webp', 'A visitor answering a prompt at the UAL exhibition']]
              .map(([src, k]) => h('figure', {key:src, style:{margin:0}}, h('div', {className:'mvs-ph', style:{aspectRatio:'4/3'}}, img(src, k)), h('figcaption', {className:'mvs-who'}, k)))),
          h('div', {style:{marginBottom:24}}, bars([['Women in focus groups', 7], ['Audio diaries of journeys', 4], ['Expert interviews, India', 4], ['Expert interviews, UK', 3]], 8, 'Who I heard from (people and diaries)')),
          h('div', {className:'mvs-grid g3'}, ...experts.map(([w, r, q]) => card([h('p', {className:'mvs-q', style:{marginTop:0}}, '“' + q + '”'), h('div', {className:'mvs-who'}, w + ' · ' + r)])))),
        chap('insight', '03', 'Insight', S('Insights').h ? S('Insights').h.replace(' .', '.') : 'Every path led back to how men behave and are raised.', S('Insights').p,
          h('div', {className:'mvs-grid g2'},
            h('div', {className:'mvs-callout'}, h('h3', null, 'The reframe: ' + (S('Reframe').h || '')), h('p', null, S('Reframe').p)),
            h('div', {className:'mvs-callout'}, h('h3', null, 'The direction: ' + (S('Direction').h || '')), h('p', null, S('Direction').p)))),
        chap('script', '04', 'The product', O.h || 'The Script, a card game in two editions.', O.p,
          h('div', {className:'mvs-grid g3'}, ...(O.items || []).slice(0, 6).map(it => h('figure', {key:it.k, style:{margin:0}},
            h('div', {className:'mvs-ph', style:{aspectRatio:'4/3'}}, img(it.src, it.k)), h('figcaption', {className:'mvs-who'}, h('b', {style:{color:INK}}, it.k), ' · ', it.d)))),
          h('ol', {className:'mvs-steps', 'aria-label':'How a round works'}, ...play.map(([k, d]) => h('li', {key:k}, h('b', null, k), d)))),
        chap('testing', '05', 'Testing', T.h || 'What testing showed.', T.p,
          h('div', {style:{marginBottom:24}}, dots([
            ['Kids', 2, 'More willing to name stereotypes aloud, and picked up the mechanics faster.'],
            ['Women', 2, 'High engagement; carried the conversation home.'],
            ['Mixed-age groups', 2, 'Richer discussion than single-generation tables.'],
            ['Boys with boys', 2, 'More open and less guarded than in mixed-gender groups.'],
            ['Adults', 1, 'Softened answers or slipped into teaching mode.'],
            ['Older men', 0, 'Limited engagement, as expected: the game targets younger boys.']],
            'Observed engagement in playtests', 'Qualitative: based on facilitator observation across family, friend-group and mixed-age tables, not a survey score.')),
          h('div', {className:'mvs-grid g3', style:{marginBottom:16}}, ...(T.findings || []).map(f => card([h('div', {className:'mvs-k'}, f.k), h('p', {style:{margin:'8px 0 0', lineHeight:1.5, color:BODY}}, f.v)]))),
          h('div', {className:'mvs-grid g2'}, ...(T.imgs || []).map(m => h('div', {key:m.src, className:'mvs-ph', style:{aspectRatio:'16/10'}}, img(m.src, m.k))))),
        chap('plan', '06', 'The plan', 'A six-year plan, in a booklet.', 'The game starts the conversation; this plan keeps it going. Flip through the booklet: tap the pages, use the buttons, or the arrow keys.',
          h(Component.FlipBook, {title:'Six-year behaviour-change plan booklet', pages:book})),
        chap('reflect', '07', 'Looking back', 'What worked, and what comes next.', null,
          h('div', {className:'mvs-grid g3'},
            card([h('div', {className:'mvs-k'}, 'What worked'), h('p', {style:{margin:'8px 0 0', lineHeight:1.55, color:BODY}}, 'Play lowered the stakes. People named stereotypes in a game that they would not name in a lecture.')]),
            card([h('div', {className:'mvs-k'}, 'What I learned'), h('p', {style:{margin:'8px 0 0', lineHeight:1.55, color:BODY}}, S('Reflection').p)]),
            card([h('div', {className:'mvs-k', style:{color:'#fff'}}, 'Next'), h('p', {style:{margin:'8px 0 0', lineHeight:1.55, color:'#fff'}}, 'An oral and picture-led deck for low-literacy players, then pilots with schools and NGOs alongside the family edition.')], {background:RED, color:'#fff'}))),
        p.next || null));
  };

  static ScriptCard = function ScriptCard(p) {
    // Playable card from The Script (What It Takes to Move). Real prompts and
    // answers from the two editions. Tap: back -> prompt -> answer -> next edition.
    const h = React.createElement;
    // Family Edition deck, transcribed from the MA appendix (Deck 1: black prompt cards, white answer cards).
    const FAMILY = {ed:'Family Edition', bg:'#0c2410', fg:'#f2f7ef', stripe:'#9be34a', ans:'#e9f5e4', ansFg:'#0c2410',
      qs:['My son gets a curfew of midnight, my daughter gets 8pm, and if I’m honest the real reason is ____.',
        'I never taught my son to cook or do laundry because ____.',
        'The real reason I started saving for my daughter’s wedding before I ever asked about her career is ____.',
        'I told my son “don’t cry, be a man” because that’s exactly what my father told me, and I never stopped to ask ____.',
        'My wife quit her job after marriage and I didn’t, and the honest reason is ____.',
        'I expect my daughter-in-law to adjust to this house more than I expect my son to, because ____.',
        'The first thing I ask my daughter after dark is what she was wearing, and the real reason I ask that first is ____.',
        'If my son told me he wanted to be a stay-at-home father, my first thought honestly would be ____.',
        'I’ve watched my mother serve everyone before herself my whole life, and I never once asked her ____.',
        '“Log kya kahenge” still runs this house, and if I’m honest, the actual fear underneath it is ____.',
        'I never told my son it was okay to fail at something, because I was taught ____.',
        'When my daughter said she wanted a love marriage instead of an arranged one, my first reaction came from ____.',
        'I’ve never actually asked my own father why ____.',
        'If my son earned less than his wife, the thing I’d actually be worried about is ____.'],
      as:['Whatever Dada said in 1987 and nobody’s allowed to question since', 'My mother’s silence, which everyone mistakes for peace',
        'A rule that only exists because my brother is a boy', '“It’s different for girls.” No further explanation given.',
        'Fear of the building WhatsApp group finding out', 'Something Chachi said once that became law', 'My dad’s ego wearing a “tradition” costume',
        'The same fight my parents have never actually resolved', 'Whatever keeps my mother small and my father comfortable',
        'A boundary that appeared the day I turned 13', 'My grandmother’s trauma, repackaged as “advice”', 'The thing nobody in this house has therapy for',
        'My dad’s fear of being questioned, dressed up as “respect”', 'Something that would never survive one honest conversation',
        'The wedding my parents are already planning that I never agreed to', 'My mother’s dreams, quietly buried under mine',
        'A double standard nobody in this house will admit out loud', 'Whatever the relatives decided was “shameful” this year',
        'My father’s silence when it should have been an apology', 'The comparison to my cousin that never actually stops',
        'A rule that exists purely so nobody has to have a hard conversation', 'My mother apologising for something that was never her fault',
        'Something my dad still hasn’t forgiven his own father for', 'The gap between what my parents preach and what they actually do']};
    const FRIENDS = {ed:'Friend Group Edition', bg:'#16161a', fg:'#f4f4f4', stripe:'#e4405f', ans:'#ececec', ansFg:'#16161a',
      qs:['I laughed along when my friend made that comment about his girlfriend instead of saying anything, because ____.'],
      as:['Something I laughed at that I actually didn’t find funny']};
    const pick = arr => arr[Math.floor(Math.random() * arr.length)];
    const deal = n => { const d = n % 3 === 2 ? FRIENDS : FAMILY; return {...d, q:pick(d.qs), a:pick(d.as)}; };
    const [round, setRound] = React.useState(() => ({n:0, ...FAMILY, q:FAMILY.qs[0], a:FAMILY.as[3]}));
    const [st, setSt] = React.useState(0);
    const r = round;
    const next = () => { if (st < 2) setSt(st + 1); else { setRound(x => ({n:x.n + 1, ...deal(x.n + 1)})); setSt(1); } };
    const label = st === 0 ? 'Tap to draw a card' : st === 1 ? 'Tap to play an answer' : 'Tap to draw again';
    const stripes = col => h('svg', {viewBox:'0 0 100 140', preserveAspectRatio:'none', 'aria-hidden':true, style:{position:'absolute', inset:0, width:'100%', height:'100%'}},
      h('path', {d:'M-10 18 C 20 6 45 30 70 14 S 110 4 120 10', stroke:col, strokeWidth:9, fill:'none', strokeLinecap:'round', opacity:.9}),
      h('path', {d:'M-10 128 C 25 110 50 140 80 118 S 112 112 120 120', stroke:col, strokeWidth:9, fill:'none', strokeLinecap:'round', opacity:.9}));
    const logo = (col, size) => h('span', {style:{fontFamily:"'Libre Caslon Text', Georgia, serif", fontStyle:'italic', fontSize:size, color:col, lineHeight:1}}, 'The Script');
    return h('div', {className:'yj-sc ' + (p.className || '')},
      h('button', {className:'yj-sc-deck', onClick:next, 'aria-label':'Play The Script. ' + label + '.', 'aria-live':'polite'},
        // answer card (slides in on step 2)
        h('span', {className:'yj-sc-card yj-sc-ans' + (st === 2 ? ' on' : ''), style:{background:r.ans, color:r.ansFg}, 'aria-hidden':st !== 2},
          stripes(r.stripe + '55'), h('span', {className:'yj-sc-txt'}, r.a), h('span', {className:'yj-sc-mark'}, logo(r.ansFg, 11))),
        // main card: back <-> prompt
        h('span', {className:'yj-sc-card yj-sc-main' + (st > 0 ? ' flip' : '')},
          h('span', {className:'yj-sc-face yj-sc-back', style:{background:r.bg}}, stripes(r.stripe), logo(r.fg, 'clamp(22px, 1.9vw, 30px)')),
          h('span', {className:'yj-sc-face yj-sc-front', style:{background:r.bg, color:r.fg}}, stripes(r.stripe + '66'), h('span', {className:'yj-sc-txt'}, r.q), h('span', {className:'yj-sc-mark'}, logo(r.fg, 11))))),
      h('span', {className:'yj-sc-cap'}, h('b', null, st === 0 ? 'Play The Script' : r.ed), ' · ', label),
      st > 0 ? h('span', {key:'ct', className:'yj-sc-cnt'}, (r.n + 1) + (r.n ? ' rounds' : ' round') + ' · ' + (FAMILY.qs.length + FRIENDS.qs.length) + ' prompts, ' + (FAMILY.as.length + FRIENDS.as.length) + ' answers in this deck') : null,
      h('span', {className:'yj-sc-sr', 'aria-live':'polite'}, st === 1 ? 'Prompt: ' + r.q : st === 2 ? 'Answer: ' + r.a : ''));
  };

  static BentoHome = function BentoHome(p) {
    // The landing page as one screen-filling bento grid (no scroll, no nav
    // bar on desktop). One visual system throughout:
    //   colour  — yellow (the one colour block), black, white, grey
    //   type    — Schibsted Grotesk, weights 600/400, sizes L / M / S
    //   stickers — two, both black line drawings on white die-cut stickers
    const h = React.createElement;
    const YEL = '#ffd60a', INK = '#111111', PAPER = '#ffffff', GREY = '#6b6b6b', LINE = '#e3e3e0', BG = '#f6f6f3';
    const F = "'Schibsted Grotesk', sans-serif";
    const M = 'clamp(16px, min(1.4vw, 2.5vh), 21px)', S = 14;
    const label = (txt, extra) => h('span', {style:{fontSize:S, fontWeight:400, color:GREY, ...extra}}, txt);
    const title = (txt, extra) => h('span', {style:{fontSize:M, fontWeight:600, letterSpacing:'-0.02em', lineHeight:1.15, ...extra}}, txt);
    const arrow = h('span', {className:'yj-bt-arrow', 'aria-hidden':true, style:{fontSize:18, lineHeight:1}}, '→');

    const tile = (area, props, ...kids) => {
      const {yellow, onClick, href, label:aria, style, className:cn, ...rest} = props || {};
      const tag = href ? 'a' : onClick ? 'button' : 'div';
      return h(tag, {...rest, className:'yj-bt yj-a-' + area + (cn ? ' ' + cn : '') + (onClick || href ? ' yj-bt-go' : ''), 'aria-label':aria, onClick, href,
        ...(href ? {target:'_blank', rel:'noopener'} : {}),
        style:{boxSizing:'border-box', border:0, margin:0, textAlign:'left', textDecoration:'none', font:'inherit', width:'100%', height:'100%', position:'relative', overflow:'hidden', borderRadius:18,
          background:yellow ? YEL : PAPER, color:INK, padding:'clamp(18px, 1.8vw, 30px)', display:'flex', flexDirection:'column', justifyContent:'space-between',
          cursor:onClick || href ? 'pointer' : 'default', fontFamily:F, minWidth:0, minHeight:0, ...style}}, ...kids);
    };

    // Recommendations rotate every 5s; pause on hover, stop under reduced motion.
    const RECS = [
      {img:__R('assets/web/assets/recs/siddhartha.webp'), who:'Siddhartha Gigoo', role:'Head of TCS Interactive', q:'An exceptional designer. Continues to make us proud.'},
      {img:__R('assets/recs/arpit.jpeg'), who:'Arpit Vyas', role:'Product Experience Strategist', q:'A thoughtful design mindset… she took full ownership and delivered.'},
      {img:__R('assets/recs/geet.jpeg'), who:'Geetanjali Chuttani', role:'Associate Design Director, UX', q:'Her communication skills are outstanding.'}];
    const [ri, setRi] = React.useState(0), hold = React.useRef(false);
    React.useEffect(() => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      return undefined; // quotes change only when a dot is clicked
    }, []);
    // Haptics: a short buzz on taps where the browser supports it.
    React.useEffect(() => {
      if (!('vibrate' in navigator)) return;
      const tap = e => { if (e.pointerType !== 'mouse' && e.target.closest && e.target.closest('button, a')) { try { navigator.vibrate(10); } catch (_) {} } };
      document.addEventListener('pointerdown', tap, {passive:true});
      return () => document.removeEventListener('pointerdown', tap);
    }, []);
    const r = RECS[ri];
    // Typewriter role line (static under reduced motion).
    const ROLES = ['product designer', 'service designer', 'UX researcher', 'design strategist'];
    const [typed, setTyped] = React.useState(ROLES[0]);
    React.useEffect(() => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      let ri2 = 0, i = ROLES[0].length, del = true, t;
      const step = () => {
        const w = ROLES[ri2];
        if (del) { i--; if (i <= 0) { del = false; ri2 = (ri2 + 1) % ROLES.length; } }
        else { i++; if (i >= ROLES[ri2].length) { del = true; setTyped(ROLES[ri2]); t = setTimeout(step, 2200); return; } }
        setTyped(ROLES[ri2].slice(0, Math.max(0, i)) || (del ? w.slice(0, 0) : ''));
        t = setTimeout(step, del ? 45 : 85);
      };
      t = setTimeout(step, 2600);
      return () => clearTimeout(t);
    }, []);
    // Live London time, so recruiters can see the time zone at a glance.
    const london = () => { const d = new Date(); const tm = d.toLocaleTimeString('en-GB', {timeZone:'Europe/London', hour:'2-digit', minute:'2-digit'}); const tz = (d.toLocaleTimeString('en-GB', {timeZone:'Europe/London', timeZoneName:'short'}).split(' ').pop()) || 'UK'; return tm + ' ' + tz; };
    const [now, setNow] = React.useState(london());
    React.useEffect(() => { const t = setInterval(() => setNow(london()), 20000); return () => clearInterval(t); }, []);
    // Contact: copy email with feedback.
    const EMAIL = 'yashvi.jain.yj@gmail.com';
    const [copied, setCopied] = React.useState(false);
    const copyEmail = async () => { try { await navigator.clipboard.writeText(EMAIL); } catch (_) { const ta = document.createElement('textarea'); ta.value = EMAIL; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (_) {} ta.remove(); } setCopied(true); setTimeout(() => setCopied(false), 1800); };
    // Depth: tiles tilt toward the pointer in 3D (CSS perspective), with a
    // shadow that shifts opposite the tilt. Mouse only; off for reduced motion.
    const grid = React.useRef(null);
    // Fit: if a tile's content overflows at this screen size, drop its
    // optional extras ([data-drop]) one at a time until it fits.
    React.useEffect(() => {
      const el = grid.current; if (!el) return;
      const fit = () => el.querySelectorAll('[data-fit]').forEach(t => {
        const drops = [...t.querySelectorAll('[data-drop]')];
        drops.forEach(d => { d.hidden = false; });
        const over = () => { const tb = t.getBoundingClientRect().bottom - 14; return [...t.children].filter(c => !c.classList.contains('yj-g')).some(c => c.getBoundingClientRect().bottom > tb + 0.5) || t.scrollHeight > t.clientHeight + 1; };
        for (const d of drops) { if (!over()) break; d.hidden = true; }
      });
      fit(); const ro = new ResizeObserver(fit); ro.observe(el);
      document.fonts && document.fonts.ready.then(fit);
      return () => ro.disconnect();
    }, []);
    React.useEffect(() => {
      const el = grid.current;
      if (!el || !matchMedia('(hover:hover) and (pointer:fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      let cur = null;
      const reset = t => { if (t) { t.style.setProperty('--rx', '0deg'); t.style.setProperty('--ry', '0deg'); t.style.setProperty('--sx', '0px'); t.style.setProperty('--sy', '0px'); t.classList.remove('yj-tilt'); } };
      const move = e => {
        const t = e.target.closest && e.target.closest('.yj-bt');
        if (t !== cur) { reset(cur); cur = t; }
        if (!t) return;
        const r0 = t.getBoundingClientRect(), x = (e.clientX - r0.left) / r0.width - .5, y = (e.clientY - r0.top) / r0.height - .5;
        const k = Math.min(1, 380 / Math.max(r0.width, r0.height)) * 7;
        t.classList.add('yj-tilt');
        t.style.setProperty('--rx', (-y * k).toFixed(2) + 'deg'); t.style.setProperty('--ry', (x * k).toFixed(2) + 'deg');
        t.style.setProperty('--sx', (-x * 18).toFixed(1) + 'px'); t.style.setProperty('--sy', (14 - y * 10).toFixed(1) + 'px');
      };
      const leave = () => { reset(cur); cur = null; };
      el.addEventListener('pointermove', move); el.addEventListener('pointerleave', leave);
      return () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); };
    }, []);

    const Sticker = Component.YjSticker;

    // All case studies in one tile; a small cover thumbnail follows the
    // pointer on hover (hover-capable devices only).
    const list = (p.projects || []).filter(Boolean);
    const top = ['ava', 'move', 'askbeta'].map(id => list.find(c => c.id === id)).filter(Boolean);
    const rest = list.filter(c => !top.includes(c));
    const thumb = React.useRef(null), [hv, setHv] = React.useState(-1);
    const follow = e => { const t = thumb.current; if (t) t.style.transform = `translate(${e.clientX + 28}px, ${e.clientY - 150}px)`; };
    const projects = tile('pj', {className:'yj-bt-p', style:{gap:6}},
      label('Selected work'),
      h('div', {style:{flex:1, display:'flex', flexDirection:'column', marginTop:8}, onMouseMove:follow, onMouseLeave:() => setHv(-1)},
        top.map((c, i) => h('button', {key:c.id, onClick:c.open, onMouseEnter:e => { follow(e); setHv(i); }, className:'yj-pj-row',
            'aria-label':'Open case study: ' + c.short,
            style:{all:'unset', boxSizing:'border-box', cursor:'pointer', flex:1, display:'grid', gridTemplateColumns:'auto minmax(0,1fr) auto', columnGap:14, alignItems:'center', padding:'8px 0', borderBottom:'1px solid ' + LINE, fontFamily:F}},
          h('span', {className:'yj-pj-pic', 'aria-hidden':true, style:c.id === 'askbeta' ? {background:'#f6b93b', display:'grid', placeItems:'center'} : null}, c.id === 'askbeta' ? h('img', {src:__R('assets/askbeta-sun.svg'), alt:'', style:{width:'62%', height:'auto'}}) : (c.pic || null)),
          h('span', {style:{display:'flex', flexDirection:'column', gap:3, minWidth:0}},
            title(h('span', {className:'yj-pj-t'}, c.short), {minWidth:0}),
            h('span', {className:'yj-pj-sub'}, [c.origin, c.years, c.stat].filter(Boolean).join(' / '))),
          h('span', {className:'yj-pj-out'}, 'Read more', h('span', {className:'yj-pj-arr', 'aria-hidden':true}, ' →')))),
        h('button', {onClick:p.onWork, onMouseEnter:() => setHv(-1), className:'yj-pj-row yj-pj-all', 'aria-label':'View all ' + list.length + ' projects',
            style:{all:'unset', boxSizing:'border-box', cursor:'pointer', flex:'none', display:'flex', alignItems:'center', justifyContent:'space-between', gap:16, padding:'12px 0 2px', fontFamily:F}},
          h('span', {style:{fontSize:S, fontWeight:600, minWidth:0}}, h('span', {className:'yj-pj-t'}, 'View all work'), h('span', {className:'yj-pj-n'}, list.length)),
          h('span', {className:'yj-pj-meta', style:{fontSize:S, color:GREY, flex:'none', whiteSpace:'nowrap'}}, rest.map(c => c.short.replace(/ — .*/, '')).join(' / '), ' →'))));

    // Currently: small, human, easy to update. Tulip season counts down live.
    const tulipDays = (() => { const n = new Date(), y = n.getMonth() > 3 ? n.getFullYear() + 1 : n.getFullYear(); const t = new Date(y, 3, 1); return Math.max(0, Math.ceil((t - n) / 864e5)); })();
    const CURRENTLY = [['Roles', 'Product & service design'], ['Sectors', 'Health, pharma, public services'], ['Based in', 'London, UK']];
    const currently = tile('cu', {style:{gap:12, justifyContent:'flex-start'}},
      label('Looking for'),
      h('span', {className:'yj-cu-l'},
        ...CURRENTLY.flatMap(([k, v]) => [h('span', {key:k + 'k', style:{fontSize:13, color:GREY}}, k), h('span', {key:k + 'v', style:{fontSize:15, fontWeight:600, lineHeight:1.3}}, v)])));
    // On the turntable: one original, generated track per mood. Click the record or Play.
    const [flipAuto, setFlipAuto] = React.useState(false), [flipHov, setFlipHov] = React.useState(false);
    // Opens on the name, flips once to the details after 4 s and stays. Hovering shows the name again.
    React.useEffect(() => { const t = setTimeout(() => setFlipAuto(true), 4000); return () => clearTimeout(t); }, []);
    const showBack = flipAuto && !flipHov;
    const [turns, setTurns] = React.useState(0), lastBack = React.useRef(showBack);
    React.useEffect(() => { if (lastBack.current !== showBack) { lastBack.current = showBack; setTurns(n => n + 1); } }, [showBack]);
    const SLATS = 14;
    const MOODS = Component.Music.moods;
    const [mood, setMood] = React.useState('Happy'), [playing, setPlaying] = React.useState(false);
    React.useEffect(() => () => Component.Music.stop(), []);
    const [vnFx, setVnFx] = React.useState(false);
    const togglePlay = () => { if (playing) { Component.Music.stop(); setPlaying(false); } else if (Component.Music.play(mood)) { setVnFx(true); setPlaying(true); } };
    // Impact first (proof in prime space), with the turntable as a compact player strip.
    const IMPACT = [['70%', 'fewer errors', 'AVA, for J&J'], ['1 system', 'behind pfizer.com', 'Pfizer, via TCS'], ['4+ yrs', 'health & pharma', 'at TCS, then MA at UAL']];
    const vinyl = tile('vn', {style:{gap:12, justifyContent:'space-between'}},
      h('span', {style:{display:'flex', flexDirection:'column', gap:10, minWidth:0}},
        label('Impact'),
        h('span', {className:'yj-imp'}, IMPACT.map(([n, k, w]) => h('span', {key:n, className:'yj-imp-row'},
          h('b', null, n), h('span', null, h('span', {className:'yj-imp-k'}, k), h('span', {className:'yj-imp-w'}, w)))))),
      h('span', {className:'yj-vn-strip' + (playing ? ' on' : '')},
        vnFx ? h('span', {className:'yj-vn-fx yj-g' + (playing ? ' on' : ''), 'aria-hidden':true},
          h(Component.Glow, {react:true, base:[1, .84, .04], mid:[.97, .95, .86], core:[.17, .23, 1], cx:.2, cy:.5, cyNarrow:.5, rad:1.2, radNarrow:1.2})) : null,
        h('span', {className:'yj-vn-mini', onClick:togglePlay, title:playing ? 'Pause' : 'Play'},
          h('span', {className:'yj-vn-spin' + (playing ? ' on' : '')},
            h('img', {src:__R('assets/vinyl.webp'), alt:'', className:'yj-vn-rec', width:640, height:640})),
          h('span', {className:'yj-vn-sheen', 'aria-hidden':true})),
        h('span', {style:{display:'flex', flexDirection:'column', gap:6, minWidth:0, flex:1, position:'relative'}},
          h('span', {style:{display:'flex', alignItems:'center', gap:8, minWidth:0}},
            h('button', {type:'button', className:'yj-vn-play' + (playing ? ' on' : ''), onClick:togglePlay, 'aria-pressed':playing, 'aria-label':playing ? 'Pause the ' + mood + ' track' : 'Play the ' + mood.toLowerCase() + ' track'}, playing ? '❚❚' : '▶'),
            h('span', {'aria-live':'polite', style:{minWidth:0, fontSize:13, fontWeight:600, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}, playing ? 'Now playing · ' + mood : 'On the turntable')),
          h('label', {className:'yj-vn-sel'}, h('span', {className:'yj-sr'}, 'Mood'),
            h('select', {value:mood, onChange:e => { const m = e.target.value; setMood(m); if (playing) Component.Music.play(m); }}, MOODS.map(m => h('option', {key:m, value:m}, m)))))));

    // Portrait tile: a slow Ken Burns slideshow of real project imagery,
    // starting on the portrait. Black and white keeps it in the system.
    const SLIDES = [
      {src:'assets/web/assets/yashvi.webp', pos:'50% 28%', cap:'Yashvi Jain'},
      {src:'assets/web/assets/ma/game-family.webp', cap:'Family playtest · What It Takes to Move'},
      {src:'assets/web/assets/ma/exhibit-visitor-hq.webp', cap:'Exhibition · What It Takes to Move'},
      {src:'assets/web/assets/cray/test-kanika.webp', cap:'Usability testing · CRAY'},
      {src:'assets/web/assets/ma/expert-interview.webp', cap:'Expert interview · What It Takes to Move'},
      {src:'assets/web/assets/ma/testing-1.webp', cap:'Prototype testing · What It Takes to Move'}];
    const [si, setSi] = React.useState(0);
    const phHold = React.useRef(false);
    React.useEffect(() => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const t = setInterval(() => { if (!document.hidden && !phHold.current) setSi(i => (i + 1) % SLIDES.length); }, 4000);
      return () => clearInterval(t);
    }, []);
    const slideshow = tile('ph', {label:'Photo ' + (si + 1) + ' of ' + SLIDES.length + ': ' + SLIDES[si].cap + '. Show next photo', onClick:() => setSi(i => (i + 1) % SLIDES.length),
      onMouseEnter:() => { phHold.current = true; }, onMouseLeave:() => { phHold.current = false; }, onFocus:() => { phHold.current = true; }, onBlur:() => { phHold.current = false; }, style:{padding:0, background:'#e6e6e3'}},
      SLIDES.map((sl, i) => h('span', {key:sl.src, className:'yj-sl' + (i === si ? ' yj-sl-on' : ''), 'aria-hidden':true,
        style:{position:'absolute', inset:0, background:`url(${__R(sl.src)}) ${sl.pos || '50% 50%'}/cover no-repeat`, filter:'grayscale(1)'}})),
      h('span', {key:'cap' + si, className:'yj-bt-q', style:{position:'absolute', left:14, bottom:14, right:14, display:'flex', justifyContent:'space-between', alignItems:'center', gap:8, fontSize:13, fontWeight:600}},
        h('span', {style:{background:PAPER, color:INK, padding:'5px 10px', borderRadius:999, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}, SLIDES[si].cap),
        h('span', {style:{background:PAPER, color:INK, padding:'5px 10px', borderRadius:999, flex:'none'}}, (si + 1) + '/' + SLIDES.length + '  →')));

    // Companies worked with: one black logo strip.
    // [src, name, height in px] — heights balance each logo's visual weight
    const LOGOS = [['assets/logos/tcs-mark.png', 'Tata Consultancy Services', 22], ['assets/logos/jnj.svg', 'Johnson & Johnson', 14], ['assets/logos/pfizer-white.svg', 'Pfizer', 34],
      ['assets/logos/britishcouncil-white.png', 'British Council', 26], ['assets/logos/ime.png', 'Indian Music Experience Museum', 34]];
    const logos = tile('lg', {style:{flexDirection:'row', alignItems:'center', gap:'clamp(16px, 3vw, 56px)', padding:'0 clamp(18px, 1.8vw, 30px)'}},
      label('Worked with', {flex:'none', whiteSpace:'nowrap'}),
      h('span', {className:'yj-lg-view', style:{flex:1, minWidth:0, overflow:'hidden'}},
        h('span', {className:'yj-lg-track'}, [0, 1].map(k => h('span', {key:k, className:'yj-lg-set', 'aria-hidden':k === 1 ? true : undefined},
          LOGOS.map(([src, alt, ht]) => h('img', {key:src, src:__R(src), alt:k ? '' : alt, className:'yj-logo', style:{height:`calc(${ht}px * var(--lgs, 1))`, width:'auto', filter:'brightness(0)', opacity:.8}})))))));

    // Dashboard ↔ Projects, switched in place from the floating dock.
    const view = p.view || 'dash';
    const [cat, setCat] = React.useState('All');
    const cats = ['All', ...Array.from(new Set(list.map(c => c.cat).filter(Boolean)))];
    const shown = list.filter(c => cat === 'All' || c.cat === cat);
    const pill = React.useRef(null), [pv, setPv] = React.useState(false);
    const pillMove = e => { const t = pill.current; if (t) t.style.transform = `translate(${e.clientX + 14}px, ${e.clientY + 14}px)`; };
    const projectsView = h('div', {className:'yj-pv', role:'region', 'aria-label':'Selected work'},
      h('div', {className:'yj-pv-head'},
        h('h2', {style:{margin:0, fontFamily:F, fontWeight:600, fontSize:'clamp(32px, 3.4vw, 56px)', letterSpacing:'-0.04em', lineHeight:1}}, 'Selected work'),
        h('div', {style:{display:'flex', gap:8, flexWrap:'wrap'}}, cats.map(k => h('button', {key:k, onClick:() => setCat(k), 'aria-pressed':cat === k, className:'yj-chip' + (cat === k ? ' yj-chip-on' : '')},
          k, h('span', {className:'yj-chip-n'}, k === 'All' ? list.length : list.filter(c => c.cat === k).length))),
          h('button', {className:'yj-chip', onClick:() => { const el = document.getElementById('yj-play'); el && el.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'start'}); }}, 'Play ↓'))),
      h('div', {className:'yj-pv-grid', onMouseMove:pillMove, onMouseLeave:() => setPv(false)},
        shown.map((c, i) => h('button', {key:c.id, onClick:c.open, onMouseEnter:e => { pillMove(e); setPv(true); }, className:'yj-pv-card yj-pv-s' + (i % 6), 'aria-label':'Open case study: ' + c.short},
          h('span', {className:'yj-pv-cover', style:{background:c.pic ? '#e6e6e3' : YEL}}, c.pic || h('span', {style:{position:'absolute', left:18, bottom:14, fontWeight:600, fontSize:34, letterSpacing:'-0.04em'}}, c.short)),
          h('span', {style:{display:'flex', justifyContent:'space-between', gap:12, alignItems:'baseline', padding:'10px 2px 0'}},
            h('span', {style:{fontWeight:600, fontSize:17, letterSpacing:'-0.01em'}}, c.short),
            h('span', {style:{fontSize:13, color:GREY, textAlign:'right'}}, [c.years, c.origin, c.stat || c.cat].filter(Boolean).join(' · ')))))),
      h('section', {id:'yj-play', className:'yj-play', 'aria-labelledby':'yj-play-h'},
        h('div', {className:'yj-play-head'},
          h('h2', {id:'yj-play-h', style:{margin:0, fontFamily:F, fontWeight:600, fontSize:'clamp(28px, 2.8vw, 44px)', letterSpacing:'-0.04em', lineHeight:1}}, 'Play'),
          h('p', {style:{margin:0, fontSize:15, lineHeight:1.5, color:GREY, maxWidth:'46ch'}}, 'Rough, fast, for fun. Where I test ideas without a brief. Some become real work. Most just teach me something.')),
        h('div', {className:'yj-play-grid'}, ...[
          {k:'Zine', t:'The Cost of a Trace', ar:'1.41/1', el:h(Component.Zine), cls:'w2'},
          {k:'Installation', t:'The Cost of a Trace, in the room', n:'Shown at UAL Net Zero', ar:'4/5', el:h(Component.Fade)},
          {k:'Object', t:'3D printed clay pots', ar:'4/5', el:h('img', {src:__R('assets/web/uploads/IMG_2555-frame.webp'), alt:'3D printed clay pot', loading:'lazy'})},
          {k:'Photo', t:'Shroom spotter, field notes', ar:'1/1', el:h('img', {src:__R('assets/web/uploads/IMG_0139.webp'), alt:'Mushrooms spotted on a walk', loading:'lazy'})},
        ].map((it, i) => h('figure', {key:i, className:'yj-play-it ' + (it.cls || '') + ' r' + i},
          h('div', {className:'yj-play-m', style:{aspectRatio:it.ar}}, it.el),
          h('figcaption', null, h('span', {className:'yj-play-k'}, it.k), h('span', {className:'yj-play-t'}, it.t), it.n ? h('span', {className:'yj-play-n'}, it.n) : null))))),
      h('span', {ref:pill, className:'yj-pv-pill', 'aria-hidden':true, style:{opacity:pv ? 1 : 0}}, 'View case study ↗'));

    const navTile = (area, name, hint, onClick, kids) => tile(area, {onClick, label:name}, h('span', {style:{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}, title(name), arrow), label(hint), kids);

    return h(React.Fragment, null, view === 'proj' ? projectsView : null, h('section', {ref:grid, 'aria-label':'Yashvi Jain, product and service designer', className:'yj-bento' + (view === 'proj' ? ' yj-hide' : ''), style:{backgroundColor:BG, backgroundImage:'radial-gradient(circle, #e4e3de 1px, transparent 1.2px)', backgroundSize:'24px 24px', backgroundPosition:'-12px -12px'}},
      h('style', null, `
        .yj-bento{box-sizing:border-box;height:100svh;min-height:660px;padding:28px;display:grid;gap:28px;
          grid-template-columns:repeat(12,minmax(0,1fr));grid-template-rows:repeat(6,minmax(0,1fr)) clamp(48px, 7vh, 76px);
          grid-template-areas:
            "in in in in in in ph ph ph ab ab ab"
            "in in in in in in ph ph ph tk tk tk"
            "in in in in in in ph ph ph tk tk tk"
            "pj pj pj pj pj st st st st vn vn vn"
            "pj pj pj pj pj st st st st vn vn vn"
            "pj pj pj pj pj st st st st vn vn vn"
            "lg lg lg lg lg lg lg lg lg lg lg lg"}
        .yj-a-in{grid-area:in}.yj-a-ph{grid-area:ph}.yj-a-ab{grid-area:ab}.yj-a-tk{grid-area:tk}.yj-a-pj{grid-area:pj}.yj-a-rc{grid-area:rc}.yj-a-cu{grid-area:cu}.yj-a-lg{grid-area:lg}.yj-a-vn{grid-area:vn}
        .yj-a-st{grid-area:st;display:flex;flex-direction:column;gap:clamp(16px, 2.6vh, 28px);min-height:0;min-width:0}
        .yj-a-st > .yj-bt{height:auto !important}.yj-a-st > .yj-a-rc{flex:1;min-height:0}
        .yj-cu-l{display:grid;grid-template-columns:auto 1fr;gap:6px 16px;align-items:baseline}
        .yj-vn-disc{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:4px 0}
        .yj-vn-in{position:relative;height:100%;max-height:100%;aspect-ratio:1;max-width:100%}
        .yj-vn-spin{position:absolute;inset:0;animation:yjVinyl 1.8s linear infinite;animation-play-state:paused;filter:drop-shadow(0 10px 18px rgba(0,0,0,.18))}
        .yj-vn-spin.on{animation-play-state:running}
        .yj-vn-rec{position:absolute;inset:0;width:100%;height:100%}
        .yj-vn-label{position:absolute;left:50%;top:50%;width:30%;height:30%;transform:translate(-50%,-50%);border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:1px;padding:4%;box-sizing:border-box;color:#3a2f22;line-height:1.1;overflow:hidden}
        .yj-vn-label b{font-size:clamp(6px, 0.62vw, 10px);font-weight:600;max-width:100%}
        .yj-vn-label i{font-style:normal;font-size:clamp(5px, 0.5vw, 8px);opacity:.75;max-width:100%}
        .yj-vn-moods{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;margin:0 -2px;padding:0 2px}
        .yj-vn-moods::-webkit-scrollbar{display:none}
        .yj-vn-mood{all:unset;cursor:pointer;flex:none;font-size:12px;padding:4px 10px;border-radius:999px;border:1px solid ${LINE};color:${GREY};background:#fff}
        .yj-vn-mood.on{background:#2B3BFF;border-color:#fff;color:#fff;box-shadow:0 0 0 1px #fff}
        .yj-vn-mood:focus-visible,.yj-vn-step:focus-visible{outline:2px solid ${INK};outline-offset:2px}
        .yj-vn-now{display:flex;align-items:center;gap:8px;min-width:0;background:rgba(255,255,255,.9);border-radius:999px;padding:4px 12px 4px 4px;align-self:flex-start;max-width:100%;box-sizing:border-box}
        .yj-vn-tag{align-self:flex-start;font-size:13px;color:${INK};background:rgba(255,255,255,.9);border-radius:999px;padding:4px 10px}
        .yj-vn-step{all:unset;cursor:pointer;width:24px;height:24px;display:grid;place-items:center;border-radius:50%;border:1px solid ${LINE};font-size:15px;line-height:1;flex:none}
        .yj-vn-step:hover{border-color:${INK}}
        .yj-vn-play{all:unset;cursor:pointer;flex:none;height:28px;min-width:28px;justify-content:center;padding:0 8px;box-sizing:border-box;display:inline-flex;align-items:center;gap:4px;font-size:12px;font-weight:600;border-radius:999px;background:${INK};color:#fff;font-size:11px;line-height:1}
        .yj-vn-play.on{background:#2B3BFF;color:#fff}
        .yj-vn-play:focus-visible{outline:2px solid ${INK};outline-offset:2px}
        .yj-vn-sheen{position:absolute;inset:0;border-radius:50%;pointer-events:none;mix-blend-mode:screen;
          background:conic-gradient(from 20deg, transparent 0deg, rgba(255,255,255,.16) 28deg, transparent 58deg, transparent 180deg, rgba(255,255,255,.12) 208deg, transparent 238deg);
          -webkit-mask:radial-gradient(circle, transparent 0 17%, #000 18% 100%);mask:radial-gradient(circle, transparent 0 17%, #000 18% 100%)}
        @keyframes yjVinyl{to{transform:rotate(360deg)}}
        .yj-vn-form{display:flex;gap:8px;min-width:0}
        .yj-vn-form input{flex:1;min-width:0;box-sizing:border-box;font:inherit;font-size:14px;color:${INK};background:#fff;border:1px solid ${LINE};border-radius:999px;padding:10px 14px;outline:none}
        .yj-vn-form input:focus-visible{border-color:${INK}}
        .yj-vn-go{flex:none;display:inline-flex;align-items:center;font-size:13px;font-weight:600;color:#fff;background:${INK};border-radius:999px;padding:10px 14px;text-decoration:none;white-space:nowrap}
        .yj-vn-go:hover{background:#333}.yj-vn-go:focus-visible{outline:2px solid ${INK};outline-offset:2px}
        @media (prefers-reduced-motion:reduce){.yj-vn-spin{animation-duration:12s}}
        .yj-bt{transform:perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));
          box-shadow:var(--sx,0px) var(--sy,0px) 0 -6px rgba(0,0,0,0), 0 1px 0 rgba(0,0,0,.04);
          transition:background-color 250ms ease,transform 500ms cubic-bezier(.2,.7,.2,1),box-shadow 500ms cubic-bezier(.2,.7,.2,1);will-change:transform}
        .yj-bt.yj-tilt{--sc:1.012;transition:background-color 250ms ease,transform 120ms linear,box-shadow 120ms linear;
          box-shadow:var(--sx,0px) var(--sy,14px) 34px -14px rgba(0,0,0,.28), 0 1px 0 rgba(0,0,0,.04)}
.yj-ab-star{box-shadow:none !important}.yj-bt-go.yj-ab-star:hover{background:transparent !important}
        .yj-spark{flex:none;height:min(100%, 128px);width:auto;aspect-ratio:410/442;fill:${INK};stroke:none;overflow:visible;transition:transform 700ms cubic-bezier(.2,.7,.2,1), fill 300ms ease}
        .yj-ab-star:hover .yj-spark,.yj-ab-star:focus-visible .yj-spark{transform:rotate(90deg) scale(1.06);fill:#2B3BFF}
        @media (max-width:820px){.yj-ab-star{flex-direction:column !important;align-items:flex-start !important;justify-content:center !important;gap:10px !important}.yj-spark{height:72px}}
        @media (prefers-reduced-motion:reduce){.yj-spark{transition:none}.yj-ab-star:hover .yj-spark{transform:none}}
        .yj-bt-go:hover{background:#f3f3f0 !important}
        .yj-bt-arrow{transition:transform 250ms cubic-bezier(.2,.7,.2,1)}
        .yj-bt-go:hover .yj-bt-arrow{transform:translateX(4px)}
        .yj-bt-go:active{--sc:.985}
        .yj-bento :focus-visible{outline:2px solid ${INK};outline-offset:3px}
        .yj-link{text-decoration:underline;text-underline-offset:4px;text-decoration-thickness:1px}
        .yj-link:hover{text-decoration-thickness:2px;color:#2B3BFF !important}
        .yj-pj-t{background:linear-gradient(${YEL},${YEL}) 0 100%/0 40% no-repeat;transition:background-size 300ms cubic-bezier(.2,.7,.2,1)}
        .yj-pj-star{display:inline-block;vertical-align:middle;margin-left:10px;font-size:11px;font-weight:600;letter-spacing:.02em;padding:2px 8px;border-radius:999px;background:transparent;border:1px solid ${LINE};color:${GREY};font-weight:500 !important}
        @media (max-width:1180px){.yj-pj-stat{display:none}}
        .yj-agent{all:unset;cursor:pointer;position:absolute;right:clamp(18px, 1.8vw, 30px);top:50%;transform:translateY(-62%);z-index:2;display:flex;align-items:center;flex-direction:row-reverse;gap:0;padding:4px;border-radius:999px;background:rgba(255,255,255,.55);border:1px solid rgba(17,17,17,.12);transition:background 300ms ease;font-size:14px;font-weight:600;color:${INK};pointer-events:auto}
        .yj-agent-face{width:56px;height:56px;border-radius:50%;background:var(--yj-accent, #d4f25c);display:flex;align-items:center;justify-content:center;flex:none}
        .yj-agent-t{overflow:hidden;white-space:nowrap;max-width:0;opacity:0;transition:max-width 500ms cubic-bezier(.22,1,.36,1), opacity 300ms, padding 500ms cubic-bezier(.22,1,.36,1)}
        .yj-agent:hover,.yj-agent:focus-visible{background:#fff}
        .yj-agent:hover .yj-agent-t,.yj-agent:focus-visible .yj-agent-t{max-width:140px;opacity:1;padding:0 10px 0 14px}
        .yj-agent:focus-visible{outline:2px solid ${INK};outline-offset:3px}
        @media (max-width:820px){.yj-agent{top:96px;transform:none}.yj-agent-face{width:46px;height:46px}}
        @media (prefers-reduced-motion:reduce){.yj-agent-t{transition:none}}
        .yj-flip{outline:none}
        .yj-flip:focus-visible .yj-flip-in{outline:2px solid ${INK};outline-offset:4px;border-radius:18px}
        .yj-flip-in{position:relative;display:block;width:100%;height:100%}
        .yj-face{position:absolute;inset:0;box-sizing:border-box;border-radius:18px;padding:clamp(18px, 1.8vw, 30px);display:flex;flex-direction:column;justify-content:space-between;overflow:hidden}
        .yj-face > :not(.yj-g){position:relative;z-index:1}
        .yj-flip-front{background:${YEL};color:${INK};z-index:1}
        .yj-flip-back{background:#2B3BFF;color:#fff;z-index:0;visibility:hidden}
        .yj-flip.is-back .yj-flip-back{visibility:visible;z-index:2}
        .yj-flip.armed.is-back .yj-flip-back,.yj-flip.armed:not(.is-back) .yj-flip-front{z-index:2;animation:yjWipe 420ms linear 380ms both}
        .yj-flip.armed:not(.is-back) .yj-flip-back{visibility:visible;z-index:1}
        .yj-flip-lead{font-size:clamp(20px, min(2vw, 3.4vh), 32px);line-height:1.25;letter-spacing:-0.02em;font-weight:500;max-width:30ch;color:${YEL}}
        @keyframes yjWipe{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}
        .yj-slats{position:absolute;inset:0;z-index:5;display:flex;pointer-events:none;border-radius:18px;overflow:hidden;perspective:900px}
        .yj-slat{flex:1;height:100%;transform:rotateY(90deg);animation:yjSlat 760ms cubic-bezier(.65,0,.35,1) both;
          background-image:linear-gradient(90deg, rgba(0,0,0,.16), rgba(255,255,255,.12) 50%, rgba(0,0,0,.16))}
        .yj-slats.to-back .yj-slat{background-color:#2B3BFF}
        .yj-slats.to-front .yj-slat{background-color:${YEL}}
        @keyframes yjSlat{0%{transform:rotateY(90deg);opacity:0}12%{opacity:1}45%,55%{transform:rotateY(0deg);opacity:1}88%{opacity:1}100%{transform:rotateY(-90deg);opacity:0}}
        @media (prefers-reduced-motion:reduce){.yj-slats{display:none}.yj-flip.armed .yj-face{animation:none !important}}
        .yj-cta{all:unset;cursor:pointer;font-size:13px;font-weight:600;color:${INK};background:${YEL};padding:7px 14px;border-radius:999px;white-space:nowrap;transition:background 250ms ease,color 250ms ease}
        .yj-cta:hover{background:#2B3BFF;color:#fff}.yj-cta:focus-visible{outline:2px solid ${INK};outline-offset:2px}
        .yj-vn-fx{position:absolute;inset:0;border-radius:inherit;overflow:hidden;opacity:0;transition:opacity 900ms ease;pointer-events:none;z-index:0}
        .yj-vn-fx.on{opacity:1}
        .yj-imp{display:flex;flex-direction:column}
        .yj-imp-row{display:grid;grid-template-columns:minmax(0,auto) minmax(0,1fr);column-gap:12px;align-items:baseline;padding:clamp(5px, 1vh, 9px) 0;border-top:1px solid ${LINE}}
        .yj-imp-row:first-child{border-top:0;padding-top:0}
        .yj-imp-row b{font-size:clamp(20px, min(2vw, 3.6vh), 30px);font-weight:600;letter-spacing:-0.03em;line-height:1;color:${INK};white-space:nowrap}
        .yj-imp-row > span{display:flex;flex-direction:column;min-width:0}
        .yj-imp-k{font-size:14px;font-weight:600;line-height:1.25}
        .yj-imp-w{font-size:12px;color:${GREY};line-height:1.3}
        .yj-vn-strip{position:relative;display:flex;align-items:center;gap:12px;padding:10px;border-radius:14px;background:#f3f3f0;overflow:hidden;isolation:isolate}
        .yj-vn-strip > :not(.yj-g){position:relative;z-index:1}
        .yj-vn-mini{position:relative;flex:none;width:clamp(56px, min(5vw, 9vh), 76px);aspect-ratio:1;cursor:pointer}
        .yj-vn-mini .yj-vn-sheen{position:absolute;inset:0}
        .yj-vn-sel select{font:inherit;font-size:12px;color:${INK};background:rgba(255,255,255,.9);border:1px solid ${LINE};border-radius:999px;padding:3px 8px;max-width:100%;cursor:pointer}
        .yj-vn-sel select:focus-visible{outline:2px solid ${INK};outline-offset:2px}
        .yj-pj-n{display:inline-block;vertical-align:middle;margin-left:10px;font-size:11px;font-weight:500;padding:2px 8px;border-radius:999px;border:1px solid ${LINE};color:${GREY}}
        .yj-pj-plan{all:unset;cursor:pointer;font-family:${F};font-size:12px;font-weight:600;color:${INK};text-decoration:underline;text-underline-offset:3px;margin-left:8px}
        .yj-pj-plan:focus-visible{outline:2px solid ${INK};outline-offset:2px}
        .yj-pj-row:hover .yj-pj-t,.yj-pj-row:focus-visible .yj-pj-t{background-size:100% 40%}
        .yj-pj-kinds{display:none}
        .yj-pj-pic{position:relative;display:block;width:clamp(56px, 5vw, 84px);aspect-ratio:16/10;border-radius:8px;overflow:hidden;background:#e6e6e3;align-self:center}
        .yj-pj-pic > *{pointer-events:none}
        .yj-pj-thumb{display:none !important}
        .yj-pj-num{align-self:start;padding-top:.55em;font-size:11px;letter-spacing:.06em;color:${GREY};font-variant-numeric:tabular-nums}
        .yj-pj-sub{font-size:13px;color:${GREY};white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        .yj-pj-out{font-size:14px;font-weight:600;color:${INK};text-align:right;white-space:nowrap}
        .yj-pj-arr{display:inline-block;transition:transform 300ms cubic-bezier(.2,.7,.2,1)}
        .yj-pj-row:hover .yj-pj-arr,.yj-pj-row:focus-visible .yj-pj-arr{transform:translateX(4px)}
        .yj-pj-row:hover .yj-pj-out,.yj-pj-row:hover .yj-pj-arr,.yj-pj-all:hover .yj-pj-meta{color:#2B3BFF !important}
        .yj-ct-row a:hover,.yj-ct-row button:hover{color:#2B3BFF !important}
        @media (max-width:1180px){.yj-pj-out{font-size:13px}}
        @media (max-width:560px){.yj-pj-out{font-size:12px}}
        .yj-bt > :not(.yj-g):not(.yj-st){position:relative;z-index:1}
        @media (max-width:820px){.yj-shp-in{display:none}}
        @keyframes yjDraw{to{stroke-dashoffset:0}}
        .yj-hide{display:none !important}
        @keyframes yjSunSpin{to{transform:rotate(360deg)}}
        @media (prefers-reduced-motion:reduce){[style*="yjSunSpin"]{animation:none !important}}
        .yj-bento [hidden]{display:none !important}
        .yj-play{margin-top:clamp(56px, 8vw, 110px);padding-top:28px;border-top:1px solid ${LINE};scroll-margin-top:20px}
        .yj-play-head{display:flex;justify-content:space-between;align-items:flex-end;gap:16px;flex-wrap:wrap;margin-bottom:clamp(24px, 3vw, 40px)}
        .yj-play-grid{display:grid;grid-template-columns:repeat(12, minmax(0, 1fr));align-items:start;padding-bottom:4vw}
        .yj-play-it{margin:0;min-width:0;grid-row:1;position:relative;transition:transform 450ms cubic-bezier(.2,.7,.2,1)}
        .yj-play-it.r0{grid-column:1 / 8;transform:rotate(-2deg);z-index:1}
        .yj-play-it.r1{grid-column:7 / 10;margin-top:58%;transform:rotate(3.5deg);z-index:2}
        .yj-play-it.r2{grid-column:9 / 12;margin-top:-3%;transform:rotate(-4deg);z-index:1}
        .yj-play-it.r3{grid-column:10 / 13;margin-top:128%;margin-right:-3%;transform:rotate(5deg);z-index:3}
        .yj-play-it:hover{transform:rotate(0) scale(1.03);z-index:5}
        .yj-play-m{position:relative;overflow:hidden;border-radius:12px;background:#111;box-shadow:0 24px 44px -24px rgba(0,0,0,.5)}
        .yj-play-m > img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
        .yj-play-it figcaption{display:flex;flex-direction:column;gap:3px;padding:12px 2px 0;background:${BG};border-radius:0 0 8px 8px}
        .yj-play-k{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:${GREY}}
        .yj-play-t{font-size:16px;font-weight:600;letter-spacing:-0.01em}
        .yj-play-n{font-size:13px;color:${GREY}}
        @media (max-width:900px){.yj-play-grid{display:flex;flex-direction:column;gap:28px}
          .yj-play-it.r0,.yj-play-it.r1,.yj-play-it.r2,.yj-play-it.r3{margin:0;width:86%}
          .yj-play-it.r1,.yj-play-it.r3{align-self:flex-end}
          .yj-play-it.r0{transform:rotate(-1.5deg)}.yj-play-it.r1{transform:rotate(2deg)}.yj-play-it.r2{transform:rotate(-2deg)}.yj-play-it.r3{transform:rotate(2.5deg)}}
        @media (prefers-reduced-motion:reduce){.yj-play-it{transition:none}}
        .yj-pv{box-sizing:border-box;height:100svh;overflow-y:auto;padding:28px 28px 96px;background:${BG};font-family:${F};color:${INK};animation:yjRise 500ms cubic-bezier(.2,.7,.2,1) both}
        .yj-pv-head{display:flex;justify-content:space-between;align-items:flex-end;gap:16px;flex-wrap:wrap;margin-bottom:24px}
        .yj-chip{all:unset;cursor:pointer;font-family:${F};font-size:14px;padding:7px 14px;border-radius:999px;border:1px solid ${INK};display:inline-flex;gap:8px;align-items:center}
        .yj-chip-n{font-size:12px;opacity:.6}
        .yj-chip-on{background:#2B3BFF;border-color:#2B3BFF;color:#fff}
        .yj-chip:focus-visible,.yj-pv-card:focus-visible{outline:2px solid ${INK};outline-offset:3px}
        .yj-pv-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-auto-rows:auto;grid-auto-flow:dense;gap:24px;align-items:stretch}
        .yj-pv-grid .yj-pv-s0{grid-column:span 2;grid-row:span 2}.yj-pv-grid .yj-pv-s1,.yj-pv-grid .yj-pv-s2{grid-column:span 1;grid-row:auto}
        .yj-pv-grid .yj-pv-s3,.yj-pv-grid .yj-pv-s4,.yj-pv-grid .yj-pv-s5{grid-column:span 1;grid-row:auto}
        .yj-pv-grid .yj-pv-card:not(.yj-pv-s0) .yj-pv-cover{flex:none;aspect-ratio:16/10}
        .yj-pv-card{all:unset;cursor:pointer;display:flex;flex-direction:column;font-family:${F};color:${INK};animation:yjRise 500ms cubic-bezier(.2,.7,.2,1) both}
        .yj-pv-cover{position:relative;display:block;flex:1;min-height:0;border-radius:18px;overflow:hidden;transition:transform 400ms cubic-bezier(.2,.7,.2,1),box-shadow 400ms ease}
        .yj-pv-card:hover .yj-pv-cover{transform:translateY(-4px);box-shadow:0 22px 40px -22px rgba(0,0,0,.45)}
        .yj-pv-pill{position:fixed;left:0;top:0;z-index:70;pointer-events:none;background:${YEL};color:${INK};font-family:${F};font-size:13px;font-weight:600;padding:8px 14px;border-radius:999px;transition:opacity 200ms ease;box-shadow:0 8px 20px -10px rgba(0,0,0,.4)}
        @media (hover:none){.yj-pv-pill{display:none}}
        @media (max-width:820px){.yj-pv{height:auto;padding:16px 16px 96px}.yj-pv-grid{grid-template-columns:1fr;grid-auto-rows:auto;gap:20px}.yj-pv-card{grid-column:auto !important;grid-row:auto !important}.yj-pv-cover{flex:none;aspect-ratio:16/10}}
        .yj-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
        .yj-caret{display:inline-block;margin-left:1px;animation:yjCaret 1s steps(1) infinite}
        @keyframes yjCaret{50%{opacity:0}}
        .yj-live{animation:yjLive 2s ease-in-out infinite}
        @keyframes yjLive{50%{opacity:.25}}
        .yj-ct-row a:hover,.yj-ct-row button:hover{text-decoration:underline;text-underline-offset:4px}
        @media (min-width:821px) and (max-height:880px){.yj-pj-row{padding:2px 0 !important}.yj-pj-row:not(.yj-pj-all) .yj-pj-t{font-size:clamp(16px, 2.6vh, 22px) !important}.yj-ct-row{padding:3px 0 !important}}
        .yj-wl{display:inline-block;animation:yjWl 800ms cubic-bezier(.3,1.5,.4,1) both;transition:transform 400ms cubic-bezier(.3,1.8,.4,1)}
        @keyframes yjWl{from{opacity:0;transform:translateY(.45em) rotate(6deg)}}
        .yj-wl:hover{transform:translateY(-.12em) rotate(-4deg);transition-duration:180ms}
        @media (max-height:780px) and (min-width:821px){.yj-bento{padding:20px;gap:20px;--lgs:.8}.yj-bt:not(.yj-a-ph){padding:18px !important}}
        .yj-sl{opacity:0;transition:opacity 600ms ease}
        .yj-sl-on{opacity:1}
        .yj-logo{transition:opacity 250ms ease}.yj-logo:hover{opacity:1 !important}
        .yj-lg-view{-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
        .yj-lg-track{display:flex;width:max-content;animation:yjLgScroll 28s linear infinite}
        .yj-lg-view:hover .yj-lg-track{animation-play-state:paused}
        .yj-lg-set{display:flex;align-items:center;gap:clamp(48px, 6vw, 96px);padding-right:clamp(48px, 6vw, 96px)}
        @keyframes yjLgScroll{to{transform:translateX(-50%)}}
        .yj-bento > *{animation:yjRise 700ms cubic-bezier(.2,.7,.2,1) both}
        .yj-bento > :nth-child(2){animation-delay:0ms}.yj-bento > :nth-child(3){animation-delay:80ms}.yj-bento > :nth-child(4){animation-delay:160ms}
        .yj-bento > :nth-child(5){animation-delay:240ms}.yj-bento > :nth-child(6){animation-delay:320ms}.yj-bento > :nth-child(7){animation-delay:400ms}
        .yj-bento > :nth-child(8){animation-delay:480ms}.yj-bento > :nth-child(9){animation-delay:560ms}
        @keyframes yjRise{from{opacity:0;translate:0 24px}}
        .yj-tl{transform-box:fill-box;transform-origin:50% 100%;animation:yjBloom 700ms cubic-bezier(.3,1.6,.4,1) both}
        .yj-tl1{animation-delay:500ms}.yj-tl2{animation-delay:800ms}.yj-tl3{animation-delay:1100ms}
        @keyframes yjBloom{from{transform:scale(0)}}
        .yj-cup-fill{transform-box:fill-box;transform-origin:50% 100%;transition:transform 900ms cubic-bezier(.2,.7,.2,1)}
        .yj-steam{opacity:.15;transition:opacity 600ms ease}
        .yj-steam-on{opacity:1;animation:yjSteam 2.4s ease-in-out infinite}
        @keyframes yjSteam{50%{transform:translateY(-4px);opacity:.55}}
        .yj-st-coffee{cursor:pointer}
        .yj-bt-q{animation:yjBtQ 500ms cubic-bezier(.2,.7,.2,1) both}
        @keyframes yjBtQ{from{opacity:0;transform:translateY(8px)}}
        .yj-st{position:absolute;z-index:5;display:block;cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none;
          transform:rotate(var(--r));transition:transform 300ms cubic-bezier(.3,1.6,.4,1);
          filter:drop-shadow(4px 0 0 #fff) drop-shadow(-4px 0 0 #fff) drop-shadow(0 4px 0 #fff) drop-shadow(0 -4px 0 #fff) drop-shadow(0 10px 12px rgba(0,0,0,.18))}
        .yj-st:hover{filter:drop-shadow(4px 0 0 #fff) drop-shadow(-4px 0 0 #fff) drop-shadow(0 4px 0 #fff) drop-shadow(0 -4px 0 #fff) drop-shadow(0 22px 18px rgba(0,0,0,.22))}
        .yj-st svg{display:block;width:100%;height:auto;pointer-events:none}
        .yj-st:hover{transform:rotate(calc(var(--r) * -1)) scale(1.08) translateY(-6px)}
        .yj-st-drag{cursor:grabbing;transform:rotate(0deg) scale(1.12);transition:transform 150ms ease}
        .yj-st-tulips{width:clamp(80px, 6.5vw, 116px);left:-36px;top:-26px}
        .yj-sc{display:flex;flex-direction:column;align-items:center;gap:10px}
        .yj-sc-in{position:absolute;right:6%;top:50%;transform:translateY(-46%);z-index:2}
        .yj-sc-deck{all:unset;cursor:pointer;position:relative;display:block;width:clamp(124px, 10.5vw, 168px);aspect-ratio:5/7;perspective:900px}
        .yj-sc-deck:focus-visible{outline:2px solid ${INK};outline-offset:6px;border-radius:14px}
        .yj-sc-card{position:absolute;inset:0;border-radius:12px;box-shadow:0 18px 30px -16px rgba(0,0,0,.45)}
        .yj-sc-main{transform-style:preserve-3d;transition:transform 650ms cubic-bezier(.3,1.3,.4,1);transform:rotate(-6deg)}
        .yj-sc-main.flip{transform:rotate(-3deg) rotateY(180deg)}
        .yj-sc-deck:hover .yj-sc-main:not(.flip){transform:rotate(-2deg) translateY(-4px)}
        .yj-sc-face{position:absolute;inset:0;border-radius:12px;overflow:hidden;backface-visibility:hidden;-webkit-backface-visibility:hidden;display:flex;align-items:center;justify-content:center}
        .yj-sc-front{transform:rotateY(180deg)}
        .yj-sc-txt{position:relative;padding:0 12%;font-family:${F};font-size:clamp(10.5px, .85vw, 13.5px);line-height:1.35;text-align:center;text-wrap:balance}
        .yj-sc-mark{position:absolute;right:9%;bottom:7%}
        .yj-sc-ans{display:flex;align-items:center;justify-content:center;overflow:hidden;opacity:0;transform:translate(10%, 4%) rotate(4deg);transition:opacity 300ms ease,transform 600ms cubic-bezier(.3,1.4,.4,1);z-index:2}
        .yj-sc-ans.on{opacity:1;transform:translate(34%, 18%) rotate(9deg)}
        .yj-sc-cap{font-family:${F};font-size:12px;white-space:nowrap}
        .yj-sc-cnt{display:none}
        .yj-sc-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
        .yj-st-coffee{width:clamp(72px, 5.8vw, 104px);right:clamp(16px, 1.8vw, 28px);bottom:clamp(16px, 1.8vw, 28px)}
        @media (hover:none){.yj-pj-thumb{display:none}}
        @media (max-width:820px),(max-height:560px){
          .yj-bento{height:auto;min-height:0;padding:16px 16px 90px;gap:18px;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:none;grid-auto-rows:auto;
            grid-template-areas:"in in" "ph ab" "tk tk" "pj pj" "st st" "vn vn" "lg lg"}
          .yj-a-vn{min-height:420px !important}
          .yj-bento .yj-bt{min-height:110px !important}
          .yj-bento .yj-a-in{min-height:300px !important}
          .yj-bento .yj-a-ph{min-height:240px !important}
          .yj-pj-row{flex-direction:column !important;align-items:flex-start !important;gap:4px !important;padding:12px 0 10px !important}
          .yj-pj-meta{white-space:normal !important}
          .yj-pj-kinds{display:inline}
          .yj-pj-stat{display:none}
          .yj-a-lg{flex-direction:column !important;align-items:flex-start !important;padding:18px !important;gap:14px !important}
          .yj-a-lg .yj-lg-view{width:100%}
          .yj-st-tulips{width:64px;left:-10px;top:-18px}
          .yj-sc-in{right:14px;top:104px;transform:none}
          .yj-sc-deck{width:78px}
          .yj-sc-txt{font-size:7px}

          .yj-sc-cap{display:none}
          .yj-st-coffee{width:64px;right:16px;bottom:14px;top:auto}
        }
        @media (prefers-reduced-motion:reduce){.yj-sc-main,.yj-sc-ans{transition:none}.yj-lg-track{animation:none}.yj-caret,.yj-live,.yj-bt-q,.yj-tl,.yj-steam-on,.yj-bento > *,.yj-wl{animation:none}.yj-wl:hover{transform:none}.yj-sl{transition:none;transform:none}.yj-cup-fill{transition:none}.yj-st,.yj-st:hover{transition:none;transform:rotate(var(--r))}}
      `),
      // intro: the one colour block
      tile('in', {className:'yj-flip' + (showBack ? ' is-back' : '') + (turns ? ' armed' : ''), tabIndex:0, role:'group', label:'Introduction: name and summary. Hover or focus to see the name.',
          onMouseEnter:() => setFlipHov(true), onMouseLeave:() => setFlipHov(false), onFocus:() => setFlipHov(true), onBlur:() => setFlipHov(false),
          style:{background:'transparent', padding:0, overflow:'visible', zIndex:3, perspective:'1400px'}},
        h('span', {className:'yj-flip-in'},
          // Front: just the title and the name.
          h('span', {className:'yj-face yj-flip-front', 'aria-hidden':showBack},
            h(Component.Glow, {cx:1.0, cy:.42, cyNarrow:.12, rad:1.0, radNarrow:.55}),
            h('span', {style:{fontSize:S}}, h('b', {style:{fontWeight:600}}, 'Product & service designer'), ' · 4+ years'),
            h('h1', {'aria-label':'Yashvi Jain', className:'yj-wm', style:{margin:0, fontFamily:F, fontWeight:600, fontSize:'clamp(44px, min(6vw, 10vh), 104px)', letterSpacing:'-0.06em', lineHeight:.82}},
              ['yashvi', 'jain'].map((w, wi) => h('span', {key:w, 'aria-hidden':true, style:{display:'block'}},
                w.split('').map((ch, ci) => h('span', {key:ci, className:'yj-wl', style:{animationDelay:(150 + (wi * 6 + ci) * 55) + 'ms'}}, ch)))))),
          // Back: the details.
          h('span', {className:'yj-face yj-flip-back', 'aria-hidden':!showBack},
            h('span', {style:{display:'inline-flex', alignItems:'center', gap:8, fontSize:S}}, h('span', {className:'yj-live', style:{width:7, height:7, borderRadius:'50%', background:'#fff'}}), 'Open to roles · London ' + now),
            h('span', {style:{display:'flex', flexDirection:'column', gap:'clamp(12px, 2vh, 22px)'}},
              h('span', {className:'yj-flip-lead'},
                h('span', {style:{display:'block'}}, 'Research, strategy and design for health, pharma and social change.'),
                h('span', {style:{display:'block'}}, 'Four years at TCS; MA Design Management, UAL.')),
              h('span', {style:{display:'flex', flexWrap:'wrap', gap:'2px 0', fontSize:13, lineHeight:1.5, color:'rgba(255,255,255,.78)'}},
                ['UX research', 'Service design', 'Design systems', 'Co-design', 'Healthcare & pharma'].map((k, i) => h('span', {key:k, style:{whiteSpace:'nowrap'}}, i ? h('span', {'aria-hidden':true, style:{margin:'0 8px', opacity:.5}}, '/') : null, k))))),
          // Kinetic flipper: a wave of vertical slats sweeps across while the new side wipes in behind it.
          turns ? h('span', {key:'s' + turns, className:'yj-slats ' + (showBack ? 'to-back' : 'to-front'), 'aria-hidden':true},
            Array.from({length:SLATS}, (_, i) => h('span', {key:i, className:'yj-slat', style:{animationDelay:(i * 30) + 'ms'}}))) : null)),
      h('div', {className:'yj-a-ph', style:{position:'relative', zIndex:4}}, slideshow),
      tile('ab', {onClick:p.onAbout, label:'About: experience, skills and CV', className:'yj-ab-star', style:{background:'transparent', flexDirection:'row', alignItems:'center', justifyContent:'flex-start', gap:'clamp(12px, 1.4vw, 22px)', padding:'4px 6px', overflow:'visible'}},
        h('svg', {className:'yj-spark', viewBox:'0 0 410 442', 'aria-hidden':true},
          h('path', {d:'M203.784 0C203.784 0 211.566 110.227 271 158C322.034 199.022 410.002 214.397 410.002 214.397C410.002 214.397 317.339 243.333 271 292.5C223.165 343.255 215.5 442 215.5 442C215.5 442 201.563 341 149 292.5C95.7434 243.361 0 224.5 0 224.5C0 224.5 87.6877 205.42 138 158C192.402 106.726 203.784 0 203.784 0Z'})),
        h('span', {style:{display:'flex', flexDirection:'column', gap:4, minWidth:0}}, h('span', {style:{display:'flex', gap:10, alignItems:'baseline'}}, title('About'), arrow), label('Experience, skills and CV'))),
      h('div', {className:'yj-a-tk', style:{position:'relative', zIndex:3}},
        tile('tk', {'data-fit':'', style:{justifyContent:'flex-start', gap:6}},
          h('span', {style:{display:'flex', justifyContent:'space-between', alignItems:'baseline', flexWrap:'wrap', gap:'4px 12px', marginBottom:6}},
            title('Contact'), h('button', {onClick:p.onContact, className:'yj-cta', 'data-drop':''}, 'Let’s talk over coffee →')),
          [['Email', h('button', {onClick:copyEmail, 'aria-live':'polite', style:{all:'unset', cursor:'pointer', fontWeight:600}}, copied ? 'Copied ✓' : 'Copy email')],
           ['LinkedIn', h('a', {href:p.linkedin, target:'_blank', rel:'noopener', style:{color:INK, textDecoration:'none', fontWeight:600}}, 'Open profile ↗')],
           ['CV', h('a', {href:p.cv, target:'_blank', rel:'noopener', style:{color:INK, textDecoration:'none', fontWeight:600}}, 'Download PDF ↓')]]
            .map(([k, act]) => h('span', {key:k, className:'yj-ct-row', style:{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'clamp(6px, 1vh, 10px) 0', borderTop:'1px solid ' + LINE, fontSize:S}}, label(k), act))),
        null),
      projects,
      h('div', {className:'yj-a-st'}, currently,
      tile('rc', {style:{gap:12}, onMouseEnter:() => { hold.current = true; }, onMouseLeave:() => { hold.current = false; }},
        h('span', {style:{display:'flex', justifyContent:'space-between', alignItems:'center'}},
          label('What colleagues say'),
          h('span', {style:{display:'flex', gap:6}}, RECS.map((_, i) => h('button', {key:i, onClick:() => setRi(i), 'aria-label':'Show recommendation ' + (i + 1), 'aria-current':i === ri,
            style:{all:'unset', cursor:'pointer', width:i === ri ? 16 : 6, height:6, borderRadius:999, background:i === ri ? INK : LINE, transition:'width 300ms cubic-bezier(.2,.7,.2,1)'}})))),
        h('span', {key:ri, className:'yj-bt-q', 'aria-live':'polite', style:{display:'flex', flexDirection:'column', gap:'clamp(8px, 1.4vh, 14px)'}},
          title('“' + r.q + '”', {fontWeight:400, lineHeight:1.3, fontSize:'clamp(14px, min(1.15vw, 2vh), 18px)'}),
          h('span', {style:{display:'flex', alignItems:'center', gap:12}},
            h('img', {src:r.img, alt:'', width:40, height:40, style:{width:40, height:40, borderRadius:'50%', objectFit:'cover', flex:'none', filter:'grayscale(1)'}}),
            h('span', {style:{display:'flex', flexDirection:'column', gap:2, minWidth:0, fontSize:S}},
              h('span', {style:{fontWeight:600}}, r.who), label(r.role)))))),
      vinyl,
      h('span', {ref:thumb, className:'yj-pj-thumb', 'aria-hidden':true, style:{position:'fixed', left:0, top:0, width:220, height:140, borderRadius:10, overflow:'hidden', pointerEvents:'none', zIndex:50,
          opacity:hv >= 0 ? 1 : 0, transition:'opacity 200ms ease', boxShadow:'0 18px 40px -18px rgba(0,0,0,.45)'}},
        top.map((c, i) => h('span', {key:c.id, style:{position:'absolute', inset:0, opacity:i === hv ? 1 : 0, background:c.pic ? '#dfe3ee' : YEL, display:'flex', alignItems:'flex-end', padding:12, boxSizing:'border-box', fontFamily:F, fontWeight:600, fontSize:22, color:INK}}, c.pic || c.short))),
      logos));
  };

  static SceneHero = function SceneHero(p) {
    // Home hero as a staged still life: blue wall, cream floor, a framed
    // portrait and sea painting, tulips on a stool, a lamp and a coffee.
    const h = React.createElement;
    const C = {blue:'#93b3bc', floor:'#f1ece1', cream:'#f6f1e7', pink:'#f6f1e7', orange:'#7a2a2e', ink:'#3b1b1d', wood:'#c99a63'};
    const disp = "'Libre Caslon Display', Georgia, serif", sans = "'Schibsted Grotesk', sans-serif", mono = "ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace";
    const wrap = React.useRef(null);
    React.useEffect(() => {
      const el = wrap.current; if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      let raf = 0, mx = 0, my = 0, x = 0, y = 0;
      const move = e => { const r = el.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width - .5; my = (e.clientY - r.top) / r.height - .5; };
      const tick = () => { x += (mx - x) * .06; y += (my - y) * .06; el.style.setProperty('--px', x.toFixed(3)); el.style.setProperty('--py', y.toFixed(3)); raf = requestAnimationFrame(tick); };
      el.addEventListener('pointermove', move); raf = requestAnimationFrame(tick);
      return () => { cancelAnimationFrame(raf); el.removeEventListener('pointermove', move); };
    }, []);
    // Real 3D still life (three.js), loaded on demand. The drawn SVG scene
    // stays underneath as the fallback when WebGL or the import fails.
    const cv = React.useRef(null), [is3d, set3d] = React.useState(false);
    React.useEffect(() => {
      let off = null, dead = false;
      const probe = document.createElement('canvas');
      if (!(probe.getContext('webgl2') || probe.getContext('webgl'))) return;
      import('../three/stillLife.js').then(m => {
        if (dead || !cv.current) return;
        try { off = m.mountStillLife(cv.current, {portraitUrl:__R('assets/web/assets/yashvi.webp'), onReady:() => !dead && set3d(true)}); }
        catch (e) { console.warn('3D hero unavailable', e); }
      }).catch(() => {});
      return () => { dead = true; off && off(); };
    }, []);
    const layer = (depth, style, ...kids) => { const {className, ...st} = style; return h('div', {className, style:{position:'absolute', transform:`translate3d(calc(var(--px,0) * ${depth}px), calc(var(--py,0) * ${depth * .6}px), 0)`, ...st}}, ...kids); };
    const pill = (label, props) => h(props.href ? 'a' : 'button', {...props, style:{all:'unset', cursor:'pointer', display:'inline-flex', alignItems:'center', gap:8, padding:'10px 18px', borderRadius:999, background:C.pink, color:C.ink, border:'1.5px solid '+C.ink, fontFamily:sans, fontSize:15, fontWeight:600}}, label);

    // framed pictures on the wall
    const frame = (w, inner, tilt) => h('div', {style:{width:w, background:'#f7f2e8', padding:'clamp(6px,.7vw,12px)', boxShadow:'0 2px 0 rgba(0,0,0,.08), 0 24px 40px -22px rgba(0,0,0,.55)', transform:`rotate(${tilt}deg)`}},
      h('div', {style:{border:'6px solid #2a2320', overflow:'hidden', position:'relative'}}, inner));
    const portrait = frame('clamp(150px, 15vw, 250px)', h('img', {src:__R('assets/web/assets/yashvi.webp'), alt:'Portrait of Yashvi Jain', style:{display:'block', width:'100%', aspectRatio:'4/5', objectFit:'cover', objectPosition:'50% 28%'}}), -1.5);
    const seaArt = frame('clamp(110px, 10vw, 170px)', h('svg', {viewBox:'0 0 160 110', style:{display:'block', width:'100%'}, 'aria-hidden':true},
      h('rect', {width:160, height:110, fill:'#cfe6ef'}), h('circle', {cx:118, cy:30, r:13, fill:'#fff3d6'}),
      h('path', {className:'yj-sc-wave', d:'M-40 66 Q -20 56 0 66 T 40 66 T 80 66 T 120 66 T 160 66 T 200 66 V110 H-40Z', fill:'#6fa7c2'}),
      h('path', {className:'yj-sc-wave yj-sc-wave2', d:'M-40 80 Q -20 70 0 80 T 40 80 T 80 80 T 120 80 T 160 80 T 200 80 V110 H-40Z', fill:'#2f6f95'})), 2);

    // tulips in a pink vase on a wooden stool
    const tulipSvg = h('svg', {viewBox:'0 0 220 360', style:{display:'block', width:'100%', overflow:'visible'}, 'aria-hidden':true},
      ...[[70, 120, '#e0566f', 3.4], [110, 150, '#ffffff', 4.2], [150, 115, '#ff5a1f', 3.8]].map(([x, t, col, d], i) => h('g', {key:i, className:'yj-sc-tulip', style:{transformOrigin:'110px 210px', animationDuration:d + 's'}},
        h('path', {d:`M110 210 Q ${(x + 110) / 2} ${t + 50} ${x} ${t}`, stroke:'#3f7a4a', strokeWidth:5, fill:'none'}),
        h('path', {d:`M${x - 18} ${t + 4} C ${x - 20} ${t - 26} ${x - 10} ${t - 36} ${x - 5} ${t - 30} L ${x} ${t - 42} L ${x + 5} ${t - 30} C ${x + 10} ${t - 36} ${x + 20} ${t - 26} ${x + 18} ${t + 4} C ${x + 10} ${t + 14} ${x - 10} ${t + 14} ${x - 18} ${t + 4} Z`, fill:col}))),
      h('path', {d:'M78 200 C 70 230 72 262 86 276 H134 C 148 262 150 230 142 200 Z', fill:C.pink}),
      h('ellipse', {cx:110, cy:200, rx:32, ry:7, fill:'#e98fb1'}),
      h('rect', {x:30, y:276, width:160, height:16, rx:4, fill:C.wood}),
      h('rect', {x:52, y:292, width:16, height:68, fill:'#b48552'}), h('rect', {x:152, y:292, width:16, height:68, fill:'#b48552'}),
      h('rect', {x:96, y:292, width:28, height:68, fill:'#a87c4b'}));

    // orange floor lamp and a side table with a steaming coffee
    const lampSvg = h('svg', {viewBox:'0 0 200 520', style:{display:'block', width:'100%', overflow:'visible'}, 'aria-hidden':true},
      h('path', {d:'M60 80 L 120 40 L 150 70 L 100 120 Z', fill:C.orange}),
      h('ellipse', {cx:96, cy:104, rx:26, ry:9, fill:'#ffd2a8', transform:'rotate(-42 96 104)'}),
      h('path', {d:'M130 56 C 160 40 175 70 165 120 L 150 500', stroke:C.orange, strokeWidth:7, fill:'none', strokeLinecap:'round'}),
      h('ellipse', {cx:150, cy:505, rx:46, ry:10, fill:C.orange}));
    const coffeeSvg = h('svg', {viewBox:'0 0 200 260', style:{display:'block', width:'100%', overflow:'visible'}, 'aria-hidden':true},
      [70, 92, 114].map((x, i) => h('path', {key:i, className:'yj-sc-steam', d:`M${x} 70 C ${x - 10} 54 ${x + 10} 44 ${x} 26 C ${x - 8} 14 ${x + 8} 6 ${x} -6`, stroke:'#ffffff', strokeWidth:4, fill:'none', strokeLinecap:'round', style:{animationDelay:(i * .8) + 's'}})),
      h('path', {d:'M48 80 H136 L130 140 C 129 150 121 156 111 156 H73 C 63 156 55 150 54 140 Z', fill:C.cream}),
      h('path', {d:'M136 92 C 158 92 158 126 132 126', stroke:C.cream, strokeWidth:9, fill:'none'}),
      h('ellipse', {cx:92, cy:81, rx:44, ry:6, fill:'#6b4a35'}),
      h('rect', {x:10, y:156, width:170, height:12, rx:3, fill:C.wood}),
      h('rect', {x:84, y:168, width:22, height:92, fill:'#a87c4b'}), h('ellipse', {cx:95, cy:258, rx:40, ry:6, fill:'#a87c4b'}));

    return h('section', {ref:wrap, 'aria-label':'Introduction', className:'yj-scene' + (is3d ? ' yj-sc-3d' : ''),
        style:{position:'relative', height:'100svh', minHeight:640, overflow:'hidden', background:C.blue, color:C.cream}},
      h('style', null, `
        .yj-scene .yj-sc-floor{position:absolute;left:0;right:0;bottom:0;height:24%;background:${C.floor}}
        .yj-sc-tulip{animation:yjScSway ease-in-out infinite alternate}
        .yj-sc-tulip:nth-child(2){animation-direction:alternate-reverse}
        @keyframes yjScSway{from{transform:rotate(-3deg)}to{transform:rotate(3deg)}}
        .yj-sc-wave{animation:yjScWave 6s linear infinite}.yj-sc-wave2{animation-duration:4s}
        @keyframes yjScWave{to{transform:translateX(40px)}}
        .yj-sc-steam{stroke-dasharray:110;opacity:0;animation:yjScSteam 2.6s ease-in-out infinite}
        @keyframes yjScSteam{0%{stroke-dashoffset:110;opacity:0}40%{opacity:.9}100%{stroke-dashoffset:0;opacity:0;transform:translateY(-10px)}}
        .yj-scene .yj-sc-notes{position:absolute;left:calc(5% + clamp(150px, 16vw, 250px) + 32px);bottom:6%;font-family:${mono};font-size:clamp(11px,.85vw,13px);line-height:1.9;color:#5b5348;letter-spacing:.04em}
        @media (max-width:820px){
          .yj-scene .yj-sc-floor{height:38% !important}
          .yj-scene .yj-sc-stool{left:3% !important;width:30vw !important;bottom:37% !important}
          .yj-scene .yj-sc-lamp,.yj-scene .yj-sc-sea,.yj-sc-hide-m{display:none !important}
          .yj-scene .yj-sc-coffee{right:4% !important;width:26vw !important;bottom:37% !important}
          .yj-scene .yj-sc-portrait{top:23% !important}
          .yj-scene .yj-sc-notes{left:16px;right:16px;bottom:44px}
        }
        .yj-scene .yj-sc-canvas{position:absolute;inset:0;width:100%;height:100%;display:block;opacity:0;transition:opacity .8s ease}
        .yj-scene.yj-sc-3d .yj-sc-canvas{opacity:1}
        .yj-scene.yj-sc-3d .yj-sc-floor,.yj-scene.yj-sc-3d .yj-sc-portrait,.yj-scene.yj-sc-3d .yj-sc-sea,.yj-scene.yj-sc-3d .yj-sc-stool,.yj-scene.yj-sc-3d .yj-sc-lamp,.yj-scene.yj-sc-3d .yj-sc-coffee{display:none !important}
        @media (prefers-reduced-motion:reduce){.yj-sc-tulip,.yj-sc-wave,.yj-sc-steam{animation:none !important}.yj-sc-steam{opacity:.6}}
      `),
      h('canvas', {ref:cv, className:'yj-sc-canvas', 'aria-hidden':true}),
      h('div', {className:'yj-sc-floor'}),
      // wordmark
      layer(6, {left:0, right:0, top:'clamp(80px, 11vh, 110px)', textAlign:'center', whiteSpace:'nowrap'},
        h('h1', {style:{margin:0, display:'inline-flex', alignItems:'baseline', gap:'.04em', color:C.cream, fontWeight:400}},
          h('span', {style:{fontFamily:sans, fontWeight:900, fontSize:'clamp(56px, 10vw, 168px)', letterSpacing:'-0.055em', lineHeight:.85}}, 'YASHVI'),
          h('span', {'aria-hidden':true, style:{display:'inline-block', width:'.16em', height:'.16em', borderRadius:'50%', background:C.orange, fontSize:'clamp(56px, 10vw, 168px)', margin:'0 .02em'}}),
          h('span', {style:{fontFamily:disp, fontSize:'clamp(46px, 8vw, 136px)', letterSpacing:'-0.02em', lineHeight:.85}}, 'jain'))),
      // wall art
      layer(14, {className:'yj-sc-portrait', left:'50%', top:'38%', marginLeft:'clamp(-125px, -7.5vw, -75px)'}, portrait),
      layer(18, {className:'yj-sc-sea', left:'calc(50% + clamp(110px, 11vw, 190px))', top:'40%'}, seaArt),
      // floor objects
      layer(26, {className:'yj-sc-stool', left:'5%', bottom:'15%', width:'clamp(150px, 16vw, 250px)'}, tulipSvg),
      layer(30, {className:'yj-sc-lamp', right:'7%', bottom:'17%', width:'clamp(110px, 10vw, 170px)'}, lampSvg),
      layer(34, {className:'yj-sc-coffee', right:'18%', bottom:'14%', width:'clamp(110px, 11vw, 180px)'}, coffeeSvg),
      // typewriter notes and actions
      h('div', {className:'yj-sc-notes'},
        h('div', null, h('span', {style:{color:C.orange}}, '> '), 'product & service designer.'),
        h('div', null, h('span', {style:{color:C.orange}}, '> '), 'research, strategy & design for health, pharma, social change.'),
        h('div', null, h('span', {style:{color:C.orange}}, '> '), 'four years at tcs. ma, design management, ual.'),
        h('div', {style:{display:'flex', gap:10, marginTop:14, flexWrap:'wrap'}},
          pill('Selected work ↓', {onClick:p.onWork}), pill('Download CV', {href:p.cv, target:'_blank', rel:'noopener'}))),
      h('div', {style:{position:'absolute', left:'clamp(16px, 3vw, 40px)', right:'clamp(16px, 3vw, 40px)', bottom:14, display:'flex', justifyContent:'space-between', fontFamily:mono, fontSize:11, letterSpacing:'.14em', textTransform:'uppercase', color:'#6f675b'}},
        h('span', null, 'Yashvi Jain · London'), h('span', {className:'yj-sc-hide-m'}, 'scroll'), h('span', null, 'Open to roles')));
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
    Object.assign(el.style, {position:'fixed', left:'0', top:'0', width:'16px', height:'16px', marginLeft:'-8px', marginTop:'-8px', borderRadius:'50%', background:'#FFD60A', boxShadow:'0 0 0 1.5px #111111',
      pointerEvents:'none', zIndex:'10001', display:'flex', alignItems:'center', justifyContent:'center',
      transition:'width 450ms cubic-bezier(.22,1,.36,1), height 450ms cubic-bezier(.22,1,.36,1), margin 450ms cubic-bezier(.22,1,.36,1), opacity 250ms', opacity:'0', willChange:'transform'});
    Object.assign(lab.style, {fontFamily:"'Schibsted Grotesk',sans-serif", fontSize:'11px', letterSpacing:'0.08em', textTransform:'uppercase', color:'#111111', fontWeight:'600', opacity:'0', transition:'opacity 250ms', whiteSpace:'nowrap'});
    el.appendChild(lab); document.body.appendChild(el); document.documentElement.classList.add('yj-cur');
    let tx = -100, ty = -100, x = -100, y = -100, size = 16;
    const setSize = (n, text) => { if (n === size && lab.textContent === (text || '')) return; size = n; el.style.width = el.style.height = n + 'px'; el.style.marginLeft = el.style.marginTop = (-n / 2) + 'px'; lab.textContent = text || ''; lab.style.opacity = text ? '1' : '0'; };
    this._curMove = e => {
      tx = e.clientX; ty = e.clientY; el.style.opacity = '1';
      const t = e.target.closest ? e.target.closest('button, a, [role="button"]') : null;
      if (!t) setSize(16);
      else if (t.getAttribute('data-cursor')) setSize(84, t.getAttribute('data-cursor'));
      else if (t.closest('[aria-label="Featured work"]') || t.getAttribute('aria-label') === 'Contact') setSize(110, 'View');
      else setSize(40);
    };
    this._curLeave = () => { el.style.opacity = '0'; };
    window.addEventListener('mousemove', this._curMove, {passive:true}); window.addEventListener('resize', this._mvS); setTimeout(this._mvS, 400);
    document.addEventListener('mouseleave', this._curLeave);
    // A short gradient trail behind the dot: yellow at the head, fading through ultramarine.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cv = reduce ? null : document.createElement('canvas'), cx = cv && cv.getContext('2d'), pts = [];
    if (cv) { cv.setAttribute('aria-hidden', 'true'); Object.assign(cv.style, {position:'fixed', inset:'0', width:'100vw', height:'100vh', pointerEvents:'none', zIndex:'10000'}); document.body.appendChild(cv); this._curCv = cv; }
    const fit = () => { if (!cv) return; const k = Math.min(window.devicePixelRatio || 1, 2); cv.width = innerWidth * k; cv.height = innerHeight * k; cx.setTransform(k, 0, 0, k, 0, 0); };
    fit(); this._curFit = fit; window.addEventListener('resize', fit);
    const Y = [255, 214, 10], B = [43, 59, 255];
    const drawTrail = () => {
      if (!cx) return;
      pts.unshift([x, y]); if (pts.length > 16) pts.pop();
      cx.clearRect(0, 0, innerWidth, innerHeight);
      if (el.style.opacity !== '1') return;
      for (let i = 1; i < pts.length; i++) {
        const k = i / pts.length, a = pts[i - 1], b = pts[i];
        if (Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) < 0.4) continue;
        const c = Y.map((v, j) => Math.round(v + (B[j] - v) * Math.min(1, k * 1.4)));
        cx.strokeStyle = `rgba(${c[0]},${c[1]},${c[2]},${(1 - k) * 0.55})`;
        cx.lineWidth = Math.max(1, (size * 0.75) * (1 - k)); cx.lineCap = 'round';
        cx.beginPath(); cx.moveTo(a[0], a[1]); cx.lineTo(b[0], b[1]); cx.stroke();
      }
    };
    const loop = () => { x += (tx - x) * 0.22; y += (ty - y) * 0.22; el.style.transform = `translate3d(${x}px,${y}px,0)`; drawTrail(); this._curRaf = requestAnimationFrame(loop); };
    loop();
    this._cur = el;
  }
  unmountCursor() {
    if (!this._cur) return;
    cancelAnimationFrame(this._curRaf); window.removeEventListener('mousemove', this._curMove); document.removeEventListener('mouseleave', this._curLeave);
    this._cur.remove(); this._cur = null; document.documentElement.classList.remove('yj-cur');
    if (this._curCv) { this._curCv.remove(); this._curCv = null; } if (this._curFit) window.removeEventListener('resize', this._curFit);
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
    document.documentElement.dataset.yjScreen = this.state.screen;
    setTimeout(() => this.syncTone(), 300); this._toneT = setInterval(() => this.syncTone(), 900);
    // About: draw the headline underline once the section scrolls into view
    this._abIO = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('yj-in')), {threshold:.35});
    this._abArm = () => { const a = document.getElementById('yj-about'); if (a && !a._yjObs) { a._yjObs = 1; this._abIO.observe(a); } };
    setTimeout(this._abArm, 400);
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
    document.documentElement.dataset.yjScreen = this.state.screen;
    setTimeout(() => this.syncTone(), 60);
    if (this._abArm) setTimeout(this._abArm, 80);
    if (this._mvS) this._mvS(); setTimeout(() => { this.armDrops(); this.armMotion(); }, 0); this.syncHz(); this.syncMz(); const c = this.chatRef.current; if (c) c.scrollTop = c.scrollHeight; this.applyAccent(); (this.props.customCursor ?? true) ? this.mountCursor() : this.unmountCursor(); }
  syncJourney() {
    const t = this.jRef.current; if (!t || this._jUser) return;
    const r = t.getBoundingClientRect(), vh = window.innerHeight, m = t.scrollWidth - t.clientWidth; if (m <= 0) return;
    const p = Math.min(1, Math.max(0, (vh * 0.8 - r.top) / (vh * 1.1)));
    t.style.scrollBehavior = 'auto'; t.scrollLeft = p * m; t.style.scrollBehavior = '';
  }
  // Each nav pill checks what is behind it and switches to dark text on light backgrounds.
  syncTone() {
    const nav = this.navRef.current; if (!nav) return;
    const pills = nav.querySelectorAll(':scope > button, :scope > nav');
    const lum = c => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const [r, g, b, a = 1] = m[1].split(',').map(Number); if (a < 0.35) return null;
      const f = v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }; return .2126 * f(r) + .7152 * f(g) + .0722 * f(b); };
    pills.forEach(el => {
      const r = el.getBoundingClientRect(); if (!r.width) return;
      let light = 0, n = 0;
      for (const fx of [.2, .5, .8]) {
        const stack = document.elementsFromPoint(r.left + r.width * fx, r.top + r.height / 2);
        let L = null;
        for (const e of stack) {
          if (nav.contains(e)) continue;
          if (/^(IMG|VIDEO|CANVAS|IFRAME)$/.test(e.tagName)) { L = .1; break; }
          const v = lum(getComputedStyle(e).backgroundColor); if (v != null) { L = v; break; }
        }
        if (L == null) L = 0; n++; if (L > .45) light++;
      }
      const tone = light * 2 > n ? 'light' : 'dark';
      if (el.getAttribute('data-yj-tone') !== tone) el.setAttribute('data-yj-tone', tone);
    });
  }
  syncNav() {
    if (!this._toneRaf) this._toneRaf = requestAnimationFrame(() => { this._toneRaf = 0; this.syncTone(); });
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
  go(screen, extra) {
    // Work lives on the home page as the Projects view; home itself opens on the dashboard.
    if (screen === 'work') { screen = 'home'; extra = {homeView:'proj', ...(extra || {})}; }
    else if (screen === 'home') extra = {homeView:'dash', ...(extra || {})};
    this.setState({screen, face:0, hp:0, ...(extra || {})}); window.scrollTo(0, 0);
  }
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
    if (s.screen === 'case' && cur.id === 'cray') return {isMove:false, isIme:false, isAva:false, isPfizer:false, isCaseStd:false, isCray:true, mvRef:this.mvRef};
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
    const NAV = [['top','Front page'],['summary','At a glance'],['insight','Findings'],['product','The Script'],['testing','Report card'],['reflect','Opinion']];
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
      summaryBlock:(() => {
        // Recruiter summary: the whole case in one screen, in this case's own newspaper style.
        const h = React.createElement, RED = '#c4161c', INK = '#141210', MUTE = '#6b625a', RULE = '#d9d2c7';
        const SERIF = "'Source Serif 4', serif";
        const fact = (k, v) => h('div', {key:k, style:{borderTop:'1px solid ' + INK, paddingTop:10}},
          h('div', {style:{fontSize:12, letterSpacing:'.14em', textTransform:'uppercase', color:MUTE, marginBottom:6}}, k), h('div', {style:{fontSize:17, lineHeight:1.45}}, v));
        const num = (n, k) => h('div', {key:k, style:{borderTop:'3px solid ' + RED, paddingTop:10}},
          h('div', {style:{fontSize:'clamp(40px, 4vw, 64px)', lineHeight:1, color:RED, fontWeight:600, letterSpacing:'-0.02em'}}, n), h('div', {style:{fontSize:15, lineHeight:1.4, marginTop:6, color:INK}}, k));
        const col = (i, k, v) => h('div', {key:k, style:{borderTop:'1px solid ' + INK, paddingTop:14}},
          h('div', {style:{fontSize:13, letterSpacing:'.14em', textTransform:'uppercase', color:RED, marginBottom:10}}, i + ' · ' + k),
          h('p', {style:{margin:0, fontSize:18, lineHeight:1.55, color:INK, textWrap:'pretty'}}, v));
        return h('section', {'data-mv':'summary', 'aria-label':'At a glance', style:{boxSizing:'border-box', maxWidth:1600, margin:'0 auto', padding:'96px clamp(20px, 7vw, 128px) 40px', fontFamily:SERIF, color:INK}},
          h('div', {style:{display:'flex', justifyContent:'space-between', alignItems:'baseline', gap:16, flexWrap:'wrap', borderBottom:'3px double ' + INK, paddingBottom:14, marginBottom:28}},
            h('h2', {style:{margin:0, fontFamily:SERIF, fontWeight:600}}, 'At a glance'),
            h('span', {style:{fontSize:14, color:MUTE}}, 'The case in one minute. Details follow below.')),
          h('div', {className:'mv-sum-facts', style:{display:'grid', gridTemplateColumns:'repeat(3, minmax(0,1fr))', gap:24, marginBottom:40}},
            fact('My role', 'Researcher and designer, from framing to testing. MA Design Management, UAL London College of Communication.'),
            fact('Timeline', '11 months, 2025–26'),
            fact('Methods', 'Focus groups, audio diaries, expert interviews, journey mapping, prototyping, user testing')),
          h('div', {className:'mv-sum-nums', style:{display:'grid', gridTemplateColumns:'repeat(4, minmax(0,1fr))', gap:24, marginBottom:48}},
            num('95%', 'of women in Delhi say fear of harassment restricts how they travel'), num('7', 'women in focus groups'),
            num('7', 'expert interviews, 4 in India and 3 in the UK'), num('6', 'primary research methods')),
          h('div', {className:'mv-sum-cols', style:{display:'grid', gridTemplateColumns:'repeat(4, minmax(0,1fr))', gap:28}},
            col('01', 'Problem', 'Safety in Delhi’s public transport is treated as a woman’s job. She changes routes, clothes and timings, while the norms behind the risk go unchallenged.'),
            col('02', 'What I did', 'I moved the question from unsafe journeys to where those norms are learned: at home and among friends. Then I designed The Script, a card game in two editions that brings stereotypes to the table through play.'),
            col('03', 'How it went', 'In testing, kids named stereotypes aloud and picked the game up fastest. Women carried the conversation home, and mixed-age groups talked most.'),
            col('04', 'What I learned', 'The game assumes confident readers, which excludes the people safety work already misses. The next version is oral and picture-led.')));
      })(),
      skillsTop:[
        {n:'01', k:'Strategy', d:'Reframed safety from a woman’s job to a shared civic responsibility.', see:'At a glance', go:go('summary')},
        {n:'02', k:'Service design', d:'One intervention across home and friend groups, built from 7 expert interviews.', see:'At a glance', go:go('summary')},
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
      // Built from vector/high-res parts instead of the 1400px cover-banner.webp, so it stays sharp at any size.
      h('div', {role:'img', 'aria-label':'Johnson & Johnson · Dosing Error · AVA', style:{position:'absolute', inset:0, margin:'auto', aspectRatio:'1400 / 765', maxWidth:'100%', maxHeight:'100%', containerType:'inline-size', pointerEvents:'none',
          display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'#ffffff'}},
        h('img', {src:__R('assets/logos/jnj.svg'), alt:'', style:{width:'36.7cqw', height:'auto', filter:'brightness(0) invert(1)', marginTop:'2cqw'}}),
        h('div', {style:{marginTop:'5.6cqw', fontFamily:'Geist, sans-serif', fontWeight:700, fontSize:'2.05cqw', letterSpacing:'-0.005em', lineHeight:1}}, 'Dosing Error'),
        h('img', {src:__R('figma/ava/assets/1a818537395aa2c3.png'), alt:'', style:{width:'14cqw', height:'auto', marginTop:'3.6cqw', filter:'brightness(0) invert(1)'}})));
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
    const wTabs = [['Projects', 'All', String(CASES.filter(c => c.id !== 'halls').length + 1).padStart(2,'0'), !isPlayTab], ['Play', 'Play', '07', isPlayTab]].map(([label, k, count, on]) => ({label, count, onClick:() => this.setState({wcat:k}), fg: on ? CREAM : '#8c8c8c', line: on ? 'var(--yj-accent, #ff4d2e)' : 'transparent'}));
    this._wTabs = wTabs;
    const cats = CATS.filter(f => f !== 'Play').map(f => { const on = wc === f; return {label:f, count: String(f === 'Play' ? 7 : CASES.filter(c => c.id !== 'halls' && inCat(c, f)).length).padStart(2,'0'), onClick:() => this.setState({wcat:f}),
      bg: on ? CREAM : 'transparent', fg: on ? INK : CREAM, line: on ? CREAM : '#666666'}; });
    const covReveal = {care:'wipe', cray:'circle', ime:'diag', halls:'wipe'};
    const cases = CASES.map((c, i) => ({...c, cardLine:c.cardLine || '', open:() => this.openCase(i), ctaO: s.hovCase === c.id ? 1 : 0, ctaY: s.hovCase === c.id ? '0px' : '8px',
      hovOn:() => this.setState({hovCase:c.id}), hovOff:() => this.setState(st => st.hovCase === c.id ? {hovCase:null} : null),
      cover: h(K, {key:'cov' + c.id, level, parallax:40, label:c.title, onClick:() => this.openCase(i)}, this.pic(c, false))})).filter(c => c.id !== 'halls');
    // Live prototypes that open in a new tab rather than as a case study page.
    const PROTO_URL = 'https://parent-scam-sense.lovable.app';
    cases.push({id:'askbeta', short:'Ask Beta', title:'Ask Beta: scam checks for parents', sector:'Consumer safety', years:'2026', cat:'UX', disc:['Co-design'], tags:['UX'], methods:[],
      cardLine:'A mobile prototype that helps parents check a suspicious call or message before they act.',
      open:() => window.open(PROTO_URL, '_blank', 'noopener'), ctaO: s.hovCase === 'askbeta' ? 1 : 0, ctaY: s.hovCase === 'askbeta' ? '0px' : '8px',
      hovOn:() => this.setState({hovCase:'askbeta'}), hovOff:() => this.setState(st => st.hovCase === 'askbeta' ? {hovCase:null} : null),
      cover: h('a', {href:PROTO_URL, target:'_blank', rel:'noopener', 'aria-label':'Open the Ask Beta prototype', style:{position:'absolute', inset:0, display:'block', background:'#f4b73a', color:'#141210', overflow:'hidden', textDecoration:'none', fontFamily:"Inter, 'Schibsted Grotesk', sans-serif"}},
        h('img', {src:__R('assets/askbeta-sun.svg'), alt:'', 'aria-hidden':true, style:{position:'absolute', right:'6%', top:'8%', width:'34%', maxWidth:200, height:'auto', animation:'yjSunSpin 40s linear infinite'}}),
        h('span', {style:{position:'absolute', left:'8%', bottom:'9%', right:'8%', display:'flex', flexDirection:'column', gap:'0.4em'}},
          h('span', {style:{fontSize:'clamp(12px,1vw,14px)', fontWeight:600, letterSpacing:'.14em', textTransform:'uppercase', opacity:.7}}, 'Live prototype ↗'),
          h('span', {style:{fontSize:'clamp(34px,4vw,60px)', fontWeight:800, letterSpacing:'-0.04em', lineHeight:.95}}, 'Ask Beta'),
          h('span', {style:{fontSize:'clamp(14px,1.2vw,17px)', fontWeight:500, lineHeight:1.3, maxWidth:'22ch'}}, 'Is this call a scam? A calm second opinion for parents.')))});
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
      chatOpen: !!s.chatOpen, chatFab: false, chatRef:this.chatRef, chatBusy: !!s.chatBusy, chatInput: s.chatInput || '',
      chatMsgs: [{role:'agent', text:"Hi — I'm Yashvi's portfolio agent. Ask me about her strategy work, how she runs research, or whether she'd fit your team."}, ...(s.chatMsgs || [])].map(m => ({...m,
        ...(() => { const links = m.role === 'agent' ? CASES.map((cs, i) => ({cs, i})).filter(({cs}) => cs.id !== 'halls' && [cs.short, cs.short.split(/[:—]/)[0].trim(), cs.title].some(n => n && n.length > 2 && m.text.toLowerCase().includes(n.toLowerCase()))).map(({cs, i}) => ({label:'Open ' + cs.short, open:() => { this.setState({chatOpen:false}); this.openCase(i); }})) : []; return {links, hasLinks: links.length > 0}; })(),
        align: m.role === 'user' ? 'flex-end' : 'flex-start', bg: m.role === 'user' ? '#f4f4f4' : '#1a1a1a', fg: m.role === 'user' ? '#000000' : '#f4f4f4'})),
      chatShowSuggest: !(s.chatMsgs || []).length,
      chatSuggest: ['Which project best shows her strategy work?', 'How does she use AI in her process?', 'Is she available, and where?'].map(t => ({text:t, onClick:() => this.sendChat(t)})),
      openChat:() => this.setState({chatOpen:true}), closeChat:() => this.setState({chatOpen:false}),
      chatType: e => this.setState({chatInput:e.target.value}),
      chatSubmit: e => { e.preventDefault(); this.sendChat(this.state.chatInput); },
      socials:[{k:'LI', href:'https://www.linkedin.com/in/yashvi-jain-b049851ba/'}, {k:'CV', href:__R('uploads/assets-1790874602631-0p68.pdf')}],
      loader: null,
      dock: h(Component.Dock, {items:[
        // Two views only, like the reference: About and Contact are reached from dashboard tiles.
        {key:'dash', label:'Dashboard', on:(s.screen === 'home' && s.homeView !== 'proj') || s.screen === 'approach' || s.screen === 'contact', onClick:() => this.go('home')},
        {key:'proj', label:'Projects', on:(s.screen === 'home' && s.homeView === 'proj') || s.screen === 'case', onClick:() => this.go('work')}]}),
      craySimple: s.screen === 'case' && CASES[s.ci] && CASES[s.ci].id === 'cray' ? h(Component.CaseCraySimple, {c:CASES[s.ci]}) : null,
      glance: s.screen !== 'case' || !CASES[s.ci] ? null : ({
        pfizer: h(Component.Glance, {accent:'#0000c9', note:'Shared as a portfolio sample. Some screens are simplified, and confidential client data is not shown.',
          rows:[['The problem', 'Pfizer’s first formal brand, created by Pentagram, had to work across a very large website and many teams, accessibly and consistently.'],
            ['What I did', 'As UI lead, I set up the UI system and components for pfizer.com and led the offshore design team building it.'],
            ['The result', 'pfizer.com is live in the new brand, and its system now guides Pfizer’s internal pages and dashboards.']]}),
        ime: h(Component.Glance, {accent:'#ec3013',
          rows:[['The problem', 'Birdsong, an exhibition on songbirds and music, lived in one room in one city, so few people could see it.'],
            ['What I did', 'One of six interns mentored for six months. I ran co-design sessions with visitors and designed interfaces for both the physical and the virtual exhibition.'],
            ['The result', 'A live virtual exhibition on the Indian Music Experience Museum website, open to anyone, anywhere.']]}),
        ava: h(Component.Glance, {note:'Shared as a portfolio sample. Some screens are simplified, and confidential client data is not shown.'})})[CASES[s.ci].id] || null,
      moveSimple: s.screen === 'case' && CASES[s.ci] && CASES[s.ci].id === 'move' ? h(Component.CaseMoveSimple, {c:CASES[s.ci]}) : null,
      contactBento: s.screen === 'contact' ? h(Component.ContactBento, {cv:__R('uploads/assets-1790874602631-0p68.pdf'), linkedin:'https://www.linkedin.com/in/yashvi-jain-b049851ba/', onAgent:() => this.setState({chatOpen:true})}) : null,
      aboutBento: s.screen === 'approach' ? h(Component.AboutBento, {timeline:TIMELINE, portrait:__R('assets/web/assets/yashvi.webp'), cv:__R('uploads/assets-1790874602631-0p68.pdf'), onContact:() => this.go('contact'),
        skills:[{t:'Strategy', items:['Stakeholder engagement','Cross-functional teamwork','Insight communication','Concept development']}, {t:'Research', items:['Discovery research','Interviews','Usability testing','Workshop facilitation','Co-design','Qualitative synthesis']}, {t:'Service design', items:['Service blueprints','Journey mapping','Process mapping','User flows','Personas']}, {t:'Inclusive practice', items:['Accessibility','Lived-experience insight','Inclusive communication','Vulnerable users']}],
        tools:['Figma','Adobe CS','Microsoft 365','ChatGPT','Claude','UX Pilot'],
        certs:[{title:'Enterprise Design Thinking Practitioner', org:'IBM', logo:__R('assets/certs/ibm.svg'), date:'Nov 2025'}, {title:'Customer Experience (CX) Foundations', org:'LinkedIn', logo:__R('assets/certs/linkedin.png'), date:'Mar 2024'}],
        recs:[{name:'Siddhartha Gigoo', role:'Head of TCS Interactive Design Studios', img:__R('assets/web/assets/recs/siddhartha.webp'), quote:'An exceptional designer. Continues to make us proud.'},
          {name:'Arpit Vyas', role:'Product Experience Strategist', img:__R('assets/recs/arpit.jpeg'), quote:'She approached every project with a thoughtful design mindset… she took full ownership of her responsibilities and delivered.'},
          {name:'Geetanjali Chuttani', role:'Associate Design Director, UX', img:__R('assets/recs/geet.jpeg'), quote:'Her ability to understand and articulate complex design requirements is matched only by her strong sense of aesthetics and usability.'}],
        offClock:[{k:'Bakeaway', src:__R('assets/web/assets/about/bakery.webp'), href:'https://www.instagram.com/bakeaway_yashvijain/', v:'My home bakery. A recipe is a service blueprint: the steps are simple, the care isn’t.'},
          {k:'Travel', src:__R('assets/web/assets/about/travel.webp'), v:'New places, no fixed itinerary. Fieldwork I don’t have to write up.'},
          {k:'Reading', src:__R('assets/web/assets/about/reading.webp'), v:'Always halfway through something. Fiction for the people, non-fiction for the systems.'}]}) : null,
      landingHero: h(Component.BentoHome, {view:s.homeView || 'dash', onAgent:() => this.setState({chatOpen:true}), onContact:() => this.go('contact'), onWork:() => this.go('work'), onAbout:() => this.go('approach'), cv:__R('uploads/assets-1790874602631-0p68.pdf'), linkedin:'https://www.linkedin.com/in/yashvi-jain-b049851ba/', count:cases.length,
        projects:['ava', 'move', 'pfizer', 'cray', 'ime', 'askbeta'].map(id => { const c = cases.find(x => x.id === id); return c && {...c, origin:{ava:'Client / TCS', pfizer:'Client / TCS', move:'MA / UAL', cray:'Self-initiated', ime:'Internship', askbeta:'Built for Lovable’s #SheBuilds'}[id], kinds:(c.tags || []).map(t => t.split(' ').map(w => /^(UX|UI)$/.test(w) ? w : w.toLowerCase()).join(' ')).join(', '), pic:id === 'askbeta' ? c.cover : this.pic(c, false), star:id === 'ava' || id === 'move', stat:{ava:'70% fewer errors', pfizer:'became Pfizer’s design system', move:'tested with families', cray:'end-to-end platform', ime:'museum taken online', askbeta:'live prototype'}[id]}; }).filter(Boolean)}),
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
        {title:'Customer Experience (CX) Foundations', org:'LinkedIn', logo:__R('assets/certs/linkedin.png'), date:'Issued Mar 2024'}].map(c => ({...c, logoImg: React.createElement('img', {className:'yj-cert-logo', src:c.logo, alt:c.org + ' logo', style:{height:c.h || 32, width:'auto', maxWidth:120, objectFit:'contain', filter:'brightness(0) invert(1)'}})})),
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
              pick:() => this.setState({sortHov:g.k, sortItem:[g.k, ii]})}; })}; })}; })(), protoUrl: cur.proto || '#', wTabs: this._wTabs, tcsWord: TCS_WORD, tcsYrs: TCS_YRS, nowYear: NOW.getFullYear(),
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
            h('span', {style:{font:`12px ${MONO}`, letterSpacing:'0.16em', textTransform:'uppercase'}}, '(Product & service designer — open to roles)'),
            h('span', {style:{fontFamily:"'Libre Caslon Display',Georgia,serif", fontWeight:400, fontSize:'clamp(48px,7.5vw,135px)', lineHeight:0.92, letterSpacing:'-0.03em'}}, 'Have a messy problem?')),
          h('div', {style:{position:'absolute', inset:0, background:CREAM, color:INK, padding:'clamp(24px,3vw,44px)', display:'flex', flexDirection:'column', justifyContent:'space-between'}},
            h('span', {style:{font:`13px ${MONO}`, letterSpacing:'0.08em', textTransform:'uppercase', color:RED}}, '(Get in touch)'),
            h('span', {style:{fontFamily:"'Libre Caslon Display',Georgia,serif", fontWeight:400, fontSize:'clamp(48px,7.5vw,135px)', lineHeight:0.92, letterSpacing:'-0.03em'}}, "Let's frame it →"))]})
    };
  }
}

export default Component;
