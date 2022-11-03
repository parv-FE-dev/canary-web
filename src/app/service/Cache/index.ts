class Cache {
	public cache: any;

  constructor() {
    // A map which will store the cached values.
    this.cache = {};

    this.setValue.bind(this);
    this.getValue.bind(this);
    this.removeValue.bind(this);
    this.clearAll.bind(this);
  }

  /**
   * Function which will be called to store the value in cache.
   * @param {String} key Key for the cahce.
   * @param {Any} value Value for that key.
   */
  setValue(key: string | number, value?: any) {
    if (typeof key === 'string') {
      this.cache[key] = value;
    }
  }

  /**
   * Function to get the cached value.
   * @param {String} key Key for which the value if needed.
   * @returns {Any} Cached value stored against that key.
   */
  getValue(key: string) {
    if (typeof key === 'string') {
      return this.cache[key];
    }
    return null;
  }

  /**
   * Function to remove the cached value.
   * @param {String} key Key for which the value if needed.
   */
  removeValue(key: string | number) {
    if (typeof key === 'string') {
      this.cache[key] = null;
    }
  }

  /**
   * Function which will clear all the values from the cache.
   */
  clearAll() {
    this.cache = {};
  }
}

export default new Cache();