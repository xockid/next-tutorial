export type Todo = { id: string; text: string; createdAt: number };

let todos: Todo[] = [];

export const store = {
    findAll: () => todos.slice().sort((a, b) => b.createdAt - a.createdAt),
    add: (text: string) => {
        const t = { id: crypto.randomUUID(), text, createdAt: Date.now() };
        todos.push(t);
        return t;
    },
    remove: (id: string) => {
        const before = todos.length;
        todos = todos.filter((t) => t.id !== id);
        return todos.length !== before;
    },
};
