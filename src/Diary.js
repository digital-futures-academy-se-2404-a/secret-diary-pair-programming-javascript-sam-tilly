export default class Diary {
    #entries = [];

    getEntries = () => {
        return this.#entries;
    };

    addEntry = (entry) => {
        this.#entries.push(entry);
    }
};