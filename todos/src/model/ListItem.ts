export interface Item {
    id: number;
    title: string;
    done: boolean;
}

export default class ListItem implements Item {
    private _id: number;
    private _title: string;
    private _done: boolean;

    constructor(id: number = Date.now(), title: string, done: boolean = false) {
        this._id = id;
        this._title = title;
        this._done = done;
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get done(): boolean {
        return this._done;
    }

    set title(val: string) {
        this._title = val;
    }

    set done(val: boolean) {
        this._done = val;
    }
}
