class Node{
    constructor(data){
        this.data =data
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
            let current =this.head
            while(current.next){
                current=current.next
            }
            current.next=newNode
            this.size++
        }
    }
    print(){
        let result=[]
        let current=this.head
        while(current){
            result.push(current.data)
            current=current.next
        }
        console.log('result is'+ result.join('->'))
    }


    middleValueSSL(){
        let slow=this.head
        let fast = this.head
        while(fast && fast.next){
             slow=slow.next
             fast=fast.next.next
        }

        console.log('middle value is '+ slow.data)
    }
}

const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(14)
list.append(15)
list.append(16)
list.append(17)
list.append(43)
list.print()
list.middleValueSSL()

