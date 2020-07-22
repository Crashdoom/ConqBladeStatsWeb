export function classNames(
  cons: {
    [key: string]: boolean | undefined;
  },
  ...always: string[]
): string {
  const out = always.slice();
  for (const k of Object.keys(cons)) {
    if (cons[k]) {
      out.push(k);
    }
  }
  return out.join(' ');
}

export const getTimeAgoText = (timestamp: number): string => {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 30) {
    return 'Just now';
  }

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes === 1) {
    return 'A minute ago';
  }

  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours === 1) {
    return 'An hour ago';
  }

  if (hours < 24) {
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  }

  const days = Math.floor(hours / 24);
  if (days === 1) {
    return 'Yesterday';
  }

  if (days < 7) {
    return `${days} days ago`;
  }

  const weeks = Math.floor(days / 7);
  if (weeks === 1) {
    return 'A week ago';
  }

  if (weeks < 4) {
    return `${weeks} weeks ago`;
  }

  // TODO: Find a better way to do this. MONTHS ARE HARD. AAAAAAAAAA.
  const months = Math.floor(weeks / 4);
  if (months === 1) {
    return 'A month ago';
  }

  if (months < 12) {
    return `${months} months ago`;
  }

  const years = Math.floor(months / 12);
  if (years === 1) {
    return 'A year ago';
  }

  return `${years} years ago`;
};

import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    tick();
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}