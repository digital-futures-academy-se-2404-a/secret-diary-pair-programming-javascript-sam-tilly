import Diary from "../src/Diary.js"

let testDiary, testEntry, expected;

describe("Diary Entry Tests", () => {
    beforeEach(() => {
        testDiary = new Diary();
    });

    afterEach(() => {
        testDiary = undefined;
        testEntry = undefined;
        expected = undefined;
    });
    describe("Add Entry Tests", () => {
        it("should be able to increase the number of entries when addEntry is called", () => {
            // Arrange
            testEntry = "Dear diary";
            expected = testDiary.getEntries().length + 1;
            // Act
            testDiary.addEntry(testEntry);
            // Assert
            expect(testDiary.getEntries().length).toBe(expected);
        });
        it("should add the same entry to the entries as is entered", () => {
            // Arrange
            testEntry = "Dear diary";
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
    describe("View Entry Tests", () => {
        it("should be able to fetch all of the diary entries", () => {
            // Arrange
            testDiary.addEntry("Dear diary 1");
            testDiary.addEntry("Dear diary 2");
            testDiary.addEntry("Dear diary 3");
            expected = 3;
            // Act
            // Assert
            expect(testDiary.getEntries().length).toBe(expected);
        });
    });
});
    

