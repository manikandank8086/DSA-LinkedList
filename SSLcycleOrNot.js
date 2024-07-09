class Node{
    constructor(data){
        this.data=data
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
    print(){
        let current=this.head
        let result=[]
        while(current){
            result.push(current.data)
            current=current.next
        }
        console.log('result is'+ result.join('->'))
    }

    checkCycle(){
        let slow=this.head
        let fast = this.head
        while(fast && fast.next){
            slow=slow.next
            fast=fast.next.next
            if(slow==fast){
                return true
            }else{
                return false
            }
        }
      
    }

    startIngIndexCycle(){
        console.log('hao')
        let slow=this.head
        let fast = this.head
        if(!this.head){
            console.log('false')
            return false
        }else{
            console.log('wo')
            while(fast && fast.next){
                console.log('ok')
                 slow=slow.next
                 fast=fast.next.next
                 if(slow==fast){
                    console.log('fsf')
                    slow=this.head
                    while(slow!=fast){
                       slow=slow.next
                       fast=fast.next
                    }
                
                 }else{
                    let cmt = 'no value'
                    return cmt
                 }
            }
        }

    }
}

const list=new LinkedList()
list .append(1)
list .append(12)
list .append(13)
list .append(15)
list .append(16)
list .append(17)
list.print()
console.log("Cycle detected:", list.checkCycle());
console.log('starting Indext of cycle'+ list.startIngIndexCycle())