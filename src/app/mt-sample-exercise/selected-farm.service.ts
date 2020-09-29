import { BehaviorSubject } from "rxjs";

export class SelectedFarmService {
  selectionManager: BehaviorSubject<any>

  constructor() {
    this.selectionManager = new BehaviorSubject(null);
  }

  getSelectionManager() {
    return this.selectionManager.asObservable();
  }

  setSelection(value) {
    this.selectionManager.next(value);
  }

}