



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
            let current =this.head
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
        while(current && current.next){
            result.push(`${current.data} ${current.next.data}`)
            result.push(`${current.next.data} ${current.data}`)
            current=current.next.next
        }
        return result.join('/n')
    }
}

const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)
list.append(8)
list.append(9)
console.log(list.print())
