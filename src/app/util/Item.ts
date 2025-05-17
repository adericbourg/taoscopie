export class Item<Type> {
    previous: Item<Type> | null = null;
    next: Item<Type> | null = null;

    constructor(
        public value: Type
    ) { }
}
