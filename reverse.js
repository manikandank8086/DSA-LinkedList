class Node{
    constructor(data){
        this.data =data
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.data=null
        this.size=0
    }

    append(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
        }else{
            let current=this.head
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
        while(current && current.next){
            console.log(current.data , current.next.data)
            
            console.log(current.next.data , current.data)
            current=current.next.next
        }
    }
}

const list=new LinkedList()
list.append(2)
list.append(3)
list.append(5)
list.append(8)
list.print()