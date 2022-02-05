export function classNames(...classes : Array<string>) {
    return classes.filter(Boolean).join(" ");
}

/**
 * Estimated reading time metrics
 * 
 * Third-grade students = 150 words per minute (wpm)
 * Eighth grade students = 250 wpm
 * Average college student = 450 wpm
 * Average "high-level exec" = 575 wpm
 * Average college professor = 675 wpm
 * Speed readers = 1,500 wpm
 * World speed reading champion = 4,700 wpm
 * Average adult = 300 wpm
 * 
 * @param text: string
 * @returns
 */
export function estimateReadingTime(text: string): number {
    const textLength = text.split(" ").length;
    return Math.ceil(textLength / 250);
  }