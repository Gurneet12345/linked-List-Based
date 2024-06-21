class ListNode {
    // Constructor for creating a new node in the linked list
    constructor(val = 0, next = null) {
        this.val = val; // Node value
        this.next = next; // Pointer to the next node
    }
}

function removeNthFromEnd(head, n) {
    // Create a dummy node that points to the head of the list
    let dummy = new ListNode(0, head);

    // Initialize two pointers, both starting from the dummy node
    let firstPointer = dummy;
    let secondPointer = dummy;

    // Move the first pointer n+1 steps ahead to create a gap of n nodes
    for (let i = 0; i <= n; i++) {
        firstPointer = firstPointer.next;
    }

    // Move both pointers until the first pointer reaches the end of the list
    while (firstPointer !== null) {
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next;
    }

    // The second pointer is now just before the node to be removed
    // Skip the target node by adjusting the next pointer of the second pointer
    secondPointer.next = secondPointer.next.next;

    // Return the new head of the list, which is the next node of the dummy node
    return dummy.next;
}

// Helper function to print the linked list
function printList(node) {
    let output = []; // Initialize an array to store node values
    while (node !== null) {
        output.push(node.val); // Add the current node's value to the array
        node = node.next; // Move to the next node
    }
    // Print the values in the format "val1 -> val2 -> val3"
    console.log(output.join(' -> '));
}

// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

// Define n, the position from the end to be removed
let n = 2;

// Remove the N-th node from the end and store the updated list
let updatedList = removeNthFromEnd(head, n);

// Print the updated linked list
printList(updatedList);
