import { mathEnforcer } from "./math-enforcer.js";
import { expect } from "chai";

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined when pass string as input', () => {
            // Arrange
            const stringInput = 'some string';

            // Act
            const undefinedResult = mathEnforcer.addFive(stringInput);

            // Assert
            expect(undefinedResult).to.be.undefined;
        });

        it('should return undefined when pass undefined as input', () => {
            // Arrange
            const undefinedInput = undefined;

            // Act
            const undefinedResult = mathEnforcer.addFive(undefinedInput);

            // Assert
            expect(undefinedResult).to.be.undefined;
        });

        it('should return undefined when pass number as string as input', () => {
            // Arrange
            const numberAsStringInput = '5';

            // Act
            const undefinedResult = mathEnforcer.addFive(numberAsStringInput);

            // Assert
            expect(undefinedResult).to.be.undefined;
        });

        it('should return correct result when pass floating number as input', () => {
            // Arrange
            const floatingInput = 1.01;

            // Act
            const correctResult = mathEnforcer.addFive(floatingInput);

            // Assert
            expect(correctResult).to.be.closeTo(6.01, 0.01);
        });

        it('should return correct result when pass floating number as input and assert with equal', () => {
            // Arrange
            const floatingInput = 1.01;

            // Act
            const correctResult = mathEnforcer.addFive(floatingInput);

            // Assert
            expect(correctResult).to.be.equal(6.01);
        });

        it('should return correct result when pass floating number with a lot of digits as input and assert with closeTo', () => {
            // Arrange
            const floatingInput = 1.00000001;

            // Act
            const correctResult = mathEnforcer.addFive(floatingInput);

            // Assert
            expect(correctResult).to.be.closeTo(6.01, 0.01);
        });

        it('should return correct result when pass number as input', () => {
            // Arrange
            const numberInput = 5;

            // Act
            const correctResult = mathEnforcer.addFive(numberInput);

            // Assert
            expect(correctResult).to.be.equal(10);
        });

        it('should return correct result when pass negative number as input', () => {
            // Arrange
            const negativeNumberInput = -15;

            // Act
            const correctResult = mathEnforcer.addFive(negativeNumberInput);

            // Assert
            expect(correctResult).to.be.equal(-10);
        });

        it('should return correct result when pass negative number as input', () => {
            // Arrange
            const negativeNumberInput = -5;

            // Act
            const correctResult = mathEnforcer.addFive(negativeNumberInput);

            // Assert
            expect(correctResult).to.be.equal(0);
        });
    });

    describe('subtractTen', () => {
        it('should return undefined when pass string as input', () => {
            // Arrange
            const stringInput = 'some string';

            // Act
            const undefinedResult = mathEnforcer.subtractTen(stringInput);

            // Assert
            expect(undefinedResult).to.be.undefined;
        });

        it('should return undefined when pass undefined as input', () => {
            // Arrange
            const undefinedInput = undefined;

            // Act
            const undefinedResult = mathEnforcer.subtractTen(undefinedInput);

            // Assert
            expect(undefinedResult).to.be.undefined;
        });

        it('should return undefined when pass number as string as input', () => {
            // Arrange
            const numberAsStringInput = '5';

            // Act
            const undefinedResult = mathEnforcer.subtractTen(numberAsStringInput);

            // Assert
            expect(undefinedResult).to.be.undefined;
        });

        it('should return correct result when pass floating number as input', () => {
            // Arrange
            const floatingInput = 1.01;

            // Act
            const correctResult = mathEnforcer.subtractTen(floatingInput);

            // Assert
            expect(correctResult).to.be.closeTo(-8.99, 0.01);
        });

        it('should return correct result when pass floating number as input and assert with equal', () => {
            // Arrange
            const floatingInput = 1.01;

            // Act
            const correctResult = mathEnforcer.subtractTen(floatingInput);

            // Assert
            expect(correctResult).to.be.equal(-8.99);
        });

        it('should return correct result when pass floating number with a lot of digits as input and assert with closeTo', () => {
            // Arrange
            const floatingInput = 1.00000001;

            // Act
            const correctResult = mathEnforcer.subtractTen(floatingInput);

            // Assert
            expect(correctResult).to.be.closeTo(-8.99, 0.01);
        });

        it('should return correct result when pass number as input', () => {
            // Arrange
            const numberInput = 15;

            // Act
            const correctResult = mathEnforcer.subtractTen(numberInput);

            // Assert
            expect(correctResult).to.be.equal(5);
        });

        it('should return correct result when pass negative number as input', () => {
            // Arrange
            const negativeNumberInput = -5;

            // Act
            const correctResult = mathEnforcer.subtractTen(negativeNumberInput);

            // Assert
            expect(correctResult).to.be.equal(-15);
        });

        it('should return correct result when pass negative number as input', () => {
            // Arrange
            const negativeNumberInput = 10;

            // Act
            const correctResult = mathEnforcer.subtractTen(negativeNumberInput);

            // Assert
            expect(correctResult).to.be.equal(0);
        });
    });

    describe('sum', () => {
       it('should undefined when Param1: incorrect and Param2: correct', () => {
         // Arrange
         const incorrectFirstParam = 'some string';
         const correctSecondParam = 5;

         // Act
         const undefinedResult = mathEnforcer.sum(incorrectFirstParam, correctSecondParam);

         // Assert
         expect(undefinedResult).to.be.undefined;
       })

       it('should undefined when Param1: correct and Param2: incorrect', () => {
        // Arrange
        const correctFirstParam = 5;
        const incorrectSecondParam = 'some string';

        // Act
        const undefinedResult = mathEnforcer.sum(correctFirstParam, incorrectSecondParam);

        // Assert
        expect(undefinedResult).to.be.undefined;
      })

      it('should undefined when Param1: number as string and Param2: correct', () => {
        // Arrange
        const numberAsStringFirstParam = '5';
        const correctSecondParam = 5;

        // Act
        const undefinedResult = mathEnforcer.sum(numberAsStringFirstParam, correctSecondParam);

        // Assert
        expect(undefinedResult).to.be.undefined;
      })

      it('should undefined when Param1: correct and Param2: correct', () => {
        // Arrange
        const correctFirstParam = 5;
        const correctSecondParam = 5;

        // Act
        const correctResult = mathEnforcer.sum(correctFirstParam, correctSecondParam);

        // Assert
        expect(correctResult).to.be.equal(10);
      })

      it('should undefined when Param1: negative number and Param2: negative number', () => {
        // Arrange
        const correctFirstParam = -5;
        const correctSecondParam = -5;

        // Act
        const correctResult = mathEnforcer.sum(correctFirstParam, correctSecondParam);

        // Assert
        expect(correctResult).to.be.equal(-10);
      })

      it('should undefined when Param1: floating number and Param2: correct', () => {
        // Arrange
        const floatingNumberFirstParam = 5.01;
        const correctSecondParam = 5;

        // Act
        const correctResult = mathEnforcer.sum(floatingNumberFirstParam, correctSecondParam);

        // Assert
        expect(correctResult).to.be.equal(10.01);
      })

      
      it('should undefined when Param1: floating number and Param2: correct whit closeTo', () => {
        // Arrange
        const floatingNumberFirstParam = 5.01;
        const correctSecondParam = 5;

        // Act
        const correctResult = mathEnforcer.sum(floatingNumberFirstParam, correctSecondParam);

        // Assert
        expect(correctResult).to.be.closeTo(10.01, 0.01);
      })

      it('should undefined when Param1: zero and Param2: floating number whit closeTo', () => {
        // Arrange
        const zeroFirstParam = 0;
        const floatingNumberSecondParam = 0.1;

        // Act
        const correctResult = mathEnforcer.sum(zeroFirstParam, floatingNumberSecondParam);

        // Assert
        expect(correctResult).to.be.closeTo(0.1, 0.01);
      })
    });
});
