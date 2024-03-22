export default function joinClasses(
  ...args: (string | string[] | undefined)[]
): string {
  return args.filter(Boolean).join(" ");
}
