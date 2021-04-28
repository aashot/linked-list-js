class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {
        const node = new Node(data)
        
        if (this.tail) {
            this.tail.next = node
        }

        if (!this.head) {
            this.head = node
        }

        this.tail = node
    }

    prepend(data) {
        const node = new Node(data, this.head)
        this.head = node

        if (!this.tail) {
            this.tail = node
        }
    }

    toArray() {
        const output = []
        let current = this.head

        while (current) {
            output.push(current)
            current = current.next
        }

        return output
    }

    find(data) {
        if (!this.head) {
            throw new Error('The list is empty')
        }

        let current = this.head
        while (current) {
            if (current.data === data) {
             return current   
            }
            current = current.next
        }
    }

    insterAfter(after, data) {
        const found =  this.find(after)
        
        if (!found) {
            throw new Error("Can't find passed item")
        }

        found.next = new Node(data, found.next)
    }

    remove(data) {
        if (!this.head) {
          return
        }
    
        while (this.head && this.head.data === data) {
          this.head = this.head.next
        }
    
        let current = this.head
        while (current.next) {
          if (current.next.data === data) {
            current.next = current.next.next
          } else {
            current = current.next
          }
        }
    
        if (this.tail.data === data) {
          this.tail = current
        }
    }
}

const list = new LinkedList()

list.prepend('0')
list.append('1')
list.append('2')
list.append('3')
list.append('4')
list.append('5')
list.insterAfter('4', '6')

list.remove('6')

console.log(list.toArray())
