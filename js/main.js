
let elementsup = [];
let elementsstart = [];

let y = [100,100,100,100];//document.getElementById("div-upcoming").offsetHeight;

function deleteelementfromelems(elements,id,typeofelem) {
  for (i=0;i<elements.length;i++) {
    let elem = elements[i];
    if (elem.id==id) {
      elem.remove();
      elements.splice(i, 1);
      break;
    }
  }
  let y2 = 100;
  for (i=0;i<elements.length;i++) {
    let elem = elements[i];
    let ytmp = y2.toString()+"px";
    elem.style.top = ytmp;
    y2+= elem.offsetHeight;
  }
  y[typeofelem] = y2;
}

let upcoming_button = 0;
/*

let numUpcoming = 0;

let UpcomingHeight = 
*/
  function addNewTask() {
    //window.alert("Hello!");

    let theTitleOfTheTask = document.getElementById("title").value;
    let theDescriptionOfTheTask = document.getElementById("description").value;
    let theAssignedPerson = document.getElementById("assigned").value;
    let theStateOfTheTask = document.getElementById("state-id").value;

    //window.alert(theTitleOfTheTask + theDesciptionOfTheTask + theAssignedPerson + theStateOfTheTask);


    

    // const baseNode = document.createElement("p");

    // const textContent = document.createTextNode(theReturnString);

    //baseNode.appendChild(textContent); 

    const newPElement = document.createElement("p");

    newPElement.classList.add("pModifiedCss");

    const newTitleNode = document.createTextNode(theTitleOfTheTask);
    const newH2Element = document.createElement("h2");
    newH2Element.appendChild(newTitleNode);

    const newDescptNode = document.createTextNode("Description: " + theDescriptionOfTheTask);


    const newAssignedToNode = document.createTextNode(theAssignedPerson);

    const newCloseButton = document.createElement("button");
    newCloseButton.appendChild(document.createTextNode("X"));
    newCloseButton.id = upcoming_button;

    //newCloseButton.addEventListener('click', function(event) {
       //let elem = document.getElementById(event.target.id);
       //elem = elem.parentElement;
       //let yx = elem.style.top;
       //elem.remove();
    //   deleteelementfromelems(elementsup,event.target.id);
       //elem = document.getElementById(1);
       //elem = elem.parentElement;
      // elem.style.top = "100px";
       
    //});
    
      newPElement.appendChild(newH2Element);
      newPElement.appendChild(newCloseButton);
      newPElement.id = upcoming_button++;

    if (theStateOfTheTask === "upcoming") {
      elementsup.push(newPElement);
      newCloseButton.addEventListener('click', function(event) {
         deleteelementfromelems(elementsup,event.target.id,0);
      });

     // let yHeight = numUpcoming * 

      //let theReturnString = theTitleOfTheTask + theDescriptionOfTheTask + theAssignedPerson + theStateOfTheTask;
      // document.getElementById("newUpcoming").innerHTML += "<h2>" + theTitleOfTheTask + "</h2><button>X</button><p>" + theDescriptionOfTheTask + "</p><p>Assigned to: " + theAssignedPerson + "</p><hr>";
      
      
      //const newBrElement = document.createElement("br");
   //   const newPElement = document.createElement("p");

    //  newPElement.classList.add("pModifiedCss");

     // const newTitleNode = document.createTextNode(theTitleOfTheTask);

      //const newDescptNode = document.createTextNode("Description: " + theDescriptionOfTheTask);

      //const newAssignedToNode = document.createTextNode("<b>" + theAssignedPerson + "</b>");

      //const newCloseButton = document.createElement("button");



     // newPElement.appendChild(newTitleNode);
      //newPElement.style.left = "0px";
      //newPElement.style.position = "absolute";
     //newPElement.style.top = "200px";

     // adding more elements...

/*

     const newButtonText = document.createTextNode("X");
     const newButton = document.createElement("button");
     newButton.appendChild(newButtonText);
     pElementMain.appendChild(newButton);
  
*/
      let ytmp = y[0].toString()+"px";

      newPElement.style.top = ytmp;

      // newPElement.style.setProperty("top","${ytmp}px");
      
      //newBrElement.style.backgroundColor = "yellow";
      const pElementMain = document.getElementById("div-upcoming");
      // pElementMain.appendChild(newBrElement);
      pElementMain.appendChild(newPElement);
      
      y[0]+=100;
    } else if (theStateOfTheTask === "starting") {
      elementsstart.push(newPElement);
      newCloseButton.addEventListener('click', function(event) {
         deleteelementfromelems(elementsstart,event.target.id,1);
      });
      console.log("start")
      
      let ytmp = y[1].toString()+"px";

      newPElement.style.top = ytmp;

      // newPElement.style.setProperty("top","${ytmp}px");
      
      //newBrElement.style.backgroundColor = "yellow";
      const pElementMain = document.getElementById("div-starting");
      // pElementMain.appendChild(newBrElement);
      pElementMain.appendChild(newPElement);
      y[1]+=100;

      //let theReturnString = theTitleOfTheTask + theDescriptionOfTheTask + theAssignedPerson + theStateOfTheTask;
      //document.getElementById("newStarting").innerHTML += "<h2>" + theTitleOfTheTask + "</h2><br><p>Assigned to: " + theAssignedPerson + "</p>";

    } else if (theStateOfTheTask === "working") {
      //let theReturnString = theTitleOfTheTask + theDescriptionOfTheTask + theAssignedPerson + theStateOfTheTask;
      document.getElementById("newWorking").innerHTML += "<h2>" + theTitleOfTheTask + "</h2><br><p>Assigned to: " + theAssignedPerson + "</p>";

    } else if (theStateOfTheTask === "ready") {
      //let theReturnString = theTitleOfTheTask + theDescriptionOfTheTask + theAssignedPerson + theStateOfTheTask;
      document.getElementById("newReady").innerHTML += "<h2>" + theTitleOfTheTask + "</h2><br><p>Assigned to: " + theAssignedPerson + "</p>";

    } else {
      document.getElementById("newError").innerHTML += "Error occurred!";
    }



    /*
        let theUsedDialog = document.getElementById("myDialog");
        theUsedDialog.close(theReturnString);
    */
  }

  function hideToggle() {

    let tamaDivi = document.getElementById("theFormDivId");

    if (tamaDivi.style.display === 'none') {
      tamaDivi.style.display = "flex";
    } else {

      tamaDivi.style.display = 'none';

    }

  }