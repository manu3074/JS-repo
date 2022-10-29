// Javascript implementation of right rotation
// of an array K number of times

// Function to rightRotate array
function RightRotate(a, n, k)
{

	// If rotation is greater
	// than size of array
	k = k % n;

	for (let i = 0; i < n; i++) {
		if (i < k) {

			
			document.write(a[n + i - k] + " ");
		}
		else {

			// Prints array after
			// 'k' elements
			document.write((a[i - k]) + " ");
		}
	}
	document.write("<br>");
}

// Driver code
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;

RightRotate(Array, N, K);


