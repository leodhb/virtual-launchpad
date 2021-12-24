import { v4 as UUID } from 'uuid';

export const loadItem = async (itemName) => {
  let item = localStorage.getItem(itemName);

  if (item === null) {
    const myNewId = UUID();
    await localStorage.setItem(itemName, myNewId);
    item = await localStorage.getItem(itemName);
  }
  return item;
};