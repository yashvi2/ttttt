import { defineScreen } from '../dc/defineScreen.js';
import { css, cx, asset, each, t } from '../dc/template.js';
import Logic from './CaseBirdsong.logic.js';
import screenCss from './CaseBirdsong.css?raw';
import './CaseBirdsong.states.css';

function template(v) {
  return (
    <>
      <div
        ref={v.mvRef}
        style={css(
          `background-color:#efe8d8;background-image:${v.ime?.paper ?? ''};background-size:1200px auto;background-repeat:repeat;color:#201e1d;font-family:'Poppins',sans-serif;padding-bottom:64px`,
        )}
      >
        {' '}
        <div
          data-yj-rv="wipe"
          style={{
            position: 'relative',
            width: '100%',
            height: 'min(100vh,56.25vw)',
            minHeight: '360px',
            background: '#2e2523',
            overflow: 'hidden',
          }}
        >
          <img
            src="assets/web/assets/ime/cover.webp"
            alt="Birdsong — Are we listening?"
            data-yj-px="0.08"
            data-yj-pxmax="40"
            style={{ position: 'absolute', inset: '-6% 0', width: '100%', height: '112%', objectFit: 'cover' }}
          />
        </div>{' '}
        <section
          data-mv="top"
          aria-label="Birdsong"
          style={{
            padding: '72px clamp(20px,8.4vw,120px) 0',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
              gap: '40px 64px',
              alignItems: 'end',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#3c593e',
                }}
              >
                Case study 03 · Virtual exhibition
              </span>
              <h1
                style={{
                  margin: '0',
                  fontFamily: "'Averia Libre',serif",
                  fontWeight: '700',
                  fontSize: 'clamp(64px,10vw,152px)',
                  lineHeight: '0.86',
                  letterSpacing: '-0.01em',
                  color: '#201e1d',
                }}
              >
                Birdsong
              </h1>
              <p
                style={{
                  margin: '0',
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: 'clamp(20px,1.8vw,26px)',
                  lineHeight: '1.35',
                  color: '#201e1d',
                  maxWidth: '560px',
                  textWrap: 'pretty',
                }}
              >
                A physical and virtual exhibition at the Indian Music Experience Museum on Indian birds: their
                ecosystems, mythology, music and place in society.
              </p>
            </div>
          </div>
          <dl
            style={{
              margin: '0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))',
              borderTop: '2px solid #201e1d',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '16px 16px 16px 0' }}>
              <dt
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#6b6664',
                }}
              >
                My role
              </dt>
              <dd style={{ margin: '0', fontSize: '17px', lineHeight: '1.4', color: '#2c4a73', fontWeight: '500' }}>
                UI designer · web and mobile
              </dd>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '16px 16px 16px 0' }}>
              <dt
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#6b6664',
                }}
              >
                Client
              </dt>
              <dd style={{ margin: '0', fontSize: '17px', lineHeight: '1.4', color: '#2c4a73', fontWeight: '500' }}>
                Indian Music Experience Museum
              </dd>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '16px 16px 16px 0' }}>
              <dt
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#6b6664',
                }}
              >
                Programme
              </dt>
              <dd style={{ margin: '0', fontSize: '17px', lineHeight: '1.4', color: '#2c4a73', fontWeight: '500' }}>
                British Council · Our Shared Cultural Heritage
              </dd>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '16px 16px 16px 0' }}>
              <dt
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#6b6664',
                }}
              >
                Timeline
              </dt>
              <dd style={{ margin: '0', fontSize: '17px', lineHeight: '1.4', color: '#2c4a73', fontWeight: '500' }}>
                6 months · 2022
              </dd>
            </div>
          </dl>
        </section>{' '}
        <section
          data-mv="context"
          aria-label="The context"
          style={{ padding: '60px clamp(20px,8.4vw,120px) 0', boxSizing: 'border-box' }}
        >
          {' '}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: '32px 48px',
              paddingTop: '24px',
              borderTop: '2px solid #201e1d',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#3c593e',
                }}
              >
                01
              </span>
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#201e1d',
                }}
              >
                The context
              </span>
            </div>
            <div style={{ gridColumn: '1/-1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '44px' }}>
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontFamily: "'Averia Libre',serif",
                  fontWeight: '700',
                  fontSize: 'clamp(44px,5.4vw,80px)',
                  lineHeight: '1.02',
                  letterSpacing: '-0.01em',
                  color: '#201e1d',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                A beautiful room, in one city.
              </h2>
              <p
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '18px',
                  lineHeight: '1.55',
                  color: '#4a4644',
                  maxWidth: '640px',
                  textWrap: 'pretty',
                }}
              >
                I designed Birdsong as a physical exhibit at the Indian Music Experience Museum, Bengaluru, which ran
                from April to August 2022. It held a whole musical world of birds, but younger visitors rarely came
                through the museum’s doors.
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
                  borderTop: '2px solid #201e1d',
                }}
              >
                <div
                  data-yj-rv="up"
                  style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 20px 16px 0' }}
                >
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#3c593e',
                    }}
                  >
                    Problem
                  </span>
                  <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#201e1d' }}>
                    Museums struggle to reach younger audiences.
                  </span>
                </div>
                <div
                  data-yj-rv="up"
                  style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 20px 16px 0' }}
                >
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#3c593e',
                    }}
                  >
                    Goal
                  </span>
                  <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#201e1d' }}>
                    Open Birdsong to a much larger audience, online.
                  </span>
                </div>
                <div
                  data-yj-rv="up"
                  style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 20px 16px 0' }}
                >
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#3c593e',
                    }}
                  >
                    Ambition
                  </span>
                  <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#201e1d' }}>
                    Deepen appreciation and mindfulness toward the environment, through music.
                  </span>
                </div>
              </div>
            </div>
          </div>{' '}
        </section>{' '}
        <section
          data-mv="research"
          aria-label="The research"
          style={{ padding: '60px clamp(20px,8.4vw,120px) 0', boxSizing: 'border-box' }}
        >
          {' '}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: '32px 48px',
              paddingTop: '24px',
              borderTop: '2px solid #201e1d',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#3c593e',
                }}
              >
                02
              </span>
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#201e1d',
                }}
              >
                The research
              </span>
            </div>
            <div style={{ gridColumn: '1/-1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '44px' }}>
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontFamily: "'Averia Libre',serif",
                  fontWeight: '700',
                  fontSize: 'clamp(44px,5.4vw,80px)',
                  lineHeight: '1.02',
                  letterSpacing: '-0.01em',
                  color: '#201e1d',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                Learning from galleries first.
              </h2>
              <p
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '18px',
                  lineHeight: '1.55',
                  color: '#4a4644',
                  maxWidth: '640px',
                  textWrap: 'pretty',
                }}
              >
                I visited exhibitions to study how curation guides people through a space, before designing for a
                screen.
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
                  gap: '8px',
                }}
              >
                <button
                  onClick={v.ime?.open?.visit_1_png}
                  aria-label="Enlarge Gallery visit: photographs on a white wall"
                  data-yj-rv="wipe"
                  style={{
                    all: 'unset',
                    cursor: 'zoom-in',
                    display: 'block',
                    position: 'relative',
                    overflow: 'hidden',
                    aspectRatio: '3/4',
                    background: '#2e2523',
                  }}
                >
                  <img
                    className="dc-hover-01531646"
                    src="assets/web/assets/ime/visit-1.webp"
                    alt="Gallery visit: photographs on a white wall"
                    data-yj-px="0.04"
                    data-yj-pxmax="20"
                    style={{
                      position: 'absolute',
                      inset: '-4% 0',
                      width: '100%',
                      height: '108%',
                      objectFit: 'cover',
                      transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                    }}
                  />
                </button>
                <button
                  onClick={v.ime?.open?.visit_2_png}
                  aria-label="Enlarge Gallery visit: wall text"
                  data-yj-rv="wipe"
                  style={{
                    all: 'unset',
                    cursor: 'zoom-in',
                    display: 'block',
                    position: 'relative',
                    overflow: 'hidden',
                    aspectRatio: '3/4',
                    background: '#2e2523',
                  }}
                >
                  <img
                    className="dc-hover-01531646"
                    src="assets/web/assets/ime/visit-2.webp"
                    alt="Gallery visit: wall text"
                    data-yj-px="0.04"
                    data-yj-pxmax="20"
                    style={{
                      position: 'absolute',
                      inset: '-4% 0',
                      width: '100%',
                      height: '108%',
                      objectFit: 'cover',
                      transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                    }}
                  />
                </button>
                <button
                  onClick={v.ime?.open?.visit_3_png}
                  aria-label="Enlarge Gallery visit: textile exhibition"
                  data-yj-rv="wipe"
                  style={{
                    all: 'unset',
                    cursor: 'zoom-in',
                    display: 'block',
                    position: 'relative',
                    overflow: 'hidden',
                    aspectRatio: '3/4',
                    background: '#2e2523',
                  }}
                >
                  <img
                    className="dc-hover-01531646"
                    src="assets/web/assets/ime/visit-3.webp"
                    alt="Gallery visit: textile exhibition"
                    data-yj-px="0.04"
                    data-yj-pxmax="20"
                    style={{
                      position: 'absolute',
                      inset: '-4% 0',
                      width: '100%',
                      height: '108%',
                      objectFit: 'cover',
                      transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                    }}
                  />
                </button>
                <button
                  onClick={v.ime?.open?.visit_4_png}
                  aria-label="Enlarge Gallery visit: river-stone installation"
                  data-yj-rv="wipe"
                  style={{
                    all: 'unset',
                    cursor: 'zoom-in',
                    display: 'block',
                    position: 'relative',
                    overflow: 'hidden',
                    aspectRatio: '3/4',
                    background: '#2e2523',
                  }}
                >
                  <img
                    className="dc-hover-01531646"
                    src="assets/web/assets/ime/visit-4.webp"
                    alt="Gallery visit: river-stone installation"
                    data-yj-px="0.04"
                    data-yj-pxmax="20"
                    style={{
                      position: 'absolute',
                      inset: '-4% 0',
                      width: '100%',
                      height: '108%',
                      objectFit: 'cover',
                      transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                    }}
                  />
                </button>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
                  borderTop: '2px solid #201e1d',
                }}
              >
                <div
                  data-yj-rv="up"
                  style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 20px 16px 0' }}
                >
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#3c593e',
                    }}
                  >
                    Insight 01
                  </span>
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '16px',
                      lineHeight: '1.5',
                      color: '#201e1d',
                    }}
                  >
                    Interactive elements hold attention longer than text panels.
                  </span>
                </div>
                <div
                  data-yj-rv="up"
                  style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 20px 16px 0' }}
                >
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#3c593e',
                    }}
                  >
                    Insight 02
                  </span>
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '16px',
                      lineHeight: '1.5',
                      color: '#201e1d',
                    }}
                  >
                    Wayfinding has to be accessible, or the story gets lost.
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <span
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#6b6664',
                  }}
                >
                  The physical exhibition at IME
                </span>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))',
                    gap: '8px',
                  }}
                >
                  <button
                    onClick={v.ime?.open?.phys_1_png}
                    aria-label="Enlarge Birds in Culture display"
                    data-yj-rv="wipe"
                    style={{
                      all: 'unset',
                      cursor: 'zoom-in',
                      display: 'block',
                      position: 'relative',
                      overflow: 'hidden',
                      aspectRatio: '3/2',
                      background: '#2e2523',
                    }}
                  >
                    <img
                      className="dc-hover-01531646"
                      src="assets/web/assets/ime/phys-1.webp"
                      alt="Birds in Culture display"
                      data-yj-px="0.04"
                      data-yj-pxmax="20"
                      style={{
                        position: 'absolute',
                        inset: '-4% 0',
                        width: '100%',
                        height: '108%',
                        objectFit: 'cover',
                        transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </button>
                  <button
                    onClick={v.ime?.open?.phys_2_png}
                    aria-label="Enlarge Visitors at a listening station"
                    data-yj-rv="wipe"
                    style={{
                      all: 'unset',
                      cursor: 'zoom-in',
                      display: 'block',
                      position: 'relative',
                      overflow: 'hidden',
                      aspectRatio: '3/2',
                      background: '#2e2523',
                    }}
                  >
                    <img
                      className="dc-hover-01531646"
                      src="assets/web/assets/ime/phys-2.webp"
                      alt="Visitors at a listening station"
                      data-yj-px="0.04"
                      data-yj-pxmax="20"
                      style={{
                        position: 'absolute',
                        inset: '-4% 0',
                        width: '100%',
                        height: '108%',
                        objectFit: 'cover',
                        transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </button>
                  <button
                    onClick={v.ime?.open?.phys_3_png}
                    aria-label="Enlarge Child and parent with headphones"
                    data-yj-rv="wipe"
                    style={{
                      all: 'unset',
                      cursor: 'zoom-in',
                      display: 'block',
                      position: 'relative',
                      overflow: 'hidden',
                      aspectRatio: '3/2',
                      background: '#2e2523',
                    }}
                  >
                    <img
                      className="dc-hover-01531646"
                      src="assets/web/assets/ime/phys-3.webp"
                      alt="Child and parent with headphones"
                      data-yj-px="0.04"
                      data-yj-pxmax="20"
                      style={{
                        position: 'absolute',
                        inset: '-4% 0',
                        width: '100%',
                        height: '108%',
                        objectFit: 'cover',
                        transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </button>
                  <button
                    onClick={v.ime?.open?.phys_4_png}
                    aria-label="Enlarge Backyard Birds wall"
                    data-yj-rv="wipe"
                    style={{
                      all: 'unset',
                      cursor: 'zoom-in',
                      display: 'block',
                      position: 'relative',
                      overflow: 'hidden',
                      aspectRatio: '3/2',
                      background: '#2e2523',
                    }}
                  >
                    <img
                      className="dc-hover-01531646"
                      src="assets/web/assets/ime/phys-4.webp"
                      alt="Backyard Birds wall"
                      data-yj-px="0.04"
                      data-yj-pxmax="20"
                      style={{
                        position: 'absolute',
                        inset: '-4% 0',
                        width: '100%',
                        height: '108%',
                        objectFit: 'cover',
                        transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </button>
                  <button
                    onClick={v.ime?.open?.phys_5_png}
                    aria-label="Enlarge Make a promise: leaf wall"
                    data-yj-rv="wipe"
                    style={{
                      all: 'unset',
                      cursor: 'zoom-in',
                      display: 'block',
                      position: 'relative',
                      overflow: 'hidden',
                      aspectRatio: '3/2',
                      background: '#2e2523',
                    }}
                  >
                    <img
                      className="dc-hover-01531646"
                      src="assets/web/assets/ime/phys-5.webp"
                      alt="Make a promise: leaf wall"
                      data-yj-px="0.04"
                      data-yj-pxmax="20"
                      style={{
                        position: 'absolute',
                        inset: '-4% 0',
                        width: '100%',
                        height: '108%',
                        objectFit: 'cover',
                        transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </button>
                  <button
                    onClick={v.ime?.open?.phys_6_png}
                    aria-label="Enlarge Birds in Culture case"
                    data-yj-rv="wipe"
                    style={{
                      all: 'unset',
                      cursor: 'zoom-in',
                      display: 'block',
                      position: 'relative',
                      overflow: 'hidden',
                      aspectRatio: '3/2',
                      background: '#2e2523',
                    }}
                  >
                    <img
                      className="dc-hover-01531646"
                      src="assets/web/assets/ime/phys-6.webp"
                      alt="Birds in Culture case"
                      data-yj-px="0.04"
                      data-yj-pxmax="20"
                      style={{
                        position: 'absolute',
                        inset: '-4% 0',
                        width: '100%',
                        height: '108%',
                        objectFit: 'cover',
                        transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </button>
                  <button
                    onClick={v.ime?.open?.phys_7_png}
                    aria-label="Enlarge Exhibition overview"
                    data-yj-rv="wipe"
                    style={{
                      all: 'unset',
                      cursor: 'zoom-in',
                      display: 'block',
                      position: 'relative',
                      overflow: 'hidden',
                      aspectRatio: '3/2',
                      background: '#2e2523',
                    }}
                  >
                    <img
                      className="dc-hover-01531646"
                      src="assets/web/assets/ime/phys-7.webp"
                      alt="Exhibition overview"
                      data-yj-px="0.04"
                      data-yj-pxmax="20"
                      style={{
                        position: 'absolute',
                        inset: '-4% 0',
                        width: '100%',
                        height: '108%',
                        objectFit: 'cover',
                        transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </button>
                  <button
                    onClick={v.ime?.open?.phys_8_png}
                    aria-label="Enlarge Birdsong entrance wall"
                    data-yj-rv="wipe"
                    style={{
                      all: 'unset',
                      cursor: 'zoom-in',
                      display: 'block',
                      position: 'relative',
                      overflow: 'hidden',
                      aspectRatio: '3/2',
                      background: '#2e2523',
                    }}
                  >
                    <img
                      className="dc-hover-01531646"
                      src="assets/web/assets/ime/phys-8.webp"
                      alt="Birdsong entrance wall"
                      data-yj-px="0.04"
                      data-yj-pxmax="20"
                      style={{
                        position: 'absolute',
                        inset: '-4% 0',
                        width: '100%',
                        height: '108%',
                        objectFit: 'cover',
                        transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </button>
                  <button
                    onClick={v.ime?.open?.phys_9_png}
                    aria-label="Enlarge Do birds really sing? panels"
                    data-yj-rv="wipe"
                    style={{
                      all: 'unset',
                      cursor: 'zoom-in',
                      display: 'block',
                      position: 'relative',
                      overflow: 'hidden',
                      aspectRatio: '3/2',
                      background: '#2e2523',
                    }}
                  >
                    <img
                      className="dc-hover-01531646"
                      src="assets/web/assets/ime/phys-9.webp"
                      alt="Do birds really sing? panels"
                      data-yj-px="0.04"
                      data-yj-pxmax="20"
                      style={{
                        position: 'absolute',
                        inset: '-4% 0',
                        width: '100%',
                        height: '108%',
                        objectFit: 'cover',
                        transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </button>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
                    borderTop: '2px solid #201e1d',
                  }}
                >
                  <div
                    data-yj-rv="up"
                    style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 20px 16px 0' }}
                  >
                    <span
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '12px',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#3c593e',
                      }}
                    >
                      Interaction
                    </span>
                    <span
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '16px',
                        lineHeight: '1.5',
                        color: '#201e1d',
                      }}
                    >
                      Audio, video and physical touchpoints together.
                    </span>
                  </div>
                  <div
                    data-yj-rv="up"
                    style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 20px 16px 0' }}
                  >
                    <span
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '12px',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#3c593e',
                      }}
                    >
                      Information
                    </span>
                    <span
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '16px',
                        lineHeight: '1.5',
                        color: '#201e1d',
                      }}
                    >
                      Pictorial data instead of long captions.
                    </span>
                  </div>
                  <div
                    data-yj-rv="up"
                    style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 20px 16px 0' }}
                  >
                    <span
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '12px',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#3c593e',
                      }}
                    >
                      Material
                    </span>
                    <span
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '16px',
                        lineHeight: '1.5',
                        color: '#201e1d',
                      }}
                    >
                      Bamboo, plants and canvas sheets bring nature indoors.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>{' '}
        </section>{' '}
        <section
          data-mv="story"
          aria-label="The narrative"
          style={{ padding: '60px clamp(20px,8.4vw,120px) 0', boxSizing: 'border-box' }}
        >
          {' '}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: '32px 48px',
              paddingTop: '24px',
              borderTop: '2px solid #201e1d',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#3c593e',
                }}
              >
                03
              </span>
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#201e1d',
                }}
              >
                The narrative
              </span>
            </div>
            <div style={{ gridColumn: '1/-1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '44px' }}>
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontFamily: "'Averia Libre',serif",
                  fontWeight: '700',
                  fontSize: 'clamp(44px,5.4vw,80px)',
                  lineHeight: '1.02',
                  letterSpacing: '-0.01em',
                  color: '#201e1d',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                Start with silence.
              </h2>
              <p
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '18px',
                  lineHeight: '1.55',
                  color: '#4a4644',
                  maxWidth: '640px',
                  textWrap: 'pretty',
                }}
              >
                Online, there is no room to walk into. So the landing sequence does the work of the museum doors: it
                takes the birds away first, then gives them back.
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                  gap: '16px',
                }}
              >
                <figure
                  data-yj-rv="wipe"
                  style={{ margin: '0', gridColumn: '1/-1', display: 'flex', flexDirection: 'column', gap: '10px' }}
                >
                  <button
                    onClick={v.ime?.open?.dull_world_jpg}
                    aria-label="Enlarge A world without birds"
                    style={{
                      all: 'unset',
                      cursor: 'zoom-in',
                      display: 'block',
                      width: '100%',
                      position: 'relative',
                      aspectRatio: '16/10',
                      overflow: 'hidden',
                      background: 'transparent',
                    }}
                  >
                    <img
                      className="dc-hover-ce0189d7"
                      src="assets/web/assets/ime/dull-world-nobg.webp"
                      alt="A world without birds"
                      style={{
                        mixBlendMode: 'multiply',
                        position: 'absolute',
                        inset: '0',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 900ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </button>
                  <figcaption style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '12px',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#3c593e',
                      }}
                    >
                      Frame 1
                    </span>
                    <span style={{ fontSize: '16px', color: '#201e1d' }}>
                      “Imagine a world without birds: empty skies, silent backyards, muted forests.”
                    </span>
                  </figcaption>
                </figure>
                <figure
                  data-yj-rv="wipe"
                  style={{ margin: '0', gridColumn: '1/-1', display: 'flex', flexDirection: 'column', gap: '10px' }}
                >
                  <button
                    onClick={v.ime?.open?.utopia_jpg}
                    aria-label="Enlarge The world with birds returned"
                    style={{
                      all: 'unset',
                      cursor: 'zoom-in',
                      display: 'block',
                      width: '100%',
                      position: 'relative',
                      aspectRatio: '16/10',
                      overflow: 'hidden',
                      background: 'transparent',
                    }}
                  >
                    <img
                      className="dc-hover-ce0189d7"
                      src="assets/web/assets/ime/utopia-nobg.webp"
                      alt="The world with birds returned"
                      style={{
                        mixBlendMode: 'multiply',
                        position: 'absolute',
                        inset: '0',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 900ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </button>
                  <figcaption style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '12px',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#3c593e',
                      }}
                    >
                      Frame 2
                    </span>
                    <span style={{ fontSize: '16px', color: '#201e1d' }}>
                      “Birds have inspired music, literature and even modern science.”
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>{' '}
        </section>{' '}
        <section
          data-mv="galleries"
          aria-label="The structure"
          style={{ padding: '60px clamp(20px,8.4vw,120px) 0', boxSizing: 'border-box' }}
        >
          {' '}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: '32px 48px',
              paddingTop: '24px',
              borderTop: '2px solid #201e1d',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#3c593e',
                }}
              >
                04
              </span>
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#201e1d',
                }}
              >
                The structure
              </span>
            </div>
            <div style={{ gridColumn: '1/-1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '44px' }}>
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontFamily: "'Averia Libre',serif",
                  fontWeight: '700',
                  fontSize: 'clamp(44px,5.4vw,80px)',
                  lineHeight: '1.02',
                  letterSpacing: '-0.01em',
                  color: '#201e1d',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                Four galleries, one walk.
              </h2>
              <p
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '18px',
                  lineHeight: '1.55',
                  color: '#4a4644',
                  maxWidth: '640px',
                  textWrap: 'pretty',
                }}
              >
                {
                  "The physical exhibit's themes became four virtual galleries. Each opens with one line that tells a visitor what they'll find, so they can choose their own route."
                }
              </p>
              <ol
                style={{
                  margin: '0',
                  padding: '0',
                  listStyle: 'none',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,330px),1fr))',
                  columnGap: '30px',
                  borderTop: '2px solid #201e1d',
                }}
              >
                <li
                  data-yj-rv="up"
                  style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px 0 30px' }}
                >
                  <div
                    aria-label="Nature’s Symphony cover"
                    data-yj-rv="wipe"
                    style={{
                      position: 'relative',
                      aspectRatio: '16/9',
                      overflow: 'hidden',
                      background: '#201e1d',
                      marginBottom: '6px',
                    }}
                  >
                    <img
                      className="dc-hover-01531646"
                      src="assets/web/assets/ime/g/ns-cover.webp"
                      alt="Nature’s Symphony gallery cover"
                      style={{
                        position: 'absolute',
                        inset: '0',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontSize: '12px',
                      color: '#3c593e',
                    }}
                  >
                    01
                  </span>
                  <span
                    style={{
                      fontFamily: "'Averia Libre',serif",
                      fontWeight: '700',
                      fontSize: '26px',
                      lineHeight: '1.05',
                      letterSpacing: '-0.01em',
                      color: '#201e1d',
                    }}
                  >
                    Nature’s Symphony
                  </span>
                  <span style={{ fontSize: '15px', lineHeight: '1.5', color: '#4a4644' }}>
                    The musical world of birds: their song, calls and unique physiology.
                  </span>
                </li>
                <li
                  data-yj-rv="up"
                  style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px 0 30px' }}
                >
                  <div
                    aria-label="Myths and Legends cover"
                    data-yj-rv="wipe"
                    style={{
                      position: 'relative',
                      aspectRatio: '16/9',
                      overflow: 'hidden',
                      background: '#201e1d',
                      marginBottom: '6px',
                    }}
                  >
                    <img
                      className="dc-hover-01531646"
                      src="assets/web/assets/ime/g/ml-cover.webp"
                      alt="Myths and Legends gallery cover"
                      style={{
                        position: 'absolute',
                        inset: '0',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontSize: '12px',
                      color: '#3c593e',
                    }}
                  >
                    02
                  </span>
                  <span
                    style={{
                      fontFamily: "'Averia Libre',serif",
                      fontWeight: '700',
                      fontSize: '26px',
                      lineHeight: '1.05',
                      letterSpacing: '-0.01em',
                      color: '#201e1d',
                    }}
                  >
                    Myths and Legends
                  </span>
                  <span style={{ fontSize: '15px', lineHeight: '1.5', color: '#4a4644' }}>
                    Birds in Indian mythology and history.
                  </span>
                </li>
                <li
                  data-yj-rv="up"
                  style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px 0 30px' }}
                >
                  <div
                    aria-label="Songs of Nature cover"
                    data-yj-rv="wipe"
                    style={{
                      position: 'relative',
                      aspectRatio: '16/9',
                      overflow: 'hidden',
                      background: '#201e1d',
                      marginBottom: '6px',
                    }}
                  >
                    <img
                      className="dc-hover-01531646"
                      src="assets/web/assets/ime/g/sn-cover.webp"
                      alt="Songs of Nature gallery cover"
                      style={{
                        position: 'absolute',
                        inset: '0',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontSize: '12px',
                      color: '#3c593e',
                    }}
                  >
                    03
                  </span>
                  <span
                    style={{
                      fontFamily: "'Averia Libre',serif",
                      fontWeight: '700',
                      fontSize: '26px',
                      lineHeight: '1.05',
                      letterSpacing: '-0.01em',
                      color: '#201e1d',
                    }}
                  >
                    Songs of Nature
                  </span>
                  <span style={{ fontSize: '15px', lineHeight: '1.5', color: '#4a4644' }}>
                    The melodious world of songbirds, and their tunes.
                  </span>
                </li>
                <li
                  data-yj-rv="up"
                  style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px 0 30px' }}
                >
                  <div
                    aria-label="Birds in Music cover"
                    data-yj-rv="wipe"
                    style={{
                      position: 'relative',
                      aspectRatio: '16/9',
                      overflow: 'hidden',
                      background: '#201e1d',
                      marginBottom: '6px',
                    }}
                  >
                    <img
                      className="dc-hover-01531646"
                      src="assets/web/assets/ime/g/bm-cover.webp"
                      alt="Birds in Music gallery cover"
                      style={{
                        position: 'absolute',
                        inset: '0',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontSize: '12px',
                      color: '#3c593e',
                    }}
                  >
                    04
                  </span>
                  <span
                    style={{
                      fontFamily: "'Averia Libre',serif",
                      fontWeight: '700',
                      fontSize: '26px',
                      lineHeight: '1.05',
                      letterSpacing: '-0.01em',
                      color: '#201e1d',
                    }}
                  >
                    Birds in Music
                  </span>
                  <span style={{ fontSize: '15px', lineHeight: '1.5', color: '#4a4644' }}>
                    How birds inspired Indian music, from classical and folk to instrumental.
                  </span>
                </li>
              </ol>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))',
                  gap: '16px',
                  alignItems: 'start',
                }}
              >
                <div style={{ gridColumn: '1/-1', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#6b6664',
                    }}
                  >
                    Information architecture
                  </span>
                  <figure
                    data-yj-rv="wipe"
                    style={{ margin: '0', gridColumn: '1/-1', display: 'flex', flexDirection: 'column', gap: '10px' }}
                  >
                    <div
                      aria-label="Information architecture of the virtual exhibition"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '28px',
                        padding: 'clamp(20px,3vw,40px)',
                        border: '2px solid #201e1d',
                        background: '#f6efe2',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <span
                          style={{
                            fontFamily: "'Poppins',sans-serif",
                            fontWeight: '600',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            fontSize: '12px',
                            color: '#6b6664',
                          }}
                        >
                          Entry
                        </span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px' }}>
                          <div
                            style={{
                              padding: '14px 18px',
                              border: '2px solid #201e1d',
                              fontFamily: "'Poppins',sans-serif",
                              fontSize: '15px',
                              fontWeight: '600',
                              color: '#fbf6ec',
                              background: '#201e1d',
                              borderRadius: '999px',
                            }}
                          >
                            Open website
                          </div>
                          <span
                            aria-hidden="true"
                            style={{ fontFamily: "'Poppins',sans-serif", fontSize: '20px', color: '#201e1d' }}
                          >
                            →
                          </span>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <div
                              style={{
                                padding: '14px 18px',
                                border: '2px solid #201e1d',
                                fontFamily: "'Poppins',sans-serif",
                                fontSize: '15px',
                                fontWeight: '600',
                                color: '#201e1d',
                                background: '#fbf6ec',
                              }}
                            >
                              Introduction
                            </div>
                          </div>
                          <span
                            aria-hidden="true"
                            style={{ fontFamily: "'Poppins',sans-serif", fontSize: '20px', color: '#201e1d' }}
                          >
                            →
                          </span>
                          <div
                            style={{
                              padding: '14px 18px',
                              border: '2px solid #201e1d',
                              fontFamily: "'Poppins',sans-serif",
                              fontSize: '15px',
                              fontWeight: '600',
                              color: '#ffffff',
                              background: '#3c593e',
                              borderColor: '#3c593e',
                            }}
                          >
                            Menu
                          </div>
                          <span
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '6px 12px',
                              border: '2px dashed #3c593e',
                              fontFamily: "'Poppins',sans-serif",
                              fontWeight: '600',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              fontSize: '12px',
                              color: '#3c593e',
                            }}
                          >
                            Intro is skippable → straight to menu
                          </span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <span
                          style={{
                            fontFamily: "'Poppins',sans-serif",
                            fontWeight: '600',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            fontSize: '12px',
                            color: '#6b6664',
                          }}
                        >
                          Visitor picks a gallery
                        </span>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))',
                            gap: '14px',
                          }}
                        >
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '0' }}>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '6px',
                                padding: '16px',
                                background: '#f3e3c8',
                                border: '2px solid #201e1d',
                                minHeight: '96px',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "'Poppins',sans-serif",
                                  fontWeight: '600',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  fontSize: '12px',
                                  color: '#c0533d',
                                }}
                              >
                                01
                              </span>
                              <span
                                style={{
                                  fontFamily: "'Averia Libre',serif",
                                  fontWeight: '700',
                                  fontSize: '22px',
                                  lineHeight: '1.05',
                                  color: '#c0533d',
                                }}
                              >
                                Nature’s Symphony
                              </span>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '10px 14px',
                                border: '2px dashed #201e1d',
                                fontFamily: "'Poppins',sans-serif",
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#201e1d',
                              }}
                            >
                              ↳ Bird House game
                            </div>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '0' }}>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '6px',
                                padding: '16px',
                                background: '#a8783f',
                                border: '2px solid #201e1d',
                                minHeight: '96px',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "'Poppins',sans-serif",
                                  fontWeight: '600',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  fontSize: '12px',
                                  color: '#2e1d0e',
                                }}
                              >
                                02
                              </span>
                              <span
                                style={{
                                  fontFamily: "'Averia Libre',serif",
                                  fontWeight: '700',
                                  fontSize: '22px',
                                  lineHeight: '1.05',
                                  color: '#2e1d0e',
                                }}
                              >
                                Myths and Legends
                              </span>
                            </div>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '0' }}>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '6px',
                                padding: '16px',
                                background: '#6f7a45',
                                border: '2px solid #201e1d',
                                minHeight: '96px',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "'Poppins',sans-serif",
                                  fontWeight: '600',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  fontSize: '12px',
                                  color: '#ffffff',
                                }}
                              >
                                03
                              </span>
                              <span
                                style={{
                                  fontFamily: "'Averia Libre',serif",
                                  fontWeight: '700',
                                  fontSize: '22px',
                                  lineHeight: '1.05',
                                  color: '#ffffff',
                                }}
                              >
                                Songs of Nature
                              </span>
                            </div>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '0' }}>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '6px',
                                padding: '16px',
                                background: '#eba553',
                                border: '2px solid #201e1d',
                                minHeight: '96px',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "'Poppins',sans-serif",
                                  fontWeight: '600',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  fontSize: '12px',
                                  color: '#201e1d',
                                }}
                              >
                                04
                              </span>
                              <span
                                style={{
                                  fontFamily: "'Averia Libre',serif",
                                  fontWeight: '700',
                                  fontSize: '22px',
                                  lineHeight: '1.05',
                                  color: '#201e1d',
                                }}
                              >
                                Birds in Music
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          gap: '14px',
                          paddingTop: '20px',
                          borderTop: '2px solid #201e1d',
                        }}
                      >
                        <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: '15px', color: '#4a4644' }}>
                          Galleries run in sequence; each one can return to the menu.
                        </span>
                        <span
                          aria-hidden="true"
                          style={{ fontFamily: "'Poppins',sans-serif", fontSize: '20px', color: '#201e1d' }}
                        >
                          →
                        </span>
                        <div
                          style={{
                            padding: '14px 18px',
                            border: '2px solid #201e1d',
                            fontFamily: "'Poppins',sans-serif",
                            fontSize: '15px',
                            fontWeight: '600',
                            color: '#fbf6ec',
                            background: '#201e1d',
                            borderRadius: '999px',
                          }}
                        >
                          End
                        </div>
                      </div>
                    </div>
                    <figcaption
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '15px',
                        lineHeight: '1.45',
                        color: '#4a4644',
                      }}
                    >
                      A skippable introduction, a menu, four sections and a bird-house game.
                    </figcaption>
                  </figure>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#6b6664',
                    }}
                  >
                    Content ideation
                  </span>
                  <figure
                    data-yj-rv="wipe"
                    style={{ margin: '0', gridColumn: '1/-1', display: 'flex', flexDirection: 'column', gap: '10px' }}
                  >
                    <button
                      onClick={v.ime?.open?.content_ideation_png}
                      aria-label="Enlarge Content ideation sticky notes"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        display: 'block',
                        width: '100%',
                        background: 'transparent',
                        overflow: 'hidden',
                      }}
                    >
                      <img
                        className="dc-hover-5429b0ae"
                        src="assets/web/assets/ime/content-ideation-nobg.webp"
                        alt="Content ideation sticky notes"
                        data-yj-px="0.05"
                        data-yj-pxmax="28"
                        style={{
                          mixBlendMode: 'multiply',
                          display: 'block',
                          width: '100%',
                          height: 'auto',
                          transform: 'scale(1.08)',
                          transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                  </figure>
                </div>
                <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#6b6664',
                    }}
                  >
                    Planning and wireframing
                  </span>
                  <figure
                    data-yj-rv="wipe"
                    style={{ margin: '0', gridColumn: '1/-1', display: 'flex', flexDirection: 'column', gap: '10px' }}
                  >
                    <button
                      onClick={v.ime?.open?.wireframes_png}
                      aria-label="Enlarge Planning board and wireframes"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        display: 'block',
                        width: '100%',
                        background: 'transparent',
                        overflow: 'hidden',
                      }}
                    >
                      <img
                        className="dc-hover-5429b0ae"
                        src="assets/ime/wireframes-nobg.png"
                        alt="Planning board and wireframes"
                        data-yj-px="0.05"
                        data-yj-pxmax="28"
                        style={{
                          mixBlendMode: 'multiply',
                          display: 'block',
                          width: '100%',
                          height: 'auto',
                          transform: 'scale(1.08)',
                          transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                  </figure>
                </div>
              </div>
            </div>
          </div>{' '}
        </section>{' '}
        <section
          data-mv="ideation"
          aria-label="Design ideation"
          style={{ padding: '60px clamp(20px,8.4vw,120px) 0', boxSizing: 'border-box' }}
        >
          {' '}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: '32px 48px',
              paddingTop: '24px',
              borderTop: '2px solid #201e1d',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#3c593e',
                }}
              >
                05
              </span>
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#201e1d',
                }}
              >
                Design ideation
              </span>
            </div>
            <div style={{ gridColumn: '1/-1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '44px' }}>
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontFamily: "'Averia Libre',serif",
                  fontWeight: '700',
                  fontSize: 'clamp(44px,5.4vw,80px)',
                  lineHeight: '1.02',
                  letterSpacing: '-0.01em',
                  color: '#201e1d',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                Earthy, hand-made, Indian.
              </h2>
              <p
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '18px',
                  lineHeight: '1.55',
                  color: '#4a4644',
                  maxWidth: '640px',
                  textWrap: 'pretty',
                }}
              >
                {
                  "Earthy tones and textures from birds' habitats make the screen feel close to nature, and warm colours keep it comfortable."
                }
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                  gap: '24px',
                  alignItems: 'stretch',
                }}
              >
                <figure
                  data-yj-rv="wipe"
                  style={{ margin: '0', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '10px' }}
                >
                  <button
                    onClick={v.ime?.open?.textures_png}
                    aria-label="Enlarge Texture and colour swatches"
                    style={{
                      all: 'unset',
                      cursor: 'zoom-in',
                      display: 'block',
                      width: '100%',
                      background: 'transparent',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      className="dc-hover-5429b0ae"
                      src="assets/ime/textures-nobg.png"
                      alt="Texture and colour swatches"
                      data-yj-px="0.05"
                      data-yj-pxmax="28"
                      style={{
                        mixBlendMode: 'multiply',
                        display: 'block',
                        width: '100%',
                        height: 'auto',
                        transform: 'scale(1.08)',
                        transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </button>
                </figure>
                <div
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(5,minmax(0,1fr))', gap: '8px', minWidth: '0' }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ flex: '1', minHeight: '120px', background: '#1C2565' }} />
                    <span
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '12px',
                        letterSpacing: '0.04em',
                        color: '#201e1d',
                      }}
                    >
                      #1C2565
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ flex: '1', minHeight: '120px', background: '#3C593E' }} />
                    <span
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '12px',
                        letterSpacing: '0.04em',
                        color: '#201e1d',
                      }}
                    >
                      #3C593E
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ flex: '1', minHeight: '120px', background: '#E8A85A' }} />
                    <span
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '12px',
                        letterSpacing: '0.04em',
                        color: '#201e1d',
                      }}
                    >
                      #E8A85A
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ flex: '1', minHeight: '120px', background: '#D56D54' }} />
                    <span
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '12px',
                        letterSpacing: '0.04em',
                        color: '#201e1d',
                      }}
                    >
                      #D56D54
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ flex: '1', minHeight: '120px', background: '#333333' }} />
                    <span
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '12px',
                        letterSpacing: '0.04em',
                        color: '#201e1d',
                      }}
                    >
                      #333333
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <span
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#6b6664',
                  }}
                >
                  Illustration style
                </span>
                <p
                  style={{
                    margin: '0',
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: '18px',
                    lineHeight: '1.55',
                    color: '#4a4644',
                    maxWidth: '640px',
                    textWrap: 'pretty',
                  }}
                >
                  Madhubani art from Bihar, mixed with image manipulation, since the exhibition celebrates Indian birds.
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                    gap: '16px',
                  }}
                >
                  <figure
                    data-yj-rv="wipe"
                    style={{ margin: '0', gridColumn: '1/-1', display: 'flex', flexDirection: 'column', gap: '10px' }}
                  >
                    <button
                      onClick={v.ime?.open?.madhubani_png}
                      aria-label="Enlarge Madhubani art references"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        display: 'block',
                        width: '100%',
                        background: 'transparent',
                        overflow: 'hidden',
                      }}
                    >
                      <img
                        className="dc-hover-5429b0ae"
                        src="assets/web/assets/ime/madhubani-nobg.webp"
                        alt="Madhubani art references"
                        data-yj-px="0.05"
                        data-yj-pxmax="28"
                        style={{
                          mixBlendMode: 'multiply',
                          display: 'block',
                          width: '100%',
                          height: 'auto',
                          transform: 'scale(1.08)',
                          transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <figcaption
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '15px',
                        lineHeight: '1.45',
                        color: '#4a4644',
                      }}
                    >
                      Illustrations for the website
                    </figcaption>
                  </figure>
                  <figure
                    data-yj-rv="wipe"
                    style={{ margin: '0', gridColumn: '1/-1', display: 'flex', flexDirection: 'column', gap: '10px' }}
                  >
                    <button
                      onClick={v.ime?.open?.illustrations_png}
                      aria-label="Enlarge Illustrations made for the website"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        display: 'block',
                        width: '100%',
                        background: 'transparent',
                        overflow: 'hidden',
                      }}
                    >
                      <img
                        className="dc-hover-5429b0ae"
                        src="assets/web/assets/ime/illustrations-nobg.webp"
                        alt="Illustrations made for the website"
                        data-yj-px="0.05"
                        data-yj-pxmax="28"
                        style={{
                          mixBlendMode: 'multiply',
                          display: 'block',
                          width: '100%',
                          height: 'auto',
                          transform: 'scale(1.08)',
                          transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <figcaption
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '15px',
                        lineHeight: '1.45',
                        color: '#4a4644',
                      }}
                    >
                      In the website
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <span
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#6b6664',
                  }}
                >
                  Logo
                </span>
                <p
                  style={{
                    margin: '0',
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: '18px',
                    lineHeight: '1.55',
                    color: '#4a4644',
                    maxWidth: '640px',
                    textWrap: 'pretty',
                  }}
                >
                  The mark merges birds and humans: a leaf for nature, a fingerprint for people, and a hand that can
                  also read as a claw.
                </p>
                <figure
                  data-yj-rv="wipe"
                  style={{ margin: '0', gridColumn: '1/-1', display: 'flex', flexDirection: 'column', gap: '10px' }}
                >
                  <button
                    onClick={v.ime?.open?.logo_sketches_png}
                    aria-label="Enlarge Logo sketches"
                    style={{
                      all: 'unset',
                      cursor: 'zoom-in',
                      display: 'block',
                      width: '100%',
                      background: 'transparent',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      className="dc-hover-5429b0ae"
                      src="assets/web/assets/ime/logo-sketches-nobg.webp"
                      alt="Logo sketches"
                      data-yj-px="0.05"
                      data-yj-pxmax="28"
                      style={{
                        mixBlendMode: 'multiply',
                        display: 'block',
                        width: '100%',
                        height: 'auto',
                        transform: 'scale(1.08)',
                        transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </button>
                  <figcaption
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '15px',
                      lineHeight: '1.45',
                      color: '#4a4644',
                    }}
                  >
                    Exploration
                  </figcaption>
                </figure>
                <figure
                  data-yj-rv="wipe"
                  style={{ margin: '0', gridColumn: '1/-1', display: 'flex', flexDirection: 'column', gap: '10px' }}
                >
                  <button
                    onClick={v.ime?.open?.logo_final_png}
                    aria-label="Enlarge Final logo"
                    style={{
                      all: 'unset',
                      cursor: 'zoom-in',
                      display: 'block',
                      width: '100%',
                      background: 'transparent',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      className="dc-hover-5429b0ae"
                      src="assets/ime/logo-final-nobg.png"
                      alt="Final logo"
                      data-yj-px="0.05"
                      data-yj-pxmax="28"
                      style={{
                        mixBlendMode: 'multiply',
                        display: 'block',
                        width: '100%',
                        height: 'auto',
                        transform: 'scale(1.08)',
                        transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                      }}
                    />
                  </button>
                  <figcaption
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '15px',
                      lineHeight: '1.45',
                      color: '#4a4644',
                    }}
                  >
                    Final
                  </figcaption>
                </figure>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <span
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#6b6664',
                  }}
                >
                  Theme and references
                </span>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))',
                    gap: '16px',
                    alignItems: 'start',
                  }}
                >
                  <figure
                    data-yj-rv="wipe"
                    style={{
                      margin: '0',
                      gridColumn: '1/-1',
                      width: '100%',
                      maxWidth: '560px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    <button
                      onClick={v.ime?.open?.concept_board_png}
                      aria-label="Enlarge Concept board"
                      style={{
                        all: 'unset',
                        cursor: 'zoom-in',
                        display: 'block',
                        width: '100%',
                        background: 'transparent',
                        overflow: 'hidden',
                      }}
                    >
                      <img
                        className="dc-hover-5429b0ae"
                        src="assets/web/assets/ime/concept-board-nobg.webp"
                        alt="Concept board"
                        data-yj-px="0.05"
                        data-yj-pxmax="28"
                        style={{
                          mixBlendMode: 'multiply',
                          display: 'block',
                          width: '100%',
                          height: 'auto',
                          transform: 'scale(1.08)',
                          transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </button>
                    <figcaption
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '15px',
                        lineHeight: '1.45',
                        color: '#4a4644',
                      }}
                    >
                      Concept board: co-existence and sanctuary cities.
                    </figcaption>
                  </figure>
                  <div style={{ gridColumn: '1/-1', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <figure
                      data-yj-rv="wipe"
                      style={{ margin: '0', gridColumn: '1/-1', display: 'flex', flexDirection: 'column', gap: '10px' }}
                    >
                      <button
                        onClick={v.ime?.open?.references_png}
                        aria-label="Enlarge Website references"
                        style={{
                          all: 'unset',
                          cursor: 'zoom-in',
                          display: 'block',
                          width: '100%',
                          background: 'transparent',
                          overflow: 'hidden',
                        }}
                      >
                        <img
                          className="dc-hover-5429b0ae"
                          src="assets/web/assets/ime/references-nobg.webp"
                          alt="Website references"
                          data-yj-px="0.05"
                          data-yj-pxmax="28"
                          style={{
                            mixBlendMode: 'multiply',
                            display: 'block',
                            width: '100%',
                            height: 'auto',
                            transform: 'scale(1.08)',
                            transition: 'transform 1200ms cubic-bezier(.2,.8,.2,1)',
                          }}
                        />
                      </button>
                    </figure>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
                        borderTop: '2px solid #201e1d',
                      }}
                    >
                      <div
                        data-yj-rv="up"
                        style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 20px 16px 0' }}
                      >
                        <span
                          style={{
                            fontFamily: "'Poppins',sans-serif",
                            fontSize: '12px',
                            fontWeight: '600',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#3c593e',
                          }}
                        >
                          Illustrated
                        </span>
                        <span
                          style={{
                            fontFamily: "'Poppins',sans-serif",
                            fontSize: '16px',
                            lineHeight: '1.5',
                            color: '#201e1d',
                          }}
                        >
                          Minimal UI, with one strong illustration per section.
                        </span>
                      </div>
                      <div
                        data-yj-rv="up"
                        style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 20px 16px 0' }}
                      >
                        <span
                          style={{
                            fontFamily: "'Poppins',sans-serif",
                            fontSize: '12px',
                            fontWeight: '600',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#3c593e',
                          }}
                        >
                          User control
                        </span>
                        <span
                          style={{
                            fontFamily: "'Poppins',sans-serif",
                            fontSize: '16px',
                            lineHeight: '1.5',
                            color: '#201e1d',
                          }}
                        >
                          Horizontal scroll to catch attention and spark interest.
                        </span>
                      </div>
                      <div
                        data-yj-rv="up"
                        style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 20px 16px 0' }}
                      >
                        <span
                          style={{
                            fontFamily: "'Poppins',sans-serif",
                            fontSize: '12px',
                            fontWeight: '600',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#3c593e',
                          }}
                        >
                          Interactive
                        </span>
                        <span
                          style={{
                            fontFamily: "'Poppins',sans-serif",
                            fontSize: '16px',
                            lineHeight: '1.5',
                            color: '#201e1d',
                          }}
                        >
                          Micro-interactions and parallax to match the feel of being there.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{' '}
        </section>{' '}
        <section
          data-mv="screens"
          aria-label="The design"
          style={{ padding: '60px clamp(20px,8.4vw,120px) 0', boxSizing: 'border-box' }}
        >
          {' '}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: '32px 48px',
              paddingTop: '24px',
              borderTop: '2px solid #201e1d',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#3c593e',
                }}
              >
                06
              </span>
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#201e1d',
                }}
              >
                The design
              </span>
            </div>
            <div style={{ gridColumn: '1/-1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  gap: '16px 48px',
                }}
              >
                <h2
                  data-yj-rv="up"
                  style={{
                    margin: '0',
                    fontFamily: "'Averia Libre',serif",
                    fontWeight: '700',
                    fontSize: 'clamp(32px,3.6vw,52px)',
                    lineHeight: '1.02',
                    letterSpacing: '-0.01em',
                    color: '#201e1d',
                    textWrap: 'balance',
                    flex: '1 1 360px',
                  }}
                >
                  Collage, texture and sound.
                </h2>
                <p
                  data-yj-rv="up"
                  style={{
                    margin: '0',
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: '16px',
                    lineHeight: '1.55',
                    color: '#4a4644',
                    maxWidth: '520px',
                    flex: '1 1 360px',
                    textWrap: 'pretty',
                  }}
                >
                  Hand-cut collage, handmade-paper textures and an earthy palette carry the warmth of the gallery onto
                  the screen. Songs, calls and recordings sit inside the pages, so visitors listen as they read.
                </p>
              </div>
              <figure
                data-yj-rv="up"
                aria-label="Website walkthrough"
                style={{
                  margin: '0 calc(-1 * clamp(20px,8.4vw,120px))',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '21/9',
                    maxHeight: '62vh',
                    overflow: 'hidden',
                    background: 'transparent',
                  }}
                >
                  {' '}
                  <div
                    style={{
                      position: 'absolute',
                      left: '0',
                      top: '0',
                      width: '100%',
                      height: '100%',
                      transform: 'rotate(-9deg) scale(1.2)',
                    }}
                  >
                    {' '}
                    {each(v.strip, (m, $index) => (
                      <>
                        <div
                          style={css(
                            `position:absolute;top:50%;left:${m?.left ?? ''};width:34%;aspect-ratio:16/9;transform:translateY(-50%);overflow:hidden;background:#2e2523;box-shadow:0 12px 32px rgba(0,0,0,.4);opacity:${m?.cardOp ?? ''};transition:left ${m?.dur ?? ''} cubic-bezier(.6,0,.2,1), opacity 700ms`,
                          )}
                        >
                          <img
                            src={asset(m?.src)}
                            alt=""
                            style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                      </>
                    ))}{' '}
                  </div>{' '}
                  <div
                    ref={v.lapRef}
                    style={{
                      position: 'absolute',
                      left: '28%',
                      top: '8%',
                      width: '44%',
                      transform: 'rotate(-9deg)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      pointerEvents: 'none',
                    }}
                  >
                    <div
                      style={{
                        width: '84%',
                        padding: '1.6%',
                        boxSizing: 'border-box',
                        background: '#0e0d0d',
                        borderRadius: '10px 10px 0 0',
                        boxShadow: '0 0 0 2px #5b5856',
                      }}
                    >
                      {' '}
                      <div
                        style={{
                          position: 'relative',
                          width: '100%',
                          aspectRatio: '16/10',
                          overflow: 'hidden',
                          background: '#000000',
                        }}
                      >
                        {' '}
                        {each(v.macs, (m, $index) => (
                          <>
                            <img
                              src={asset(m?.src)}
                              alt={m?.alt}
                              style={css(
                                `position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:${m?.op ?? ''};transform:${m?.tf ?? ''};transition:opacity 800ms ease, transform 1400ms cubic-bezier(.2,.8,.2,1)`,
                              )}
                            />
                          </>
                        ))}{' '}
                      </div>{' '}
                    </div>
                    <div
                      style={{
                        width: '100%',
                        aspectRatio: '60/1.8',
                        background: 'linear-gradient(#d4d1cd,#8d8a87)',
                        clipPath: 'polygon(2% 0,98% 0,100% 60%,99% 100%,1% 100%,0 60%)',
                      }}
                    />
                    <div
                      style={{
                        width: '70%',
                        aspectRatio: '30/1',
                        marginTop: '3%',
                        background: 'radial-gradient(closest-side,rgba(0,0,0,.65),transparent)',
                      }}
                    />
                  </div>{' '}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px 24px',
                    paddingTop: '16px',
                    borderTop: '2px solid #201e1d',
                    margin: '0 clamp(20px,8.4vw,120px)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', minWidth: '0' }}>
                    <span
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        fontSize: '12px',
                        color: '#3c593e',
                      }}
                    >
                      {t(v.macNum)}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Averia Libre',serif",
                        fontWeight: '700',
                        fontSize: '22px',
                        lineHeight: '1.1',
                        color: '#201e1d',
                      }}
                    >
                      {t(v.macLabel)}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      className="dc-hover-d69b7e6d"
                      onClick={v.macPrev}
                      aria-label="Previous screen"
                      style={{
                        all: 'unset',
                        cursor: 'pointer',
                        width: '44px',
                        height: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid #201e1d',
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '18px',
                        color: '#201e1d',
                        transition: 'background 200ms,color 200ms',
                      }}
                    >
                      ←
                    </button>
                    <button
                      className="dc-hover-d69b7e6d"
                      onClick={v.macNext}
                      aria-label="Next screen"
                      style={{
                        all: 'unset',
                        cursor: 'pointer',
                        width: '44px',
                        height: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid #201e1d',
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '18px',
                        color: '#201e1d',
                        transition: 'background 200ms,color 200ms',
                      }}
                    >
                      →
                    </button>
                  </div>
                </div>
              </figure>
              <figure
                data-yj-rv="up"
                aria-label="Exhibition video"
                style={{
                  margin: '56px calc(40px - clamp(20px,8.4vw,120px)) 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  padding: 'clamp(20px,3vw,40px)',
                  backgroundColor: '#2c4a73',
                  backgroundImage: 'url(assets/web/assets/ime/tex-light.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: '8px 24px',
                    paddingTop: '16px',
                    borderTop: '2px solid #f4eace',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '13px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#f4eace',
                    }}
                  >
                    Watch the exhibition
                  </span>
                  <a
                    className="dc-hover-d1194afe"
                    href="https://www.youtube.com/watch?v=VV3GaKLkHXA"
                    target="_blank"
                    rel="noopener"
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#f4eace',
                      textDecoration: 'none',
                      borderBottom: '2px solid #ce863f',
                      paddingBottom: '2px',
                    }}
                  >
                    Open on YouTube →
                  </a>
                </div>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/9',
                    background: '#000000',
                    overflow: 'hidden',
                    borderRadius: '12px',
                  }}
                >
                  {' '}
                  <iframe
                    ref={v.ytRef}
                    src={'https://www.youtube.com/embed/VV3GaKLkHXA?rel=0&enablejsapi=1&mute=1&playsinline=1'}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', border: '0' }}
                  />{' '}
                </div>
              </figure>
            </div>
          </div>{' '}
        </section>{' '}
        <section
          data-mv="team"
          aria-label="The team"
          style={{ padding: '60px clamp(20px,8.4vw,120px) 0', boxSizing: 'border-box' }}
        >
          {' '}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: '32px 48px',
              paddingTop: '24px',
              borderTop: '2px solid #201e1d',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#3c593e',
                }}
              >
                07
              </span>
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#201e1d',
                }}
              >
                The team
              </span>
            </div>
            <div style={{ gridColumn: '1/-1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '44px' }}>
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontFamily: "'Averia Libre',serif",
                  fontWeight: '700',
                  fontSize: 'clamp(44px,5.4vw,80px)',
                  lineHeight: '1.02',
                  letterSpacing: '-0.01em',
                  color: '#201e1d',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                Six interns, three mentors, six months.
              </h2>
              <p
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '18px',
                  lineHeight: '1.55',
                  color: '#4a4644',
                  maxWidth: '640px',
                  textWrap: 'pretty',
                }}
              >
                {
                  "Two designers, two developers and two content writers, mentored through IME's Future Museum Professionals Internship. I brainstormed and designed interfaces for both the physical and virtual exhibitions, across web and mobile."
                }
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
                  borderTop: '2px solid #201e1d',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '16px 20px 16px 0' }}>
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#6b6664',
                    }}
                  >
                    Mentors
                  </span>
                  <ul
                    style={{ margin: '0', padding: '0', listStyle: 'none', display: 'flex', flexDirection: 'column' }}
                  >
                    <li
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '12px',
                        padding: '8px 0',
                        borderTop: '1px solid #d6d3d2',
                        fontSize: '15px',
                        color: '#201e1d',
                        fontWeight: '400',
                      }}
                    >
                      <span>Sahana Mohan</span>
                      <span style={{ color: '#6b6664', fontWeight: '400' }}>Curatorial</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '12px',
                        padding: '8px 0',
                        borderTop: '1px solid #d6d3d2',
                        fontSize: '15px',
                        color: '#201e1d',
                        fontWeight: '400',
                      }}
                    >
                      <span>Aditi Dhamija</span>
                      <span style={{ color: '#6b6664', fontWeight: '400' }}>Design</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '12px',
                        padding: '8px 0',
                        borderTop: '1px solid #d6d3d2',
                        fontSize: '15px',
                        color: '#201e1d',
                        fontWeight: '400',
                      }}
                    >
                      <span>Amit Goyal</span>
                      <span style={{ color: '#6b6664', fontWeight: '400' }}>Technical</span>
                    </li>
                  </ul>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '16px 20px 16px 0' }}>
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#6b6664',
                    }}
                  >
                    {'Content & design'}
                  </span>
                  <ul
                    style={{ margin: '0', padding: '0', listStyle: 'none', display: 'flex', flexDirection: 'column' }}
                  >
                    <li
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '12px',
                        padding: '8px 0',
                        borderTop: '1px solid #d6d3d2',
                        fontSize: '15px',
                        color: '#201e1d',
                        fontWeight: '400',
                      }}
                    >
                      <span>Amrita Mukherjee</span>
                      <span style={{ color: '#6b6664', fontWeight: '400' }}>Content</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '12px',
                        padding: '8px 0',
                        borderTop: '1px solid #d6d3d2',
                        fontSize: '15px',
                        color: '#201e1d',
                        fontWeight: '400',
                      }}
                    >
                      <span>Rhea Sokhanda</span>
                      <span style={{ color: '#6b6664', fontWeight: '400' }}>Content</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '12px',
                        padding: '8px 0',
                        borderTop: '1px solid #d6d3d2',
                        fontSize: '15px',
                        color: '#201e1d',
                        fontWeight: '400',
                      }}
                    >
                      <span>Ananya S R</span>
                      <span style={{ color: '#6b6664', fontWeight: '400' }}>Design</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '12px',
                        padding: '8px 0',
                        borderTop: '1px solid #d6d3d2',
                        fontSize: '15px',
                        color: '#3c593e',
                        fontWeight: '600',
                      }}
                    >
                      <span>Yashvi Jain</span>
                      <span style={{ color: '#6b6664', fontWeight: '400' }}>Design</span>
                    </li>
                  </ul>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '16px 20px 16px 0' }}>
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#6b6664',
                    }}
                  >
                    Development
                  </span>
                  <ul
                    style={{ margin: '0', padding: '0', listStyle: 'none', display: 'flex', flexDirection: 'column' }}
                  >
                    <li
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '12px',
                        padding: '8px 0',
                        borderTop: '1px solid #d6d3d2',
                        fontSize: '15px',
                        color: '#201e1d',
                        fontWeight: '400',
                      }}
                    >
                      <span>Nishtha</span>
                      <span style={{ color: '#6b6664', fontWeight: '400' }}>Development</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '12px',
                        padding: '8px 0',
                        borderTop: '1px solid #d6d3d2',
                        fontSize: '15px',
                        color: '#201e1d',
                        fontWeight: '400',
                      }}
                    >
                      <span>Khushi</span>
                      <span style={{ color: '#6b6664', fontWeight: '400' }}>Development</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '48px',
                  paddingTop: '24px',
                  borderTop: '2px solid #201e1d',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#6b6664',
                  }}
                >
                  In partnership with
                </span>
                <img
                  src="assets/ime/ime-logo.png"
                  alt="Indian Music Experience Museum"
                  style={{ height: '96px', width: 'auto' }}
                />
                <img src="assets/ime/bc-logo.png" alt="British Council" style={{ height: '68px', width: 'auto' }} />
                <img
                  src="assets/ime/osch-logo.png"
                  alt="Our Shared Cultural Heritage"
                  style={{ height: '82px', width: 'auto' }}
                />
              </div>
            </div>
          </div>{' '}
        </section>{' '}
        <section
          data-mv="reflect"
          aria-label="Reflection"
          style={{ padding: '60px clamp(20px,8.4vw,120px) 0', boxSizing: 'border-box' }}
        >
          {' '}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: '32px 48px',
              paddingTop: '24px',
              borderTop: '2px solid #201e1d',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#3c593e',
                }}
              >
                08
              </span>
              <span
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#201e1d',
                }}
              >
                Reflection
              </span>
            </div>
            <div style={{ gridColumn: '1/-1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '44px' }}>
              <h2
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontFamily: "'Averia Libre',serif",
                  fontWeight: '700',
                  fontSize: 'clamp(44px,5.4vw,80px)',
                  lineHeight: '1.02',
                  letterSpacing: '-0.01em',
                  color: '#201e1d',
                  textWrap: 'balance',
                  maxWidth: '900px',
                }}
              >
                {"Translate the room, don't copy it."}
              </h2>
              <p
                data-yj-rv="up"
                style={{
                  margin: '0',
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '18px',
                  lineHeight: '1.55',
                  color: '#4a4644',
                  maxWidth: '640px',
                  textWrap: 'pretty',
                }}
              >
                A gallery guides people with walls and light. A website has neither, so the story, the sequence and the
                sound had to do that work instead.
              </p>
              <a
                className="dc-hover-78de52de"
                href="https://indianmusicexperience.org/bird-song/"
                target="_blank"
                rel="noopener"
                style={{
                  alignSelf: 'flex-start',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 20px',
                  background: '#3c593e',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transition: 'background 200ms',
                }}
              >
                {'Visit the exhibition '}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>{' '}
        </section>
      </div>
      <div
        style={css(
          `background-color:#efe8d8;background-image:${v.ime?.paper ?? ''};background-size:1200px auto;padding:80px 12px 12px`,
        )}
      >
        <div style={{ height: '60vh', minHeight: '420px', position: 'relative', overflow: 'hidden' }}>
          {t(v.nextBanner)}
        </div>
      </div>
    </>
  );
}

export default defineScreen({
  name: 'Case Birdsong Pub',
  Logic,
  template,
  css: screenCss,
  links: [
    'https://fonts.googleapis.com/css2?family=Averia+Libre:ital,wght@0,300;0,400;0,700;1,400&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap',
  ],
  defaults: {},
});
