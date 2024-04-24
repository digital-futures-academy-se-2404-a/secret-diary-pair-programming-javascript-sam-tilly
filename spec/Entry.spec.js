import Entry from "../src/Entry.js";

describe("Diary Entry Tests", () => {
    it("getContents should return entry contents", () => {
        // Arrange
        let testEntry = "Dear Diary";
        let entry = new Entry(testEntry);
        // Act
        
        // Assert
        expect(entry.getContents()).toBe(testEntry);
    });
});