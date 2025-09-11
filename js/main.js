
let elementsup = [];
let elementsstart = [];
let elementswork = [];
let elementsready = [];

let y = [100,100,100,100];//document.getElementById("div-upcoming").offsetHeight;

function sety(parent,elements,typeofelem) {
  let y2 = parent.offsetHeight;
  for (i=0;i<elements.length;i++) {
    let elem = elements[i];
    let ytmp = y2.toString()+"px";
    elem.style.top = ytmp;
    y2+= elem.offsetHeight+20;
  }
  y[typeofelem] = y2;
}

function deleteelementfromelems(elements,id,typeofelem) {
  for (i=0;i<elements.length;i++) {
    let elem = elements[i];
    if (elem.id==id) {
      elem.remove();
      elements.splice(i, 1);
      break;
    }
  }
  if (elements.length>=1) {
    let parent = elements[0].parentElement;
    sety(parent,elements,typeofelem);
  }
}

let upcoming_button = 0;

window.addEventListener('resize', function () {
  let parent = document.getElementById("div-upcoming");  
  sety(parent,elementsup,0);
  parent = document.getElementById("div-starting");  
  sety(parent,elementsstart,1);
  parent = document.getElementById("div-working");  
  sety(parent,elementswork,2);
  parent = document.getElementById("div-ready");  
  sety(parent,elementsready,3);
});

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

    newCloseButton.classList.add("newUpDeleteBut");


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

      //console.log(newPElement.style.backgroundColor);
      newPElement.style.backgroundColor = "#cfcece";
      const pElementMain = document.getElementById("div-upcoming");

      if (elementsup.length==1) {
	 y[0]=pElementMain.offsetHeight;
      }

      let ytmp = y[0].toString()+"px";

      newPElement.style.top = ytmp;
      
      pElementMain.appendChild(newPElement);

      y[0]+=newPElement.offsetHeight+20;

    } else if (theStateOfTheTask === "starting") {
      elementsstart.push(newPElement);
      newCloseButton.addEventListener('click', function(event) {
         deleteelementfromelems(elementsstart,event.target.id,1);
      });
      //console.log("start")

      const pElementMain = document.getElementById("div-starting");

      
      if (elementsstart.length==1) {
	 y[1]=pElementMain.offsetHeight;
      }


      let ytmp = y[1].toString()+"px";

      newPElement.style.top = ytmp;
      newPElement.style.backgroundColor = "#4df323";

      pElementMain.appendChild(newPElement);
      y[1]+=newPElement.offsetHeight+20;

    } else if (theStateOfTheTask === "working") {
      console.log("wroking");
      elementswork.push(newPElement);
      newCloseButton.addEventListener('click', function(event) {
         deleteelementfromelems(elementswork,event.target.id,2);
      });
      //console.log("start")

      const pElementMain = document.getElementById("div-working");

      if (elementswork.length==1) {
	 y[2]=pElementMain.offsetHeight;
      }

    
      let ytmp = y[2].toString()+"px";

      newPElement.style.top = ytmp;

      newPElement.style.backgroundColor = "#f1bc10";

      pElementMain.appendChild(newPElement);
      y[2]+=newPElement.offsetHeight+20;


      //let theReturnString = theTitleOfTheTask + theDescriptionOfTheTask + theAssignedPerson + theStateOfTheTask;
//      document.getElementById("newWorking").innerHTML += "<h2>" + theTitleOfTheTask + "</h2><br><p>Assigned to: " + theAssignedPerson + "</p>";

    } else if (theStateOfTheTask === "ready") {
      //let theReturnString = theTitleOfTheTask + theDescriptionOfTheTask + theAssignedPerson + theStateOfTheTask;
      //document.getElementById("newReady").innerHTML += "<h2>" + theTitleOfTheTask + "</h2><br><p>Assigned to: " + theAssignedPerson + "</p>";

      elementsready.push(newPElement);
      newCloseButton.addEventListener('click', function(event) {
         deleteelementfromelems(elementsready,event.target.id,3);
      });

      const pElementMain = document.getElementById("div-ready");

      if (elementsready.length==1) {
	 y[3]=pElementMain.offsetHeight;
      }

    
      let ytmp = y[3].toString()+"px";

      newPElement.style.top = ytmp;

      newPElement.style.backgroundColor = "#ac0707";

      pElementMain.appendChild(newPElement);
      y[3]+=newPElement.offsetHeight+20;


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