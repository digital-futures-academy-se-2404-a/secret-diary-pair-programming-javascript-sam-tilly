import Diary from "../src/Diary.js"

describe("Diary Entry Tests", () => {
  it("should be able to increase the number of entries when addEntry is called", () => {
        // Arrange
        const testDiary = new Diary();
        const testEntry = "Dear diary";
        const expected = testDiary.getEntries().length + 1;
        // Act
        testDiary.addEntry(testEntry);
        // Assert
        expect(testDiary.getEntries().length).toBe(expected);
    });
});