function solve(arrayOfEmploees) {
    'use strict';

    const employeeDate = arrayOfEmploees.map((employeeRaw) => {
        return {
            name: employeeRaw,
            presonalNumber: employeeRaw.length
        }
    })

    employeeDate.forEach((emploee) => console.log(`Name: ${emploee.name} -- Personal Number: ${emploee.presonalNumber}`))
}