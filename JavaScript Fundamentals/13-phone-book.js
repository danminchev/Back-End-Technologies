function processPhoneBook(input) {
    const phoneBook = {};
  
    input.forEach(entry => {
      const [name, number] = entry.split(' ');
      phoneBook[name] = number;
    });
  
    for (const name in phoneBook) {
      console.log(`${name} -> ${phoneBook[name]}`);
    }
  }
  
  // Example usage:
  const phoneBook1 = [
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
  ];
  
  const phoneBook2 = [
    'George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'
  ];
  
  console.log("Output for phoneBook1:");
  processPhoneBook(phoneBook1);
  
  console.log("\nOutput for phoneBook2:");
  processPhoneBook(phoneBook2);
  