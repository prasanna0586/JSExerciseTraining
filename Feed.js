var feedArray = ['Appa','Amma'];
var table = document.getElementById("feedContent");
var feedRow,iconCell,feedCell,closeCell,imageElement,anchorElement;

document.onLoad = function()
{
	var tableWithFeed = initializeTable();
	deleteFeedData(tableWithFeed);
	//Delete Feeds on click starts	
}();
function postData()
{
	feedArray.push(enterFeed.value);	
	var tableWithFeed = initializeTable();
	deleteFeedData(tableWithFeed);
	enterFeed.value = '';
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
		var regExForURL=/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
		//Create feed cell starts
		feedCell = feedRow.insertCell(1);
		feedCell.id = "feedCell" + (rowNum + 1);
		
		if(regExForURL.test(feedArray[rowNum]))
		{
			anchorElement = document.createElement("a");
			anchoreTextNode = document.createTextNode(feedArray[rowNum]);
			anchorElement.setAttribute("href",feedArray[rowNum]);
			anchorElement.setAttribute("target","_blank");
			anchorElement.appendChild(anchoreTextNode);
			feedCell.appendChild(anchorElement);
			feedRow.className="urlrowcolor";
		}
		else
		{
			feedCell.innerHTML = feedArray[rowNum];
			feedRow.className="textrowcolor";
		}
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

function deleteFeedData(tableWithFeed)
{
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
}