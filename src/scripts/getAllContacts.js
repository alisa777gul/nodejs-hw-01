import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const existingContacts = await readContacts();
    console.log('Усі контакти у файлі: ', existingContacts);
    return existingContacts;
  } catch (err) {
    console.error('Помилка при зчитуванні контактів ', err);
  }
};

const showContacts = async () => {
  console.log(await getAllContacts());
};

showContacts();
