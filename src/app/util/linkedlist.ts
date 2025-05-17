class Item<Type> {
    previous: Item<Type> | null;
    value: any;
    next: Item<Type> | null;
    
    constructor(value: Type) {
        this.previous = null;
        this.value = value;
        this.next = null;
    }
}
