import accordionConfig from './accordion.config';

class Accordion {
  constructor() {
    this.config = { ...this.config, ...accordionConfig };
    this.init();
  }

  init() {
    this.setupDOMReferences();
    this.triggerAccordion();
  }

  setupDOMReferences() {
    this.collapseTriggers = document.querySelectorAll(this.config.selectors.collapseTrigger);
    this.accordionPanels = document.querySelectorAll(this.config.selectors.accordionPanel);
  }

  triggerAccordion() {
    this.collapseTriggers.forEach((el, index) => {
      el.addEventListener('click', this.toggleAccordion.bind(this, index));
    });
  }

  toggleAccordion(index) {
    const panel = this.accordionPanels[index];
    const trigger = this.collapseTriggers[index];

    if (panel && trigger) {
      if (panel.classList.contains(this.config.classes.isHidden)) {
        panel.classList.remove(this.config.classes.isHidden);
        trigger.classList.remove(this.config.classes.isClosed);
      } else {
        panel.classList.add(this.config.classes.isHidden);
        trigger.classList.add(this.config.classes.isClosed);
      }
    }
  }
}

export const accordion = new Accordion();
