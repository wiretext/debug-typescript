import SinglyLinkedList from "./singly-linked-list";


let singlyLinkedList = new SinglyLinkedList<number>();

// Insert
singlyLinkedList.push(4);
singlyLinkedList.push(3);
singlyLinkedList.push(6);
singlyLinkedList.push(9);

// print the list
console.log(singlyLinkedList.toArray());