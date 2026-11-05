import { defineScreen } from '../dc/defineScreen.js';
import { css, cx, asset, each, t } from '../dc/template.js';
import Logic from './CasePfizer.logic.js';
import screenCss from './CasePfizer.css?raw';
import './CasePfizer.states.css';

function template(v) {
  return (
    <>
      <div
        ref={v.rootRef}
        style={{
          background: '#ffffff',
          color: '#000000',
          fontFamily: "'Instrument Sans',sans-serif",
          overflow: 'hidden',
        }}
      >
        <div ref={v.mvRef}>
          {' '}
          <section
            data-mv="top"
            aria-label="Pfizer.com"
            style={{ position: 'relative', padding: '120px clamp(20px,5vw,72px) 0', boxSizing: 'border-box' }}
          >
            {' '}
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                height: 'min(88vh,820px)',
                minHeight: '320px',
                margin: '-120px calc(-1 * clamp(20px,5vw,72px)) 56px',
                background: '#0000c9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="assets/web/assets/pfizer/cover-kid.webp"
                alt=""
                style={{
                  position: 'absolute',
                  inset: '0',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '55% 40%',
                  opacity: '0.28',
                  filter: 'grayscale(1)',
                  mixBlendMode: 'luminosity',
                  pointerEvents: 'none',
                }}
              />
              <img
                src="assets/logos/pfizer-white.svg"
                alt="Pfizer"
                style={{
                  position: 'relative',
                  width: '28%',
                  maxWidth: '360px',
                  minWidth: '140px',
                  height: 'auto',
                  pointerEvents: 'none',
                }}
              />
            </div>{' '}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))',
                gap: '32px 48px',
                alignItems: 'end',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '40px' }}>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#0000c9',
                  }}
                >
                  {'Case study 05 · Corporate website & design system'}
                </span>
                <h1
                  aria-label="Pfizer’s new brand, live on pfizer.com"
                  style={{
                    margin: '0',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0 0.24em',
                    fontWeight: '400',
                    fontSize: 'clamp(48px,6.4vw,104px)',
                    lineHeight: '0.98',
                    letterSpacing: '-0.035em',
                    color: '#000000',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'inline-block',
                      overflow: 'hidden',
                      paddingBottom: '0.1em',
                      marginBottom: '-0.1em',
                    }}
                  >
                    <span data-pz-l="" style={{ display: 'inline-block' }}>
                      Pfizer’s
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'inline-block',
                      overflow: 'hidden',
                      paddingBottom: '0.1em',
                      marginBottom: '-0.1em',
                    }}
                  >
                    <span data-pz-l="" style={{ display: 'inline-block' }}>
                      new
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'inline-block',
                      overflow: 'hidden',
                      paddingBottom: '0.1em',
                      marginBottom: '-0.1em',
                    }}
                  >
                    <span data-pz-l="" style={{ display: 'inline-block' }}>
                      brand,
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'inline-block',
                      overflow: 'hidden',
                      paddingBottom: '0.1em',
                      marginBottom: '-0.1em',
                    }}
                  >
                    <span data-pz-l="" style={{ display: 'inline-block' }}>
                      live
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'inline-block',
                      overflow: 'hidden',
                      paddingBottom: '0.1em',
                      marginBottom: '-0.1em',
                    }}
                  >
                    <span data-pz-l="" style={{ display: 'inline-block' }}>
                      on
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'inline-block',
                      overflow: 'hidden',
                      paddingBottom: '0.1em',
                      marginBottom: '-0.1em',
                    }}
                  >
                    <span data-pz-l="" style={{ display: 'inline-block', color: '#0000c9' }}>
                      pfizer.com
                    </span>
                  </span>
                </h1>
              </div>
              <div
                style={{
                  position: 'relative',
                  zIndex: '2',
                  justifySelf: 'start',
                  width: 'min(100%,520px)',
                  paddingBottom: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '20px',
                }}
              >
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.5', color: '#3d3d45', textWrap: 'pretty' }}>
                  I led the UI of pfizer.com through Pentagram’s rebrand, and turned it into the design system Pfizer’s
                  internal pages and dashboards now follow.
                </p>
                <a
                  className="dc-hover-4dc6d24a"
                  href="https://www.pfizer.com"
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 20px',
                    borderRadius: '999px',
                    border: '2px solid #0000c9',
                    color: '#0000c9',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'background 200ms,color 200ms,gap 200ms',
                  }}
                >
                  {'Visit pfizer.com '}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>{' '}
            <div
              data-yj-rv="wipe"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
                gap: '24px',
              }}
            >
              <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#ffffff',
                    border: '1px solid #d9d9e0',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 14px',
                      borderBottom: '1px solid #d9d9e0',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#d9d9e0' }} />
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#d9d9e0' }} />
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#d9d9e0' }} />
                    </div>
                    <span
                      style={{
                        flex: '1',
                        minWidth: '0',
                        padding: '5px 12px',
                        borderRadius: '999px',
                        background: '#eef0ff',
                        fontSize: '13px',
                        color: '#3d3d45',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      pfizer.com
                    </span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#3d3d45',
                      }}
                    >
                      <span data-pz-pulse="" style={{ width: '8px', height: '8px', background: '#e0262a' }} />
                      Live
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '998/550',
                      overflow: 'hidden',
                      background: '#000000',
                    }}
                  >
                    {' '}
                    <img
                      src="assets/web/assets/pfizer/home.webp"
                      alt="Pfizer.com home screens"
                      style={{
                        position: 'absolute',
                        left: '-0.2%',
                        top: '-6.55%',
                        width: '205.8%',
                        height: '110.9%',
                        maxWidth: 'none',
                      }}
                    />{' '}
                  </div>
                </div>
                <figcaption
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#5c5c66',
                  }}
                >
                  Home
                </figcaption>
              </figure>
              <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#ffffff',
                    border: '1px solid #d9d9e0',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 14px',
                      borderBottom: '1px solid #d9d9e0',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#d9d9e0' }} />
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#d9d9e0' }} />
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#d9d9e0' }} />
                    </div>
                    <span
                      style={{
                        flex: '1',
                        minWidth: '0',
                        padding: '5px 12px',
                        borderRadius: '999px',
                        background: '#eef0ff',
                        fontSize: '13px',
                        color: '#3d3d45',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      pfizer.com/careers
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '998/550',
                      overflow: 'hidden',
                      background: '#000000',
                    }}
                  >
                    {' '}
                    <img
                      src="assets/web/assets/pfizer/home.webp"
                      alt="Pfizer.com careers screen"
                      style={{
                        position: 'absolute',
                        left: '-102.9%',
                        top: '-6.55%',
                        width: '205.8%',
                        height: '110.9%',
                        maxWidth: 'none',
                      }}
                    />{' '}
                  </div>
                </div>
                <figcaption
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#5c5c66',
                  }}
                >
                  Careers
                </figcaption>
              </figure>
            </div>{' '}
            <dl
              style={{
                margin: '0',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '20px 40px',
                padding: '28px 0',
                borderBottom: '1px solid #d9d9e0',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <dt
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#5c5c66',
                  }}
                >
                  My role
                </dt>
                <dd style={{ margin: '0', fontSize: '16px', fontWeight: '500' }}>UI lead · offshore design team</dd>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <dt
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#5c5c66',
                  }}
                >
                  Client
                </dt>
                <dd style={{ margin: '0', fontSize: '16px', fontWeight: '500' }}>Pfizer · via TCS</dd>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <dt
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#5c5c66',
                  }}
                >
                  Brand
                </dt>
                <dd style={{ margin: '0', fontSize: '16px', fontWeight: '500' }}>Pentagram</dd>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <dt
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#5c5c66',
                  }}
                >
                  Typefaces
                </dt>
                <dd style={{ margin: '0', fontSize: '16px', fontWeight: '500' }}>Pfizer Tomorrow · Pfizer Diatype</dd>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <dt
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#5c5c66',
                  }}
                >
                  Timeline
                </dt>
                <dd style={{ margin: '0', fontSize: '16px', fontWeight: '500' }}>6 months · 2024–25</dd>
              </div>
            </dl>{' '}
          </section>{' '}
          <section
            data-mv="context"
            aria-label="The context"
            style={{ padding: '120px clamp(20px,5vw,72px) 0', boxSizing: 'border-box' }}
          >
            {' '}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                gap: '24px 48px',
                paddingBottom: '48px',
                borderBottom: '1px solid #d9d9e0',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#0000c9',
                }}
              >
                <span style={{ width: '10px', height: '10px', background: '#0000c9' }} />
                The context
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2
                  data-yj-rv="up"
                  style={{
                    margin: '0',
                    fontWeight: '400',
                    fontSize: 'clamp(36px,4vw,64px)',
                    lineHeight: '1.02',
                    letterSpacing: '-0.03em',
                    textWrap: 'balance',
                  }}
                >
                  Pfizer’s first formal brand, and a website to carry it.
                </h2>
                <p
                  data-yj-rv="up"
                  style={{
                    margin: '0',
                    fontSize: '17px',
                    lineHeight: '1.55',
                    color: '#3d3d45',
                    maxWidth: '560px',
                    textWrap: 'pretty',
                  }}
                >
                  Pentagram built the identity around one purpose: breakthroughs that change people’s lives. I brought
                  it to pfizer.com, so that everyone can use the site, including people with colour blindness, low
                  vision and ADHD.
                </p>
              </div>
            </div>{' '}
            <div
              ref={v.countRef}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                gap: '12px',
                marginTop: '12px',
              }}
            >
              {each(v.stats, (s, $index) => (
                <>
                  <div
                    className="dc-hover-44c25a65"
                    data-yj-rv="up"
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      minHeight: '280px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '24px',
                      padding: '24px 28px 28px',
                      borderRadius: '20px',
                      background: '#e6f0ff',
                      transition: 'transform 300ms',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '15px',
                        lineHeight: '1.4',
                        fontWeight: '500',
                        color: '#0000c9',
                        maxWidth: '240px',
                      }}
                    >
                      {t(s?.k)}
                    </span>
                    <span
                      style={{
                        fontSize: 'clamp(88px,9vw,150px)',
                        lineHeight: '0.85',
                        letterSpacing: '-0.05em',
                        color: '#0000c9',
                      }}
                    >
                      {t(s?.n)}
                      <span style={{ fontSize: '0.32em', letterSpacing: '-0.01em', marginLeft: '0.15em' }}>
                        {t(s?.u)}
                      </span>
                    </span>
                  </div>
                </>
              ))}
            </div>{' '}
          </section>{' '}
          <section
            data-mv="brand"
            aria-label="The brand"
            style={{
              marginTop: '120px',
              padding: '96px clamp(20px,5vw,72px)',
              boxSizing: 'border-box',
              background: '#0000c9',
              color: '#ffffff',
            }}
          >
            {' '}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                gap: '24px 48px',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                <span style={{ width: '10px', height: '10px', background: '#ffffff' }} />
                The brand, on screen
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2
                  style={{
                    margin: '0',
                    fontWeight: '400',
                    fontSize: 'clamp(48px,6.4vw,104px)',
                    lineHeight: '0.98',
                    letterSpacing: '-0.04em',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0 0.24em',
                  }}
                >
                  <span>Make it</span>
                  <span
                    style={{
                      display: 'inline-block',
                      overflow: 'hidden',
                      verticalAlign: 'bottom',
                      paddingBottom: '0.16em',
                      marginBottom: '-0.16em',
                    }}
                  >
                    <span data-pz-trait="" style={{ display: 'inline-block', color: '#8fb3ff' }}>
                      {t(v.trait?.t)}
                    </span>
                  </span>
                </h2>
                <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.55', maxWidth: '560px', textWrap: 'pretty' }}>
                  Pentagram turned Pfizer’s four values into four traits. I turned each trait into a rule the website
                  could follow, and gave motion one job: to support meaning, never to decorate.
                </p>
              </div>
            </div>{' '}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
                gap: '12px',
                marginTop: '56px',
              }}
            >
              {each(v.traits, (vItem, $index) => (
                <>
                  <button
                    onClick={vItem?.pick}
                    style={css(
                      `all:unset;cursor:pointer;display:flex;flex-direction:column;gap:10px;padding:24px;background:${vItem?.bg ?? ''};color:${vItem?.fg ?? ''};box-shadow:${vItem?.ring ?? ''};transition:background 300ms,color 300ms`,
                    )}
                  >
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {'Value · '}
                      {t(vItem?.v)}
                    </span>
                    <span style={{ fontSize: '28px', lineHeight: '1.1' }}>{t(vItem?.t)}</span>
                    <span style={{ fontSize: '15px', lineHeight: '1.45' }}>{t(vItem?.ui)}</span>
                  </button>
                </>
              ))}
            </div>{' '}
          </section>{' '}
          <section
            data-mv="system"
            aria-label="What I set up"
            style={{
              padding: '96px clamp(20px,5vw,72px)',
              boxSizing: 'border-box',
              background: '#0a0a3d',
              color: '#ffffff',
            }}
          >
            {' '}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                gap: '24px 48px',
                alignItems: 'end',
                paddingBottom: '48px',
              }}
            >
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontWeight: '400',
                  fontSize: 'clamp(36px,4vw,64px)',
                  lineHeight: '1.02',
                  letterSpacing: '-0.03em',
                  textWrap: 'balance',
                }}
              >
                What I set up, and how teams use it.
              </h2>
              <p
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontSize: '16px',
                  lineHeight: '1.55',
                  maxWidth: '480px',
                  textWrap: 'pretty',
                  color: '#d4d6f0',
                }}
              >
                Tokens, components and guidelines that started on pfizer.com and became the corporate design UI for
                Pfizer’s other pages and dashboards.
              </p>
            </div>{' '}
            <div style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid #3a3a7a' }}>
              {each(v.rows, (r, $index) => (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #3a3a7a' }}>
                    <button
                      className="dc-hover-c0591e02"
                      onClick={r?.toggle}
                      aria-expanded={r?.open}
                      style={{
                        all: 'unset',
                        cursor: 'pointer',
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr) 32px',
                        gap: '24px',
                        alignItems: 'start',
                        padding: '22px 0',
                        transition: 'color 200ms',
                      }}
                    >
                      <span style={{ fontSize: 'clamp(20px,1.8vw,26px)', lineHeight: '1.2' }}>{t(r?.k)}</span>
                      <ul
                        style={{
                          margin: '0',
                          padding: '0',
                          listStyle: 'none',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                        }}
                      >
                        {each(r?.pts, (p, $index) => (
                          <>
                            <li
                              style={{
                                display: 'flex',
                                gap: '10px',
                                fontSize: '14px',
                                lineHeight: '1.45',
                                color: '#d4d6f0',
                              }}
                            >
                              <span aria-hidden="true">•</span>
                              <span>{t(p)}</span>
                            </li>
                          </>
                        ))}
                      </ul>
                      <span
                        aria-hidden="true"
                        style={css(
                          `justify-self:end;font-size:20px;line-height:1;transform:rotate(${r?.rot ?? ''});transition:transform 300ms`,
                        )}
                      >
                        ↓
                      </span>
                    </button>
                    <div
                      style={css(
                        `display:grid;grid-template-rows:${r?.gr ?? ''};transition:grid-template-rows 500ms cubic-bezier(.2,.8,.2,1)`,
                      )}
                    >
                      <div style={{ overflow: 'hidden', minHeight: '0' }}>
                        {' '}
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr) 32px',
                            gap: '24px',
                            padding: '0 0 32px',
                          }}
                        >
                          <span />
                          <div style={{ minWidth: '0' }}>
                            {' '}
                            {r?.isSystem ? (
                              <>
                                {' '}
                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px',
                                    padding: '20px',
                                    background: '#ffffff',
                                    color: '#000000',
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: '12px',
                                      fontWeight: '600',
                                      letterSpacing: '0.08em',
                                      textTransform: 'uppercase',
                                      color: '#5c5c66',
                                    }}
                                  >
                                    Hover for the clickable state
                                  </span>
                                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    {each(v.scale, (tItem, $index) => (
                                      <>
                                        <div
                                          className="dc-hover-ecdb7c50"
                                          style={{
                                            display: 'grid',
                                            gridTemplateColumns: '44px minmax(0,1fr) auto',
                                            gap: '12px',
                                            alignItems: 'baseline',
                                            padding: '8px 0',
                                            borderBottom: '1px solid #d9d9e0',
                                            cursor: 'pointer',
                                            transition: 'color 250ms,padding 250ms',
                                          }}
                                        >
                                          <span
                                            style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.08em' }}
                                          >
                                            {t(tItem?.k)}
                                          </span>
                                          <span
                                            style={css(
                                              `font-size:${tItem?.fs ?? ''};line-height:1.1;letter-spacing:-0.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis`,
                                            )}
                                          >
                                            {t(tItem?.label)}
                                          </span>
                                          <span style={{ fontSize: '12px', color: '#5c5c66' }}>{t(tItem?.spec)}</span>
                                        </div>
                                      </>
                                    ))}
                                  </div>
                                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    <button
                                      className="dc-hover-68d6c28a dc-active-794b45de dc-focus-df84a03f"
                                      style={{
                                        all: 'unset',
                                        cursor: 'pointer',
                                        padding: '11px 22px',
                                        borderRadius: '999px',
                                        background: '#0000c9',
                                        color: '#ffffff',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        transition: 'background 200ms,transform 150ms',
                                      }}
                                    >
                                      Primary
                                    </button>
                                    <button
                                      className="dc-hover-643beb97 dc-active-794b45de dc-focus-df84a03f"
                                      style={{
                                        all: 'unset',
                                        cursor: 'pointer',
                                        padding: '9px 20px',
                                        borderRadius: '999px',
                                        border: '2px solid #0000c9',
                                        color: '#0000c9',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        transition: 'background 200ms,color 200ms,transform 150ms',
                                      }}
                                    >
                                      Secondary
                                    </button>
                                    <span
                                      style={{
                                        padding: '11px 22px',
                                        borderRadius: '999px',
                                        background: '#d9d9e0',
                                        color: '#5c5c66',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        cursor: 'not-allowed',
                                      }}
                                    >
                                      Disabled
                                    </span>
                                  </div>
                                </div>{' '}
                              </>
                            ) : null}{' '}
                            {r?.isScroll ? (
                              <>
                                {' '}
                                <button
                                  onClick={v.open?.pipeline_page}
                                  aria-label="Enlarge Pipeline page"
                                  style={{
                                    all: 'unset',
                                    cursor: 'zoom-in',
                                    display: 'block',
                                    position: 'relative',
                                    width: '100%',
                                    aspectRatio: '4/3',
                                    overflow: 'hidden',
                                    background: '#ffffff',
                                  }}
                                >
                                  {' '}
                                  <img
                                    data-pz-scroll=""
                                    src="assets/web/assets/pfizer/pipeline-page.webp"
                                    alt="Pipeline page, scrolling"
                                    style={{ position: 'absolute', left: '0', top: '0', width: '100%', height: 'auto' }}
                                  />{' '}
                                </button>{' '}
                              </>
                            ) : null}{' '}
                            {r?.hasImg ? (
                              <>
                                {' '}
                                <button
                                  onClick={r?.zoom}
                                  aria-label={`Enlarge ${r?.k ?? ''}`}
                                  style={{
                                    all: 'unset',
                                    cursor: 'zoom-in',
                                    display: 'block',
                                    width: '100%',
                                    overflow: 'hidden',
                                    background: '#ffffff',
                                  }}
                                >
                                  {' '}
                                  <img
                                    className="dc-hover-5cb87b1a"
                                    src={asset(r?.img)}
                                    alt={r?.k}
                                    style={{
                                      display: 'block',
                                      width: '100%',
                                      height: 'auto',
                                      transition: 'transform 900ms cubic-bezier(.2,.8,.2,1)',
                                    }}
                                  />{' '}
                                </button>{' '}
                              </>
                            ) : null}{' '}
                          </div>
                          <span />
                        </div>{' '}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>{' '}
          </section>{' '}
          <section
            data-mv="prototype"
            aria-label="Prototype"
            style={{ padding: '120px clamp(20px,5vw,72px) 0', boxSizing: 'border-box' }}
          >
            {' '}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                gap: '24px 48px',
                paddingBottom: '48px',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#0000c9',
                }}
              >
                <span style={{ width: '10px', height: '10px', background: '#0000c9' }} />
                Prototype
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2
                  data-yj-rv="up"
                  style={{
                    margin: '0',
                    fontWeight: '400',
                    fontSize: 'clamp(36px,4vw,64px)',
                    lineHeight: '1.02',
                    letterSpacing: '-0.03em',
                    textWrap: 'balance',
                  }}
                >
                  The system, in motion.
                </h2>
                <p
                  data-yj-rv="up"
                  style={{
                    margin: '0',
                    fontSize: '17px',
                    lineHeight: '1.55',
                    color: '#3d3d45',
                    maxWidth: '560px',
                    textWrap: 'pretty',
                  }}
                >
                  A walkthrough of the prototype: navigation, hover states and page transitions built on the components,
                  so developers could see exactly how each interaction should behave.
                </p>
              </div>
            </div>{' '}
            <div
              data-yj-rv="wipe"
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: '#ffffff',
                border: '1px solid #d9d9e0',
                boxShadow: '0 24px 60px rgba(0,0,60,0.12)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderBottom: '1px solid #d9d9e0',
                }}
              >
                <span
                  style={{
                    flex: '1',
                    minWidth: '0',
                    maxWidth: '420px',
                    padding: '5px 12px',
                    borderRadius: '999px',
                    background: '#eef0ff',
                    fontSize: '13px',
                    color: '#3d3d45',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  pfizer.com · prototype
                </span>
                <span
                  style={{
                    marginLeft: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#3d3d45',
                  }}
                >
                  <span data-pz-pulse="" style={{ width: '8px', height: '8px', background: '#e0262a' }} />
                  Recording
                </span>
              </div>
              <div
                onMouseEnter={v.pcHold}
                onMouseLeave={v.pcGo}
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/10',
                  background: '#000000',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="assets/web/pfizer-proto/1.webp"
                  alt="Pipeline tutorial: Discover"
                  style={css(
                    `position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:${v.pc?.o0 ?? ''};transition:opacity 700ms ease`,
                  )}
                />
                <img
                  src="assets/web/pfizer-proto/2.webp"
                  alt="Candidate bubbles"
                  style={css(
                    `position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:${v.pc?.o1 ?? ''};transition:opacity 700ms ease`,
                  )}
                />
                <img
                  src="assets/web/pfizer-proto/3.webp"
                  alt="95 candidates"
                  style={css(
                    `position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:${v.pc?.o2 ?? ''};transition:opacity 700ms ease`,
                  )}
                />
                <img
                  src="assets/web/pfizer-proto/4.webp"
                  alt="Development phase filters"
                  style={css(
                    `position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:${v.pc?.o3 ?? ''};transition:opacity 700ms ease`,
                  )}
                />
                <button
                  className="dc-hover-90dff116"
                  onClick={v.pcPrev}
                  aria-label="Previous screen"
                  style={{
                    all: 'unset',
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.14)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                  }}
                >
                  ‹
                </button>
                <button
                  className="dc-hover-90dff116"
                  onClick={v.pcNext}
                  aria-label="Next screen"
                  style={{
                    all: 'unset',
                    cursor: 'pointer',
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.14)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                  }}
                >
                  ›
                </button>
                <div
                  style={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    bottom: '18px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                >
                  {each(v.pcDots, (d, $index) => (
                    <>
                      <button
                        onClick={d?.go}
                        aria-label={d?.label}
                        style={{ all: 'unset', cursor: 'pointer', padding: '10px 0' }}
                      >
                        <span
                          style={css(
                            `display:block;width:36px;height:3px;border-radius:2px;background:${d?.bg ?? ''};transition:background 300ms`,
                          )}
                        />
                      </button>
                    </>
                  ))}
                </div>
              </div>
            </div>{' '}
          </section>{' '}
          <section
            data-mv="responsive"
            aria-label="Responsive"
            style={{ padding: '120px clamp(20px,5vw,72px) 0', boxSizing: 'border-box' }}
          >
            {' '}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                gap: '24px 48px',
                paddingBottom: '48px',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#0000c9',
                }}
              >
                <span style={{ width: '10px', height: '10px', background: '#0000c9' }} />
                Desktop, iPad, mobile
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2
                  data-yj-rv="up"
                  style={{
                    margin: '0',
                    fontWeight: '400',
                    fontSize: 'clamp(36px,4vw,64px)',
                    lineHeight: '1.02',
                    letterSpacing: '-0.03em',
                    textWrap: 'balance',
                  }}
                >
                  One component, three screens.
                </h2>
                <p
                  data-yj-rv="up"
                  style={{
                    margin: '0',
                    fontSize: '17px',
                    lineHeight: '1.55',
                    color: '#3d3d45',
                    maxWidth: '560px',
                    textWrap: 'pretty',
                  }}
                >
                  Every component was specified for three breakpoints. Article cards go from three across to two to one,
                  the carousel keeps its progress bar and arrows, and the mega-menu becomes a full-screen list on
                  mobile. Switch devices to see it reflow.
                </p>
              </div>
            </div>{' '}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '12px',
                marginBottom: '20px',
              }}
            >
              <div
                role="tablist"
                aria-label="Device"
                style={{ display: 'flex', gap: '4px', padding: '4px', borderRadius: '999px', background: '#eef0ff' }}
              >
                {each(v.devices, (d, $index) => (
                  <>
                    <button
                      role="tab"
                      aria-selected={d?.on}
                      onClick={d?.pick}
                      style={css(
                        `all:unset;cursor:pointer;padding:10px 20px;border-radius:999px;font-size:14px;font-weight:600;background:${d?.bg ?? ''};color:${d?.fg ?? ''};transition:background 250ms,color 250ms`,
                      )}
                    >
                      {t(d?.k)}
                    </button>
                  </>
                ))}
              </div>
              <div
                role="tablist"
                aria-label="Screen"
                style={{ display: 'flex', gap: '4px', padding: '4px', borderRadius: '999px', background: '#eef0ff' }}
              >
                {each(v.views, (d, $index) => (
                  <>
                    <button
                      role="tab"
                      aria-selected={d?.on}
                      onClick={d?.pick}
                      style={css(
                        `all:unset;cursor:pointer;padding:10px 20px;border-radius:999px;font-size:14px;font-weight:600;background:${d?.bg ?? ''};color:${d?.fg ?? ''};transition:background 250ms,color 250ms`,
                      )}
                    >
                      {t(d?.k)}
                    </button>
                  </>
                ))}
              </div>
            </div>{' '}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: 'clamp(20px,4vw,56px) clamp(12px,3vw,40px)',
                background: '#f3f4f8',
              }}
            >
              <div
                style={css(
                  `width:${v.dev?.w ?? ''};max-width:100%;padding:${v.dev?.bezel ?? ''};border-radius:${v.dev?.r ?? ''};background:${v.dev?.bg ?? ''};box-shadow:0 24px 60px rgba(0,0,60,0.18);transition:width 700ms cubic-bezier(.2,.8,.2,1),padding 700ms,border-radius 700ms,background 400ms;box-sizing:border-box`,
                )}
              >
                {' '}
                <div
                  style={css(
                    `display:flex;flex-direction:column;height:${v.dev?.h ?? ''};overflow:hidden;background:#ffffff;border-radius:${v.dev?.ir ?? ''};transition:height 700ms cubic-bezier(.2,.8,.2,1),border-radius 700ms`,
                  )}
                >
                  {v.dev?.isDesk ? (
                    <>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '8px 12px',
                          borderBottom: '1px solid #d9d9e0',
                          flex: 'none',
                        }}
                      >
                        <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#d9d9e0' }} />
                        <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#d9d9e0' }} />
                        <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#d9d9e0' }} />
                        <span
                          style={{
                            marginLeft: '8px',
                            padding: '3px 10px',
                            borderRadius: '999px',
                            background: '#eef0ff',
                            fontSize: '11px',
                            color: '#3d3d45',
                          }}
                        >
                          pfizer.co.uk
                        </span>
                      </div>
                    </>
                  ) : null}
                  {v.dev?.isPhone ? (
                    <>
                      <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 0 2px', flex: 'none' }}>
                        <span style={{ width: '72px', height: '18px', borderRadius: '999px', background: '#000000' }} />
                      </div>
                    </>
                  ) : null}
                  <div
                    style={css(
                      `display:flex;align-items:center;gap:20px;padding:14px ${v.dev?.pad ?? ''};flex:none;border-bottom:1px solid #eef0ff`,
                    )}
                  >
                    <span
                      style={{
                        fontSize: '22px',
                        fontWeight: '600',
                        fontStyle: 'italic',
                        letterSpacing: '-0.02em',
                        color: '#0000c9',
                      }}
                    >
                      Pfizer
                    </span>
                    {v.dev?.isDesk ? (
                      <>
                        <div style={{ display: 'flex', gap: '18px', flex: '1', minWidth: '0', overflow: 'hidden' }}>
                          {each(v.navItems, (n, $index) => (
                            <>
                              <span
                                style={css(
                                  `font-size:13px;font-weight:500;white-space:nowrap;color:#0000c9;padding-bottom:2px;border-bottom:2px solid ${n?.u ?? ''}`,
                                )}
                              >
                                {t(n?.k)}
                              </span>
                            </>
                          ))}
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: '500', color: '#0000c9' }}>Contact Us</span>
                      </>
                    ) : null}
                    {v.dev?.notDesk ? (
                      <>
                        <span
                          style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', gap: '4px' }}
                          aria-label="Menu"
                        >
                          <span style={{ width: '22px', height: '2px', background: '#0000c9' }} />
                          <span style={{ width: '22px', height: '2px', background: '#0000c9' }} />
                          <span style={{ width: '14px', height: '2px', background: '#0000c9' }} />
                        </span>
                      </>
                    ) : null}
                  </div>
                  {v.isArticles ? (
                    <>
                      <div
                        style={css(
                          `display:flex;flex-direction:column;gap:16px;padding:24px ${v.dev?.pad ?? ''};flex:1;min-height:0;background:linear-gradient(#f6f6f8,#ffffff 30%)`,
                        )}
                      >
                        <span style={{ fontSize: '15px', fontWeight: '600' }}>Latest Articles</span>
                        <div style={{ overflow: 'hidden', flex: 'none' }}>
                          {' '}
                          <div
                            style={css(
                              `display:flex;gap:16px;transform:translateX(${v.car?.x ?? ''});transition:transform 700ms cubic-bezier(.2,.8,.2,1)`,
                            )}
                          >
                            {each(v.articles, (a, $index) => (
                              <>
                                <div
                                  style={css(
                                    `flex:0 0 ${v.car?.cw ?? ''};display:flex;flex-direction:column;border-radius:12px;overflow:hidden;background:#ffffff;box-shadow:0 6px 20px rgba(0,0,60,0.08);transition:flex-basis 700ms cubic-bezier(.2,.8,.2,1)`,
                                  )}
                                >
                                  <img
                                    src={asset(a?.src)}
                                    alt=""
                                    style={{ display: 'block', width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
                                  />
                                  <div
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '8px',
                                      padding: '14px 16px 18px',
                                    }}
                                  >
                                    <span
                                      style={css(
                                        `font-size:${v.car?.tfs ?? ''};line-height:1.12;letter-spacing:-0.01em;font-weight:500;color:#0000c9`,
                                      )}
                                    >
                                      {t(a?.t)}
                                    </span>
                                    <span style={{ fontSize: '12px', lineHeight: '1.45', color: '#3d3d45' }}>
                                      {t(a?.p)}
                                    </span>
                                  </div>
                                </div>
                              </>
                            ))}
                          </div>{' '}
                        </div>
                        <div
                          style={{
                            position: 'relative',
                            height: '5px',
                            borderRadius: '999px',
                            background: '#e4e4ea',
                            flex: 'none',
                          }}
                        >
                          <span
                            style={css(
                              `position:absolute;left:0;top:0;bottom:0;width:${v.car?.prog ?? ''};border-radius:999px;background:#0000c9;transition:width 700ms cubic-bezier(.2,.8,.2,1)`,
                            )}
                          />
                        </div>
                        <div style={{ display: 'flex', gap: '10px', flex: 'none' }}>
                          <button
                            className="dc-hover-b615172c"
                            onClick={v.car?.prev}
                            aria-label="Previous article"
                            style={{
                              all: 'unset',
                              cursor: 'pointer',
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              border: '1.5px solid #8c8c96',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '16px',
                              color: '#3d3d45',
                              transition: 'border-color 200ms,color 200ms',
                            }}
                          >
                            ←
                          </button>
                          <button
                            className="dc-hover-643beb97"
                            onClick={v.car?.next}
                            aria-label="Next article"
                            style={{
                              all: 'unset',
                              cursor: 'pointer',
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              border: '1.5px solid #0000c9',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '16px',
                              color: '#0000c9',
                              transition: 'background 200ms,color 200ms',
                            }}
                          >
                            →
                          </button>
                        </div>
                      </div>
                    </>
                  ) : null}
                  {v.isMenu ? (
                    <>
                      <div style={{ display: 'flex', flex: '1', minHeight: '0' }}>
                        <div
                          style={css(
                            `flex:${v.dev?.menuFlex ?? ''};display:flex;flex-direction:column;padding:20px ${v.dev?.pad ?? ''};background:#ffffff;overflow:hidden`,
                          )}
                        >
                          {v.dev?.notDesk ? (
                            <>
                              <span
                                style={{
                                  fontSize: '12px',
                                  fontWeight: '600',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  color: '#5c5c66',
                                  paddingBottom: '8px',
                                }}
                              >
                                ← Responsibility
                              </span>
                            </>
                          ) : null}
                          {each(v.menu, (m, $index) => (
                            <>
                              <div
                                className="dc-hover-671573f8"
                                style={css(
                                  `display:flex;justify-content:space-between;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid ${v.dev?.rule ?? ''};font-size:${v.dev?.mfs ?? ''};color:#0000c9;cursor:pointer;transition:padding 200ms`,
                                )}
                              >
                                <span>{t(m?.k)}</span>
                                <span aria-hidden="true" style={css(`opacity:${m?.chev ?? ''}`)}>
                                  ›
                                </span>
                              </div>
                            </>
                          ))}
                        </div>
                        {v.dev?.isDesk ? (
                          <>
                            <div
                              style={{
                                flex: '0.6',
                                background: '#b3c0f5 url(assets/web/assets/pfizer/article-3.webp) center/cover',
                                backgroundBlendMode: 'multiply',
                              }}
                            />
                          </>
                        ) : null}
                      </div>
                    </>
                  ) : null}
                </div>{' '}
              </div>
            </div>{' '}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
                gap: '16px',
                marginTop: '16px',
              }}
            >
              <figure data-yj-rv="wipe" style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={v.open?.articles}
                  aria-label="Enlarge Latest articles on desktop"
                  style={{
                    all: 'unset',
                    cursor: 'zoom-in',
                    display: 'block',
                    overflow: 'hidden',
                    border: '1px solid #d9d9e0',
                  }}
                >
                  <img
                    className="dc-hover-5cb87b1a"
                    src="assets/web/assets/pfizer/articles-desktop.webp"
                    alt="Latest articles carousel on desktop"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: 'auto',
                      transition: 'transform 900ms cubic-bezier(.2,.8,.2,1)',
                    }}
                  />
                </button>
                <figcaption style={{ fontSize: '15px', color: '#3d3d45' }}>
                  Live: the articles carousel on desktop
                </figcaption>
              </figure>
              <figure data-yj-rv="wipe" style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={v.open?.menu}
                  aria-label="Enlarge Mega-menu on desktop"
                  style={{
                    all: 'unset',
                    cursor: 'zoom-in',
                    display: 'block',
                    overflow: 'hidden',
                    border: '1px solid #d9d9e0',
                  }}
                >
                  <img
                    className="dc-hover-5cb87b1a"
                    src="assets/web/assets/pfizer/menu-desktop.webp"
                    alt="Responsibility mega-menu on desktop"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: 'auto',
                      transition: 'transform 900ms cubic-bezier(.2,.8,.2,1)',
                    }}
                  />
                </button>
                <figcaption style={{ fontSize: '15px', color: '#3d3d45' }}>
                  Live: the Responsibility mega-menu, with the page tinted blue behind it
                </figcaption>
              </figure>
            </div>{' '}
          </section>{' '}
          <section
            data-mv="role"
            aria-label="My role"
            style={{ padding: '120px clamp(20px,5vw,72px) 0', boxSizing: 'border-box' }}
          >
            {' '}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                gap: '24px 48px',
                paddingBottom: '48px',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#0000c9',
                }}
              >
                <span style={{ width: '10px', height: '10px', background: '#0000c9' }} />
                My role
              </span>
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontWeight: '400',
                  fontSize: 'clamp(36px,4vw,64px)',
                  lineHeight: '1.02',
                  letterSpacing: '-0.03em',
                  textWrap: 'balance',
                }}
              >
                Leading the offshore design team.
              </h2>
            </div>{' '}
            <ol
              style={{
                margin: '0',
                padding: '0',
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
                gap: '12px',
              }}
            >
              {each(v.role, (r, $index) => (
                <>
                  <li
                    className="dc-hover-643beb97"
                    data-yj-rv="up"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      padding: '24px',
                      background: '#f3f4f8',
                      transition: 'background 300ms,color 300ms',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {t(r?.k)}
                    </span>
                    <span style={{ fontSize: '24px', lineHeight: '1.15', letterSpacing: '-0.01em' }}>{t(r?.h)}</span>
                    <span style={{ fontSize: '15px', lineHeight: '1.5' }}>{t(r?.p)}</span>
                  </li>
                </>
              ))}
            </ol>{' '}
          </section>{' '}
          <section data-mv="impact" aria-label="The impact" style={{ padding: '120px 0 0', boxSizing: 'border-box' }}>
            {' '}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                padding: '72px clamp(20px,5vw,72px)',
                background: '#0000c9',
                color: '#ffffff',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                  gap: '24px 48px',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  <span style={{ width: '10px', height: '10px', background: '#ffffff' }} />
                  The impact
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <h2
                    data-yj-rv="up"
                    style={{
                      margin: '0',
                      fontWeight: '400',
                      fontSize: 'clamp(36px,4vw,64px)',
                      lineHeight: '1.02',
                      letterSpacing: '-0.03em',
                      textWrap: 'balance',
                    }}
                  >
                    The website became the template.
                  </h2>
                  <p
                    data-yj-rv="up"
                    style={{ margin: '0', fontSize: '17px', lineHeight: '1.55', maxWidth: '560px', textWrap: 'pretty' }}
                  >
                    Once pfizer.com went live, its system became Pfizer’s corporate design UI. Internal pages and
                    dashboards now start from the same type, colour rules and components, instead of reinventing the
                    brand.
                  </p>
                </div>
              </div>
              <div
                aria-hidden="true"
                style={{
                  margin: '8px calc(-1 * clamp(20px,5vw,72px))',
                  overflow: 'hidden',
                  borderTop: '1px solid #8fb3ff',
                  borderBottom: '1px solid #8fb3ff',
                  padding: '18px 0',
                }}
              >
                {' '}
                <div
                  data-pz-mq=""
                  style={{
                    display: 'flex',
                    gap: '32px',
                    width: 'max-content',
                    fontSize: 'clamp(18px,1.8vw,26px)',
                    letterSpacing: '-0.02em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span>pfizer.com</span>
                  <span
                    style={{
                      display: 'inline-block',
                      alignSelf: 'center',
                      width: '0.32em',
                      height: '0.32em',
                      background: '#8fb3ff',
                    }}
                  />
                  <span>Internal pages</span>
                  <span
                    style={{
                      display: 'inline-block',
                      alignSelf: 'center',
                      width: '0.32em',
                      height: '0.32em',
                      background: '#8fb3ff',
                    }}
                  />
                  <span>Dashboards</span>
                  <span
                    style={{
                      display: 'inline-block',
                      alignSelf: 'center',
                      width: '0.32em',
                      height: '0.32em',
                      background: '#8fb3ff',
                    }}
                  />
                  <span>Product pipeline</span>
                  <span
                    style={{
                      display: 'inline-block',
                      alignSelf: 'center',
                      width: '0.32em',
                      height: '0.32em',
                      background: '#8fb3ff',
                    }}
                  />
                  <span>Newsroom</span>
                  <span
                    style={{
                      display: 'inline-block',
                      alignSelf: 'center',
                      width: '0.32em',
                      height: '0.32em',
                      background: '#8fb3ff',
                    }}
                  />
                  <span>pfizer.com</span>
                  <span
                    style={{
                      display: 'inline-block',
                      alignSelf: 'center',
                      width: '0.32em',
                      height: '0.32em',
                      background: '#8fb3ff',
                    }}
                  />
                  <span>Internal pages</span>
                  <span
                    style={{
                      display: 'inline-block',
                      alignSelf: 'center',
                      width: '0.32em',
                      height: '0.32em',
                      background: '#8fb3ff',
                    }}
                  />
                  <span>Dashboards</span>
                  <span
                    style={{
                      display: 'inline-block',
                      alignSelf: 'center',
                      width: '0.32em',
                      height: '0.32em',
                      background: '#8fb3ff',
                    }}
                  />
                  <span>Product pipeline</span>
                  <span
                    style={{
                      display: 'inline-block',
                      alignSelf: 'center',
                      width: '0.32em',
                      height: '0.32em',
                      background: '#8fb3ff',
                    }}
                  />
                  <span>Newsroom</span>
                  <span
                    style={{
                      display: 'inline-block',
                      alignSelf: 'center',
                      width: '0.32em',
                      height: '0.32em',
                      background: '#8fb3ff',
                    }}
                  />
                </div>{' '}
              </div>
            </div>{' '}
          </section>
        </div>
      </div>
      {v.hasLb ? (
        <>
          {' '}
          <div
            role="dialog"
            aria-label="Enlarged image"
            onClick={v.closeLb}
            style={{
              position: 'fixed',
              inset: '0',
              zIndex: '1000',
              background: 'rgba(0,0,40,0.92)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              overflow: 'auto',
              padding: '48px 24px',
              boxSizing: 'border-box',
              cursor: 'zoom-out',
            }}
          >
            <img
              src={asset(v.lb)}
              alt="Enlarged image"
              style={{ display: 'block', maxWidth: 'min(100%,1600px)', height: 'auto', background: '#ffffff' }}
            />
          </div>
        </>
      ) : null}
      <div style={{ background: '#ffffff', padding: '80px 12px 12px' }}>
        <div style={{ height: '60vh', minHeight: '420px', position: 'relative', overflow: 'hidden' }}>
          {t(v.nextBanner)}
        </div>
      </div>
    </>
  );
}

export default defineScreen({
  name: 'Case Pfizer Pub',
  Logic,
  template,
  css: screenCss,
  links: ['https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&display=swap'],
  defaults: {},
});
