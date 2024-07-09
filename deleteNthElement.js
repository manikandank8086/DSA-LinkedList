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
            let current=this.head
            while(current.next){
                current=current.next
            }
            current.next=newNode
            this.size++
        }
       
    }
    prepend(data){
        const newNode=new Node(data)
        newNode.next=this.head
        this.head=newNode
        this.size++

    }

  deleteNthElement(Index){
    if(Index===0){
        this.head=this.head.next
        this.size--
        return
    }

    let current= this.head
    let i =0
    while(current && i < Index-1){
        current=current.next
        i++
    }
    if(!current && !current.next){
        console.log('index out of rage')
        return
    }
    current.next=current.next.next
    this.size--
  }

  reverse(){
    let prev=null
    let current=this.head
    let nextPoint
    while(current){
        nextPoint=current.next
        current.next=prev
        prev=current
        current=nextPoint

    }
    console.log('preve is ' + prev)
    this.head=prev
    return this.head
  }
   
    print(){
        let current=this.head
        let result=[]
        while(current){
            result.push(current.data)
            current=current.next
        }
        console.log('result is ' + result.join(' -> '))
    }
}


const list = new LinkedList()
list.append(0)
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.prepend(9)
list.prepend(56)
list.print()
// list.deleteNthElement(7)
// console.log('         ')
// list.print()
list.reverse()
list.print()