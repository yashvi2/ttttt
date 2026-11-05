import { defineScreen } from '../dc/defineScreen.js';
import { css, cx, asset, each, t } from '../dc/template.js';
import Logic from './CaseAva.logic.js';
import screenCss from './CaseAva.css?raw';
import './CaseAva.states.css';

function template(v) {
  return (
    <>
      <div
        className="ava"
        ref={v.mvRef}
        style={{
          background: '#ffffff',
          color: 'var(--color-text,#201e1d)',
          fontFamily: "'Johnson Text','Archivo',sans-serif",
          paddingBottom: '64px',
        }}
      >
        {' '}
        <div style={{ padding: '12px 12px 0' }}>
          <div
            data-yj-rv="wipe"
            style={{
              position: 'relative',
              width: '100%',
              minHeight: 'min(86vh,720px)',
              borderRadius: '28px',
              background: "#c8102e url('assets/web/assets/ava/pattern.webp') center / cover",
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                zIndex: '1',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                padding: 'clamp(32px,6vw,88px)',
                color: '#ffffff',
              }}
            >
              <span style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {'R&D Quality · AI risk platforms'}
              </span>
              <span
                className="jd"
                style={{
                  fontWeight: '600',
                  fontSize: 'clamp(40px,5vw,76px)',
                  lineHeight: '1',
                  letterSpacing: '-0.03em',
                  textWrap: 'balance',
                }}
              >
                Seeing risk before it reaches a patient.
              </span>
              <span
                style={{ fontSize: 'clamp(17px,1.4vw,20px)', lineHeight: '1.45', maxWidth: '440px', opacity: '0.92' }}
              >
                AI risk tools that clinical quality teams can question, check and overrule.
              </span>
            </div>
            <div aria-hidden="true" style={{ position: 'relative', alignSelf: 'stretch', minHeight: '420px' }}>
              {' '}
              <div
                style={{
                  position: 'absolute',
                  left: '4%',
                  top: '16%',
                  width: '46%',
                  aspectRatio: '3/4',
                  transform: 'rotate(-8deg)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background: '#ffffff',
                  boxShadow: '0 30px 60px rgba(70,0,0,.35)',
                }}
              >
                <img
                  src="assets/web/assets/ava/ava-trial-trends.webp"
                  alt=""
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '50% 0%',
                  }}
                />
              </div>{' '}
              <div
                style={{
                  position: 'absolute',
                  right: '4%',
                  top: '10%',
                  width: '46%',
                  aspectRatio: '3/4',
                  transform: 'rotate(7deg)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background: '#ffffff',
                  boxShadow: '0 30px 60px rgba(70,0,0,.35)',
                }}
              >
                <img
                  src="assets/web/assets/ava/de-trial-details.webp"
                  alt=""
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '50% 0%',
                  }}
                />
              </div>{' '}
              <div
                style={{
                  position: 'absolute',
                  left: '24%',
                  top: '22%',
                  width: '52%',
                  aspectRatio: '3/4',
                  transform: 'rotate(-1deg)',
                  zIndex: '2',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background: '#ffffff',
                  boxShadow: '0 30px 60px rgba(70,0,0,.35)',
                }}
              >
                <img
                  src="assets/web/assets/ava/ava-trial-details.webp"
                  alt=""
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '50% 0%',
                  }}
                />
              </div>{' '}
            </div>
          </div>
        </div>{' '}
        <section
          data-mv="top"
          aria-label="Dosing Error and AVA"
          style={{
            padding: '72px clamp(20px,8.4vw,120px) 0',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1000px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#eb1700',
              }}
            >
              {'Case study 04 · Johnson & Johnson × TCS Interactive'}
            </span>
            <h1
              style={{
                margin: '0',
                fontWeight: '600',
                fontSize: 'clamp(44px,6vw,92px)',
                lineHeight: '0.98',
                letterSpacing: '-0.03em',
                color: '#201e1d',
                textWrap: 'balance',
              }}
            >
              {'Audit Virtual Assistant (AVA) & Dosing Error'}
            </h1>
            <p
              style={{
                margin: '0',
                fontSize: 'clamp(20px,1.8vw,26px)',
                lineHeight: '1.35',
                color: '#201e1d',
                maxWidth: '640px',
                textWrap: 'pretty',
              }}
            >
              Two AI tools that flag risk in clinical trials, designed so quality teams can see why, check the data and
              make the final call.
            </p>
          </div>
          <dl
            style={{
              margin: '0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))',
              borderTop: '1px solid #e3e1df',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '16px 16px 16px 0' }}>
              <dt
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#6b6664',
                }}
              >
                Client
              </dt>
              <dd style={{ margin: '0', fontSize: '17px', lineHeight: '1.4' }}>{'J&J R&D Quality'}</dd>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '16px 16px 16px 0' }}>
              <dt
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#6b6664',
                }}
              >
                My role
              </dt>
              <dd style={{ margin: '0', fontSize: '17px', lineHeight: '1.4' }}>
                Lead UI/UX designer, TCS Interactive · owned UX, research and the design system
              </dd>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '16px 16px 16px 0' }}>
              <dt
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#6b6664',
                }}
              >
                Platforms
              </dt>
              <dd style={{ margin: '0', fontSize: '17px', lineHeight: '1.4' }}>
                Dosing Error · AVA · DS capability showcase
              </dd>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '16px 16px 16px 0' }}>
              <dt
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#6b6664',
                }}
              >
                Year
              </dt>
              <dd style={{ margin: '0', fontSize: '17px', lineHeight: '1.4' }}>2025</dd>
            </div>
          </dl>
          <div
            aria-label="Summary"
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '24px',
              background: '#f6f5f4',
              padding: '8px 28px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '4px 32px',
                padding: '20px 0',
                borderBottom: '1px solid #e3e1df',
              }}
            >
              <span
                style={{
                  flex: '0 0 140px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  alignSelf: 'flex-start',
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#6b6664',
                  paddingTop: '4px',
                }}
              >
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  style={{
                    flex: 'none',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: '1.8',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <path d="M12 3.5l9 16H3z" />
                  <path d="M12 10v4M12 17v.01" />
                </svg>
                The problem
              </span>
              <span style={{ flex: '1 1 420px', fontSize: '18px', lineHeight: '1.5', textWrap: 'pretty' }}>
                Teams got AI risk scores but couldn’t see why, and each tool showed risk in a different way.
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '4px 32px',
                padding: '20px 0',
                borderBottom: '1px solid #e3e1df',
              }}
            >
              <span
                style={{
                  flex: '0 0 140px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  alignSelf: 'flex-start',
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#6b6664',
                  paddingTop: '4px',
                }}
              >
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  style={{
                    flex: 'none',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: '1.8',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <path d="M4 20h4L19 9l-4-4L4 16z" />
                  <path d="M13.5 6.5l4 4" />
                </svg>
                What I did
              </span>
              <span style={{ flex: '1 1 420px', fontSize: '18px', lineHeight: '1.5', textWrap: 'pretty' }}>
                I led the design, working in two-week agile sprints with product owners, analysts and developers. I
                mapped how people go from a risk alert to an audit decision, made sure a person checks and approves
                every AI alert, and tested with users at each release.
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px 32px',
                padding: '20px 0',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  flex: '0 0 140px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  alignSelf: 'flex-start',
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#eb1700',
                  paddingTop: '8px',
                }}
              >
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  style={{
                    flex: 'none',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: '1.8',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <path d="M3 17l6-6 4 4 8-8" />
                  <path d="M15 7h6v6" />
                </svg>
                The result
              </span>
              <div style={{ flex: '1 1 420px', display: 'flex', flexWrap: 'wrap', gap: '12px 40px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span
                    style={{
                      fontWeight: '600',
                      fontSize: 'clamp(30px,3vw,40px)',
                      lineHeight: '1',
                      letterSpacing: '-0.02em',
                      color: '#eb1700',
                    }}
                  >
                    70%
                  </span>
                  <span style={{ fontSize: '15px', color: '#4a4644' }}>fewer mistakes in testing</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span
                    style={{
                      fontWeight: '600',
                      fontSize: 'clamp(30px,3vw,40px)',
                      lineHeight: '1',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    6
                  </span>
                  <span style={{ fontSize: '15px', color: '#4a4644' }}>releases in 13 months</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span
                    style={{
                      fontWeight: '600',
                      fontSize: 'clamp(30px,3vw,40px)',
                      lineHeight: '1',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    30 → 3
                  </span>
                  <span style={{ fontSize: '15px', color: '#4a4644' }}>days to a working prototype</span>
                </div>
              </div>
            </div>
          </div>
        </section>{' '}
        <nav
          aria-label="Case study sections"
          style={{
            position: 'sticky',
            top: '0',
            zIndex: '20',
            marginTop: '56px',
            padding: '10px clamp(20px,8.4vw,120px) 0',
            background: 'rgba(255,255,255,0.92)',
            WebkitBackdropFilter: 'blur(8px)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 1px 0 #e3e1df',
          }}
        >
          {' '}
          <div
            className="ava-nav"
            ref={v.navRef}
            style={{
              display: 'flex',
              gap: '6px',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              padding: '0 140px 10px 0',
            }}
          >
            {each(v.navItems, (n, $index) => (
              <>
                <button
                  data-k={n?.id}
                  onClick={n?.go}
                  aria-current={n?.cur}
                  style={css(
                    `all:unset;cursor:pointer;flex:none;display:flex;align-items:center;gap:6px;padding:7px 12px;border-radius:999px;font-size:13px;font-weight:600;white-space:nowrap;background:${n?.bg ?? ''};color:${n?.fg ?? ''};transition:background 150ms,color 150ms`,
                  )}
                >
                  <span style={{ fontSize: '11px', opacity: '0.65', fontVariantNumeric: 'tabular-nums' }}>
                    {t(n?.n)}
                  </span>
                  {t(n?.k, true)}
                </button>
              </>
            ))}
          </div>{' '}
          <div
            aria-hidden="true"
            style={css(`position:absolute;left:0;bottom:0;height:2px;width:${v.navProg ?? ''};background:#eb1700`)}
          />{' '}
        </nav>{' '}
        <section
          data-mv="context"
          aria-label="Context and users"
          style={{ padding: '64px clamp(20px,8.4vw,120px) 0', boxSizing: 'border-box' }}
        >
          {' '}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: '24px 48px',
              paddingTop: '20px',
              borderTop: '1px solid #e3e1df',
            }}
          >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span
                aria-hidden="true"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: '#fdeceb',
                  color: '#eb1700',
                }}
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  style={{
                    flex: 'none',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: '1.8',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="12" cy="12" r="0.5" />
                </svg>
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#eb1700',
                }}
              >
                01
              </span>
              <span
                style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                Context and users
              </span>
            </div>
            <div style={{ gridColumn: '1/-1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontWeight: '600',
                  fontSize: 'clamp(34px,4vw,56px)',
                  lineHeight: '1.08',
                  letterSpacing: '-0.02em',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                Two AI tools, one question: where is the risk?
              </h2>
              <div data-yj-rv="up" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      background: '#f6f5f4',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        gap: '16px',
                        alignItems: 'center',
                        padding: '24px 28px',
                        background: '#201e1d',
                        color: '#ffffff',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          flex: 'none',
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          background: '#eb1700',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '800',
                          fontSize: '16px',
                        }}
                      >
                        DE
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <strong className="jd" style={{ fontWeight: '600', fontSize: '24px', lineHeight: '1.1' }}>
                          Dosing Error
                        </strong>
                        <span style={{ fontSize: '14px', opacity: '0.75' }}>Predictive risk</span>
                      </span>
                    </div>
                    <dl style={{ margin: '0', display: 'flex', flexDirection: 'column', padding: '8px 28px 20px' }}>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '96px minmax(0,1fr)',
                          gap: '12px',
                          padding: '14px 0',
                          borderBottom: '1px solid #e3e1df',
                        }}
                      >
                        <dt
                          style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#6b6664',
                            paddingTop: '3px',
                          }}
                        >
                          Question
                        </dt>
                        <dd style={{ margin: '0', fontSize: '17px', fontWeight: '600', lineHeight: '1.35' }}>
                          Which trials risk a dosing mistake?
                        </dd>
                      </div>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '96px minmax(0,1fr)',
                          gap: '12px',
                          padding: '14px 0',
                          borderBottom: '1px solid #e3e1df',
                        }}
                      >
                        <dt
                          style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#6b6664',
                            paddingTop: '3px',
                          }}
                        >
                          When
                        </dt>
                        <dd style={{ margin: '0', fontSize: '15px', lineHeight: '1.5' }}>From study design to close</dd>
                      </div>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '96px minmax(0,1fr)',
                          gap: '12px',
                          padding: '14px 0',
                          borderBottom: '1px solid #e3e1df',
                        }}
                      >
                        <dt
                          style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#6b6664',
                            paddingTop: '3px',
                          }}
                        >
                          Used by
                        </dt>
                        <dd style={{ margin: '0', fontSize: '15px', lineHeight: '1.5' }}>
                          Clinical teams and risk managers
                        </dd>
                      </div>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '96px minmax(0,1fr)',
                          gap: '12px',
                          padding: '14px 0',
                        }}
                      >
                        <dt
                          style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#6b6664',
                            paddingTop: '3px',
                          }}
                        >
                          Gives
                        </dt>
                        <dd style={{ margin: '0', fontSize: '15px', lineHeight: '1.5' }}>
                          A dosing-error risk score, and mitigations from similar trials
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      background: '#fdeceb',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        gap: '16px',
                        alignItems: 'center',
                        padding: '24px 28px',
                        background: '#eb1700',
                        color: '#ffffff',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          flex: 'none',
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          background: '#ffffff',
                          color: '#eb1700',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '800',
                          fontSize: '15px',
                        }}
                      >
                        AVA
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <strong className="jd" style={{ fontWeight: '600', fontSize: '24px', lineHeight: '1.1' }}>
                          Audit Virtual Assistant
                        </strong>
                        <span style={{ fontSize: '14px', opacity: '0.85' }}>Audit planning</span>
                      </span>
                    </div>
                    <dl style={{ margin: '0', display: 'flex', flexDirection: 'column', padding: '8px 28px 20px' }}>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '96px minmax(0,1fr)',
                          gap: '12px',
                          padding: '14px 0',
                          borderBottom: '1px solid #f3c9c2',
                        }}
                      >
                        <dt
                          style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#8a1f0e',
                            paddingTop: '3px',
                          }}
                        >
                          Question
                        </dt>
                        <dd style={{ margin: '0', fontSize: '17px', fontWeight: '600', lineHeight: '1.35' }}>
                          Which trials and sites should we audit next?
                        </dd>
                      </div>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '96px minmax(0,1fr)',
                          gap: '12px',
                          padding: '14px 0',
                          borderBottom: '1px solid #f3c9c2',
                        }}
                      >
                        <dt
                          style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#8a1f0e',
                            paddingTop: '3px',
                          }}
                        >
                          When
                        </dt>
                        <dd style={{ margin: '0', fontSize: '15px', lineHeight: '1.5' }}>
                          During the trial, ahead of each audit cycle
                        </dd>
                      </div>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '96px minmax(0,1fr)',
                          gap: '12px',
                          padding: '14px 0',
                          borderBottom: '1px solid #f3c9c2',
                        }}
                      >
                        <dt
                          style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#8a1f0e',
                            paddingTop: '3px',
                          }}
                        >
                          Used by
                        </dt>
                        <dd style={{ margin: '0', fontSize: '15px', lineHeight: '1.5' }}>Quality leads and auditors</dd>
                      </div>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '96px minmax(0,1fr)',
                          gap: '12px',
                          padding: '14px 0',
                        }}
                      >
                        <dt
                          style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#8a1f0e',
                            paddingTop: '3px',
                          }}
                        >
                          Gives
                        </dt>
                        <dd style={{ margin: '0', fontSize: '15px', lineHeight: '1.5' }}>
                          A composite risk score per trial and site, and audit recommendations
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '8px 10px',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    boxShadow: 'inset 0 0 0 1px #e3e1df',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#201e1d',
                      marginRight: '6px',
                    }}
                  >
                    Both share
                  </span>
                  <span style={{ padding: '6px 12px', borderRadius: '999px', background: '#f6f5f4', fontSize: '14px' }}>
                    Three-level risk scale
                  </span>
                  <span style={{ padding: '6px 12px', borderRadius: '999px', background: '#f6f5f4', fontSize: '14px' }}>
                    One filter
                  </span>
                  <span style={{ padding: '6px 12px', borderRadius: '999px', background: '#f6f5f4', fontSize: '14px' }}>
                    Same tables and exports
                  </span>
                  <span style={{ padding: '6px 12px', borderRadius: '999px', background: '#f6f5f4', fontSize: '14px' }}>
                    A person makes the final call
                  </span>
                </div>
              </div>
              <figure
                data-yj-rv="up"
                aria-label="The Dosing Error process, from study start-up to monitoring"
                style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '16px',
                      padding: '20px',
                      borderRadius: '20px',
                      background: '#f6f5f4',
                    }}
                  >
                    <div
                      style={{
                        flex: '0 0 150px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        padding: '4px 0',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '700',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#201e1d',
                        }}
                      >
                        Study start-up
                      </span>
                      <span style={{ fontWeight: '600', fontSize: '24px', lineHeight: '1.1' }}>Predict</span>
                    </div>
                    <ol
                      style={{
                        flex: '1 1 600px',
                        minWidth: '0',
                        margin: '0',
                        padding: '0',
                        listStyle: 'none',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'stretch',
                        gap: '8px',
                      }}
                    >
                      <li
                        style={{
                          flex: '1 1 140px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          padding: '14px',
                          borderRadius: '14px',
                          background: '#ffffff',
                          fontSize: '14px',
                          lineHeight: '1.4',
                        }}
                      >
                        <span style={{ fontSize: '12px', fontWeight: '700', color: '#6b6664' }}>01</span>Model scores
                        the study design on historical data
                      </li>
                      <li aria-hidden="true" style={{ alignSelf: 'center', color: '#8a8380' }}>
                        →
                      </li>
                      <li
                        style={{
                          flex: '1 1 140px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          padding: '14px',
                          borderRadius: '14px',
                          background: '#ffffff',
                          fontSize: '14px',
                          lineHeight: '1.4',
                        }}
                      >
                        <span style={{ fontSize: '12px', fontWeight: '700', color: '#6b6664' }}>02</span>Clinical team
                        reviews the risk factors
                      </li>
                      <li aria-hidden="true" style={{ alignSelf: 'center', color: '#8a8380' }}>
                        →
                      </li>
                      <li
                        style={{
                          flex: '1 1 140px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          padding: '14px',
                          borderRadius: '14px',
                          background: '#ffffff',
                          fontSize: '14px',
                          lineHeight: '1.4',
                        }}
                      >
                        <span style={{ fontSize: '12px', fontWeight: '700', color: '#6b6664' }}>03</span>Team updates
                        the design; model re-scores
                      </li>
                      <li aria-hidden="true" style={{ alignSelf: 'center', color: '#8a8380' }}>
                        →
                      </li>
                      <li
                        style={{
                          flex: '1 1 170px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                          padding: '14px',
                          borderRadius: '14px',
                          background: '#ffffff',
                          boxShadow: 'inset 0 0 0 2px #eb1700',
                          fontSize: '14px',
                          lineHeight: '1.4',
                        }}
                      >
                        <span
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '12px',
                            fontWeight: '700',
                            color: '#eb1700',
                          }}
                        >
                          <span aria-hidden="true">◆</span>Decision
                        </span>
                        <strong style={{ fontWeight: '600' }}>Is the risk acceptable?</strong>
                        <span style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          <span
                            style={{
                              padding: '2px 10px',
                              borderRadius: '999px',
                              background: '#fdeceb',
                              color: '#8a1f0e',
                              fontSize: '12px',
                              fontWeight: '600',
                            }}
                          >
                            No ↺ back to 03
                          </span>
                          <span
                            style={{
                              padding: '2px 10px',
                              borderRadius: '999px',
                              background: '#eaf2ea',
                              color: '#0b5e12',
                              fontSize: '12px',
                              fontWeight: '600',
                            }}
                          >
                            Yes →
                          </span>
                        </span>
                      </li>
                      <li aria-hidden="true" style={{ alignSelf: 'center', color: '#8a8380' }}>
                        →
                      </li>
                      <li
                        style={{
                          flex: '1 1 160px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          padding: '14px',
                          borderRadius: '14px',
                          background: '#201e1d',
                          color: '#ffffff',
                          fontSize: '14px',
                          lineHeight: '1.4',
                        }}
                      >
                        <span style={{ fontSize: '12px', fontWeight: '700', color: '#ff8a7a' }}>04</span>Design
                        finalised; risk rolled up by trial, area, compound and site
                      </li>
                    </ol>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '16px',
                      padding: '20px',
                      borderRadius: '20px',
                      background: '#fdeceb',
                    }}
                  >
                    <div
                      style={{
                        flex: '0 0 150px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        padding: '4px 0',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '700',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#eb1700',
                        }}
                      >
                        Study execution
                      </span>
                      <span style={{ fontWeight: '600', fontSize: '24px', lineHeight: '1.1' }}>
                        {'Prevent & monitor'}
                      </span>
                    </div>
                    <ol
                      style={{
                        flex: '1 1 600px',
                        minWidth: '0',
                        margin: '0',
                        padding: '0',
                        listStyle: 'none',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'stretch',
                        gap: '8px',
                      }}
                    >
                      <li
                        style={{
                          flex: '1 1 140px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          padding: '14px',
                          borderRadius: '14px',
                          background: '#ffffff',
                          fontSize: '14px',
                          lineHeight: '1.4',
                        }}
                      >
                        <span style={{ fontSize: '12px', fontWeight: '700', color: '#6b6664' }}>05</span>Platform
                        suggests mitigations from similar trials
                      </li>
                      <li aria-hidden="true" style={{ alignSelf: 'center', color: '#c25a10' }}>
                        →
                      </li>
                      <li
                        style={{
                          flex: '1 1 140px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          padding: '14px',
                          borderRadius: '14px',
                          background: '#ffffff',
                          fontSize: '14px',
                          lineHeight: '1.4',
                        }}
                      >
                        <span style={{ fontSize: '12px', fontWeight: '700', color: '#6b6664' }}>06</span>Mitigations
                        documented and monitored
                      </li>
                      <li aria-hidden="true" style={{ alignSelf: 'center', color: '#c25a10' }}>
                        →
                      </li>
                      <li
                        style={{
                          flex: '1 1 140px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          padding: '14px',
                          borderRadius: '14px',
                          background: '#ffffff',
                          fontSize: '14px',
                          lineHeight: '1.4',
                        }}
                      >
                        <span style={{ fontSize: '12px', fontWeight: '700', color: '#6b6664' }}>07</span>Live trial data
                        re-scores the risk
                      </li>
                      <li aria-hidden="true" style={{ alignSelf: 'center', color: '#c25a10' }}>
                        →
                      </li>
                      <li
                        style={{
                          flex: '1 1 170px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                          padding: '14px',
                          borderRadius: '14px',
                          background: '#ffffff',
                          boxShadow: 'inset 0 0 0 2px #eb1700',
                          fontSize: '14px',
                          lineHeight: '1.4',
                        }}
                      >
                        <span
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '12px',
                            fontWeight: '700',
                            color: '#eb1700',
                          }}
                        >
                          <span aria-hidden="true">◆</span>Decision
                        </span>
                        <strong style={{ fontWeight: '600' }}>More mitigation needed?</strong>
                        <span style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          <span
                            style={{
                              padding: '2px 10px',
                              borderRadius: '999px',
                              background: '#fdeceb',
                              color: '#8a1f0e',
                              fontSize: '12px',
                              fontWeight: '600',
                            }}
                          >
                            Yes ↺ add measures
                          </span>
                          <span
                            style={{
                              padding: '2px 10px',
                              borderRadius: '999px',
                              background: '#eaf2ea',
                              color: '#0b5e12',
                              fontSize: '12px',
                              fontWeight: '600',
                            }}
                          >
                            No →
                          </span>
                        </span>
                      </li>
                      <li aria-hidden="true" style={{ alignSelf: 'center', color: '#c25a10' }}>
                        →
                      </li>
                      <li
                        style={{
                          flex: '1 1 160px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          padding: '14px',
                          borderRadius: '14px',
                          background: '#eb1700',
                          color: '#ffffff',
                          fontSize: '14px',
                          lineHeight: '1.4',
                        }}
                      >
                        <span style={{ fontSize: '12px', fontWeight: '700', color: '#ffd2cb' }}>08</span>Ongoing risk
                        monitoring until the study ends
                      </li>
                    </ol>
                  </div>
                </div>
                <figcaption style={{ fontSize: '14px', color: '#4a4644' }}>
                  The Dosing Error process, from study start-up to monitoring.
                </figcaption>
              </figure>
              <h3
                data-yj-rv="up"
                style={{
                  margin: '16px 0 0',
                  paddingTop: '40px',
                  borderTop: '1px solid #e3e1df',
                  fontWeight: '600',
                  fontSize: 'clamp(26px,2.8vw,38px)',
                  lineHeight: '1.12',
                  letterSpacing: '-0.015em',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                People with no time to dig.
              </h3>
              <p
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontSize: '18px',
                  lineHeight: '1.55',
                  color: '#4a4644',
                  maxWidth: '640px',
                  textWrap: 'pretty',
                }}
              >
                The people reading these scores are research scientists and doctors. They open the tool between trials,
                patients and reviews. They need the answer, not the dataset, and every extra click or chart costs them
                time they don’t have.
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))',
                  gap: '16px',
                }}
              >
                {each(v.users, (u, $index) => (
                  <>
                    <div
                      data-yj-rv="up"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        padding: '28px',
                        borderRadius: '20px',
                        background: '#f6f5f4',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#eb1700',
                        }}
                      >
                        {t(u?.k)}
                      </span>
                      <span
                        style={{
                          fontWeight: '600',
                          fontSize: '26px',
                          lineHeight: '1.15',
                          letterSpacing: '-0.01em',
                          textWrap: 'pretty',
                        }}
                      >
                        “{t(u?.q)}”
                      </span>
                      <span style={{ fontSize: '15px', lineHeight: '1.5', color: '#4a4644' }}>{t(u?.p)}</span>
                    </div>
                  </>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#6b6664',
                  }}
                >
                  What that meant for the design
                </span>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))',
                    gap: '0 48px',
                    borderTop: '1px solid #e3e1df',
                  }}
                >
                  {each(v.rules, (r, $index) => (
                    <>
                      <div
                        data-yj-rv="up"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          padding: '18px 0',
                          borderBottom: '1px solid #e3e1df',
                        }}
                      >
                        <span style={{ fontWeight: '600', fontSize: '18px' }}>{t(r?.h)}</span>
                        <span style={{ fontSize: '15px', lineHeight: '1.5', color: '#4a4644' }}>{t(r?.p)}</span>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>{' '}
        </section>{' '}
        <section
          data-mv="role"
          aria-label="My role"
          style={{ padding: '120px clamp(20px,8.4vw,120px) 0', boxSizing: 'border-box' }}
        >
          {' '}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: '24px 48px',
              paddingTop: '20px',
              borderTop: '1px solid #e3e1df',
            }}
          >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span
                aria-hidden="true"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: '#fdeceb',
                  color: '#eb1700',
                }}
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  style={{
                    flex: 'none',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: '1.8',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
                </svg>
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#eb1700',
                }}
              >
                02
              </span>
              <span
                style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                My role
              </span>
            </div>
            <div style={{ gridColumn: '1/-1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontWeight: '600',
                  fontSize: 'clamp(34px,4vw,56px)',
                  lineHeight: '1.08',
                  letterSpacing: '-0.02em',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                What I owned, and what the team did.
              </h2>
              <p
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontSize: '18px',
                  lineHeight: '1.55',
                  color: '#4a4644',
                  maxWidth: '640px',
                  textWrap: 'pretty',
                }}
              >
                {
                  'I was the lead designer on both tools, one of two designers in a team of about twelve at TCS Interactive, working for J&J R&D Quality. I owned the experience end to end, and the design system underneath it.'
                }
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
                  gap: '16px',
                }}
              >
                <div
                  data-yj-rv="up"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    padding: '28px',
                    borderRadius: '20px',
                    background: '#201e1d',
                    color: '#ffffff',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#ff8a7a',
                    }}
                  >
                    What I did
                  </span>
                  <ul
                    style={{ margin: '0', padding: '0', listStyle: 'none', display: 'flex', flexDirection: 'column' }}
                  >
                    <li
                      style={{
                        padding: '12px 0',
                        borderTop: '1px solid rgba(255,255,255,.16)',
                        fontSize: '16px',
                        lineHeight: '1.45',
                      }}
                    >
                      Mapped the user journeys and designed every screen, from wireframes to high-fidelity, for AVA and
                      Dosing Error
                    </li>
                    <li
                      style={{
                        padding: '12px 0',
                        borderTop: '1px solid rgba(255,255,255,.16)',
                        fontSize: '16px',
                        lineHeight: '1.45',
                      }}
                    >
                      Built and ran the design system in Figma: tokens, components, variants and usage notes
                    </li>
                    <li
                      style={{
                        padding: '12px 0',
                        borderTop: '1px solid rgba(255,255,255,.16)',
                        fontSize: '16px',
                        lineHeight: '1.45',
                      }}
                    >
                      Designed how risk is shown and checked: the three-colour scale, score explanations, warnings and
                      the override flow
                    </li>
                    <li
                      style={{
                        padding: '12px 0',
                        borderTop: '1px solid rgba(255,255,255,.16)',
                        fontSize: '16px',
                        lineHeight: '1.45',
                      }}
                    >
                      Planned and ran usability sessions, and turned findings into backlog items
                    </li>
                    <li
                      style={{
                        padding: '12px 0',
                        borderTop: '1px solid rgba(255,255,255,.16)',
                        fontSize: '16px',
                        lineHeight: '1.45',
                      }}
                    >
                      Built functional prototypes with Claude, and checked every release against the designs
                    </li>
                  </ul>
                </div>
                <div
                  data-yj-rv="up"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    padding: '28px',
                    borderRadius: '20px',
                    background: '#f6f5f4',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#6b6664',
                    }}
                  >
                    What the team did
                  </span>
                  <ul
                    style={{ margin: '0', padding: '0', listStyle: 'none', display: 'flex', flexDirection: 'column' }}
                  >
                    <li
                      style={{
                        padding: '12px 0',
                        borderTop: '1px solid #e3e1df',
                        fontSize: '16px',
                        lineHeight: '1.45',
                      }}
                    >
                      <strong style={{ fontWeight: '600' }}>Product owners</strong>
                      {' set priorities and release scope'}
                    </li>
                    <li
                      style={{
                        padding: '12px 0',
                        borderTop: '1px solid #e3e1df',
                        fontSize: '16px',
                        lineHeight: '1.45',
                      }}
                    >
                      <strong style={{ fontWeight: '600' }}>Business analysts</strong>
                      {' wrote requirements and sprint stories'}
                    </li>
                    <li
                      style={{
                        padding: '12px 0',
                        borderTop: '1px solid #e3e1df',
                        fontSize: '16px',
                        lineHeight: '1.45',
                      }}
                    >
                      <strong style={{ fontWeight: '600' }}>Data scientists</strong>
                      {' built the risk models and scores'}
                    </li>
                    <li
                      style={{
                        padding: '12px 0',
                        borderTop: '1px solid #e3e1df',
                        fontSize: '16px',
                        lineHeight: '1.45',
                      }}
                    >
                      <strong style={{ fontWeight: '600' }}>Developers</strong>
                      {' built the front end, back end and data pipelines'}
                    </li>
                    <li
                      style={{
                        padding: '12px 0',
                        borderTop: '1px solid #e3e1df',
                        fontSize: '16px',
                        lineHeight: '1.45',
                      }}
                    >
                      <strong style={{ fontWeight: '600' }}>{'J&J quality and validation leads'}</strong>
                      {' reviewed and signed off each release'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>{' '}
        </section>{' '}
        <section
          data-mv="journey"
          aria-label="Workflow and safety"
          style={{ padding: '120px clamp(20px,8.4vw,120px) 0', boxSizing: 'border-box' }}
        >
          {' '}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: '24px 48px',
              paddingTop: '20px',
              borderTop: '1px solid #e3e1df',
            }}
          >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span
                aria-hidden="true"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: '#fdeceb',
                  color: '#eb1700',
                }}
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  style={{
                    flex: 'none',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: '1.8',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#eb1700',
                }}
              >
                03
              </span>
              <span
                style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                Workflow and safety
              </span>
            </div>
            <div style={{ gridColumn: '1/-1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontWeight: '600',
                  fontSize: 'clamp(34px,4vw,56px)',
                  lineHeight: '1.08',
                  letterSpacing: '-0.02em',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                From a risk flag to an audit decision.
              </h2>
              <p
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontSize: '18px',
                  lineHeight: '1.55',
                  color: '#4a4644',
                  maxWidth: '640px',
                  textWrap: 'pretty',
                }}
              >
                A misread score here can send auditors to the wrong site while a real dosing problem goes unchecked. So
                before designing any screen, I mapped one task end to end and gave every step a safeguard against what
                could go wrong.
              </p>
              <span
                className="sh"
                aria-hidden="true"
                style={{
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '-20px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#6b6664',
                }}
              >
                {'Swipe to see all six stages '}
                <span style={{ color: '#eb1700' }}>→</span>
              </span>
              <div
                data-yj-rv="up"
                style={{
                  overflowX: 'auto',
                  margin: '0 calc(-1 * clamp(20px,8.4vw,120px))',
                  padding: '0 clamp(20px,8.4vw,120px) 8px',
                }}
              >
                {' '}
                <div
                  role="table"
                  aria-label="User journey from risk flag to audit decision"
                  style={{
                    minWidth: '1120px',
                    display: 'grid',
                    gridTemplateColumns: '128px repeat(6,minmax(0,1fr))',
                    gap: '8px',
                  }}
                >
                  <div className="jl" style={{ padding: '0' }} />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      padding: '14px 28px 14px 18px',
                      background: '#201e1d',
                      color: '#ffffff',
                      clipPath: 'polygon(0 0,calc(100% - 14px) 0,100% 50%,calc(100% - 14px) 100%,0 100%)',
                    }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', color: '#ff8a7a' }}>
                      01
                    </span>
                    <span style={{ fontWeight: '600', fontSize: '20px' }}>Flag</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      padding: '14px 28px 14px 28px',
                      background: '#201e1d',
                      color: '#ffffff',
                      clipPath: 'polygon(0 0,calc(100% - 14px) 0,100% 50%,calc(100% - 14px) 100%,0 100%,14px 50%)',
                    }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', color: '#ff8a7a' }}>
                      02
                    </span>
                    <span style={{ fontWeight: '600', fontSize: '20px' }}>Understand</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      padding: '14px 28px 14px 28px',
                      background: '#201e1d',
                      color: '#ffffff',
                      clipPath: 'polygon(0 0,calc(100% - 14px) 0,100% 50%,calc(100% - 14px) 100%,0 100%,14px 50%)',
                    }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', color: '#ff8a7a' }}>
                      03
                    </span>
                    <span style={{ fontWeight: '600', fontSize: '20px' }}>Check</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      padding: '14px 28px 14px 28px',
                      background: '#eb1700',
                      color: '#ffffff',
                      clipPath: 'polygon(0 0,calc(100% - 14px) 0,100% 50%,calc(100% - 14px) 100%,0 100%,14px 50%)',
                    }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', color: '#ffd2cb' }}>
                      04
                    </span>
                    <span style={{ fontWeight: '600', fontSize: '20px' }}>Decide</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      padding: '14px 28px 14px 28px',
                      background: '#201e1d',
                      color: '#ffffff',
                      clipPath: 'polygon(0 0,calc(100% - 14px) 0,100% 50%,calc(100% - 14px) 100%,0 100%,14px 50%)',
                    }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', color: '#ff8a7a' }}>
                      05
                    </span>
                    <span style={{ fontWeight: '600', fontSize: '20px' }}>Record</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      padding: '14px 18px 14px 28px',
                      background: '#201e1d',
                      color: '#ffffff',
                      clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%,14px 50%)',
                    }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', color: '#ff8a7a' }}>
                      06
                    </span>
                    <span style={{ fontWeight: '600', fontSize: '20px' }}>Follow up</span>
                  </div>
                  <div className="jl">What they do</div>
                  <div className="jc">Scans the top high-risk sites.</div>
                  <div className="jc">Opens the score to see why.</div>
                  <div className="jc">Checks the data behind it.</div>
                  <div className="jc" style={{ background: '#ffffff', boxShadow: 'inset 0 0 0 2px #eb1700' }}>
                    Confirms, overrides or watches.
                  </div>
                  <div className="jc">Exports it for the audit plan.</div>
                  <div className="jc">Checks if the risk moved.</div>
                  <div className="jl">What they see</div>
                  <div className="jc">Top sites, sorted by risk.</div>
                  <div className="jc">The factors behind the score.</div>
                  <div className="jc">Data date and patient count.</div>
                  <div
                    className="jc"
                    style={{
                      background: '#ffffff',
                      boxShadow: 'inset 0 0 0 2px #eb1700',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '6px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: '999px',
                        background: '#201e1d',
                        color: '#ffffff',
                        fontSize: '13px',
                        fontWeight: '600',
                      }}
                    >
                      Confirm
                    </span>
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: '999px',
                        background: '#fdeceb',
                        color: '#8a1f0e',
                        fontSize: '13px',
                        fontWeight: '600',
                      }}
                    >
                      Override + reason
                    </span>
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: '999px',
                        background: '#f0edeb',
                        color: '#201e1d',
                        fontSize: '13px',
                        fontWeight: '600',
                      }}
                    >
                      Keep watching
                    </span>
                  </div>
                  <div className="jc">Decision, reason, name and time.</div>
                  <div className="jc">Past decisions beside the new score.</div>
                  <div className="jl" style={{ color: '#8a1f0e' }}>
                    What could go wrong
                  </div>
                  <div className="jc jr">A new high-risk site is buried.</div>
                  <div className="jc jr">The score reads as a verdict.</div>
                  <div className="jc jr">Acting on old or thin data.</div>
                  <div className="jc jr">Dismissed in one click.</div>
                  <div className="jc jr">No record of why.</div>
                  <div className="jc jr">Risk rises again, unseen.</div>
                  <div className="jl" style={{ color: '#0b5e12' }}>
                    Safeguard
                  </div>
                  <div className="jc js">Risk-first sort; new sites pinned and counted.</div>
                  <div className="jc js">Labelled a recommendation, linked to data.</div>
                  <div className="jc js">Data date on every score; “Limited data” under 20 patients.</div>
                  <div className="jc js">Reason required; no bulk dismiss.</div>
                  <div className="jc js">Every decision logged and exportable.</div>
                  <div className="jc js">Rising score re-flags the site.</div>
                </div>{' '}
              </div>
              <div
                data-yj-rv="up"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '24px 40px',
                  alignItems: 'center',
                  padding: '28px',
                  borderRadius: '20px',
                  background: '#f6f5f4',
                }}
              >
                <div
                  role="list"
                  aria-label="Trial statuses mapped to three risk levels"
                  style={{ flex: '0 1 340px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}
                >
                  <div
                    role="listitem"
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '10px 12px',
                      borderRadius: '12px',
                      background: '#ffffff',
                    }}
                  >
                    <span
                      style={{
                        flex: '0 0 78px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        fontWeight: '700',
                        color: '#0b5e12',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#0b8314' }}
                      />
                      Low
                    </span>
                    <span
                      style={{
                        padding: '2px 9px',
                        borderRadius: '999px',
                        background: '#eaf2ea',
                        color: '#0b5e12',
                        fontSize: '12px',
                      }}
                    >
                      Open
                    </span>
                    <span
                      style={{
                        padding: '2px 9px',
                        borderRadius: '999px',
                        background: '#eaf2ea',
                        color: '#0b5e12',
                        fontSize: '12px',
                      }}
                    >
                      Execution
                    </span>
                    <span
                      style={{
                        padding: '2px 9px',
                        borderRadius: '999px',
                        background: '#eaf2ea',
                        color: '#0b5e12',
                        fontSize: '12px',
                      }}
                    >
                      Planned
                    </span>
                    <span
                      style={{
                        padding: '2px 9px',
                        borderRadius: '999px',
                        background: '#eaf2ea',
                        color: '#0b5e12',
                        fontSize: '12px',
                      }}
                    >
                      Preparation
                    </span>
                  </div>
                  <div
                    role="listitem"
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '10px 12px',
                      borderRadius: '12px',
                      background: '#ffffff',
                    }}
                  >
                    <span
                      style={{
                        flex: '0 0 78px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        fontWeight: '700',
                        color: '#8a3f08',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#c25a10' }}
                      />
                      Medium
                    </span>
                    <span
                      style={{
                        padding: '2px 9px',
                        borderRadius: '999px',
                        background: '#fdf0e6',
                        color: '#8a3f08',
                        fontSize: '12px',
                      }}
                    >
                      Closed
                    </span>
                    <span
                      style={{
                        padding: '2px 9px',
                        borderRadius: '999px',
                        background: '#fdf0e6',
                        color: '#8a3f08',
                        fontSize: '12px',
                      }}
                    >
                      Completed
                    </span>
                  </div>
                  <div
                    role="listitem"
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '10px 12px',
                      borderRadius: '12px',
                      background: '#ffffff',
                    }}
                  >
                    <span
                      style={{
                        flex: '0 0 78px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        fontWeight: '700',
                        color: '#9e1f1f',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#d32f2f' }}
                      />
                      High
                    </span>
                    <span
                      style={{
                        padding: '2px 9px',
                        borderRadius: '999px',
                        background: '#fbeaea',
                        color: '#9e1f1f',
                        fontSize: '12px',
                      }}
                    >
                      Stopped
                    </span>
                    <span
                      style={{
                        padding: '2px 9px',
                        borderRadius: '999px',
                        background: '#fbeaea',
                        color: '#9e1f1f',
                        fontSize: '12px',
                      }}
                    >
                      On hold
                    </span>
                    <span
                      style={{
                        padding: '2px 9px',
                        borderRadius: '999px',
                        background: '#fbeaea',
                        color: '#9e1f1f',
                        fontSize: '12px',
                      }}
                    >
                      Cancelled
                    </span>
                  </div>
                </div>
                <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#eb1700',
                    }}
                  >
                    One scale, everywhere
                  </span>
                  <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.55', textWrap: 'pretty' }}>
                    Every status maps to one of three levels, shown as a number, a word and an icon, never colour alone
                    (WCAG 2.1 AA).
                  </p>
                  <p
                    style={{ margin: '0', fontSize: '16px', lineHeight: '1.55', color: '#4a4644', textWrap: 'pretty' }}
                  >
                    {
                      'Reviewed with J&J R&D Quality and the CSV team for GxP validation. Nothing about how risk is shown shipped without their sign-off.'
                    }
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#6b6664',
                  }}
                >
                  Before and after
                </span>
                <div data-yj-rv="up" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '16px',
                      borderRadius: '18px',
                      background: '#f6f5f4',
                    }}
                  >
                    <span
                      style={{
                        flex: '0 0 76px',
                        fontSize: '12px',
                        fontWeight: '700',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#6b6664',
                      }}
                    >
                      Before
                    </span>
                    <span
                      style={{ padding: '10px 14px', borderRadius: '12px', background: '#ffffff', fontSize: '14px' }}
                    >
                      Export from several systems
                    </span>
                    <span aria-hidden="true" style={{ color: '#8a8380' }}>
                      →
                    </span>
                    <span
                      style={{ padding: '10px 14px', borderRadius: '12px', background: '#ffffff', fontSize: '14px' }}
                    >
                      Colour-code in Excel
                    </span>
                    <span aria-hidden="true" style={{ color: '#8a8380' }}>
                      →
                    </span>
                    <span
                      style={{ padding: '10px 14px', borderRadius: '12px', background: '#ffffff', fontSize: '14px' }}
                    >
                      Debate by email
                    </span>
                    <span aria-hidden="true" style={{ color: '#8a8380' }}>
                      →
                    </span>
                    <span
                      style={{ padding: '10px 14px', borderRadius: '12px', background: '#ffffff', fontSize: '14px' }}
                    >
                      Decision in meeting notes
                    </span>
                    <span
                      style={{
                        marginLeft: 'auto',
                        padding: '6px 12px',
                        borderRadius: '999px',
                        boxShadow: 'inset 0 0 0 1px #c9c4c1',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#4a4644',
                      }}
                    >
                      ~2 weeks · no audit trail
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '16px',
                      borderRadius: '18px',
                      background: '#eb1700',
                      color: '#ffffff',
                    }}
                  >
                    <span
                      style={{
                        flex: '0 0 76px',
                        fontSize: '12px',
                        fontWeight: '700',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#ffd2cb',
                      }}
                    >
                      After
                    </span>
                    <span
                      style={{
                        padding: '10px 14px',
                        borderRadius: '12px',
                        background: 'rgba(255,255,255,.16)',
                        fontSize: '14px',
                      }}
                    >
                      Flag, sorted and counted
                    </span>
                    <span aria-hidden="true" style={{ color: '#ffd2cb' }}>
                      →
                    </span>
                    <span
                      style={{
                        padding: '10px 14px',
                        borderRadius: '12px',
                        background: 'rgba(255,255,255,.16)',
                        fontSize: '14px',
                      }}
                    >
                      Reasons in the score
                    </span>
                    <span aria-hidden="true" style={{ color: '#ffd2cb' }}>
                      →
                    </span>
                    <span
                      style={{
                        padding: '10px 14px',
                        borderRadius: '12px',
                        background: 'rgba(255,255,255,.16)',
                        fontSize: '14px',
                      }}
                    >
                      Decide in place
                    </span>
                    <span aria-hidden="true" style={{ color: '#ffd2cb' }}>
                      →
                    </span>
                    <span
                      style={{
                        padding: '10px 14px',
                        borderRadius: '12px',
                        background: 'rgba(255,255,255,.16)',
                        fontSize: '14px',
                      }}
                    >
                      Logged with reason
                    </span>
                    <span
                      style={{
                        marginLeft: 'auto',
                        padding: '6px 12px',
                        borderRadius: '999px',
                        background: '#ffffff',
                        color: '#201e1d',
                        fontSize: '13px',
                        fontWeight: '600',
                      }}
                    >
                      Same day · fully traceable
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>{' '}
        </section>{' '}
        <section
          data-mv="ai"
          aria-label="AI people can check"
          style={{ padding: '120px clamp(20px,8.4vw,120px) 0', boxSizing: 'border-box' }}
        >
          {' '}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: '24px 48px',
              paddingTop: '20px',
              borderTop: '1px solid #e3e1df',
            }}
          >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span
                aria-hidden="true"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: '#fdeceb',
                  color: '#eb1700',
                }}
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  style={{
                    flex: 'none',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: '1.8',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#eb1700',
                }}
              >
                04
              </span>
              <span
                style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                AI people can check
              </span>
            </div>
            <div style={{ gridColumn: '1/-1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontWeight: '600',
                  fontSize: 'clamp(34px,4vw,56px)',
                  lineHeight: '1.08',
                  letterSpacing: '-0.02em',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                AI suggests. People decide.
              </h2>
              <p
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontSize: '18px',
                  lineHeight: '1.55',
                  color: '#4a4644',
                  maxWidth: '640px',
                  textWrap: 'pretty',
                }}
              >
                AVA recommends where to audit; it never decides. Every flag shows why, says when to doubt it, and waits
                for a person to confirm or override it, with a reason. Overrides go back to the data scientists to
                improve the model.
              </p>
              <div
                data-yj-rv="up"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  padding: '24px 28px',
                  borderRadius: '20px',
                  background: '#f6f5f4',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    gap: '8px 24px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#6b6664',
                    }}
                  >
                    Five risks, each read the same way
                  </span>
                  <span
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                    }}
                  >
                    <span>Score</span>
                    <span aria-hidden="true" style={{ color: '#8a8380' }}>
                      →
                    </span>
                    <span>Level</span>
                    <span aria-hidden="true" style={{ color: '#8a8380' }}>
                      →
                    </span>
                    <span>Trend</span>
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      padding: '8px 14px',
                      borderRadius: '999px',
                      background: '#201e1d',
                      color: '#ffffff',
                      fontSize: '14px',
                      fontWeight: '600',
                    }}
                  >
                    Composite risk
                  </span>
                  <span
                    aria-hidden="true"
                    style={{ width: '1px', height: '24px', background: '#c9c4c1', margin: '0 6px' }}
                  />
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#6b6664',
                      marginRight: '2px',
                    }}
                  >
                    ATLAS
                  </span>
                  <span
                    style={{
                      padding: '8px 14px',
                      borderRadius: '999px',
                      background: '#ffffff',
                      color: '#201e1d',
                      fontSize: '14px',
                      fontWeight: '600',
                    }}
                  >
                    Site composite
                  </span>
                  <span
                    style={{
                      padding: '8px 14px',
                      borderRadius: '999px',
                      background: '#ffffff',
                      color: '#201e1d',
                      fontSize: '14px',
                      fontWeight: '600',
                    }}
                  >
                    Site management
                  </span>
                  <span
                    style={{
                      padding: '8px 14px',
                      borderRadius: '999px',
                      background: '#ffffff',
                      color: '#201e1d',
                      fontSize: '14px',
                      fontWeight: '600',
                    }}
                  >
                    Subject management
                  </span>
                  <span
                    style={{
                      padding: '8px 14px',
                      borderRadius: '999px',
                      background: '#ffffff',
                      color: '#201e1d',
                      fontSize: '14px',
                      fontWeight: '600',
                    }}
                  >
                    Data management
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#6b6664',
                  }}
                >
                  Try it: a flagged site
                </span>
                <div
                  data-yj-rv="up"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    background: '#ffffff',
                    boxShadow: '0 1px 2px rgba(0,0,0,.06),0 12px 40px rgba(0,0,0,.08)',
                  }}
                >
                  <div
                    style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '28px', minWidth: '0' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '12px',
                        flexWrap: 'wrap',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span style={{ fontSize: '13px', color: '#6b6664' }}>Trial 17000139BLC2001</span>
                        <span style={{ fontWeight: '800', fontSize: '26px', lineHeight: '1.1' }}>Site 104</span>
                      </div>
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '6px 14px',
                          borderRadius: '999px',
                          background: '#fbeaea',
                          color: '#9e1f1f',
                          fontSize: '14px',
                          fontWeight: '700',
                        }}
                      >
                        <span aria-hidden="true">▲</span>High · 0.78
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#6b6664',
                        }}
                      >
                        Why AVA flagged it
                      </span>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'minmax(0,1fr) 72px 44px',
                          gap: '12px',
                          alignItems: 'center',
                          fontSize: '14px',
                        }}
                      >
                        <span>Protocol deviations, last 90 days</span>
                        <span
                          style={{
                            height: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            borderLeft: '1px solid #c9c4c1',
                          }}
                        >
                          <span
                            style={{
                              display: 'block',
                              height: '8px',
                              borderRadius: '0 4px 4px 0',
                              background: '#eb1700',
                              width: '100%',
                            }}
                          />
                        </span>
                        <span style={{ fontWeight: '700', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
                          +0.22
                        </span>
                      </div>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'minmax(0,1fr) 72px 44px',
                          gap: '12px',
                          alignItems: 'center',
                          fontSize: '14px',
                        }}
                      >
                        <span>Queries open over 30 days</span>
                        <span
                          style={{
                            height: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            borderLeft: '1px solid #c9c4c1',
                          }}
                        >
                          <span
                            style={{
                              display: 'block',
                              height: '8px',
                              borderRadius: '0 4px 4px 0',
                              background: '#eb1700',
                              width: '77%',
                            }}
                          />
                        </span>
                        <span style={{ fontWeight: '700', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
                          +0.17
                        </span>
                      </div>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'minmax(0,1fr) 72px 44px',
                          gap: '12px',
                          alignItems: 'center',
                          fontSize: '14px',
                        }}
                      >
                        <span>Enrolment ahead of plan</span>
                        <span
                          style={{
                            height: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            borderLeft: '1px solid #c9c4c1',
                          }}
                        >
                          <span
                            style={{
                              display: 'block',
                              height: '8px',
                              borderRadius: '0 4px 4px 0',
                              background: '#eb1700',
                              width: '41%',
                            }}
                          />
                        </span>
                        <span style={{ fontWeight: '700', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
                          +0.09
                        </span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#6b6664',
                        }}
                      >
                        Composite score, last 8 weeks
                      </span>
                      <div
                        style={{
                          position: 'relative',
                          height: '184px',
                          padding: '12px 56px 28px 28px',
                          boxSizing: 'border-box',
                        }}
                      >
                        {' '}
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                          {' '}
                          {each(v.lnGrid, (g, $index) => (
                            <>
                              <div
                                style={css(
                                  `position:absolute;left:0;right:0;top:${g?.y ?? ''};height:1px;background:#e3e1df`,
                                )}
                              />
                              <span
                                style={css(
                                  `position:absolute;left:-28px;width:22px;text-align:right;top:${g?.y ?? ''};transform:translateY(-50%);font-size:11px;color:#6b6664;font-variant-numeric:tabular-nums`,
                                )}
                              >
                                {t(g?.k)}
                              </span>
                            </>
                          ))}{' '}
                          {each(v.lnBands, (b, $index) => (
                            <>
                              <span
                                style={css(
                                  `position:absolute;left:100%;padding-left:10px;top:${b?.y ?? ''};transform:translateY(-50%);font-size:11px;color:#6b6664`,
                                )}
                              >
                                {t(b?.k)}
                              </span>
                            </>
                          ))}{' '}
                          <svg
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                            style={{
                              position: 'absolute',
                              left: '0',
                              top: '0',
                              width: '100%',
                              height: '100%',
                              overflow: 'visible',
                            }}
                          >
                            <path d={v.lnArea} style={{ fill: '#eb1700', fillOpacity: '0.1', stroke: 'none' }} />
                            <path
                              d={v.lnD}
                              style={{
                                fill: 'none',
                                stroke: '#eb1700',
                                strokeWidth: '2px',
                                strokeLinejoin: 'round',
                                strokeLinecap: 'round',
                                vectorEffect: 'non-scaling-stroke',
                              }}
                            />
                          </svg>{' '}
                          {v.lnHas ? (
                            <>
                              <div
                                style={css(
                                  `position:absolute;top:0;bottom:0;left:${v.lnTip?.x ?? ''};width:1px;background:#8a8380;pointer-events:none`,
                                )}
                              />
                            </>
                          ) : null}{' '}
                          {each(v.lnDots, (d, $index) => (
                            <>
                              <span
                                style={css(
                                  `position:absolute;left:${d?.x ?? ''};top:${d?.y ?? ''};width:8px;height:8px;border-radius:50%;background:#eb1700;box-shadow:0 0 0 2px #ffffff;transform:translate(-50%,-50%);pointer-events:none`,
                                )}
                              />
                            </>
                          ))}{' '}
                          <span
                            style={css(
                              `position:absolute;left:100%;top:${v.lnEnd?.y ?? ''};transform:translate(-100%,-26px);font-size:13px;font-weight:700;color:#201e1d;pointer-events:none`,
                            )}
                          >
                            {t(v.lnEnd?.v)}
                          </span>{' '}
                          <span
                            style={{
                              position: 'absolute',
                              left: '0',
                              top: 'calc(100% + 8px)',
                              fontSize: '11px',
                              color: '#6b6664',
                            }}
                          >
                            7 weeks ago
                          </span>{' '}
                          <span
                            style={{
                              position: 'absolute',
                              right: '0',
                              top: 'calc(100% + 8px)',
                              fontSize: '11px',
                              color: '#6b6664',
                            }}
                          >
                            This week
                          </span>{' '}
                          {each(v.lnHits, (h, $index) => (
                            <>
                              <button
                                onMouseEnter={h?.on}
                                onFocus={h?.on}
                                onMouseLeave={v.lnOff}
                                onBlur={v.lnOff}
                                aria-label={h?.aria}
                                style={css(
                                  `all:unset;position:absolute;top:0;bottom:0;left:${h?.l ?? ''};width:${h?.w ?? ''};cursor:crosshair`,
                                )}
                              />
                            </>
                          ))}{' '}
                          {v.lnHas ? (
                            <>
                              <div
                                style={css(
                                  `position:absolute;top:-6px;left:${v.lnTip?.x ?? ''};transform:${v.lnTip?.tf ?? ''};display:flex;flex-direction:column;gap:2px;padding:8px 12px;border-radius:10px;background:#ffffff;box-shadow:0 4px 16px rgba(0,0,0,.14);pointer-events:none;white-space:nowrap`,
                                )}
                              >
                                <span style={{ fontSize: '16px', fontWeight: '700', color: '#201e1d' }}>
                                  {t(v.lnTip?.v)}
                                  {' · '}
                                  {t(v.lnTip?.lvl)}
                                </span>
                                <span style={{ fontSize: '12px', color: '#6b6664' }}>{t(v.lnTip?.k)}</span>
                              </div>
                            </>
                          ) : null}{' '}
                        </div>{' '}
                      </div>
                      <details style={{ fontSize: '13px', color: '#4a4644' }}>
                        <summary style={{ cursor: 'pointer', color: '#6b6664' }}>View as table</summary>{' '}
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'minmax(0,1fr) auto auto',
                            gap: '4px 16px',
                            paddingTop: '8px',
                            fontVariantNumeric: 'tabular-nums',
                          }}
                        >
                          {each(v.lnRows, (r, $index) => (
                            <>
                              <span>{t(r?.k)}</span>
                              <span style={{ fontWeight: '600', color: '#201e1d', textAlign: 'right' }}>{t(r?.v)}</span>
                              <span>{t(r?.lvl)}</span>
                            </>
                          ))}
                        </div>{' '}
                      </details>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#6b6664',
                        }}
                      >
                        Check before you act
                      </span>
                      <div
                        style={{
                          display: 'flex',
                          gap: '10px',
                          alignItems: 'center',
                          fontSize: '14px',
                          lineHeight: '1.4',
                        }}
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            flex: 'none',
                            width: '22px',
                            height: '22px',
                            borderRadius: '50%',
                            background: '#eaf2ea',
                            color: '#0b5e12',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            fontWeight: '700',
                          }}
                        >
                          ✓
                        </span>
                        <span>Data retrieved 2 days ago</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '10px',
                          alignItems: 'center',
                          fontSize: '14px',
                          lineHeight: '1.4',
                        }}
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            flex: 'none',
                            width: '22px',
                            height: '22px',
                            borderRadius: '50%',
                            background: '#eaf2ea',
                            color: '#0b5e12',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            fontWeight: '700',
                          }}
                        >
                          ✓
                        </span>
                        <span>Based on 41 patients</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '10px',
                          alignItems: 'center',
                          fontSize: '14px',
                          lineHeight: '1.4',
                        }}
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            flex: 'none',
                            width: '22px',
                            height: '22px',
                            borderRadius: '50%',
                            background: '#fdf0e6',
                            color: '#8a3f08',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '13px',
                            fontWeight: '700',
                          }}
                        >
                          !
                        </span>
                        <span>Up from 0.52 last month. Check what changed.</span>
                      </div>
                    </div>
                    <span style={{ fontSize: '13px', lineHeight: '1.45', color: '#6b6664' }}>Illustrative data.</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '18px',
                      padding: '28px',
                      minWidth: '0',
                      background: '#f6f5f4',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#6b6664',
                      }}
                    >
                      Your decision
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {each(v.aiActs, (a, $index) => (
                        <>
                          <button
                            className="dc-hover-1caeb685"
                            onClick={a?.pick}
                            aria-pressed={a?.on}
                            style={css(
                              `all:unset;cursor:pointer;padding:12px 18px;border-radius:999px;font-size:15px;font-weight:600;background:${a?.bg ?? ''};color:${a?.fg ?? ''};box-shadow:inset 0 0 0 1.5px ${a?.bd ?? ''};transition:background 150ms,color 150ms`,
                            )}
                          >
                            {t(a?.t)}
                          </button>
                        </>
                      ))}
                    </div>
                    {v.aiHint ? (
                      <>
                        <span style={{ fontSize: '15px', lineHeight: '1.5', color: '#4a4644' }}>
                          Nothing is decided until you choose, and no option is easier to reach than another.
                        </span>
                      </>
                    ) : null}
                    {v.aiShowReasons ? (
                      <>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            animation: 'avaFade 300ms ease',
                          }}
                        >
                          <span style={{ fontSize: '15px', fontWeight: '600' }}>
                            Why are you overriding? A reason is required.
                          </span>
                          {each(v.aiReasons, (r, $index) => (
                            <>
                              <button
                                onClick={r?.pick}
                                aria-pressed={r?.on}
                                style={css(
                                  `all:unset;cursor:pointer;display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:12px;font-size:14px;background:#ffffff;box-shadow:inset 0 0 0 1.5px ${r?.bd ?? ''}`,
                                )}
                              >
                                <span
                                  style={css(
                                    `flex:none;width:14px;height:14px;border-radius:50%;box-shadow:inset 0 0 0 ${r?.dot ?? ''} #eb1700,inset 0 0 0 1.5px #8a8380`,
                                  )}
                                />
                                {t(r?.t, true)}
                              </button>
                            </>
                          ))}
                          <button
                            onClick={v.aiSave}
                            aria-disabled={v.aiNoReason}
                            style={css(
                              `all:unset;cursor:${v.aiSaveCur ?? ''};align-self:flex-start;padding:12px 22px;border-radius:999px;background:${v.aiSaveBg ?? ''};color:#ffffff;font-size:15px;font-weight:600`,
                            )}
                          >
                            Save override
                          </button>
                        </div>
                      </>
                    ) : null}
                    {v.aiSaved ? (
                      <>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            padding: '16px 18px',
                            borderRadius: '14px',
                            background: '#ffffff',
                            animation: 'avaFade 300ms ease',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '12px',
                              fontWeight: '600',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              color: '#0b5e12',
                            }}
                          >
                            Saved to the audit trail
                          </span>
                          <span style={{ fontSize: '16px', lineHeight: '1.45', fontWeight: '600' }}>{t(v.aiLogH)}</span>
                          <span style={{ fontSize: '14px', lineHeight: '1.5', color: '#4a4644' }}>{t(v.aiLogP)}</span>
                        </div>
                      </>
                    ) : null}
                    <button
                      className="dc-hover-12380521"
                      onClick={v.aiReset}
                      style={{
                        all: 'unset',
                        cursor: 'pointer',
                        marginTop: 'auto',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#eb1700',
                      }}
                    >
                      Start again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>{' '}
        </section>{' '}
        <section
          data-mv="research"
          aria-label="Research and evidence"
          style={{ padding: '120px clamp(20px,8.4vw,120px) 0', boxSizing: 'border-box' }}
        >
          {' '}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: '24px 48px',
              paddingTop: '20px',
              borderTop: '1px solid #e3e1df',
            }}
          >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span
                aria-hidden="true"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: '#fdeceb',
                  color: '#eb1700',
                }}
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  style={{
                    flex: 'none',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: '1.8',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-4-4" />
                </svg>
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#eb1700',
                }}
              >
                05
              </span>
              <span
                style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                Research and evidence
              </span>
            </div>
            <div style={{ gridColumn: '1/-1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontWeight: '600',
                  fontSize: 'clamp(34px,4vw,56px)',
                  lineHeight: '1.08',
                  letterSpacing: '-0.02em',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                Tested with the people who use it.
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
                  gap: '16px',
                }}
              >
                <div
                  data-yj-rv="up"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    padding: '28px',
                    borderRadius: '20px',
                    background: '#f6f5f4',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#eb1700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      style={{
                        flex: 'none',
                        fill: 'none',
                        stroke: 'currentColor',
                        strokeWidth: '1.8',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }}
                    >
                      <circle cx="9" cy="8" r="3.5" />
                      <path d="M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5" />
                      <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M21.5 20c0-2.6-1.5-4.4-3.8-5.1" />
                    </svg>
                    Who
                  </span>
                  <span
                    style={{
                      fontWeight: '600',
                      fontSize: 'clamp(40px,4vw,56px)',
                      lineHeight: '1',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    8
                  </span>
                  <span style={{ fontSize: '15px', lineHeight: '1.45', color: '#4a4644' }}>
                    scientists, quality leads and auditors, 3 therapeutic areas
                  </span>
                </div>
                <div
                  data-yj-rv="up"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    padding: '28px',
                    borderRadius: '20px',
                    background: '#f6f5f4',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#eb1700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      style={{
                        flex: 'none',
                        fill: 'none',
                        stroke: 'currentColor',
                        strokeWidth: '1.8',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }}
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    How
                  </span>
                  <span
                    style={{
                      fontWeight: '600',
                      fontSize: 'clamp(40px,4vw,56px)',
                      lineHeight: '1',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    45<span style={{ fontSize: '20px', letterSpacing: '0' }}>{' min'}</span>
                  </span>
                  <span style={{ fontSize: '15px', lineHeight: '1.45', color: '#4a4644' }}>
                    remote sessions, real tasks, thinking aloud
                  </span>
                </div>
                <div
                  data-yj-rv="up"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    padding: '28px',
                    borderRadius: '20px',
                    background: '#f6f5f4',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#eb1700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      style={{
                        flex: 'none',
                        fill: 'none',
                        stroke: 'currentColor',
                        strokeWidth: '1.8',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }}
                    >
                      <path d="M17 2l4 4-4 4" />
                      <path d="M3 11V9a3 3 0 0 1 3-3h15" />
                      <path d="M7 22l-4-4 4-4" />
                      <path d="M21 13v2a3 3 0 0 1-3 3H3" />
                    </svg>
                    When
                  </span>
                  <span
                    style={{
                      fontWeight: '600',
                      fontSize: 'clamp(40px,4vw,56px)',
                      lineHeight: '1',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    3<span style={{ fontSize: '20px', letterSpacing: '0' }}>{' rounds'}</span>
                  </span>
                  <span style={{ fontSize: '15px', lineHeight: '1.45', color: '#4a4644' }}>
                    before V1.0, after V1.2, before V2.0
                  </span>
                </div>
              </div>
              <p
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontSize: '16px',
                  lineHeight: '1.55',
                  color: '#4a4644',
                  maxWidth: '640px',
                  textWrap: 'pretty',
                }}
              >
                What we heard shaped each release: the “Why” column in section 06 traces every change back to it.
              </p>
              <div
                data-yj-rv="up"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
                  gap: '24px 48px',
                  padding: '28px',
                  borderRadius: '24px',
                  background: '#ffffff',
                  boxShadow: '0 1px 2px rgba(0,0,0,.06),0 12px 40px rgba(0,0,0,.08)',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '0' }}>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#eb1700',
                    }}
                  >
                    How the 70% was measured
                  </span>
                  <span style={{ fontSize: '14px', lineHeight: '1.45', color: '#4a4644' }}>
                    Errors on the same five tasks, indexed so the old screens = 100
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {each(v.resBars, (b, $index) => (
                      <>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '96px minmax(0,1fr)',
                            gap: '12px',
                            alignItems: 'center',
                          }}
                        >
                          <span style={{ fontSize: '14px', color: '#4a4644' }}>{t(b?.k)}</span>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              minHeight: '36px',
                              borderLeft: '1px solid #c9c4c1',
                            }}
                          >
                            <button
                              onMouseEnter={b?.on}
                              onFocus={b?.on}
                              onMouseLeave={b?.off}
                              onBlur={b?.off}
                              aria-label={b?.aria}
                              style={css(
                                `all:unset;cursor:default;display:flex;align-items:center;height:36px;width:${b?.w ?? ''};opacity:${b?.op ?? ''};transition:opacity 150ms`,
                              )}
                            >
                              <span
                                style={css(
                                  `display:block;width:100%;height:24px;border-radius:0 4px 4px 0;background:${b?.c ?? ''}`,
                                )}
                              />
                            </button>
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '700',
                                color: '#201e1d',
                                fontVariantNumeric: 'tabular-nums',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {t(b?.lab)}
                            </span>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                  <div
                    aria-live="polite"
                    style={{ minHeight: '42px', fontSize: '14px', lineHeight: '1.5', color: '#4a4644' }}
                  >
                    {' '}
                    {v.resHas ? (
                      <>
                        <span>
                          <strong style={{ fontWeight: '700', color: '#201e1d' }}>{t(v.resRd?.lab)}</strong>{' '}
                          {t(v.resRd?.t)}
                        </span>
                      </>
                    ) : null}{' '}
                    {v.resNo ? (
                      <>
                        <span style={{ color: '#6b6664' }}>
                          Hover over or tab to a bar for detail. Indexed from the 70% result; absolute counts to follow.
                        </span>
                      </>
                    ) : null}{' '}
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    fontSize: '16px',
                    lineHeight: '1.55',
                    justifyContent: 'center',
                  }}
                >
                  <p style={{ margin: '0' }}>
                    <strong style={{ fontWeight: '600' }}>Same tasks, old vs new:</strong>
                    {
                      ' find the riskiest site, filter by region and score, export. A wrong answer, filter or row counted as an error.'
                    }
                  </p>
                  <p style={{ margin: '0' }}>
                    <strong style={{ fontWeight: '600' }}>Result:</strong>
                    {' 70% fewer errors per session.'}
                  </p>
                  <p style={{ margin: '0', color: '#4a4644' }}>
                    <strong style={{ fontWeight: '600', color: '#201e1d' }}>Limit:</strong>
                    {' a usability measure, not live use. Next, I’d track time to decision and reversed overrides.'}
                  </p>
                </div>
              </div>
            </div>
          </div>{' '}
        </section>{' '}
        <section
          data-mv="decisions"
          aria-label="Decisions and delivery"
          style={{ padding: '120px clamp(20px,8.4vw,120px) 0', boxSizing: 'border-box' }}
        >
          {' '}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: '24px 48px',
              paddingTop: '20px',
              borderTop: '1px solid #e3e1df',
            }}
          >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span
                aria-hidden="true"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: '#fdeceb',
                  color: '#eb1700',
                }}
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  style={{
                    flex: 'none',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: '1.8',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <circle cx="6" cy="18" r="2.5" />
                  <circle cx="6" cy="6" r="2.5" />
                  <circle cx="18" cy="8" r="2.5" />
                  <path d="M6 8.5v7" />
                  <path d="M18 10.5c0 4-4 5-9.5 6.5" />
                </svg>
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#eb1700',
                }}
              >
                06
              </span>
              <span
                style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                Decisions and delivery
              </span>
            </div>
            <div style={{ gridColumn: '1/-1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontWeight: '600',
                  fontSize: 'clamp(34px,4vw,56px)',
                  lineHeight: '1.08',
                  letterSpacing: '-0.02em',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                Saying no, and getting to yes.
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
                  gap: '16px',
                }}
              >
                <div
                  data-yj-rv="up"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    padding: '28px',
                    borderRadius: '20px',
                    background: '#f6f5f4',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#eb1700',
                    }}
                  >
                    Judgement · the simpler, safer option
                  </span>
                  <span
                    style={{
                      fontWeight: '600',
                      fontSize: '28px',
                      lineHeight: '1.12',
                      letterSpacing: '-0.01em',
                      textWrap: 'balance',
                    }}
                  >
                    No percentage on the risk score.
                  </span>
                  <ol
                    style={{
                      margin: '0',
                      padding: '0',
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      borderTop: '1px solid #e3e1df',
                    }}
                  >
                    <li
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '88px minmax(0,1fr)',
                        gap: '12px',
                        padding: '12px 0',
                        borderBottom: '1px solid #e3e1df',
                        fontSize: '15px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#6b6664',
                          paddingTop: '3px',
                        }}
                      >
                        The ask
                      </span>
                      <span>“73% chance of a dosing error” on every trial</span>
                    </li>
                    <li
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '88px minmax(0,1fr)',
                        gap: '12px',
                        padding: '12px 0',
                        borderBottom: '1px solid #e3e1df',
                        fontSize: '15px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#6b6664',
                          paddingTop: '3px',
                        }}
                      >
                        My call
                      </span>
                      <span>
                        Pushed back: the model isn’t calibrated for that, and false precision invites false trust
                      </span>
                    </li>
                    <li
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '88px minmax(0,1fr)',
                        gap: '12px',
                        padding: '12px 0',
                        borderBottom: '1px solid #e3e1df',
                        fontSize: '15px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#eb1700',
                          paddingTop: '3px',
                        }}
                      >
                        Outcome
                      </span>
                      <span>Three levels + the factors behind them: faster to read, easy to defend</span>
                    </li>
                  </ol>
                </div>
                <div
                  data-yj-rv="up"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    padding: '28px',
                    borderRadius: '20px',
                    background: '#f6f5f4',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#eb1700',
                    }}
                  >
                    Facilitation · a real disagreement
                  </span>
                  <span
                    style={{
                      fontWeight: '600',
                      fontSize: '28px',
                      lineHeight: '1.12',
                      letterSpacing: '-0.01em',
                      textWrap: 'balance',
                    }}
                  >
                    Three risk levels, not five.
                  </span>
                  <ol
                    style={{
                      margin: '0',
                      padding: '0',
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      borderTop: '1px solid #e3e1df',
                    }}
                  >
                    <li
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '88px minmax(0,1fr)',
                        gap: '12px',
                        padding: '12px 0',
                        borderBottom: '1px solid #e3e1df',
                        fontSize: '15px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#6b6664',
                          paddingTop: '3px',
                        }}
                      >
                        The clash
                      </span>
                      <span>{'Data science: 5 levels. Devs: reuse old colours. J&J quality: their RAG scale.'}</span>
                    </li>
                    <li
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '88px minmax(0,1fr)',
                        gap: '12px',
                        padding: '12px 0',
                        borderBottom: '1px solid #e3e1df',
                        fontSize: '15px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#6b6664',
                          paddingTop: '3px',
                        }}
                      >
                        My call
                      </span>
                      <span>A 90-min workshop: everyone sorted 20 real scores alone</span>
                    </li>
                    <li
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '88px minmax(0,1fr)',
                        gap: '12px',
                        padding: '12px 0',
                        borderBottom: '1px solid #e3e1df',
                        fontSize: '15px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#eb1700',
                          paddingTop: '3px',
                        }}
                      >
                        Outcome
                      </span>
                      <span>Five levels split the room; three didn’t. Agreed, logged, never reopened.</span>
                    </li>
                  </ol>
                </div>
              </div>
              <h3
                data-yj-rv="up"
                style={{
                  margin: '16px 0 0',
                  paddingTop: '40px',
                  borderTop: '1px solid #e3e1df',
                  fontWeight: '600',
                  fontSize: 'clamp(26px,2.8vw,38px)',
                  lineHeight: '1.12',
                  letterSpacing: '-0.015em',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                Small steps, each one learning from the last.
              </h3>
              <p
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontSize: '18px',
                  lineHeight: '1.55',
                  color: '#4a4644',
                  maxWidth: '640px',
                  textWrap: 'pretty',
                }}
              >
                I worked in two-week sprints with product owners, BAs and developers, with design one sprint ahead of
                build. We shipped six versions in 13 months; each answered one question, and the next was shaped by what
                people did with it.
              </p>
              <div data-yj-rv="up" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div
                  aria-hidden="true"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px 20px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#4a4644',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#201e1d' }} />
                    Dosing Error
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eb1700' }} />
                    AVA, on the same system
                  </span>
                </div>
                <ol
                  className="tl"
                  aria-label="Release timeline, September 2023 to October 2024"
                  style={{ margin: '0', padding: '0', listStyle: 'none' }}
                >
                  {' '}
                  <li className="tl-i tl-de">
                    <span className="tl-dot" aria-hidden="true" />
                    <span style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <strong style={{ fontWeight: '800', fontSize: '22px', lineHeight: '1' }}>V1.0</strong>
                      <span style={{ fontSize: '13px', color: '#6b6664' }}>Sep 2023</span>
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.35' }}>
                      Trial overview + risk scale
                    </span>
                    <span style={{ fontSize: '14px', lineHeight: '1.45', color: '#6b6664' }}>
                      Which trials need attention?
                    </span>
                  </li>{' '}
                  <li className="tl-i tl-de">
                    <span className="tl-dot" aria-hidden="true" />
                    <span style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <strong style={{ fontWeight: '800', fontSize: '22px', lineHeight: '1' }}>V1.1</strong>
                      <span style={{ fontSize: '13px', color: '#6b6664' }}>Nov 2023</span>
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.35' }}>Score explanations</span>
                    <span style={{ fontSize: '14px', lineHeight: '1.45', color: '#6b6664' }}>
                      Users kept asking “why red?”
                    </span>
                  </li>{' '}
                  <li className="tl-i tl-de">
                    <span className="tl-dot" aria-hidden="true" />
                    <span style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <strong style={{ fontWeight: '800', fontSize: '22px', lineHeight: '1' }}>V1.2</strong>
                      <span style={{ fontSize: '13px', color: '#6b6664' }}>Jan 2024</span>
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.35' }}>One filter + export</span>
                    <span style={{ fontSize: '14px', lineHeight: '1.45', color: '#6b6664' }}>
                      Same filter, specced four times
                    </span>
                  </li>{' '}
                  <li className="tl-i tl-ava">
                    <span className="tl-dot" aria-hidden="true" />
                    <span style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <strong style={{ fontWeight: '800', fontSize: '22px', lineHeight: '1' }}>V2.0</strong>
                      <span style={{ fontSize: '13px', color: '#6b6664' }}>Apr 2024</span>
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.35' }}>
                      AVA launches on the system
                    </span>
                    <span style={{ fontSize: '14px', lineHeight: '1.45', color: '#6b6664' }}>
                      Proven on Dosing Error first
                    </span>
                  </li>{' '}
                  <li className="tl-i tl-ava">
                    <span className="tl-dot" aria-hidden="true" />
                    <span style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <strong style={{ fontWeight: '800', fontSize: '22px', lineHeight: '1' }}>V2.2</strong>
                      <span style={{ fontSize: '13px', color: '#6b6664' }}>Jul 2024</span>
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.35' }}>
                      Override + audit trail
                    </span>
                    <span style={{ fontSize: '14px', lineHeight: '1.45', color: '#6b6664' }}>
                      Every decision traceable
                    </span>
                  </li>{' '}
                  <li className="tl-i tl-ava">
                    <span className="tl-dot" aria-hidden="true" />
                    <span style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <strong style={{ fontWeight: '800', fontSize: '22px', lineHeight: '1' }}>V2.4</strong>
                      <span style={{ fontSize: '13px', color: '#6b6664' }}>Oct 2024</span>
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.35' }}>Three new overviews</span>
                    <span style={{ fontSize: '14px', lineHeight: '1.45', color: '#6b6664' }}>
                      Risk across the portfolio
                    </span>
                  </li>{' '}
                </ol>
              </div>
            </div>
          </div>{' '}
        </section>{' '}
        <section
          data-mv="myai"
          aria-label="AI in my workflow"
          style={{ padding: '120px clamp(20px,8.4vw,120px) 0', boxSizing: 'border-box' }}
        >
          {' '}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: '24px 48px',
              paddingTop: '20px',
              borderTop: '1px solid #e3e1df',
            }}
          >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span
                aria-hidden="true"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: '#fdeceb',
                  color: '#eb1700',
                }}
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  style={{
                    flex: 'none',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: '1.8',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
                  <path d="M19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7z" />
                </svg>
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#eb1700',
                }}
              >
                07
              </span>
              <span
                style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                AI in my workflow
              </span>
            </div>
            <div style={{ gridColumn: '1/-1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontWeight: '600',
                  fontSize: 'clamp(34px,4vw,56px)',
                  lineHeight: '1.08',
                  letterSpacing: '-0.02em',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                From requirement to working prototype, faster.
              </h2>
              <p
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontSize: '18px',
                  lineHeight: '1.55',
                  color: '#4a4644',
                  maxWidth: '640px',
                  textWrap: 'pretty',
                }}
              >
                I used Claude throughout the project to get from a requirement to something people could test, while
                every design decision stayed mine.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'stretch' }}>
                <div
                  data-yj-rv="up"
                  style={{
                    flex: '1 1 300px',
                    minWidth: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    padding: '28px',
                    borderRadius: '20px',
                    background: '#ffffff',
                    boxShadow: '0 1px 2px rgba(0,0,0,.06),0 12px 40px rgba(0,0,0,.08)',
                    boxSizing: 'border-box',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#eb1700',
                    }}
                  >
                    The result
                  </span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontWeight: '600',
                        fontSize: 'clamp(56px,6vw,84px)',
                        lineHeight: '0.9',
                        letterSpacing: '-0.04em',
                      }}
                    >
                      30 → 3
                    </span>
                    <span style={{ fontWeight: '600', fontSize: '20px' }}>days</span>
                  </div>
                  <span style={{ fontSize: '15px', lineHeight: '1.5', color: '#4a4644' }}>
                    from a new requirement to a functional prototype ready to test
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: 'auto' }}>
                    {each(v.dayBars, (b, $index) => (
                      <>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '88px minmax(0,1fr)',
                            gap: '10px',
                            alignItems: 'center',
                          }}
                        >
                          <span style={{ fontSize: '14px', color: '#4a4644' }}>{t(b?.k)}</span>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              minHeight: '32px',
                              borderLeft: '1px solid #c9c4c1',
                            }}
                          >
                            <button
                              onMouseEnter={b?.on}
                              onFocus={b?.on}
                              onMouseLeave={b?.off}
                              onBlur={b?.off}
                              aria-label={b?.aria}
                              style={css(
                                `all:unset;cursor:default;display:flex;align-items:center;height:32px;min-width:6px;width:${b?.w ?? ''};opacity:${b?.op ?? ''};transition:opacity 150ms`,
                              )}
                            >
                              <span
                                style={css(
                                  `display:block;width:100%;height:20px;border-radius:0 4px 4px 0;background:${b?.c ?? ''}`,
                                )}
                              />
                            </button>
                            <span
                              style={{ fontSize: '14px', fontWeight: '700', color: '#201e1d', whiteSpace: 'nowrap' }}
                            >
                              {t(b?.lab)}
                            </span>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                  <div
                    aria-live="polite"
                    style={{ minHeight: '42px', fontSize: '13px', lineHeight: '1.5', color: '#4a4644' }}
                  >
                    {' '}
                    {v.dayHas ? (
                      <>
                        <span>
                          <strong style={{ fontWeight: '700', color: '#201e1d' }}>{t(v.dayRd?.lab)}</strong>{' '}
                          {t(v.dayRd?.t)}
                        </span>
                      </>
                    ) : null}{' '}
                    {v.dayNo ? (
                      <>
                        <span style={{ color: '#6b6664' }}>Hover over or tab to a bar for detail.</span>
                      </>
                    ) : null}{' '}
                  </div>
                </div>
                <div
                  style={{
                    flex: '2.4 1 520px',
                    minWidth: '0',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
                    gap: '16px',
                  }}
                >
                  <div
                    data-yj-rv="up"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      padding: '28px',
                      borderRadius: '20px',
                      background: '#f6f5f4',
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: '600', color: '#eb1700' }}>01</span>
                    <span style={{ fontWeight: '600', fontSize: '20px' }}>Functional prototypes</span>
                    <span style={{ fontSize: '15px', lineHeight: '1.5', color: '#4a4644' }}>
                      Coded prototypes with real filtering, sorting and the override flow, so sessions tested behaviour,
                      not static frames.
                    </span>
                  </div>
                  <div
                    data-yj-rv="up"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      padding: '28px',
                      borderRadius: '20px',
                      background: '#f6f5f4',
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: '600', color: '#eb1700' }}>02</span>
                    <span style={{ fontWeight: '600', fontSize: '20px' }}>Copy and edge cases</span>
                    <span style={{ fontSize: '15px', lineHeight: '1.5', color: '#4a4644' }}>
                      Drafted wording for risk labels and warnings, and listed edge cases (no data, one patient, old
                      data). Quality reviewed the final words.
                    </span>
                  </div>
                  <div
                    data-yj-rv="up"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      padding: '28px',
                      borderRadius: '20px',
                      background: '#f6f5f4',
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: '600', color: '#eb1700' }}>03</span>
                    <span style={{ fontWeight: '600', fontSize: '20px' }}>Synthesis</span>
                    <span style={{ fontSize: '15px', lineHeight: '1.5', color: '#4a4644' }}>
                      Grouped session notes into themes, which I then checked against the recordings.
                    </span>
                  </div>
                </div>
              </div>
              <div
                data-yj-rv="up"
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '22px 24px',
                  borderRadius: '16px',
                  boxShadow: 'inset 0 0 0 1px #e3e1df',
                  maxWidth: '820px',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flex: 'none',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: '#201e1d',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: '700',
                  }}
                >
                  !
                </span>
                <span style={{ fontSize: '16px', lineHeight: '1.55' }}>
                  <strong style={{ fontWeight: '600' }}>Guardrails.</strong>
                  {
                    ' No patient or confidential trial data went into AI tools: prototypes ran on synthetic data, and I reviewed every output before it reached the team. The interactive demos on this page were built the same way.'
                  }
                </span>
              </div>
              <h3
                data-yj-rv="up"
                style={{
                  margin: '16px 0 0',
                  paddingTop: '40px',
                  borderTop: '1px solid #e3e1df',
                  fontWeight: '600',
                  fontSize: 'clamp(26px,2.8vw,38px)',
                  lineHeight: '1.12',
                  letterSpacing: '-0.015em',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                Same filter, written four times.
              </h3>
              <p
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontSize: '18px',
                  lineHeight: '1.55',
                  color: '#4a4644',
                  maxWidth: '640px',
                  textWrap: 'pretty',
                }}
              >
                The sprint stories specified the same filter separately for every overview. Side by side, it was one
                pattern, so it became one component. Claude helped me spot the overlap; I checked it against the specs.
              </p>
              <div data-yj-rv="up" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    padding: '10px 16px',
                    borderRadius: '12px',
                    background: '#f6f5f4',
                    fontSize: '14px',
                    textDecoration: 'line-through',
                    textDecorationColor: '#c9c4c1',
                    color: '#4a4644',
                  }}
                >
                  Trial filter spec
                </span>
                <span
                  style={{
                    padding: '10px 16px',
                    borderRadius: '12px',
                    background: '#f6f5f4',
                    fontSize: '14px',
                    textDecoration: 'line-through',
                    textDecorationColor: '#c9c4c1',
                    color: '#4a4644',
                  }}
                >
                  Therapeutic area filter spec
                </span>
                <span
                  style={{
                    padding: '10px 16px',
                    borderRadius: '12px',
                    background: '#f6f5f4',
                    fontSize: '14px',
                    textDecoration: 'line-through',
                    textDecorationColor: '#c9c4c1',
                    color: '#4a4644',
                  }}
                >
                  Region filter spec
                </span>
                <span
                  style={{
                    padding: '10px 16px',
                    borderRadius: '12px',
                    background: '#f6f5f4',
                    fontSize: '14px',
                    textDecoration: 'line-through',
                    textDecorationColor: '#c9c4c1',
                    color: '#4a4644',
                  }}
                >
                  Compound filter spec
                </span>
                <span aria-hidden="true" style={{ fontSize: '18px', color: '#eb1700' }}>
                  →
                </span>
                <span
                  style={{
                    padding: '10px 18px',
                    borderRadius: '12px',
                    background: '#eb1700',
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                >
                  One filter component
                </span>
              </div>
              <div
                data-yj-rv="up"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#ffffff',
                  boxShadow: '0 1px 2px rgba(0,0,0,.06),0 12px 40px rgba(0,0,0,.08)',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', padding: '28px', minWidth: '0' }}>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '12px' }}
                  >
                    <span style={{ fontWeight: '800', fontSize: '22px' }}>Filter</span>
                    <button
                      className="dc-hover-12380521"
                      onClick={v.fReset}
                      style={{ all: 'unset', cursor: 'pointer', fontSize: '14px', fontWeight: '600', color: '#eb1700' }}
                    >
                      Reset all
                    </button>
                  </div>
                  {each(v.fGroups, (g, $index) => (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                          <span
                            style={{
                              fontSize: '12px',
                              fontWeight: '600',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              color: '#6b6664',
                            }}
                          >
                            {t(g?.k)}
                          </span>
                          <span style={{ fontSize: '12px', color: '#6b6664' }}>{t(g?.kind)}</span>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {each(g?.opts, (o, $index) => (
                            <>
                              <button
                                className="dc-hover-33b8069b"
                                onClick={o?.toggle}
                                aria-pressed={o?.on}
                                style={css(
                                  `all:unset;cursor:pointer;padding:8px 16px;border-radius:999px;font-size:14px;border:1px solid ${o?.bd ?? ''};background:${o?.bg ?? ''};color:${o?.fg ?? ''};transition:background 100ms,border-color 100ms`,
                                )}
                              >
                                {t(o?.v)}
                              </button>
                            </>
                          ))}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    padding: '28px',
                    minWidth: '0',
                    background: '#f6f5f4',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#6b6664',
                    }}
                  >
                    Applied filters
                  </span>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      minHeight: '40px',
                      alignContent: 'flex-start',
                    }}
                  >
                    {v.fEmpty ? (
                      <>
                        <span style={{ fontSize: '15px', color: '#6b6664' }}>
                          No filters yet. Pick an option to add a chip.
                        </span>
                      </>
                    ) : null}
                    {each(v.fChips, (c, $index) => (
                      <>
                        <span
                          style={{
                            animation: 'avaPop 200ms cubic-bezier(.2,.9,.3,1.3)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '6px 6px 6px 14px',
                            borderRadius: '999px',
                            background: '#fdeceb',
                            color: '#8a1f0e',
                            fontSize: '14px',
                            fontWeight: '600',
                          }}
                        >
                          <span style={{ fontWeight: '400', color: '#6b6664' }}>{t(c?.g)}</span>
                          {t(c?.v, true)}
                          <button
                            className="dc-hover-b9a1e7a8"
                            onClick={c?.remove}
                            aria-label={`Remove ${c?.v ?? ''}`}
                            style={{
                              all: 'unset',
                              cursor: 'pointer',
                              width: '22px',
                              height: '22px',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '16px',
                              lineHeight: '1',
                            }}
                          >
                            ×
                          </button>
                        </span>
                      </>
                    ))}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      borderTop: '1px solid #e3e1df',
                      marginTop: 'auto',
                    }}
                  >
                    {each(v.fRows, (r, $index) => (
                      <>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1.4fr) auto',
                            gap: '12px',
                            alignItems: 'center',
                            padding: '12px 0',
                            borderBottom: '1px solid #d8d5d3',
                            fontSize: '14px',
                          }}
                        >
                          <span style={{ fontWeight: '600' }}>{t(r?.id)}</span>
                          <span style={{ color: '#4a4644' }}>{t(r?.ta)}</span>
                          <span
                            style={css(
                              `padding:4px 10px;border-radius:999px;font-size:12px;font-weight:600;background:${r?.bg ?? ''};color:${r?.fg ?? ''}`,
                            )}
                          >
                            {t(r?.lvl)}
                          </span>
                        </div>
                      </>
                    ))}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span style={{ fontSize: '15px', color: '#4a4644' }}>{t(v.fCount)}</span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '14px 24px',
                        borderRadius: '999px',
                        background: '#eb1700',
                        color: '#ffffff',
                        fontSize: '15px',
                        fontWeight: '600',
                      }}
                    >
                      Show results →
                    </span>
                  </div>
                </div>
              </div>
              <span style={{ fontSize: '14px', lineHeight: '1.45', color: '#4a4644' }}>
                It plays on its own; pick options to take over. The same component runs on all four overviews.
              </span>
            </div>
          </div>{' '}
        </section>{' '}
        <section
          data-mv="overviews"
          aria-label="The product"
          style={{ padding: '120px clamp(20px,8.4vw,120px) 0', boxSizing: 'border-box' }}
        >
          {' '}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: '24px 48px',
              paddingTop: '20px',
              borderTop: '1px solid #e3e1df',
            }}
          >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span
                aria-hidden="true"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: '#fdeceb',
                  color: '#eb1700',
                }}
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  style={{
                    flex: 'none',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: '1.8',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M3 9h18M9 9v11" />
                </svg>
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#eb1700',
                }}
              >
                08
              </span>
              <span
                style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                The product
              </span>
            </div>
            <div style={{ gridColumn: '1/-1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontWeight: '600',
                  fontSize: 'clamp(34px,4vw,56px)',
                  lineHeight: '1.08',
                  letterSpacing: '-0.02em',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                One template, four lenses on risk.
              </h2>
              <p
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontSize: '18px',
                  lineHeight: '1.55',
                  color: '#4a4644',
                  maxWidth: '640px',
                  textWrap: 'pretty',
                }}
              >
                Quality leads look at risk by trial, by therapeutic area, by compound and by region. Instead of four
                bespoke dashboards, one overview template swaps its lens and keeps the same filters, tables and exports.
              </p>
              <div
                role="tablist"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))',
                  gap: '8px',
                  padding: '8px',
                  borderRadius: '24px',
                  background: '#f6f5f4',
                }}
              >
                {each(v.lenses, (l, $index) => (
                  <>
                    <button
                      role="tab"
                      aria-selected={l?.sel}
                      onClick={l?.pick}
                      style={css(
                        `all:unset;cursor:pointer;position:relative;overflow:hidden;display:flex;flex-direction:column;gap:6px;padding:18px 22px;border-radius:16px;background:${l?.tabBg ?? ''};transition:background 300ms`,
                      )}
                    >
                      <span style={css(`font-size:13px;font-weight:600;letter-spacing:0.08em;color:${l?.numC ?? ''}`)}>
                        {t(l?.n)}
                      </span>
                      <span style={css(`font-weight:800;font-size:22px;line-height:1.1;color:${l?.txtC ?? ''}`)}>
                        {t(l?.k)}
                      </span>
                      <span
                        style={css(
                          `position:absolute;left:0;bottom:0;height:3px;width:${l?.prog ?? ''};background:#eb1700;transition:width ${l?.dur ?? ''} linear`,
                        )}
                      />
                    </button>
                  </>
                ))}
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))',
                  gap: '24px 48px',
                  alignItems: 'start',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '0' }}>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#eb1700',
                    }}
                  >
                    The question it answers
                  </span>
                  {each(v.lensQ, (q, $index) => (
                    <>
                      <p
                        style={{
                          margin: '0',
                          fontWeight: '800',
                          fontSize: '28px',
                          lineHeight: '1.15',
                          letterSpacing: '-0.01em',
                          textWrap: 'pretty',
                          animation: 'avaFade 500ms ease',
                        }}
                      >
                        {t(q?.t)}
                      </p>
                    </>
                  ))}
                  <ul
                    style={{
                      margin: '0',
                      padding: '0',
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      borderTop: '1px solid #e3e1df',
                    }}
                  >
                    {each(v.lens?.pts, (p, $index) => (
                      <>
                        <li
                          style={{
                            padding: '12px 0',
                            borderBottom: '1px solid #c9c4c1',
                            fontSize: '16px',
                            lineHeight: '1.45',
                          }}
                        >
                          {t(p)}
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
                <div
                  ref={v.lensRef}
                  style={{
                    gridColumn: 'span 2',
                    minWidth: '0',
                    aspectRatio: '16/10',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    background: '#ffffff',
                    boxShadow: '0 1px 2px rgba(0,0,0,.06),0 12px 40px rgba(0,0,0,.08)',
                  }}
                >
                  {' '}
                  <img
                    src={asset(v.lens?.img)}
                    alt={`${v.lens?.k ?? ''} overview`}
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                    }}
                  />{' '}
                </div>
              </div>
              <h3
                data-yj-rv="up"
                style={{
                  margin: '16px 0 0',
                  paddingTop: '40px',
                  borderTop: '1px solid #e3e1df',
                  fontWeight: '600',
                  fontSize: 'clamp(26px,2.8vw,38px)',
                  lineHeight: '1.12',
                  letterSpacing: '-0.015em',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                Dosing Error and AVA, in use.
              </h3>
              <p
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontSize: '18px',
                  lineHeight: '1.55',
                  color: '#4a4644',
                  maxWidth: '640px',
                  textWrap: 'pretty',
                }}
              >
                Three of the finished screens. Pick one, then follow the numbers.
              </p>
              <div
                data-yj-rv="up"
                onMouseEnter={v.scrEnter}
                onMouseLeave={v.scrLeave}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                <div
                  role="tablist"
                  aria-label="Product screens"
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
                >
                  {each(v.scrTabs, (tItem, $index) => (
                    <>
                      <button
                        role="tab"
                        aria-selected={tItem?.sel}
                        onClick={tItem?.pick}
                        style={css(
                          `all:unset;cursor:pointer;position:relative;overflow:hidden;display:flex;align-items:center;gap:8px;padding:10px 16px 12px;border-radius:999px;font-size:14px;font-weight:600;background:${tItem?.bg ?? ''};color:${tItem?.fg ?? ''};transition:background 150ms,color 150ms`,
                        )}
                      >
                        <span
                          aria-hidden="true"
                          style={css(`width:8px;height:8px;border-radius:50%;background:${tItem?.dot ?? ''}`)}
                        />
                        {t(tItem?.k, true)}
                        <span
                          aria-hidden="true"
                          style={css(
                            `position:absolute;left:16px;right:16px;bottom:5px;height:2px;border-radius:2px;background:${tItem?.track ?? ''};overflow:hidden`,
                          )}
                        >
                          <span
                            style={css(
                              `display:block;height:100%;width:${tItem?.prog ?? ''};background:#ffffff;transition:width ${tItem?.dur ?? ''} linear`,
                            )}
                          />
                        </span>
                      </button>
                    </>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'stretch' }}>
                  <div
                    style={{
                      flex: '2.2 1 520px',
                      minWidth: '0',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      background: '#ffffff',
                      boxShadow: '0 1px 2px rgba(0,0,0,.06),0 18px 50px rgba(0,0,0,.14)',
                    }}
                  >
                    {' '}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '10px 12px',
                        background: '#f1efed',
                        borderBottom: '1px solid #e3e1df',
                      }}
                    >
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ff5f57' }} />
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#febc2e' }} />
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#28c840' }} />
                      <span
                        style={{
                          flex: '1',
                          marginLeft: '10px',
                          padding: '4px 10px',
                          borderRadius: '999px',
                          background: '#ffffff',
                          fontSize: '11px',
                          color: '#6b6664',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {t(v.scr?.url)}
                      </span>
                    </div>{' '}
                    <div
                      ref={v.scrRef}
                      onWheel={v.scrStop}
                      onTouchStart={v.scrStop}
                      tabIndex="0"
                      aria-label={`${v.scr?.alt ?? ''}. Scroll to see the full page.`}
                      style={{
                        height: 'clamp(420px,62vh,640px)',
                        overflowY: 'auto',
                        overscrollBehavior: 'contain',
                        background: '#ffffff',
                      }}
                    >
                      {' '}
                      <div style={{ position: 'relative' }}>
                        {' '}
                        <img
                          src={asset(v.scr?.img)}
                          alt={v.scr?.alt}
                          style={{ display: 'block', width: '100%', height: 'auto' }}
                        />{' '}
                        {each(v.scrPins, (m, $index) => (
                          <>
                            <button
                              onClick={m?.pin}
                              onMouseEnter={m?.on}
                              aria-label={`Point ${m?.n ?? ''}: ${m?.h ?? ''}`}
                              style={css(
                                `all:unset;cursor:pointer;position:absolute;left:${m?.x ?? ''};top:${m?.y ?? ''};transform:translate(-50%,-50%) scale(${m?.sc ?? ''});width:30px;height:30px;border-radius:50%;background:#201e1d;color:#ffffff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;box-shadow:0 0 0 3px #ffffff,0 4px 12px rgba(0,0,0,.25);transition:transform 150ms`,
                              )}
                            >
                              {t(m?.n, true)}
                            </button>
                          </>
                        ))}{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>
                  <div
                    style={{ flex: '1 1 280px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}
                  >
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#6b6664',
                      }}
                    >
                      What to look for
                    </span>
                    <ol
                      style={{
                        margin: '0',
                        padding: '0',
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      {each(v.scrPins, (m, $index) => (
                        <>
                          <li
                            onMouseEnter={m?.on}
                            onMouseLeave={v.scrOff}
                            onClick={m?.go}
                            style={css(
                              `display:flex;gap:12px;align-items:flex-start;padding:14px 16px;border-radius:14px;background:${m?.bg ?? ''};cursor:pointer;transition:background 150ms`,
                            )}
                          >
                            <span
                              aria-hidden="true"
                              style={{
                                flex: 'none',
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                background: '#201e1d',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '12px',
                                fontWeight: '800',
                              }}
                            >
                              {t(m?.n, true)}
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                              <strong style={{ fontWeight: '600', fontSize: '15px', lineHeight: '1.3' }}>
                                {t(m?.h)}
                              </strong>
                              <span style={{ fontSize: '14px', lineHeight: '1.45', color: '#4a4644' }}>{t(m?.p)}</span>
                            </span>
                          </li>
                        </>
                      ))}
                    </ol>
                    <span style={{ marginTop: 'auto', fontSize: '13px', color: '#6b6664' }}>
                      Screens change on their own. Click a tab or a point, or scroll the screen, to take over.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>{' '}
        </section>{' '}
        <section
          data-mv="impact"
          aria-label="Impact"
          style={{ padding: '120px clamp(20px,8.4vw,120px) 0', boxSizing: 'border-box' }}
        >
          {' '}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: '24px 48px',
              paddingTop: '20px',
              borderTop: '1px solid #e3e1df',
            }}
          >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span
                aria-hidden="true"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: '#fdeceb',
                  color: '#eb1700',
                }}
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  style={{
                    flex: 'none',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: '1.8',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                >
                  <path d="M3 17l6-6 4 4 8-8" />
                  <path d="M15 7h6v6" />
                </svg>
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#eb1700',
                }}
              >
                09
              </span>
              <span
                style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                Impact
              </span>
            </div>
            <div style={{ gridColumn: '1/-1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontWeight: '600',
                  fontSize: 'clamp(34px,4vw,56px)',
                  lineHeight: '1.08',
                  letterSpacing: '-0.02em',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                Safer decisions, shipped in small steps.
              </h2>
              <div
                ref={v.impRef}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
                  gap: '16px',
                }}
              >
                {each(v.impactR, (m, $index) => (
                  <>
                    <div
                      data-yj-rv="up"
                      style={css(
                        `display:flex;flex-direction:column;gap:12px;padding:28px;border-radius:20px;background:${m?.bg ?? ''};color:${m?.fg ?? ''};min-height:240px;box-sizing:border-box`,
                      )}
                    >
                      <span
                        style={{
                          fontWeight: '600',
                          fontSize: 'clamp(64px,7vw,96px)',
                          lineHeight: '0.9',
                          letterSpacing: '-0.04em',
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        {t(m?.v)}
                      </span>
                      <span style={{ fontWeight: '600', fontSize: '20px', lineHeight: '1.2', marginTop: 'auto' }}>
                        {t(m?.h)}
                      </span>
                      <span style={{ fontSize: '15px', lineHeight: '1.5', opacity: '0.85' }}>{t(m?.p)}</span>
                    </div>
                  </>
                ))}
              </div>
              <ul
                style={{
                  margin: '0',
                  padding: '0',
                  listStyle: 'none',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))',
                  gap: '0 48px',
                  borderTop: '1px solid #e3e1df',
                }}
              >
                {each(v.impactPts, (p, $index) => (
                  <>
                    <li
                      data-yj-rv="up"
                      style={{
                        display: 'flex',
                        gap: '14px',
                        padding: '18px 0',
                        borderBottom: '1px solid #e3e1df',
                        fontSize: '17px',
                        lineHeight: '1.45',
                      }}
                    >
                      <span style={{ color: '#eb1700', fontWeight: '600' }}>{t(p?.n)}</span>
                      <span>{t(p?.t)}</span>
                    </li>
                  </>
                ))}
              </ul>
              <h3
                data-yj-rv="up"
                style={{
                  margin: '16px 0 0',
                  paddingTop: '40px',
                  borderTop: '1px solid #e3e1df',
                  fontWeight: '600',
                  fontSize: 'clamp(26px,2.8vw,38px)',
                  lineHeight: '1.12',
                  letterSpacing: '-0.015em',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                Looking back.
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
                  gap: '16px',
                }}
              >
                <div
                  data-yj-rv="up"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    padding: '28px',
                    borderRadius: '20px',
                    background: '#f6f5f4',
                    color: '#201e1d',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: '#eaf2ea',
                      color: '#0b5e12',
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      style={{
                        flex: 'none',
                        fill: 'none',
                        stroke: 'currentColor',
                        strokeWidth: '1.8',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }}
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
                    </svg>
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      opacity: '0.75',
                    }}
                  >
                    What worked
                  </span>
                  <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.4' }}>
                    Mapping what could go wrong before designing any screen.
                  </span>
                </div>
                <div
                  data-yj-rv="up"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    padding: '28px',
                    borderRadius: '20px',
                    background: '#f6f5f4',
                    color: '#201e1d',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: '#fdf0e6',
                      color: '#8a3f08',
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      style={{
                        flex: 'none',
                        fill: 'none',
                        stroke: 'currentColor',
                        strokeWidth: '1.8',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }}
                    >
                      <path d="M4 9h11a5 5 0 0 1 0 10H9" />
                      <path d="M8 5L4 9l4 4" />
                    </svg>
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      opacity: '0.75',
                    }}
                  >
                    What I’d change
                  </span>
                  <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.4' }}>
                    Test with auditors sooner: the override reason came in V2.2, but belonged in V1.
                  </span>
                </div>
                <div
                  data-yj-rv="up"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    padding: '28px',
                    borderRadius: '20px',
                    background: '#201e1d',
                    color: '#ffffff',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: '#eb1700',
                      color: '#ffffff',
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      style={{
                        flex: 'none',
                        fill: 'none',
                        stroke: 'currentColor',
                        strokeWidth: '1.8',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }}
                    >
                      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
                    </svg>
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      opacity: '0.75',
                    }}
                  >
                    What I’d measure next
                  </span>
                  <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.4' }}>
                    Live use: time from flag to decision, and how often overrides are reversed.
                  </span>
                </div>
              </div>
            </div>
          </div>{' '}
        </section>
      </div>
      <div style={{ background: '#ffffff', padding: '80px 12px 12px' }}>
        <div style={{ height: '60vh', minHeight: '420px', position: 'relative', overflow: 'hidden' }}>
          {t(v.nextBanner)}
        </div>
      </div>
    </>
  );
}

export default defineScreen({
  name: 'Case AVA Pub',
  Logic,
  template,
  css: screenCss,
  links: [
    '_ds/modernist-f6c1caa7-5cac-451a-a099-225de5c74272/styles.css',
    'figma/ava/fig-tokens.css',
    'figma/ava/fig-assets.css',
    'figma/ava2/fig-assets.css',
    'figma/ava2/fig-tokens.css',
    'figma/de/fig-tokens.css',
    'figma/de/fig-assets.css',
  ],
  defaults: {},
});
