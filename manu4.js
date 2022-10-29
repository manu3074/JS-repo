<script>


class Node
{
	constructor()
	{
		this.data=0;
		this.next=null;
	}
}	

// Function that count number of
// rotation in singly linked list.
function countRotation(head)
{
	// declare count variable and assign it 1.
	let count = 0;

	// declare a min variable and assign to
	// data of head node.
	let min = head.data;

	// check that while head not equal to null.
	while (head != null) {

		// if min value is greater then head.data
		// then it breaks the while loop and
		// return the value of count.
		if (min > head.data)
			break;

		count++;

		// head assign the next value of head.
		head = head.next;
	}
	return count;
}

// Function to push element in linked list.
function push(head,data)
{
	// Allocate dynamic memory for newNode.
	let newNode = new Node();

	// Assign the data into newNode.
	newNode.data = data;

	// newNode.next assign the address of
	// head node.
	newNode.next = (head);

	// newNode become the headNode.
	(head) = newNode;
	return head;
}

// Display linked list.
function printList(node)
{
	while (node != null) {
		document.write(node.data+" ");
		node = node.next;
	}
}

// Driver functions
// Create a node and initialize with null
let head = null;

// push() insert node in linked list.
// 15.18.5.8.11.12
head = push(head, 12);
head = push(head, 11);
head = push(head, 8);
head = push(head, 5);
head = push(head, 18);
head = push(head, 15);

printList(head);
document.write("<br>");
document.write("Linked list rotated elements: ");

// Function call countRotation()
document.write(countRotation(head) +"<br>");



</script>
