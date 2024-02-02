import { sum } from './sum.js'
import { expect } from 'chai'

describe('sum', () => {
    it('should return 0 it an empty array is given', () => {
        // Arrange
        const inputArray = [];

        // Act
        const result = sum(inputArray)

        // Assert
        expect(result).to.equals(0)
    })

    it('should return the single element as a sum if a single element array is given', () => {
        // Arrange 
        const inputArray = [33]

        // Act
        const result = sum(inputArray)

        // Assert
        expect(result).to.equal(33)
    })

    it('should return the sum of mixed positive and negative numbers', () => {
        // Arrange 
        const inputArray = [0, 8, -1]

        // Act
        const result = sum(inputArray)

        // Assert
        expect(result).to.equal(7)

    })

    it('should return the sum of positive numbers', () => {
         // Arrange 
         const inputArray = [1, 2, 3, 4, 5]

         // Act
         const result = sum(inputArray);
 
         // Assert
         expect(result).to.equal(15)
      });

      it('should return the sum of negative numbers', () => {
        // Arrange 
        const inputArray = [-1, -2, -3, -4, -5]

        // Act
        const result = sum(inputArray);

        // Assert
        expect(result).to.equal(-15)
     });

     it('should handle strings representing numbers', () => {
        // Arrange 
        const inputArray = ['1', '2', '3']

        // Act
        const result = sum(inputArray);

        // Assert
        expect(result).to.equal(6)
     });
})
