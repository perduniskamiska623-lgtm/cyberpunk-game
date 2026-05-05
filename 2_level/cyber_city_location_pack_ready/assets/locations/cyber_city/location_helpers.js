import locationSequence from "./location_sequence.js";

export function getLocationSegments() {
  return locationSequence.segments;
}

export function getLocationTotalWidth() {
  return locationSequence.totalWidth;
}

export function drawLocation(ctx, loadedImages, cameraX = 0, canvasWidth = 0) {
  for (const segment of locationSequence.segments) {
    const img = loadedImages[segment.id];
    if (!img) continue;
    const drawX = segment.x - cameraX;
    if (drawX + segment.width < 0) continue;
    if (canvasWidth && drawX > canvasWidth) continue;
    ctx.drawImage(img, drawX, segment.y, segment.width, segment.height);
  }
}
