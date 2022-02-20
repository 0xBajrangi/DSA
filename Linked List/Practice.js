class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newnode = new node(val);
        if (!this.head) {
            this.head = newnode;
            this.tail = this.head;
        } else {
            this.tail.next = newnode;
            this.tail = newnode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return 0;
        if (this.head === this.tail) {
            this.length--;
            this.head = null;
            this.tail = null;
        }
        let prev = null , curr = this.head;
        while (!curr.next) {
            console.log(prev)
            prev = curr;
            curr.next = curr;
        }
        console.log(prev)
        this.tail = prev;
        // prev.next = null;
        this.length--;
        return curr;
}
}

let list = new LinkedList();
console.log(list)
list.push(10);
list.push(11);
list.push(12);
console.log(list.push(14));
console.log(list.pop());




