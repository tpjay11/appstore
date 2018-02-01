import { observable } from 'mobx';

interface CategoryBaseInfo {
    id: string;
    name: string;
    icon: string;
}
export interface CategoryInfo extends CategoryBaseInfo {
    url: string;
    title: string;
}

interface HTTPService {
    get(): Promise<CategoryBaseInfo>;
}

function toCategoryInfo(prop: CategoryBaseInfo): CategoryInfo {
    return {
        ...prop,
        url: `/cat/${prop.id}`,
        title: `${prop.name}分类`,
    };
}

interface CategoryMap {
    [id: string]: CategoryInfo;
}

interface CategoryInfoStore {
    categories: CategoryMap;
    byID: string[];
}

class CategoryStore {
    categories: CategoryMap;
    byID: string[];
    http: HTTPService | null;
    constructor(http: HTTPService | null) {
        this.http = http;
        this.categories = observable({} as CategoryMap);
        this.byID = observable([] as string[]);
    }

    getAllCategories() {
        return this.byID.map((id) => this.categories[id]);
    }

    fetchCategories(): Promise<CategoryInfoStore> {
        // this.http.get().then(() => {
        //     // this.store
        // });
        return new Promise<CategoryInfoStore>((resolve, reject) => {
            const categories = [
                { id: 'chinese', name: '语文', icon: 'chinese_normal.svg' },
                { id: 'math', name: '数学', icon: 'math_normal.svg' },
                { id: 'english', name: '英语', icon: 'english_normal.svg' },
                { id: 'physical', name: '物理', icon: 'physical_normal.svg' },
                { id: 'chemistry', name: '化学', icon: 'chemistry_normal.svg' },
                { id: 'bio', name: '生物', icon: 'bio_normal.svg' },
                { id: 'political', name: '政治', icon: 'political_normal.svg' },
                { id: 'history', name: '历史', icon: 'history_normal.svg' },
                { id: 'geo', name: '地理', icon: 'geo_normal.svg' },
                { id: 'music', name: '音乐', icon: 'music_normal.svg' },
                { id: 'art', name: '美术', icon: 'art_normal.svg' },
                { id: 'science', name: '科学', icon: 'science_normal.svg' },
                { id: 'nature', name: '自然', icon: 'nature_normal.svg' },
                { id: 'it', name: '信息', icon: 'it_normal.svg' },
                { id: 'moral', name: '品德与社会', icon: 'moral_normal.svg' },
                { id: 'others', name: '其他工具', icon: 'others_normal.svg' },
            ];
            this.init(categories);
            resolve({ categories: this.categories, byID: this.byID });
        });
    }

    init(categories: CategoryBaseInfo[]) {
        categories.reduce(
            (acc, cat) => {
                acc.byID.push(cat.id);
                acc.categories[cat.id] = toCategoryInfo(cat);
                return acc;
            },
            this
        );
    }
}

export default CategoryStore;