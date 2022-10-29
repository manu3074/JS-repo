<script>
	// Javascript program to check if an
	// array is sorted and rotated
	// clockwise
	
	// Function to check if an array is
	// sorted and rotated clockwise
	function checkIfSortRotated(arr, n)
	{
		let minEle = Number.MAX_VALUE;
		// int maxEle = int.MinValue;

		let minIndex = -1;

		// Find the minimum element
		// and it's index
		for (let i = 0; i < n; i++) {
			if (arr[i] < minEle) {
				minEle = arr[i];
				minIndex = i;
			}
		}

		let flag1 = true;

		// Check if all elements before
		// minIndex are in increasing order
		for (let i = 1; i < minIndex; i++) {
			if (arr[i] < arr[i - 1]) {
				flag1 = false;
				break;
			}
		}

		let flag2 = true;

		// Check if all elements after
		// minIndex are in increasing order
		for (let i = minIndex + 1; i < n; i++) {
			if (arr[i] < arr[i - 1]) {
				flag2 = false;
				break;
			}
		}

		
		if (flag1 && flag2 && (arr[n - 1] < arr[0]))
			document.write("YES");
		else
			document.write("NO");
	}
	
	let arr = [ 3, 4, 5, 1, 2 ];

	let n = arr.length;

	// Function Call
	checkIfSortRotated(arr, n);


</script>
