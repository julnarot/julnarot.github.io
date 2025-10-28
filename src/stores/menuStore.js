class Observable {
  constructor(initialValue) {
    this._value = initialValue;
    this._subscriptions = new Set();
  }

  get() {
    return this._value;
  }

  next(value) {
    this._value = value;
    this._subscriptions.forEach((callback) => callback(this._value));
  }

  subscribe(callback) {
    this._subscriptions.add(callback);
    callback(this._value);
    return () => this._subscriptions.delete(callback);
  }
}

const collapseObservable = new Observable(false);

export const menuStore = {
  get: () => collapseObservable.get(),
  open: () => collapseObservable.next(true),
  close: () => collapseObservable.next(false),
  subscribe: (callback) => collapseObservable.subscribe(callback),
};
