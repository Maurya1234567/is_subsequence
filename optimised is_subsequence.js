

	function isSubSequence(str1, str2, m, n)
	{
		let j = 0;
		
		
		for (let i = 0; i < n && j < m; i++)
			if (str1[j] == str2[i])
				j++;

		
		return (j == m);
	}
	
	let str1 = "gksrek";
	let str2 = "gs";
	let m = str1.length;
	let n = str2.length;
	let res = isSubSequence(str1, str2, m, n);

	if(res)
	document.write("Yes");
	else
	document.write("No");
	
	
