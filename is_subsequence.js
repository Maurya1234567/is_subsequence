
function isSubSequence(str1, str2, m, n)
{
	

	if (m == 0)
		return true;
	if (n == 0)
		return false;
		

	if (str1[m - 1] == str2[n - 1])
		return isSubSequence(str1, str2,
							m - 1, n - 1);


	return isSubSequence(str1, str2, m, n - 1);
}


let str1 = "gksrek";
let str2 = "geeksforgeeks";
let m = str1.length;
let n = str2.length;
let res = isSubSequence(str1, str2, m, n);

if (res)
	document.write("Yes");
else
	document.write("No");
	



