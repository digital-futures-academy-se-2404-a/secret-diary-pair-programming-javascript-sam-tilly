export default class Entry {
    #contents;

    constructor(contents) {
        this.#contents = contents;
    }

    getContents = () => {
        return this.#contents;
    };
};