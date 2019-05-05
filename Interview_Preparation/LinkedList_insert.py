# /*
#  * @Author: Foysal Ahmed Emon 
#  * @Date: 2019-05-05 23:34:59 
#  * @Last Modified by:   emon535 
#  * @Last Modified time: 2019-05-05 23:34:59 
#  */

# Insert a node at a specific position in a linked list

def insertNodeAtPosition(head, data, position):
    node = head;
    if(position ==0 ):
        new_node = SinglyLinkedListNode(data)
        new_node.next = node;
        return new_node;
    count = 1;
    while(count<position and node):
        count +=1;
        node = node.next
    new_node = SinglyLinkedListNode(data);
    node.next=new_node;
    new_node.next = node.next;
   
    return head;
