export default function scrollToSection(event) {
  event.preventDefault();
  const sectionId = event.target.getAttribute("href");
  const sectionElement = document.querySelector(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: "smooth" });
  }
}
