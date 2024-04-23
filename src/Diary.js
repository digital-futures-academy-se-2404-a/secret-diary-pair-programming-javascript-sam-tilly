export default class Diary {
    #entries = [];

    getEntries = () => {
        return this.#entries;
    };

    addEntry = (entry) => {
        if (entry != null) {
            this.#entries.push(entry);
        };
    }
};