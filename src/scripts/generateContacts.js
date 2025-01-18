import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();

    const currentMaxId =
      existingContacts.length > 0
        ? Math.max(...existingContacts.map((contact) => contact.id))
        : 0;

    const newContacts = [];
    for (let i = 1; i <= number; i++) {
      const newContact = createFakeContact(currentMaxId + i);
      newContacts.push(newContact);
    }

    const updatedContacts = [...existingContacts, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(`${number} контактів було додано`);
  } catch (err) {
    console.error('Помилка:', err);
  }
};

generateContacts(5);
