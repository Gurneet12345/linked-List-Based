// Define a simple class for a linked list node
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value; // The value of the node
        this.next = next;   // The next node in the list
    }
}

// Function to merge two sorted linked lists
function mergeTwoLists(list1, list2) {
    let dummyNode = new ListNode(); // A dummy node to start the merged list
    let currentNode = dummyNode;    // The current node in the merged list
    
    // Loop until one of the lists is empty
    while (list1 !== null && list2 !== null) {
        if (list1.value < list2.value) {
            currentNode.next = list1; // Add list1's node to the merged list
            list1 = list1.next;       // Move to the next node in list1
        } else {
            currentNode.next = list2; // Add list2's node to the merged list
            list2 = list2.next;       // Move to the next node in list2
        }
        currentNode = currentNode.next; // Move to the next node in the merged list
    }
    
    // Add remaining nodes from list1 or list2
    currentNode.next = (list1 !== null) ? list1 : list2;
    
    return dummyNode.next; // Return the merged list, skip the dummy node
}

// Function to print the linked list
function printList(node) {
    let result = [];
    while (node !== null) {
        result.push(node.value); // Collect the value of each node
        node = node.next;        // Move to the next node
    }
    console.log(result.join(' -> ')); // Print the values as a string
}

// Create two example linked lists
let list1 = new ListNode(1, new ListNode(3, new ListNode(5))); // List 1: 1 -> 3 -> 5
let list2 = new ListNode(2, new ListNode(4, new ListNode(6))); // List 2: 2 -> 4 -> 6

// Merge the two lists
let mergedList = mergeTwoLists(list1, list2);

// Print the merged linked list
printList(mergedList); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6
