import { defineScreen } from '../dc/defineScreen.js';
import { css, cx, asset, each, t } from '../dc/template.js';

// Editorial photos are shown as blue halftone prints (made by scripts/halftone.py).
// Diagrams, journey maps and the game's artwork stay in full colour so they read clearly,
// and clicking any photo still opens the original in the lightbox.
const HT = /(postcard-mockup|iwillgoout|exhibit-wall-hq|exhibit-visitor-hq|exhibit-tags-hq|focus-group|expert-interview|game-family|game-classroom|game-a|game-c|testing-1|testing-2)\.webp$/;
const ht = (p) => (typeof p === 'string' ? p.replace(HT, '$1-ht.webp') : p);
import Logic from './CaseMove.logic.js';
import './CaseMove.states.css';

function template(v) {
  return (
    <>
      <div
        ref={v.mvRef}
        style={{
          overflowX: 'clip',
          background: '#fcfbf8',
          color: '#141210',
          fontFamily: "'Source Serif 4',serif",
          paddingBottom: '64px',
        }}
      >
        {' '}
        <nav
          data-mv-float="1"
          aria-label="Sections (sticky)"
          style={{
            position: 'fixed',
            left: '0',
            right: '0',
            top: '0',
            zIndex: '25',
            display: 'flex',
            justifyContent: 'center',
            gap: '6px 28px',
            flexWrap: 'wrap',
            padding: '12px clamp(20px,4vw,56px)',
            background: '#f2f0eb',
            borderTop: '2px solid #141210',
            borderBottom: '2px solid #141210',
            opacity: '0',
            pointerEvents: 'none',
            transform: 'translateY(-12px)',
            transition: 'opacity 260ms,transform 260ms,top 380ms cubic-bezier(.2,.7,.2,1)',
          }}
        >
          {each(v.mv?.nav, (c, $index) => (
            <>
              <a
                className="dc-hover-d5d3cd45"
                onClick={c?.go}
                style={css(
                  `cursor:pointer;font-family:'Source Serif 4',serif;font-size:13px;letter-spacing:0.12em;font-weight:700;text-transform:uppercase;color:${c?.c ?? ''};text-decoration:none;border-bottom:2px solid ${c?.u ?? ''};padding-bottom:2px`,
                )}
              >
                {t(c?.l)}
              </a>
            </>
          ))}
        </nav>{' '}
        <section
          data-mv="top"
          aria-label="Front page"
          style={{
            padding: '120px clamp(20px,8.4vw,120px) 0',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}
        >
          <div style={{ borderTop: '4px double #141210', paddingTop: '6px' }} />
          <div style={{ textAlign: 'center', padding: '10px 0 4px' }}>
            {' '}
            <span
              style={{
                display: 'block',
                fontFamily: "'Source Serif 4',Georgia,serif",
                fontWeight: '600',
                fontSize: 'clamp(56px,11.5vw,184px)',
                lineHeight: '0.92',
                letterSpacing: '0.01em',
                textTransform: 'uppercase',
                color: '#141210',
              }}
            >
              The Daily Commute
            </span>{' '}
          </div>
          <div
            style={{
              borderTop: '4px double #141210',
              borderBottom: '4px double #141210',
              padding: '9px 0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '8px 20px',
              flexWrap: 'wrap',
              fontFamily: "'Source Serif 4',serif",
              fontSize: '13px',
              letterSpacing: '0.12em',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: '#141210',
            }}
          >
            <span>Vol. 01, No. 01</span>
            <span style={{ color: '#c4161c' }}>✱</span>
            <span>Case study · MA Design Management</span>
            <span style={{ color: '#c4161c' }}>✱</span>
            <span>New Delhi · London · 2025–26</span>
          </div>
          <div style={{ textAlign: 'center', padding: '14px 0 10px', borderBottom: '1px solid #141210' }}>
            <span
              style={{
                fontFamily: "'Source Serif 4',Georgia,serif",
                fontWeight: '500',
                fontSize: 'clamp(40px,7vw,104px)',
                lineHeight: '1',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: '#141210',
              }}
            >
              {'Special '}
              <span style={{ color: '#c4161c' }}>Report</span>
            </span>
          </div>
          <nav
            aria-label="Sections"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '4px 28px',
              flexWrap: 'wrap',
              padding: '10px 0',
              borderTop: '3px solid #141210',
              paddingTop: '8px',
            }}
          >
            {each(v.mv?.nav, (c, $index) => (
              <>
                <a
                  className="dc-hover-d5d3cd45"
                  onClick={c?.go}
                  style={css(
                    `cursor:pointer;font-family:'Source Serif 4',serif;font-size:13px;letter-spacing:0.12em;font-weight:700;text-transform:uppercase;color:${c?.c ?? ''};text-decoration:none;border-bottom:2px solid ${c?.u ?? ''};padding-bottom:2px`,
                  )}
                >
                  {t(c?.l)}
                </a>
              </>
            ))}
          </nav>
          <div
            aria-label="Skills this case shows"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
              gap: '16px',
              paddingTop: '24px',
            }}
          >
            {each(v.mv?.skillsTop, (k, $index) => (
              <>
                <button
                  className="dc-hover-09ce8d48"
                  onClick={k?.go}
                  style={{
                    all: 'unset',
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    padding: '16px 18px',
                    background: '#f2f0eb',
                    borderTop: '3px solid #c4161c',
                    transition: 'background 200ms',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: '#c4161c',
                    }}
                  >
                    {t(k?.n)}
                    {' · Skill shown'}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',Georgia,serif",
                      fontWeight: '600',
                      fontSize: '26px',
                      lineHeight: '1.05',
                      color: '#141210',
                    }}
                  >
                    {t(k?.k)}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '15px',
                      lineHeight: '1.4',
                      color: '#4a4440',
                    }}
                  >
                    {t(k?.d)}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: '#141210',
                    }}
                  >
                    {'See '}
                    {t(k?.see)}
                    {' →'}
                  </span>
                </button>
              </>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', paddingTop: '32px' }}>
            <article
              style={{ flex: '2.2 1 520px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#c4161c',
                }}
              >
                Women’s safety · Delhi
              </span>
              <h1
                style={{
                  margin: '0',
                  fontFamily: "'Source Serif 4',Georgia,serif",
                  fontWeight: '600',
                  fontSize: 'clamp(40px,5.6vw,88px)',
                  lineHeight: '0.98',
                  letterSpacing: '-0.015em',
                  color: '#141210',
                  textWrap: 'balance',
                }}
              >
                Another woman, another ride home she couldn’t get out of
              </h1>
              <p
                style={{
                  margin: '0',
                  fontFamily: "'Source Serif 4',serif",
                  fontStyle: 'italic',
                  fontSize: 'clamp(19px,1.5vw,22px)',
                  lineHeight: '1.45',
                  color: '#4a4440',
                  maxWidth: '820px',
                  textWrap: 'pretty',
                }}
              >
                A year-long design study asks why women are still left to manage this alone.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px 20px',
                  padding: '10px 0',
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#141210',
                }}
              >
                <span style={{ fontWeight: '700' }}>By Yashvi Jain</span>
                <span style={{ color: '#4a4440' }}>{'Research, strategy & design'}</span>
                <span style={{ color: '#4a4440' }}>UAL London College of Communication · 2025–26</span>
              </div>
              <figure data-yj-rv="scale" style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#f2f0eb' }}>
                  <div
                    data-yj-px="0.12"
                    data-yj-pxmax="60"
                    style={{ position: 'absolute', left: '0', right: '0', top: '-12%', bottom: '-12%' }}
                  >
                    <img
                      src="assets/web/assets/ma/postcard-mockup-ht.webp"
                      alt="The campaign postcard, front and back, on a kerb"
                      style={{
                        position: 'absolute',
                        inset: '0',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: '50% 50%',
                      }}
                    />
                  </div>
                </div>
                <figcaption
                  style={{
                    fontFamily: "'Source Serif 4',serif",
                    fontStyle: 'italic',
                    fontSize: '14px',
                    lineHeight: '1.45',
                    color: '#4a4440',
                  }}
                >
                  The campaign postcard: “She shouldn’t have to plan her journey around someone’s behaviour.”
                </figcaption>
              </figure>
              <div
                style={{
                  margin: '0',
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '17px',
                  lineHeight: '1.62',
                  color: '#2a2522',
                  columnWidth: '300px',
                  columnGap: '40px',
                  columnRule: '1px solid #d6d2ca',
                }}
              >
                {' '}
                <p style={{ margin: '0 0 14px' }}>
                  <span
                    style={{
                      float: 'left',
                      fontFamily: "'Source Serif 4',Georgia,serif",
                      fontWeight: '600',
                      fontSize: '76px',
                      lineHeight: '0.8',
                      padding: '6px 10px 0px 0px',
                      color: 'rgb(20, 18, 16)',
                    }}
                  >
                    “I
                  </span>
                  {
                    ' once took a cab home at night. It was fine for a while, but then I could see the driver touching himself inappropriately. I wanted to get out, but I couldn’t, as he might just stop the car at any random place or take another sketchier path.” - Participant'
                  }
                </p>{' '}
                <p style={{ margin: '0 0 14px' }}>
                  <strong
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      fontSize: '15px',
                    }}
                  >
                    New Delhi:
                  </strong>
                  {' Her story, from this study’s audio diaries, is not unusual.'}
                </p>{' '}
                <figure
                  style={{
                    margin: '0 0 14px',
                    breakInside: 'avoid',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '16/9',
                      overflow: 'hidden',
                      background: '#ffffff',
                      border: '1px solid #d6d2ca',
                    }}
                  >
                    <img
                      src="assets/web/assets/ma/iwillgoout-ht.webp"
                      alt="Women marching behind an “I will go out” banner"
                      loading="lazy"
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <figcaption
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      fontStyle: 'italic',
                      fontSize: '14px',
                      lineHeight: '1.45',
                      color: '#4a4440',
                    }}
                  >
                    #IWillGoOut: women march to reclaim public space after dark.
                  </figcaption>
                </figure>{' '}
                <p style={{ margin: '0' }}>
                  <a
                    onClick={v.mv?.goResearch}
                    style={{
                      cursor: 'pointer',
                      fontFamily: "'Source Serif 4',serif",
                      fontWeight: '700',
                      fontSize: '14px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#c4161c',
                    }}
                  >
                    Continued in Investigation, A3 →
                  </a>
                </p>{' '}
              </div>
            </article>
            <aside
              style={{
                flex: '1 1 280px',
                minWidth: '0',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                paddingLeft: '28px',
                borderLeft: '1px solid #d6d2ca',
              }}
            >
              <figure data-yj-rv="scale" style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button
                  onClick={v.mv?.openPoster}
                  aria-label="Enlarge What It Takes to Move — campaign poster"
                  style={{
                    all: 'unset',
                    cursor: 'zoom-in',
                    display: 'block',
                    position: 'relative',
                    aspectRatio: '595/842',
                    overflow: 'hidden',
                    background: '#f2f0eb',
                  }}
                >
                  <img
                    src="assets/web/poster-w-bleed-mv6ojma9-46no.webp"
                    alt="What It Takes to Move — campaign poster"
                    loading="lazy"
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </button>
                <figcaption
                  style={{
                    fontFamily: "'Source Serif 4',serif",
                    fontStyle: 'italic',
                    fontSize: '14px',
                    lineHeight: '1.45',
                    color: '#4a4440',
                  }}
                >
                  The campaign poster: “What It Takes to Move”.
                </figcaption>
              </figure>
              <div
                data-yj-rv="up"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  padding: '16px 0',
                  borderTop: '3px solid #141210',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: '#4a4440',
                  }}
                >
                  By the numbers
                </span>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px' }}>
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',Georgia,serif",
                      fontWeight: '600',
                      fontSize: '72px',
                      lineHeight: '0.85',
                      color: 'var(--color-neutral-900)',
                    }}
                  >
                    95%
                  </span>
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '15px',
                      lineHeight: '1.4',
                      color: '#141210',
                    }}
                  >
                    of women in Delhi say fear of harassment restricts their mobility.
                  </span>
                </div>
                <div
                  role="img"
                  aria-label="95 of 100 squares filled red"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(20,minmax(0,1fr))',
                    gap: '3px',
                    paddingTop: '8px',
                  }}
                >
                  {each(v.mv?.waffle, (w, $index) => (
                    <>
                      <span style={css(`aspect-ratio:1/1;background:${w?.c ?? ''}`)} />
                    </>
                  ))}
                </div>
              </div>
              <div data-yj-rv="up" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                <span
                  style={{
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: '#4a4440',
                    paddingBottom: '8px',
                    borderTop: '3px solid #141210',
                    paddingTop: '8px',
                  }}
                >
                  The briefing
                </span>
                {each(v.mv?.tldr, (d, $index) => (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '12px 0' }}>
                      <span
                        style={{
                          fontFamily: "'Source Serif 4',serif",
                          fontSize: '12px',
                          letterSpacing: '0.1em',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          color: '#c4161c',
                        }}
                      >
                        {t(d?.k)}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Source Serif 4',serif",
                          fontSize: '15px',
                          lineHeight: '1.5',
                          color: '#2a2522',
                        }}
                      >
                        {t(d?.v)}
                      </span>
                    </div>
                  </>
                ))}
              </div>
            </aside>
          </div>
          <div
            data-yj-rv="up"
            style={{
              marginTop: '40px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px 40px',
              alignItems: 'center',
              padding: '20px 24px',
              background: '#f2f0eb',
            }}
          >
            <span
              style={{
                fontFamily: "'Source Serif 4',serif",
                fontSize: '13px',
                letterSpacing: '0.12em',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: '#141210',
              }}
            >
              The question
            </span>
            <span
              style={{
                flex: '1 1 480px',
                fontFamily: "'Source Serif 4',Georgia,serif",
                fontStyle: 'italic',
                fontWeight: '500',
                fontSize: 'clamp(20px,1.8vw,26px)',
                lineHeight: '1.3',
                color: '#141210',
                textWrap: 'pretty',
              }}
            >
              {t(v.mv?.question)}
            </span>
          </div>
        </section>{' '}
        <section
          data-mv="method"
          aria-label="Analysis"
          style={{
            padding: 'clamp(96px,10vw,160px) clamp(20px,8.4vw,120px) 0',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
            willChange: 'transform',
          }}
          data-paper="1"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: '8px 16px',
              flexWrap: 'wrap',
              padding: '8px 0',
              borderTop: '3px solid #141210',
              fontFamily: "'Source Serif 4',serif",
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#141210',
            }}
          >
            <span style={{ fontWeight: '700' }}>A2</span>
            <span style={{ fontWeight: '700' }}>Analysis</span>
            <span>The Daily Commute</span>
          </div>
          <span
            style={{
              fontFamily: "'Source Serif 4',serif",
              fontSize: '13px',
              letterSpacing: '0.12em',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: '#c4161c',
            }}
          >
            Method · Systems thinking
          </span>
          <h2
            data-yj-rv="up"
            style={{
              margin: '0',
              fontFamily: "'Source Serif 4',Georgia,serif",
              fontWeight: '600',
              fontSize: 'clamp(34px,4.4vw,68px)',
              lineHeight: '1.02',
              letterSpacing: '-0.01em',
              color: '#141210',
              textWrap: 'balance',
              maxWidth: '1100px',
            }}
          >
            Two frameworks, read as one matrix
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
              gap: '0',
              borderTop: '3px solid #141210',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '16px 20px 16px 0' }}>
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#c4161c',
                }}
              >
                When
              </span>
              <span
                style={{
                  fontFamily: "'Source Serif 4',Georgia,serif",
                  fontWeight: '600',
                  fontSize: '24px',
                  color: '#141210',
                }}
              >
                Three Horizons
              </span>
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontStyle: 'italic',
                  fontSize: '14px',
                  lineHeight: '1.45',
                  color: '#4a4440',
                }}
              >
                {'Sharpe, Curry & Hodgson'}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '16px 20px 16px 20px' }}>
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#c4161c',
                }}
              >
                How deep
              </span>
              <span
                style={{
                  fontFamily: "'Source Serif 4',Georgia,serif",
                  fontWeight: '600',
                  fontSize: '24px',
                  color: '#141210',
                }}
              >
                Six Conditions of Systems Change
              </span>
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontStyle: 'italic',
                  fontSize: '14px',
                  lineHeight: '1.45',
                  color: '#4a4440',
                }}
              >
                {'Kania, Kramer & Senge, 2018'}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '16px 20px 16px 20px' }}>
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#c4161c',
                }}
              >
                Inside H2
              </span>
              <span
                style={{
                  fontFamily: "'Source Serif 4',Georgia,serif",
                  fontWeight: '600',
                  fontSize: '24px',
                  color: '#141210',
                }}
              >
                COM-B + EAST
              </span>
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontStyle: 'italic',
                  fontSize: '14px',
                  lineHeight: '1.45',
                  color: '#4a4440',
                }}
              >
                Gaps per actor, turned into tactics
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '16px 0 16px 20px' }}>
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#c4161c',
                }}
              >
                Across every cell
              </span>
              <span
                style={{
                  fontFamily: "'Source Serif 4',Georgia,serif",
                  fontWeight: '600',
                  fontSize: '24px',
                  color: '#141210',
                }}
              >
                Intersectionality
              </span>
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontStyle: 'italic',
                  fontSize: '14px',
                  lineHeight: '1.45',
                  color: '#4a4440',
                }}
              >
                Crenshaw, 1989: caste, religion, income
              </span>
            </div>
          </div>
          <figure data-yj-rv="up" style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ overflowX: 'auto', scrollbarWidth: 'thin', paddingBottom: '6px' }}>
              {' '}
              <div
                style={{
                  minWidth: '820px',
                  display: 'grid',
                  gridTemplateColumns: '150px 120px minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)',
                  gap: '4px',
                }}
              >
                <div />
                <div />
                <div
                  style={{
                    padding: '12px',
                    border: '1px solid #d6d2ca',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: '#4a4440',
                    }}
                  >
                    H1
                  </span>
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',Georgia,serif",
                      fontWeight: '600',
                      fontSize: '20px',
                      color: '#141210',
                    }}
                  >
                    Business as usual
                  </span>
                </div>
                <div
                  style={{
                    padding: '12px',
                    border: '1px solid #c4161c',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: '#c4161c',
                    }}
                  >
                    H2
                  </span>
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',Georgia,serif",
                      fontWeight: '600',
                      fontSize: '20px',
                      color: '#141210',
                    }}
                  >
                    Transition zone
                  </span>
                </div>
                <div
                  style={{
                    padding: '12px',
                    border: '1px solid #d6d2ca',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: '#4a4440',
                    }}
                  >
                    H3
                  </span>
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',Georgia,serif",
                      fontWeight: '600',
                      fontSize: '20px',
                      color: '#141210',
                    }}
                  >
                    Desired future
                  </span>
                </div>
                <div
                  style={{
                    gridRow: 'span 3',
                    border: '1px solid #d6d2ca',
                    padding: '12px',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: '#141210',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Structural
                </div>
                <div
                  style={{
                    background: '#fcfbf8',
                    padding: '10px 12px',
                    fontSize: '13px',
                    color: '#4a4440',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Policies
                </div>
                <div
                  style={{
                    background: '#f2f0eb',
                    padding: '10px 12px',
                    fontSize: '13px',
                    lineHeight: '1.35',
                    color: '#2a2522',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  No gender-sensitive policy in transport
                </div>
                <div
                  style={{
                    gridRow: 'span 6',
                    background: '#141210',
                    border: '1px solid #c4161c',
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    gap: '16px',
                    fontSize: '13px',
                    lineHeight: '1.35',
                    color: '#ffffff',
                  }}
                >
                  <span>Solution space</span>
                  <span>Behaviour-change plan</span>
                  <span>COM-B + EAST</span>
                </div>
                <div
                  style={{
                    background: '#f6dedb',
                    padding: '10px 12px',
                    fontSize: '13px',
                    lineHeight: '1.35',
                    color: '#141210',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Complete accountability
                </div>
                <div
                  style={{
                    background: '#fcfbf8',
                    padding: '10px 12px',
                    fontSize: '13px',
                    color: '#4a4440',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Practices
                </div>
                <div
                  style={{
                    background: '#f2f0eb',
                    padding: '10px 12px',
                    fontSize: '13px',
                    lineHeight: '1.35',
                    color: '#2a2522',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Harassment normalised, unaddressed daily
                </div>
                <div
                  style={{
                    background: '#f6dedb',
                    padding: '10px 12px',
                    fontSize: '13px',
                    lineHeight: '1.35',
                    color: '#141210',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  No harassment: people living and letting live
                </div>
                <div
                  style={{
                    background: '#fcfbf8',
                    padding: '10px 12px',
                    fontSize: '13px',
                    color: '#4a4440',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Resources
                </div>
                <div
                  style={{
                    background: '#f2f0eb',
                    padding: '10px 12px',
                    fontSize: '13px',
                    lineHeight: '1.35',
                    color: '#2a2522',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  No funding directed to women’s agency
                </div>
                <div
                  style={{
                    background: '#f6dedb',
                    padding: '10px 12px',
                    fontSize: '13px',
                    lineHeight: '1.35',
                    color: '#141210',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  An equitable society
                </div>
                <div
                  style={{
                    gridRow: 'span 2',
                    border: '1px solid #d6d2ca',
                    padding: '12px',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: '#141210',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Relational
                </div>
                <div
                  style={{
                    background: '#fcfbf8',
                    padding: '10px 12px',
                    fontSize: '13px',
                    color: '#4a4440',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Power
                </div>
                <div
                  style={{
                    background: '#f2f0eb',
                    padding: '10px 12px',
                    fontSize: '13px',
                    lineHeight: '1.35',
                    color: '#2a2522',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Norms unquestioned within family and friends
                </div>
                <div
                  style={{
                    background: '#f6dedb',
                    padding: '10px 12px',
                    fontSize: '13px',
                    lineHeight: '1.35',
                    color: '#141210',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Just systems, not patriarchal ones
                </div>
                <div
                  style={{
                    background: '#fcfbf8',
                    padding: '10px 12px',
                    fontSize: '13px',
                    color: '#4a4440',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Connections
                </div>
                <div
                  style={{
                    background: '#f2f0eb',
                    padding: '10px 12px',
                    fontSize: '13px',
                    lineHeight: '1.35',
                    color: '#2a2522',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Male entitlement unquestioned, unchecked
                </div>
                <div
                  style={{
                    background: '#f6dedb',
                    padding: '10px 12px',
                    fontSize: '13px',
                    lineHeight: '1.35',
                    color: '#141210',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Equal everyday practices and stricter rules
                </div>
                <div
                  style={{
                    gridRow: 'span 1',
                    border: '1px solid #d6d2ca',
                    padding: '12px',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: '#141210',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Transformative
                </div>
                <div
                  style={{
                    background: '#fcfbf8',
                    padding: '10px 12px',
                    fontSize: '13px',
                    color: '#4a4440',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Mental models
                </div>
                <div
                  style={{
                    background: '#f2f0eb',
                    padding: '10px 12px',
                    fontSize: '13px',
                    lineHeight: '1.35',
                    color: '#2a2522',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Masculinity and safety norms unexamined
                </div>
                <div
                  style={{
                    background: '#f6dedb',
                    padding: '10px 12px',
                    fontSize: '13px',
                    lineHeight: '1.35',
                    color: '#141210',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  A paradigm shift in ways of living
                </div>
                <div />
                <div
                  style={{
                    padding: '10px 12px',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: '#4a4440',
                  }}
                >
                  Explored through
                </div>
                <div style={{ padding: '10px 12px', fontSize: '13px', color: '#c4161c' }}>
                  Primary and secondary data
                </div>
                <div style={{ padding: '10px 12px', fontSize: '13px', color: '#c4161c', textAlign: 'center' }}>
                  Insight triangulation to design interventions
                </div>
                <div style={{ padding: '10px 12px', fontSize: '13px', color: '#c4161c' }}>
                  Future-proofing the solution
                </div>
              </div>{' '}
            </div>
            <figcaption style={{ fontSize: '14px', lineHeight: '1.45', color: '#4a4440' }}>
              Combined research framework. Rows go deeper, and harder to change, from top to bottom.
            </figcaption>
          </figure>
        </section>{' '}
        <section
          data-mv="research"
          aria-label="Investigation"
          style={{
            padding: 'clamp(96px,10vw,160px) clamp(20px,8.4vw,120px) 0',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
            willChange: 'transform',
          }}
          data-paper="1"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: '8px 16px',
              flexWrap: 'wrap',
              padding: '8px 0',
              borderTop: '3px solid #141210',
              fontFamily: "'Source Serif 4',serif",
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#141210',
            }}
          >
            <span style={{ fontWeight: '700' }}>A3</span>
            <span style={{ fontWeight: '700' }}>Investigation</span>
            <span>The Daily Commute</span>
          </div>
          <span
            style={{
              fontFamily: "'Source Serif 4',serif",
              fontSize: '13px',
              letterSpacing: '0.12em',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: '#c4161c',
            }}
          >
            Investigation · 11 months
          </span>
          <h2
            data-yj-rv="up"
            style={{
              margin: '0',
              fontFamily: "'Source Serif 4',Georgia,serif",
              fontWeight: '600',
              fontSize: 'clamp(34px,4.4vw,68px)',
              lineHeight: '1.02',
              letterSpacing: '-0.01em',
              color: '#141210',
              textWrap: 'balance',
              maxWidth: '1100px',
            }}
          >
            {t(v.mv?.research?.h)}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))',
              gap: '0',
              borderTop: '3px solid #141210',
            }}
          >
            {each(v.mv?.reach, (r, $index) => (
              <>
                <div
                  data-yj-rv="up"
                  style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '16px 18px 16px 0' }}
                >
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',Georgia,serif",
                      fontWeight: '600',
                      fontSize: 'clamp(44px,4vw,60px)',
                      lineHeight: '1',
                      color: '#c4161c',
                    }}
                  >
                    {t(r?.n)}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '15px',
                      lineHeight: '1.4',
                      color: '#141210',
                    }}
                  >
                    {t(r?.k)}
                  </span>
                </div>
              </>
            ))}
          </div>
          <figure
            aria-label="Methodology and timeline"
            data-yj-rv="up"
            style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '0' }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '8px 24px' }}>
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#141210',
                }}
              >
                {'Methodology & timeline'}
              </span>
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#4a4440',
                }}
              >
                Nov 2025 – Sep 2026 · six phases
              </span>
            </div>
            <div style={{ overflowX: 'auto', scrollbarWidth: 'thin', paddingBottom: '6px', maxWidth: '100%' }}>
              {' '}
              <div style={{ minWidth: '1200px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>
                  <div style={{ flex: '0 0 104px' }} />
                  <div style={{ flex: '1', position: 'relative', height: '28px' }}>
                    {' '}
                    {each(v.mv?.tl?.phases, (ph, $index) => (
                      <>
                        {' '}
                        <div
                          style={css(
                            `position:absolute;top:0;bottom:0;left:${ph?.left ?? ''};padding:0 8px;border-left:1px solid #c4161c;display:flex;align-items:center;font-family:'Source Serif 4',serif;font-size:12px;letter-spacing:0.1em;font-weight:700;text-transform:uppercase;color:#c4161c;white-space:nowrap`,
                          )}
                        >
                          P{t(ph?.n, true)}
                        </div>{' '}
                      </>
                    ))}{' '}
                  </div>
                </div>
                {each(v.mv?.tl?.groups, (g, $index) => (
                  <>
                    <div style={{ display: 'flex' }}>
                      <div
                        style={{
                          flex: '0 0 104px',
                          padding: '10px 12px 10px 0',
                          boxSizing: 'border-box',
                          fontFamily: "'Source Serif 4',serif",
                          fontSize: '12px',
                          letterSpacing: '0.1em',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          color: '#4a4440',
                        }}
                      >
                        {t(g?.k)}
                      </div>
                      <div
                        style={{
                          flex: '1',
                          position: 'relative',
                          padding: '8px 0',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '4px',
                        }}
                      >
                        {each(g?.lines, (ln, $index) => (
                          <>
                            <span
                              aria-hidden="true"
                              style={css(
                                `position:absolute;top:0;bottom:0;left:${ln?.left ?? ''};width:1px;background:#e6e3dc`,
                              )}
                            />
                          </>
                        ))}
                        {each(g?.rows, (r, $index) => (
                          <>
                            <div style={{ position: 'relative', height: '24px' }}>
                              <span
                                style={css(
                                  `position:absolute;top:0;bottom:0;left:${r?.left ?? ''};width:${r?.width ?? ''};background:${g?.c ?? ''};color:${g?.fg ?? ''};font-size:11px;line-height:24px;padding:0 4px 0 6px;box-sizing:border-box;white-space:nowrap`,
                                )}
                                title={r?.k}
                              >
                                {t(r?.k)}
                              </span>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  </>
                ))}
                <div style={{ display: 'flex' }}>
                  <div style={{ flex: '0 0 104px' }} />
                  <div style={{ flex: '1', display: 'grid', gridTemplateColumns: 'repeat(11,minmax(0,1fr))' }}>
                    {each(v.mv?.tl?.months, (m, $index) => (
                      <>
                        <span
                          style={{
                            padding: '10px 0 0 4px',
                            fontFamily: "'Source Serif 4',serif",
                            fontSize: '12px',
                            letterSpacing: '0.1em',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            color: '#4a4440',
                          }}
                        >
                          {t(m)}
                        </span>
                      </>
                    ))}
                  </div>
                </div>
              </div>{' '}
            </div>
            <ol
              style={{
                margin: '0',
                padding: '0',
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))',
                gap: '0 20px',
                borderTop: '2px solid #141210',
              }}
            >
              {each(v.mv?.tl?.phases, (ph, $index) => (
                <>
                  <li
                    style={{
                      display: 'flex',
                      gap: '10px',
                      padding: '12px 0',
                      borderBottom: '1px solid #d9d4cc',
                      fontSize: '14px',
                      lineHeight: '1.4',
                      color: '#2a2522',
                    }}
                  >
                    <span
                      style={{
                        flex: 'none',
                        fontFamily: "'Source Serif 4',serif",
                        fontSize: '12px',
                        letterSpacing: '0.1em',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        color: '#c4161c',
                        paddingTop: '3px',
                      }}
                    >
                      P{t(ph?.n)}
                    </span>
                    {t(ph?.k, true)}
                  </li>
                </>
              ))}
            </ol>
            <figcaption style={{ fontSize: '14px', lineHeight: '1.45', color: '#4a4440' }}>
              Primary and secondary research ran in parallel with analysis from the start; design and testing began once
              the behavioural gaps were clear.
            </figcaption>
          </figure>
          <div
            aria-label="Fieldwork photos"
            data-yj-rv="up"
            onMouseEnter={v.mv?.fc?.hold}
            onMouseLeave={v.mv?.fc?.release}
            style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '0' }}
          >
            <div style={{ position: 'relative', overflow: 'hidden', background: '#f2f0eb', aspectRatio: '16/9' }}>
              {' '}
              <div
                style={css(
                  `display:flex;height:100%;transition:transform 600ms cubic-bezier(.2,.8,.2,1);transform:translateX(${v.mv?.fc?.x ?? ''})`,
                )}
              >
                {each(v.mv?.fieldImgs, (f, $index) => (
                  <>
                    <button
                      onClick={f?.open}
                      aria-label={`Enlarge ${f?.k ?? ''}`}
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: '0 0 100%',
                        height: '100%',
                        position: 'relative',
                        display: 'block',
                      }}
                    >
                      <img
                        src={asset(ht(f?.src))}
                        alt={f?.k}
                        loading="lazy"
                        style={{
                          position: 'absolute',
                          inset: '0',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          marginRight: '57px',
                        }}
                      />
                    </button>
                  </>
                ))}
              </div>{' '}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontWeight: '700',
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  color: '#c4161c',
                }}
              >
                {t(v.mv?.fc?.n)}
              </span>
              <span
                style={{
                  flex: '1 1 240px',
                  fontFamily: "'Source Serif 4',serif",
                  fontStyle: 'italic',
                  fontSize: '15px',
                  lineHeight: '1.45',
                  color: '#4a4440',
                }}
              >
                {t(v.mv?.fc?.cap)}
              </span>
              <div style={{ display: 'flex', gap: '6px' }}>
                {each(v.mv?.fc?.dots, (d, $index) => (
                  <>
                    <button
                      onClick={d?.go}
                      aria-label={`Photo ${d?.i ?? ''}`}
                      style={css(
                        `all:unset;cursor:pointer;width:${d?.w ?? ''};height:8px;background:${d?.c ?? ''};transition:width 300ms`,
                      )}
                    />
                  </>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  className="dc-hover-3a1de05a"
                  onClick={v.mv?.fc?.prev}
                  aria-label="Previous photo"
                  style={{
                    all: 'unset',
                    cursor: 'pointer',
                    width: '44px',
                    height: '44px',
                    border: '1px solid #141210',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#141210',
                    transition: 'background 200ms,color 200ms',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 5l-7 7 7 7" />
                  </svg>
                </button>
                <button
                  className="dc-hover-3a1de05a"
                  onClick={v.mv?.fc?.next}
                  aria-label="Next photo"
                  style={{
                    all: 'unset',
                    cursor: 'pointer',
                    width: '44px',
                    height: '44px',
                    border: '1px solid #141210',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#141210',
                    transition: 'background 200ms,color 200ms',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span
              style={{
                fontFamily: "'Source Serif 4',serif",
                fontSize: '13px',
                letterSpacing: '0.12em',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: '#141210',
              }}
            >
              WHAT THE EXPERTS TOLD ME
            </span>
            <p
              style={{
                margin: '0',
                fontFamily: "'Source Serif 4',serif",
                fontSize: '16px',
                lineHeight: '1.5',
                color: '#4a4440',
                maxWidth: '760px',
              }}
            >
              Four in India for depth, three in the UK for comparison. Key points, paraphrased.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,300px),1fr))',
                gap: '16px',
              }}
            >
              {each(v.mv?.expertsAll, (x, $index) => (
                <>
                  <figure
                    data-yj-rv="up"
                    style={css(
                      `margin:0;display:flex;flex-direction:column;justify-content:space-between;gap:20px;padding:22px;background:${x?.bg ?? ''};border-top:3px solid ${x?.bar ?? ''}`,
                    )}
                  >
                    <blockquote
                      style={{
                        margin: '0',
                        fontFamily: "'Source Serif 4',Georgia,serif",
                        fontWeight: '600',
                        fontSize: '22px',
                        lineHeight: '1.25',
                        color: '#141210',
                        textWrap: 'pretty',
                      }}
                    >
                      “{t(x?.q)}”
                    </blockquote>
                    <figcaption style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span
                        aria-hidden="true"
                        style={{
                          flex: 'none',
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: '#141210',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: "'Source Serif 4',serif",
                          fontWeight: '700',
                          fontSize: '14px',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {t(x?.ini, true)}
                      </span>
                      <span style={{ minWidth: '0', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span
                          style={{
                            fontFamily: "'Source Serif 4',serif",
                            fontWeight: '700',
                            fontSize: '15px',
                            color: '#141210',
                          }}
                        >
                          {t(x?.who)}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Source Serif 4',serif",
                            fontSize: '12px',
                            letterSpacing: '0.1em',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            color: '#4a4440',
                          }}
                        >
                          {t(x?.org)}
                        </span>
                      </span>
                      <span
                        style={css(
                          `margin-left:auto;flex:none;font-family:'Source Serif 4',serif;font-size:12px;letter-spacing:0.1em;font-weight:700;text-transform:uppercase;color:${x?.bar ?? ''}`,
                        )}
                      >
                        {t(x?.cc)}
                      </span>
                    </figcaption>
                  </figure>
                </>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px 40px', alignItems: 'stretch' }}>
            <div style={{ flex: '1.4 1 420px', minWidth: '0' }}>
              <div
                aria-label="Research voice notes"
                data-yj-rv="up"
                style={{
                  background: '#f2f0eb',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '8px 16px',
                    flexWrap: 'wrap',
                    paddingBottom: '10px',
                    borderBottom: '1px solid #141210',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '13px',
                      letterSpacing: '0.12em',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: '#c4161c',
                    }}
                  >
                    Listen · Audio diaries
                  </span>
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      color: '#4a4440',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {t(v.mv?.track?.n)}
                    {' / 04 · '}
                    {t(v.mv?.track?.theme)}
                  </span>
                </div>
                <p
                  style={{
                    margin: '0',
                    fontFamily: "'Source Serif 4',Georgia,serif",
                    fontWeight: '600',
                    fontSize: 'clamp(26px,2.6vw,38px)',
                    lineHeight: '1.1',
                    color: '#141210',
                    textWrap: 'balance',
                  }}
                >
                  “{t(v.mv?.track?.prompt)}”
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {each(v.mv?.tracks, (r, $index) => (
                    <>
                      <button
                        className="dc-hover-d5d3cd45"
                        onClick={r?.pick}
                        style={css(
                          `all:unset;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;padding:6px 12px;border:1px solid ${r?.b ?? ''};font-family:'Source Serif 4',serif;font-weight:600;font-size:13px;letter-spacing:0.04em;color:${r?.c ?? ''}`,
                        )}
                      >
                        {t(r?.n, true)}
                        {' · '}
                        {t(r?.theme, true)}
                      </button>
                    </>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <button
                    className="dc-hover-90b17f67 dc-active-794b45de"
                    onClick={v.mv?.track?.toggle}
                    aria-label="Play or pause"
                    style={{
                      all: 'unset',
                      cursor: 'pointer',
                      flex: 'none',
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      background: '#c4161c',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 200ms',
                    }}
                  >
                    {v.mv?.track?.off ? (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff" style={{ marginLeft: '3px' }}>
                          <path d="M7 4.5v15l12-7.5z" />
                        </svg>
                      </>
                    ) : null}
                    {v.mv?.track?.on ? (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                      </>
                    ) : null}
                  </button>
                  <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ position: 'relative', height: '2px', background: '#d6d2ca' }}>
                      <span
                        style={css(
                          `position:absolute;left:0;top:0;bottom:0;width:${v.mv?.track?.pct ?? ''};background:#141210`,
                        )}
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontFamily: "'Source Serif 4',serif",
                        fontSize: '12px',
                        letterSpacing: '0.1em',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        color: '#4a4440',
                      }}
                    >
                      <span>{t(v.mv?.track?.time)}</span>
                      <span>{t(v.mv?.track?.durL)}</span>
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    margin: '0',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '17px',
                    lineHeight: '1.6',
                    color: '#9a8f86',
                    textWrap: 'pretty',
                  }}
                >
                  <span style={{ color: '#141210' }}>{t(v.mv?.track?.tA)}</span>
                  {t(v.mv?.track?.tB)}
                </p>
                <span
                  style={{
                    fontFamily: "'Source Serif 4',serif",
                    fontStyle: 'normal',
                    fontSize: '13px',
                    lineHeight: '1.45',
                    color: '#4a4440',
                  }}
                >
                  Note: audio is re-voiced and edited for privacy. Words are the participants’ own.
                </span>
              </div>
            </div>
            <blockquote
              data-yj-rv="up"
              style={{
                flex: '1 1 280px',
                margin: '0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '14px',
                padding: '8px 0 8px 28px',
                borderLeft: '6px solid #c4161c',
              }}
            >
              <span
                style={{
                  fontFamily: "'Source Serif 4',Georgia,serif",
                  fontWeight: '600',
                  fontSize: 'clamp(56px,6vw,88px)',
                  lineHeight: '0.9',
                  color: '#141210',
                }}
              >
                20 seconds
              </span>
              <span
                style={{
                  fontFamily: "'Source Serif 4',Georgia,serif",
                  fontStyle: 'italic',
                  fontSize: '22px',
                  lineHeight: '1.3',
                  color: '#141210',
                  textWrap: 'pretty',
                }}
              >
                Look at a woman for longer and she notices, even outside her peripheral vision. Men generally don’t
                until there’s eye contact.
              </span>
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  color: '#4a4440',
                }}
              >
                Observational research · That awareness is itself safety work
              </span>
            </blockquote>
          </div>
          <div
            data-yj-rv="up"
            style={{
              padding: '22px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              background: '#f2f0eb',
            }}
          >
            <span
              style={{
                fontFamily: "'Source Serif 4',serif",
                fontSize: '13px',
                letterSpacing: '0.12em',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: '#141210',
              }}
            >
              A note on ethics
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {each(v.mv?.ethics, (e, $index) => (
                <>
                  <span
                    title={e?.v}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 14px',
                      border: '1px solid #141210',
                      background: '#fcfbf8',
                      fontFamily: "'Source Serif 4',serif",
                      fontWeight: '700',
                      fontSize: '14px',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      color: '#141210',
                      cursor: 'help',
                    }}
                  >
                    <span style={{ color: '#c4161c' }}>✓</span>
                    {t(e?.k, true)}
                  </span>
                </>
              ))}
            </div>
          </div>
        </section>{' '}
        <section
          data-mv="insight"
          aria-label="Findings"
          style={{
            padding: 'clamp(96px,10vw,160px) clamp(20px,8.4vw,120px) clamp(72px,8vw,128px)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
            willChange: 'transform',
          }}
          data-paper="1"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: '8px 16px',
              flexWrap: 'wrap',
              padding: '8px 0',
              borderTop: '3px solid #141210',
              fontFamily: "'Source Serif 4',serif",
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#141210',
            }}
          >
            <span style={{ fontWeight: '700' }}>A4</span>
            <span style={{ fontWeight: '700' }}>Findings</span>
            <span>The Daily Commute</span>
          </div>
          <span
            style={{
              fontFamily: "'Source Serif 4',serif",
              fontSize: '13px',
              letterSpacing: '0.12em',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: '#c4161c',
            }}
          >
            Findings · Thematic analysis
          </span>
          <h2
            data-yj-rv="up"
            style={{
              margin: '0',
              fontFamily: "'Source Serif 4',Georgia,serif",
              fontWeight: '600',
              fontSize: 'clamp(34px,4.4vw,68px)',
              lineHeight: '1.02',
              letterSpacing: '-0.01em',
              color: '#141210',
              textWrap: 'balance',
              maxWidth: '1100px',
            }}
          >
            {t(v.mv?.insight?.h)}
          </h2>
          <figure
            aria-label="Problem tree"
            data-yj-rv="up"
            style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '0' }}
          >
            <span
              style={{
                fontFamily: "'Source Serif 4',serif",
                fontSize: '12px',
                letterSpacing: '0.1em',
                fontWeight: '600',
                textTransform: 'uppercase',
                color: '#141210',
                paddingBottom: '8px',
                borderTop: '3px solid #141210',
                paddingTop: '8px',
              }}
            >
              The problem tree
            </span>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '110px minmax(0,1fr)',
                gap: '10px 16px',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  color: '#4a4440',
                }}
              >
                Effects
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                <span
                  style={{
                    padding: '6px 10px',
                    border: '1px solid #141210',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '14px',
                    color: '#141210',
                  }}
                >
                  Safety work
                </span>
                <span
                  style={{
                    padding: '6px 10px',
                    border: '1px solid #141210',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '14px',
                    color: '#141210',
                  }}
                >
                  Pink tax
                </span>
                <span
                  style={{
                    padding: '6px 10px',
                    border: '1px solid #141210',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '14px',
                    color: '#141210',
                  }}
                >
                  Harassment
                </span>
                <span
                  style={{
                    padding: '6px 10px',
                    border: '1px solid #141210',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '14px',
                    color: '#141210',
                  }}
                >
                  {'Stares & cat-calling'}
                </span>
                <span
                  style={{
                    padding: '6px 10px',
                    border: '1px solid #141210',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '14px',
                    color: '#141210',
                  }}
                >
                  Stress
                </span>
                <span
                  style={{
                    padding: '6px 10px',
                    border: '1px solid #141210',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '14px',
                    color: '#141210',
                  }}
                >
                  Hyper-vigilance
                </span>
                <span
                  style={{
                    padding: '6px 10px',
                    border: '1px solid #141210',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '14px',
                    color: '#141210',
                  }}
                >
                  Low financial freedom
                </span>
                <span
                  style={{
                    padding: '6px 10px',
                    border: '1px solid #141210',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '14px',
                    color: '#141210',
                  }}
                >
                  Fewer women in work
                </span>
              </div>
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  color: '#141210',
                }}
              >
                Problem
              </span>
              <div
                style={{
                  padding: '14px 16px',
                  background: '#141210',
                  fontFamily: "'Source Serif 4',Georgia,serif",
                  fontWeight: '600',
                  fontSize: 'clamp(20px,2vw,26px)',
                  color: '#ffffff',
                }}
              >
                Women’s safety and their freedom to move
              </div>
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  color: '#c4161c',
                }}
              >
                Root causes
              </span>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))',
                  gap: '6px',
                }}
              >
                <span
                  style={{
                    padding: '12px 14px',
                    background: '#c4161c',
                    fontFamily: "'Source Serif 4',serif",
                    fontWeight: '700',
                    fontSize: '14px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                  }}
                >
                  Patriarchal norms governing mobility
                </span>
                <span
                  style={{
                    padding: '12px 14px',
                    background: '#c4161c',
                    fontFamily: "'Source Serif 4',serif",
                    fontWeight: '700',
                    fontSize: '14px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                  }}
                >
                  Behaviour among men
                </span>
                <span
                  style={{
                    padding: '12px 14px',
                    background: '#c4161c',
                    fontFamily: "'Source Serif 4',serif",
                    fontWeight: '700',
                    fontSize: '14px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                  }}
                >
                  Infrastructure not built for women
                </span>
              </div>
            </div>
            <span
              style={{
                fontFamily: "'Source Serif 4',serif",
                fontStyle: 'italic',
                fontSize: '14px',
                lineHeight: '1.45',
                color: '#4a4440',
              }}
            >
              Theory-of-change tree. This project works on the first two roots; planners already work on the third.
            </span>
          </figure>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '8px 16px',
                flexWrap: 'wrap',
                paddingBottom: '8px',
                borderTop: '3px solid #141210',
                paddingTop: '8px',
              }}
            >
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  color: '#4a4440',
                }}
              >
                Five things women want
              </span>
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  color: '#4a4440',
                }}
              >
                ● = participant who raised it, of 5
              </span>
            </div>
            {each(v.mv?.clusters, (c, $index) => (
              <>
                <div
                  data-yj-rv="up"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px 28px',
                    padding: '16px 0',
                    alignItems: 'baseline',
                  }}
                >
                  <span
                    style={{
                      flex: '0 0 40px',
                      fontFamily: "'Source Serif 4',Georgia,serif",
                      fontWeight: '600',
                      fontSize: '28px',
                      color: '#c4161c',
                    }}
                  >
                    {t(c?.n)}
                  </span>
                  <span
                    style={{
                      flex: '0 1 360px',
                      fontFamily: "'Source Serif 4',Georgia,serif",
                      fontWeight: '600',
                      fontSize: '22px',
                      lineHeight: '1.2',
                      color: '#141210',
                    }}
                  >
                    {t(c?.k)}
                  </span>
                  <span
                    style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: '6px' }}
                    role="img"
                    aria-label={c?.cntL}
                  >
                    {each(c?.dots, (d, $index) => (
                      <>
                        <span style={css(`width:18px;height:18px;border-radius:50%;background:${d?.c ?? ''}`)} />
                      </>
                    ))}
                    <span
                      style={{
                        fontFamily: "'Source Serif 4',serif",
                        fontSize: '12px',
                        letterSpacing: '0.1em',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        color: '#4a4440',
                        paddingLeft: '6px',
                      }}
                    >
                      {t(c?.cntL)}
                    </span>
                  </span>
                </div>
              </>
            ))}
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
              gap: '24px',
            }}
          >
            {each(v.mv?.journeys, (j, $index) => (
              <>
                <figure
                  data-yj-rv="scale"
                  style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}
                />
              </>
            ))}
          </div>
          <div
            data-yj-rv="up"
            style={{
              padding: '22px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              background: '#f2f0eb',
            }}
          >
            <span
              style={{
                fontFamily: "'Source Serif 4',serif",
                fontSize: '13px',
                letterSpacing: '0.12em',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: '#c4161c',
              }}
            >
              The turning point
            </span>
            <span
              style={{
                fontFamily: "'Source Serif 4',Georgia,serif",
                fontWeight: '600',
                fontSize: 'clamp(26px,2.4vw,36px)',
                lineHeight: '1.1',
                color: '#141210',
              }}
            >
              {t(v.mv?.direction?.h)}
            </span>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
                gap: '0',
                borderTop: '1px solid #141210',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '16px 16px 4px 0' }}>
                <span
                  style={{
                    fontFamily: "'Source Serif 4',Georgia,serif",
                    fontWeight: '600',
                    fontSize: 'clamp(56px,6vw,88px)',
                    lineHeight: '0.9',
                    color: '#c4161c',
                  }}
                >
                  15
                </span>
                <span
                  style={{
                    fontFamily: "'Source Serif 4',serif",
                    fontWeight: '700',
                    fontSize: '15px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#141210',
                    paddingTop: '10px',
                  }}
                >
                  Shown respect → is being educated
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '16px 0 4px 20px' }}>
                <span
                  style={{
                    fontFamily: "'Source Serif 4',Georgia,serif",
                    fontWeight: '600',
                    fontSize: 'clamp(56px,6vw,88px)',
                    lineHeight: '0.9',
                    color: '#9a8f86',
                  }}
                >
                  40
                </span>
                <span
                  style={{
                    fontFamily: "'Source Serif 4',serif",
                    fontWeight: '700',
                    fontSize: '15px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#141210',
                  }}
                >
                  Told the same → shuts down
                </span>
              </div>
            </div>
            <span
              style={{
                fontFamily: "'Source Serif 4',serif",
                fontStyle: 'italic',
                fontSize: '14px',
                lineHeight: '1.45',
                color: '#4a4440',
              }}
            >
              From the Breakthrough Foundation interview. So the intervention targets adolescence, through family and
              friends.
            </span>
          </div>
        </section>{' '}
        <section
          data-mv="product"
          aria-label="The Script"
          style={{
            padding: 'clamp(96px,10vw,160px) clamp(20px,8.4vw,120px) 0',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
            willChange: 'transform',
            position: 'relative',
          }}
          data-paper="1"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: '8px 16px',
              flexWrap: 'wrap',
              padding: '8px 0',
              borderTop: '3px solid #141210',
              fontFamily: "'Source Serif 4',serif",
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#141210',
            }}
          >
            <span style={{ fontWeight: '700' }}>A5</span>
            <span style={{ fontWeight: '700' }}>The Script</span>
            <span>The Daily Commute</span>
          </div>
          <span
            style={{
              fontFamily: "'Source Serif 4',serif",
              fontSize: '13px',
              letterSpacing: '0.12em',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: '#c4161c',
            }}
          >
            Feature · Product design
          </span>
          <h2
            data-yj-rv="up"
            style={{
              margin: '0',
              fontFamily: "'Source Serif 4',Georgia,serif",
              fontWeight: '600',
              fontSize: 'clamp(34px,4.4vw,68px)',
              lineHeight: '1.02',
              letterSpacing: '-0.01em',
              color: '#141210',
              textWrap: 'balance',
              maxWidth: '1100px',
            }}
          >
            {t(v.mv?.outcome?.h)}
          </h2>
          <div style={{ flex: '1.3 1 420px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span
              style={{
                fontFamily: "'Source Serif 4',serif",
                fontSize: '13px',
                letterSpacing: '0.12em',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: '#141210',
              }}
            >
              Why a card game, not an app or more infrastructure
            </span>
            <div style={{ overflowX: 'auto', scrollbarWidth: 'thin' }}>
              <div
                role="table"
                aria-label="Options compared"
                style={{
                  minWidth: '560px',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(150px,1.4fr) repeat(5,minmax(0,1fr))',
                  borderTop: '3px solid #141210',
                }}
              >
                <span />
                <span
                  style={{
                    padding: '10px 4px',
                    textAlign: 'center',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: '#4a4440',
                    borderBottom: '1px solid #141210',
                  }}
                >
                  Low cost
                </span>
                <span
                  style={{
                    padding: '10px 4px',
                    textAlign: 'center',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: '#4a4440',
                    borderBottom: '1px solid #141210',
                  }}
                >
                  Reaches homes
                </span>
                <span
                  style={{
                    padding: '10px 4px',
                    textAlign: 'center',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: '#4a4440',
                    borderBottom: '1px solid #141210',
                  }}
                >
                  No facilitator
                </span>
                <span
                  style={{
                    padding: '10px 4px',
                    textAlign: 'center',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: '#4a4440',
                    borderBottom: '1px solid #141210',
                  }}
                >
                  No lecturing
                </span>
                <span
                  style={{
                    padding: '10px 4px',
                    textAlign: 'center',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: '#4a4440',
                    borderBottom: '1px solid #141210',
                  }}
                >
                  Targets behaviour
                </span>
                <span
                  style={{
                    padding: '12px 0',
                    fontFamily: "'Source Serif 4',serif",
                    fontWeight: '700',
                    fontSize: '14px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: '#141210',
                  }}
                >
                  Safety app
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#141210' }}>◐</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#141210' }}>●</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#141210' }}>●</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#141210' }}>◐</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#9a8f86' }}>○</span>
                </span>
                <span
                  style={{
                    padding: '12px 0',
                    fontFamily: "'Source Serif 4',serif",
                    fontWeight: '700',
                    fontSize: '14px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: '#141210',
                  }}
                >
                  {'Lighting & CCTV'}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#9a8f86' }}>○</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#9a8f86' }}>○</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#141210' }}>●</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#141210' }}>●</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#9a8f86' }}>○</span>
                </span>
                <span
                  style={{
                    padding: '12px 0',
                    fontFamily: "'Source Serif 4',serif",
                    fontWeight: '700',
                    fontSize: '14px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: '#141210',
                  }}
                >
                  Facilitated workshop
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#141210' }}>◐</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#9a8f86' }}>○</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#9a8f86' }}>○</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#9a8f86' }}>○</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#141210' }}>●</span>
                </span>
                <span
                  style={{
                    padding: '12px 0',
                    fontFamily: "'Source Serif 4',Georgia,serif",
                    fontWeight: '600',
                    fontSize: '20px',
                    color: '#c4161c',
                  }}
                >
                  The Script
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#c4161c' }}>●</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#c4161c' }}>●</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#c4161c' }}>●</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#c4161c' }}>●</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center', fontSize: '20px', color: '#c4161c' }}>●</span>
                </span>
              </div>
            </div>
            <span
              style={{
                fontFamily: "'Source Serif 4',serif",
                fontStyle: 'italic',
                fontSize: '14px',
                lineHeight: '1.45',
                color: '#4a4440',
              }}
            >
              ● strong · ◐ partial · ○ weak. My evaluation, from expert interviews and planners’ feedback.
            </span>
          </div>
          <p
            style={{
              margin: '0',
              fontFamily: "'Source Serif 4',serif",
              fontStyle: 'italic',
              fontSize: 'clamp(19px,1.5vw,22px)',
              lineHeight: '1.45',
              color: '#4a4440',
              maxWidth: '820px',
              textWrap: 'pretty',
            }}
          >
            {t(v.mv?.outcome?.p)}
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '28px 40px',
              alignItems: 'flex-start',
              position: 'relative',
            }}
          >
            <figure
              aria-label="The Script, product views"
              data-yj-rv="scale"
              style={{
                flex: '1 1 100%',
                minWidth: '0',
                margin: '0',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  height: 'clamp(480px,80vh,860px)',
                  display: 'flex',
                  gap: '12px',
                  overflow: 'hidden',
                  WebkitMaskImage: 'linear-gradient(180deg,transparent,#000 12%,#000 88%,transparent)',
                  maskImage: 'linear-gradient(180deg,transparent,#000 12%,#000 88%,transparent)',
                }}
              >
                <div style={{ flex: '1 1 0', minWidth: '0', overflow: 'hidden' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      animation: 'yjMqUp 40s linear infinite',
                      willChange: 'transform',
                    }}
                  >
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_box}
                      aria-label="Enlarge The Script box, open"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-box.webp"
                        alt="The Script box, open"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_red_backs}
                      aria-label="Enlarge Friend Group Edition: card backs"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/ma/script-red-backs.png"
                        alt="Friend Group Edition: card backs"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_2}
                      aria-label="Enlarge Answer card"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-2.webp"
                        alt="Answer card"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_1}
                      aria-label="Enlarge Card back, light"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-1.webp"
                        alt="Card back, light"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_red_prompt}
                      aria-label="Enlarge Friend Group Edition: prompt and answer"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/ma/script-red-prompt.png"
                        alt="Friend Group Edition: prompt and answer"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_spread}
                      aria-label="Enlarge Three cards from the deck"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-spread.webp"
                        alt="Three cards from the deck"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_4}
                      aria-label="Enlarge Prompt card: the curfew question"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-4.webp"
                        alt="Prompt card: the curfew question"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_3}
                      aria-label="Enlarge Card back, dark"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-3.webp"
                        alt="Card back, dark"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_box}
                      aria-label="Enlarge The Script box, open"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-box.webp"
                        alt="The Script box, open"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_red_backs}
                      aria-label="Enlarge Friend Group Edition: card backs"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/ma/script-red-backs.png"
                        alt="Friend Group Edition: card backs"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_2}
                      aria-label="Enlarge Answer card"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-2.webp"
                        alt="Answer card"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_1}
                      aria-label="Enlarge Card back, light"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-1.webp"
                        alt="Card back, light"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_red_prompt}
                      aria-label="Enlarge Friend Group Edition: prompt and answer"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/ma/script-red-prompt.png"
                        alt="Friend Group Edition: prompt and answer"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_spread}
                      aria-label="Enlarge Three cards from the deck"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-spread.webp"
                        alt="Three cards from the deck"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_4}
                      aria-label="Enlarge Prompt card: the curfew question"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-4.webp"
                        alt="Prompt card: the curfew question"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_3}
                      aria-label="Enlarge Card back, dark"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-3.webp"
                        alt="Card back, dark"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                  </div>
                </div>
                <div style={{ flex: '1 1 0', minWidth: '0', overflow: 'hidden' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      animation: 'yjMqDown 46s linear infinite',
                      willChange: 'transform',
                    }}
                  >
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_spread}
                      aria-label="Enlarge Three cards from the deck"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-spread.webp"
                        alt="Three cards from the deck"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_red_prompt}
                      aria-label="Enlarge Friend Group Edition: prompt and answer"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/ma/script-red-prompt.png"
                        alt="Friend Group Edition: prompt and answer"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_4}
                      aria-label="Enlarge Prompt card: the curfew question"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-4.webp"
                        alt="Prompt card: the curfew question"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_3}
                      aria-label="Enlarge Card back, dark"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-3.webp"
                        alt="Card back, dark"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_red_backs}
                      aria-label="Enlarge Friend Group Edition: card backs"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/ma/script-red-backs.png"
                        alt="Friend Group Edition: card backs"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_box}
                      aria-label="Enlarge The Script box, open"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-box.webp"
                        alt="The Script box, open"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_2}
                      aria-label="Enlarge Answer card"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-2.webp"
                        alt="Answer card"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_1}
                      aria-label="Enlarge Card back, light"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-1.webp"
                        alt="Card back, light"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_spread}
                      aria-label="Enlarge Three cards from the deck"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-spread.webp"
                        alt="Three cards from the deck"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_red_prompt}
                      aria-label="Enlarge Friend Group Edition: prompt and answer"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/ma/script-red-prompt.png"
                        alt="Friend Group Edition: prompt and answer"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_4}
                      aria-label="Enlarge Prompt card: the curfew question"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-4.webp"
                        alt="Prompt card: the curfew question"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_3}
                      aria-label="Enlarge Card back, dark"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-3.webp"
                        alt="Card back, dark"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_red_backs}
                      aria-label="Enlarge Friend Group Edition: card backs"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/ma/script-red-backs.png"
                        alt="Friend Group Edition: card backs"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_box}
                      aria-label="Enlarge The Script box, open"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-box.webp"
                        alt="The Script box, open"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_2}
                      aria-label="Enlarge Answer card"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-2.webp"
                        alt="Answer card"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_1}
                      aria-label="Enlarge Card back, light"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-1.webp"
                        alt="Card back, light"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                  </div>
                </div>
                <div style={{ flex: '1 1 0', minWidth: '0', overflow: 'hidden' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      animation: 'yjMqUp 52s linear infinite',
                      willChange: 'transform',
                    }}
                  >
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_2}
                      aria-label="Enlarge Answer card"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-2.webp"
                        alt="Answer card"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_red_backs}
                      aria-label="Enlarge Friend Group Edition: card backs"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/ma/script-red-backs.png"
                        alt="Friend Group Edition: card backs"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_1}
                      aria-label="Enlarge Card back, light"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-1.webp"
                        alt="Card back, light"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_spread}
                      aria-label="Enlarge Three cards from the deck"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-spread.webp"
                        alt="Three cards from the deck"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_red_prompt}
                      aria-label="Enlarge Friend Group Edition: prompt and answer"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/ma/script-red-prompt.png"
                        alt="Friend Group Edition: prompt and answer"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_4}
                      aria-label="Enlarge Prompt card: the curfew question"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-4.webp"
                        alt="Prompt card: the curfew question"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_3}
                      aria-label="Enlarge Card back, dark"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-3.webp"
                        alt="Card back, dark"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_box}
                      aria-label="Enlarge The Script box, open"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-box.webp"
                        alt="The Script box, open"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_2}
                      aria-label="Enlarge Answer card"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-2.webp"
                        alt="Answer card"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_red_backs}
                      aria-label="Enlarge Friend Group Edition: card backs"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/ma/script-red-backs.png"
                        alt="Friend Group Edition: card backs"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_1}
                      aria-label="Enlarge Card back, light"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-1.webp"
                        alt="Card back, light"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_spread}
                      aria-label="Enlarge Three cards from the deck"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-spread.webp"
                        alt="Three cards from the deck"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_red_prompt}
                      aria-label="Enlarge Friend Group Edition: prompt and answer"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/ma/script-red-prompt.png"
                        alt="Friend Group Edition: prompt and answer"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_4}
                      aria-label="Enlarge Prompt card: the curfew question"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-4.webp"
                        alt="Prompt card: the curfew question"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_3}
                      aria-label="Enlarge Card back, dark"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-3.webp"
                        alt="Card back, dark"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_box}
                      aria-label="Enlarge The Script box, open"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-box.webp"
                        alt="The Script box, open"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                  </div>
                </div>
                <div style={{ flex: '1 1 0', minWidth: '0', overflow: 'hidden' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      animation: 'yjMqDown 44s linear infinite',
                      willChange: 'transform',
                    }}
                  >
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_4}
                      aria-label="Enlarge Prompt card: the curfew question"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-4.webp"
                        alt="Prompt card: the curfew question"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_red_prompt}
                      aria-label="Enlarge Friend Group Edition: prompt and answer"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/ma/script-red-prompt.png"
                        alt="Friend Group Edition: prompt and answer"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_3}
                      aria-label="Enlarge Card back, dark"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-3.webp"
                        alt="Card back, dark"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_box}
                      aria-label="Enlarge The Script box, open"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-box.webp"
                        alt="The Script box, open"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_red_backs}
                      aria-label="Enlarge Friend Group Edition: card backs"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/ma/script-red-backs.png"
                        alt="Friend Group Edition: card backs"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_2}
                      aria-label="Enlarge Answer card"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-2.webp"
                        alt="Answer card"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_1}
                      aria-label="Enlarge Card back, light"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-1.webp"
                        alt="Card back, light"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_spread}
                      aria-label="Enlarge Three cards from the deck"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-spread.webp"
                        alt="Three cards from the deck"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_4}
                      aria-label="Enlarge Prompt card: the curfew question"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-4.webp"
                        alt="Prompt card: the curfew question"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_red_prompt}
                      aria-label="Enlarge Friend Group Edition: prompt and answer"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/ma/script-red-prompt.png"
                        alt="Friend Group Edition: prompt and answer"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_3}
                      aria-label="Enlarge Card back, dark"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-3.webp"
                        alt="Card back, dark"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_box}
                      aria-label="Enlarge The Script box, open"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-box.webp"
                        alt="The Script box, open"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_red_backs}
                      aria-label="Enlarge Friend Group Edition: card backs"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/ma/script-red-backs.png"
                        alt="Friend Group Edition: card backs"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_2}
                      aria-label="Enlarge Answer card"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-2.webp"
                        alt="Answer card"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_card_1}
                      aria-label="Enlarge Card back, light"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-card-1.webp"
                        alt="Card back, light"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <button
                      className="dc-hover-09ce8d48"
                      onClick={v.mv?.mq?.script_spread}
                      aria-label="Enlarge Three cards from the deck"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        flex: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '4/5',
                        background: '#f2f0eb',
                        padding: '16px',
                        boxSizing: 'border-box',
                        transition: 'background 250ms',
                      }}
                    >
                      <img
                        className="dc-hover-0b8e5423"
                        src="assets/web/assets/ma/script-spread.webp"
                        alt="Three cards from the deck"
                        loading="lazy"
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <figcaption
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontStyle: 'italic',
                  fontSize: '14px',
                  lineHeight: '1.45',
                  color: '#4a4440',
                }}
              >
                The Script in both editions: box, card backs, prompts and answers. Click to enlarge.
              </figcaption>
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#141210',
                }}
              >
                How it’s played
              </span>
              <button
                className="dc-hover-555b4c52"
                onClick={v.mv?.openRules}
                style={{
                  all: 'unset',
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 18px',
                  background: '#141210',
                  color: '#ffffff',
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  transition: 'background 200ms',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 5h16v14H4zM8 9h8M8 13h6" />
                </svg>
                Read the mechanics
              </button>
            </figure>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: '0',
              borderTop: '3px solid #141210',
            }}
          >
            {each(v.mv?.phases, (ph, $index) => (
              <>
                <div
                  data-yj-rv="up"
                  style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 20px 16px 0' }}
                >
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: '#c4161c',
                    }}
                  >
                    {t(ph?.when)}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',Georgia,serif",
                      fontWeight: '600',
                      fontSize: '24px',
                      lineHeight: '1.1',
                      color: '#141210',
                    }}
                  >
                    {t(ph?.k)}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '15px',
                      lineHeight: '1.5',
                      color: '#2a2522',
                    }}
                  >
                    {t(ph?.goal)}
                  </span>
                </div>
              </>
            ))}
          </div>
          <div
            data-hs="1"
            style={{ position: 'relative', height: '240vh', margin: '0 calc(-1 * clamp(20px,8.4vw,120px))' }}
          >
            {' '}
            <div
              style={{
                position: 'sticky',
                top: '0',
                height: '100vh',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '16px',
                background: '#fcfbf8',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '0 clamp(20px,8.4vw,120px)' }}>
                <span
                  style={{
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '13px',
                    letterSpacing: '0.12em',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: '#141210',
                    flex: 'none',
                  }}
                >
                  IN-ACTION
                </span>
                <div style={{ flex: '1', height: '2px', background: '#d6d2ca' }}>
                  <div data-hs-bar="1" style={{ height: '100%', width: '0%', background: '#c4161c' }} />
                </div>
                <span
                  style={{
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: '#4a4440',
                    flex: 'none',
                  }}
                >
                  Scroll →
                </span>
              </div>
              <div
                data-hs-track="1"
                style={{
                  display: 'flex',
                  gap: '16px',
                  padding: '0 clamp(20px,8.4vw,120px)',
                  width: 'max-content',
                  willChange: 'transform',
                }}
              >
                {each(v.mv?.essay, (o, $index) => (
                  <>
                    <figure
                      style={css(
                        `margin:0;flex:none;width:min(78vw,${o?.w ?? ''});display:flex;flex-direction:column;gap:10px`,
                      )}
                    >
                      <button
                        onClick={o?.open}
                        aria-label={`Enlarge ${o?.k ?? ''}`}
                        style={{
                          all: 'unset',
                          cursor: 'zoom-in',
                          display: 'block',
                          position: 'relative',
                          height: '68vh',
                          overflow: 'hidden',
                          background: '#f2f0eb',
                        }}
                      >
                        <img
                          className="dc-hover-ce0189d7"
                          src={asset(ht(o?.src))}
                          alt={o?.k}
                          loading="lazy"
                          style={{
                            position: 'absolute',
                            inset: '0',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 900ms cubic-bezier(.2,.8,.2,1)',
                          }}
                        />
                      </button>
                      <figcaption
                        style={{
                          display: 'flex',
                          gap: '12px',
                          alignItems: 'baseline',
                          borderTop: '1px solid #141210',
                          paddingTop: '8px',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Source Serif 4',Georgia,serif",
                            fontWeight: '600',
                            fontSize: '22px',
                            color: '#c4161c',
                          }}
                        >
                          {t(o?.n)}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Source Serif 4',serif",
                            fontStyle: 'italic',
                            fontSize: '14px',
                            lineHeight: '1.45',
                            color: '#4a4440',
                          }}
                        >
                          <strong
                            style={{
                              fontStyle: 'normal',
                              fontFamily: "'Source Serif 4',serif",
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em',
                              color: '#141210',
                            }}
                          >
                            {t(o?.k)}.
                          </strong>{' '}
                          {t(o?.d)}
                        </span>
                      </figcaption>
                    </figure>
                  </>
                ))}
              </div>
            </div>{' '}
          </div>
        </section>
        <section
          data-mv="testing"
          aria-label="Report card"
          style={{
            padding: 'clamp(96px,10vw,160px) clamp(20px,8.4vw,120px) 0',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
            willChange: 'transform',
          }}
          data-paper="1"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: '8px 16px',
              flexWrap: 'wrap',
              padding: '8px 0',
              borderTop: '3px solid #141210',
              fontFamily: "'Source Serif 4',serif",
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#141210',
            }}
          >
            <span style={{ fontWeight: '700' }}>A6</span>
            <span style={{ fontWeight: '700' }}>Report card</span>
            <span>The Daily Commute</span>
          </div>
          <span
            style={{
              fontFamily: "'Source Serif 4',serif",
              fontSize: '13px',
              letterSpacing: '0.12em',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: '#c4161c',
            }}
          >
            Testing · 10–12 people, families of mixed ages
          </span>
          <h2
            data-yj-rv="up"
            style={{
              margin: '0',
              fontFamily: "'Source Serif 4',Georgia,serif",
              fontWeight: '600',
              fontSize: 'clamp(34px,4.4vw,68px)',
              lineHeight: '1.02',
              letterSpacing: '-0.01em',
              color: '#141210',
              textWrap: 'balance',
              maxWidth: '1100px',
            }}
          >
            {t(v.mv?.testing?.h)}
          </h2>
          <div
            data-yj-rv="up"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))',
              gap: '0',
              borderTop: '3px solid #141210',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '14px 18px 14px 0' }}>
              <span
                style={{
                  fontFamily: "'Source Serif 4',Georgia,serif",
                  fontWeight: '600',
                  fontSize: 'clamp(44px,4vw,60px)',
                  lineHeight: '1',
                  color: '#c4161c',
                }}
              >
                10–12
              </span>
              <span style={{ fontFamily: "'Source Serif 4',serif", fontSize: '15px', color: '#141210' }}>
                people played the prototype
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '14px 18px' }}>
              <span
                style={{
                  fontFamily: "'Source Serif 4',Georgia,serif",
                  fontWeight: '600',
                  fontSize: 'clamp(44px,4vw,60px)',
                  lineHeight: '1',
                  color: '#141210',
                }}
              >
                Families
              </span>
              <span style={{ fontFamily: "'Source Serif 4',serif", fontSize: '15px', color: '#141210' }}>
                tested at home, around the table
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '14px 0 14px 18px' }}>
              <span
                style={{
                  fontFamily: "'Source Serif 4',Georgia,serif",
                  fontWeight: '600',
                  fontSize: 'clamp(44px,4vw,60px)',
                  lineHeight: '1',
                  color: '#141210',
                }}
              >
                Mixed ages
              </span>
              <span style={{ fontFamily: "'Source Serif 4',serif", fontSize: '15px', color: '#141210' }}>
                kids, teens and adults playing together
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px 40px' }}>
            <div
              style={{
                flex: '1 1 100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,360px),1fr))',
                gap: '20px',
                alignContent: 'start',
              }}
            >
              {each(v.mv?.testing?.imgs, (ti, $index) => (
                <>
                  <button
                    onClick={ti?.open}
                    data-yj-rv="scale"
                    aria-label={`Enlarge ${ti?.k ?? ''}`}
                    style={{
                      all: 'unset',
                      cursor: 'zoom-in',
                      position: 'relative',
                      aspectRatio: '3/4',
                      overflow: 'hidden',
                      background: '#f2f0eb',
                    }}
                  >
                    <img
                      className="dc-hover-ce0189d7"
                      src={asset(ht(ti?.src))}
                      alt={ti?.k}
                      loading="lazy"
                      style={{
                        position: 'absolute',
                        inset: '0',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 900ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </button>
                </>
              ))}
            </div>
            <div
              style={{ flex: '1.3 1 380px', display: 'flex', flexDirection: 'column', borderTop: '3px solid #141210' }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '8px',
                  padding: '8px 0',
                  borderBottom: '1px solid #141210',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: '#4a4440',
                  }}
                >
                  Engagement by group
                </span>
                <span
                  style={{
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: '#4a4440',
                  }}
                >
                  Qualitative, from testing observations
                </span>
              </div>
              {each(v.mv?.eng, (e, $index) => (
                <>
                  <div
                    data-yj-rv="up"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(120px,170px) minmax(0,1fr)',
                      gap: '4px 18px',
                      padding: '12px 0',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Source Serif 4',serif",
                        fontWeight: '700',
                        fontSize: '14px',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        color: '#141210',
                      }}
                    >
                      {t(e?.k)}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ flex: '1', height: '14px', background: '#f2f0eb' }}>
                        <div style={css(`height:100%;width:${e?.w ?? ''};background:${e?.c ?? ''}`)} />
                      </div>
                      <span
                        style={{
                          flex: '0 0 64px',
                          fontFamily: "'Source Serif 4',serif",
                          fontSize: '12px',
                          letterSpacing: '0.1em',
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          color: '#141210',
                        }}
                      >
                        {t(e?.l)}
                      </span>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div
            data-yj-rv="up"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px 40px',
              alignItems: 'baseline',
              padding: '24px 28px',
              background: '#141210',
              color: '#ffffff',
            }}
          >
            <span
              style={{
                fontFamily: "'Source Serif 4',serif",
                fontSize: '13px',
                letterSpacing: '0.12em',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: '#ffffff',
              }}
            >
              The verdict
            </span>
            <span
              style={{
                flex: '1 1 420px',
                fontFamily: "'Source Serif 4',Georgia,serif",
                fontWeight: '500',
                fontSize: 'clamp(20px,1.8vw,26px)',
                lineHeight: '1.35',
                color: '#ffffff',
                textWrap: 'pretty',
              }}
            >
              {t(v.mv?.result)}
            </span>
          </div>
        </section>{' '}
        <section
          data-mv="strategy"
          aria-label="The plan"
          style={{
            padding: 'clamp(96px,10vw,160px) clamp(20px,8.4vw,120px) 0',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
            willChange: 'transform',
          }}
          data-paper="1"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: '8px 16px',
              flexWrap: 'wrap',
              padding: '8px 0',
              borderTop: '3px solid #141210',
              fontFamily: "'Source Serif 4',serif",
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#141210',
            }}
          >
            <span style={{ fontWeight: '700' }}>A7</span>
            <span style={{ fontWeight: '700' }}>The plan</span>
            <span>The Daily Commute</span>
          </div>
          <span
            style={{
              fontFamily: "'Source Serif 4',serif",
              fontSize: '13px',
              letterSpacing: '0.12em',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: '#c4161c',
            }}
          >
            Strategy · Six years to 2032
          </span>
          <h2
            data-yj-rv="up"
            style={{
              margin: '0',
              fontFamily: "'Source Serif 4',Georgia,serif",
              fontWeight: '600',
              fontSize: 'clamp(34px,4.4vw,68px)',
              lineHeight: '1.02',
              letterSpacing: '-0.01em',
              color: '#141210',
              textWrap: 'balance',
              maxWidth: '1100px',
            }}
          >
            {t(v.mv?.plan?.h)}
          </h2>
          <div style={{ overflowX: 'auto', scrollbarWidth: 'thin' }}>
            <ol
              style={{
                margin: '0',
                padding: '0',
                listStyle: 'none',
                minWidth: '760px',
                display: 'grid',
                gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
                gap: '12px',
                alignItems: 'start',
              }}
            >
              {each(v.mv?.stages, (st, $index) => (
                <>
                  <li data-yj-rv="up" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end' }}>
                      <div
                        style={css(
                          `width:100%;height:${st?.h ?? ''};background:#141210;display:flex;align-items:flex-start;justify-content:flex-start;padding:10px 12px;box-sizing:border-box;border-top:6px solid #c4161c`,
                        )}
                      >
                        <span
                          style={{
                            fontFamily: "'Source Serif 4',Georgia,serif",
                            fontWeight: '600',
                            fontSize: '28px',
                            lineHeight: '1',
                            color: '#ffffff',
                          }}
                        >
                          {t(st?.n)}
                        </span>
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: "'Source Serif 4',Georgia,serif",
                        fontWeight: '600',
                        fontSize: '21px',
                        color: '#141210',
                      }}
                    >
                      {t(st?.k)}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Source Serif 4',serif",
                        fontStyle: 'italic',
                        fontSize: '16px',
                        color: '#141210',
                      }}
                    >
                      {t(st?.shift)}
                    </span>
                  </li>
                </>
              ))}
            </ol>
          </div>
          <figure
            aria-label="Roadmap to 2032"
            data-yj-rv="up"
            style={{
              margin: '0',
              minWidth: '0',
              maxWidth: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '8px 16px',
                flexWrap: 'wrap',
                paddingBottom: '8px',
                borderTop: '3px solid #141210',
                paddingTop: '8px',
              }}
            >
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  color: '#141210',
                }}
              >
                Roadmap to 2032
              </span>
              <span
                style={{
                  display: 'flex',
                  gap: '16px',
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  color: '#4a4440',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '12px', height: '12px', background: '#9a8f86' }} />
                  Short
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '12px', height: '12px', background: '#c4161c' }} />
                  Mid
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '12px', height: '12px', background: '#141210' }} />
                  Long
                </span>
              </span>
            </div>
            <div style={{ overflowX: 'auto', scrollbarWidth: 'thin' }}>
              <div style={{ minWidth: '820px', display: 'flex', flexDirection: 'column', paddingRight: '24px' }}>
                {each(v.mv?.road, (rd, $index) => (
                  <>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '260px minmax(0,1fr)',
                        gap: '16px',
                        alignItems: 'center',
                        padding: '5px 0',
                      }}
                    >
                      <span style={{ fontFamily: "'Source Serif 4',serif", fontSize: '14px', color: '#141210' }}>
                        {t(rd?.k)}
                      </span>
                      <div style={{ position: 'relative', height: '16px' }}>
                        {' '}
                        {each(v.mv?.ticks, (tk, $index) => (
                          <>
                            <span
                              aria-hidden="true"
                              style={css(
                                `position:absolute;top:-5px;bottom:-5px;left:${tk?.left ?? ''};width:1px;background:#e6e3dc`,
                              )}
                            />
                          </>
                        ))}{' '}
                        <span
                          aria-hidden="true"
                          style={css(
                            `position:absolute;top:-5px;bottom:-5px;left:${v.mv?.mile ?? ''};width:2px;background:#c4161c`,
                          )}
                        />{' '}
                        {each(rd?.segs, (sg, $index) => (
                          <>
                            <span
                              style={css(
                                `position:absolute;top:2px;bottom:2px;left:${sg?.left ?? ''};width:${sg?.width ?? ''};background:${sg?.c ?? ''}`,
                              )}
                            />
                          </>
                        ))}{' '}
                      </div>
                    </div>
                  </>
                ))}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '260px minmax(0,1fr)',
                    gap: '16px',
                    paddingTop: '6px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      color: '#c4161c',
                    }}
                  >
                    │ Mid-point evaluation, 2029
                  </span>
                  <div style={{ position: 'relative', height: '16px' }}>
                    {each(v.mv?.ticks, (tk, $index) => (
                      <>
                        <span
                          style={css(
                            `position:absolute;left:${tk?.left ?? ''};transform:translateX(-50%);font-family:'Source Serif 4',serif;font-size:12px;letter-spacing:0.1em;font-weight:600;text-transform:uppercase;color:#4a4440`,
                          )}
                        >
                          {t(tk?.y)}
                        </span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </figure>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
              gap: '16px',
            }}
          >
            {each(v.mv?.horizons, (hz, $index) => (
              <>
                <div
                  data-yj-rv="up"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    padding: '18px 20px',
                    background: '#f2f0eb',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: '#c4161c',
                    }}
                  >
                    {t(hz?.when)}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',Georgia,serif",
                      fontWeight: '600',
                      fontSize: '24px',
                      color: '#141210',
                    }}
                  >
                    {t(hz?.k)}
                  </span>
                  <span style={{ fontFamily: "'Source Serif 4',serif", fontSize: '15px', color: '#2a2522' }}>
                    {t(hz?.d)}
                  </span>
                </div>
              </>
            ))}
          </div>
          <div data-yj-rv="up" style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '20px' }}>
            <span
              style={{
                fontFamily: "'Source Serif 4',serif",
                fontSize: '13px',
                letterSpacing: '0.12em',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: '#c4161c',
              }}
            >
              Who has to move · Stakeholder map
            </span>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,540px),1fr))',
                gap: '32px 56px',
                alignItems: 'center',
                paddingTop: '28px',
                borderTop: '3px solid #141210',
              }}
            >
              <div style={{ overflowX: 'auto' }}>
                <div
                  role="img"
                  aria-label="Stakeholder map: primary users at the centre, secondary stakeholders around them, system actors on the outer ring"
                  style={{
                    position: 'relative',
                    width: '100%',
                    minWidth: '500px',
                    maxWidth: '640px',
                    aspectRatio: '1/1',
                    margin: '0 auto',
                  }}
                >
                  {' '}
                  <div
                    style={{
                      position: 'absolute',
                      left: '0%',
                      top: '0%',
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      background: '#f2f0eb',
                    }}
                  />{' '}
                  <div
                    style={{
                      position: 'absolute',
                      left: '17%',
                      top: '17%',
                      width: '66%',
                      height: '66%',
                      borderRadius: '50%',
                      background: '#f6dedb',
                    }}
                  />{' '}
                  <div
                    style={{
                      position: 'absolute',
                      left: '32%',
                      top: '32%',
                      width: '36%',
                      height: '36%',
                      borderRadius: '50%',
                      background: '#141210',
                    }}
                  />{' '}
                  <span
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '8%',
                      transform: 'translate(-50%,-50%)',
                      width: 'max-content',
                      maxWidth: '100px',
                      textAlign: 'center',
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '13px',
                      lineHeight: '1.25',
                      color: '#141210',
                      textWrap: 'balance',
                    }}
                  >
                    Schools and youth orgs
                  </span>{' '}
                  <span
                    style={{
                      position: 'absolute',
                      left: '82.8%',
                      top: '23.8%',
                      transform: 'translate(-50%,-50%)',
                      width: 'max-content',
                      maxWidth: '100px',
                      textAlign: 'center',
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '13px',
                      lineHeight: '1.25',
                      color: '#141210',
                      textWrap: 'balance',
                    }}
                  >
                    NGOs (Breakthrough)
                  </span>{' '}
                  <span
                    style={{
                      position: 'absolute',
                      left: '87%',
                      top: '59.4%',
                      transform: 'translate(-50%,-50%)',
                      width: 'max-content',
                      maxWidth: '100px',
                      textAlign: 'center',
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '13px',
                      lineHeight: '1.25',
                      color: '#141210',
                      textWrap: 'balance',
                    }}
                  >
                    Delhi Transport Corporation
                  </span>{' '}
                  <span
                    style={{
                      position: 'absolute',
                      left: '68.2%',
                      top: '87.8%',
                      transform: 'translate(-50%,-50%)',
                      width: 'max-content',
                      maxWidth: '100px',
                      textAlign: 'center',
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '13px',
                      lineHeight: '1.25',
                      color: '#141210',
                      textWrap: 'balance',
                    }}
                  >
                    Police and control rooms
                  </span>{' '}
                  <span
                    style={{
                      position: 'absolute',
                      left: '31.8%',
                      top: '87.8%',
                      transform: 'translate(-50%,-50%)',
                      width: 'max-content',
                      maxWidth: '100px',
                      textAlign: 'center',
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '13px',
                      lineHeight: '1.25',
                      color: '#141210',
                      textWrap: 'balance',
                    }}
                  >
                    Auto and e-rickshaw unions
                  </span>{' '}
                  <span
                    style={{
                      position: 'absolute',
                      left: '12%',
                      top: '59.4%',
                      transform: 'translate(-50%,-50%)',
                      width: 'max-content',
                      maxWidth: '100px',
                      textAlign: 'center',
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '13px',
                      lineHeight: '1.25',
                      color: '#141210',
                      textWrap: 'balance',
                    }}
                  >
                    Urban planners
                  </span>{' '}
                  <span
                    style={{
                      position: 'absolute',
                      left: '17.2%',
                      top: '23.8%',
                      transform: 'translate(-50%,-50%)',
                      width: 'max-content',
                      maxWidth: '100px',
                      textAlign: 'center',
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '13px',
                      lineHeight: '1.25',
                      color: '#141210',
                      textWrap: 'balance',
                    }}
                  >
                    Centre for women welfare
                  </span>{' '}
                  <span
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '25%',
                      transform: 'translate(-50%,-50%)',
                      width: 'max-content',
                      maxWidth: '170px',
                      textAlign: 'center',
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '13px',
                      lineHeight: '1.25',
                      color: '#141210',
                      textWrap: 'balance',
                    }}
                  >
                    By-standers
                  </span>{' '}
                  <span
                    style={{
                      position: 'absolute',
                      left: '75.5%',
                      top: '50%',
                      transform: 'translate(-50%,-50%)',
                      width: 'max-content',
                      maxWidth: '80px',
                      textAlign: 'center',
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '13px',
                      lineHeight: '1.25',
                      color: '#141210',
                      textWrap: 'balance',
                    }}
                  >
                    Policy makers
                  </span>{' '}
                  <span
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '75.5%',
                      transform: 'translate(-50%,-50%)',
                      width: 'max-content',
                      maxWidth: '170px',
                      textAlign: 'center',
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '13px',
                      lineHeight: '1.25',
                      color: '#141210',
                      textWrap: 'balance',
                    }}
                  >
                    All women, across incomes and ages
                  </span>{' '}
                  <span
                    style={{
                      position: 'absolute',
                      left: '24.5%',
                      top: '50%',
                      transform: 'translate(-50%,-50%)',
                      width: 'max-content',
                      maxWidth: '80px',
                      textAlign: 'center',
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '13px',
                      lineHeight: '1.25',
                      color: '#141210',
                      textWrap: 'balance',
                    }}
                  >
                    Communities
                  </span>{' '}
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%,-50%)',
                      width: '30%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      textAlign: 'center',
                      color: '#ffffff',
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '13px',
                      lineHeight: '1.2',
                    }}
                  >
                    <span style={{ fontWeight: '700' }}>Women using public transport</span>
                    <span>Male public-transport users</span>
                    <span>Families</span>
                    <span>Teenage friend groups</span>
                  </div>{' '}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      flex: 'none',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: '#141210',
                      marginTop: '2px',
                    }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span
                      style={{
                        fontFamily: "'Source Serif 4',serif",
                        fontSize: '12px',
                        letterSpacing: '0.1em',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        color: '#141210',
                      }}
                    >
                      Primary · at the centre
                    </span>
                    <span
                      style={{
                        fontFamily: "'Source Serif 4',serif",
                        fontSize: '15px',
                        lineHeight: '1.45',
                        color: '#4a4440',
                      }}
                    >
                      The people whose daily journeys the work has to change.
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      flex: 'none',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: '#f6dedb',
                      marginTop: '2px',
                    }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span
                      style={{
                        fontFamily: "'Source Serif 4',serif",
                        fontSize: '12px',
                        letterSpacing: '0.1em',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        color: '#141210',
                      }}
                    >
                      Secondary · around them
                    </span>
                    <span
                      style={{
                        fontFamily: "'Source Serif 4',serif",
                        fontSize: '15px',
                        lineHeight: '1.45',
                        color: '#4a4440',
                      }}
                    >
                      Those who watch, judge or step in.
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      flex: 'none',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: '#f2f0eb',
                      boxShadow: 'inset 0 0 0 1px #d8d3cc',
                      marginTop: '2px',
                    }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span
                      style={{
                        fontFamily: "'Source Serif 4',serif",
                        fontSize: '12px',
                        letterSpacing: '0.1em',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        color: '#141210',
                      }}
                    >
                      System · who runs and funds it
                    </span>
                    <span
                      style={{
                        fontFamily: "'Source Serif 4',serif",
                        fontSize: '15px',
                        lineHeight: '1.45',
                        color: '#4a4440',
                      }}
                    >
                      The institutions that make change stick.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p
              style={{
                margin: '0',
                fontFamily: "'Source Serif 4',serif",
                fontStyle: 'italic',
                fontSize: '16px',
                lineHeight: '1.5',
                color: '#4a4440',
                maxWidth: '760px',
              }}
            >
              Extreme users shape the edges: women with disabilities. Safety reads as a relational, systemic issue:
              power and infrastructure have to be read together.
            </p>
          </div>
          <div data-yj-rv="up" style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '20px' }}>
            <span
              style={{
                fontFamily: "'Source Serif 4',serif",
                fontSize: '13px',
                letterSpacing: '0.12em',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: '#c4161c',
              }}
            >
              How success is measured
            </span>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
                gap: '0',
                borderTop: '3px solid #141210',
              }}
            >
              {each(v.mv?.kpis, (kp, $index) => (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '16px 20px 16px 0' }}>
                    <span
                      style={{
                        fontFamily: "'Source Serif 4',serif",
                        fontSize: '12px',
                        letterSpacing: '0.1em',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        color: '#4a4440',
                      }}
                    >
                      {t(kp?.h)}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Source Serif 4',Georgia,serif",
                        fontWeight: '600',
                        fontSize: '24px',
                        lineHeight: '1.1',
                        color: '#141210',
                      }}
                    >
                      {t(kp?.goal)}
                    </span>
                    <ul
                      style={{ margin: '0', padding: '0', listStyle: 'none', display: 'flex', flexDirection: 'column' }}
                    >
                      {each(kp?.m, (x, $index) => (
                        <>
                          <li
                            style={{
                              display: 'flex',
                              gap: '10px',
                              padding: '8px 0',
                              borderTop: '1px solid #d6d2ca',
                              fontFamily: "'Source Serif 4',serif",
                              fontSize: '15px',
                              lineHeight: '1.45',
                              color: '#2a2522',
                            }}
                          >
                            <span style={{ color: '#c4161c', fontWeight: '700' }}>→</span>
                            {t(x, true)}
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                </>
              ))}
            </div>
            <p
              style={{
                margin: '0',
                fontFamily: "'Source Serif 4',serif",
                fontStyle: 'italic',
                fontSize: '16px',
                lineHeight: '1.5',
                color: '#4a4440',
                maxWidth: '760px',
              }}
            >
              The test throughout: internalised change over compliance. A mid-point evaluation in 2029 decides whether
              to scale into Horizon 3.
            </p>
          </div>
        </section>{' '}
        <section
          data-mv="reflect"
          aria-label="Opinion"
          style={{
            padding: 'clamp(96px,10vw,160px) clamp(20px,8.4vw,120px) 0',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
            willChange: 'transform',
          }}
          data-paper="1"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: '8px 16px',
              flexWrap: 'wrap',
              padding: '8px 0',
              borderTop: '3px solid #141210',
              fontFamily: "'Source Serif 4',serif",
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#141210',
            }}
          >
            <span style={{ fontWeight: '700' }}>A8</span>
            <span style={{ fontWeight: '700' }}>Opinion</span>
            <span>The Daily Commute</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px 48px' }}>
            <div style={{ flex: '1.6 1 460px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#c4161c',
                }}
              >
                Opinion · Reflection
              </span>
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontFamily: "'Source Serif 4',Georgia,serif",
                  fontWeight: '600',
                  fontSize: 'clamp(34px,4.4vw,68px)',
                  lineHeight: '1.02',
                  letterSpacing: '-0.01em',
                  color: '#141210',
                  textWrap: 'balance',
                  maxWidth: '1100px',
                  fontStyle: 'italic',
                }}
              >
                {t(v.mv?.reflect?.h)}
              </h2>
              <p
                style={{
                  margin: '0',
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '18px',
                  lineHeight: '1.62',
                  color: '#2a2522',
                  maxWidth: '760px',
                  textWrap: 'pretty',
                }}
              >
                {t(v.mv?.reflect?.p)}
              </p>
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#141210',
                }}
              >
                — Yashvi Jain
              </span>
            </div>
            <aside
              style={{
                flex: '1 1 300px',
                minWidth: '0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                paddingLeft: '28px',
                borderLeft: '1px solid #d6d2ca',
              }}
            >
              <span
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  color: '#4a4440',
                  paddingBottom: '8px',
                  borderTop: '3px solid #141210',
                  paddingTop: '8px',
                }}
              >
                {'Corrections & next steps'}
              </span>
              {each(v.mv?.limits, (l, $index) => (
                <>
                  <div
                    data-yj-rv="up"
                    style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '12px 0' }}
                  >
                    <span
                      style={{
                        fontFamily: "'Source Serif 4',serif",
                        fontWeight: '700',
                        fontSize: '15px',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        color: '#141210',
                      }}
                    >
                      {t(l?.k)}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Source Serif 4',serif",
                        fontSize: '15px',
                        lineHeight: '1.45',
                        color: '#2a2522',
                      }}
                    >
                      {t(l?.s)}
                    </span>
                  </div>
                </>
              ))}
            </aside>
          </div>
          <div
            data-yj-rv="up"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px 32px',
              paddingTop: '14px',
              borderTop: '3px solid #141210',
            }}
          >
            <span
              style={{
                fontFamily: "'Source Serif 4',serif",
                fontStyle: 'italic',
                fontSize: '17px',
                lineHeight: '1.45',
                color: '#4a4440',
              }}
            >
              The full report: research, frameworks, prototypes and appendices.
            </span>
            <a
              className="dc-hover-555b4c52"
              href="https://drive.google.com/file/d/1hYqHwVmrE2CorWswYmIhMiCHWGkalT_T/view?usp=share_link"
              target="_blank"
              rel="noopener"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 22px',
                background: '#141210',
                color: '#ffffff',
                textDecoration: 'none',
                fontFamily: "'Source Serif 4',serif",
                fontSize: '13px',
                letterSpacing: '0.12em',
                fontWeight: '700',
                textTransform: 'uppercase',
                transition: 'background 200ms',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m-5-5 5 5 5-5M4 21h16" />
              </svg>
              Download PDF for more details
            </a>
          </div>
        </section>
      </div>
      <div style={{ background: '#fcfbf8', padding: '0 12px 12px' }}>
        <div style={{ height: '60vh', minHeight: '420px', position: 'relative', overflow: 'hidden' }}>
          {t(v.nextBanner)}
        </div>
      </div>
      {v.mv?.rulesOpen ? (
        <>
          {' '}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="The Script — rules of play"
            onClick={v.mv?.closeRules}
            style={{
              position: 'fixed',
              inset: '0',
              zIndex: '60',
              background: 'rgba(20,18,16,0.72)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              boxSizing: 'border-box',
            }}
          >
            <div
              onClick={v.mv?.stop}
              style={{
                position: 'relative',
                width: 'min(100%,760px)',
                maxHeight: 'calc(100vh - 48px)',
                overflowY: 'auto',
                background: '#fcfbf8',
                color: '#141210',
                padding: '40px clamp(20px,4vw,48px)',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '22px',
                fontFamily: "'Source Serif 4',serif",
              }}
            >
              <button
                className="dc-hover-d5d3cd45"
                onClick={v.mv?.closeRules}
                aria-label="Close"
                style={{
                  all: 'unset',
                  cursor: 'pointer',
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#141210',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '0 48px 8px 0',
                  borderTop: '3px solid #141210',
                  paddingTop: '8px',
                  fontFamily: "'Source Serif 4',serif",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                }}
              >
                <span>The solution space</span>
                <span style={{ color: '#c4161c' }}>Mechanics</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span
                  style={{
                    fontFamily: "'Source Serif 4',Georgia,serif",
                    fontWeight: '600',
                    fontSize: 'clamp(40px,5vw,56px)',
                    lineHeight: '0.95',
                  }}
                >
                  The Script
                </span>
                <span style={{ fontStyle: 'italic', fontSize: '17px', lineHeight: '1.45', color: '#4a4440' }}>
                  A card game that pulls the gender norms we half-remember into the open, at the family table or among
                  friends.
                </span>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))',
                  borderTop: '1px solid #141210',
                  borderBottom: '1px solid #141210',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '12px 14px 12px 0' }}>
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: '#c4161c',
                    }}
                  >
                    Players
                  </span>
                  <span style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontWeight: '600', fontSize: '26px' }}>
                    4–10
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '12px 14px' }}>
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: '#c4161c',
                    }}
                  >
                    Setup
                  </span>
                  <span style={{ fontSize: '15px', lineHeight: '1.4' }}>
                    Deal 7 white answer cards each. Shuffle the black prompt cards face-down.
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '12px 0 12px 14px' }}>
                  <span
                    style={{
                      fontFamily: "'Source Serif 4',serif",
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: '#c4161c',
                    }}
                  >
                    Judge
                  </span>
                  <span style={{ fontSize: '15px', lineHeight: '1.4' }}>
                    The Reader, rotating clockwise each round.
                  </span>
                </div>
              </div>
              <ol
                style={{
                  margin: '0',
                  padding: '0',
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {each(v.mv?.steps, (p, $index) => (
                  <>
                    <li
                      style={css(
                        `display:flex;align-items:center;gap:16px;padding:14px 22px 14px 14px;background:${p?.bg ?? ''};color:${p?.fg ?? ''};`,
                      )}
                    >
                      <span
                        style={css(
                          `flex:none;width:48px;height:48px;border-radius:50%;border:1.5px solid ${p?.fg ?? ''};display:flex;align-items:center;justify-content:center;font-family:'Source Serif 4',Georgia,serif;font-weight:700;font-size:24px;line-height:1;color:${p?.fg ?? ''}`,
                        )}
                      >
                        {t(p?.n, true)}
                      </span>
                      <span style={css(`font-size:15px;line-height:1.45;color:${p?.fg ?? ''};text-wrap:pretty`)}>
                        {t(p?.v)}
                      </span>
                    </li>
                  </>
                ))}
              </ol>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px 24px',
                  paddingTop: '14px',
                  borderTop: '3px solid #141210',
                }}
              >
                <span style={{ flex: '1 1 280px', fontSize: '15px', lineHeight: '1.45' }}>
                  After the game, ask: which lines have you heard at home? Who were they said to, and who were they
                  never said to?
                </span>
                <a
                  className="dc-hover-8dfa3c2d"
                  href="The Script Rules.dc.html"
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 14px',
                    border: '1px solid #141210',
                    color: '#141210',
                    textDecoration: 'none',
                    fontFamily: "'Source Serif 4',serif",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3v12m-5-5 5 5 5-5M4 21h16" />
                  </svg>
                  Printable PDF
                </a>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default defineScreen({
  name: 'Case Move Pub',
  Logic,
  template,
  defaults: {},
});
