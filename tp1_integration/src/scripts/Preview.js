/** Componsante Preview*/
export default class Preview {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this._element = element;
    this.previewItem = this._element.querySelectorAll('[data-follow]');

    this.init();
  }

  init() {
    for (let i = 0; i < this.previewItem.length; i++) {
      const element = this.previewItem[i];
      const inputId = element.dataset.follow;
      const input = document.querySelector(`#${inputId}`);

      if (!input) {
        console.error(
          `Le champ : ${inputId}, n'existe pas. Assurez-vous de bien identifier votre champ avec un id="${inputId}"`
        );
      } else {
        input.addEventListener('input', this.updateContent.bind(element));
      }
    }
  }
  updateContent() {
    const inputId = this.dataset.follow;
    const input = document.querySelector(`#${inputId}`);

    if (this.dataset.type == 'file') {
      this.src = URL.createObjectURL(input.files[0]);
    } else {
      this.innerText = input.value;
    }
  }
}
