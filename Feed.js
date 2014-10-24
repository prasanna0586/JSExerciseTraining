var feedArray = ['Existing Feed1','http://www.google.com'];

function postData()
{
	feedArray.push(enterFeed.value);
	var table = document.getElementById("feedContent");
	var row,cell;
	var clearedTable = clearFeedData(table);
	for(var rowNum = 0; rowNum < feedArray.length; rowNum++)
	{
		row = clearedTable.insertRow(0);
		cell = row.insertCell(0);
		cell.innerHTML = feedArray[rowNum];
	}
}
function clearFeedData(feedContentsTable)
{
	while(feedContentsTable.rows.length)
	{
		feedContentsTable.deleteRow(0);
	}
	return feedContentsTable;
}