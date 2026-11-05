/**
 * Wires a screen's behaviour class to its template and styles.
 *
 *   name     – the screen's name (also written to `data-sc-name` on its host)
 *   Logic    – a DCLogic subclass holding state, handlers and `renderVals()`
 *   template – (vals) => JSX
 *   css      – raw CSS injected once, the first time the screen renders
 *   links    – stylesheet URLs injected once, before `css`
 *   defaults – default prop values (the design's tweak defaults)
 */
export function defineScreen({ name, Logic, template, css = '', links = [], defaults = {} }) {
  Logic.screenName = name;
  Logic.template = template;
  Logic.screenCss = css;
  Logic.screenLinks = links;
  Logic.defaults = defaults;
  Logic.displayName = name.replace(/\s+/g, '');
  return Logic;
}
