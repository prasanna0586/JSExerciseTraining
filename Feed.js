var feedArray = ['Existing Text Feed','Existing URL Feed'];

function postData()
{
	feedArray.push(enterFeed.value);
	var table = document.getElementById("feedContent");
	var feedRow,iconCell,feedCell,closeCell,imageElement;
	var clearedTable = clearFeedData(table);

	for(var rowNum = 0; rowNum < feedArray.length; rowNum++)
	{
		feedRow = clearedTable.insertRow(0);
		feedRow.id = "feedRow" + (rowNum + 1);
		
		//Create icon image cell starts
		iconCell = feedRow.insertCell(0);
		iconCell.id = "iconCell" + (rowNum + 1);
		imageElement = document.createElement("img");
		imageElement.setAttribute("src", "UserIcon.png");
		iconCell.appendChild(imageElement);
		//Create icon image cell ends
		
		//Create feed cell starts
		feedCell = feedRow.insertCell(1);
		feedCell.id = "feedCell" + (rowNum + 1);
		feedCell.innerHTML = feedArray[rowNum];
		//Create feed cell ends
		
		//Create close cell starts
		closeCell = feedRow.insertCell(2);
		closeCell.id = "closeCell" + (rowNum + 1);
		closeCell.innerHTML = "x";
		//Create close cell ends
	}
	
	var rows = clearedTable.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
	for (i = 0; i < rows.length; i++) 
	{
		clearedTable.rows[i].cells[2].onclick = function() 
		{
			for (i = 0; i < rows.length; i++)
			{
				if(clearedTable.rows[i].cells[2].id === this.id)
				{
					clearedTable.deleteRow(clearedTable.rows[i].rowIndex);
				}
			}
		}
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