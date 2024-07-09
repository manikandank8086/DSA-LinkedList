class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.ub    
            }
            current.next = newNode;
            this.size++;
        }
    }

    powerOfNum() {
        let current = this.head;
        let index = 1;
        while (current) {
            
            if ((index & (index - 1)) === 0) {
                console.log('->' + current.data);
            }
            current = current.next;
            index++;
        }
    }
    
    

    print() {
        let result = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log('result is ' + result.join('->'));
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.append(9);
list.append(10);

list.print();
list.powerOfNum();
