var feedArray = ['Appa','Amma'];
var table = document.getElementById("feedContent");
var feedRow,iconCell,feedCell,closeCell,imageElement;

document.onLoad = function()
{
	initializeTable();	
}();
function postData()
{
	feedArray.push(enterFeed.value);	
	var tableWithFeed = initializeTable();
	//Delete Feeds on click starts
	var rows = tableWithFeed.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
	for (i = 0; i < rows.length; i++) 
	{
		tableWithFeed.rows[i].cells[3].onclick = function() 
		{
			for (i = 0; i < rows.length; i++)
			{
				if(tableWithFeed.rows[i].cells[3].id === this.id)
				{
					feedArray.splice((feedArray.length - 1) - tableWithFeed.rows[i].rowIndex,1);
					tableWithFeed.deleteRow(tableWithFeed.rows[i].rowIndex);
				}
			}
		}
	}
	//Delete Feeds on click ends
}

function clearFeedData(feedContentsTable)
{
	while(feedContentsTable.rows.length)
	{
		feedContentsTable.deleteRow(0);
	}
	return feedContentsTable;
}

function initializeTable()
{
	var initializedTable = clearFeedData(table);
	for(var rowNum = 0; rowNum < feedArray.length; rowNum++)
	{
		feedRow = initializedTable.insertRow(0);
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
		
		//Create date cell starts
		var date = new Date();
		feedCell = feedRow.insertCell(2);
		feedCell.id = "dateCell" + (rowNum + 1);
		if(date.getHours() > 12)
		{
			hours = (date.getHours() - 12).toString();
			amOrpm = "PM";
		}
		else
		{
			hours = date.getHours().toString();
			amOrpm = "AM";
		}
		feedCell.innerHTML = date.getDate().toString() + "-" + (date.getMonth() + 1).toString() + "-" 
		+ date.getFullYear().toString() + " " + hours + ":" + date.getMinutes().toString() + " " + amOrpm;
		//Create date cell ends
		
		//Create close cell starts
		closeCell = feedRow.insertCell(3);
		closeCell.id = "closeCell" + (rowNum + 1);
		closeCell.innerHTML = "x";
		//Create close cell ends
	}
	return initializedTable;
}