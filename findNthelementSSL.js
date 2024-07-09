class Node{
    constructor(data){
        this.data = data
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    append(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
        }else{
            let current = this.head
            while(current.next){
                current=current.next
            }
            current.next=newNode
            this.size++
        }
    }

    findNthElement(value){
        let slow = this.head
        let fast =  this.head

        let i =0
        while(i<value-1){
            fast=fast.next
            i+=1
        }
        while(fast.next){
            slow=slow.next
            fast=fast.next
        }
        console.log('nth element is ' + slow.data)
    }

    print(){
        let current = this.head
        let result=[]
        while(current){
            result.push(current.data)
            current=current.next
        }
        console.log('result is'+ result.join('->'))
    }
}

const list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.print()
list.findNthElement(3)