import { v4 as UUID } from 'uuid';

export const loadItem = async (itemName) => {
  let item = localStorage.getItem(itemName);

  if (item === null) {
    const myNewId = UUID();
    localStorage.setItem(itemName, myNewId);
    item = localStorage.getItem(itemName);
  }
  return item;
};