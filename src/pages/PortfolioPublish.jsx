import { defineScreen } from '../dc/defineScreen.js';
import { css, cx, asset, each, t } from '../dc/template.js';
import ImageSlot from '../components/ImageSlot.jsx';
import CaseMove from './CaseMove.jsx';
import CaseAva from './CaseAva.jsx';
import CaseBirdsong from './CaseBirdsong.jsx';
import CasePfizer from './CasePfizer.jsx';
import Logic from './PortfolioPublish.logic.js';
import screenCss from './PortfolioPublish.css?raw';
import './PortfolioPublish.states.css';

function template(v) {
  return (
    <>
      {t(v.loader)}
      <div
        style={{
          minHeight: '100vh',
          display: 'block',
          flexDirection: 'column',
          background: '#000000',
          color: '#f4f4f4',
          fontFamily: 'Geist,sans-serif',
        }}
      >
        <header
          className="dc-before-52b949b5"
          ref={v.navRef}
          style={{
            position: 'fixed',
            top: '44px',
            left: '0',
            right: '0',
            zIndex: '30',
            transition: 'transform 380ms cubic-bezier(.2,.7,.2,1),opacity 300ms',
            padding: '0 56px',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            gap: '16px',
            pointerEvents: 'none',
          }}
        >
          <button
            className="dc-hover-582f54e7"
            onClick={v.goHome}
            style={{
              all: 'unset',
              pointerEvents: 'auto',
              justifySelf: 'start',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'baseline',
              gap: '8px',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(14px) saturate(160%)',
              WebkitBackdropFilter: 'blur(14px) saturate(160%)',
              border: '1px solid rgba(255,255,255,0.18)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22), 0 8px 24px -12px rgba(0,0,0,0.5)',
              color: '#f4f4f4',
              transition: 'background 250ms',
              borderRadius: '999px',
              padding: '12px 22px 14px 20px',
            }}
          >
            <span
              style={{
                fontFamily: "Geist,'Geist Display',sans-serif",
                fontWeight: '700',
                fontSize: '26px',
                letterSpacing: '0.005em',
                lineHeight: '1',
                textTransform: 'uppercase',
              }}
            >
              Yashvi
            </span>
            <span
              style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontSize: '24px', lineHeight: '1' }}
            >
              jain
            </span>
          </button>
          <nav
            style={{
              pointerEvents: 'auto',
              display: 'flex',
              gap: '2px',
              padding: '5px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(14px) saturate(160%)',
              WebkitBackdropFilter: 'blur(14px) saturate(160%)',
              border: '1px solid rgba(255,255,255,0.18)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22), 0 8px 24px -12px rgba(0,0,0,0.5)',
            }}
          >
            {each(v.nav, (n, $index) => (
              <>
                <button
                  className="dc-hover-aae40af0"
                  onClick={n?.onClick}
                  style={css(
                    `all:unset;cursor:pointer;padding:9px 16px;border-radius:999px;font-size:16px;font-weight:500;white-space:nowrap;color:#f4f4f4;background:${n?.bg ?? ''};transition:background 250ms`,
                  )}
                >
                  {t(n?.label)}
                </button>
              </>
            ))}
          </nav>
          {v.showCta ? (
            <>
              <button
                className="dc-hover-ab009e83"
                data-yj-mag="1"
                onClick={v.goContact}
                style={{
                  all: 'unset',
                  cursor: 'pointer',
                  justifySelf: 'end',
                  pointerEvents: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(14px) saturate(160%)',
                  WebkitBackdropFilter: 'blur(14px) saturate(160%)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22), 0 8px 24px -12px rgba(0,0,0,0.5)',
                  color: '#f4f4f4',
                  transition: 'background 250ms',
                  borderRadius: '999px',
                  padding: '17px 20px',
                  fontFamily: 'Geist,sans-serif',
                  fontWeight: '500',
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                <span
                  data-yj-pulse="1"
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--yj-accent, #ff4d2e)',
                    boxShadow: '0 0 0 1.5px #000000',
                  }}
                />
                {'What are you building? '}
              </button>
            </>
          ) : null}
        </header>
        <main style={{ flex: '1' }}>
          {v.isHome ? (
            <>
              {' '}
              {t(v.landingHero)}{' '}
              <section
                id="yj-work"
                style={{
                  scrollMarginTop: '40px',
                  padding: '40px clamp(20px,7vw,128px) 0',
                  maxWidth: '1600px',
                  margin: '0 auto',
                  paddingTop: '96px',
                  paddingBottom: '0px',
                }}
              >
                {' '}
                <div
                  data-yj-rv="up"
                  style={{
                    fontFamily: 'Geist,sans-serif',
                    fontWeight: '500',
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#999999',
                  }}
                >
                  (Index) — Problem → bet → result
                </div>{' '}
                <h2
                  data-yj-rv="mask"
                  style={{
                    margin: '16px 0 0',
                    fontFamily: "Geist,'Geist Display',sans-serif",
                    fontWeight: '700',
                    fontSize: 'clamp(28px,3.2vw,48px)',
                    lineHeight: '0.95',
                    letterSpacing: '-0.01em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    color: '#f4f4f4',
                  }}
                >
                  Selected work
                  <span
                    style={{
                      fontFamily: "'Instrument Serif',serif",
                      fontStyle: 'italic',
                      fontWeight: '400',
                      fontStretch: '100%',
                      textTransform: 'none',
                      color: 'var(--yj-accent, #ff4d2e)',
                      fontSize: '0.32em',
                      lineHeight: '1',
                    }}
                  >
                    0{t(v.workCount)}
                  </span>
                </h2>{' '}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,330px),1fr))',
                    gap: '24px',
                    marginTop: '40px',
                    marginBottom: '0',
                  }}
                >
                  {each(v.workList, (c, $index) => (
                    <>
                      <div
                        onMouseEnter={c?.hovOn}
                        onMouseLeave={c?.hovOff}
                        data-yj-rv="up"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px',
                          padding: '24px',
                          background: '#141414',
                        }}
                      >
                        <div style={{ aspectRatio: '4/5', position: 'relative', overflow: 'hidden' }}>
                          <div
                            className="dc-hover-2c78ce74"
                            data-yj-px="0.08"
                            data-yj-pxmax="48"
                            style={{
                              position: 'absolute',
                              top: '-10%',
                              bottom: '-10%',
                              left: '0',
                              right: '0',
                              transition: 'scale 900ms cubic-bezier(.2,.8,.2,1)',
                            }}
                          >
                            {t(c?.cover)}
                          </div>
                        </div>
                        <div
                          style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}
                        >
                          <button
                            className="dc-hover-bac46065"
                            onClick={c?.open}
                            style={{
                              all: 'unset',
                              cursor: 'pointer',
                              fontFamily: "'Instrument Serif',serif",
                              fontStyle: 'italic',
                              fontSize: '38px',
                              lineHeight: '1.05',
                            }}
                            type="reset"
                          >
                            {t(c?.short)}
                          </button>
                          <span style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            <span
                              style={{
                                padding: '6px 12px',
                                border: '1.5px solid #666666',
                                borderRadius: '999px',
                                fontFamily: 'Geist,sans-serif',
                                fontWeight: '500',
                                fontSize: '13px',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                color: '#f4f4f4',
                              }}
                            >
                              {t(c?.sector)}
                            </span>
                            <span
                              style={{
                                padding: '6px 12px',
                                border: '1.5px solid #333333',
                                borderRadius: '999px',
                                fontFamily: 'Geist,sans-serif',
                                fontWeight: '500',
                                fontSize: '13px',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                color: '#999999',
                              }}
                            >
                              {t(c?.years)}
                            </span>
                          </span>
                        </div>
                        <button
                          className="dc-hover-78f5b1a8 dc-focus-4da8c921"
                          onClick={c?.open}
                          tabIndex="0"
                          style={css(
                            `all:unset;cursor:pointer;align-self:flex-start;display:flex;align-items:center;gap:10px;background:#f4f4f4;color:#000000;border-radius:999px;padding:12px 22px;font-size:16px;font-weight:600;opacity:${c?.ctaO ?? ''};transform:translateY(${c?.ctaY ?? ''});transition:opacity 300ms, transform 420ms cubic-bezier(.2,.7,.2,1)`,
                          )}
                        >
                          Get nosy →
                        </button>
                      </div>
                    </>
                  ))}
                </div>{' '}
              </section>{' '}
              <section
                aria-label="Brands I've worked with"
                style={{
                  maxWidth: '1600px',
                  margin: '0 auto',
                  padding: '96px clamp(20px,7vw,128px) 0',
                  position: 'relative',
                  display: 'block',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                {' '}
                <div
                  style={{
                    fontFamily: 'Geist,sans-serif',
                    fontWeight: '500',
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#999999',
                    paddingBottom: '24px',
                  }}
                >
                  (Worked with)
                </div>{' '}
                <div
                  style={{
                    flex: '1',
                    minWidth: '0',
                    overflow: 'hidden',
                    padding: '0 clamp(20px,7vw,128px)',
                    boxSizing: 'border-box',
                    borderTop: '2px solid #333333',
                    borderBottom: '2px solid #333333',
                    WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)',
                    maskImage: 'linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)',
                  }}
                >
                  {' '}
                  <div
                    className="yj-logo-track"
                    style={{
                      display: 'flex',
                      gap: '0px',
                      paddingRight: '0px',
                      width: 'max-content',
                      animation: 'yjLogoLoop 36s linear infinite',
                      paddingLeft: '0px',
                      alignItems: 'stretch',
                      justifyContent: 'center',
                      flexWrap: 'nowrap',
                    }}
                  >
                    <div
                      style={{
                        flex: 'none',
                        width: 'max-content',
                        minWidth: '260px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        padding: '24px',
                        borderLeft: '2px solid #333333',
                        borderRight: '2px solid #333333',
                        marginRight: '-2px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          height: '72px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px 14px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <img
                          className="dc-hover-4db3b929"
                          src="assets/logos/jnj.svg"
                          alt={'Johnson & Johnson logo'}
                          style={{
                            width: '180px',
                            height: '52px',
                            objectFit: 'contain',
                            filter: 'brightness(0) invert(1)',
                            transition: 'transform 300ms cubic-bezier(.2,.8,.2,1)',
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: 'Geist,sans-serif',
                          fontWeight: '500',
                          fontSize: '13px',
                          lineHeight: '1.4',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#999999',
                          textAlign: 'center',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {'Johnson & Johnson'}
                      </span>
                    </div>
                    <div
                      style={{
                        flex: 'none',
                        minWidth: '260px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        padding: '24px',
                        borderLeft: '2px solid #333333',
                        borderRight: '2px solid #333333',
                        marginRight: '-2px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          height: '72px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px 14px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <img
                          className="dc-hover-4db3b929"
                          src="assets/logos/pfizer-white.svg"
                          alt="Pfizer logo"
                          style={{
                            width: '130px',
                            height: '52px',
                            objectFit: 'contain',
                            filter: 'brightness(0) invert(1)',
                            transition: 'transform 300ms cubic-bezier(.2,.8,.2,1)',
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: 'Geist,sans-serif',
                          fontWeight: '500',
                          fontSize: '13px',
                          lineHeight: '1.4',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#999999',
                          textAlign: 'center',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Pfizer
                      </span>
                    </div>
                    <div
                      style={{
                        flex: 'none',
                        width: 'max-content',
                        minWidth: '260px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        padding: '24px',
                        borderLeft: '2px solid #333333',
                        borderRight: '2px solid #333333',
                        marginRight: '-2px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          height: '72px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px 14px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <img
                          className="dc-hover-4db3b929"
                          src="assets/logos/tcs-clear.png"
                          alt="Tata Consultancy Services logo"
                          style={{
                            maxWidth: '196%',
                            maxHeight: '208%',
                            objectFit: 'contain',
                            transition: 'transform 300ms cubic-bezier(.2,.8,.2,1)',
                            width: '155px',
                            filter: 'brightness(0) invert(1)',
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: 'Geist,sans-serif',
                          fontWeight: '500',
                          fontSize: '13px',
                          lineHeight: '1.4',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#999999',
                          textAlign: 'center',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Tata Consultancy Services
                      </span>
                    </div>
                    <div
                      style={{
                        flex: 'none',
                        width: 'max-content',
                        minWidth: '260px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        padding: '24px',
                        borderLeft: '2px solid #333333',
                        borderRight: '2px solid #333333',
                        marginRight: '-2px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          height: '72px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px 14px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <img
                          className="dc-hover-4db3b929"
                          src="assets/logos/britishcouncil-white.png"
                          alt="British Council logo"
                          style={{
                            width: '150px',
                            height: '52px',
                            objectFit: 'contain',
                            transition: 'transform 300ms cubic-bezier(.2,.8,.2,1)',
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: 'Geist,sans-serif',
                          fontWeight: '500',
                          fontSize: '13px',
                          lineHeight: '1.4',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#999999',
                          textAlign: 'center',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        British Council
                      </span>
                    </div>
                    <div
                      style={{
                        flex: 'none',
                        width: 'max-content',
                        minWidth: '260px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        padding: '24px',
                        borderLeft: '2px solid #333333',
                        borderRight: '2px solid #333333',
                        marginRight: '-2px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          height: '72px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px 14px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <img
                          className="dc-hover-4db3b929"
                          src="assets/logos/ime.png"
                          alt="Indian Music Experience Museum logo"
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            filter: 'brightness(0) invert(1)',
                            transition: 'transform 300ms cubic-bezier(.2,.8,.2,1)',
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: 'Geist,sans-serif',
                          fontWeight: '500',
                          fontSize: '13px',
                          lineHeight: '1.4',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#999999',
                          textAlign: 'center',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Indian Music Experience Museum
                      </span>
                    </div>
                    <div
                      style={{
                        flex: 'none',
                        width: 'max-content',
                        minWidth: '260px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        padding: '24px',
                        borderLeft: '2px solid #333333',
                        borderRight: '2px solid #333333',
                        marginRight: '-2px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          height: '72px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px 14px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <img
                          className="dc-hover-4db3b929"
                          src="assets/logos/rotaract.png"
                          alt="Rotaract logo"
                          style={{
                            width: 'auto',
                            height: '96px',
                            margin: '-22px 0',
                            objectFit: 'contain',
                            filter: 'brightness(0) invert(1)',
                            transition: 'transform 300ms cubic-bezier(.2,.8,.2,1)',
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: 'Geist,sans-serif',
                          fontWeight: '500',
                          fontSize: '13px',
                          lineHeight: '1.4',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#999999',
                          textAlign: 'center',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        The Rotaract Club
                      </span>
                    </div>
                    <div
                      aria-hidden="true"
                      style={{
                        flex: 'none',
                        width: 'max-content',
                        minWidth: '260px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        padding: '24px',
                        borderLeft: '2px solid #333333',
                        borderRight: '2px solid #333333',
                        marginRight: '-2px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          height: '72px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px 14px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <img
                          className="dc-hover-4db3b929"
                          src="assets/logos/jnj.svg"
                          alt=""
                          style={{
                            width: '180px',
                            height: '52px',
                            objectFit: 'contain',
                            filter: 'brightness(0) invert(1)',
                            transition: 'transform 300ms cubic-bezier(.2,.8,.2,1)',
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: 'Geist,sans-serif',
                          fontWeight: '500',
                          fontSize: '13px',
                          lineHeight: '1.4',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#999999',
                          textAlign: 'center',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {'Johnson & Johnson'}
                      </span>
                    </div>
                    <div
                      aria-hidden="true"
                      style={{
                        flex: 'none',
                        width: 'max-content',
                        minWidth: '260px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        padding: '24px',
                        borderLeft: '2px solid #333333',
                        borderRight: '2px solid #333333',
                        marginRight: '-2px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          height: '72px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px 14px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <img
                          className="dc-hover-4db3b929"
                          src="assets/logos/pfizer-white.svg"
                          alt=""
                          style={{
                            width: '130px',
                            height: '52px',
                            objectFit: 'contain',
                            filter: 'brightness(0) invert(1)',
                            transition: 'transform 300ms cubic-bezier(.2,.8,.2,1)',
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: 'Geist,sans-serif',
                          fontWeight: '500',
                          fontSize: '13px',
                          lineHeight: '1.4',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#999999',
                          textAlign: 'center',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Pfizer
                      </span>
                    </div>
                    <div
                      aria-hidden="true"
                      style={{
                        flex: 'none',
                        width: 'max-content',
                        minWidth: '260px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        padding: '24px',
                        borderLeft: '2px solid #333333',
                        borderRight: '2px solid #333333',
                        marginRight: '-2px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          height: '72px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px 14px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <img
                          className="dc-hover-4db3b929"
                          src="assets/logos/tcs-clear.png"
                          alt=""
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            filter: 'brightness(0) invert(1)',
                            transition: 'transform 300ms cubic-bezier(.2,.8,.2,1)',
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: 'Geist,sans-serif',
                          fontWeight: '500',
                          fontSize: '13px',
                          lineHeight: '1.4',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#999999',
                          textAlign: 'center',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Tata Consultancy Services
                      </span>
                    </div>
                    <div
                      aria-hidden="true"
                      style={{
                        flex: 'none',
                        width: 'max-content',
                        minWidth: '260px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        padding: '24px',
                        borderLeft: '2px solid #333333',
                        borderRight: '2px solid #333333',
                        marginRight: '-2px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          height: '72px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px 14px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <img
                          className="dc-hover-4db3b929"
                          src="assets/logos/britishcouncil-white.png"
                          alt=""
                          style={{
                            width: '150px',
                            height: '52px',
                            objectFit: 'contain',
                            transition: 'transform 300ms cubic-bezier(.2,.8,.2,1)',
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: 'Geist,sans-serif',
                          fontWeight: '500',
                          fontSize: '13px',
                          lineHeight: '1.4',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#999999',
                          textAlign: 'center',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        British Council
                      </span>
                    </div>
                    <div
                      aria-hidden="true"
                      style={{
                        flex: 'none',
                        width: 'max-content',
                        minWidth: '260px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        padding: '24px',
                        borderLeft: '2px solid #333333',
                        borderRight: '2px solid #333333',
                        marginRight: '-2px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          height: '72px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px 14px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <img
                          className="dc-hover-4db3b929"
                          src="assets/logos/ime.png"
                          alt=""
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            filter: 'brightness(0) invert(1)',
                            transition: 'transform 300ms cubic-bezier(.2,.8,.2,1)',
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: 'Geist,sans-serif',
                          fontWeight: '500',
                          fontSize: '13px',
                          lineHeight: '1.4',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#999999',
                          textAlign: 'center',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Indian Music Experience Museum
                      </span>
                    </div>
                    <div
                      aria-hidden="true"
                      style={{
                        flex: 'none',
                        width: 'max-content',
                        minWidth: '260px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        padding: '24px',
                        borderLeft: '2px solid #333333',
                        borderRight: '2px solid #333333',
                        marginRight: '-2px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          height: '72px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px 14px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <img
                          className="dc-hover-4db3b929"
                          src="assets/logos/rotaract.png"
                          alt=""
                          style={{
                            width: 'auto',
                            height: '96px',
                            margin: '-22px 0',
                            objectFit: 'contain',
                            filter: 'brightness(0) invert(1)',
                            transition: 'transform 300ms cubic-bezier(.2,.8,.2,1)',
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: 'Geist,sans-serif',
                          fontWeight: '500',
                          fontSize: '13px',
                          lineHeight: '1.4',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#999999',
                          textAlign: 'center',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        The Rotaract Club
                      </span>
                    </div>
                  </div>{' '}
                </div>{' '}
              </section>{' '}
              <section
                style={{
                  padding: '40px clamp(20px,7vw,128px) 0',
                  maxWidth: '1600px',
                  margin: '0 auto',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
                  gap: '56px',
                  alignItems: 'center',
                  paddingTop: '96px',
                  paddingBottom: '0px',
                }}
              >
                <div
                  data-yj-drop="1"
                  style={{
                    position: 'relative',
                    maxWidth: '420px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifySelf: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '34px',
                      height: '140px',
                      background: '#1f2329',
                      borderLeft: '1px solid #333333',
                      borderRight: '1px solid #333333',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <span
                      style={{
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                        fontFamily: 'Geist,sans-serif',
                        fontWeight: '500',
                        fontSize: '13px',
                        letterSpacing: '0.24em',
                        textTransform: 'uppercase',
                        color: '#999999',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Yashvi Jain · Yashvi Jain · Yashvi Jain
                    </span>
                  </div>
                  <div
                    style={{
                      width: '64px',
                      height: '16px',
                      background: '#333333',
                      border: '1px solid #666666',
                      marginTop: '-2px',
                    }}
                  />
                  <div
                    className="dc-hover-83f7e5cb"
                    style={{
                      width: '100%',
                      transformOrigin: '50% -150px',
                      transform: 'rotate(-2deg)',
                      transition: 'transform 700ms cubic-bezier(.3,1.6,.4,1)',
                    }}
                  >
                    {' '}
                    <div
                      style={{
                        background: '#0d0d0d',
                        border: '2px solid #333333',
                        padding: '14px',
                        boxShadow: '0 40px 80px -30px rgba(0,0,0,0.9)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                      }}
                    >
                      <div style={{ height: '10px', background: '#000000', border: '1px solid #333333' }} />
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '12px',
                        }}
                      >
                        <span
                          style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: 'var(--yj-accent, #ff4d2e)',
                          }}
                        />
                        <span
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            gap: '4px',
                            fontFamily: 'Geist,sans-serif',
                            fontWeight: '500',
                            fontSize: '13px',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: '#999999',
                          }}
                        >
                          <span>Visitor · Your company, obviously</span>
                          <span style={{ color: '#cccccc', letterSpacing: '0.08em' }}>London · 2026</span>
                        </span>
                      </div>
                      <div style={{ aspectRatio: '4/5', position: 'relative', width: '100%', overflow: 'hidden' }}>
                        {t(v.introImg)}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span
                          style={{
                            fontFamily: "Geist,'Geist Display',sans-serif",
                            fontWeight: '700',
                            fontSize: '22px',
                            lineHeight: '0.9',
                            textTransform: 'uppercase',
                            color: '#f4f4f4',
                          }}
                        >
                          Yashvi Jain
                        </span>
                        <span style={{ fontSize: '16px', color: '#999999' }}>{'Designer & strategist'}</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-end',
                          gap: '16px',
                          paddingTop: '12px',
                          borderTop: '2px solid #333333',
                        }}
                      >
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <span
                            style={{
                              width: '150px',
                              height: '30px',
                              background:
                                'repeating-linear-gradient(90deg,#cccccc 0 2px,transparent 2px 4px,#cccccc 4px 5px,transparent 5px 8px,#cccccc 8px 11px,transparent 11px 12px)',
                            }}
                          />
                          <span
                            style={{
                              fontFamily: 'Geist,sans-serif',
                              fontWeight: '500',
                              fontSize: '13px',
                              letterSpacing: '0.14em',
                              color: '#8c8c8c',
                            }}
                          >
                            YJ2026UAL0001
                          </span>
                        </span>
                        <span
                          style={{
                            fontFamily: "Geist,'Geist Display',sans-serif",
                            fontWeight: '700',
                            fontSize: '28px',
                            lineHeight: '1',
                            color: '#f4f4f4',
                          }}
                        >
                          YJ-01
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-yj-rv="up"
                  style={{
                    gridColumn: 'span 2',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Geist,sans-serif',
                      fontWeight: '500',
                      fontSize: '13px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#999999',
                    }}
                  >
                    (About) — From interfaces to services
                  </div>
                  <p
                    style={{
                      margin: '0',
                      fontSize: 'clamp(20px,2vw,28px)',
                      lineHeight: '1.12',
                      letterSpacing: '-0.015em',
                      fontWeight: '500',
                      textWrap: 'pretty',
                    }}
                  >
                    {t(v.tcsWord)}
                    {
                      ' years at TCS and an MA in Design Management taught me the screen is rarely the problem. I design, research and think my way to the real one, with '
                    }
                    <span style={{ fontFamily: "'Instrument Serif',serif", fontStyle: 'italic', fontWeight: '400' }}>
                      actual intelligence
                    </span>
                    {' first and '}
                    <span
                      style={{
                        fontFamily: "'Instrument Serif',serif",
                        fontStyle: 'italic',
                        fontWeight: '400',
                        color: 'var(--yj-accent, #ff4d2e)',
                      }}
                    >
                      artificial intelligence
                    </span>
                    {' to move faster.'}
                  </p>
                  <button
                    className="dc-hover-98a7b991"
                    data-yj-mag="1"
                    onClick={v.goApproach}
                    style={{
                      all: 'unset',
                      cursor: 'pointer',
                      padding: '12px 22px',
                      borderRadius: '999px',
                      border: '1.5px solid #f4f4f4',
                      fontSize: '17px',
                      fontWeight: '500',
                    }}
                  >
                    How I work →
                  </button>
                </div>
              </section>
              <section style={{ maxWidth: '1600px', margin: '0 auto', padding: '96px clamp(20px,7vw,128px) 120px' }}>
                {' '}
                <div
                  data-yj-rv="up"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    gap: '24px',
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <span
                      style={{
                        fontFamily: 'Geist,sans-serif',
                        fontWeight: '500',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        fontSize: '13px',
                        color: '#999999',
                      }}
                    >
                      (Recommendations) — from LinkedIn
                    </span>
                    <h2
                      style={{
                        margin: '0',
                        fontFamily: "'Instrument Serif',serif",
                        fontStyle: 'italic',
                        fontWeight: '400',
                        fontSize: 'clamp(28px,3.2vw,48px)',
                        lineHeight: '1',
                        color: '#f4f4f4',
                      }}
                    >
                      In other people’s words
                    </h2>
                  </div>
                  <a
                    className="dc-hover-98a7b991"
                    href="https://www.linkedin.com/in/yashvi-jain-b049851ba/details/recommendations/"
                    target="_blank"
                    rel="noopener"
                    data-yj-mag="1"
                    style={{
                      padding: '12px 22px',
                      borderRadius: '999px',
                      border: '1.5px solid #f4f4f4',
                      color: '#f4f4f4',
                      fontSize: '17px',
                      fontWeight: '500',
                      textDecoration: 'none',
                    }}
                  >
                    View all on LinkedIn ↗
                  </a>
                </div>{' '}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
                    gap: '24px',
                    marginTop: '40px',
                  }}
                >
                  {each(v.recs, (r, $index) => (
                    <>
                      <a
                        className="dc-hover-5cc11c4b"
                        href="https://www.linkedin.com/in/yashvi-jain-b049851ba/details/recommendations/"
                        target="_blank"
                        rel="noopener"
                        data-yj-rv="up"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '28px',
                          padding: '24px',
                          background: '#141414',
                          color: '#f4f4f4',
                          textDecoration: 'none',
                          transition: 'background 300ms,translate 400ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Instrument Serif',serif",
                            fontSize: '72px',
                            lineHeight: '0.6',
                            color: 'var(--yj-accent, #ff4d2e)',
                            height: '32px',
                          }}
                        >
                          “
                        </span>
                        <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.5', textWrap: 'pretty', flex: '1' }}>
                          {t(r?.quote)}
                        </p>
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            gap: '16px',
                            paddingTop: '18px',
                            borderTop: '1px solid #333333',
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '0' }}>
                            <span
                              style={{
                                flex: 'none',
                                width: '44px',
                                height: '44px',
                                position: 'relative',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                background: '#1a1a1a',
                              }}
                              onClick={v.stop}
                            >
                              <div
                                className="sc-host-x"
                                style={{ position: 'absolute', inset: '0', width: '100%', height: '100%' }}
                              >
                                <ImageSlot id={r?.slot} src={r?.img} shape="circle" fit="cover" placeholder="Photo" />
                              </div>
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                              <span style={{ fontSize: '16px', fontWeight: '600' }}>{t(r?.name)}</span>
                              <span style={{ fontSize: '14px', color: '#999999', whiteSpace: 'nowrap' }}>
                                {t(r?.role)}
                              </span>
                            </span>
                          </span>
                          <span
                            style={{
                              fontFamily: 'Geist,sans-serif',
                              fontWeight: '500',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              fontSize: '13px',
                              color: '#999999',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {t(r?.rel)}
                          </span>
                        </div>
                      </a>
                    </>
                  ))}
                </div>{' '}
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', marginTop: '96px' }}>
                  <span
                    style={{
                      fontFamily: 'Geist,sans-serif',
                      fontWeight: '500',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontSize: '13px',
                      color: '#999999',
                      paddingBottom: '20px',
                      borderBottom: '2px solid #f4f4f4',
                    }}
                  >
                    (Certifications)
                  </span>
                  {each(v.certs, (c, $index) => (
                    <>
                      <a
                        className="dc-hover-ba404a80"
                        href="https://www.linkedin.com/in/yashvi-jain-b049851ba/details/certifications/"
                        target="_blank"
                        rel="noopener"
                        data-yj-rv="up"
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          gap: '16px 32px',
                          padding: '28px 0',
                          borderBottom: '2px solid #333333',
                          color: '#f4f4f4',
                          textDecoration: 'none',
                          transition: 'padding 400ms cubic-bezier(.2,.8,.2,1),border-color 300ms',
                        }}
                      >
                        <span
                          style={{
                            flex: '0 0 120px',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                          }}
                        >
                          {t(c?.logoImg, true)}
                        </span>
                        <span
                          style={{
                            flex: '1 1 240px',
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '8px 20px',
                            flexWrap: 'wrap',
                            minWidth: '0',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'Instrument Serif',serif",
                              fontStyle: 'italic',
                              fontSize: 'clamp(24px,2.2vw,32px)',
                              lineHeight: '1.05',
                            }}
                          >
                            {t(c?.title)}
                          </span>
                          <span style={{ fontSize: '16px', color: '#999999' }}>{t(c?.org)}</span>
                        </span>
                        <span
                          style={{
                            fontFamily: 'Geist,sans-serif',
                            fontWeight: '500',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            fontSize: '13px',
                            color: '#999999',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {t(c?.date)}
                          {' ↗'}
                        </span>
                      </a>
                    </>
                  ))}
                </div>{' '}
              </section>
            </>
          ) : null}
          {v.isWork ? (
            <>
              {' '}
              <section style={{ maxWidth: '1600px', margin: '0 auto', padding: '130px clamp(20px,7vw,128px) 0' }}>
                {' '}
                <div
                  style={{
                    fontFamily: 'Geist,sans-serif',
                    fontWeight: '500',
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#999999',
                  }}
                >
                  (Index) — Selected work 2022–26
                </div>{' '}
                <h1
                  data-yj-rv="mask"
                  style={{
                    margin: '16px 0 40px',
                    fontFamily: "Geist,'Geist Display',sans-serif",
                    fontWeight: '700',
                    fontSize: 'clamp(40px,5vw,80px)',
                    lineHeight: '0.95',
                    letterSpacing: '-0.01em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    color: '#f4f4f4',
                  }}
                >
                  Work
                  <span
                    style={{
                      fontFamily: "'Instrument Serif',serif",
                      fontStyle: 'italic',
                      fontWeight: '400',
                      fontStretch: '100%',
                      textTransform: 'none',
                      color: 'var(--yj-accent, #ff4d2e)',
                      fontSize: '0.36em',
                      lineHeight: '1',
                    }}
                  >
                    {t(v.wIndexCount)}
                  </span>
                </h1>{' '}
                <div
                  style={{
                    display: 'flex',
                    gap: 'clamp(24px,4vw,56px)',
                    alignItems: 'flex-end',
                    borderBottom: '2px solid #333333',
                    marginBottom: '28px',
                  }}
                >
                  {each(v.wTabs, (tb, $index) => (
                    <>
                      <button
                        className="dc-hover-d2cded96"
                        onClick={tb?.onClick}
                        style={css(
                          `all:unset;cursor:pointer;display:flex;align-items:flex-start;gap:8px;padding-bottom:14px;margin-bottom:-2px;border-bottom:2px solid ${tb?.line ?? ''};font-family:Geist,'Geist Display',sans-serif;font-weight:600;font-size:22px;line-height:1.1;text-transform:none;color:${tb?.fg ?? ''};transition:color 250ms`,
                        )}
                      >
                        {t(tb?.label, true)}
                        <span
                          style={{
                            fontFamily: 'Geist,sans-serif',
                            fontWeight: '400',
                            fontSize: '13px',
                            letterSpacing: '0.08em',
                            color: '#999999',
                          }}
                        >
                          {t(tb?.count)}
                        </span>
                      </button>
                    </>
                  ))}
                </div>{' '}
                {v.notPlay ? (
                  <>
                    {' '}
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {each(v.cats, (f, $index) => (
                        <>
                          <button
                            className="dc-hover-e246ab14"
                            onClick={f?.onClick}
                            style={css(
                              `all:unset;cursor:pointer;padding:12px 22px;border-radius:999px;border:1.5px solid ${f?.line ?? ''};background:${f?.bg ?? ''};color:${f?.fg ?? ''};font-size:17px;display:flex;align-items:baseline;gap:8px;transition:background 250ms, color 250ms;font-weight:500`,
                            )}
                          >
                            {t(f?.label, true)}
                            <span
                              style={{
                                fontFamily: 'Geist,sans-serif',
                                fontWeight: '500',
                                fontSize: '13px',
                                opacity: '0.7',
                              }}
                            >
                              {t(f?.count)}
                            </span>
                          </button>
                        </>
                      ))}
                    </div>{' '}
                  </>
                ) : null}{' '}
              </section>{' '}
              {v.notPlay ? (
                <>
                  {' '}
                  <section
                    aria-label="Selected work"
                    style={{ maxWidth: '1600px', margin: '0 auto', padding: '32px clamp(20px,7vw,128px) 0' }}
                  >
                    {' '}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,330px),1fr))',
                        gap: '24px',
                        marginBottom: '60px',
                      }}
                    >
                      {each(v.catList, (c, $index) => (
                        <>
                          <div
                            onMouseEnter={c?.hovOn}
                            onMouseLeave={c?.hovOff}
                            data-yj-rv="up"
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '16px',
                              padding: '24px',
                              background: '#141414',
                            }}
                          >
                            <div style={{ aspectRatio: '4/5', position: 'relative', overflow: 'hidden' }}>
                              <div
                                className="dc-hover-2c78ce74"
                                data-yj-px="0.08"
                                data-yj-pxmax="48"
                                style={{
                                  position: 'absolute',
                                  top: '-10%',
                                  bottom: '-10%',
                                  left: '0',
                                  right: '0',
                                  transition: 'scale 900ms cubic-bezier(.2,.8,.2,1)',
                                }}
                              >
                                {t(c?.cover)}
                              </div>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '12px',
                              }}
                            >
                              <button
                                className="dc-hover-bac46065"
                                onClick={c?.open}
                                style={{
                                  all: 'unset',
                                  cursor: 'pointer',
                                  fontFamily: "'Instrument Serif',serif",
                                  fontStyle: 'italic',
                                  fontSize: '38px',
                                  lineHeight: '1.05',
                                }}
                                type="reset"
                              >
                                {t(c?.short)}
                              </button>
                              <span style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                <span
                                  style={{
                                    padding: '6px 12px',
                                    border: '1.5px solid #666666',
                                    borderRadius: '999px',
                                    fontFamily: 'Geist,sans-serif',
                                    fontWeight: '500',
                                    fontSize: '13px',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    color: '#f4f4f4',
                                  }}
                                >
                                  {t(c?.sector)}
                                </span>
                                <span
                                  style={{
                                    padding: '6px 12px',
                                    border: '1.5px solid #333333',
                                    borderRadius: '999px',
                                    fontFamily: 'Geist,sans-serif',
                                    fontWeight: '500',
                                    fontSize: '13px',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    color: '#999999',
                                  }}
                                >
                                  {t(c?.years)}
                                </span>
                              </span>
                            </div>
                            <button
                              className="dc-hover-78f5b1a8 dc-focus-4da8c921"
                              onClick={c?.open}
                              tabIndex="0"
                              style={css(
                                `all:unset;cursor:pointer;align-self:flex-start;display:flex;align-items:center;gap:10px;background:#f4f4f4;color:#000000;border-radius:999px;padding:12px 22px;font-size:16px;font-weight:600;opacity:${c?.ctaO ?? ''};transform:translateY(${c?.ctaY ?? ''});transition:opacity 300ms, transform 420ms cubic-bezier(.2,.7,.2,1)`,
                              )}
                            >
                              Get nosy →
                            </button>
                          </div>
                        </>
                      ))}
                    </div>{' '}
                  </section>{' '}
                </>
              ) : null}{' '}
              {v.isPlay ? (
                <>
                  {' '}
                  <section
                    aria-label="Play"
                    style={{
                      maxWidth: '1600px',
                      margin: '0 auto',
                      padding: '130px clamp(20px,7vw,128px) 120px',
                      boxSizing: 'border-box',
                    }}
                  >
                    {' '}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        gap: '32px',
                      }}
                    >
                      <h2
                        data-yj-rv="up"
                        style={{
                          margin: '0',
                          fontFamily: "Geist,'Geist Display',sans-serif",
                          fontWeight: '400',
                          fontSize: 'clamp(28px,3.2vw,48px)',
                          lineHeight: '0.92',
                          textTransform: 'uppercase',
                          color: '#f4f4f4',
                        }}
                      >
                        Rough, fast,
                        <br />
                        <span
                          style={{
                            fontFamily: "'Instrument Serif',serif",
                            fontStyle: 'italic',
                            textTransform: 'none',
                            color: 'var(--yj-accent, #ff4d2e)',
                          }}
                        >
                          for fun.
                        </span>
                      </h2>
                      <p
                        style={{
                          margin: '0',
                          maxWidth: '340px',
                          fontSize: '17px',
                          lineHeight: '1.5',
                          color: '#cccccc',
                          textWrap: 'pretty',
                        }}
                      >
                        Where I test ideas without a brief. Some become real work. Most just teach me something.
                      </p>
                    </div>{' '}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        gap: '96px 4%',
                        marginTop: '96px',
                      }}
                    >
                      <figure
                        data-yj-rv="up"
                        style={{
                          margin: '120px 0 0 0%',
                          width: '50%',
                          minWidth: 'min(100%,300px)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '14px',
                        }}
                      >
                        <div
                          style={{ display: 'flex', gap: '16px', paddingTop: '12px', borderTop: '2px solid #333333' }}
                        >
                          <span
                            style={{
                              fontFamily: 'Geist,sans-serif',
                              fontWeight: '500',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              fontSize: '12px',
                              color: '#8c8c8c',
                            }}
                          >
                            Zine
                          </span>
                        </div>
                        <div
                          style={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '1.41/1',
                            overflow: 'hidden',
                            background: '#0d0d0d',
                            transform: 'rotate(0deg)',
                          }}
                        >
                          {t(v.zineEl)}
                        </div>
                        <figcaption
                          style={{
                            fontFamily: "'Instrument Serif',serif",
                            fontStyle: 'italic',
                            fontSize: '22px',
                            lineHeight: '1.05',
                            color: '#f4f4f4',
                            textWrap: 'balance',
                          }}
                        >
                          The Cost of a Trace
                        </figcaption>
                      </figure>
                      <figure
                        data-yj-rv="up"
                        style={{
                          margin: '0px 0 0 8%',
                          width: '34%',
                          minWidth: 'min(100%,300px)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '14px',
                        }}
                      >
                        <div
                          style={{ display: 'flex', gap: '16px', paddingTop: '12px', borderTop: '2px solid #333333' }}
                        >
                          <span
                            style={{
                              fontFamily: 'Geist,sans-serif',
                              fontWeight: '500',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              fontSize: '12px',
                              color: '#8c8c8c',
                            }}
                          >
                            Installation
                          </span>
                        </div>
                        <div
                          style={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '4/5',
                            overflow: 'hidden',
                            background: '#0d0d0d',
                            transform: 'rotate(-1deg)',
                          }}
                        >
                          {t(v.instEl)}
                        </div>
                        <figcaption
                          style={{
                            fontFamily: "'Instrument Serif',serif",
                            fontStyle: 'italic',
                            fontSize: '22px',
                            lineHeight: '1.05',
                            color: '#f4f4f4',
                            textWrap: 'balance',
                          }}
                        >
                          The Cost of a Trace, in the room
                          <span
                            style={{
                              display: 'block',
                              marginTop: '8px',
                              fontFamily: 'Geist,sans-serif',
                              fontStyle: 'normal',
                              fontSize: '14px',
                              lineHeight: '1.4',
                              color: '#a3a3a3',
                            }}
                          >
                            Shown at UAL Net Zero
                          </span>
                        </figcaption>
                      </figure>
                      <figure
                        data-yj-rv="up"
                        style={{
                          margin: '0px 0 0 0%',
                          width: '32%',
                          minWidth: 'min(100%,300px)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '14px',
                        }}
                      >
                        <div
                          style={{ display: 'flex', gap: '16px', paddingTop: '12px', borderTop: '2px solid #333333' }}
                        >
                          <span
                            style={{
                              fontFamily: 'Geist,sans-serif',
                              fontWeight: '500',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              fontSize: '12px',
                              color: '#8c8c8c',
                            }}
                          >
                            Video
                          </span>
                        </div>
                        <div
                          style={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '4/5',
                            overflow: 'hidden',
                            background: '#0d0d0d',
                            transform: 'rotate(1deg)',
                          }}
                        >
                          <img
                            src="assets/web/uploads/IMG_2555-frame.webp"
                            alt="3D printed clay pot"
                            loading="lazy"
                            style={{
                              position: 'absolute',
                              inset: '0',
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </div>
                        <figcaption
                          style={{
                            fontFamily: "'Instrument Serif',serif",
                            fontStyle: 'italic',
                            fontSize: '22px',
                            lineHeight: '1.05',
                            color: '#f4f4f4',
                            textWrap: 'balance',
                          }}
                        >
                          3D printed clay pots
                        </figcaption>
                      </figure>
                      <figure
                        data-yj-rv="up"
                        style={{
                          margin: '100px 0 0 14%',
                          width: '36%',
                          minWidth: 'min(100%,300px)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '14px',
                        }}
                      >
                        <div
                          style={{ display: 'flex', gap: '16px', paddingTop: '12px', borderTop: '2px solid #333333' }}
                        >
                          <span
                            style={{
                              fontFamily: 'Geist,sans-serif',
                              fontWeight: '500',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              fontSize: '12px',
                              color: '#8c8c8c',
                            }}
                          >
                            Photo
                          </span>
                        </div>
                        <div
                          style={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '1/1',
                            overflow: 'hidden',
                            background: '#0d0d0d',
                            transform: 'rotate(-1deg)',
                          }}
                        >
                          <img
                            src="assets/web/uploads/IMG_0139.webp"
                            alt="Bracket fungi on a mossy stump"
                            loading="lazy"
                            style={{
                              position: 'absolute',
                              inset: '0',
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </div>
                        <figcaption
                          style={{
                            fontFamily: "'Instrument Serif',serif",
                            fontStyle: 'italic',
                            fontSize: '22px',
                            lineHeight: '1.05',
                            color: '#f4f4f4',
                            textWrap: 'balance',
                          }}
                        >
                          Shroom spotter, field notes
                        </figcaption>
                      </figure>
                    </div>{' '}
                  </section>{' '}
                </>
              ) : null}{' '}
            </>
          ) : null}
          {v.isMove ? (
            <>
              <CaseMove mv={v.mv} mvRef={v.mvRef} nextBanner={v.nextBanner} />
            </>
          ) : null}
          {v.isAva ? (
            <>
              <CaseAva mvRef={v.mvRef} nextBanner={v.nextBanner} />
            </>
          ) : null}
          {v.isIme ? (
            <>
              <CaseBirdsong ime={v.ime} mvRef={v.mvRef} nextBanner={v.nextBanner} />
            </>
          ) : null}
          {v.isPfizer ? (
            <>
              <CasePfizer mvRef={v.mvRef} nextBanner={v.nextBanner} />
            </>
          ) : null}
          {v.isCaseStd ? (
            <>
              {' '}
              {v.isPosterCover ? (
                <>
                  {' '}
                  <div style={{ padding: '96px 12px 12px', boxSizing: 'border-box' }}>
                    {' '}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'stretch' }}>
                      <div
                        data-yj-rv="scale"
                        style={css(
                          `flex: 1 1 560px; min-width: 0; max-width: ${v.posterMaxW ?? ''}; aspect-ratio: ${v.posterAR ?? ''}; position: relative; overflow: hidden; background: ${v.posterBg ?? ''}`,
                        )}
                      >
                        {t(v.posterImg)}
                      </div>
                      <div
                        style={{
                          flex: '1 1 360px',
                          minWidth: '0',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          gap: '18px',
                          padding: '36px',
                          background: '#141414',
                          color: '#f4f4f4',
                          boxSizing: 'border-box',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            position: 'relative',
                            flex: '1',
                            minHeight: '220px',
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            gap: '12px',
                          }}
                        >
                          <div
                            aria-hidden="true"
                            style={{
                              position: 'absolute',
                              inset: '10% 15% 0',
                              borderRadius: '50%',
                              background: 'radial-gradient(closest-side, #4a2a78, #141414)',
                              filter: 'blur(10px)',
                            }}
                          />
                          <div
                            className="dc-hover-e2511a8d"
                            style={{
                              position: 'relative',
                              flex: 'none',
                              width: 'clamp(110px,12vw,142px)',
                              alignSelf: 'center',
                              aspectRatio: '9/19',
                              borderRadius: '22px',
                              overflow: 'hidden',
                              border: '6px solid #0a0a0a',
                              boxShadow: '0 0 0 1px #2a2a2a,0 20px 40px -10px rgba(0,0,0,.8)',
                              transform: 'rotate(-6deg) translateY(10px)',
                              transition: 'transform 500ms cubic-bezier(.2,1.2,.3,1)',
                            }}
                          >
                            <iframe
                              src="https://build-your-dream-2348.lovable.app/"
                              title="CRAY home screen"
                              loading="lazy"
                              tabIndex="-1"
                              style={{
                                position: 'absolute',
                                left: '0',
                                top: '0',
                                width: '300%',
                                height: '300%',
                                border: '0',
                                transform: 'scale(0.3333)',
                                transformOrigin: '0 0',
                                pointerEvents: 'none',
                                background: '#ffffff',
                              }}
                            />
                          </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                          <span
                            style={{
                              fontFamily: 'Geist,sans-serif',
                              fontWeight: '500',
                              fontSize: '13px',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                            }}
                          >
                            {'Case '}
                            {t(v.cur?.num)}
                            {' / '}
                            {t(v.caseTotal)}
                            {' — '}
                            {t(v.cur?.sector)}
                          </span>
                          <h1
                            data-yj-rv="mask"
                            style={{
                              margin: '0',
                              fontFamily: "'Instrument Serif',serif",
                              fontStyle: 'italic',
                              fontWeight: '400',
                              fontSize: 'clamp(33px,3.45vw,63px)',
                              lineHeight: '0.95',
                              textWrap: 'balance',
                              color: '#f4f4f4',
                            }}
                          >
                            {t(v.cur?.title)}
                          </h1>
                        </div>
                      </div>
                    </div>{' '}
                  </div>{' '}
                </>
              ) : null}{' '}
              {v.notPosterCover ? (
                <>
                  {' '}
                  <div style={{ padding: '12px', height: '88vh', minHeight: '540px', boxSizing: 'border-box' }}>
                    {' '}
                    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                      {' '}
                      <div
                        data-yj-px="-0.18"
                        data-yj-pxmax="80"
                        style={{ position: 'absolute', top: '-10%', bottom: '-10%', left: '0', right: '0' }}
                      >
                        {t(v.caseHero)}
                      </div>{' '}
                      <div
                        style={{
                          position: 'absolute',
                          left: '0',
                          right: '0',
                          bottom: '0',
                          padding: '0 clamp(20px,3vw,36px) 40px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '18px',
                          pointerEvents: 'none',
                          color: '#f4f4f4',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'Geist,sans-serif',
                            fontWeight: '500',
                            fontSize: '13px',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {'Case '}
                          {t(v.cur?.num)}
                          {' / '}
                          {t(v.caseTotal)}
                          {' — '}
                          {t(v.cur?.sector)}
                        </span>
                        <h1
                          data-yj-rv="mask"
                          style={{
                            margin: '0',
                            fontFamily: "'Instrument Serif',serif",
                            fontStyle: 'italic',
                            fontWeight: '400',
                            fontSize: 'clamp(36px,5.25vw,87px)',
                            lineHeight: '0.95',
                            maxWidth: '1200px',
                            textWrap: 'balance',
                            color: '#f4f4f4',
                          }}
                        >
                          {t(v.cur?.title)}
                        </h1>
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </>
              ) : null}{' '}
              <section style={{ padding: '56px 0 0', width: '100%', height: '100%' }}>
                {' '}
                <section
                  style={{
                    maxWidth: '1600px',
                    margin: '0 auto',
                    padding: '40px clamp(20px,7vw,128px) 0',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
                    gap: '40px',
                    paddingBottom: '80px',
                    paddingTop: '40px',
                  }}
                >
                  {v.cur?.hasTldr ? (
                    <>
                      <div
                        data-yj-rv="up"
                        style={{
                          gridColumn: '1/-1',
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,160px),1fr))',
                          gap: '1px',
                          background: '#2a2a2c',
                          border: '1px solid #2a2a2c',
                          borderRadius: '14px',
                          overflow: 'hidden',
                        }}
                      >
                        {each(v.cur?.tldr, (tItem, $index) => (
                          <>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px',
                                padding: '18px 20px',
                                background: '#111113',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: 'Geist,sans-serif',
                                  fontWeight: '500',
                                  fontSize: '13px',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  color: 'var(--yj-accent, #ff4d2e)',
                                }}
                              >
                                {t(tItem?.k)}
                              </span>
                              <span
                                style={{ fontSize: '16px', lineHeight: '1.4', color: '#f4f4f4', textWrap: 'pretty' }}
                              >
                                {t(tItem?.v)}
                              </span>
                            </div>
                          </>
                        ))}
                      </div>
                    </>
                  ) : null}
                  {v.resultTop ? (
                    <>
                      <div
                        data-yj-rv="up"
                        style={{
                          gridColumn: '1/-1',
                          display: 'grid',
                          gridTemplateColumns: '120px minmax(0,1fr)',
                          gap: '12px 32px',
                          alignItems: 'baseline',
                          padding: '24px 0',
                          marginBottom: '16px',
                          borderTop: '2px solid #f4f4f4',
                          borderBottom: '2px solid #333333',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'Geist,sans-serif',
                            fontWeight: '500',
                            fontSize: '13px',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'var(--yj-accent, #ff4d2e)',
                          }}
                        >
                          Result
                        </span>
                        <span
                          style={{
                            fontSize: 'clamp(20px,1.7vw,26px)',
                            lineHeight: '1.3',
                            fontWeight: '400',
                            letterSpacing: '-0.01em',
                            color: '#f4f4f4',
                            textWrap: 'pretty',
                          }}
                        >
                          {t(v.cur?.result)}
                        </span>
                      </div>
                    </>
                  ) : null}
                  {v.hasTesting ? (
                    <>
                      <div
                        data-yj-rv="up"
                        style={{
                          gridColumn: '1/-1',
                          display: 'grid',
                          gridTemplateColumns: '120px minmax(0,1fr)',
                          gap: '12px 32px',
                          alignItems: 'baseline',
                          padding: '24px 0',
                          marginBottom: '16px',
                          borderTop: '2px solid #f4f4f4',
                          borderBottom: '2px solid #333333',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'Geist,sans-serif',
                            fontWeight: '500',
                            fontSize: '13px',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'var(--yj-accent, #ff4d2e)',
                          }}
                        >
                          The question
                        </span>
                        <span
                          style={{
                            fontSize: 'clamp(20px,1.7vw,26px)',
                            lineHeight: '1.3',
                            fontWeight: '600',
                            letterSpacing: '-0.01em',
                            color: '#f4f4f4',
                            textWrap: 'pretty',
                          }}
                        >
                          {t(v.cur?.question)}
                        </span>
                      </div>
                    </>
                  ) : null}
                  {each(v.cur?.facts, (f, $index) => (
                    <>
                      <div data-yj-rv="up" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <span
                          style={{
                            fontFamily: 'Geist,sans-serif',
                            fontWeight: '500',
                            fontSize: '13px',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#999999',
                          }}
                        >
                          {t(f?.k)}
                        </span>
                        <span style={{ fontSize: '17px', lineHeight: '1.35' }}>{t(f?.v)}</span>
                      </div>
                    </>
                  ))}
                  <div
                    style={{
                      gridColumn: '1/-1',
                      display: 'flex',
                      gap: '8px 10px',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      marginTop: '8px',
                      padding: '18px 20px',
                      background: 'linear-gradient(180deg,#1a1a1d,#111113)',
                      border: '1px solid #2a2a2c',
                      borderRadius: '14px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Geist,sans-serif',
                        fontWeight: '500',
                        fontSize: '13px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--yj-accent, #ff4d2e)',
                        marginRight: '12px',
                      }}
                    >
                      Methods used
                    </span>
                    {each(v.curMethods, (m, $index) => (
                      <>
                        <span
                          style={{
                            padding: '6px 12px',
                            borderRadius: '999px',
                            background: '#1c1c1c',
                            color: '#cccccc',
                            fontSize: '14px',
                            fontWeight: '500',
                            cursor: 'default',
                          }}
                        >
                          {t(m?.name)}
                        </span>
                      </>
                    ))}
                  </div>
                </section>{' '}
              </section>{' '}
              <div
                ref={v.subNavRef}
                style={{
                  position: 'sticky',
                  top: '0',
                  transition: 'top 380ms cubic-bezier(.2,.7,.2,1)',
                  zIndex: '5',
                  padding: '110px clamp(20px,7vw,128px) 18px',
                  background: 'linear-gradient(180deg,#000000 75%,rgba(0,0,0,0))',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  flexWrap: 'wrap',
                  paddingTop: '40px',
                  paddingBottom: '40px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Geist,sans-serif',
                    fontWeight: '500',
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#999999',
                  }}
                >
                  (The story)
                </span>
                <ol
                  style={{
                    flex: '1',
                    minWidth: '0',
                    margin: '0',
                    padding: '0',
                    listStyle: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '28px',
                    flexWrap: 'nowrap',
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                  }}
                >
                  {each(v.secsNav, (s, $index) => (
                    <>
                      <li style={{ flex: '0 0 auto' }}>
                        {' '}
                        <a
                          className="dc-hover-d2cded96"
                          onClick={s?.onClick}
                          aria-current={s?.cur}
                          title={s?.phaseL}
                          style={css(
                            `cursor:pointer;display:block;padding:6px 0;text-decoration:none;color:${s?.lbl ?? ''};font-size:16px;font-weight:500;white-space:nowrap;border-bottom:1.5px solid ${s?.conn ?? ''};transition:color 300ms,border-color 300ms`,
                          )}
                        >
                          {t(s?.k)}
                        </a>{' '}
                      </li>
                    </>
                  ))}
                </ol>
                <div style={{ display: 'none' }}>
                  <div ref={v.storyBar} />
                </div>
              </div>{' '}
              <div ref={v.storyRef} style={{ display: 'flex', flexDirection: 'column' }}>
                {v.hasProto ? (
                  <>
                    <section
                      data-story={v.chS?.idx}
                      aria-label="Stray animals in India"
                      style={css(
                        `order: ${v.ordScale ?? ''}; height: 84vh; min-height: 520px; box-sizing: border-box; overflow: hidden; display: flex; flex-direction: column; justify-content: center; padding: 24px 0; background: linear-gradient(160deg,#3a2260,#1a1124); padding-top: 80px; padding-bottom: 80px; flex-wrap: wrap`,
                      )}
                    >
                      <div
                        style={{
                          width: '100%',
                          maxWidth: '1600px',
                          margin: '0 auto',
                          padding: '0 clamp(20px,7vw,128px)',
                          boxSizing: 'border-box',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '24px',
                        }}
                      >
                        <div
                          data-yj-rv="up"
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            paddingTop: '20px',
                            borderTop: '2px solid var(--yj-accent, #ff4d2e)',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'Geist,sans-serif',
                              fontWeight: '500',
                              fontSize: '13px',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              color: 'var(--yj-accent, #ff4d2e)',
                            }}
                          >
                            The scale — strays in India
                          </span>
                          <span
                            style={{
                              fontFamily: 'Geist,sans-serif',
                              fontWeight: '600',
                              fontSize: '24px',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              color: 'var(--color-bg)',
                            }}
                          >
                            Share of 7.1 crore strays
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'flex-end',
                            gap: '40px clamp(32px,6vw,96px)',
                            justifyContent: 'center',
                          }}
                        >
                          <div
                            style={{
                              flex: 'none',
                              display: 'flex',
                              flexWrap: 'wrap',
                              alignItems: 'flex-end',
                              gap: '40px clamp(32px,6vw,96px)',
                            }}
                          >
                            <div
                              data-yj-rv="up"
                              style={{ display: 'flex', alignItems: 'flex-end', gap: 'clamp(16px,3vw,40px)' }}
                            >
                              <div
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
                              >
                                <img
                                  className="dc-hover-604ddcdf"
                                  src="assets/web/assets/cray/sticker-dog.webp"
                                  alt="Indian street dog sticker"
                                  style={{
                                    width: 'clamp(120px,min(22.9vw,15vh),333px)',
                                    height: 'auto',
                                    display: 'block',
                                    transform: 'rotate(-4deg)',
                                    filter:
                                      'drop-shadow(4px 0 0 #f4f4f4) drop-shadow(-4px 0 0 #f4f4f4) drop-shadow(0 4px 0 #f4f4f4) drop-shadow(0 -4px 0 #f4f4f4) drop-shadow(0 14px 22px rgba(0,0,0,.55))',
                                    transition: 'transform 400ms cubic-bezier(.2,.7,.2,1)',
                                  }}
                                />
                                <div
                                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}
                                >
                                  <span
                                    style={{
                                      fontFamily: "Geist,'Geist Display',sans-serif",
                                      fontSize: 'clamp(36px,4vw,64px)',
                                      lineHeight: '1',
                                      color: '#f4f4f4',
                                    }}
                                  >
                                    6.2 crore
                                  </span>
                                  <span style={{ color: 'var(--yj-accent, #ff4d2e)', fontSize: '13px' }}>Dogs 87%</span>
                                  <span
                                    style={{
                                      fontFamily: 'Geist,sans-serif',
                                      fontWeight: '500',
                                      fontSize: '13px',
                                      letterSpacing: '0.08em',
                                      textTransform: 'uppercase',
                                      color: '#999999',
                                    }}
                                  >
                                    Street dogs · 62M
                                  </span>
                                </div>
                              </div>
                              <div
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
                              >
                                <img
                                  className="dc-hover-9e8431c8"
                                  src="assets/web/assets/cray/sticker-cat.webp"
                                  alt="Ginger street cat sticker"
                                  style={{
                                    width: 'clamp(58px,min(11vw,7.2vh),160px)',
                                    height: 'auto',
                                    display: 'block',
                                    transform: 'rotate(6deg)',
                                    filter:
                                      'drop-shadow(4px 0 0 #f4f4f4) drop-shadow(-4px 0 0 #f4f4f4) drop-shadow(0 4px 0 #f4f4f4) drop-shadow(0 -4px 0 #f4f4f4) drop-shadow(0 14px 22px rgba(0,0,0,.55))',
                                    transition: 'transform 400ms cubic-bezier(.2,.7,.2,1)',
                                  }}
                                />
                                <div
                                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}
                                >
                                  <span
                                    style={{
                                      fontFamily: "Geist,'Geist Display',sans-serif",
                                      fontSize: 'clamp(24px,2.4vw,40px)',
                                      lineHeight: '1',
                                      color: '#f4f4f4',
                                    }}
                                  >
                                    91 lakh
                                  </span>
                                  <span style={{ color: '#f4f4f4', fontSize: '13px' }}>Cats 13%</span>
                                  <span
                                    style={{
                                      fontFamily: 'Geist,sans-serif',
                                      fontWeight: '500',
                                      fontSize: '13px',
                                      letterSpacing: '0.08em',
                                      textTransform: 'uppercase',
                                      color: '#999999',
                                    }}
                                  >
                                    Street cats · 9.1M
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p
                            data-yj-rv="up"
                            style={{
                              flex: '1 1 320px',
                              minWidth: '0',
                              margin: '0',
                              fontSize: 'clamp(20px,2vw,32px)',
                              lineHeight: '1.3',
                              fontWeight: '400',
                              letterSpacing: '-0.01em',
                              maxWidth: '620px',
                              color: '#f4f4f4',
                              textWrap: 'pretty',
                              height: '98px',
                            }}
                          >
                            {t(v.cur?.summary)}
                          </p>
                        </div>
                      </div>
                    </section>
                    <section
                      data-story={v.chR?.idx}
                      aria-label="CRAY research"
                      style={css(`order:${v.ordResearch ?? ''};padding:64px 0 120px;border-top:1px solid #222222`)}
                    >
                      {' '}
                      <div
                        style={{
                          maxWidth: '1600px',
                          margin: '0 auto',
                          padding: '40px clamp(20px,7vw,128px) 0',
                          boxSizing: 'border-box',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '40px',
                        }}
                      >
                        <div
                          data-yj-rv="up"
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            gap: '16px 56px',
                            paddingTop: '24px',
                            borderTop: '2px solid #f4f4f4',
                          }}
                        >
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', minWidth: '0' }}>
                            <span
                              style={{
                                fontFamily: 'Geist,sans-serif',
                                fontWeight: '500',
                                fontSize: '13px',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                color: 'var(--yj-accent, #ff4d2e)',
                              }}
                            >
                              {'RESEARCH — SURVEY OF 50 PEOPLE '}
                            </span>
                            <h2
                              style={{
                                margin: '0',
                                fontFamily: "'Instrument Serif',serif",
                                fontStyle: 'italic',
                                fontWeight: '400',
                                fontSize: 'clamp(33px,3.75vw,63px)',
                                lineHeight: '0.95',
                                color: '#f4f4f4',
                                maxWidth: '900px',
                                textWrap: 'balance',
                              }}
                            >
                              People feed strays. Few know how to care for them.
                            </h2>
                          </div>
                          <p
                            style={{
                              margin: '0',
                              fontSize: '17px',
                              lineHeight: '1.5',
                              color: '#999999',
                              maxWidth: '460px',
                              textWrap: 'pretty',
                            }}
                          >
                            Two problems surfaced: pets abandoned after adoption, and infections that go untreated.
                          </p>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'stretch' }}>
                          <div
                            data-yj-rv="up"
                            style={{
                              flex: '1 1 260px',
                              minWidth: '0',
                              display: 'flex',
                              flexDirection: 'column',
                              background: 'var(--yj-accent, #ff4d2e)',
                              color: '#0a0a0a',
                              borderRadius: '14px',
                              overflow: 'hidden',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'baseline',
                                gap: '12px',
                                padding: '14px 20px',
                                borderBottom: '1px solid rgba(0,0,0,.18)',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: 'Geist,sans-serif',
                                  fontWeight: '500',
                                  fontSize: '13px',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  color: '#0a0a0a',
                                }}
                              >
                                Infections
                              </span>
                              <span
                                style={{
                                  fontFamily: 'Geist,sans-serif',
                                  fontWeight: '500',
                                  fontSize: '13px',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  color: '#0a0a0a',
                                }}
                              >
                                Strays
                              </span>
                            </div>
                            <div
                              style={{
                                flex: '1',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                gap: '18px',
                                padding: '22px 20px 24px',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "Geist,'Geist Display',sans-serif",
                                  fontSize: 'clamp(56px,6vw,96px)',
                                  lineHeight: '0.9',
                                  color: '#0a0a0a',
                                }}
                              >
                                1 in 5
                              </span>
                              <p
                                style={{
                                  margin: '0',
                                  fontSize: '17px',
                                  lineHeight: '1.45',
                                  color: '#0a0a0a',
                                  textWrap: 'pretty',
                                }}
                              >
                                strays suffers from some kind of infection.
                              </p>
                            </div>
                          </div>
                          <div
                            className="dc-hover-7e5f5340"
                            data-yj-rv="up"
                            style={{
                              flex: '1 1 300px',
                              minWidth: '0',
                              display: 'flex',
                              flexDirection: 'column',
                              background: 'linear-gradient(180deg,#1a1a1d,#111113)',
                              border: '1px solid #2a2a2c',
                              borderRadius: '14px',
                              overflow: 'hidden',
                              transition:
                                'transform 400ms cubic-bezier(.2,.7,.2,1), border-color 300ms, box-shadow 400ms',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'baseline',
                                gap: '12px',
                                padding: '14px 20px',
                                borderBottom: '1px solid #262626',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: 'Geist,sans-serif',
                                  fontWeight: '500',
                                  fontSize: '13px',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  color: '#f4f4f4',
                                }}
                              >
                                Sponsorship
                              </span>
                              <span
                                style={{
                                  fontFamily: 'Geist,sans-serif',
                                  fontWeight: '500',
                                  fontSize: '13px',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  color: '#8c8c8c',
                                  textAlign: 'right',
                                }}
                              >
                                23% aware
                              </span>
                            </div>
                            <div
                              style={{
                                flex: '1',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '18px',
                                padding: '22px 20px 24px',
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                                <div
                                  className="dc-hover-927fc107"
                                  style={css(
                                    `flex:none;width:120px;height:120px;border-radius:50%;background:${v.crayRes?.sponsor?.bg ?? ''};display:flex;align-items:center;justify-content:center;transition:transform 500ms cubic-bezier(.2,1.4,.3,1)`,
                                  )}
                                >
                                  <span
                                    style={{
                                      width: '88px',
                                      height: '88px',
                                      borderRadius: '50%',
                                      background: '#0f0c13',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      fontFamily: "Geist,'Geist Display',sans-serif",
                                      fontSize: '24px',
                                      color: '#f4f4f4',
                                    }}
                                  >
                                    {t(v.crayRes?.sponsor?.yes, true)}%
                                  </span>
                                </div>
                                <p
                                  style={{
                                    margin: '0',
                                    fontSize: '16px',
                                    lineHeight: '1.5',
                                    color: '#cccccc',
                                    textWrap: 'pretty',
                                  }}
                                >
                                  of the 77% who didn’t know would sponsor an animal, once told how.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="dc-hover-7e5f5340"
                            data-yj-rv="up"
                            style={{
                              flex: '1 1 360px',
                              minWidth: '0',
                              display: 'flex',
                              flexDirection: 'column',
                              background: 'linear-gradient(180deg,#1a1a1d,#111113)',
                              border: '1px solid #2a2a2c',
                              borderRadius: '14px',
                              overflow: 'hidden',
                              transition:
                                'transform 400ms cubic-bezier(.2,.7,.2,1), border-color 300ms, box-shadow 400ms',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'baseline',
                                gap: '12px',
                                padding: '14px 20px',
                                borderBottom: '1px solid #262626',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: 'Geist,sans-serif',
                                  fontWeight: '500',
                                  fontSize: '13px',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  color: '#f4f4f4',
                                }}
                              >
                                {'Rescue centres & hospitals'}
                              </span>
                              <span
                                style={{
                                  fontFamily: 'Geist,sans-serif',
                                  fontWeight: '500',
                                  fontSize: '13px',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  color: '#8c8c8c',
                                  textAlign: 'right',
                                }}
                              >
                                Access
                              </span>
                            </div>
                            <div
                              style={{
                                flex: '1',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '18px',
                                padding: '22px 20px 24px',
                              }}
                            >
                              <h3
                                style={{
                                  margin: '0',
                                  fontSize: '22px',
                                  fontWeight: '400',
                                  lineHeight: '1.2',
                                  color: '#f4f4f4',
                                }}
                              >
                                Help exists, but it’s hard to find.
                              </h3>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                                <div
                                  className="dc-hover-927fc107"
                                  style={css(
                                    `flex:none;width:96px;height:96px;border-radius:50%;background:${v.crayRes?.reach?.bg ?? ''};display:flex;align-items:center;justify-content:center;transition:transform 500ms cubic-bezier(.2,1.4,.3,1)`,
                                  )}
                                >
                                  <span
                                    style={{
                                      width: '70px',
                                      height: '70px',
                                      borderRadius: '50%',
                                      background: '#0f0c13',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      fontFamily: "Geist,'Geist Display',sans-serif",
                                      fontSize: '18px',
                                      color: '#f4f4f4',
                                    }}
                                  >
                                    {t(v.crayRes?.reach?.yes, true)}%
                                  </span>
                                </div>
                                <p
                                  style={{
                                    margin: '0',
                                    fontSize: '16px',
                                    lineHeight: '1.5',
                                    color: '#cccccc',
                                    textWrap: 'pretty',
                                  }}
                                >
                                  find it hard to reach one
                                </p>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                                <div
                                  className="dc-hover-927fc107"
                                  style={css(
                                    `flex:none;width:96px;height:96px;border-radius:50%;background:${v.crayRes?.aware?.bg ?? ''};display:flex;align-items:center;justify-content:center;transition:transform 500ms cubic-bezier(.2,1.4,.3,1)`,
                                  )}
                                >
                                  <span
                                    style={{
                                      width: '70px',
                                      height: '70px',
                                      borderRadius: '50%',
                                      background: '#0f0c13',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      fontFamily: "Geist,'Geist Display',sans-serif",
                                      fontSize: '18px',
                                      color: '#f4f4f4',
                                    }}
                                  >
                                    {t(v.crayRes?.aware?.yes, true)}%
                                  </span>
                                </div>
                                <p
                                  style={{
                                    margin: '0',
                                    fontSize: '16px',
                                    lineHeight: '1.5',
                                    color: '#cccccc',
                                    textWrap: 'pretty',
                                  }}
                                >
                                  don’t know where one is
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="dc-hover-7e5f5340"
                            data-yj-rv="up"
                            style={{
                              flex: '2 1 560px',
                              minWidth: '0',
                              display: 'flex',
                              flexDirection: 'column',
                              background: 'linear-gradient(180deg,#1a1a1d,#111113)',
                              border: '1px solid #2a2a2c',
                              borderRadius: '14px',
                              overflow: 'hidden',
                              transition:
                                'transform 400ms cubic-bezier(.2,.7,.2,1), border-color 300ms, box-shadow 400ms',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'baseline',
                                gap: '12px',
                                padding: '14px 20px',
                                borderBottom: '1px solid #262626',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: 'Geist,sans-serif',
                                  fontWeight: '500',
                                  fontSize: '13px',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  color: '#f4f4f4',
                                }}
                              >
                                How people contribute
                              </span>
                              <span
                                style={{
                                  fontFamily: 'Geist,sans-serif',
                                  fontWeight: '500',
                                  fontSize: '13px',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  color: '#8c8c8c',
                                  textAlign: 'right',
                                }}
                              >
                                Common vs rare
                              </span>
                            </div>
                            <div
                              style={{
                                flex: '1',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '18px',
                                padding: '22px 20px 24px',
                              }}
                            >
                              <h3
                                style={{
                                  margin: '0',
                                  fontSize: '24px',
                                  fontWeight: '400',
                                  lineHeight: '1.15',
                                  color: '#f4f4f4',
                                }}
                              >
                                {'Water and food, yes. '}
                                <span style={{ color: 'var(--yj-accent, #ff4d2e)' }}>Medical care, rarely.</span>
                              </h3>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <div
                                  style={{
                                    display: 'flex',
                                    gap: '16px',
                                    fontFamily: 'Geist,sans-serif',
                                    fontWeight: '500',
                                    fontSize: '13px',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    color: '#8c8c8c',
                                  }}
                                >
                                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span
                                      style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: '#f4f4f4',
                                      }}
                                    />
                                    Common
                                  </span>
                                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span
                                      style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: 'var(--yj-accent, #ff4d2e)',
                                      }}
                                    />
                                    Rare
                                  </span>
                                </div>
                                <div
                                  role="img"
                                  aria-label="Water 82.6%, feed 82.6%, shelter 56.6%, play 7%, vaccinate 30.4%, check-ups 21.7%, neuter 8.7%"
                                  style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(7,minmax(0,1fr))',
                                    gap: '10px',
                                    alignItems: 'end',
                                    height: '200px',
                                    paddingTop: '24px',
                                  }}
                                >
                                  {each(v.crayRes?.contrib, (b, $index) => (
                                    <>
                                      <div
                                        onMouseEnter={b?.on}
                                        onMouseLeave={b?.off}
                                        style={css(
                                          `height:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;gap:6px;min-width:0;opacity:${b?.op ?? ''};transition:opacity 250ms;cursor:default`,
                                        )}
                                      >
                                        <span
                                          style={css(
                                            `font-family:Geist,sans-serif;font-weight:500;font-size:13px;color:#f4f4f4;transform:translateY(${b?.ty ?? ''});transition:transform 300ms cubic-bezier(.2,1.4,.3,1)`,
                                          )}
                                        >
                                          {t(b?.v)}
                                        </span>
                                        <span
                                          style={css(
                                            `transform-origin:bottom;transform:scaleY(${b?.sy ?? ''});transition:transform 350ms cubic-bezier(.2,1.4,.3,1);width:100%;max-width:44px;height:${b?.hgt ?? ''};border-radius:8px 8px 3px 3px;background:${b?.c ?? ''}`,
                                          )}
                                        />
                                      </div>
                                    </>
                                  ))}
                                </div>
                                <div
                                  style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(7,minmax(0,1fr))',
                                    gap: '10px',
                                    borderTop: '1px solid #262626',
                                    paddingTop: '10px',
                                  }}
                                >
                                  {each(v.crayRes?.contrib, (b, $index) => (
                                    <>
                                      <span
                                        style={{
                                          fontSize: '13px',
                                          color: '#999999',
                                          textAlign: 'center',
                                          overflowWrap: 'anywhere',
                                        }}
                                      >
                                        {t(b?.k)}
                                      </span>
                                    </>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{' '}
                    </section>
                    {v.hasProtoSec ? (
                      <>
                        <section
                          data-story={v.chPr?.idx}
                          aria-label="Living prototype"
                          style={css(
                            `order:${v.ordProto ?? ''};padding:64px 0 120px;border-top:1px solid #222222;overflow:hidden`,
                          )}
                        >
                          {' '}
                          <div
                            style={{
                              maxWidth: '1600px',
                              margin: '0 auto',
                              padding: '0 clamp(20px,7vw,128px) 56px',
                              boxSizing: 'border-box',
                            }}
                          >
                            {' '}
                            <div
                              data-yj-rv="up"
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '18px',
                                paddingTop: '24px',
                                borderTop: '2px solid #f4f4f4',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: 'Geist,sans-serif',
                                  fontWeight: '500',
                                  fontSize: '13px',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  color: 'var(--yj-accent, #ff4d2e)',
                                }}
                              >
                                {t(v.chPr?.n)}
                                {' / '}
                                {t(v.chTotal)}
                                {' — Living prototype · every screen is live'}
                              </span>
                              <h2
                                style={{
                                  margin: '0',
                                  fontFamily: "'Instrument Serif',serif",
                                  fontStyle: 'italic',
                                  fontWeight: '400',
                                  fontSize: 'clamp(33px,3.75vw,63px)',
                                  lineHeight: '0.95',
                                  color: '#f4f4f4',
                                }}
                              >
                                Try CRAY yourself
                              </h2>
                            </div>{' '}
                          </div>{' '}
                          <div
                            style={{
                              position: 'relative',
                              isolation: 'isolate',
                              zIndex: '0',
                              height: '560px',
                              maxWidth: '1600px',
                              margin: '0 auto',
                            }}
                          >
                            {' '}
                            {each(v.protoScreens, (sc, $index) => (
                              <>
                                {' '}
                                <a
                                  href={sc?.href}
                                  target="_blank"
                                  rel="noopener"
                                  aria-label={`Open ${sc?.k ?? ''}`}
                                  style={css(
                                    `position:absolute;left:50%;top:0;width:243px;height:494px;margin-left:-121px;box-sizing:border-box;padding:11px;border-radius:46px;background:#0d0d0d;border:1.5px solid ${sc?.line ?? ''};box-shadow:inset 0 0 0 1px #2a2a2a,0 40px 80px -30px rgba(0,0,0,0.9);display:block;transform:${sc?.tf ?? ''};opacity:${sc?.op ?? ''};z-index:${sc?.z ?? ''};filter:${sc?.fx ?? ''};transition:transform 520ms cubic-bezier(.2,1.25,.3,1),opacity 380ms ease,filter 380ms ease,border-color 300ms`,
                                  )}
                                >
                                  {' '}
                                  <span
                                    aria-hidden="true"
                                    style={{
                                      position: 'absolute',
                                      left: '-4px',
                                      top: '96px',
                                      width: '3px',
                                      height: '26px',
                                      background: '#2a2a2a',
                                      borderRadius: '2px 0 0 2px',
                                    }}
                                  />{' '}
                                  <span
                                    aria-hidden="true"
                                    style={{
                                      position: 'absolute',
                                      left: '-4px',
                                      top: '136px',
                                      width: '3px',
                                      height: '44px',
                                      background: '#2a2a2a',
                                      borderRadius: '2px 0 0 2px',
                                    }}
                                  />{' '}
                                  <span
                                    aria-hidden="true"
                                    style={{
                                      position: 'absolute',
                                      left: '-4px',
                                      top: '188px',
                                      width: '3px',
                                      height: '44px',
                                      background: '#2a2a2a',
                                      borderRadius: '2px 0 0 2px',
                                    }}
                                  />{' '}
                                  <span
                                    aria-hidden="true"
                                    style={{
                                      position: 'absolute',
                                      right: '-4px',
                                      top: '150px',
                                      width: '3px',
                                      height: '66px',
                                      background: '#2a2a2a',
                                      borderRadius: '0 2px 2px 0',
                                    }}
                                  />{' '}
                                  <span
                                    aria-hidden="true"
                                    style={{
                                      position: 'absolute',
                                      top: '20px',
                                      left: '50%',
                                      translate: '-50% 0',
                                      width: '68px',
                                      height: '20px',
                                      borderRadius: '999px',
                                      background: '#000000',
                                      zIndex: '3',
                                    }}
                                  />{' '}
                                  <span
                                    style={{
                                      display: 'block',
                                      width: '218px',
                                      height: '469px',
                                      borderRadius: '35px',
                                      overflow: 'hidden',
                                      background: '#ffffff',
                                      position: 'relative',
                                    }}
                                  >
                                    {' '}
                                    <span
                                      aria-hidden="true"
                                      style={{
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        right: '0',
                                        height: '38px',
                                        zIndex: '2',
                                        background: '#ffffff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '2px 20px 0 26px',
                                        boxSizing: 'border-box',
                                        fontFamily: "-apple-system,'SF Pro Text',system-ui,sans-serif",
                                        fontSize: '11.5px',
                                        fontWeight: '600',
                                        color: '#000000',
                                        letterSpacing: '-0.01em',
                                      }}
                                    >
                                      <span>9:41</span>
                                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <svg width="15" height="9" viewBox="0 0 17 10.5" fill="#000000">
                                          <rect x="0" y="7" width="3" height="3.5" rx="0.7" />
                                          <rect x="4.5" y="5" width="3" height="5.5" rx="0.7" />
                                          <rect x="9" y="2.5" width="3" height="8" rx="0.7" />
                                          <rect x="13.5" y="0" width="3" height="10.5" rx="0.7" />
                                        </svg>
                                        <svg width="13" height="9" viewBox="0 0 15 11" fill="#000000">
                                          <path d="M7.5 2.2c2.1 0 4 .8 5.5 2.1l1.2-1.2C12.4 1.5 10 .5 7.5.5S2.6 1.5.8 3.1L2 4.3c1.5-1.3 3.4-2.1 5.5-2.1Zm0 3.3c1.2 0 2.3.4 3.2 1.2l1.2-1.2C10.7 4.4 9.2 3.8 7.5 3.8S4.3 4.4 3.1 5.5l1.2 1.2c.9-.8 2-1.2 3.2-1.2Zm0 3.3c-.5 0-.9.2-1.3.5L7.5 10.6l1.3-1.3c-.4-.3-.8-.5-1.3-.5Z" />
                                        </svg>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
                                          <span
                                            style={{
                                              width: '21px',
                                              height: '10px',
                                              border: '1px solid rgba(0,0,0,0.4)',
                                              borderRadius: '3px',
                                              boxSizing: 'border-box',
                                              padding: '1px',
                                              display: 'block',
                                            }}
                                          >
                                            <span
                                              style={{
                                                display: 'block',
                                                width: '80%',
                                                height: '100%',
                                                background: '#000000',
                                                borderRadius: '1.5px',
                                              }}
                                            />
                                          </span>
                                          <span
                                            style={{
                                              width: '1.5px',
                                              height: '4px',
                                              background: 'rgba(0,0,0,0.4)',
                                              borderRadius: '0 1px 1px 0',
                                              display: 'block',
                                            }}
                                          />
                                        </span>
                                      </span>
                                    </span>{' '}
                                    <span
                                      aria-hidden="true"
                                      style={{
                                        position: 'absolute',
                                        bottom: '7px',
                                        left: '50%',
                                        translate: '-50% 0',
                                        width: '76px',
                                        height: '4px',
                                        borderRadius: '999px',
                                        background: '#000000',
                                        zIndex: '2',
                                      }}
                                    />{' '}
                                    <iframe
                                      src={asset(sc?.href)}
                                      title={sc?.k}
                                      loading="lazy"
                                      tabIndex="-1"
                                      style={{
                                        position: 'absolute',
                                        top: '38px',
                                        left: '0',
                                        width: '390px',
                                        height: '845px',
                                        border: '0',
                                        transform: 'scale(0.559)',
                                        transformOrigin: '0 0',
                                        pointerEvents: 'none',
                                        background: '#ffffff',
                                      }}
                                    />{' '}
                                  </span>{' '}
                                </a>{' '}
                              </>
                            ))}{' '}
                          </div>
                          <p
                            style={{
                              margin: '0',
                              fontSize: '13px',
                              lineHeight: '1.5',
                              color: '#cccccc',
                              textWrap: 'pretty',
                              width: '100%',
                              alignSelf: 'center',
                              textAlign: 'center',
                              padding: '16px 0 0',
                              paddingTop: '0px',
                            }}
                          >
                            Tap a screen to open it.
                          </p>
                          <div
                            style={{
                              maxWidth: '1600px',
                              margin: '0 auto',
                              padding: '8px clamp(20px,7vw,128px) 0',
                              boxSizing: 'border-box',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: '24px',
                              flexWrap: 'wrap',
                            }}
                          >
                            <span
                              style={{ display: 'flex', alignItems: 'baseline', gap: '16px', flexWrap: 'wrap-reverse' }}
                            >
                              <span
                                style={{
                                  fontFamily: "'Instrument Serif',serif",
                                  fontStyle: 'italic',
                                  fontSize: 'clamp(32px,3vw,48px)',
                                  lineHeight: '1',
                                  color: '#f4f4f4',
                                }}
                              >
                                {t(v.protoNow?.k)}
                              </span>
                              <span
                                style={{
                                  fontFamily: 'Geist,sans-serif',
                                  fontWeight: '500',
                                  fontSize: '13px',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  color: 'var(--yj-accent, #ff4d2e)',
                                }}
                              >
                                {t(v.protoNow?.n)}
                                {' / '}
                                {t(v.protoCount)}
                              </span>
                            </span>
                            <div style={{ display: 'flex', gap: '6px' }}>
                              {each(v.protoScreens, (sc, $index) => (
                                <>
                                  <button
                                    onClick={sc?.go}
                                    aria-label={`Show ${sc?.k ?? ''}`}
                                    style={css(
                                      `all:unset;cursor:pointer;width:${sc?.dotW ?? ''};height:4px;background:${sc?.dot ?? ''};transition:width 400ms cubic-bezier(.2,.8,.2,1),background 300ms`,
                                    )}
                                  />
                                </>
                              ))}
                            </div>
                            <a
                              className="dc-hover-78f5b1a8"
                              href={v.protoUrl}
                              target="_blank"
                              rel="noopener"
                              data-yj-mag="1"
                              style={{
                                padding: '14px 26px',
                                borderRadius: '999px',
                                background: '#f4f4f4',
                                color: '#000000',
                                fontSize: '14px',
                                fontWeight: '500',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              Open full prototype ↗
                            </a>
                          </div>{' '}
                        </section>
                      </>
                    ) : null}
                  </>
                ) : null}
                <section style={{ display: 'contents' }}>
                  {' '}
                  <div style={{ display: 'contents' }}>
                    {' '}
                    {each(v.secsFull, (x, $index) => (
                      <>
                        {' '}
                        <div
                          data-story={x?.idx}
                          style={css(`order:${x?.idx ?? ''};box-sizing:border-box;border-top:1px solid #222222`)}
                        >
                          {' '}
                          {x?.isField ? (
                            <>
                              {' '}
                              <div
                                style={{
                                  padding: '96px clamp(20px,7vw,128px)',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '40px',
                                }}
                              >
                                <div
                                  style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-end',
                                    gap: '24px 56px',
                                  }}
                                >
                                  <div
                                    style={{
                                      flex: '1 1 420px',
                                      minWidth: '0',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '18px',
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontFamily: 'Geist,sans-serif',
                                        fontWeight: '500',
                                        fontSize: '13px',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        color: 'var(--yj-accent, #ff4d2e)',
                                      }}
                                    >
                                      {t(x?.n)}
                                      {' / '}
                                      {t(v.chTotal)}
                                      {' — '}
                                      {t(x?.phaseL)}
                                    </span>
                                    <h2
                                      data-yj-rv="up"
                                      style={{
                                        margin: '0',
                                        fontSize: 'clamp(28px,3vw,48px)',
                                        lineHeight: '1.04',
                                        letterSpacing: '-0.02em',
                                        fontWeight: '600',
                                        color: '#f4f4f4',
                                        textWrap: 'balance',
                                      }}
                                    >
                                      {t(x?.h)}
                                    </h2>
                                  </div>
                                  <p
                                    data-yj-rv="up"
                                    style={{
                                      flex: '1 1 380px',
                                      minWidth: '0',
                                      margin: '0',
                                      fontSize: '18px',
                                      lineHeight: '1.55',
                                      color: '#cccccc',
                                      maxWidth: '560px',
                                      textWrap: 'pretty',
                                    }}
                                  >
                                    {t(x?.p)}
                                  </p>
                                </div>
                                <div
                                  style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
                                    gridAutoFlow: 'dense',
                                    gap: '14px',
                                  }}
                                >
                                  {each(x?.fImgs, (fi, $index) => (
                                    <>
                                      <figure
                                        data-yj-rv="scale"
                                        onClick={fi?.open}
                                        style={css(
                                          `margin:0;grid-column:${fi?.col ?? ''};position:relative;aspect-ratio:${fi?.ar ?? ''};overflow:hidden;border-radius:20px;background:#141414;cursor:zoom-in`,
                                        )}
                                      >
                                        {' '}
                                        <img
                                          className="dc-hover-5cb87b1a"
                                          src={asset(fi?.src)}
                                          alt={fi?.k}
                                          loading="lazy"
                                          style={{
                                            position: 'absolute',
                                            inset: '0',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 700ms cubic-bezier(.2,.8,.2,1)',
                                          }}
                                        />{' '}
                                        <figcaption
                                          data-ink="light"
                                          style={{ position: 'absolute', left: '12px', bottom: '12px', right: '12px' }}
                                        >
                                          <span
                                            style={{
                                              display: 'inline-block',
                                              padding: '6px 10px',
                                              borderRadius: '999px',
                                              background: 'rgba(0,0,0,.6)',
                                              color: '#ffffff',
                                              fontSize: '13px',
                                            }}
                                          >
                                            {t(fi?.k)}
                                          </span>
                                        </figcaption>{' '}
                                      </figure>
                                    </>
                                  ))}
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 48px' }}>
                                  <div
                                    style={{
                                      flex: '2 1 420px',
                                      minWidth: '0',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '12px',
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontFamily: 'Geist,sans-serif',
                                        fontWeight: '500',
                                        fontSize: '13px',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        color: '#8c8c8c',
                                      }}
                                    >
                                      {'Primary research · '}
                                      {t(x?.pCount)}
                                    </span>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                      {each(x?.primary, (m, $index) => (
                                        <>
                                          <span
                                            style={{
                                              padding: '8px 14px',
                                              borderRadius: '999px',
                                              background: '#1c1c1c',
                                              color: '#f4f4f4',
                                              fontSize: '15px',
                                            }}
                                          >
                                            {t(m)}
                                          </span>
                                        </>
                                      ))}
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      flex: '1 1 300px',
                                      minWidth: '0',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '12px',
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontFamily: 'Geist,sans-serif',
                                        fontWeight: '500',
                                        fontSize: '13px',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        color: '#8c8c8c',
                                      }}
                                    >
                                      {'Secondary research · '}
                                      {t(x?.sCount)}
                                    </span>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                      {each(x?.secondary, (m, $index) => (
                                        <>
                                          <span
                                            style={{
                                              padding: '8px 14px',
                                              borderRadius: '999px',
                                              background: '#1c1c1c',
                                              color: '#cccccc',
                                              fontSize: '15px',
                                            }}
                                          >
                                            {t(m)}
                                          </span>
                                        </>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>{' '}
                            </>
                          ) : null}{' '}
                          {x?.isCover ? (
                            <>
                              {' '}
                              <div
                                style={{
                                  position: 'relative',
                                  minHeight: '92vh',
                                  display: 'flex',
                                  alignItems: 'flex-end',
                                  overflow: 'hidden',
                                }}
                              >
                                <img
                                  src={asset(x?.cover)}
                                  alt={x?.coverAlt}
                                  loading="lazy"
                                  style={{
                                    position: 'absolute',
                                    inset: '0',
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: '40% 50%',
                                  }}
                                />
                                <div
                                  aria-hidden="true"
                                  style={{
                                    position: 'absolute',
                                    inset: '0',
                                    background:
                                      'linear-gradient(90deg,rgba(0,0,0,.88) 0%,rgba(0,0,0,.6) 45%,rgba(0,0,0,0) 75%),linear-gradient(0deg,rgba(0,0,0,.7),rgba(0,0,0,0) 45%)',
                                  }}
                                />
                                <div
                                  style={{
                                    position: 'relative',
                                    boxSizing: 'border-box',
                                    padding: '96px clamp(20px,7vw,128px)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '22px',
                                    maxWidth: '760px',
                                    width: '100%',
                                  }}
                                >
                                  <span
                                    style={{
                                      fontFamily: 'Geist,sans-serif',
                                      fontWeight: '500',
                                      fontSize: '13px',
                                      letterSpacing: '0.08em',
                                      textTransform: 'uppercase',
                                      color: 'var(--yj-accent, #ff4d2e)',
                                    }}
                                  >
                                    {t(x?.n)}
                                    {' / '}
                                    {t(v.chTotal)}
                                    {' — '}
                                    {t(x?.phaseL)}
                                  </span>
                                  <h2
                                    data-yj-rv="up"
                                    style={{
                                      margin: '0',
                                      fontSize: 'clamp(30px,3.6vw,56px)',
                                      lineHeight: '1.02',
                                      letterSpacing: '-0.02em',
                                      fontWeight: '600',
                                      color: '#ffffff',
                                      textWrap: 'balance',
                                    }}
                                  >
                                    {t(x?.h)}
                                  </h2>
                                  <p
                                    data-yj-rv="up"
                                    style={{
                                      margin: '0',
                                      fontSize: '18px',
                                      lineHeight: '1.55',
                                      color: '#e6e6e6',
                                      textWrap: 'pretty',
                                    }}
                                  >
                                    {t(x?.p)}
                                  </p>
                                  {each(x?.ww, (w, $index) => (
                                    <>
                                      <div
                                        data-yj-rv="up"
                                        style={{
                                          display: 'flex',
                                          flexWrap: 'wrap',
                                          gap: '8px 24px',
                                          paddingTop: '18px',
                                          borderTop: '1px solid rgba(255,255,255,.25)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            flex: '0 0 110px',
                                            fontFamily: 'Geist,sans-serif',
                                            fontWeight: '500',
                                            fontSize: '13px',
                                            letterSpacing: '0.08em',
                                            textTransform: 'uppercase',
                                            color: 'var(--yj-accent, #ff4d2e)',
                                            paddingTop: '4px',
                                          }}
                                        >
                                          {t(w?.k)}
                                        </span>
                                        <span
                                          style={{
                                            flex: '1 1 260px',
                                            minWidth: '0',
                                            fontSize: '18px',
                                            lineHeight: '1.5',
                                            color: '#ffffff',
                                            textWrap: 'pretty',
                                          }}
                                        >
                                          {t(w?.v)}
                                        </span>
                                      </div>
                                    </>
                                  ))}
                                </div>
                              </div>{' '}
                              {x?.hasJourney ? (
                                <>
                                  {' '}
                                  <div
                                    style={{
                                      padding: '72px 0 96px',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '24px',
                                    }}
                                  >
                                    <div
                                      style={{
                                        padding: '0 clamp(20px,7vw,128px)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-end',
                                        gap: '16px',
                                        flexWrap: 'wrap',
                                      }}
                                    >
                                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        <span
                                          style={{
                                            fontFamily: 'Geist,sans-serif',
                                            fontWeight: '500',
                                            fontSize: '13px',
                                            letterSpacing: '0.08em',
                                            textTransform: 'uppercase',
                                            color: 'var(--yj-accent, #ff4d2e)',
                                          }}
                                        >
                                          {'Persona & journey'}
                                        </span>
                                        <h3
                                          style={{
                                            margin: '0',
                                            fontSize: 'clamp(24px,2.2vw,34px)',
                                            fontWeight: '400',
                                            lineHeight: '1.1',
                                            color: '#f4f4f4',
                                          }}
                                        >
                                          One rescue, five stages.
                                        </h3>
                                      </div>
                                      <div style={{ display: 'flex', gap: '8px' }}>
                                        <button
                                          className="dc-hover-85fca14a"
                                          onClick={v.jPrev}
                                          aria-label="Previous"
                                          style={{
                                            all: 'unset',
                                            cursor: 'pointer',
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '50%',
                                            border: '1px solid #3a3a3a',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#f4f4f4',
                                            fontSize: '18px',
                                          }}
                                        >
                                          ←
                                        </button>
                                        <button
                                          className="dc-hover-85fca14a"
                                          onClick={v.jNext}
                                          aria-label="Next"
                                          style={{
                                            all: 'unset',
                                            cursor: 'pointer',
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '50%',
                                            border: '1px solid #3a3a3a',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#f4f4f4',
                                            fontSize: '18px',
                                          }}
                                        >
                                          →
                                        </button>
                                      </div>
                                    </div>
                                    <div
                                      style={{
                                        display: 'flex',
                                        gap: '16px',
                                        padding: '6px clamp(20px,7vw,128px) 10px',
                                        alignItems: 'stretch',
                                        flexWrap: 'wrap',
                                      }}
                                    >
                                      <article
                                        style={{
                                          flex: '0 0 clamp(240px,22vw,280px)',
                                          alignSelf: 'stretch',
                                          minWidth: '0',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          gap: '14px',
                                          padding: '20px',
                                          borderRadius: '16px',
                                          background: 'linear-gradient(160deg,#3a2260,#1a1124)',
                                          border: '1px solid #2a2a2c',
                                          transition: 'transform 450ms cubic-bezier(.2,1.2,.3,1), border-color 300ms',
                                          borderColor: '#6b3fa8',
                                        }}
                                      >
                                        <div
                                          style={{
                                            aspectRatio: '1/1',
                                            borderRadius: '12px',
                                            overflow: 'hidden',
                                            background: '#141414',
                                          }}
                                        >
                                          <img
                                            src="assets/web/assets/cray/persona-tarun.webp"
                                            alt="Tarun, persona, sitting with a street dog"
                                            style={{
                                              width: '100%',
                                              height: '100%',
                                              objectFit: 'cover',
                                              objectPosition: '50% 35%',
                                              display: 'block',
                                            }}
                                          />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                          <span
                                            style={{
                                              fontFamily: "Geist,'Geist Display',sans-serif",
                                              fontSize: '22px',
                                              color: '#f4f4f4',
                                            }}
                                          >
                                            {t(x?.journey?.name)}
                                          </span>
                                          <span style={{ fontSize: '14px', color: '#cccccc' }}>
                                            {t(x?.journey?.role)}
                                          </span>
                                        </div>
                                        <p
                                          style={{
                                            margin: '0',
                                            fontSize: '15px',
                                            lineHeight: '1.45',
                                            color: '#f4f4f4',
                                            textWrap: 'pretty',
                                          }}
                                        >
                                          {t(x?.journey?.need)}
                                        </p>
                                      </article>
                                      <div
                                        onMouseEnter={v.jOn}
                                        onMouseLeave={v.jOff}
                                        style={{
                                          flex: '1 1 420px',
                                          minWidth: '0',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          gap: '16px',
                                        }}
                                      >
                                        <div
                                          style={{
                                            position: 'relative',
                                            height: '384px',
                                            perspective: '1400px',
                                            width: '100%',
                                          }}
                                        >
                                          {' '}
                                          {each(x?.journey?.stages, (st, $index) => (
                                            <>
                                              {' '}
                                              <article
                                                onClick={st?.go}
                                                style={css(
                                                  `position: absolute; top: 0; bottom: 0; left: ${st?.left ?? ''}; width: min(419px, 86%); box-sizing: border-box; display: flex; flex-direction: column; gap: 16px; padding: 24px; border-radius: 18px; background: ${st?.bg ?? ''}; border: 1px solid ${st?.line ?? ''}; box-shadow: -18px 0 36px -18px rgba(0,0,0,.9); z-index: ${st?.z ?? ''}; transform-origin: 0% 50%; transform: ${st?.tf ?? ''}; cursor: ${st?.cur ?? ''}; transition: left 800ms cubic-bezier(.2,.8,.2,1), transform 800ms cubic-bezier(.2,.8,.2,1), background 500ms, border-color 500ms; height: 410px`,
                                                )}
                                              >
                                                <div
                                                  style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                  }}
                                                >
                                                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <span
                                                      style={css(
                                                        `width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:${st?.dotBg ?? ''};color:${st?.dotFg ?? ''};font-size:13px;font-weight:600;transition:background 500ms, color 500ms`,
                                                      )}
                                                    >
                                                      {t(st?.n, true)}
                                                    </span>
                                                    <span
                                                      style={{
                                                        fontFamily: "Geist,'Geist Display',sans-serif",
                                                        fontSize: '24px',
                                                        lineHeight: '1.1',
                                                        color: '#f4f4f4',
                                                        whiteSpace: 'nowrap',
                                                      }}
                                                    >
                                                      {t(st?.k)}
                                                    </span>
                                                  </span>
                                                  <span
                                                    style={{
                                                      fontFamily: 'Geist,sans-serif',
                                                      fontWeight: '500',
                                                      fontSize: '13px',
                                                      letterSpacing: '0.08em',
                                                      textTransform: 'uppercase',
                                                      color: '#8c8c8c',
                                                      whiteSpace: 'nowrap',
                                                    }}
                                                  >
                                                    {t(st?.n)}
                                                    {' / 05'}
                                                  </span>
                                                </div>
                                                <span
                                                  style={{
                                                    fontFamily: 'Geist,sans-serif',
                                                    fontWeight: '500',
                                                    fontSize: '13px',
                                                    letterSpacing: '0.08em',
                                                    textTransform: 'uppercase',
                                                    color: 'var(--yj-accent, #ff4d2e)',
                                                  }}
                                                >
                                                  {'Led to → '}
                                                  {t(st?.feat)}
                                                </span>
                                                <div
                                                  style={css(
                                                    `display:flex;flex-direction:column;gap:6px;opacity:${st?.txtO ?? ''};transition:opacity 500ms`,
                                                  )}
                                                >
                                                  <span
                                                    style={{
                                                      fontFamily: 'Geist,sans-serif',
                                                      fontWeight: '500',
                                                      fontSize: '13px',
                                                      letterSpacing: '0.08em',
                                                      textTransform: 'uppercase',
                                                      color: '#8c8c8c',
                                                    }}
                                                  >
                                                    Pain
                                                  </span>
                                                  <p
                                                    style={{
                                                      margin: '0',
                                                      fontSize: '17px',
                                                      lineHeight: '1.5',
                                                      color: '#dddddd',
                                                      textWrap: 'pretty',
                                                    }}
                                                  >
                                                    {t(st?.pain)}
                                                  </p>
                                                </div>
                                                <div
                                                  style={css(
                                                    `margin-top:auto;display:flex;flex-direction:column;gap:6px;padding:14px 16px;border-radius:12px;background:linear-gradient(160deg,#3a2260,#1a1124);opacity:${st?.txtO ?? ''};transition:opacity 500ms`,
                                                  )}
                                                >
                                                  <span
                                                    style={{
                                                      fontFamily: 'Geist,sans-serif',
                                                      fontWeight: '500',
                                                      fontSize: '13px',
                                                      letterSpacing: '0.08em',
                                                      textTransform: 'uppercase',
                                                      color: '#d4b0ff',
                                                    }}
                                                  >
                                                    Opportunity
                                                  </span>
                                                  <p
                                                    style={{
                                                      margin: '0',
                                                      fontSize: '17px',
                                                      lineHeight: '1.5',
                                                      color: '#f4f4f4',
                                                      textWrap: 'pretty',
                                                    }}
                                                  >
                                                    {t(st?.opp)}
                                                  </p>
                                                </div>
                                              </article>{' '}
                                            </>
                                          ))}{' '}
                                        </div>
                                        <div style={{ display: 'flex', gap: '6px', alignSelf: 'center' }}>
                                          {each(x?.journey?.stages, (st, $index) => (
                                            <></>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>{' '}
                                </>
                              ) : null}{' '}
                            </>
                          ) : null}{' '}
                          {x?.isSplit ? (
                            <>
                              {' '}
                              <div
                                style={css(
                                  `padding: 96px clamp(20px,7vw,128px); display: flex; flex-wrap: wrap-reverse; gap: 56px; align-items: center; justify-content: space-between; flex-direction: ${x?.dir ?? ''}`,
                                )}
                              >
                                <div
                                  style={{
                                    flex: '1 1 420px',
                                    minWidth: '0',
                                    display: 'grid',
                                    flexDirection: 'column',
                                    gap: '60px',
                                    position: 'static',
                                  }}
                                >
                                  <span
                                    style={{
                                      fontFamily: 'Geist,sans-serif',
                                      fontWeight: '500',
                                      fontSize: '13px',
                                      letterSpacing: '0.08em',
                                      textTransform: 'uppercase',
                                      color: 'var(--yj-accent, #ff4d2e)',
                                    }}
                                  >
                                    {t(x?.n)}
                                    {' / '}
                                    {t(v.chTotal)}
                                    {' — '}
                                    {t(x?.phaseL)}
                                  </span>
                                  <span
                                    data-yj-px="0.15"
                                    data-yj-pxmax="90"
                                    style={{
                                      fontFamily: "Geist,'Geist Display',sans-serif",
                                      fontWeight: '700',
                                      fontSize: 'clamp(60px,9vw,150px)',
                                      lineHeight: '0.8',
                                      color: '#222222',
                                    }}
                                  >
                                    {t(x?.n)}
                                  </span>
                                  <h2
                                    data-yj-rv="up"
                                    style={{
                                      margin: '0',
                                      fontSize: 'clamp(24px,2.7vw,45px)',
                                      lineHeight: '1.04',
                                      letterSpacing: '-0.02em',
                                      fontWeight: '600',
                                      textWrap: 'balance',
                                      color: '#f4f4f4',
                                    }}
                                  >
                                    {t(x?.h)}
                                  </h2>
                                  <p
                                    data-yj-rv="up"
                                    style={{
                                      margin: '0',
                                      fontSize: '18px',
                                      lineHeight: '1.55',
                                      maxWidth: '620px',
                                      color: '#cccccc',
                                      textWrap: 'pretty',
                                      width: '100%',
                                      height: '100%',
                                    }}
                                  >
                                    {t(x?.p)}
                                  </p>
                                  {x?.hasSort ? (
                                    <>
                                      <div
                                        data-yj-rv="up"
                                        style={{
                                          marginTop: '8px',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          gap: '14px',
                                        }}
                                      >
                                        <div
                                          style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'baseline',
                                            gap: '12px',
                                            flexWrap: 'wrap',
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontFamily: 'Geist,sans-serif',
                                              fontWeight: '500',
                                              fontSize: '13px',
                                              letterSpacing: '0.08em',
                                              textTransform: 'uppercase',
                                              color: '#f4f4f4',
                                            }}
                                          >
                                            Card sort results
                                          </span>
                                          <span
                                            style={{
                                              fontFamily: 'Geist,sans-serif',
                                              fontWeight: '500',
                                              fontSize: '13px',
                                              letterSpacing: '0.08em',
                                              textTransform: 'uppercase',
                                              color: '#8c8c8c',
                                            }}
                                          >
                                            Votes / 10
                                          </span>
                                        </div>
                                        <div
                                          style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))',
                                            gap: '10px',
                                          }}
                                        >
                                          {each(v.crayRes?.sort, (g, $index) => (
                                            <>
                                              <div
                                                onMouseEnter={g?.on}
                                                onMouseLeave={g?.off}
                                                style={css(
                                                  `position:relative;min-width:0;display:flex;flex-direction:column;gap:16px;padding:18px;border-radius:16px;background:linear-gradient(180deg,#1a1a1d,#111113);border:1px solid ${g?.line ?? ''};transition:border-color 300ms`,
                                                )}
                                              >
                                                <div
                                                  style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      fontFamily: 'Geist,sans-serif',
                                                      fontWeight: '500',
                                                      fontSize: '13px',
                                                      letterSpacing: '0.08em',
                                                      textTransform: 'uppercase',
                                                      color: '#8c8c8c',
                                                    }}
                                                  >
                                                    {t(g?.n)}
                                                  </span>
                                                  <span
                                                    style={{
                                                      fontFamily: 'Geist,sans-serif',
                                                      fontWeight: '500',
                                                      fontSize: '13px',
                                                      letterSpacing: '0.08em',
                                                      textTransform: 'uppercase',
                                                      color: '#f4f4f4',
                                                    }}
                                                  >
                                                    {t(g?.k)}
                                                    {' · '}
                                                    {t(g?.count)}
                                                  </span>
                                                </div>
                                                <div style={{ position: 'static' }}>
                                                  {' '}
                                                  <div
                                                    aria-hidden="true"
                                                    style={css(
                                                      `position:absolute;inset:0;z-index:2;overflow:hidden;display:flex;flex-direction:column;justify-content:center;gap:5px;padding:16px 18px;border-radius:16px;background:#0d0d0f;border:1px solid #2a2a2c;opacity:${g?.cO ?? ''};transform:translateY(${g?.legY ?? ''});pointer-events:none;transition:opacity 250ms, transform 350ms cubic-bezier(.2,1.2,.3,1)`,
                                                    )}
                                                  >
                                                    <span
                                                      style={{ fontSize: '13px', lineHeight: '1.35', color: '#bbbbbb' }}
                                                    >
                                                      {t(g?.desc)}
                                                    </span>
                                                    {each(g?.items, (it, $index) => (
                                                      <>
                                                        <span
                                                          style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            gap: '8px',
                                                            fontSize: '13px',
                                                            lineHeight: '1.3',
                                                            color: '#f4f4f4',
                                                          }}
                                                        >
                                                          <span>{t(it?.k)}</span>
                                                          <span style={{ color: 'var(--yj-accent, #ff4d2e)' }}>
                                                            {t(it?.v)}
                                                          </span>
                                                        </span>
                                                      </>
                                                    ))}
                                                  </div>{' '}
                                                  <div
                                                    style={{
                                                      display: 'flex',
                                                      alignItems: 'flex-end',
                                                      justifyContent: 'space-around',
                                                      gap: '4px',
                                                      height: '100px',
                                                      borderBottom: '1px solid #2a2a2a',
                                                    }}
                                                  >
                                                    {each(g?.items, (it, $index) => (
                                                      <>
                                                        <span
                                                          title={`${it?.k ?? ''} ${it?.v ?? ''}`}
                                                          style={css(
                                                            `width:2px;height:${it?.hgt ?? ''};border-radius:2px;background:#8c8c8c`,
                                                          )}
                                                        />
                                                      </>
                                                    ))}
                                                  </div>{' '}
                                                </div>
                                                <div
                                                  style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'baseline',
                                                    gap: '8px',
                                                  }}
                                                >
                                                  <span
                                                    style={{ fontSize: '14px', lineHeight: '1.3', color: '#f4f4f4' }}
                                                  >
                                                    {t(g?.rk)}
                                                  </span>
                                                  <span
                                                    style={{
                                                      fontFamily: "Geist,'Geist Display',sans-serif",
                                                      fontSize: '26px',
                                                      lineHeight: '1',
                                                      color: 'var(--yj-accent, #ff4d2e)',
                                                    }}
                                                  >
                                                    {t(g?.rv)}
                                                  </span>
                                                </div>
                                              </div>
                                            </>
                                          ))}
                                        </div>
                                        <p style={{ margin: '0', fontSize: '15px', color: '#999999' }}>
                                          These groups became the app’s four tabs.
                                        </p>
                                      </div>
                                      <div
                                        data-yj-rv="up"
                                        style={{
                                          marginTop: '8px',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          background: 'linear-gradient(180deg,#1a1a1d,#111113)',
                                          border: '1px solid #2a2a2c',
                                          borderRadius: '14px',
                                          overflow: 'hidden',
                                        }}
                                      >
                                        <div
                                          style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'baseline',
                                            gap: '12px',
                                            padding: '14px 20px',
                                            borderBottom: '1px solid #262626',
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontFamily: 'Geist,sans-serif',
                                              fontWeight: '500',
                                              fontSize: '13px',
                                              letterSpacing: '0.08em',
                                              textTransform: 'uppercase',
                                              color: '#f4f4f4',
                                            }}
                                          >
                                            Information architecture
                                          </span>
                                        </div>
                                        <div
                                          style={{
                                            padding: '28px 24px 28px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '0',
                                          }}
                                        >
                                          <div
                                            style={{
                                              display: 'flex',
                                              alignItems: 'center',
                                              gap: '10px',
                                              flexWrap: 'wrap',
                                              justifyContent: 'center',
                                            }}
                                          >
                                            <span
                                              style={{
                                                padding: '9px 18px',
                                                borderRadius: '999px',
                                                border: '1px solid #3a3a3a',
                                                color: '#cccccc',
                                                fontSize: '14px',
                                              }}
                                            >
                                              Login / Register
                                            </span>
                                            <span aria-hidden="true" style={{ color: '#666666', fontSize: '16px' }}>
                                              →
                                            </span>
                                            <span
                                              style={{
                                                padding: '10px 22px',
                                                borderRadius: '999px',
                                                background: '#f4f4f4',
                                                color: '#140c1c',
                                                fontSize: '15px',
                                                fontWeight: '600',
                                              }}
                                            >
                                              Homepage
                                            </span>
                                          </div>
                                          <span
                                            aria-hidden="true"
                                            style={{ width: '1px', height: '22px', background: '#444444' }}
                                          />
                                          <div
                                            style={{
                                              width: '100%',
                                              overflowX: 'auto',
                                              scrollbarWidth: 'thin',
                                              scrollbarColor: '#333333 transparent',
                                            }}
                                          >
                                            <div
                                              style={{
                                                minWidth: '690px',
                                                display: 'flex',
                                                flexWrap: 'nowrap',
                                                gap: '12px',
                                              }}
                                            >
                                              {each(v.crayRes?.ia, (col, $index) => (
                                                <>
                                                  <div
                                                    onMouseEnter={col?.on}
                                                    onMouseLeave={col?.off}
                                                    style={css(
                                                      `position:relative;flex:${col?.grow ?? ''} 1 ${col?.basis ?? ''};min-width:0;display:flex;flex-direction:column;align-items:stretch;opacity:${col?.op ?? ''};transition:opacity 300ms`,
                                                    )}
                                                  >
                                                    <span
                                                      aria-hidden="true"
                                                      style={css(
                                                        `position:absolute;top:0;height:1px;background:#444444;left:${col?.lnL ?? ''};right:${col?.lnR ?? ''}`,
                                                      )}
                                                    />
                                                    <span
                                                      aria-hidden="true"
                                                      style={{
                                                        alignSelf: 'center',
                                                        width: '1px',
                                                        height: '18px',
                                                        background: '#444444',
                                                      }}
                                                    />
                                                    <div
                                                      style={css(
                                                        `display:flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border-radius:12px;background:${col?.c ?? ''};color:${col?.hfg ?? ''}`,
                                                      )}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: '15px',
                                                          fontWeight: '700',
                                                          lineHeight: '1.15',
                                                        }}
                                                      >
                                                        {t(col?.k)}
                                                      </span>
                                                      <span
                                                        style={{
                                                          fontFamily: 'Geist,sans-serif',
                                                          fontWeight: '500',
                                                          fontSize: '13px',
                                                          padding: '2px 7px',
                                                          borderRadius: '999px',
                                                          background: 'rgba(0,0,0,.14)',
                                                        }}
                                                      >
                                                        {t(col?.count)}
                                                      </span>
                                                    </div>
                                                    <div
                                                      style={css(
                                                        `margin-top:8px;flex:1;display:flex;gap:8px;padding:8px;border-radius:12px;background:${col?.tint ?? ''};border:1px solid ${col?.edge2 ?? ''}`,
                                                      )}
                                                    >
                                                      {each(col?.lanes, (lane, $index) => (
                                                        <>
                                                          <div
                                                            style={{
                                                              flex: '1 1 0',
                                                              minWidth: '0',
                                                              display: 'flex',
                                                              flexDirection: 'column',
                                                              gap: '2px',
                                                            }}
                                                          >
                                                            {lane?.hasK ? (
                                                              <>
                                                                <span
                                                                  style={{
                                                                    fontFamily: 'Geist,sans-serif',
                                                                    fontWeight: '500',
                                                                    fontSize: '13px',
                                                                    letterSpacing: '0.08em',
                                                                    textTransform: 'uppercase',
                                                                    color: '#8c8c8c',
                                                                    padding: '4px 8px 6px',
                                                                  }}
                                                                >
                                                                  {t(lane?.k)}
                                                                </span>
                                                              </>
                                                            ) : null}
                                                            {each(lane?.items, (n, $index) => (
                                                              <>
                                                                <span
                                                                  className="dc-hover-3071d04b"
                                                                  style={css(
                                                                    `display:flex;align-items:flex-start;gap:8px;padding:7px 8px;border-radius:8px;font-size:13px;line-height:1.3;color:${n?.fg ?? ''};font-weight:${n?.w ?? ''};background:${n?.bg ?? ''};transition:background 200ms`,
                                                                  )}
                                                                >
                                                                  <span
                                                                    style={css(
                                                                      `flex:none;width:6px;height:6px;margin-top:5px;border-radius:50%;background:${col?.c ?? ''}`,
                                                                    )}
                                                                  />
                                                                  {t(n?.k, true)}
                                                                </span>
                                                              </>
                                                            ))}
                                                          </div>
                                                        </>
                                                      ))}
                                                    </div>
                                                  </div>
                                                </>
                                              ))}
                                            </div>
                                          </div>
                                          <p
                                            style={{
                                              margin: '20px 0 0',
                                              alignSelf: 'flex-start',
                                              fontSize: '14px',
                                              lineHeight: '1.5',
                                              color: '#999999',
                                            }}
                                          >
                                            If an adoption is rejected after the background check, the flow routes
                                            people to foster or sponsor instead.
                                          </p>
                                        </div>
                                      </div>
                                    </>
                                  ) : null}
                                </div>
                                {x?.wwCards ? (
                                  <>
                                    <div
                                      style={{
                                        order: '-1',
                                        flex: '1 1 420px',
                                        minWidth: '0',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '16px',
                                      }}
                                    >
                                      <div
                                        onMouseEnter={v.stackPause}
                                        onMouseLeave={v.stackPlay}
                                        style={{ position: 'relative', height: '370px', perspective: '1200px' }}
                                      >
                                        {' '}
                                        {each(x?.ww, (w, $index) => (
                                          <>
                                            {' '}
                                            <div
                                              onClick={w?.go}
                                              style={css(
                                                `position:absolute;left:0;right:0;bottom:0;min-height:210px;box-sizing:border-box;display:flex;flex-direction:column;gap:12px;padding:24px 26px;border-radius:26px;background:${w?.bg ?? ''};border:1px solid ${w?.line ?? ''};box-shadow:0 -10px 30px -12px rgba(0,0,0,.8);transform-origin:50% 100%;transform:${w?.tf ?? ''};z-index:${w?.z ?? ''};opacity:${w?.op ?? ''};cursor:${w?.cur ?? ''};transition:transform 800ms cubic-bezier(.2,.8,.2,1), opacity 600ms, background 600ms, border-color 600ms`,
                                              )}
                                            >
                                              <div
                                                style={{
                                                  display: 'flex',
                                                  alignItems: 'center',
                                                  justifyContent: 'space-between',
                                                  gap: '12px',
                                                }}
                                              >
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                  <span
                                                    style={css(
                                                      `width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:${w?.dotBg ?? ''};color:${w?.dotFg ?? ''};font-family:Geist,sans-serif;font-weight:500;font-size:13px;transition:background 600ms, color 600ms`,
                                                    )}
                                                  >
                                                    {t(w?.n, true)}
                                                  </span>
                                                  <span
                                                    style={{
                                                      fontFamily: "Geist,'Geist Display',sans-serif",
                                                      fontSize: '24px',
                                                      color: '#f4f4f4',
                                                    }}
                                                  >
                                                    {t(w?.k)}
                                                  </span>
                                                </span>
                                                <span
                                                  style={{
                                                    fontFamily: 'Geist,sans-serif',
                                                    fontWeight: '500',
                                                    fontSize: '13px',
                                                    letterSpacing: '0.08em',
                                                    textTransform: 'uppercase',
                                                    color: '#8c8c8c',
                                                    whiteSpace: 'nowrap',
                                                  }}
                                                >
                                                  {t(w?.n)}
                                                  {' / '}
                                                  {t(w?.total)}
                                                </span>
                                              </div>
                                              <p
                                                style={css(
                                                  `margin:0;font-size:17px;line-height:1.5;color:${w?.fg ?? ''};text-wrap:pretty;opacity:${w?.txtO ?? ''};transition:opacity 500ms, color 500ms`,
                                                )}
                                              >
                                                {t(w?.v)}
                                              </p>
                                            </div>{' '}
                                          </>
                                        ))}{' '}
                                      </div>
                                      <div style={{ display: 'flex', gap: '6px', alignSelf: 'center' }}>
                                        {each(x?.ww, (w, $index) => (
                                          <>
                                            <button
                                              onClick={w?.go}
                                              aria-label={`Show ${w?.k ?? ''}`}
                                              style={css(
                                                `all:unset;cursor:pointer;width:${w?.pipW ?? ''};height:4px;border-radius:999px;background:${w?.pip ?? ''};transition:width 400ms cubic-bezier(.2,.8,.2,1), background 300ms`,
                                              )}
                                            />
                                          </>
                                        ))}
                                      </div>
                                    </div>
                                  </>
                                ) : null}
                                {x?.hasScreens ? (
                                  <>
                                    <div
                                      style={{
                                        order: '-2',
                                        flex: '1 1 100%',
                                        minWidth: '0',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '24px',
                                        paddingTop: '24px',
                                      }}
                                    >
                                      <div style={{ overflow: 'hidden', padding: '24px 0 8px' }}>
                                        <div
                                          style={{
                                            position: 'relative',
                                            isolation: 'isolate',
                                            zIndex: '0',
                                            height: '560px',
                                            maxWidth: '1600px',
                                            margin: '0 auto',
                                          }}
                                        >
                                          {' '}
                                          {each(v.protoScreens, (sc, $index) => (
                                            <>
                                              {' '}
                                              <a
                                                href={sc?.href}
                                                target="_blank"
                                                rel="noopener"
                                                aria-label={`Open ${sc?.k ?? ''}`}
                                                style={css(
                                                  `position:absolute;left:50%;top:0;width:243px;height:494px;margin-left:-121px;box-sizing:border-box;padding:11px;border-radius:46px;background:#0d0d0d;border:1.5px solid ${sc?.line ?? ''};box-shadow:inset 0 0 0 1px #2a2a2a,0 40px 80px -30px rgba(0,0,0,0.9);display:block;transform:${sc?.tf ?? ''};opacity:${sc?.op ?? ''};z-index:${sc?.z ?? ''};filter:${sc?.fx ?? ''};transition:transform 520ms cubic-bezier(.2,1.25,.3,1),opacity 380ms ease,filter 380ms ease,border-color 300ms`,
                                                )}
                                              >
                                                {' '}
                                                <span
                                                  aria-hidden="true"
                                                  style={{
                                                    position: 'absolute',
                                                    left: '-4px',
                                                    top: '96px',
                                                    width: '3px',
                                                    height: '26px',
                                                    background: '#2a2a2a',
                                                    borderRadius: '2px 0 0 2px',
                                                  }}
                                                />{' '}
                                                <span
                                                  aria-hidden="true"
                                                  style={{
                                                    position: 'absolute',
                                                    left: '-4px',
                                                    top: '136px',
                                                    width: '3px',
                                                    height: '44px',
                                                    background: '#2a2a2a',
                                                    borderRadius: '2px 0 0 2px',
                                                  }}
                                                />{' '}
                                                <span
                                                  aria-hidden="true"
                                                  style={{
                                                    position: 'absolute',
                                                    left: '-4px',
                                                    top: '188px',
                                                    width: '3px',
                                                    height: '44px',
                                                    background: '#2a2a2a',
                                                    borderRadius: '2px 0 0 2px',
                                                  }}
                                                />{' '}
                                                <span
                                                  aria-hidden="true"
                                                  style={{
                                                    position: 'absolute',
                                                    right: '-4px',
                                                    top: '150px',
                                                    width: '3px',
                                                    height: '66px',
                                                    background: '#2a2a2a',
                                                    borderRadius: '0 2px 2px 0',
                                                  }}
                                                />{' '}
                                                <span
                                                  aria-hidden="true"
                                                  style={{
                                                    position: 'absolute',
                                                    top: '20px',
                                                    left: '50%',
                                                    translate: '-50% 0',
                                                    width: '68px',
                                                    height: '20px',
                                                    borderRadius: '999px',
                                                    background: '#000000',
                                                    zIndex: '3',
                                                  }}
                                                />{' '}
                                                <span
                                                  style={{
                                                    display: 'block',
                                                    width: '218px',
                                                    height: '469px',
                                                    borderRadius: '35px',
                                                    overflow: 'hidden',
                                                    background: '#ffffff',
                                                    position: 'relative',
                                                  }}
                                                >
                                                  {' '}
                                                  <span
                                                    aria-hidden="true"
                                                    style={{
                                                      position: 'absolute',
                                                      top: '0',
                                                      left: '0',
                                                      right: '0',
                                                      height: '38px',
                                                      zIndex: '2',
                                                      background: '#ffffff',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      justifyContent: 'space-between',
                                                      padding: '2px 20px 0 26px',
                                                      boxSizing: 'border-box',
                                                      fontFamily: "-apple-system,'SF Pro Text',system-ui,sans-serif",
                                                      fontSize: '11.5px',
                                                      fontWeight: '600',
                                                      color: '#000000',
                                                      letterSpacing: '-0.01em',
                                                    }}
                                                  >
                                                    <span>9:41</span>
                                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                      <svg width="15" height="9" viewBox="0 0 17 10.5" fill="#000000">
                                                        <rect x="0" y="7" width="3" height="3.5" rx="0.7" />
                                                        <rect x="4.5" y="5" width="3" height="5.5" rx="0.7" />
                                                        <rect x="9" y="2.5" width="3" height="8" rx="0.7" />
                                                        <rect x="13.5" y="0" width="3" height="10.5" rx="0.7" />
                                                      </svg>
                                                      <svg width="13" height="9" viewBox="0 0 15 11" fill="#000000">
                                                        <path d="M7.5 2.2c2.1 0 4 .8 5.5 2.1l1.2-1.2C12.4 1.5 10 .5 7.5.5S2.6 1.5.8 3.1L2 4.3c1.5-1.3 3.4-2.1 5.5-2.1Zm0 3.3c1.2 0 2.3.4 3.2 1.2l1.2-1.2C10.7 4.4 9.2 3.8 7.5 3.8S4.3 4.4 3.1 5.5l1.2 1.2c.9-.8 2-1.2 3.2-1.2Zm0 3.3c-.5 0-.9.2-1.3.5L7.5 10.6l1.3-1.3c-.4-.3-.8-.5-1.3-.5Z" />
                                                      </svg>
                                                      <span
                                                        style={{ display: 'flex', alignItems: 'center', gap: '1px' }}
                                                      >
                                                        <span
                                                          style={{
                                                            width: '21px',
                                                            height: '10px',
                                                            border: '1px solid rgba(0,0,0,0.4)',
                                                            borderRadius: '3px',
                                                            boxSizing: 'border-box',
                                                            padding: '1px',
                                                            display: 'block',
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              display: 'block',
                                                              width: '80%',
                                                              height: '100%',
                                                              background: '#000000',
                                                              borderRadius: '1.5px',
                                                            }}
                                                          />
                                                        </span>
                                                        <span
                                                          style={{
                                                            width: '1.5px',
                                                            height: '4px',
                                                            background: 'rgba(0,0,0,0.4)',
                                                            borderRadius: '0 1px 1px 0',
                                                            display: 'block',
                                                          }}
                                                        />
                                                      </span>
                                                    </span>
                                                  </span>{' '}
                                                  <span
                                                    aria-hidden="true"
                                                    style={{
                                                      position: 'absolute',
                                                      bottom: '7px',
                                                      left: '50%',
                                                      translate: '-50% 0',
                                                      width: '76px',
                                                      height: '4px',
                                                      borderRadius: '999px',
                                                      background: '#000000',
                                                      zIndex: '2',
                                                    }}
                                                  />{' '}
                                                  <iframe
                                                    src={asset(sc?.href)}
                                                    title={sc?.k}
                                                    loading="lazy"
                                                    tabIndex="-1"
                                                    style={{
                                                      position: 'absolute',
                                                      top: '38px',
                                                      left: '0',
                                                      width: '390px',
                                                      height: '845px',
                                                      border: '0',
                                                      transform: 'scale(0.559)',
                                                      transformOrigin: '0 0',
                                                      pointerEvents: 'none',
                                                      background: '#ffffff',
                                                    }}
                                                  />{' '}
                                                </span>{' '}
                                              </a>{' '}
                                            </>
                                          ))}{' '}
                                        </div>
                                        <p
                                          style={{
                                            margin: '0',
                                            fontSize: '13px',
                                            lineHeight: '1.5',
                                            color: '#cccccc',
                                            textWrap: 'pretty',
                                            width: '100%',
                                            alignSelf: 'center',
                                            textAlign: 'center',
                                            padding: '16px 0 0',
                                            paddingTop: '0px',
                                          }}
                                        >
                                          Tap a screen to open it.
                                        </p>
                                        <div
                                          style={{
                                            maxWidth: '1600px',
                                            margin: '0 auto',
                                            padding: '8px clamp(20px,7vw,128px) 0',
                                            boxSizing: 'border-box',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '24px',
                                            flexWrap: 'wrap',
                                          }}
                                        >
                                          <span
                                            style={{
                                              display: 'flex',
                                              alignItems: 'baseline',
                                              gap: '16px',
                                              flexWrap: 'wrap-reverse',
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontFamily: "'Instrument Serif',serif",
                                                fontStyle: 'italic',
                                                fontSize: 'clamp(32px,3vw,48px)',
                                                lineHeight: '1',
                                                color: '#f4f4f4',
                                              }}
                                            >
                                              {t(v.protoNow?.k)}
                                            </span>
                                            <span
                                              style={{
                                                fontFamily: 'Geist,sans-serif',
                                                fontWeight: '500',
                                                fontSize: '13px',
                                                letterSpacing: '0.08em',
                                                textTransform: 'uppercase',
                                                color: 'var(--yj-accent, #ff4d2e)',
                                              }}
                                            >
                                              {t(v.protoNow?.n)}
                                              {' / '}
                                              {t(v.protoCount)}
                                            </span>
                                          </span>
                                          <div style={{ display: 'flex', gap: '6px' }}>
                                            {each(v.protoScreens, (sc, $index) => (
                                              <>
                                                <button
                                                  onClick={sc?.go}
                                                  aria-label={`Show ${sc?.k ?? ''}`}
                                                  style={css(
                                                    `all:unset;cursor:pointer;width:${sc?.dotW ?? ''};height:4px;background:${sc?.dot ?? ''};transition:width 400ms cubic-bezier(.2,.8,.2,1),background 300ms`,
                                                  )}
                                                />
                                              </>
                                            ))}
                                          </div>
                                          <a
                                            className="dc-hover-78f5b1a8"
                                            href={v.protoUrl}
                                            target="_blank"
                                            rel="noopener"
                                            data-yj-mag="1"
                                            style={{
                                              padding: '14px 26px',
                                              borderRadius: '999px',
                                              background: '#f4f4f4',
                                              color: '#000000',
                                              fontSize: '14px',
                                              fontWeight: '500',
                                              textDecoration: 'none',
                                              display: 'flex',
                                              alignItems: 'center',
                                            }}
                                          >
                                            Open full prototype ↗
                                          </a>
                                        </div>{' '}
                                      </div>
                                    </div>
                                  </>
                                ) : null}
                                {x?.wwRows ? (
                                  <>
                                    <dl
                                      style={{
                                        order: '-1',
                                        flex: '1 1 420px',
                                        minWidth: '0',
                                        margin: '0',
                                        display: 'flex',
                                        flexDirection: 'column',
                                      }}
                                    >
                                      {each(x?.ww, (w, $index) => (
                                        <>
                                          <div
                                            data-yj-rv="up"
                                            style={{
                                              display: 'flex',
                                              flexWrap: 'wrap',
                                              gap: '12px 32px',
                                              padding: '28px 0',
                                              borderTop: '1px solid #2a2a2a',
                                            }}
                                          >
                                            <dt
                                              style={{
                                                flex: '0 0 124px',
                                                fontFamily: 'Geist,sans-serif',
                                                fontWeight: '500',
                                                fontSize: '13px',
                                                letterSpacing: '0.08em',
                                                textTransform: 'uppercase',
                                                color: 'var(--yj-accent, #ff4d2e)',
                                                paddingTop: '6px',
                                              }}
                                            >
                                              {t(w?.k)}
                                            </dt>
                                            <dd
                                              style={{
                                                flex: '1 1 280px',
                                                minWidth: '0',
                                                margin: '0',
                                                fontSize: '18px',
                                                lineHeight: '1.5',
                                                color: '#f4f4f4',
                                                textWrap: 'pretty',
                                              }}
                                            >
                                              {t(w?.v)}
                                            </dd>
                                          </div>
                                        </>
                                      ))}
                                      {x?.hasPhone ? (
                                        <>
                                          <div
                                            data-yj-rv="up"
                                            style={{
                                              display: 'flex',
                                              alignItems: 'center',
                                              gap: '24px',
                                              flexWrap: 'wrap',
                                              paddingTop: '28px',
                                              borderTop: '1px solid #2a2a2a',
                                            }}
                                          >
                                            <div
                                              className="dc-hover-b1985705"
                                              aria-label="Aid screen, live prototype"
                                              style={{
                                                flex: 'none',
                                                display: 'block',
                                                width: '243px',
                                                height: '494px',
                                                boxSizing: 'border-box',
                                                padding: '11px',
                                                borderRadius: '46px',
                                                background: '#0d0d0d',
                                                border: '1.5px solid #6b3fa8',
                                                boxShadow: 'inset 0 0 0 1px #2a2a2a,0 40px 80px -30px rgba(0,0,0,0.9)',
                                                position: 'relative',
                                                transition: 'transform 500ms cubic-bezier(.2,1.2,.3,1)',
                                              }}
                                            >
                                              {' '}
                                              <span
                                                aria-hidden="true"
                                                style={{
                                                  position: 'absolute',
                                                  top: '20px',
                                                  left: '50%',
                                                  translate: '-50% 0',
                                                  width: '68px',
                                                  height: '20px',
                                                  borderRadius: '999px',
                                                  background: '#000000',
                                                  zIndex: '3',
                                                }}
                                              />{' '}
                                              <span
                                                style={{
                                                  display: 'block',
                                                  width: '218px',
                                                  height: '469px',
                                                  borderRadius: '35px',
                                                  overflow: 'hidden',
                                                  background: '#ffffff',
                                                  position: 'relative',
                                                }}
                                              >
                                                {' '}
                                                <iframe
                                                  src={asset(x?.phoneHref)}
                                                  title="CRAY Aid screen"
                                                  loading="lazy"
                                                  tabIndex="-1"
                                                  style={{
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '0',
                                                    width: '390px',
                                                    height: '839px',
                                                    border: '0',
                                                    transform: 'scale(0.559)',
                                                    transformOrigin: '0 0',
                                                    pointerEvents: 'none',
                                                    background: '#ffffff',
                                                  }}
                                                />{' '}
                                              </span>{' '}
                                            </div>
                                            <div
                                              style={{
                                                flex: '1 1 180px',
                                                minWidth: '0',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '10px',
                                              }}
                                            >
                                              <span
                                                style={{
                                                  fontFamily: 'Geist,sans-serif',
                                                  fontWeight: '500',
                                                  fontSize: '13px',
                                                  letterSpacing: '0.08em',
                                                  textTransform: 'uppercase',
                                                  color: 'var(--yj-accent, #ff4d2e)',
                                                }}
                                              >
                                                AID
                                              </span>
                                              <p
                                                style={{
                                                  margin: '0',
                                                  fontSize: '16px',
                                                  lineHeight: '1.5',
                                                  color: '#cccccc',
                                                  textWrap: 'pretty',
                                                }}
                                              >
                                                Built for the moment someone finds an injured animal: emergency,
                                                hospitals and symptom scan, one tap from home.
                                              </p>
                                            </div>
                                          </div>
                                        </>
                                      ) : null}
                                    </dl>
                                  </>
                                ) : null}
                              </div>{' '}
                            </>
                          ) : null}{' '}
                          {x?.isFull ? (
                            <>
                              {' '}
                              <div style={{ padding: '12px 12px 0' }}>
                                {' '}
                                <div
                                  data-yj-rv="scale"
                                  onClick={x?.openZoom}
                                  style={css(
                                    `position:relative;width:100%;aspect-ratio:${x?.ar ?? ''};max-height:88vh;overflow:hidden;cursor:${x?.zoomCursor ?? ''};background:#141414`,
                                  )}
                                >
                                  {t(x?.fig)}
                                  {x?.canZoom ? (
                                    <>
                                      {' '}
                                      <span
                                        style={{
                                          position: 'absolute',
                                          right: '16px',
                                          bottom: '16px',
                                          padding: '8px 14px',
                                          borderRadius: '999px',
                                          background: 'rgba(0,0,0,0.75)',
                                          color: '#f4f4f4',
                                          fontFamily: 'Geist,sans-serif',
                                          fontWeight: '500',
                                          letterSpacing: '0.08em',
                                          textTransform: 'uppercase',
                                          fontSize: '13px',
                                          pointerEvents: 'none',
                                        }}
                                      >
                                        {'⤢ View '}
                                        {t(x?.fig)}
                                      </span>{' '}
                                    </>
                                  ) : null}
                                </div>{' '}
                              </div>{' '}
                              <div
                                style={{
                                  padding: '56px clamp(20px,7vw,128px) 96px',
                                  display: 'grid',
                                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                                  gap: '24px 56px',
                                  alignItems: 'start',
                                }}
                              >
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                  <span
                                    style={{
                                      fontFamily: 'Geist,sans-serif',
                                      fontWeight: '500',
                                      fontSize: '13px',
                                      letterSpacing: '0.08em',
                                      textTransform: 'uppercase',
                                      color: 'var(--yj-accent, #ff4d2e)',
                                    }}
                                  >
                                    {t(x?.n)}
                                    {' / '}
                                    {t(v.chTotal)}
                                    {' — '}
                                    {t(x?.phaseL)}
                                  </span>
                                  <h2
                                    data-yj-rv="up"
                                    style={{
                                      margin: '0',
                                      fontSize: 'clamp(24px,2.7vw,45px)',
                                      lineHeight: '1.04',
                                      letterSpacing: '-0.02em',
                                      fontWeight: '600',
                                      textWrap: 'balance',
                                      color: '#f4f4f4',
                                    }}
                                  >
                                    {t(x?.h)}
                                  </h2>
                                </div>
                                <p
                                  data-yj-rv="up"
                                  style={{
                                    margin: '0',
                                    paddingTop: '38px',
                                    fontSize: '18px',
                                    lineHeight: '1.55',
                                    maxWidth: '620px',
                                    color: '#cccccc',
                                    textWrap: 'pretty',
                                  }}
                                >
                                  {t(x?.p)}
                                </p>
                              </div>{' '}
                            </>
                          ) : null}{' '}
                          {x?.isText ? (
                            <>
                              {' '}
                              <div
                                style={{
                                  padding: '120px clamp(20px,7vw,128px)',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '40px',
                                }}
                              >
                                <span
                                  style={{
                                    fontFamily: 'Geist,sans-serif',
                                    fontWeight: '500',
                                    fontSize: '13px',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    color: 'var(--yj-accent, #ff4d2e)',
                                  }}
                                >
                                  {t(x?.n)}
                                  {' / '}
                                  {t(v.chTotal)}
                                  {' — '}
                                  {t(x?.phaseL)}
                                </span>
                                <h2
                                  data-yj-rv="mask"
                                  style={{
                                    margin: '0',
                                    fontFamily: "'Instrument Serif',serif",
                                    fontStyle: 'italic',
                                    fontWeight: '400',
                                    fontSize: 'clamp(33px,4.8vw,84px)',
                                    lineHeight: '0.98',
                                    letterSpacing: '-0.01em',
                                    maxWidth: '1300px',
                                    textWrap: 'balance',
                                    color: '#f4f4f4',
                                  }}
                                >
                                  {t(x?.h)}
                                </h2>
                                <p
                                  data-yj-rv="up"
                                  style={{
                                    margin: '0',
                                    alignSelf: 'flex-end',
                                    fontSize: '18px',
                                    lineHeight: '1.55',
                                    maxWidth: '560px',
                                    color: '#cccccc',
                                    textWrap: 'pretty',
                                  }}
                                >
                                  {t(x?.p)}
                                </p>
                              </div>{' '}
                            </>
                          ) : null}{' '}
                        </div>{' '}
                      </>
                    ))}{' '}
                    {v.hasVoices ? (
                      <>
                        {' '}
                        <section
                          data-story={v.chV?.idx}
                          aria-label="Research voice notes"
                          style={css(
                            `order:${v.ordVoices ?? ''};border-top:1px solid #222222;width:100%;max-width:1600px;margin:0 auto;padding:120px clamp(20px,7vw,128px);box-sizing:border-box`,
                          )}
                        >
                          {' '}
                          <div
                            data-yj-rv="up"
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                              gap: '24px 56px',
                              alignItems: 'end',
                              paddingTop: '24px',
                              borderTop: '2px solid #f4f4f4',
                              paddingBottom: '64px',
                            }}
                          >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                              <span
                                style={{
                                  fontFamily: 'Geist,sans-serif',
                                  fontWeight: '500',
                                  fontSize: '13px',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  color: 'var(--yj-accent, #ff4d2e)',
                                }}
                              >
                                {t(v.chV?.n)}
                                {' / '}
                                {t(v.chTotal)}
                                {' — '}
                                {t(v.chV?.phase)}
                                {' · Voice notes'}
                              </span>
                              <h2
                                style={{
                                  margin: '0',
                                  fontFamily: "'Instrument Serif',serif",
                                  fontStyle: 'italic',
                                  fontWeight: '400',
                                  fontSize: 'clamp(33px,3.75vw,63px)',
                                  lineHeight: '0.95',
                                  color: '#f4f4f4',
                                  textWrap: 'balance',
                                }}
                              >
                                {t(v.cur?.voicesH)}
                              </h2>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '520px' }}>
                              <p
                                style={{
                                  margin: '0',
                                  fontSize: '18px',
                                  lineHeight: '1.5',
                                  color: '#cccccc',
                                  textWrap: 'pretty',
                                }}
                              >
                                {t(v.cur?.voicesP)}
                              </p>
                              <p
                                style={{
                                  margin: '0',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '10px',
                                  fontFamily: 'Geist,sans-serif',
                                  fontWeight: '500',
                                  fontSize: '13px',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  color: '#999999',
                                }}
                              >
                                <span
                                  aria-hidden="true"
                                  style={{
                                    flex: 'none',
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: 'var(--yj-accent, #ff4d2e)',
                                  }}
                                />
                                Note: audio is re-voiced and edited for privacy. Words are the participants’ own.
                              </p>
                            </div>
                          </div>{' '}
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
                              gap: '12px',
                            }}
                          >
                            {each(v.voiceList, (vItem, $index) => (
                              <>
                                <article
                                  data-yj-rv="up"
                                  style={css(
                                    `background:#141414;border-top:2px solid ${vItem?.line ?? ''};padding:28px;display:flex;flex-direction:column;gap:28px;min-height:340px;box-sizing:border-box;transition:border-color 300ms`,
                                  )}
                                >
                                  <div
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                      alignItems: 'center',
                                      gap: '12px',
                                      fontFamily: 'Geist,sans-serif',
                                      fontWeight: '500',
                                      fontSize: '13px',
                                      letterSpacing: '0.08em',
                                      textTransform: 'uppercase',
                                    }}
                                  >
                                    <span style={{ color: '#999999' }}>
                                      {t(vItem?.n)}
                                      {' — '}
                                      {t(vItem?.who)}
                                    </span>
                                    <span
                                      style={{
                                        padding: '5px 10px',
                                        border: '1.5px solid #333333',
                                        color: '#cccccc',
                                        whiteSpace: 'nowrap',
                                      }}
                                    >
                                      {t(vItem?.theme)}
                                    </span>
                                  </div>
                                  <p
                                    style={{
                                      margin: '0',
                                      flex: '1',
                                      fontFamily: "'Instrument Serif',serif",
                                      fontStyle: 'italic',
                                      fontSize: 'clamp(26px,2.2vw,34px)',
                                      lineHeight: '1.08',
                                      color: '#f4f4f4',
                                      textWrap: 'pretty',
                                    }}
                                  >
                                    “{t(vItem?.prompt)}”
                                  </p>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                                    <button
                                      className="dc-hover-90b17f67 dc-active-60c5ffca"
                                      onClick={vItem?.toggle}
                                      aria-label={`Play voice note ${vItem?.n ?? ''}`}
                                      style={css(
                                        `all:unset;cursor:pointer;flex:0 0 auto;width:56px;height:56px;border-radius:50%;background:${vItem?.btnBg ?? ''};color:#000000;display:flex;align-items:center;justify-content:center;transition:background 300ms,transform 200ms`,
                                      )}
                                    >
                                      {vItem?.off ? (
                                        <>
                                          <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="#000000"
                                            style={{ marginLeft: '3px', fill: 'var(--color-surface)' }}
                                          >
                                            <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5Z" />
                                          </svg>
                                        </>
                                      ) : null}
                                      {vItem?.on ? (
                                        <>
                                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000">
                                            <rect x="6" y="4" width="4" height="16" />
                                            <rect x="14" y="4" width="4" height="16" />
                                          </svg>
                                        </>
                                      ) : null}
                                    </button>
                                    <div
                                      style={{
                                        flex: '1',
                                        minWidth: '0',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '8px',
                                      }}
                                    >
                                      <div
                                        aria-hidden="true"
                                        style={{ height: '44px', display: 'flex', alignItems: 'center', gap: '2px' }}
                                      >
                                        {each(vItem?.bars, (b, $index) => (
                                          <>
                                            <span
                                              style={css(
                                                `flex:1;min-width:1px;height:${b?.hh ?? ''};background:${b?.c ?? ''};transition:background 200ms`,
                                              )}
                                            />
                                          </>
                                        ))}
                                      </div>
                                      <div
                                        style={{
                                          display: 'flex',
                                          justifyContent: 'space-between',
                                          fontFamily: 'Geist,sans-serif',
                                          fontWeight: '500',
                                          fontSize: '13px',
                                          letterSpacing: '0.08em',
                                          color: '#999999',
                                        }}
                                      >
                                        <span>{t(vItem?.time)}</span>
                                        <span>{t(vItem?.durL)}</span>
                                      </div>
                                    </div>
                                  </div>
                                  {vItem?.hasT ? (
                                    <>
                                      <p
                                        style={{
                                          margin: '0',
                                          fontSize: '16px',
                                          lineHeight: '1.55',
                                          color: '#8c8c8c',
                                          borderTop: '1px solid #2a2a2a',
                                          paddingTop: '18px',
                                          textWrap: 'pretty',
                                        }}
                                      >
                                        <span style={{ color: '#f4f4f4', transition: 'color 200ms' }}>
                                          {t(vItem?.tA)}
                                        </span>
                                        {t(vItem?.tB)}
                                      </p>
                                    </>
                                  ) : null}
                                  {vItem?.noT ? (
                                    <>
                                      <p
                                        style={{
                                          margin: '0',
                                          fontFamily: 'Geist,sans-serif',
                                          fontWeight: '500',
                                          fontSize: '13px',
                                          letterSpacing: '0.08em',
                                          textTransform: 'uppercase',
                                          color: '#8c8c8c',
                                          borderTop: '1px solid #2a2a2a',
                                          paddingTop: '18px',
                                        }}
                                      >
                                        [Add recording + transcript]
                                      </p>
                                    </>
                                  ) : null}
                                </article>
                              </>
                            ))}
                          </div>{' '}
                        </section>{' '}
                      </>
                    ) : null}{' '}
                    {v.hasPlan ? (
                      <>
                        {' '}
                        <section
                          data-story={v.chP?.idx}
                          aria-label="Strategy plan"
                          style={css(
                            `order:${v.ordPlan ?? ''};border-top:1px solid #222222;width:100%;max-width:1600px;margin:0 auto;padding:120px clamp(20px,7vw,128px);box-sizing:border-box`,
                          )}
                        >
                          {' '}
                          <div
                            data-yj-rv="up"
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                              gap: '24px 56px',
                              alignItems: 'end',
                              paddingTop: '24px',
                              borderTop: '2px solid #f4f4f4',
                              paddingBottom: '64px',
                            }}
                          >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                              <span
                                style={{
                                  fontFamily: 'Geist,sans-serif',
                                  fontWeight: '500',
                                  fontSize: '13px',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  color: 'var(--yj-accent, #ff4d2e)',
                                }}
                              >
                                {t(v.chP?.n)}
                                {' / '}
                                {t(v.chTotal)}
                                {' — '}
                                {t(v.chP?.phase)}
                                {' · Strategy plan'}
                              </span>
                              <h2
                                style={{
                                  margin: '0',
                                  fontFamily: "'Instrument Serif',serif",
                                  fontStyle: 'italic',
                                  fontWeight: '400',
                                  fontSize: 'clamp(33px,3.75vw,63px)',
                                  lineHeight: '0.95',
                                  color: '#f4f4f4',
                                  textWrap: 'balance',
                                }}
                              >
                                {t(v.plan?.h)}
                              </h2>
                            </div>
                            <p
                              style={{
                                margin: '0',
                                fontSize: '18px',
                                lineHeight: '1.5',
                                color: '#cccccc',
                                maxWidth: '520px',
                                textWrap: 'pretty',
                              }}
                            >
                              {t(v.plan?.p)}
                            </p>
                          </div>{' '}
                          {v.plan?.hasLadder ? (
                            <>
                              {' '}
                              <div
                                style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingBottom: '96px' }}
                              >
                                <div
                                  data-yj-rv="up"
                                  style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-between',
                                    alignItems: 'baseline',
                                    gap: '12px 40px',
                                  }}
                                >
                                  <h3
                                    style={{
                                      margin: '0',
                                      fontSize: 'clamp(26px,2.2vw,36px)',
                                      lineHeight: '1.05',
                                      letterSpacing: '-0.02em',
                                      fontWeight: '600',
                                      color: '#f4f4f4',
                                    }}
                                  >
                                    {t(v.plan?.ladderH)}
                                  </h3>
                                  <p
                                    style={{
                                      margin: '0',
                                      fontSize: '17px',
                                      lineHeight: '1.5',
                                      color: '#999999',
                                      maxWidth: '560px',
                                      textWrap: 'pretty',
                                    }}
                                  >
                                    {t(v.plan?.ladderP)}
                                  </p>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                  <div
                                    style={{
                                      display: 'grid',
                                      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,170px),1fr))',
                                      gap: '32px 24px',
                                      borderTop: '1px solid #333333',
                                      paddingTop: '24px',
                                    }}
                                  >
                                    {each(v.plan?.stages, (st, $index) => (
                                      <>
                                        <div
                                          data-yj-rv="up"
                                          style={{
                                            minWidth: '0',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '12px',
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontFamily: 'Geist,sans-serif',
                                              fontWeight: '500',
                                              fontSize: '13px',
                                              letterSpacing: '0.08em',
                                              color: 'var(--yj-accent, #ff4d2e)',
                                            }}
                                          >
                                            {t(st?.n)}
                                          </span>
                                          <span
                                            style={{
                                              fontSize: 'clamp(20px,1.5vw,26px)',
                                              fontWeight: '600',
                                              letterSpacing: '-0.02em',
                                              lineHeight: '1.05',
                                              color: '#f4f4f4',
                                              overflowWrap: 'anywhere',
                                            }}
                                          >
                                            {t(st?.k)}
                                          </span>
                                          <span
                                            style={{
                                              fontFamily: "'Instrument Serif',serif",
                                              fontStyle: 'italic',
                                              fontSize: '18px',
                                              lineHeight: '1.15',
                                              color: '#cccccc',
                                            }}
                                          >
                                            {t(st?.shift)}
                                          </span>
                                          <p
                                            style={{
                                              margin: '0',
                                              fontSize: '16px',
                                              lineHeight: '1.45',
                                              color: '#999999',
                                              textWrap: 'pretty',
                                            }}
                                          >
                                            {t(st?.d)}
                                          </p>
                                        </div>
                                      </>
                                    ))}
                                  </div>
                                  <div
                                    style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px', paddingTop: '8px' }}
                                  >
                                    {each(v.plan?.bands, (bd, $index) => (
                                      <>
                                        <span
                                          style={{
                                            fontFamily: 'Geist,sans-serif',
                                            fontWeight: '500',
                                            fontSize: '13px',
                                            letterSpacing: '0.08em',
                                            textTransform: 'uppercase',
                                            color: '#8c8c8c',
                                          }}
                                        >
                                          {t(bd?.k)}
                                          {' — '}
                                          {t(bd?.when)}
                                        </span>
                                      </>
                                    ))}
                                  </div>
                                </div>
                              </div>{' '}
                            </>
                          ) : null}{' '}
                          {v.plan?.hasRoad ? (
                            <>
                              {' '}
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '20px',
                                  paddingBottom: '96px',
                                  minHeight: 'calc(100vh - 140px)',
                                  boxSizing: 'border-box',
                                }}
                              >
                                <div
                                  data-yj-rv="up"
                                  style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-between',
                                    alignItems: 'baseline',
                                    gap: '12px 40px',
                                    paddingTop: '40px',
                                  }}
                                >
                                  <h3
                                    style={{
                                      margin: '0',
                                      fontSize: 'clamp(26px,2.2vw,36px)',
                                      lineHeight: '1.05',
                                      letterSpacing: '-0.02em',
                                      fontWeight: '600',
                                      color: '#f4f4f4',
                                    }}
                                  >
                                    {t(v.plan?.roadH)}
                                  </h3>
                                  <p
                                    style={{
                                      margin: '0',
                                      fontSize: '17px',
                                      lineHeight: '1.5',
                                      color: '#999999',
                                      maxWidth: '560px',
                                      textWrap: 'pretty',
                                    }}
                                  >
                                    {t(v.plan?.roadP)}
                                  </p>
                                </div>
                                <div
                                  style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '16px',
                                  }}
                                >
                                  <div
                                    role="group"
                                    aria-label="Filter by horizon"
                                    style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
                                  >
                                    {each(v.plan?.roadHzBtns, (z, $index) => (
                                      <>
                                        <button
                                          className="dc-hover-e246ab14"
                                          onClick={z?.go}
                                          aria-pressed={z?.on}
                                          style={css(
                                            `all:unset;cursor:pointer;display:flex;align-items:center;gap:10px;padding:10px 14px;border:1.5px solid ${z?.line ?? ''};font-family:Geist,sans-serif;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;font-size:13px;color:#f4f4f4;transition:border-color 200ms`,
                                          )}
                                        >
                                          <span
                                            style={css(`width:18px;height:6px;background:${z?.c ?? ''};display:block`)}
                                          />
                                          {t(z?.k, true)}
                                        </button>
                                      </>
                                    ))}
                                  </div>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <button
                                      className="dc-hover-e246ab14"
                                      onClick={v.plan?.roadPrev}
                                      aria-label="Previous year"
                                      style={{
                                        all: 'unset',
                                        cursor: 'pointer',
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1.5px solid #333333',
                                        color: '#f4f4f4',
                                        fontSize: '18px',
                                      }}
                                    >
                                      ←
                                    </button>
                                    <button
                                      className="dc-hover-e246ab14"
                                      onClick={v.plan?.roadNext}
                                      aria-label="Next year"
                                      style={{
                                        all: 'unset',
                                        cursor: 'pointer',
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1.5px solid #333333',
                                        color: '#f4f4f4',
                                        fontSize: '18px',
                                      }}
                                    >
                                      →
                                    </button>
                                  </div>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'stretch' }}>
                                  <div
                                    style={{
                                      flex: '999 1 640px',
                                      minWidth: '0',
                                      overflowX: 'auto',
                                      scrollbarWidth: 'thin',
                                      scrollbarColor: '#333333 transparent',
                                    }}
                                  >
                                    {' '}
                                    <div
                                      style={{
                                        position: 'relative',
                                        minWidth: '640px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                      }}
                                    >
                                      <div
                                        aria-hidden="true"
                                        style={css(
                                          `position:absolute;top:0;bottom:0;left:${v.plan?.roadCol?.l ?? ''};width:${v.plan?.roadCol?.w ?? ''};background:color-mix(in oklab, var(--yj-accent, #ff4d2e) 9%, transparent);border-left:1px solid var(--yj-accent, #ff4d2e);border-right:1px solid var(--yj-accent, #ff4d2e);box-sizing:border-box;transition:left 450ms cubic-bezier(.2,.8,.2,1);pointer-events:none`,
                                        )}
                                      />
                                      <div
                                        role="tablist"
                                        aria-label="Year"
                                        style={{
                                          display: 'grid',
                                          gridTemplateColumns: 'repeat(6,minmax(0,1fr))',
                                          borderBottom: '2px solid #f4f4f4',
                                          position: 'relative',
                                        }}
                                      >
                                        {each(v.plan?.roadYears, (yy, $index) => (
                                          <>
                                            <button
                                              className="dc-hover-d2cded96"
                                              role="tab"
                                              onClick={yy?.go}
                                              aria-selected={yy?.on}
                                              style={css(
                                                `all:unset;cursor:pointer;padding:10px 0 8px;text-align:center;font-family:Geist,'Geist Display',sans-serif;font-weight:700;font-size:clamp(22px,2.2vw,36px);line-height:1;color:${yy?.fg ?? ''};background:${yy?.bg ?? ''};transition:background 300ms,color 300ms`,
                                              )}
                                            >
                                              {t(yy?.t)}
                                            </button>
                                          </>
                                        ))}
                                      </div>
                                      {each(v.plan?.roadGroups, (g, $index) => (
                                        <>
                                          <div
                                            style={{
                                              display: 'flex',
                                              flexDirection: 'column',
                                              padding: '10px 0 4px',
                                              borderBottom: '1px solid #2a2a2a',
                                              position: 'relative',
                                            }}
                                          >
                                            <span
                                              style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                fontFamily: 'Geist,sans-serif',
                                                fontWeight: '500',
                                                letterSpacing: '0.08em',
                                                textTransform: 'uppercase',
                                                fontSize: '12px',
                                                color: '#8c8c8c',
                                                paddingBottom: '2px',
                                              }}
                                            >
                                              <span
                                                style={css(
                                                  `width:18px;height:6px;background:${g?.c ?? ''};display:block`,
                                                )}
                                              />
                                              {t(g?.k, true)}
                                            </span>
                                            {each(g?.rows, (r, $index) => (
                                              <>
                                                <div
                                                  style={css(
                                                    `position:relative;height:32px;opacity:${r?.op ?? ''};transition:opacity 350ms`,
                                                  )}
                                                >
                                                  {' '}
                                                  <span
                                                    style={css(
                                                      `position:absolute;top:2px;left:${r?.labL ?? ''};right:${r?.labR ?? ''};text-align:${r?.labAlign ?? ''};white-space:nowrap;font-size:14px;line-height:1.2;font-weight:600;color:${r?.fg ?? ''};transition:color 300ms`,
                                                    )}
                                                  >
                                                    {t(r?.k)}{' '}
                                                    <span
                                                      style={{
                                                        fontFamily: 'Geist,sans-serif',
                                                        fontWeight: '400',
                                                        letterSpacing: '0.08em',
                                                        textTransform: 'uppercase',
                                                        fontSize: '12px',
                                                        color: '#8c8c8c',
                                                      }}
                                                    >
                                                      {t(r?.when)}
                                                    </span>
                                                  </span>{' '}
                                                  {each(r?.segs, (sg, $index) => (
                                                    <>
                                                      {' '}
                                                      <span
                                                        style={css(
                                                          `position:absolute;top:22px;height:6px;left:${sg?.l ?? ''};width:${sg?.w ?? ''};background:${sg?.c ?? ''}`,
                                                        )}
                                                      />{' '}
                                                    </>
                                                  ))}{' '}
                                                </div>
                                              </>
                                            ))}
                                          </div>
                                        </>
                                      ))}
                                    </div>{' '}
                                  </div>
                                  <div
                                    data-yj-rv="up"
                                    style={{
                                      flex: '1 1 240px',
                                      minWidth: '0',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '16px',
                                      padding: '20px',
                                      background: '#141414',
                                      borderTop: '2px solid var(--yj-accent, #ff4d2e)',
                                      boxSizing: 'border-box',
                                    }}
                                  >
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                      <span
                                        style={{
                                          fontFamily: 'Geist,sans-serif',
                                          fontWeight: '500',
                                          letterSpacing: '0.08em',
                                          textTransform: 'uppercase',
                                          fontSize: '13px',
                                          color: 'var(--yj-accent, #ff4d2e)',
                                        }}
                                      >
                                        {'In '}
                                        {t(v.plan?.roadSel?.t)}
                                      </span>
                                      <span
                                        style={{
                                          fontFamily: "Geist,'Geist Display',sans-serif",
                                          fontWeight: '700',
                                          fontSize: 'clamp(36px,3vw,54px)',
                                          lineHeight: '0.85',
                                          color: '#f4f4f4',
                                        }}
                                      >
                                        {t(v.plan?.roadSel?.n)}
                                      </span>
                                      <span style={{ fontSize: '16px', color: '#cccccc' }}>
                                        {'workstreams running · '}
                                        {t(v.plan?.roadSel?.phase)}
                                      </span>
                                    </div>
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
                                      {each(v.plan?.roadSel?.list, (li, $index) => (
                                        <>
                                          <li
                                            style={{
                                              display: 'flex',
                                              alignItems: 'center',
                                              gap: '8px',
                                              padding: '6px 0',
                                              borderBottom: '1px solid #2a2a2a',
                                              fontSize: '14px',
                                              lineHeight: '1.3',
                                              color: '#f4f4f4',
                                            }}
                                          >
                                            <span
                                              style={css(
                                                `width:8px;height:8px;background:${li?.c ?? ''};display:block`,
                                              )}
                                            />
                                            {t(li?.k, true)}
                                          </li>
                                        </>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>{' '}
                              <section
                                data-story={v.chO?.idx}
                                aria-label="Design outcome"
                                style={css(
                                  `order:${v.ordOutcome ?? ''};border-top:1px solid #222222;width:100%;max-width:1600px;margin:0 auto;padding:120px clamp(20px,7vw,128px);box-sizing:border-box`,
                                )}
                              >
                                {' '}
                                <div
                                  data-yj-rv="up"
                                  style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                                    gap: '24px 56px',
                                    alignItems: 'end',
                                    paddingTop: '24px',
                                    borderTop: '2px solid #f4f4f4',
                                    paddingBottom: '64px',
                                  }}
                                >
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                                    <span
                                      style={{
                                        fontFamily: 'Geist,sans-serif',
                                        fontWeight: '500',
                                        fontSize: '13px',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        color: 'var(--yj-accent, #ff4d2e)',
                                      }}
                                    >
                                      {t(v.chO?.n)}
                                      {' / '}
                                      {t(v.chTotal)}
                                      {' — '}
                                      {t(v.chO?.phase)}
                                      {' · Design outcome'}
                                    </span>
                                    <h2
                                      style={{
                                        margin: '0',
                                        fontFamily: "'Instrument Serif',serif",
                                        fontStyle: 'italic',
                                        fontWeight: '400',
                                        fontSize: 'clamp(33px,3.75vw,63px)',
                                        lineHeight: '0.95',
                                        color: '#f4f4f4',
                                        textWrap: 'balance',
                                      }}
                                    >
                                      {t(v.outcome?.h)}
                                    </h2>
                                  </div>
                                  <p
                                    style={{
                                      margin: '0',
                                      fontSize: '18px',
                                      lineHeight: '1.5',
                                      color: '#cccccc',
                                      maxWidth: '520px',
                                      textWrap: 'pretty',
                                    }}
                                  >
                                    {t(v.outcome?.p)}
                                  </p>
                                </div>{' '}
                                <div
                                  style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,230px),1fr))',
                                    gridAutoRows: 'minmax(380px,auto)',
                                    gridAutoFlow: 'dense',
                                    gap: '12px',
                                  }}
                                >
                                  {each(v.outcome?.items, (o, $index) => (
                                    <>
                                      <figure
                                        data-yj-rv="scale"
                                        style={css(
                                          `margin:0;grid-column:${o?.col ?? ''};grid-row:${o?.row ?? ''};display:flex;flex-direction:column;background:#141414;min-width:0`,
                                        )}
                                      >
                                        <button
                                          onClick={o?.open}
                                          aria-label={`Enlarge ${o?.k ?? ''}`}
                                          style={{
                                            all: 'unset',
                                            cursor: 'zoom-in',
                                            flex: '1',
                                            minHeight: '280px',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            display: 'block',
                                          }}
                                        >
                                          {' '}
                                          <img
                                            className="dc-hover-ce0189d7"
                                            src={asset(o?.src)}
                                            alt={o?.k}
                                            loading="lazy"
                                            style={{
                                              position: 'absolute',
                                              inset: '16px',
                                              width: 'calc(100% - 32px)',
                                              height: 'calc(100% - 32px)',
                                              objectFit: 'contain',
                                              transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                                            }}
                                          />{' '}
                                        </button>
                                        <figcaption
                                          style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'minmax(0,1fr)',
                                            gap: '6px',
                                            padding: '18px 24px 22px',
                                            borderTop: '1px solid #2a2a2a',
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontFamily: 'Geist,sans-serif',
                                              fontWeight: '500',
                                              fontSize: '13px',
                                              letterSpacing: '0.08em',
                                              textTransform: 'uppercase',
                                              color: '#f4f4f4',
                                            }}
                                          >
                                            {t(o?.k)}
                                          </span>
                                          <span
                                            style={{
                                              fontSize: '16px',
                                              lineHeight: '1.45',
                                              color: '#999999',
                                              textWrap: 'pretty',
                                            }}
                                          >
                                            {t(o?.d)}
                                          </span>
                                        </figcaption>
                                      </figure>
                                    </>
                                  ))}
                                </div>{' '}
                              </section>
                              <h3
                                data-yj-rv="up"
                                style={{
                                  margin: '0 0 24px',
                                  fontSize: 'clamp(26px,2.2vw,36px)',
                                  lineHeight: '1.05',
                                  letterSpacing: '-0.02em',
                                  fontWeight: '600',
                                  color: '#f4f4f4',
                                }}
                              >
                                {t(v.plan?.sysH)}
                              </h3>{' '}
                            </>
                          ) : null}{' '}
                          <ol
                            style={{
                              margin: '0',
                              padding: '0',
                              listStyle: 'none',
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))',
                              gap: '0',
                            }}
                          >
                            {each(v.plan?.phases, (p, $index) => (
                              <>
                                <li
                                  data-yj-rv="up"
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px',
                                    padding: '28px 28px 36px 0',
                                    borderTop: '2px solid #333333',
                                    position: 'relative',
                                  }}
                                >
                                  <span
                                    aria-hidden="true"
                                    style={{
                                      position: 'absolute',
                                      top: '-6px',
                                      left: '0',
                                      width: '10px',
                                      height: '10px',
                                      background: 'var(--yj-accent, #ff4d2e)',
                                    }}
                                  />
                                  <div
                                    style={{
                                      display: 'flex',
                                      alignItems: 'baseline',
                                      justifyContent: 'space-between',
                                      gap: '12px',
                                      paddingTop: '8px',
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontFamily: "Geist,'Geist Display',sans-serif",
                                        fontWeight: '700',
                                        fontSize: 'clamp(42px,3.75vw,66px)',
                                        lineHeight: '0.8',
                                        color: '#2a2a2a',
                                      }}
                                    >
                                      {t(p?.n)}
                                    </span>
                                    <span
                                      style={{
                                        fontFamily: 'Geist,sans-serif',
                                        fontWeight: '500',
                                        fontSize: '13px',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        color: '#999999',
                                        textAlign: 'right',
                                      }}
                                    >
                                      {t(p?.when)}
                                    </span>
                                  </div>
                                  <h3
                                    style={{
                                      margin: '0',
                                      fontSize: 'clamp(28px,2.4vw,40px)',
                                      lineHeight: '1',
                                      letterSpacing: '-0.02em',
                                      fontWeight: '600',
                                      color: '#f4f4f4',
                                    }}
                                  >
                                    {t(p?.k)}
                                  </h3>
                                  <p
                                    style={{
                                      margin: '0',
                                      fontSize: '18px',
                                      lineHeight: '1.45',
                                      color: '#cccccc',
                                      textWrap: 'pretty',
                                    }}
                                  >
                                    {t(p?.goal)}
                                  </p>
                                  <ul
                                    style={{
                                      margin: '0',
                                      padding: '0',
                                      listStyle: 'none',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '10px',
                                      flex: '1',
                                    }}
                                  >
                                    {each(p?.acts, (a, $index) => (
                                      <>
                                        <li
                                          style={{
                                            display: 'grid',
                                            gridTemplateColumns: '18px minmax(0,1fr)',
                                            gap: '8px',
                                            fontSize: '16px',
                                            lineHeight: '1.45',
                                            color: '#999999',
                                          }}
                                        >
                                          <span style={{ color: 'var(--yj-accent, #ff4d2e)' }}>—</span>
                                          <span>{t(a)}</span>
                                        </li>
                                      </>
                                    ))}
                                  </ul>
                                  <div
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '6px',
                                      paddingTop: '16px',
                                      borderTop: '1px solid #2a2a2a',
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontFamily: 'Geist,sans-serif',
                                        fontWeight: '500',
                                        fontSize: '13px',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        color: '#8c8c8c',
                                      }}
                                    >
                                      {t(p?.sigK)}
                                    </span>
                                    <span style={{ fontSize: '16px', color: '#f4f4f4' }}>{t(p?.sig)}</span>
                                  </div>
                                </li>
                              </>
                            ))}
                          </ol>{' '}
                        </section>{' '}
                      </>
                    ) : null}{' '}
                    {v.hasOutcome ? <> </> : null}{' '}
                    {v.hasTesting ? (
                      <>
                        {' '}
                        <section
                          data-story={v.chT?.idx}
                          aria-label="User testing"
                          style={css(
                            `order:${v.ordTesting ?? ''};border-top:1px solid #222222;width:100%;max-width:1600px;margin:0 auto;padding:120px clamp(20px,7vw,128px);box-sizing:border-box`,
                          )}
                        >
                          {' '}
                          <div
                            data-yj-rv="up"
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                              gap: '24px 56px',
                              alignItems: 'end',
                              paddingTop: '24px',
                              borderTop: '2px solid #f4f4f4',
                              paddingBottom: '64px',
                            }}
                          >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                              <span
                                style={{
                                  fontFamily: 'Geist,sans-serif',
                                  fontWeight: '500',
                                  fontSize: '13px',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  color: 'var(--yj-accent, #ff4d2e)',
                                }}
                              >
                                {t(v.chT?.n)}
                                {' / '}
                                {t(v.chTotal)}
                                {' — '}
                                {t(v.chT?.phase)}
                                {' · Testing & result'}
                              </span>
                              <h2
                                style={{
                                  margin: '0',
                                  fontFamily: "'Instrument Serif',serif",
                                  fontStyle: 'italic',
                                  fontWeight: '400',
                                  fontSize: 'clamp(33px,3.75vw,63px)',
                                  lineHeight: '0.95',
                                  color: '#f4f4f4',
                                  textWrap: 'balance',
                                }}
                              >
                                {t(v.testing?.h)}
                              </h2>
                            </div>
                            <p
                              style={{
                                margin: '0',
                                fontSize: '18px',
                                lineHeight: '1.5',
                                color: '#cccccc',
                                maxWidth: '520px',
                                textWrap: 'pretty',
                              }}
                            >
                              {t(v.testing?.p)}
                            </p>
                          </div>{' '}
                          {v.testing?.hasPeople ? (
                            <>
                              {' '}
                              <div
                                style={{
                                  display: 'grid',
                                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))',
                                  gap: '16px',
                                }}
                              >
                                {each(v.testing?.people, (pp, $index) => (
                                  <>
                                    <article
                                      className="dc-hover-262b23ed"
                                      data-yj-rv="up"
                                      style={{
                                        minWidth: '0',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        background: 'linear-gradient(180deg,#1a1a1d,#111113)',
                                        border: '1px solid #2a2a2c',
                                        transition: 'transform 450ms cubic-bezier(.2,1.2,.3,1), border-color 300ms',
                                      }}
                                    >
                                      <button
                                        onClick={pp?.open}
                                        aria-label={`Enlarge photo of ${pp?.name ?? ''}`}
                                        style={{
                                          all: 'unset',
                                          cursor: 'zoom-in',
                                          display: 'block',
                                          position: 'relative',
                                          aspectRatio: '4/5',
                                          overflow: 'hidden',
                                          background: '#141414',
                                        }}
                                      >
                                        {' '}
                                        <img
                                          className="dc-hover-5cb87b1a"
                                          src={asset(pp?.src)}
                                          alt={`${pp?.name ?? ''} testing CRAY`}
                                          loading="lazy"
                                          style={{
                                            position: 'absolute',
                                            inset: '0',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                                          }}
                                        />{' '}
                                        <span
                                          style={{
                                            position: 'absolute',
                                            left: '12px',
                                            bottom: '12px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '2px',
                                            padding: '8px 12px',
                                            borderRadius: '10px',
                                            background: '#0c0c0c',
                                          }}
                                        >
                                          <span style={{ fontSize: '15px', fontWeight: '600', color: '#f4f4f4' }}>
                                            {t(pp?.name)}
                                          </span>
                                          <span style={{ fontSize: '13px', color: '#999999' }}>{t(pp?.role)}</span>
                                        </span>{' '}
                                      </button>
                                      <div
                                        style={{
                                          flex: '1',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          gap: '14px',
                                          padding: '18px 18px 20px',
                                        }}
                                      >
                                        <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                          <span
                                            style={{
                                              fontFamily: 'Geist,sans-serif',
                                              fontWeight: '500',
                                              fontSize: '13px',
                                              letterSpacing: '0.08em',
                                              textTransform: 'uppercase',
                                              color: '#8c8c8c',
                                            }}
                                          >
                                            Task
                                          </span>
                                          <span style={{ fontSize: '15px', fontWeight: '600', color: '#f4f4f4' }}>
                                            {t(pp?.task)}
                                          </span>
                                        </span>
                                        <p
                                          style={{
                                            margin: '0',
                                            fontSize: '17px',
                                            lineHeight: '1.4',
                                            color: '#f4f4f4',
                                            textWrap: 'pretty',
                                          }}
                                        >
                                          “{t(pp?.said)}”
                                        </p>
                                        <div
                                          style={{
                                            marginTop: 'auto',
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '10px',
                                            padding: '10px 12px',
                                            borderRadius: '10px',
                                            background: 'linear-gradient(160deg,#3a2260,#1a1124)',
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontFamily: 'Geist,sans-serif',
                                              fontWeight: '500',
                                              fontSize: '13px',
                                              letterSpacing: '0.08em',
                                              textTransform: 'uppercase',
                                              color: '#d4b0ff',
                                              paddingTop: '2px',
                                              flex: 'none',
                                            }}
                                          >
                                            Fix
                                          </span>
                                          <span style={{ fontSize: '15px', lineHeight: '1.4', color: '#f4f4f4' }}>
                                            {t(pp?.fix)}
                                          </span>
                                        </div>
                                      </div>
                                    </article>
                                  </>
                                ))}
                              </div>{' '}
                              <div data-yj-rv="up" style={{ marginTop: '32px' }}>
                                <div
                                  style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'minmax(120px,180px) minmax(0,1fr)',
                                    gap: '8px 24px',
                                    padding: '24px 0 0',
                                    borderTop: '2px solid #f4f4f4',
                                  }}
                                >
                                  <span
                                    style={{
                                      fontFamily: 'Geist,sans-serif',
                                      fontWeight: '500',
                                      fontSize: '13px',
                                      letterSpacing: '0.08em',
                                      textTransform: 'uppercase',
                                      color: 'var(--yj-accent, #ff4d2e)',
                                      paddingTop: '4px',
                                    }}
                                  >
                                    Result
                                  </span>
                                  <span
                                    style={{
                                      fontSize: 'clamp(20px,1.7vw,26px)',
                                      lineHeight: '1.3',
                                      fontWeight: '600',
                                      letterSpacing: '-0.01em',
                                      color: '#f4f4f4',
                                      textWrap: 'pretty',
                                    }}
                                  >
                                    {t(v.cur?.result)}
                                  </span>
                                </div>
                              </div>{' '}
                            </>
                          ) : null}{' '}
                          {v.testing?.noPeople ? (
                            <>
                              {' '}
                              <div
                                style={{
                                  display: 'grid',
                                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                                  gap: '12px',
                                  alignItems: 'stretch',
                                }}
                              >
                                <div
                                  style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
                                    gap: '12px',
                                  }}
                                >
                                  {each(v.testing?.imgs, (ti, $index) => (
                                    <>
                                      <button
                                        onClick={ti?.open}
                                        aria-label={`Enlarge ${ti?.k ?? ''}`}
                                        data-yj-rv="scale"
                                        style={{
                                          all: 'unset',
                                          cursor: 'zoom-in',
                                          display: 'block',
                                          position: 'relative',
                                          aspectRatio: '3/4',
                                          overflow: 'hidden',
                                          background: '#141414',
                                        }}
                                      >
                                        {' '}
                                        <img
                                          className="dc-hover-5cb87b1a"
                                          src={asset(ti?.src)}
                                          alt={ti?.k}
                                          loading="lazy"
                                          style={{
                                            position: 'absolute',
                                            inset: '0',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 600ms cubic-bezier(.2,.8,.2,1)',
                                          }}
                                        />{' '}
                                      </button>
                                    </>
                                  ))}
                                </div>
                                <dl style={{ margin: '0', display: 'flex', flexDirection: 'column' }}>
                                  {each(v.testing?.findings, (tf, $index) => (
                                    <>
                                      <div
                                        data-yj-rv="up"
                                        style={{
                                          display: 'grid',
                                          gridTemplateColumns: 'minmax(120px,180px) minmax(0,1fr)',
                                          gap: '8px 24px',
                                          padding: '18px 0',
                                          borderTop: '1px solid #2a2a2a',
                                        }}
                                      >
                                        <dt
                                          style={{
                                            fontFamily: 'Geist,sans-serif',
                                            fontWeight: '500',
                                            fontSize: '13px',
                                            letterSpacing: '0.08em',
                                            textTransform: 'uppercase',
                                            color: '#f4f4f4',
                                            paddingTop: '3px',
                                          }}
                                        >
                                          {t(tf?.k)}
                                        </dt>
                                        <dd
                                          style={{
                                            margin: '0',
                                            fontSize: '17px',
                                            lineHeight: '1.45',
                                            color: '#cccccc',
                                            textWrap: 'pretty',
                                          }}
                                        >
                                          {t(tf?.v)}
                                        </dd>
                                      </div>
                                    </>
                                  ))}
                                  <div
                                    style={{
                                      display: 'grid',
                                      gridTemplateColumns: 'minmax(120px,180px) minmax(0,1fr)',
                                      gap: '8px 24px',
                                      padding: '24px 0 0',
                                      borderTop: '2px solid #f4f4f4',
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontFamily: 'Geist,sans-serif',
                                        fontWeight: '500',
                                        fontSize: '13px',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        color: 'var(--yj-accent, #ff4d2e)',
                                        paddingTop: '4px',
                                      }}
                                    >
                                      Result
                                    </span>
                                    <span
                                      style={{
                                        fontSize: 'clamp(20px,1.7vw,26px)',
                                        lineHeight: '1.3',
                                        fontWeight: '600',
                                        letterSpacing: '-0.01em',
                                        color: '#f4f4f4',
                                        textWrap: 'pretty',
                                      }}
                                    >
                                      {t(v.cur?.result)}
                                    </span>
                                  </div>
                                </dl>
                              </div>{' '}
                            </>
                          ) : null}{' '}
                        </section>{' '}
                      </>
                    ) : null}{' '}
                  </div>{' '}
                </section>
              </div>{' '}
              <div style={{ '--yj-accent': 'var(--yj-base, #ff4d2e)', padding: '40px 12px 12px', paddingTop: '120px' }}>
                <div style={{ height: '60vh', minHeight: '420px', position: 'relative', overflow: 'hidden' }}>
                  {t(v.nextBanner)}
                </div>
              </div>
            </>
          ) : null}
          {v.isApproach ? (
            <>
              {' '}
              <section
                style={{
                  maxWidth: '1600px',
                  margin: '0 auto',
                  padding: '130px clamp(20px,7vw,128px) 0',
                  paddingBottom: '120px',
                }}
              >
                {' '}
                <div style={{ margin: '24px', display: 'flex', flexDirection: 'column', gap: 'clamp(48px,6vw,88px)' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '24px',
                      paddingBottom: '32px',
                      borderBottom: '2px solid #f4f4f4',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Geist,sans-serif',
                        fontWeight: '500',
                        fontSize: '13px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#999999',
                      }}
                    >
                      (About)
                    </span>
                    <h1
                      data-yj-rv="mask"
                      style={{
                        margin: '0',
                        maxWidth: '1180px',
                        fontFamily: "Geist,'Geist Display',sans-serif",
                        fontWeight: '700',
                        fontSize: 'clamp(40px,5vw,80px)',
                        lineHeight: '0.92',
                        letterSpacing: '-0.01em',
                        textTransform: 'uppercase',
                        color: '#f4f4f4',
                        textWrap: 'balance',
                      }}
                    >
                      {'Where AI '}
                      <span
                        style={{
                          fontFamily: "'Instrument Serif',serif",
                          fontStyle: 'italic',
                          fontWeight: '400',
                          fontStretch: '100%',
                          textTransform: 'none',
                          color: '#cccccc',
                        }}
                      >
                        (actual intelligence)
                      </span>
                      {' meets AI '}
                      <span
                        style={{
                          fontFamily: "'Instrument Serif',serif",
                          fontStyle: 'italic',
                          fontWeight: '400',
                          fontStretch: '100%',
                          textTransform: 'none',
                          color: 'var(--yj-accent, #ff4d2e)',
                        }}
                      >
                        (artificial intelligence).
                      </span>
                    </h1>
                  </div>
                  <div
                    style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(40px,6vw,96px)', alignItems: 'stretch' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '32px',
                        flex: '999 1 460px',
                        minWidth: '0',
                        maxWidth: '760px',
                      }}
                    >
                      <div
                        data-yj-rv="up"
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
                          borderTop: '2px solid #333333',
                          borderBottom: '2px solid #333333',
                        }}
                      >
                        <div
                          style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '18px 16px 18px 0' }}
                        >
                          <span
                            style={{
                              fontFamily: 'Geist,sans-serif',
                              fontWeight: '500',
                              fontSize: '13px',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              color: '#999999',
                            }}
                          >
                            01
                          </span>
                          <span
                            style={{
                              fontFamily: "Geist,'Geist Display',sans-serif",
                              fontWeight: '700',
                              fontSize: '22px',
                              lineHeight: '1',
                              textTransform: 'uppercase',
                              color: '#f4f4f4',
                            }}
                          >
                            Designer
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            padding: '18px 16px',
                            borderLeft: '2px solid #333333',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'Geist,sans-serif',
                              fontWeight: '500',
                              fontSize: '13px',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              color: '#999999',
                            }}
                          >
                            02
                          </span>
                          <span
                            style={{
                              fontFamily: "Geist,'Geist Display',sans-serif",
                              fontWeight: '700',
                              fontSize: '22px',
                              lineHeight: '1',
                              textTransform: 'uppercase',
                              color: '#f4f4f4',
                            }}
                          >
                            Researcher
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            padding: '18px 16px',
                            borderLeft: '2px solid #333333',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'Geist,sans-serif',
                              fontWeight: '500',
                              fontSize: '13px',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              color: '#999999',
                            }}
                          >
                            03
                          </span>
                          <span
                            style={{
                              fontFamily: "Geist,'Geist Display',sans-serif",
                              fontWeight: '700',
                              fontSize: '22px',
                              lineHeight: '1',
                              textTransform: 'uppercase',
                              color: '#f4f4f4',
                            }}
                          >
                            Thinker
                          </span>
                        </div>
                      </div>
                      <p
                        data-yj-rv="up"
                        style={{
                          margin: '0',
                          maxWidth: '600px',
                          fontSize: '17px',
                          lineHeight: '1.55',
                          color: '#cccccc',
                          textWrap: 'pretty',
                        }}
                      >
                        {t(v.tcsWord)}
                        {
                          ' years designing at TCS, I’ve just completed an MA in Design Management at UAL and am actively looking for what’s next. I bring the human part (curiosity, empathy, judgement) and use AI to move faster, never to think for me. Every brief starts with two questions: '
                        }
                        <span
                          style={{
                            fontFamily: "'Instrument Serif',serif",
                            fontStyle: 'italic',
                            fontSize: '20px',
                            color: '#f4f4f4',
                          }}
                        >
                          why this, and who is it for?
                        </span>
                      </p>
                      <div
                        data-yj-rv="up"
                        style={{ display: 'flex', flexDirection: 'column', borderTop: '2px solid #333333' }}
                      >
                        {each(v.aboutFacts, (f, $index) => (
                          <>
                            <div
                              style={{
                                display: 'grid',
                                gridTemplateColumns: '110px minmax(0,1fr)',
                                gap: '16px',
                                alignItems: 'center',
                                padding: '14px 0',
                                borderBottom: '2px solid #333333',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: 'Geist,sans-serif',
                                  fontWeight: '500',
                                  fontSize: '13px',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  color: '#999999',
                                }}
                              >
                                {t(f?.k)}
                              </span>
                              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                {each(f?.tags, (tg, $index) => (
                                  <>
                                    <span
                                      style={{
                                        padding: '7px 14px',
                                        borderRadius: '999px',
                                        background: 'var(--yj-accent, #ff4d2e)',
                                        color: '#000000',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        lineHeight: '1.2',
                                      }}
                                    >
                                      {t(tg)}
                                    </span>
                                  </>
                                ))}
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <a
                          className="dc-hover-2a13fbd7"
                          href="uploads/assets-1790874602631-0p68.pdf"
                          target="_blank"
                          data-yj-mag="1"
                          style={{
                            padding: '12px 22px',
                            borderRadius: '999px',
                            background: '#f4f4f4',
                            border: '1.5px solid #f4f4f4',
                            fontSize: '15px',
                            fontWeight: '500',
                            textDecoration: 'none',
                            color: '#000000',
                          }}
                        >
                          Download CV ↓
                        </a>
                        <button
                          className="dc-hover-e246ab14"
                          onClick={v.goWork}
                          data-yj-mag="1"
                          style={{
                            all: 'unset',
                            cursor: 'pointer',
                            padding: '12px 22px',
                            borderRadius: '999px',
                            border: '1.5px solid #666666',
                            fontSize: '15px',
                            fontWeight: '500',
                            color: '#f4f4f4',
                          }}
                        >
                          See the work →
                        </button>
                      </div>
                    </div>
                    <div
                      data-yj-drop="1"
                      style={{
                        position: 'relative',
                        flex: '0 1 300px',
                        maxWidth: '320px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: '0 auto',
                        alignSelf: 'stretch',
                      }}
                    >
                      <div
                        style={{
                          width: '34px',
                          height: '80px',
                          background: '#1f2329',
                          borderLeft: '1px solid #333333',
                          borderRight: '1px solid #333333',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                        }}
                      >
                        <span
                          style={{
                            writingMode: 'vertical-rl',
                            transform: 'rotate(180deg)',
                            fontFamily: 'Geist,sans-serif',
                            fontWeight: '500',
                            fontSize: '13px',
                            letterSpacing: '0.24em',
                            textTransform: 'uppercase',
                            color: '#999999',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          Yashvi Jain · Yashvi Jain · Yashvi Jain
                        </span>
                      </div>
                      <div
                        style={{
                          width: '64px',
                          height: '16px',
                          background: '#333333',
                          border: '1px solid #666666',
                          marginTop: '-2px',
                        }}
                      />
                      <div
                        className="dc-hover-83f7e5cb"
                        style={{
                          width: '100%',
                          flex: '1',
                          display: 'flex',
                          flexDirection: 'column',
                          transformOrigin: '50% -90px',
                          transform: 'rotate(-2deg)',
                          transition: 'transform 700ms cubic-bezier(.3,1.6,.4,1)',
                        }}
                      >
                        <div
                          style={{
                            flex: '1',
                            background: '#0d0d0d',
                            border: '2px solid #333333',
                            padding: '14px',
                            boxShadow: '0 40px 80px -30px rgba(0,0,0,0.9)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '14px',
                          }}
                        >
                          <div style={{ height: '10px', background: '#000000', border: '1px solid #333333' }} />
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              gap: '12px',
                            }}
                          >
                            <span
                              style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: 'var(--yj-accent, #ff4d2e)',
                              }}
                            />
                            <span
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                gap: '4px',
                                fontFamily: 'Geist,sans-serif',
                                fontWeight: '500',
                                fontSize: '13px',
                                letterSpacing: '0.18em',
                                textTransform: 'uppercase',
                                color: '#999999',
                              }}
                            >
                              <span>Visitor · Your company, obviously</span>
                              <span style={{ color: '#cccccc', letterSpacing: '0.08em' }}>London · 2026</span>
                            </span>
                          </div>
                          <div
                            style={{
                              flex: '1',
                              minHeight: '160px',
                              position: 'relative',
                              width: '100%',
                              overflow: 'hidden',
                            }}
                          >
                            {t(v.aboutImg)}
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span
                              style={{
                                fontFamily: "Geist,'Geist Display',sans-serif",
                                fontWeight: '700',
                                fontSize: '22px',
                                lineHeight: '0.9',
                                textTransform: 'uppercase',
                                color: '#f4f4f4',
                              }}
                            >
                              Yashvi Jain
                            </span>
                            <span style={{ fontSize: '15px', color: '#999999' }}>Designer · Researcher · Thinker</span>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'flex-end',
                              gap: '16px',
                              paddingTop: '12px',
                              borderTop: '2px solid #333333',
                            }}
                          >
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                              <span
                                style={{
                                  width: '150px',
                                  height: '30px',
                                  background:
                                    'repeating-linear-gradient(90deg,#cccccc 0 2px,transparent 2px 4px,#cccccc 4px 5px,transparent 5px 8px,#cccccc 8px 11px,transparent 11px 12px)',
                                }}
                              />
                              <span
                                style={{
                                  fontFamily: 'Geist,sans-serif',
                                  fontWeight: '500',
                                  fontSize: '13px',
                                  letterSpacing: '0.14em',
                                  color: '#8c8c8c',
                                }}
                              >
                                YJ2026UAL0001
                              </span>
                            </span>
                            <span
                              style={{
                                fontFamily: "Geist,'Geist Display',sans-serif",
                                fontWeight: '700',
                                fontSize: '28px',
                                lineHeight: '1',
                                color: '#f4f4f4',
                              }}
                            >
                              YJ-01
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{' '}
                <div style={{ margin: '96px 24px 0', display: 'flex', flexDirection: 'column', gap: '56px' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                      gap: '32px',
                      paddingBottom: '28px',
                      borderBottom: '2px solid #f4f4f4',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px' }}>
                      <span
                        style={{
                          fontFamily: 'Geist,sans-serif',
                          fontWeight: '500',
                          fontSize: '13px',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#999999',
                        }}
                      >
                        (Off the clock)
                      </span>
                      <h2
                        data-yj-rv="mask"
                        style={{
                          margin: '0',
                          fontFamily: "Geist,'Geist Display',sans-serif",
                          fontWeight: '700',
                          fontSize: 'clamp(28px,3.2vw,48px)',
                          lineHeight: '0.95',
                          textTransform: 'uppercase',
                          color: '#f4f4f4',
                          textWrap: 'balance',
                        }}
                      >
                        {'Simple is good at times. '}
                        <span
                          style={{
                            fontFamily: "'Instrument Serif',serif",
                            fontStyle: 'italic',
                            fontWeight: '400',
                            fontStretch: '100%',
                            textTransform: 'none',
                            color: 'var(--yj-accent, #ff4d2e)',
                          }}
                        >
                          Whatever I do, I go all out.
                        </span>
                      </h2>
                    </div>
                    <p
                      data-yj-rv="up"
                      style={{
                        margin: '0',
                        maxWidth: '380px',
                        fontSize: '17px',
                        lineHeight: '1.5',
                        color: '#cccccc',
                        textWrap: 'pretty',
                      }}
                    >
                      The same habit runs through the work and everything outside it: pare it back to what matters, then
                      give that everything.
                    </p>
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))',
                      gap: '40px 32px',
                    }}
                  >
                    {each(v.offClock, (o, $index) => (
                      <>
                        <div data-yj-rv="up" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                          <div
                            style={{
                              aspectRatio: '4/5',
                              position: 'relative',
                              width: '100%',
                              overflow: 'hidden',
                              background: '#141414',
                              border: '2px solid #333333',
                            }}
                            onMouseDown={v.stop}
                          >
                            {' '}
                            {o?.src ? (
                              <>
                                <div
                                  role="img"
                                  aria-label={o?.alt}
                                  style={css(
                                    `position:absolute;inset:0;background-image:${o?.bg ?? ''};background-size:cover;background-position:50% 45%`,
                                  )}
                                />
                              </>
                            ) : null}{' '}
                            {o?.noSrc ? (
                              <>
                                <div
                                  className="sc-host-x"
                                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%' }}
                                >
                                  <ImageSlot id={o?.slot} placeholder={o?.ph} />
                                </div>
                              </>
                            ) : null}{' '}
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'baseline',
                              gap: '12px',
                              paddingBottom: '14px',
                              borderBottom: '2px solid #333333',
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "Geist,'Geist Display',sans-serif",
                                fontWeight: '700',
                                fontSize: '22px',
                                lineHeight: '0.9',
                                textTransform: 'uppercase',
                                color: '#f4f4f4',
                              }}
                            >
                              {t(o?.k)}
                            </span>
                            <span
                              style={{
                                fontFamily: 'Geist,sans-serif',
                                fontWeight: '500',
                                fontSize: '13px',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                color: '#999999',
                              }}
                            >
                              {t(o?.n)}
                            </span>
                          </div>
                          <p
                            style={{
                              margin: '0',
                              fontSize: '17px',
                              lineHeight: '1.5',
                              color: '#cccccc',
                              textWrap: 'pretty',
                            }}
                          >
                            {t(o?.v)}
                          </p>
                          <p
                            style={{
                              margin: '0',
                              fontFamily: "'Instrument Serif',serif",
                              fontStyle: 'italic',
                              fontSize: '22px',
                              lineHeight: '1.3',
                              color: '#f4f4f4',
                              textWrap: 'pretty',
                            }}
                          >
                            {t(o?.link)}
                          </p>
                          {o?.href ? (
                            <>
                              <a
                                className="dc-hover-bac46065"
                                href={o?.href}
                                target="_blank"
                                style={{
                                  fontFamily: 'Geist,sans-serif',
                                  fontWeight: '500',
                                  fontSize: '13px',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  color: '#f4f4f4',
                                  textDecoration: 'none',
                                  borderBottom: '1.5px solid var(--yj-accent, #ff4d2e)',
                                  alignSelf: 'flex-start',
                                  paddingBottom: '4px',
                                }}
                              >
                                {t(o?.cta)}
                                {' ↗'}
                              </a>
                            </>
                          ) : null}
                        </div>
                      </>
                    ))}
                  </div>
                </div>{' '}
              </section>{' '}
            </>
          ) : null}
          {v.lbOpen ? (
            <>
              {' '}
              <div
                onClick={v.lbClose}
                role="dialog"
                aria-label="Enlarged figure"
                style={{
                  position: 'fixed',
                  inset: '0',
                  zIndex: '90',
                  background: 'rgba(0,0,0,0.92)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '72px 32px 32px',
                  boxSizing: 'border-box',
                  cursor: 'zoom-out',
                }}
              >
                {' '}
                {t(v.lbImg, true)}{' '}
                <button
                  className="dc-hover-e246ab14"
                  onClick={v.lbClose}
                  aria-label="Close"
                  style={{
                    all: 'unset',
                    cursor: 'pointer',
                    position: 'fixed',
                    top: '20px',
                    right: '24px',
                    padding: '10px 18px',
                    borderRadius: '999px',
                    border: '1.5px solid #666666',
                    color: '#f4f4f4',
                    fontFamily: 'Geist,sans-serif',
                    fontWeight: '500',
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Close ✕
                </button>
              </div>
            </>
          ) : null}
          {v.chatOpen ? (
            <>
              {' '}
              <div
                style={{
                  '--yj-accent': 'var(--yj-base, #ff4d2e)',
                  position: 'fixed',
                  right: '24px',
                  bottom: '24px',
                  zIndex: '60',
                  width: 'min(360px,calc(100vw - 48px))',
                  height: 'min(500px,calc(100vh - 140px))',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(10,10,10,0.92)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  color: '#f4f4f4',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    padding: '16px 16px 16px 20px',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        position: 'relative',
                        flex: 'none',
                      }}
                    >
                      <img
                        src="assets/web/assets/yashvi.webp"
                        alt=""
                        style={{
                          position: 'absolute',
                          inset: '0',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: '50% 30%',
                          filter: 'grayscale(1)',
                        }}
                      />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontSize: '16px', fontWeight: '600' }}>{"Yashvi's agent"}</span>
                      <span
                        style={{
                          fontFamily: 'Geist,sans-serif',
                          fontWeight: '500',
                          fontSize: '13px',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#999999',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: 'var(--yj-accent, #ff4d2e)',
                          }}
                        />
                        {'Trained on her CV & work'}
                      </span>
                    </span>
                  </div>
                  <button
                    className="dc-hover-e246ab14"
                    onClick={v.closeChat}
                    aria-label="Close"
                    style={{
                      all: 'unset',
                      cursor: 'pointer',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: '1px solid #666666',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                    }}
                  >
                    ×
                  </button>
                </div>
                <div
                  ref={v.chatRef}
                  style={{
                    flex: '1',
                    overflowY: 'auto',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  {each(v.chatMsgs, (m, $index) => (
                    <>
                      <div
                        style={css(
                          `align-self:${m?.align ?? ''};max-width:85%;display:flex;flex-direction:column;gap:8px;align-items:flex-start`,
                        )}
                      >
                        <div
                          style={css(
                            `padding:12px 16px;border-radius:18px;background:${m?.bg ?? ''};color:${m?.fg ?? ''};font-size:16px;line-height:1.5;white-space:pre-wrap;text-wrap:pretty`,
                          )}
                        >
                          {t(m?.text)}
                        </div>
                        {m?.hasLinks ? (
                          <>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                              {each(m?.links, (l, $index) => (
                                <>
                                  <button
                                    className="dc-hover-133417de"
                                    onClick={l?.open}
                                    style={{
                                      all: 'unset',
                                      cursor: 'pointer',
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '8px',
                                      padding: '8px 14px',
                                      borderRadius: '999px',
                                      border: '1.5px solid var(--yj-accent, #ff4d2e)',
                                      fontSize: '14px',
                                      fontWeight: '500',
                                      color: '#f4f4f4',
                                    }}
                                  >
                                    {t(l?.label, true)}
                                    {' →'}
                                  </button>
                                </>
                              ))}
                            </div>
                          </>
                        ) : null}
                      </div>
                    </>
                  ))}
                  {v.chatBusy ? (
                    <>
                      <div
                        style={{
                          alignSelf: 'flex-start',
                          padding: '12px 16px',
                          borderRadius: '18px',
                          background: '#1a1a1a',
                          color: '#999999',
                          fontSize: '16px',
                        }}
                      >
                        Thinking…
                      </div>
                    </>
                  ) : null}
                </div>
                {v.chatShowSuggest ? (
                  <>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', padding: '0 20px 12px' }}>
                      {each(v.chatSuggest, (q, $index) => (
                        <>
                          <button
                            className="dc-hover-e246ab14"
                            onClick={q?.onClick}
                            style={{
                              all: 'unset',
                              cursor: 'pointer',
                              padding: '9px 16px',
                              borderRadius: '999px',
                              border: '1.5px solid #666666',
                              fontSize: '16px',
                              color: '#f4f4f4',
                              fontWeight: '500',
                            }}
                          >
                            {t(q?.text)}
                          </button>
                        </>
                      ))}
                    </div>
                  </>
                ) : null}
                <form
                  onSubmit={v.chatSubmit}
                  style={{ display: 'flex', gap: '8px', padding: '12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <input
                    value={v.chatInput}
                    onChange={v.chatType}
                    placeholder="Ask about her work, approach, availability…"
                    style={{
                      flex: '1',
                      minWidth: '0',
                      background: '#141414',
                      border: '1px solid #333333',
                      borderRadius: '999px',
                      padding: '12px 18px',
                      color: '#f4f4f4',
                      font: 'inherit',
                      fontSize: '16px',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    aria-label="Send"
                    style={{
                      all: 'unset',
                      cursor: 'pointer',
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: 'var(--yj-accent, #ff4d2e)',
                      color: '#000000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      fontWeight: '700',
                      flex: 'none',
                    }}
                  >
                    ↑
                  </button>
                </form>
              </div>
            </>
          ) : null}
          {v.chatFab ? (
            <>
              {' '}
              <button
                className="dc-hover-e246ab14"
                onClick={v.openChat}
                onMouseEnter={v.fabEnter}
                onMouseLeave={v.fabLeave}
                onFocus={v.fabEnter}
                onBlur={v.fabLeave}
                aria-label="Ask my portfolio agent"
                style={{
                  '--yj-accent': 'var(--yj-base, #ff4d2e)',
                  all: 'unset',
                  cursor: 'pointer',
                  position: 'fixed',
                  right: '24px',
                  bottom: '24px',
                  zIndex: '60',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row-reverse',
                  padding: '6px',
                  borderRadius: '999px',
                  background: 'rgba(0,0,0,0.72)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  color: '#f4f4f4',
                  fontSize: '16px',
                  fontWeight: '500',
                  transition: 'border-color 300ms',
                }}
              >
                <span
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--yj-accent, #ff4d2e)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 'none',
                  }}
                >
                  {t(v.sketchSmall, true)}
                </span>
                <span
                  style={css(
                    `overflow:hidden;white-space:nowrap;max-width:${v.fabLabelW ?? ''};opacity:${v.fabLabelO ?? ''};transition:max-width 500ms cubic-bezier(.22,1,.36,1), opacity 300ms, padding 500ms cubic-bezier(.22,1,.36,1);padding:0 ${v.fabLabelP ?? ''}`,
                  )}
                >
                  Ask my agent
                </span>
              </button>
            </>
          ) : null}
          {v.showCta ? (
            <>
              {' '}
              <div style={{ '--yj-accent': 'var(--yj-base, #ff4d2e)', padding: '40px 12px 12px', paddingTop: '120px' }}>
                <div style={{ position: 'relative', height: '320px', width: '100%' }}>{t(v.cta)}</div>
              </div>
            </>
          ) : null}
          {v.isContact ? (
            <>
              {' '}
              <section
                style={{
                  height: '100svh',
                  boxSizing: 'border-box',
                  padding: 'clamp(88px,14vh,112px) clamp(20px,7vw,128px) clamp(16px,3vh,32px)',
                  maxWidth: '1600px',
                  margin: '0 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(16px,3vh,32px)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    flex: '1',
                    minHeight: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'safe center',
                    gap: 'clamp(12px,3vh,28px)',
                    textAlign: 'center',
                  }}
                >
                  <h1
                    style={{
                      margin: '0',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.06em',
                      color: '#f4f4f4',
                      fontSize: 'clamp(40px,5vw,80px)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Geist,'Geist Display',sans-serif",
                        fontWeight: '700',
                        lineHeight: '0.84',
                        letterSpacing: '-0.005em',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.12em',
                      }}
                    >
                      <span style={{ width: '0.32em', height: '0.07em', background: '#f4f4f4', flex: 'none' }} />
                      {'Got a '}
                      <button
                        className="dc-hover-693e7bb0"
                        onClick={v.openChat}
                        aria-label="Ask my portfolio agent"
                        style={{
                          all: 'unset',
                          cursor: 'pointer',
                          flex: 'none',
                          width: '0.82em',
                          height: '0.72em',
                          borderRadius: '0.36em 0.36em 0.36em 0.08em',
                          background: 'var(--yj-accent, #ff4d2e)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.07em',
                          transition: 'transform 400ms cubic-bezier(.22,1,.36,1)',
                        }}
                      >
                        {' '}
                        {t(v.sketchBig, true)}{' '}
                      </button>
                    </span>
                    <span
                      style={{
                        fontFamily: "Geist,'Geist Display',sans-serif",
                        fontWeight: '700',
                        lineHeight: '0.84',
                        letterSpacing: '-0.005em',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.12em',
                      }}
                    >
                      {'Wicked '}
                      <span style={{ flex: 'none', width: '0.72em', height: '0.8em', position: 'relative' }}>
                        {t(v.shapeMorph)}
                      </span>
                      {' problem'}
                      <span style={{ color: 'var(--yj-accent, #ff4d2e)' }}>?</span>
                    </span>
                  </h1>
                  <p
                    style={{
                      margin: '0',
                      maxWidth: '520px',
                      fontSize: 'clamp(15px,2.4vh,18px)',
                      lineHeight: '1.5',
                      color: '#999999',
                      textWrap: 'pretty',
                    }}
                  >
                    Don’t be shy, half-formed ideas welcome. A role, a project or just a coffee chat, my inbox is always
                    open.
                  </p>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a
                      className="dc-hover-e246ab14"
                      href="mailto:yashvi.jain.yj@gmail.com?subject=Hello%20Yashvi%20%E2%80%94%20I%20have%20a%20wicked%20problem"
                      target="_blank"
                      rel="noopener"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '14px 26px',
                        borderRadius: '999px',
                        border: '1.5px solid #666666',
                        color: '#f4f4f4',
                        fontSize: '17px',
                        fontWeight: '500',
                        textDecoration: 'none',
                      }}
                    >
                      Skip to the human
                    </a>
                    <button
                      className="dc-hover-78f5b1a8"
                      onClick={v.openChat}
                      style={{
                        all: 'unset',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        padding: '14px 26px',
                        borderRadius: '999px',
                        background: '#f4f4f4',
                        color: '#000000',
                        fontSize: '17px',
                        fontWeight: '500',
                        border: '1.5px solid #f4f4f4',
                      }}
                    >
                      Brief my agent first<span style={{ width: '19px', height: '31px' }}>⟶</span>
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    paddingTop: 'clamp(12px,2vh,20px)',
                    borderTop: '2px solid #f4f4f4',
                    gap: '12px 40px',
                    justifyContent: 'space-evenly',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '0' }}>
                    <span
                      style={{
                        fontFamily: 'Geist,sans-serif',
                        fontWeight: '500',
                        fontSize: '13px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#999999',
                      }}
                    >
                      Email
                    </span>
                    <a
                      className="dc-hover-bac46065"
                      href="mailto:yashvi.jain.yj@gmail.com"
                      style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        color: '#f4f4f4',
                        textDecoration: 'none',
                        overflowWrap: 'anywhere',
                      }}
                    >
                      yashvi.jain.yj@gmail.com
                    </a>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span
                      style={{
                        fontFamily: 'Geist,sans-serif',
                        fontWeight: '500',
                        fontSize: '13px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#999999',
                      }}
                    >
                      Based in
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: '500', color: '#f4f4f4' }}>
                      London · Hybrid · Remote
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span
                      style={{
                        fontFamily: 'Geist,sans-serif',
                        fontWeight: '500',
                        fontSize: '13px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#999999',
                      }}
                    >
                      Elsewhere
                    </span>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {each(v.socials, (so, $index) => (
                        <>
                          <a
                            className="dc-hover-98a7b991"
                            href={so?.href}
                            style={{
                              padding: '5px 12px',
                              borderRadius: '999px',
                              border: '1.5px solid #666666',
                              color: '#f4f4f4',
                              fontSize: '13px',
                              fontWeight: '500',
                              textDecoration: 'none',
                            }}
                          >
                            {t(so?.k)}
                          </a>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : null}
        </main>
        {v.showCta ? (
          <>
            <footer
              style={{
                padding: '28px clamp(20px,7vw,128px) 36px',
                display: 'flex',
                justifyContent: 'space-between',
                gap: '16px',
                flexWrap: 'wrap',
                fontFamily: 'Geist,sans-serif',
                fontWeight: '500',
                fontSize: '13px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#999999',
              }}
            >
              <span>© 2026 Yashvi Jain — London</span>
              <a
                className="dc-hover-d2cded96"
                href="mailto:yashvi.jain.yj@gmail.com"
                style={{ color: '#999999', textDecoration: 'none' }}
              >
                yashvi.jain.yj@gmail.com
              </a>
            </footer>
          </>
        ) : null}
      </div>
    </>
  );
}

export default defineScreen({
  name: 'Portfolio Publish',
  Logic,
  template,
  css: screenCss,
  links: [
    '_ds/modernist-f6c1caa7-5cac-451a-a099-225de5c74272/styles.css',
    'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..700;1,8..60,400..700&family=Open+Sans:wght@400..700&family=DM+Serif+Display:ital@0;1&family=Geist:wght@100..900&family=Instrument+Serif:ital@0;1&family=Oswald:wght@500;700&display=swap',
  ],
  defaults: {
    accent: '#b6f23a',
    customCursor: true,
    heroMode: 'autoplay',
    autoAdvance: 6,
    slatCount: 28,
    slatPop: 1.2,
    hoverFlip: false,
    kinetics: 'full',
    imeTexture: 'paper',
  },
});
