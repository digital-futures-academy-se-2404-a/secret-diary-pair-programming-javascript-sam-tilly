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

    printEntries = () => {
        // for each entry in entries we want to console log entry.getContents
        this.#entries.forEach(entry => {
            console.log(entry.getContents());
            
        });
    };
    resetNumberOfEntriesPrinted = () => {}

};
