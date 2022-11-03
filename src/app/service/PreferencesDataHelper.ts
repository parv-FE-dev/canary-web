import { PreferencesData } from './PreferencesData';
import Cache from './Cache';
import {CacheKey} from './Cache/CacheStoreConstants';

class PreferencesDataHelper {
	public data: any;

  constructor() {
    this.data = PreferencesData;
    this.getItemsArray.bind(this);
    this.getItemData.bind(this);
    this.getItemTitle.bind(this);
    this.getItemDomainId.bind(this);
    this.getItemEntityId.bind(this);
    this.getItemContextQuery.bind(this);
  }

  getItemsArray() {
    return this.data.items;
  }

  getItemData(key: string | number) {
    if (key) {
      return this.data.data?.[key];
    }
    return null;
  }

  getItemTitle(key: any) {
    if (key) {
      return this.getItemData(key)?.title;
    }
    return null;
  }

  getItemDomainId(key: any) {
    if (key) {
      return this.getItemData(key)?.domainId;
    }
    return null;
  }

  getItemEntityId(key: any) {
    if (key) {
      return this.getItemData(key)?.entityId;
    }
    return null;
  }

  getItemContextQuery(key: any) {
    if (key) {
      return `context:${this.getItemDomainId(key)}.${this.getItemEntityId(
        key,
      )}`;
    }
    return null;
  }

  areInitialPreferencesSetInCache() {
    return !!Cache.getValue(CacheKey.AreInitialPreferencesSet);
  }

  getSelectedPreferencesListFromCache() {
    if (this.areInitialPreferencesSetInCache()) {
      return Cache.getValue(CacheKey.PreferenceList);
    }
    return [];
  }

  getVerifiedUsersPreferenceFromCache() {
    const savedValue = Cache.getValue(
      CacheKey.ShouldShowTimelineFromVerifiedUsersOnly,
    );
    if (savedValue === undefined || savedValue === null) {
      return true;
    }

    return !!JSON.parse(savedValue);
  }
}
export default new PreferencesDataHelper();