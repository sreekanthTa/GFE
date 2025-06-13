class Node {
    constructor(value){
        this.value =value
        this.next= null;
    }
}


class LinkdList{
    constructor(){
       this.length=0
       this.head= null;
    }

    addNode(value){
        const newNode = new Node(value)

        if(!this.head){
            this.head = newNode
            return this
        }

        let currentNode = this.head

        while(currentNode.next){
            currentNode = currentNode.next
        }
        currentNode.next = newNode;
        this.length++;
        return this

    }

    searchNode(value){
        let currentNode = this.head

        while(currentNode.next){
            if(currentNode.value == value) return currentNode
            currentNode = currentNode.next
        }

        return -1
    }

    deNode(value){
        let currentNode = this.head
        let previousNode =null

        if(currentNode.value ==value){
            currentNode = currentNode.next
            this.head =currentNode
            return currentNode
        }

        while(currentNode.next){

            if(currentNode.value == value){

                   previousNode.next  =currentNode.next

                   return this

            }
                previousNode = currentNode
                currentNode = currentNode.next
            
        }

        return -1
    }

    reverse(){

        let currentNode = this.head
        let previousNode = null
        let nextNode = null

        while(currentNode){

            nextNode = currentNode.next

            currentNode.next = previousNode

            previousNode = currentNode

            currentNode =nextNode
        }

        this.head = previousNode

        return this;
    }
}

const linkdList = new LinkdList()
linkdList.addNode(5)
linkdList.addNode(6)
linkdList.addNode(3)
linkdList.addNode(8)
linkdList.addNode(9)
/console.log(JSON.stringify(linkdList))
// console.log("Search",linkdList.searchNode(6))
// linkdList.deNode(5)
linkdList.reverse()
console.log("linkdinlist", JSON.stringify(linkdList))
