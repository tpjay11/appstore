// tslint:disable:no-console no-bitwise
export enum State {
    notInstall = 0,
    installed = 1,
    needUpdate = 0b10 | 1,
    downloading = 0b100,
    installing = 0b1000,
    uninstalling = 0b10000 | 1,
}

export interface AppBaseInfo {
    id: string;
    author: string;
    name: string;
    thumbnail: string;
    cate: string;
}

export interface AppInfo extends AppBaseInfo {
    state: State;
}

export interface AppResult {
    length: number;
    value: AppInfo[];
}

class AppService {
    installedApps: {
        [id: string]: AppInfo;
    };

    byID: string[];
    byCate: string[][];
    byState: State[][];

    fetchApps(cat: string): Promise<AppResult> {
        return new Promise<AppResult>((resolve, reject) => {
            resolve({
                length: 2,
                value: [
                    {
                        id: 'firefox',
                        name: '火狐浏览器',
                        author: 'Mozilla',
                        thumbnail: '',
                        state: State.installed,
                        cate: cat,
                    },
                    {
                        id: 'chrome',
                        name: '谷歌浏览器',
                        author: 'Google Chrome',
                        thumbnail: '',
                        state: State.installed,
                        cate: cat,
                    }
                ]
            });
        });
    }

    isInstalled(id: string): boolean {
        const app = this.installedApps[id];
        return app ? (app.state & State.installed) === State.installed : false;
    }

    filterAppByState(state: State): AppInfo[] {
        return [];
    }

    launchApp(id: string) {
        console.log(`launch app ${id}`);
    }

    updateApp(id: string) {
        console.log(`update app ${id}`);
    }

    installApp(id: string) {
        console.log(`install app ${id}`);
    }

    uninstallApp(id: string) {
        console.log(`uninstall app ${id}`);
    }
}

export default AppService;