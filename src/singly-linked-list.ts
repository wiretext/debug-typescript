class ListNode<T> {
    constructor(
        public data: T,
        public next?: ListNode<T>
    ) { };
};

export default class SinglyLinkedList<T> {
    private head?: ListNode<T>;
    private tail?: ListNode<T>;
    private length: number;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    isEmpty(): boolean {
        return !this.head;
    }
    
    push(data: T): void {
        const node: ListNode<T> = new ListNode<T>(data);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    toArray(): T[] {
        const array: T[] = [];
        let currentNode: ListNode<T> | undefined = this.head;

        while (currentNode) {
            array.push(currentNode.data);
            currentNode = currentNode.next;
        }

        return array;
    }
}
