const choice = (items) => items[Math.floor(Math.random() * items.length)];

const remove = (items, item) => items.filter((i) => i !== item);

export { choice, remove };
