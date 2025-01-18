import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    let number = 0;
    if (contacts.length > 0) {
      number = contacts.length;
    }

    console.log(`Кількість контактів: ${number}`);
    return number;
  } catch (err) {
    console.error('Помилка', err);
    throw err;
  }
};

const showContactCount = async () => {
  console.log(await countContacts());
};

showContactCount();
