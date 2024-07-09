class Node{
    constructor(data){
        this.data = data
        this.tail=null
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

 
    append(data){
        console.log(this.head)
        console.log('tail' + this.tail)
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            let current=this.head
            while(current.next){
                current=current.next
            }
            current.next=newNode
            this.tail.next= this.newNode
            this.size++
        }
    }

    middleOfValue(){
         let slow= this.head
         let fast=this.head
         while(fast && fast.next){
            slow=slow.next
            fast=fast.next.next
         }
         console.log('middle value is ' + slow.data)
    }
    print(){
        let current=this.head
        let result=[]
        while(current){
            result.push(current.data)
            current=current.next
        }
        console.log(result.join('->'))
    }
}


const list=new LinkedList()
list.append(1)
list.append(2)

// list.print()
// list.middleOfValue()