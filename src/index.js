import mediumZoom from 'medium-zoom';

import styles from './index.scss';  // eslint-disable-line

mediumZoom('.zoomable', { margin: 48 });

const logoTrack = document.querySelector('#logo-track svg');
const logoName = document.querySelector('#logo-name');
const logoMagnifier = document.querySelector('#logo-magnifier');

const animationsDuration = ['05', '06', '07', '08'];
const animationsDelays = ['000', '005', '010', '015', '020'];

const bgPatches = [
  [0.1, 0, 0.05, 0.1, 0.15, 0, 0],
  [0.1, 0.2, 0.15, 0, 0.1, 0.05, 0.05],
  [0.05, 0, 0.05, 0.05, 0.15, 0, 0.1],
];
const bgPatchSize = 7;
const bgMaxVariation = 0.1;

const peaks = [
  [0.2, 0.5, 1, 0.7, 0.2],
  [0.4, 0.9, 0.8, 0.75, 0.2],
  [0.3, 0.6, 0.85, 1, 0.1],
];
const peaksPatchSize = 5;
const peakMaxVariation = 0.2;
const peakScaling = 0.5;
const peakFreq = 10;

const binSizes = [4, 5, 6];

const { width, height } = logoTrack.getBoundingClientRect();
const { left: nameLeft, width: nameWidth } = logoName.getBoundingClientRect();

let binSize = binSizes[0];
if (width > 960) {
  binSize = binSizes[1];
} else if (width > 1600) {
  binSize = binSize[2];
}

const viewWidth = Math.ceil(width / binSize);
const viewNameLeft = Math.ceil(nameLeft / binSize);
const viewNameWidth = Math.ceil(nameWidth / binSize);
const viewNamePadding = Math.round(viewNameWidth * 0.2);

// Build background
for (let i = 0; i < viewWidth; i += bgPatchSize) {
  const bgPatch = bgPatches[Math.round(Math.random() * (bgPatches.length - 1))];
  for (let j = 0; j < bgPatchSize; j++) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    const variation = (
      bgMaxVariation *
      (Math.round(Math.random() * 4) / 4) *
      (1 - (Math.round(Math.random()) * 2))
    );
    const binHeight = Math.max(0, (bgPatch[j] + variation) * height);

    const duration = animationsDuration[Math.round(Math.random() * 3)];
    const delay = animationsDelays[Math.round(Math.random() * 4)];

    rect.setAttribute('x', (i + j) * binSize);
    rect.setAttribute('y', height - binHeight);
    rect.setAttribute('width', binSize);
    rect.setAttribute('height', binHeight);
    rect.setAttribute('class', `animation-duration-${duration} animation-delay-${delay}`);

    logoTrack.appendChild(rect);
  }
}

// Add peaks
const bins = logoTrack.children;
const updatePeak = (position) => {
  const peak = peaks[Math.round(Math.random() * (peaks.length - 1))];
  for (let j = 0; j < peaksPatchSize; j++) {
    const variation = (
      peakMaxVariation *
      (Math.round(Math.random() * 4) / 4) *
      (1 - (Math.round(Math.random()) * 2))
    );
    const binHeight =
      Math.min(1, Math.max(0, (peak[j] + variation))) *
      height *
      (1 - (peakScaling * Math.random()));
    bins[position + j].setAttribute('y', height - binHeight);
    bins[position + j].setAttribute('height', binHeight);
  }
};
const peaksToInsert = Math.round(((width - nameWidth) / binSize) / peaksPatchSize / peakFreq);
let peaksInserted = 0;
const peaksPos = [];
while (peaksInserted < peaksToInsert) {
  const position = Math.round(Math.random() * (viewWidth - peaksPatchSize));

  if (
    position > viewNameLeft - viewNameWidth &&
    position < viewNameLeft + viewNameWidth + viewNamePadding
  ) continue;

  peaksPos.push(position);

  peaksInserted++;
  updatePeak(position);
}
const negsToInsert = Math.floor(peaksToInsert / 2);
let negsInserted = 0;
const negsPos = [];
while (negsInserted < negsToInsert) {
  const position = Math.round(Math.random() * (viewWidth - peaksPatchSize));

  if (
    position > viewNameLeft - viewNameWidth &&
    position < viewNameLeft + viewNameWidth + viewNamePadding
  ) continue;

  const tooCloseToAPeak = peaksPos.some((peakPos) => {
    if (
      position + 2 >= peakPos && position - 2 <= peakPos + peaksPatchSize
    ) return true;
    return false;
  });
  if (tooCloseToAPeak) continue;

  negsPos.push(position);

  negsInserted++;
}

// Insert peak at final magnifier position
updatePeak(viewNameLeft + 2, 'peak');

// Animate bars
for (let i = 0; i < viewWidth; i++) {
  bins[i].setAttribute(
    'class',
    `${bins[i].getAttribute('class')} animate`,
  );
}

const colorizePeaks = (position, isPositive) => {
  const name = isPositive ? 'peak' : 'no-peak';
  for (let j = 0; j < peaksPatchSize; j++) {
    bins[position + j].setAttribute(
      'class',
      `${bins[position + j].getAttribute('class')} ${name}`,
    );
  }
};

// Fade in magnifier
logoMagnifier.style.transform = `translate(${viewNameLeft * binSize}px, 0)`;
setTimeout(() => {
  logoMagnifier.style.opacity = 1;
  setTimeout(() => {
    colorizePeaks(viewNameLeft + 2, true);
  }, 250);

  // Animate magnifier
  const allPos = [
    ...peaksPos.map(pos => ({ pos, isPos: true })),
    ...negsPos.map(pos => ({ pos, isPos: false })),
  ];
  allPos.sort((a, b) => a.pos - b.pos);
  const duration = 0.666;

  setTimeout(() => {
    logoMagnifier.style.transition = `transform ${duration}s cubic-bezier(0.66, 0, 0.66, 1)`;
  }, 0);

  const animateTo = (to, next, isLast) => {
    const binPos = isLast ? to : allPos[to].pos - 2;
    const isPos = isLast ? true : allPos[to].isPos;

    logoMagnifier.style.transform = `translate(${binPos * binSize}px, 0)`;
    setTimeout(() => {
      colorizePeaks(binPos + 2, isPos);
    }, duration * 1000);

    if (typeof allPos[next] !== 'undefined') {
      setTimeout(() => animateTo(next, next + 1), (duration * 1000) + 250);
    } else {
      setTimeout(() => animateTo(viewNameLeft, undefined, true), (duration * 1000) + 250);
    }
  };
  setTimeout(() => animateTo(0, 1), 3000);
}, 1000);
