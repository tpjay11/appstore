import CategoryStore, { CategoryInfo } from './CategoryStore';
import AppStore, { AppResult } from './AppStore';
// import { observable } from 'mobx';

class Store {
    // categories: CategoryInfo[];
    searchKey: string;
    catService: CategoryStore;
    appService: AppStore;

    constructor() {
        this.catService = new CategoryStore(null);
        this.appService = new AppStore();
        // this.categories = observable([]);
    }

    fetchCategories(): Promise<{ categories: { [id: string]: CategoryInfo }, byID: string[] }> {
        return this.catService.fetchCategories();
    }

    getCategoryInfoByID(id: string): CategoryInfo | null {
        return this.catService.categories[id] || null;
    }

    allCategories(): CategoryInfo[] {
        return this.catService.getAllCategories();
    }

    // TODO: actions
    fetchApps(cat: string): Promise<AppResult> {
        return this.appService.fetchApps(cat);
    }
}

export { Store };
export function getInstance(): Store {
    return new Store;
}

const defaultStore = getInstance();
export default defaultStore;