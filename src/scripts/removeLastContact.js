import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const existingContacts = await readContacts();

    if (existingContacts.length > 0) {
      existingContacts.pop();
      console.log(
        `Останній елемент було видалено. Залишилося ${existingContacts.length} контактів`,
      );
    } else {
      console.log('Контакти не знайдено');
    }

    await writeContacts(existingContacts);
    return existingContacts;
  } catch (err) {
    console.error('Помилка ', err);
    throw err;
  }
};

removeLastContact();
