export function cockroachSpeed(s: number): number {
  const KM_TO_CENTIMETERS = 100000;
  const HOUR_TO_SECONDS = 3600;
  return Math.floor((s * KM_TO_CENTIMETERS) / HOUR_TO_SECONDS);
}
