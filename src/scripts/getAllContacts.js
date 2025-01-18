import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const existingContacts = await readContacts();
    console.log('Усі контакти у файлі: ');
    return existingContacts;
  } catch (err) {
    console.error('Помилка при зчитуванні контактів ', err);
  }
};

console.log(await getAllContacts());
