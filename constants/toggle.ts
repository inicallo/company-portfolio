// toggle.ts
export default function toggle(hamburger: HTMLElement | null, navMenu: HTMLElement | null) {
    if (hamburger && navMenu) {
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    }
  }
  