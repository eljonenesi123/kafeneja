type IconProps = {
  className?: string;
};

/* Hand-drawn style accent icons — loose, single-stroke, slightly imperfect
   lines to feel sketched rather than vector-perfect. */

export function BeanIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M13 8C7 12 6 20 9 27c2.5 5.5 9 7.5 15 5 6.5-2.7 9-10.5 6-17-2.6-5.7-8-9-14-8-1 .1-2 .5-3 1z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 30c1-6 1-13 6-19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FlameIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 6c1 5-4 7-4 12 0 2 1 3.5 3 3.5s3-1.7 2.5-4c3 2 5.5 6 5.5 10 0 6-3.8 9.5-9 9.5S8.5 33.6 8.5 28c0-6 4-9 6-14 1.3-3.3 1-6 1-8 1.7 0 3.3 0 4.5 0z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CupIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 14h18l-1.2 14.5c-.2 2.5-2.3 4.5-4.8 4.5h-6c-2.5 0-4.6-2-4.8-4.5L9 14z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 16.5c3-.7 5.5.8 5.5 4s-2.5 5-5.8 4.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13 9c.5 1.5-1 2-.5 3.5M18 8c.5 1.5-1 2-.5 3.5M23 9c.5 1.5-1 2-.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LeafIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 30C8 18 16 8 30 8c1 12-9 21-20 22z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 30c4-6 9-11 17-16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeartIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 32C10 25 6 19.5 6 14.5 6 10.5 9 8 12.5 8c3 0 5.5 2 7.5 5 2-3 4.5-5 7.5-5C31 8 34 10.5 34 14.5c0 5-4 10.5-14 17.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DropletIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 6c5 8 10 14.5 10 20a10 10 0 1 1-20 0c0-5.5 5-12 10-20z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SnowflakeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 6v28M9 13l22 14M31 13 9 27"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function InstagramDoodle({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <rect x="7" y="7" width="26" height="26" rx="8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="20" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="28" cy="12.5" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function FacebookDoodle({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 34V21h4.5l.7-5.5H24v-3.4c0-1.6.4-2.7 2.8-2.7h3V4.9c-.5-.1-2.2-.2-4.2-.2-4.1 0-6.9 2.5-6.9 7.1v4.7H14V21h4.7v13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
