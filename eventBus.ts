class handleBus {
    private events: { [key: string]: Array<{ fn: Function; isOnce: boolean }> };
    constructor() {
      this.events = {};
    }
    on(type: string, fn: Function, isOnce: boolean = false) {
      if (this.events[type] == null) {
        this.events[type] = [];
      }
      this.events[type].push({ fn, isOnce });
    }
    once(type: string, fn: Function) {
      this.on(type, fn, true);
    }
    emit(type: string, ...args: any[]) {
      const fnList = this.events[type];
      if (!fnList) return;
      this.events[type] = fnList.filter((item) => {
        const { fn, isOnce } = item;
        fn(...args);
        // 过滤掉isOnce为true的
        if (!isOnce) return true;
        return false;
      });
    }
    off(type: string, fn?: Function) {
      const fnList = this.events[type];
      if (!fn) {
        this.events[type] = [];
      } else {
        if (fnList) {
          this.events[type] = fnList.filter((item) => item.fn !== fn);
        }
      }
    }
  }