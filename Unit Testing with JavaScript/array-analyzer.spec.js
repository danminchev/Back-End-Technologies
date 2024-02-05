import { analyzeArray } from "./array-analyzer.js";
import { expect } from "chai";

describe('analyzeArray', () => {
    it('should return an object with min, max, and length properties for an array of numbers', () => {
      // Arrange 
      const inputArray = [4, 2, 7, 1, 9];
  
      // Act
      const result = analyzeArray(inputArray);
  
      // Assert
      expect(result).to.be.an('object');
      expect(result.min).to.equal(1);
      expect(result.max).to.equal(9);
      expect(result.length).to.equal(5);
    });
  
    it('should return undefined for an empty array', () => {
      // Arrange 
      const inputArray = [];
  
      // Act
      const result = analyzeArray(inputArray);
  
      // Assert
      expect(result).to.be.undefined;
    });
  
    it('should return undefined for a non-array input', () => {
      // Arrange 
      const inputArray = 'not an array';
  
      // Act
      const result = analyzeArray(inputArray);
  
      // Assert
      expect(result).to.be.undefined;
    });
  
    it('should return an object with min, max, and length properties for a single-element array', () => {
      // Arrange 
      const inputArray = [5];
  
      // Act
      const result = analyzeArray(inputArray);
  
      // Assert
      expect(result).to.be.an('object');
      expect(result.min).to.equal(5);
      expect(result.max).to.equal(5);
      expect(result.length).to.equal(1);
    });
  
    it('should return an object with min, max, and length properties for an array with equal elements', () => {
      // Arrange 
      const inputArray = [3, 3, 3, 3, 3];
  
      // Act
      const result = analyzeArray(inputArray);
  
      // Assert
      expect(result).to.be.an('object');
      expect(result.min).to.equal(3);
      expect(result.max).to.equal(3);
      expect(result.length).to.equal(5);
    });
  });
  