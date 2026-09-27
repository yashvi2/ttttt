// Conversations with conflicted allies. Each has an agenda; what they say and
// share depends on how Maya seems right now.
import { MOM_LINES } from './data.js';

const pick = (a, k) => a[Math.abs(Math.floor(k)) % a.length];

export const TALK = {
  async dev(g, n, st) {
    const m = g.state.mind, band = g.mind.band();
    if (!st.met) {
      await g.say(n, ['You were up at four again. I heard you on the stairs.', 'I\'m not— I\'m just saying I heard.']);
      return;
    }
    const opts = ['Anything about Lily?', 'Eat with me?'];
    if (m.neglect > 0.5) opts.push('About the apartment…');
    opts.push('Not now.');
    const k = await g.ask(n, [pick({ stable: ['Rosa sent a pie up. She says eat it or she\'s calling your mother.'], shaky: ['You\'re talking to yourself again. It\'s okay. I\'m just saying.'], unstable: ['May, you\'re scaring me.'] }[band], g.state.day)], opts);
    const o = opts[k];
    if (o === 'Anything about Lily?') {
      if (!g.state.clues.guitar) {
        await g.say(n, ['I didn\'t want to say. Her guitar\'s gone. And her pill organiser — the purple one.', 'People who get taken don\'t pack their meds, May.']);
        g.clue('guitar');
        g.mind.apply({ breakdown: 4, acceptance: 3 });
      } else await g.say(n, ['I\'ve told you everything. I keep checking her room too. Nothing changes.']);
    } else if (o === 'Eat with me?') {
      await g.say(n, ['Yeah. Yes. Sit. I\'ll make eggs, it\'s the only thing I can make.']);
      g.eatWith(n, 30);
    } else if (o === 'About the apartment…') {
      const j = await g.ask(n, ['I can\'t live like this. The sink. The boxes. The posters on the floor.', 'Can we clean it this weekend? Together?'], ['You\'re right. I\'m sorry.', 'Then leave.']);
      if (j === 0) { g.trust('dev', 1); g.mind.add('acceptance', 2); st.cleanDeal = true; }
      else { g.trust('dev', -2); g.mind.add('isolation', 8); await g.say(n, ['…Okay.']); }
    }
  },

  async rosa(g, n, st) {
    const hungry = g.state.needs.hunger < 45;
    if (!st.met) { await g.say(n, ['Sweetheart. Sit. Her poster\'s in my window, every customer asks. Nobody knows. Sit.']); return; }
    if (hungry && st.lastMeal !== g.state.day) {
      await g.say(n, ['You forgot to eat again. Don\'t lie to me, I can see it in your face. Sit.', '(A slice appears. You didn\'t order it. You eat all of it.)']);
      st.lastMeal = g.state.day;
      g.eatWith(n, 35, 0);
      return;
    }
    const b = g.mind.band();
    await g.say(n, [b === 'unstable'
      ? 'You look like my husband looked the year he stopped sleeping. Please see somebody. Please.'
      : pick(['I lit a candle for her at St. Anthony\'s. He finds lost things. Sometimes he takes his time.', 'My daughter ran away once, in 1994. Three weeks. She came back when she was ready, not when I was.'], g.state.day)]);
    g.social(4);
  },

  async jess(g, n, st) {
    if (!st.met) { await g.say(n, ['MAYA. Okay. Okay. The group\'s at 212 people. We\'re going to find her. I can feel it.']); return; }
    const m = g.state.mind;
    const opts = ['Any new leads?', 'Help me post flyers', 'Jess… I need a break from this.', 'See you.'];
    const k = await g.ask(n, [pick(['I\'ve been up all night on the forum. Someone thinks they saw her on the L.', 'We should do a vigil. With candles. And press.', 'Have you tried psychics? Don\'t look at me like that.'], g.state.day)], opts);
    g.social(6);
    if (k === 0) {
      g.randomTip('Jess');
      g.mind.add('obsession', 4);
      await g.say(n, ['Sending it to you now. This could be the one!!']);
    } else if (k === 1) {
      await g.say(n, ['YES. I have tape. I have so much tape.']);
      g.postFlyers(g.state.district, 6);
    } else if (k === 2) {
      if (m.acceptance >= 35) {
        await g.say(n, ['…Okay.', 'Okay. I\'ll keep the forum going. You go be a person for a bit.']);
        g.mind.apply({ obsession: -6, acceptance: 3 });
      } else {
        await g.say(n, ['A break?', 'She doesn\'t get a break, Maya. Wherever she is, she doesn\'t get one.']);
        g.mind.apply({ breakdown: 4, obsession: 3 });
      }
    }
  },

  async sam(g, n, st) {
    const s = g.state, m = s.mind;
    if (!st.met) { await g.say(n, ['Hey. You came. I didn\'t think you would.', 'We don\'t have to talk about it. We can just walk.']); g.social(8); return; }
    const opts = ['Walk with me for a bit', 'Help me look for her', 'I\'m not okay.', 'I have to go.'];
    const k = await g.ask(n, [pick(['Have you eaten today? Honestly.', 'You look like you haven\'t slept since October.', 'I miss you. The real you, the annoying one.'], s.day)], opts);
    if (k === 0) {
      await g.fadeTime(1.5, 'An hour and a half later', 'You walk to the water and back. Sam talks about nothing. It\'s the best thing anyone has said in weeks.');
      g.social(22);
      g.mind.apply({ breakdown: -6, obsession: -3 });
      g.trust('sam', 1);
    } else if (k === 1) {
      await g.say(n, ['I can\'t help you look, May.', 'I can help you. That\'s different. Let me help you.']);
      g.trust('sam', -1);
      g.mind.add('isolation', 4, { quiet: true });
    } else if (k === 2) {
      await g.say(n, ['Thank you for telling me.', '(Sam holds your hand on the bench and doesn\'t say anything clever.)', 'Will you call Dr. Rao tomorrow? Will you take the pills tonight? Both. Please.']);
      g.social(15);
      g.mind.apply({ breakdown: -8, acceptance: 5 });
      g.trust('sam', 1);
    }
    if (st.rel <= 0 && !s.flags.samGone) g.samLeaves();
  },

  async ines(g, n) {
    const b = g.mind.band();
    await g.say(n, [{ stable: 'Your contact sheets are still good. Good is enough right now.', shaky: 'You\'re missing things, Maya. Deadlines. My emails. I\'m covering. I can\'t forever.', unstable: 'Take leave. Paid, if I can swing it. Please. You\'re scaring the interns.' }[b]]);
    g.social(3);
  },

  async russo(g, n, st) {
    const s = g.state, m = s.mind;
    if (st.flaggedUntil > s.day) {
      await g.say(n, ['Ms. Reyes. We talked about this. Go home. Get some sleep.']);
      g.mind.add('breakdown', 2);
      return;
    }
    if (m.breakdown >= 70) {
      await g.say(n, ['Ms. Reyes, you called the tip line eleven times this week. Two of the people you reported have called us about you.', 'Go home. Talk to your doctor. I\'m not telling you anything else today.']);
      st.flaggedUntil = s.day + 2;
      g.mind.apply({ breakdown: 5, obsession: 2 });
      return;
    }
    if (m.breakdown >= 45) {
      await g.say(n, ['We\'re working it. That\'s all I can tell you right now.', '(He looks at your hands. You put them in your pockets.)']);
      g.mind.add('breakdown', 1, { quiet: true });
      return;
    }
    if (!s.clues.cash) {
      await g.say(n, ['Sit down. You look better. I\'ll tell you what I can.', 'Her bank shows a $400 cash withdrawal on October 2nd. The day before.', 'Adults have the right to leave, Ms. Reyes. If she\'s safe and doesn\'t want to be found, I can\'t tell you where she is — even if I knew.']);
      g.clue('cash');
      return;
    }
    if (s.deductions.left && !s.clues.metro) {
      await g.say(n, ['One more thing. Her old MetroCard. It swipes in at Astor Place most nights, around 10:40.', 'I didn\'t tell you that.']);
      g.clue('metro');
      return;
    }
    await g.say(n, [s.day >= 50 ? `${60 - s.day} days until review. I\'m sorry. I mean that.` : 'Nothing new. You\'ll be the first to know.']);
  },

  async priya(g, n, st) {
    const s = g.state, m = s.mind;
    if (!st.met) { await g.say(n, ['You look like her. Around the eyes.', 'I need to know you\'re okay before I say anything. I mean it.']); return; }
    if (m.breakdown >= 55) {
      const k = await g.ask(n, ['You\'re shaking, Maya. I can\'t — if I tell you, you\'ll run at her.'], ['Please. Tell me.', 'Okay. Another day.']);
      if (k === 0) {
        await g.say(n, ['No. I\'m sorry.', '(She leaves her coffee. She\'s already texting someone.)']);
        g.trust('priya', -1);
        g.mind.add('pressure', 15, { quiet: true });
        g.mind.add('breakdown', 3);
      } else { g.trust('priya', 1); await g.say(n, ['Thank you. Really.']); }
      return;
    }
    g.social(8);
    if (!s.clues.priya1) {
      await g.say(n, ['Okay. Before she left, she told me she needed to disappear for a while. Her words.', 'She wasn\'t scared of anyone, Maya. She was scared of being a weight.']);
      g.clue('priya1');
      g.mind.apply({ acceptance: 5, breakdown: 3 });
      return;
    }
    if (st.rel >= 2 && !s.clues.priya2) {
      await g.say(n, ['She texted me once. Complaining about "a curfew". Somewhere with rules. That\'s all I know.']);
      g.clue('priya2');
      return;
    }
    if (st.rel >= 3 && !s.clues.song) {
      await g.say(n, ['When she can\'t sleep she plays our song at dawn. Somewhere with an echo. She always said echoes make you sound less alone.']);
      g.clue('song');
      return;
    }
    await g.say(n, ['I miss her too. Differently. But I do.']);
  },

  async gus(g, n, st) {
    const s = g.state, m = s.mind;
    if (m.breakdown >= 70) { await g.say(n, ['You look like trouble, lady. Order something or go.']); return; }
    if (!s.clues.gus) {
      await g.say(n, ['Girl on the poster? Nah. Well.', 'The new night girl, Rose. Hums the same song all shift. Same one every night. Drives me nuts. Sweet kid.']);
      g.clue('gus');
      return;
    }
    if (st.rel >= 1 && !s.clues.shift) {
      await g.say(n, ['Rose works nights. Tuesday to Saturday, eleven till six. Why you asking? …Oh.', '(He puts down the spatula.) Be gentle with her. Whatever this is.']);
      g.clue('shift');
      return;
    }
    await g.say(n, ['Coffee\'s on the house. You look like you need it more than me.']);
  },

  async carol(g, n, st) {
    const s = g.state, m = s.mind;
    if (m.breakdown >= 70) {
      await g.say(n, ['Ma\'am, I\'m going to ask you to step back from the door.', 'People here are safe because nobody gets to barge in. Please go.']);
      g.mind.add('pressure', 10, { quiet: true });
      g.mind.add('breakdown', 3);
      return;
    }
    if (!st.met) { await g.say(n, ['Harbor House. I can\'t confirm or deny who stays here. That\'s the rule. It keeps people alive.']); return; }
    if (!s.clues.carol) {
      await g.say(n, ['(She studies you for a long time.)', 'If someone was staying here — and her sister came by — I\'d tell that sister to be patient.']);
      g.clue('carol');
      if (!s.clues.signin) {
        await g.say(n, ['(On the desk, upside down, the sign-in sheet: "R. Reyes — 10:52pm".)']);
        g.clue('signin');
      }
      return;
    }
    const letter = m.letter;
    if (letter && !letter.delivered) {
      const k = await g.ask(n, ['You have a letter.'], ['Could you pass it on?', 'Never mind.']);
      if (k === 0) {
        letter.delivered = s.day;
        await g.say(n, ['I can\'t promise anyone reads it. But I can put it on a pillow.']);
        if (!s.clues.letterbox) g.clue('letterbox');
        g.mind.apply({ acceptance: 6, pressure: -8 });
      }
      return;
    }
    if (!s.clues.letterbox) {
      await g.say(n, ['I can pass on a letter. That\'s all I can do. Not a flyer. A letter.']);
      g.clue('letterbox');
      return;
    }
    await g.say(n, ['Take care of yourself. I mean that as an instruction.']);
  },

  async rao(g, n) {
    await g.say(n, [g.isSessionTime() ? 'Come in, Maya.' : `Our next session is day ${g.nextSession()} at 4pm. The waiting room is open if you need to sit somewhere quiet.`]);
  },
};

// ---------------------------------------------------------------- therapy
export async function therapySession(g) {
  const s = g.state, m = s.mind;
  const rao = { name: 'Dr. Anjali Rao', role: 'Therapist', color: '#9ad0a0' };
  const say = (lines, choices) => g.ui.dialogue({ ...rao, lines, choices: choices?.map((text) => ({ text })) });
  m.sessions++;
  m.lastSession = s.day;
  let honest = 0;
  await say([m.breakdown >= 70 ? 'Sit down. Breathe with me first. In for four.' : 'How are you, really? Not the version for other people.']);
  const a = await say(['Are you taking the medication?'], ['Yes, every day.', 'Some days.', 'I stopped. It makes me slow.']);
  if (a === 2 || (a === 0 && g.mind.onMeds())) honest++;
  if (a === 2) await say(['Thank you for telling me. Slow isn\'t the enemy. Slow is how people survive this.']);
  const topics = ['The search', 'What I\'ve been seeing', 'Mom', 'Lily'];
  if (m.sessions >= 3 && !m.letterUnlocked) topics.push('Writing to Lily');
  if (m.sessions >= 4 && !m.postersDown) topics.push('The posters');
  if (m.breakdown >= 85) topics.push('I\'m scared of myself');
  const t = topics[await say(['What do you want to use today for?'], topics)];
  if (t === 'The search') {
    await say(['What would it mean to stop looking for one afternoon?', 'Not forever. One afternoon.']);
    g.mind.apply({ obsession: -8, acceptance: 5 });
  } else if (t === 'What I\'ve been seeing') {
    const k = await say(['Tell me about it.'], ['I see her. In crowds. In the mirror.', 'Nothing. I\'m fine.']);
    if (k === 0) {
      honest++;
      m.medsPlus = true;
      m.groundBoost = true;
      await say(['That\'s your brain trying to solve an unsolvable problem at 3am. It isn\'t weakness.', 'I\'m adjusting your dose. And when it happens: look away, name five things you can see, look back. What stays is real.']);
    } else await say(['Okay. The door\'s open if that changes.']);
  } else if (t === 'Mom') {
    await say(['Her guilt is hers to carry. You can love her and not carry it for her.']);
    s.flags.momLighter = true;
    g.mind.add('breakdown', -3);
  } else if (t === 'Lily') {
    await say(['You can love someone and not be able to find them. Both things can be true at once.']);
    g.mind.add('acceptance', 7);
  } else if (t === 'Writing to Lily') {
    m.letterUnlocked = true;
    await say(['Write to her. Not to bring her home. Not to ask why.', 'Just so she knows the door is open. You can write it on your laptop tonight.']);
  } else if (t === 'The posters') {
    m.postersUnlocked = true;
    await say(['What would happen if you took some of them down?', 'If she is hiding, every poster is a spotlight. You don\'t have to decide today. But you can.']);
    g.mind.add('acceptance', 4);
  } else if (t === 'I\'m scared of myself') {
    const k = await say(['I\'m worried about your safety, Maya. I want you to consider a short stay in hospital. Voluntary. To stop falling.'], ['Okay. Yes.', 'No. Not yet.']);
    if (k === 0) { await g.ending('hospital', { voluntary: true }); return; }
    g.mind.add('breakdown', 2);
  }
  g.mind.apply({ breakdown: -(12 + honest * 4), obsession: -6, isolation: -6, acceptance: 3 + honest * 3 });
  g.state.mind.socialToday = true;
  await g.fadeTime(2, 'Fifty minutes later', 'You sit on the museum steps afterwards for a while, not looking for anyone.');
}

// ---------------------------------------------------------------- calls
export async function momCall(g, { rosie = false } = {}) {
  const s = g.state, m = s.mind;
  const mom = { name: 'Mom', role: 'calling from Tampa', color: '#e8b04e' };
  const say = (lines, choices) => g.ui.dialogue({ ...mom, lines, choices: choices?.map((text) => ({ text })) });
  const opts = ['I\'m fine, Mom.', 'I\'m not okay.', 'Stop blaming me.'];
  if (rosie) opts.splice(2, 0, 'Tell me about when we were little.');
  const k = await say([pick(MOM_LINES, s.day + m.sessions)], opts);
  const o = opts[k];
  const guilt = s.flags.momLighter ? 0.5 : 1;
  g.social(6);
  if (o === 'I\'m fine, Mom.') {
    await say(['You\'re not fine. You\'re never fine when you say it like that.']);
    g.mind.add('breakdown', Math.round(3 * guilt));
  } else if (o === 'I\'m not okay.') {
    await say(['…Oh, mija.', 'Come home for a few days? Just a few. The beach is right there. You can look again after.']);
    g.mind.apply({ breakdown: -4, acceptance: 3, isolation: -6 });
  } else if (o === 'Tell me about when we were little.') {
    await say(['You were so bossy with her. You used to make her be the assistant in your photo shoots.', 'And your grandmother never once called her Lily. Rosie, always. Lily Rose. Her little Rosie.']);
    g.clue('rosie');
    g.mind.add('breakdown', -2);
  } else {
    await say(['I\'m not— I didn\'t—', '(A long silence. She hangs up first.)']);
    g.mind.apply({ breakdown: Math.round(6 * guilt), isolation: 5 });
  }
}

export async function bellevueCall(g) {
  const who = { name: 'Bellevue Hospital', role: 'Emergency department', color: '#8cc6f2' };
  const k = await g.ui.dialogue({ ...who, lines: ['Is this Maya Reyes? We have a young woman here, unidentified, who may match the description you gave the NYPD.', 'Can you come in?'], choices: [{ text: 'I\'m coming now.' }, { text: 'Can you send me a photo?' }] });
  if (k === 0) {
    await g.fadeTime(3, 'Three hours later', 'A waiting room. A nurse. A curtain.');
    await g.ui.cards(['It isn\'t her.', 'It isn\'t her. It isn\'t her. You say it in the elevator, on the train, in the shower.', 'Somewhere, someone else\'s sister is getting a different phone call.'], { title: 'Bellevue' });
    g.mind.apply({ breakdown: 12, obsession: 5 });
  } else {
    await g.ui.cards(['The photo arrives. Dark hair, not red. A stranger\'s face.', 'You don\'t know if you\'re relieved or disappointed, and not knowing makes you sick.'], { title: 'Bellevue' });
    g.mind.apply({ breakdown: 6, obsession: 3 });
  }
}
