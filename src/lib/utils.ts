export function classNames(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export const scrollToElement = (elementId: string | null) => {
  if (elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
