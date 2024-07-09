class Node {
    constructor(data){
        this.data = data
        this.next= null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0
    }
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }
    append(data){
        const newNode = new Node(data)

        if(this.isEmpty()){
            this.head= newNode
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
        this.size++;
    }

    print(){
        let current = this.head
        const result = []

        while(current){
            result.push(current.data)
            current=current.next
        }
        console.log(result.join('->'))
    }
    reverse(){
        let curr = this.head;
        let prev = null;
        while (curr) {
          let next = curr.next; 
          curr.next = prev; 
          prev = curr; 
          curr= next   
        }
        this.head = prev;
    }
    palindrome(){
        let fast = this.head;
        let slow = this.head;
        let stack = []
        while(fast && fast.next){
            stack.push(slow.data)
            slow = slow.next;
            fast = fast.next.next;
        }
        if(fast){
            slow = slow.next
        }
        while(slow){
            if(stack.pop() != slow.data){
                return false
            }
            slow = slow.next
        }
        return true;
    }
}

const list =  new LinkedList()
list.prepend(1)
list.prepend(2)
list.prepend(1)
list.print()
// list.reverse();
console.log(list.palindrome())
// list.print()
// 


// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(data) {
//         const newNode = new Node(data);
        
//         // If the list is empty, set the new node as the head
//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }

//         let current = this.head;

//         // Traverse the list to find the last node
//         while (current.next) {
//             current = current.next;
//         }

//         // Append the new node to the end of the list
//         current.next = newNode;
//     }

//     print() {
//         let current = this.head;
//         const result = [];

//         while (current) {
//             result.push(current.data);
//             current = current.next;
//         }

//         console.log(result.join(' -> '));
//     }
// }

// // Example usage:
// const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.print(); // Output: 1 -> 2 -> 3
