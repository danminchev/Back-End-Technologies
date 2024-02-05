import { lookupChar } from "./char-lookup.js";
import { expect } from 'chai'

describe('lookupChar', () => {
    it('should return undefined when first parameter is of incorrect type and second parameter is of correct type', () => {
        // Arrange 
        const incorrectFirstParam = 123;
        const correctSecondParam = 1;

        // Act
        const undefinedResult = lookupChar(incorrectFirstParam, correctSecondParam);

        // Assert
        expect(undefinedResult).to.be.undefined;
    });

    it('should return undefined when first parameter is of correct type and second parameter is of incorrect type', () => {
        // Arrange 
        const correctFirstParam = 'some string here';
        const incorrectSecondParam = '10';

        // Act
        const result = lookupChar(correctFirstParam, incorrectSecondParam);

        // Assert
        expect(result).to.be.undefined;
    });

    describe('lookupChar function tests', () => {
        it('Should return undefined if the first parameter is not a string', () => {
            // Arrange
            const invalidString = 123;
            const validIndex = 2;

            // Act
            const result = lookupChar(invalidString, validIndex);

            // Assert
            expect(result).to.be.undefined;
        });

        it('Should return undefined if the second parameter is not a number', () => {
            // Arrange
            const validString = 'test';
            const invalidIndex = '2';

            // Act
            const result = lookupChar(validString, invalidIndex);

            // Assert
            expect(result).to.be.undefined;
        });

        it('Should return "Incorrect index" if the index is a negative number', () => {
            // Arrange
            const validString = 'test';
            const negativeIndex = -1;

            // Act
            const result = lookupChar(validString, negativeIndex);

            // Assert
            expect(result).to.equal('Incorrect index');
        });

        it('Should return "Incorrect index" if the index is equal to the string length', () => {
            // Arrange
            const validString = 'test';
            const equalIndex = 4;

            // Act
            const result = lookupChar(validString, equalIndex);

            // Assert
            expect(result).to.equal('Incorrect index');
        });

        it('Should return "Incorrect index" if the index is greater than the string length', () => {
            // Arrange
            const validString = 'test';
            const greaterIndex = 5;

            // Act
            const result = lookupChar(validString, greaterIndex);

            // Assert
            expect(result).to.equal('Incorrect index');
        });

        it('Should return the correct character at the specified index', () => {
            // Arrange
            const validString = 'test';
            const validIndex = 2;

            // Act
            const result = lookupChar(validString, validIndex);

            // Assert
            expect(result).to.equal('s');
        });

        it('Should return undefined if both parameters are not provided', () => {
            // Act
            const result = lookupChar();

            // Assert
            expect(result).to.be.undefined;
        });

        it('Should return undefined if only one parameter is provided', () => {
            // Arrange
            const validString = 'test';

            // Act
            const result = lookupChar(validString);

            // Assert
            expect(result).to.be.undefined;
        });

        it('Should return undefined if the index is a floating-point number', () => {
            // Arrange
            const validString = 'test';
            const floatingIndex = 2.5;

            // Act
            const result = lookupChar(validString, floatingIndex);

            // Assert
            expect(result).to.be.undefined;
        });

        it('Should return the correct character when index is 0', () => {
            // Arrange
            const validString = 'test';
            const zeroIndex = 0;

            // Act
            const result = lookupChar(validString, zeroIndex);

            // Assert
            expect(result).to.equal('t');
        });

        it('Should return the correct character when index is the last character in the string', () => {
            // Arrange
            const validString = 'test';
            const lastIndex = 3;

            // Act
            const result = lookupChar(validString, lastIndex);

            // Assert
            expect(result).to.equal('t');
        });
    });
});
