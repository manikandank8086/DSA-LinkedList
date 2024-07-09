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
        const newNode= new Node(data)
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
        let current=this.head
        let result=[]
        while(current){
            result.push(current.data)
            current=current.next
        }
        console.log('Node is ' + result.join('->'))
    }

    findNthNodeFirst(value){
         let current=this.head
         let i=0
         while(current && i<value-1){
            current=current.next
            i++
         }
         if(current){
          console.log('N th element is'+ current.data)
         }else{
            console.log('not have nth value')
         }
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
list.findNthNodeFirst(9)