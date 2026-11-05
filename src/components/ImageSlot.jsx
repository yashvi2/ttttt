const RADII = { circle: '50%', pill: '9999px', rect: '0' };

/**
 * A photo frame that fills its container. With `src` it shows the image
 * cropped to fit; without one it shows the `placeholder` caption in a dashed
 * frame (the design's empty state).
 */
export default function ImageSlot({ id, src, shape = 'rounded', radius, fit = 'cover', placeholder = 'Drop an image', alt = '' }) {
  const borderRadius = RADII[shape] ?? `${Number.isFinite(parseFloat(radius)) ? parseFloat(radius) : 12}px`;
  return (
    <div className="image-slot" data-slot={id} data-filled={src ? '' : undefined} style={{ borderRadius }}>
      {src ? (
        <img src={src} alt={alt} style={{ objectFit: fit }} draggable={false} />
      ) : (
        <div className="image-slot__empty" style={{ borderRadius }}>
          <span className="image-slot__cap">{placeholder}</span>
        </div>
      )}
    </div>
  );
}
