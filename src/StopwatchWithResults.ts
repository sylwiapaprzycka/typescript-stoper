import Stopwatch from './Stopwatch.js'


class StopwatchWithResults extends Stopwatch {

  results: string[]  = []

  constructor(element: HTMLDivElement) {
    super(element)
    this.prepareElements(element)
    this.prepareActions()
  }

  private prepareElements(element: HTMLDivElement): void {
    this.dom.resultsList = <HTMLDivElement> element.querySelector('.stopwatch__results')
    this.dom.addToListBtn = <HTMLButtonElement> element.querySelector('.stopwatch__add-to-list-btn')
    this.dom.resetListBtn = <HTMLButtonElement> element.querySelector('.stopwatch__reset-list-btn')
  }

  private prepareActions() {
    /*
    Funkcja ta powinna dodawać nasłuchwiacze do buttonów this.dom.addToListBtn oraz this.dom.resetListBtn.
    Pierwszy powinien po kliknięciu uruchamiać metodę this.addToList, a druga this.resetList.
    */
   this.dom.addToListBtn.addEventListener('click', () => this.addToList());
   this.dom.resetListBtn.addEventListener('click', () => this.resetList());
  }

  renderList() {
    /*
    Funkcja ta powinna czyścić zawartość this.dom.resultsList, a następnie renderować w niej nowe elementy li
    na podstawie zawartości tablicy this.results. Każdy jej element powinien być renderowany bez żadnych zmian.

    np. <li>00:12:00</li> for each <li> i liste wrzucic do html
    */

  //  this.dom.resultsList.innerHTML =  this.results.join('');
    let li = document.createElement('li') as HTMLElement;
    li.innerText = this.formatTime(this.currentTime);
    this.dom.resultsList.appendChild(li);
  }

  addToList() {
    /*
    Funkcja ta powinna pobierać aktualny czas z this.currentTime, formatować go i w takiej postaci zapisywać do tablicy this.results.
    Następnie powinna renderować aktualną listę na stronie (this.renderList).
    */
   const formattedTime = this.formatTime(this.currentTime);
   this.results.push(formattedTime);
   this.renderList();

  }

  resetList() {
    /*
    Funkcja ta powinna czyścić tablicę this.results oraz zawartość this.dom.resultsList
    */
   this.results = []
   this.dom.resultsList.innerHTML = '';
  }

}

export default StopwatchWithResults
