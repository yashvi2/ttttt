// LAST SEEN — an alternate version of London-Newyork.
// One sister, one city. Maya Reyes searches New York for her missing sister
// Lily while her own mind comes apart. All people and places are fictional.
import NYC from '../data/nyc.js';

export const MAYA = {
  name: 'Maya', full: 'Maya Reyes', color: '#e2463c',
  look: { skin: 0xc68a62, hair: 0x2a1c14, hairStyle: 'bun', top: 0x8a8f96, bottom: 0x2a2f3a, coat: 0x3a3f48, scarf: 0xb88a2a, accessory: 'camera' },
};
export const LILY = {
  name: 'Lily', full: 'Lily Reyes', color: '#6fbf8a',
  look: { skin: 0xc68a62, hair: 0x9a3a1e, hairStyle: 'long', top: 0xd8c8a8, bottom: 0x1f2228, coat: 0x2f5a44, accessory: 'guitar' },
};

// Day 1 is Thursday 22 October. The case goes inactive on day 60.
export const WEEKDAYS = ['Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'];
export const CASE_DAYS = 60;
export const MISSING_BEFORE = 19; // Lily had been missing this many days when the game starts
export const isTherapyDay = (day) => day % 3 === 0;
export const isShiftNight = (day) => ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].includes(WEEKDAYS[(day - 1) % 7]);

// ---------------------------------------------------------------- world
const src = Object.fromEntries(NYC.districts.map((d) => [d.id, d]));
const without = (d, ids) => d.pois.filter((p) => !ids.includes(p.id));
const districts = [
  {
    ...src.brooklyn, sub: 'Home, or what is left of it',
    pois: without(src.brooklyn, ['home', 'records']).concat([
      { id: 'home', type: 'home', name: 'Home — the apartment', cell: [0, 0], side: 'w' },
    ]),
  },
  {
    ...src.midtown, sub: 'Work, the precinct, the diner',
    pois: without(src.midtown, ['studio', 'diner', 'skylight']).concat([
      { id: 'studio', type: 'work', name: 'Lumen Agency', cell: [-1, 0], side: 'e', hours: [8, 21], sign: { bg: '#101418', fg: '#ffffff', font: 'Helvetica, Arial, sans-serif' } },
      { id: 'diner', type: 'eat', name: 'Mercer Diner', cell: [1, 0], side: 'w', hours: [0, 24], sign: { bg: '#c9d9e8', fg: '#b3121e', awning: 0xb3121e },
        menu: [
          { name: 'Coffee and a grilled cheese', price: 9, hunger: 40, note: 'You eat half. The cook pretends not to notice you left the rest.' },
          { name: 'Just coffee', price: 3, hunger: 4, note: 'Your hands shake around the mug. It isn\'t the caffeine.' },
        ] },
      { id: 'precinct', type: 'police', name: 'NYPD Missing Persons', cell: [1, -1], side: 'w', hours: [9, 19], sign: { bg: '#1d2a4a', fg: '#ffffff', font: 'Helvetica, Arial, sans-serif' } },
    ]),
  },
  {
    ...src.village, sub: 'Lily\'s old haunts',
    pois: without(src.village, ['olive', 'gallery9']).concat([
      { id: 'harbor', type: 'shelter', name: 'Harbor House', cell: [-1, 0], side: 'e', hours: [8, 23], sign: { bg: '#3a2a4a', fg: '#f3e6c4' } },
    ]),
  },
  { ...src.centralpark, sub: 'Where she used to play at dawn' },
  {
    ...src.uws, sub: 'Dr. Rao\'s office',
    pois: src.uws.pois.concat([
      { id: 'therapy', type: 'therapy', name: 'Dr. Rao — Psychotherapy', cell: [0, 0], side: 'n', hours: [9, 19], sign: { bg: '#e8efe6', fg: '#2a4a3a', font: 'Georgia, serif' } },
    ]),
  },
].map((d) => ({ ...d, pois: d.pois.filter((p) => p.type !== 'gem' || p.menu || p.text) }));

// ---------------------------------------------------------------- people
export const NPCS = [
  {
    id: 'dev', name: 'Dev Raman', role: 'Roommate',
    look: { skin: 0xa36a44, hair: 0x14100c, hairStyle: 'short', top: 0x3a5a7a, bottom: 0x2a2a2a, accessory: 'bag' },
    schedule: [{ from: 7, to: 10, district: 'brooklyn', at: [-20, -6] }, { from: 18, to: 23, district: 'brooklyn', cell: [1, 0], side: 'n', t: -0.4 }],
  },
  {
    id: 'rosa', name: 'Rosa Bellini', role: 'Rosa\'s Slice',
    look: { skin: 0xd8a47e, hair: 0x9a9a9a, hairStyle: 'bun', top: 0xffffff, bottom: 0x2a2a2a, scarf: 0xb3121e },
    schedule: [{ from: 11, to: 26, district: 'brooklyn', cell: [1, 0], side: 'n', t: -0.4 }],
  },
  {
    id: 'jess', name: 'Jess Kowalski', role: 'Friend · runs the search group',
    look: { skin: 0xf1c9a5, hair: 0xd8b36a, hairStyle: 'bob', top: 0xe06a2a, bottom: 0x2a2a3a, coat: 0xe06a2a, accessory: 'bag' },
    schedule: [{ from: 11, to: 18, district: 'brooklyn', at: [12, -46] }, { from: 19, to: 23, district: 'midtown', at: [8, -30] }],
  },
  {
    id: 'sam', name: 'Sam Okafor', role: 'Best friend since college',
    look: { skin: 0x6e4529, hair: 0x14100c, hairStyle: 'short', top: 0x2a4a6a, bottom: 0x3a3a3a, coat: 0x5a4636, scarf: 0x9a2a2a },
    schedule: [{ from: 12, to: 14, district: 'midtown', at: [-44, 44] }, { from: 18, to: 21, district: 'brooklyn', at: [-44, 10] }],
  },
  {
    id: 'ines', name: 'Inés Duarte', role: 'Photo editor · Lumen Agency',
    look: { skin: 0xe8c4a0, hair: 0x1b1410, hairStyle: 'bob', top: 0x1d1d1d, bottom: 0x1d1d1d, coat: 0x7a6a50 },
    schedule: [{ from: 9, to: 18, district: 'midtown', cell: [-1, 0], side: 'e', t: 0.3 }],
  },
  {
    id: 'russo', name: 'Det. Frank Russo', role: 'NYPD Missing Persons',
    look: { skin: 0xd8a47e, hair: 0x8a8a8a, hairStyle: 'short', top: 0x3a4a5a, bottom: 0x2a2a2a, coat: 0x4a4a52 },
    schedule: [{ from: 9, to: 19, district: 'midtown', cell: [1, -1], side: 'w', t: 0.3 }],
  },
  {
    id: 'rao', name: 'Dr. Anjali Rao', role: 'Therapist',
    look: { skin: 0x9a6440, hair: 0x1b1410, hairStyle: 'bun', top: 0x5a3a6a, bottom: 0x2a2a3a, scarf: 0xd8b36a },
    schedule: [{ from: 9, to: 19, district: 'uws', cell: [0, 0], side: 'n', t: 0.3 }],
  },
  {
    id: 'priya', name: 'Priya Nair', role: 'Lily\'s bandmate', fromDay: 9,
    look: { skin: 0xa36a44, hair: 0x14100c, hairStyle: 'long', top: 0x2a2a2a, bottom: 0x3a2a4a, coat: 0x6a2a4a, accessory: 'bag' },
    schedule: [{ from: 13, to: 17, district: 'village', cell: [-1, -1], side: 'e', t: 0.3 }, { from: 20, to: 24, district: 'village', cell: [1, 0], side: 'w', t: 0.3 }],
  },
  {
    id: 'gus', name: 'Gus Petrakis', role: 'Night cook · Mercer Diner',
    look: { skin: 0xc8946a, hair: 0x3a2a1e, hairStyle: 'bald', top: 0xffffff, bottom: 0x2a2a2a, cap: 0xffffff },
    schedule: [{ from: 22, to: 30, district: 'midtown', cell: [1, 0], side: 'w', t: 0.3 }],
  },
  {
    id: 'carol', name: 'Carol Whitford', role: 'Volunteer · Harbor House',
    look: { skin: 0xf1c9a5, hair: 0xbbbbbb, hairStyle: 'bun', top: 0x3a6a5a, bottom: 0x2a2a2a, coat: 0x8a7a6a },
    schedule: [{ from: 9, to: 21, district: 'village', cell: [-1, 0], side: 'e', t: 0.3 }],
  },
];

// ---------------------------------------------------------------- the case
export const CLUES = {
  key: { d: 'left', title: 'Her key, posted back', text: 'A padded envelope, no note, postmarked Manhattan. Inside: Lily\'s key to the apartment.', src: 'The mail' },
  guitar: { d: 'left', title: 'Guitar and pills gone', text: 'Dev: her guitar is gone. So is the purple pill organiser. People who get taken don\'t pack their meds.', src: 'Dev' },
  cash: { d: 'left', title: '$400, the day before', text: 'Det. Russo: Lily withdrew $400 in cash on October 2nd.', src: 'Det. Russo' },
  priya1: { d: 'left', title: '"Disappear for a while"', text: 'Priya: Lily said she needed to disappear for a while. Her words.', src: 'Priya' },
  rosie: { d: 'name', title: 'Rosie', text: 'Mom: Grandma never called her Lily. She called her Rosie — Lily Rose Reyes.', src: 'Mom' },
  gus: { d: 'name', title: 'The new night girl', text: 'Gus: the new night waitress, Rose, hums a song while she works. The same one, every night.', src: 'Gus' },
  nametag: { d: 'name', title: 'ROSE', text: 'A dropped name badge by the diner door: ROSE.', src: 'Found outside Mercer Diner' },
  signin: { d: 'name', title: 'R. Reyes, 10:52pm', text: 'Harbor House sign-in sheet, upside down on the desk: "R. Reyes — 10:52pm".', src: 'Harbor House' },
  tote: { d: 'where', title: 'Harbor House tote', text: 'A canvas tote on the pavement: HARBOR HOUSE — women\'s respite, E 4th St.', src: 'Found on E 4th St' },
  carol: { d: 'where', title: 'Be patient', text: 'Carol: "If someone\'s sister came by, I\'d tell her to be patient."', src: 'Carol' },
  priya2: { d: 'where', title: 'A curfew', text: 'Priya: Lily complained about "a curfew". Somewhere with rules.', src: 'Priya' },
  metro: { d: 'where', title: 'Astor Place, 10:40pm', text: 'Det. Russo: her old MetroCard swipes in at Astor Place most nights around 10:40pm.', src: 'Det. Russo' },
  shift: { d: 'reach', title: 'Tue–Sat, 11 to 6', text: 'Gus: Rose works nights, Tuesday to Saturday, eleven till six.', src: 'Gus' },
  dawn: { d: 'reach', title: 'The pick at Bethesda', text: 'A tortoiseshell guitar pick on the terrace steps. Lily\'s. She plays there at dawn when she can\'t sleep.', src: 'Bethesda Terrace' },
  letterbox: { d: 'reach', title: 'A letter, passed on', text: 'Carol: "I can pass on a letter. That\'s all I can do."', src: 'Carol' },
  song: { d: 'reach', title: 'Our song, at dawn', text: 'Priya: when she can\'t sleep she plays their song somewhere with an echo.', src: 'Priya' },
};

export const DEDUCTIONS = [
  {
    id: 'left', q: 'Did Lily leave on her own?', need: 3, clues: ['key', 'guitar', 'cash', 'priya1'],
    options: [
      { text: 'Someone took her', wrong: 'Kidnappers don\'t post the house key back. Your hands are shaking. You pin it anyway, then tear it down.' },
      { text: 'She left on her own', correct: true },
      { text: 'An accident. She\'s hurt somewhere.', wrong: 'Hospitals, precincts, the river. Russo checked them all. You check them again in your head, all night.' },
    ],
    reveal: 'She packed her meds. She took cash. She sent the key back. Lily left. She left you.',
  },
  {
    id: 'name', q: 'What name is she using?', need: 3, clues: ['rosie', 'gus', 'nametag', 'signin'],
    options: [
      { text: 'Lily, still', wrong: 'Nobody in the city has seen a Lily. That\'s the point.' },
      { text: 'A stage name, "LR"', wrong: 'She hated stage names. She said they were for people who wanted to be someone else.' },
      { text: 'Rose — her middle name', correct: true },
    ],
    reveal: 'Rose. Grandma\'s name for her. She\'s hiding inside a name that loved her.',
  },
  {
    id: 'where', q: 'Where is she sleeping?', need: 3, clues: ['tote', 'carol', 'priya2', 'metro'],
    options: [
      { text: 'Harbor House, the respite on E 4th St', correct: true },
      { text: 'A commune upstate (Jess\'s theory)', wrong: 'Jess found it on a forum. Jess finds everything on a forum.' },
      { text: 'Home with Mom in Tampa', wrong: 'Mom calls you every night crying. Lily isn\'t there.' },
    ],
    reveal: 'Harbor House. A curfew, a sign-in sheet, a place for women who need to not be found for a while.',
  },
  {
    id: 'reach', q: 'Where can you reach her?', need: 3, clues: ['shift', 'dawn', 'letterbox', 'song'], requires: ['name', 'where'],
    options: [
      { text: 'Bethesda Terrace at dawn', wrong: 'She only goes when she can\'t sleep. You can\'t plan a life around her insomnia. You\'d try.' },
      { text: 'Mercer Diner, on her night shift', correct: true },
      { text: 'The bridge, where you used to walk', wrong: 'That was yours. Not hers. Maybe that was the problem.' },
    ],
    reveal: 'Mercer Diner. Tuesday to Saturday, eleven till six. She\'s been pouring coffee four stops from your office.',
  },
];

// Real sightings: Lily is actually there. Hallucinations look the same.
export const SIGHTINGS = [
  { id: 'S1', district: 'centralpark', at: [0, 13], face: Math.PI, days: [5, 16], hours: [5.4, 7.4], pose: 'busk', exit: [30, 40], clue: 'dawn', item: 'A tortoiseshell guitar pick on the terrace steps. Lily\'s. She has been playing here at dawn.' },
  { id: 'S2', district: 'midtown', at: [33.6, 6], face: -Math.PI / 2, days: [8, 60], hours: [25, 28], shift: true, pose: 'idle', exit: [33.6, 0.6], clue: 'nametag', item: 'By the diner door, a name badge somebody dropped: ROSE.' },
  { id: 'S3', district: 'village', at: [-33.6, 17], face: Math.PI, days: [12, 60], hours: [21.5, 22.8], pose: 'walk', exit: [-33.6, 0.6], clue: 'tote', item: 'A canvas tote on the pavement, dropped in a hurry: HARBOR HOUSE — women\'s respite.' },
];

// Tips and leads. `real: false` leads cost Maya when she chases them.
export const LEADS = {
  L1: { from: 'Tip line', text: 'Caller says a woman matching the flyer was sitting on the red steps in Times Square, 7–9pm.', district: 'midtown', at: [0, -40], days: [2, 2], hours: [19, 21], real: false,
    result: ['A girl with red hair on the red steps. Green jacket. Your heart stops.', 'She turns. Sixteen, maybe. Her dad is taking her photo.', 'It isn\'t Lily. It was never going to be Lily.'] },
  L2: { from: 'Jess', text: 'someone on the NYCMissing forum says a girl w/ a guitar busks at Bethesda Terrace at DAWN. tomorrow 6am??', district: 'centralpark', at: [0, 13], days: [5, 5], hours: [5.4, 7.4], real: true, sighting: 'S1',
    result: ['The terrace is empty. Just the angel, and the echo, and your own breathing.'] },
  L3: { from: 'Jess', text: 'OK this is big: someone saw her buying a bus ticket upstate on 8th Ave. meet me at 4??', district: 'midtown', at: [25, -75], days: [5, 5], hours: [16, 18], real: false,
    result: ['Jess is already there with a stack of flyers.', 'A bus pulls out. A woman with a guitar case climbs on. You run.', 'The door hisses shut. She turns: sixty, silver hair, a ukulele. She waves at you, kindly.', 'Jess says it could have been her on an earlier bus. It couldn\'t.'] },
  L5: { from: 'Tip line', text: 'A night-shift worker says a new waitress at a Midtown diner "looks like the girl on the poster". Mercer Diner, after 11pm.', district: 'midtown', poi: 'diner', days: [8, 30], hours: [23, 29.5], real: true, talk: 'gus',
    result: ['The diner is bright and nearly empty. A cook watches hockey on a tiny TV.'] },
  L6: { from: 'nightowl_77 (forum)', text: 'I know where she is. Williamsburg waterfront, midnight tonight. Come alone. Tell no one.', district: 'brooklyn', at: [-74, 6], days: [10, 10], hours: [24, 25.5], real: false,
    result: ['Midnight. The river is black and loud. Nobody comes.', 'Your phone buzzes: nightowl_77 has deleted their account.', 'You stand there until you can\'t feel your hands.'] },
  L8: { from: 'Tip line', text: 'Woman in a green coat walks into a building on E 4th St most nights around 10pm. Carries a guitar case.', district: 'village', at: [-33.6, 12], days: [12, 40], hours: [21.5, 22.8], real: true, sighting: 'S3',
    result: ['E 4th St is quiet. A bicycle bell. A door closing somewhere.'] },
};

// Anonymous tips that come in when the flyers are up. Nearly all are false.
export const TIP_TEMPLATES = [
  { text: 'Saw her on the L train toward Manhattan this morning, around 8.', district: 'brooklyn', poi: 'bk_station', hours: [7.5, 9.5] },
  { text: 'Red-haired girl busking by the arch in Washington Square. Today, afternoon.', district: 'village', at: [0, 22], hours: [13, 16] },
  { text: 'Woman from the poster was on the museum steps on the Upper West Side, lunchtime.', district: 'uws', at: [0, -34], hours: [11.5, 14] },
  { text: 'I think she works at the bagel place on the UWS. Mornings.', district: 'uws', poi: 'bagels', hours: [7, 10] },
  { text: 'Saw a girl with a guitar case reading in Bryant Park. She looked scared.', district: 'midtown', at: [-50, 44], hours: [12, 15] },
  { text: 'She was at the Lakeside Boathouse. Green coat. Crying?', district: 'centralpark', poi: 'boathouse', hours: [15, 18] },
];
export const FALSE_RESULTS = [
  ['Red hair. Green coat. You say her name out loud.', 'The woman turns. She is older than Lily, and frightened of you.', 'You apologise twice. Your voice doesn\'t sound like yours.'],
  ['Nobody matching the description. You stay an hour anyway, scanning every face.', 'On the way back you realise you haven\'t blinked properly in a while.'],
  ['There she is — no. A stranger with the same walk.', 'You follow her for two blocks before you make yourself stop.'],
];

// ---------------------------------------------------------------- scripted days
// kind: text | call | lead | event. `cond` gates an entry on game state.
export const EVENTS = [
  { id: 'e_mom1', day: 1, hour: 7.8, kind: 'text', from: 'Mom', text: 'Any news? The detective doesn\'t call me back. Call me, mija. Please.' },
  { id: 'e_jess1', day: 1, hour: 8.0, kind: 'text', from: 'Jess', text: 'printed 500 more flyers!!! the search group is up to 212 members 💪 post some near your station today?' },
  { id: 'e_sam1', day: 1, hour: 8.1, kind: 'text', from: 'Sam', text: 'Hey. Thinking about you. I\'m walking at Domino Park after work tonight. Come if you want. You don\'t have to talk about it.' },
  { id: 'e_ines1', day: 1, hour: 8.3, kind: 'event', fn: 'firstAssignment', from: 'Inés', text: 'Maya — I know. I\'m so sorry. I still need the Empire State shots for the Harlow piece by Saturday. Midtown, daytime.' },
  { id: 'e_rao1', day: 1, hour: 9, kind: 'text', from: 'Dr. Rao', text: 'Reminder: session on Saturday (day 3), 4–6pm. Keep taking the meds, even when it feels pointless. Especially then.' },
  { id: 'e_tip1', day: 2, hour: 9, kind: 'lead', lead: 'L1' },
  { id: 'e_key', day: 3, hour: 8, kind: 'text', from: 'Dev', text: 'a padded envelope came for you. no note. May, it\'s lily\'s key. I left it on your desk.', clue: 'key', mind: { breakdown: 6, obsession: 4 } },
  { id: 'e_tip2', day: 4, hour: 21, kind: 'lead', lead: 'L2' },
  { id: 'e_tip3', day: 5, hour: 12.5, kind: 'lead', lead: 'L3' },
  { id: 'e_mom2', day: 6, hour: 19, kind: 'call', call: 'momRosie' },
  { id: 'e_bellevue', day: 7, hour: 11, kind: 'call', call: 'bellevue' },
  { id: 'e_tip5', day: 8, hour: 22.5, kind: 'lead', lead: 'L5' },
  { id: 'e_priya', day: 9, hour: 12, kind: 'text', from: 'Priya', text: 'It\'s Priya. From Lily\'s band. Can we talk? Café Lune in the Village, afternoons. Just you, please.' },
  { id: 'e_owl', day: 10, hour: 23.2, kind: 'lead', lead: 'L6' },
  { id: 'e_tip8', day: 12, hour: 20, kind: 'lead', lead: 'L8' },
  { id: 'e_russo20', day: 20, hour: 10, kind: 'text', from: 'Det. Russo', text: 'Ms. Reyes. A courtesy: the case is reviewed at the 60-day mark. If nothing new comes in, it goes inactive.' },
  { id: 'e_russo45', day: 45, hour: 10, kind: 'text', from: 'Det. Russo', text: 'Fifteen days until review. I\'m sorry. I mean that.' },
  { id: 'e_russo55', day: 55, hour: 10, kind: 'text', from: 'Det. Russo', text: 'Five days. If you have anything, now is the time.' },
];

export const MOM_LINES = [
  'Are you eating? You never eat when you\'re sad. You get that from your father.',
  'I should have made her come home after the summer. I should have—',
  'You were supposed to look after her, Maya. That was the whole idea.',
  'Your aunt says I should stop calling you so much. I can\'t stop.',
  'I lit a candle at St. Jude\'s. Lost causes. Don\'t tell me it\'s silly.',
  'I keep her room exactly how it was. Is that crazy?',
];

// ---------------------------------------------------------------- narrative
export const INTRO = [
  'Lily Reyes, 24. Last seen on October 3rd at 11:48pm, leaving Bedford Av station.',
  'That was nineteen days ago.',
  'The police say adults are allowed to leave. Her sister Maya says Lily would never leave without telling her.',
  'Maya hasn\'t slept properly since. She hasn\'t stopped looking, either.',
  'In sixty days the case goes inactive. Maya might not last that long.',
];

export const HOW_TO = [
  'Look after Maya while she looks for Lily.',
  'Everything moves her mind: sleep, food, friends, the flyers, every tip that turns out to be nothing. Watch the Breakdown meter.',
  'Not everything you see is there. When you\'re not sure, press R to ground yourself: look away, count what\'s real, look back.',
];

export const ENDINGS = {
  found: {
    title: 'Found',
    cards: [
      'Mercer Diner, 3:10am. She\'s behind the counter in a borrowed apron. The badge says ROSE.',
      'You don\'t run. You sit at the counter and order two coffees, and you wait.',
      'Lily: "You found me." Not angry. Just tired, like you.',
      '"I heard you on the phone every night, crying about money, about work, about me. I thought if I took myself out of the picture, it would get lighter for you."',
      '"Then I saw the posters. Hundreds of them. My face on every pole in Brooklyn. I couldn\'t breathe."',
      'You tell her the truth: that you haven\'t slept either. That you\'ve been seeing her everywhere. That you\'re going to see somebody about it — properly this time.',
      'She keeps her bed at Harbor House for now. Sundays you meet here, at 3am, when neither of you can sleep.',
      'The next morning you take the posters down, one by one. Found isn\'t the same as fixed. But it\'s a start.',
    ],
  },
  foundBy: {
    title: 'She Found You',
    cards: [
      'A text from a number you don\'t know: "It\'s me. I read your letter. Can I come by? Just me."',
      'You clean the apartment for the second time in a week. You take your meds. You sit on your hands.',
      'The knock is so quiet you almost miss it.',
      'Lily: "You took the posters down." You nod. "You didn\'t come to the shelter." You shake your head. "Carol said you looked better."',
      '"I didn\'t want to come back to someone I\'d broken. I needed to know you were okay without me first."',
      'She stays for tea. Then for dinner. Then she sleeps on the couch, and you both sleep through the night for the first time since October.',
      'She came home when coming home didn\'t mean getting caught.',
    ],
  },
  hospital: {
    title: 'Admitted',
    cards: [
      'You don\'t remember the train. You remember a crowd at Times Square turning into her, every face, all at once.',
      'Then an EMT with kind eyes, and Sam\'s voice somewhere saying your name the way you used to say Lily\'s.',
      'The ward is quiet. The windows don\'t open. For three days you sleep, and nobody asks you to search for anything.',
      'Dr. Rao comes on the fourth day. "This isn\'t the end of anything," she says. "It\'s a place to stop falling."',
      'The meds get adjusted. The faces in the hallway stop turning into hers. Group therapy is terrible and then it isn\'t.',
      'Outside, the posters are still up all over Brooklyn. Someone else is looking after them now.',
      'Recovery isn\'t an ending. It\'s a direction.',
    ],
  },
  unresolved: {
    title: 'Last Seen',
    cards: [
      'Day 60. Russo calls himself, which he didn\'t have to. The case goes inactive. "Inactive isn\'t closed," he says. "If she calls, we pick up."',
      'You take the posters down on a Sunday. You keep one. You put it in a drawer and not on the wall.',
      'You start photographing again. Not faces. Empty places: a bench, a stairwell, the diner at 3am. You call the series "Last Seen".',
      'You don\'t know where she is. You may never know.',
      'You live anyway. Some days that\'s the hardest thing in the city, and you do it.',
    ],
    low: 'On the L train you still check every red-haired woman. Some mornings, a little less.',
  },
};

export const ROUTE = {
  id: 'lastseen',
  city: 'New York',
  currency: '$',
  backdrop: 'manhattan',
  protagonist: 'maya',
  sister: 'lily',
  startDistrict: 'brooklyn',
  roommate: 'dev',
  startMoney: 240,
  weather: { rain: 0.34, cloudy: 0.36, leaves: true },
  prefs: [],
  season: 'October',
  metro: NYC.metro,
  districts,
  npcs: NPCS,
  messages: [],
  assignments: NYC.work.assignments.filter((a) => a.spot !== 'rooftopGold'),
};
