class Node{
 constructor(data){
    this.data = data
    this.next=null
 }   
}

class LinkedList{
    constructor() {
        this.head= null
        this.size =0
    }
    append(data){
        const newNode= new Node(data)
        if(!this.head){
            this.head= newNode
        }else{
            let current = this.head

            while(current.next){
                current= current.next
            }
            current.next=newNode
        }
        this.size++
    }
    prepend(data){
        const newNode=new Node(data)
        newNode.next=this.head
        this.head=newNode
        this.size++
    }

    print(){
        let current=this.head
        let result =[]
        while(current){
            result.push(current.data)
            current=current.next
        }
        console.log('result is '+ result.join('->'))
    }
}


const list = new LinkedList()
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.prepend(8)
list.prepend(9)
list.print()