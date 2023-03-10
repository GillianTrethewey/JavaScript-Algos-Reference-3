const flatten = (head) => {
  let temp = head;
  let stack = [];

  while (head) {
    if (head.child) {
      if (head.next) {
        stack.push(head.next);
      }
      head.next = head.child;
      head.next.prev = head;
      head.child = null;
    } else if (!head.next && stack.length > 0) {
      //if head.next is null but there are still nodes in stack
      head.next = stack.pop(); //head.next will point to the popped value from stack
      head.next.prev = head;
    }
    head = head.next; //so the iteration continues to the next node and then next node
  }
  return temp;
};

/*

 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL

Step1:
head is 3
stack = [---4---5---6--NULL]
             
 1---2---3
         |
         7---8---9---10--NULL
             |
             11--12--NULL
             

Step2:
stack = [---4---5---6--NULL]
             
 1---2---3--7---8---9---10--NULL
                |
                11--12--NULL
                          

Step3:
stack = [---4---5---6--NULL, ---9---10--NULL]
             
 1---2---3--7---8---11--12--NULL      
 
Step4:
stack.pop() and append it to the next of last node in linked list, it will look like this
stack = [---4---5---6--NULL]
             
 1---2---3--7---8---11--12---9---10--NULL  
 

Step5:
stack.pop() and append it to the next of last node in linked list, it will look like this
stack = []
             
 1---2---3--7---8---11--12---9---10----4---5---6--NULL
 
 
 Step6:
 return the result = 1---2---3--7---8---11--12---9---10----4---5---6--NULL
 
 */
