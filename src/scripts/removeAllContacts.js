import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();
    contacts.splice(0, contacts.length);

    await writeContacts(contacts);
    console.log('Дані було видалено', contacts);

    return contacts;
  } catch (err) {
    console.error('Дані не було видалено. Виникла помилка', err);
    throw err;
  }
};

removeAllContacts();
