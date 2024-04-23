import Diary from "../src/Diary.js"

let testDiary, testEntry, expected;

describe("Diary Entry Tests", () => {
    beforeEach(() => {
        testDiary = new Diary();
        testEntry = "Dear diary";
    });

    afterEach(() => {
        testDiary = undefined;
        testEntry = undefined;
        expected = undefined;
    });

  it("should be able to increase the number of entries when addEntry is called", () => {
        // Arrange
        expected = testDiary.getEntries().length + 1;
        // Act
        testDiary.addEntry(testEntry);
        // Assert
        expect(testDiary.getEntries().length).toBe(expected);
  });
    
    it("should add the same entry to the entries as is entered", () => {
        // Arrange
        expected = testEntry;
        // Act
        testDiary.addEntry(testEntry);
        // Assert
        expect(testDiary.getEntries()[0]).toBe(testEntry);
    });
});

