import Diary from "../src/Diary.js"

let testDiary, testEntry, expected, testEntry2, testEntry3;

describe("Diary Entry Tests", () => {
    beforeEach(() => {
        testDiary = new Diary();
    });

    afterEach(() => {
        testDiary = undefined;
        testEntry = undefined;
        testEntry2 = undefined;
        testEntry3 = undefined;
        expected = undefined;
    });
    describe("Add Entry Tests", () => {
        it("should be able to increase the number of entries when addEntry is called", () => {
            // Arrange
            testEntry = jasmine.createSpyObj("testEntry", {
                getContents: "Dear Diary",
            });
            expected = testDiary.getEntries().length + 1;
            // Act
            testDiary.addEntry(testEntry);
            // Assert
            expect(testDiary.getEntries().length).toBe(expected);
        });
        it("should add the same entry to the entries as is entered", () => {
            // Arrange
            testEntry = jasmine.createSpyObj("testEntry", {
                getContents: "Dear Diary",
            });
            expected = testEntry;
            // Act
            testDiary.addEntry(testEntry);
            // Assert
            expect(testDiary.getEntries()[0]).toBe(testEntry);
        })

        it("should not allow a null entry to be added", () => {
            // Arrange
            testEntry = null;
            expected = 0;
            // Act
            testDiary.addEntry(testEntry);
            // Assert
            expect(testDiary.getEntries().length).toBe(expected);
        });
    });



    describe("Get Entry Tests", () => {
        it("should be able to fetch all of the diary entries", () => {
            // Arrange
            testEntry = jasmine.createSpyObj("testEntry", {
                getContents: "Dear Diary",
            });
            testEntry2 = jasmine.createSpyObj("testEntry2", {
                getContents: "Dear Diary 2",
            });
            testEntry3 = jasmine.createSpyObj("testEntry3", {
                getContents: "Dear Diary 3",
            });
            testDiary.addEntry(testEntry);
            testDiary.addEntry(testEntry2);
            testDiary.addEntry(testEntry3);
            expected = 3;
            // Act
            // Assert
            expect(testDiary.getEntries().length).toBe(expected);
        });

    });

    describe("Print Entry Tests", () => {
        it("should call the entry's getContents method when printEntries is called", () => {
            // Arrange
            // Act
            DiaryPrinter.printEntry(testEntry);
            // Assert
            expect(testEntry.printEntry).toHaveBeenCalled();
        });
    
        afterEach(() => {
            DiaryPrinter.resetNumberOfEntriesPrinted();
        });
    });

    describe("Print All Entries Tests", () => {

    });
});
    

