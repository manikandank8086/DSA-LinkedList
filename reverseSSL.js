class Node{
    constructor(data) {
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
            let current=this.head
            while(current.next){
                current=current.next
            }
            current.next=newNode
            this.size++
        }
    }



       reverse(){
        let next =null
        let current=this.head
        let prev=null
        while(current!==null){
            next=current.next
            current.next=prev
            prev=current
            current=next
        }
        this.head=prev
       }
    print(){
        let result=[]
        let current=this.head
        while(current){
            result.push(current.data)
            current=current.next
        }
        console.log(result)
    }
}

const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)

list.reverse()
list.print()