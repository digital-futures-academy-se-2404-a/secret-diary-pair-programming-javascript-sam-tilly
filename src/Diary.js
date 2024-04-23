export default class Diary {
    #entries = [];

    getEntries = () => {
        return this.#entries;
    };

    addEntry = (entry) => {
        if (entry != null) {
            this.#entries.push(entry);
        };
    };
    viewEntries = () => {
        this.#entries.forEach(element => {
            console.log(element);
        });
    };
};