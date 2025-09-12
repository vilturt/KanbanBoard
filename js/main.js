
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

function deleteelementfromelems(elements,id,typeofelem,flag) {
  for (i=0;i<elements.length;i++) {
    let elem = elements[i];
    if (elem.id==id) {
      if (flag==0) {
	elem.remove();
      }
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

function dragoverHandler(ev) {
  ev.preventDefault();
}

function deleteup(event) {
   console.log(elementsup);
   console.log(event.target);
   deleteelementfromelems(elementsup,event.target.id,0,0);
   console.log("upcoming delete");
}

function deletestart(event) {
   deleteelementfromelems(elementsstart,event.target.id,1,0);
   console.log("start delete");
}

function deleteready(event) {
   deleteelementfromelems(elementsready,event.target.id,2,0);
   console.log("ready delete");
}

function deletework(event) {
   deleteelementfromelems(elementswork,event.target.id,3,0);
   console.log("work delete");
}

function setdestside(ev,oldparent,sdest, elements,num,color) {
  //console.log(ev.target.parentElement.id);
  //console.log(ev.target.id);
  //if (((ev.target.parentElement.id==sdest) && (ev.target.id==sdest+"2")) || (ev.target.id==sdest)) {
  if ((ev.target.parentElement.id==sdest) || (ev.target.id==sdest)) {
     elements.push(dragged);
     let parent = document.getElementById(sdest);  
//     console.log(dragged.children[1].id);
//     dragged.children[1].onclick = null;
     //dragged.children[0].removeAttribute("onclick");
     //dragged.children[1].removeAttribute("onclick");
     if (oldparent.id=="div-upcoming") {
       dragged.children[1].removeEventListener("click",deleteup);
     }
     if (oldparent.id=="div-starting") {
       dragged.children[1].removeEventListener("click",deletestart);
     }
     if (oldparent.id=="div-working") {
       dragged.children[1].removeEventListener("click",deletework);
     }
     if (oldparent.id=="div-ready") {
       dragged.children[1].removeEventListener("click",deleteready);
     }

     if (sdest=="div-upcoming") {
       dragged.children[1].addEventListener('click', deleteup);
     }
     if (sdest=="div-starting") {
       dragged.children[1].addEventListener('click', deletestart);
     }
     if (sdest=="div-working") {
       dragged.children[1].addEventListener('click', deletework);
     }
     if (sdest=="div-ready") {
       dragged.children[1].addEventListener('click', deleteready);
     }
     dragged.style.backgroundColor = color;
     sety(parent,elements,num);
   }
}

function dropHandler(ev) {
  //ev.preventDefault();
  oldparent = dragged.parentNode;

  if ((ev.target.id!="div-upcoming") && (ev.target.id!="div-upcoming2") &&
      (ev.target.id!="div-starting") && (ev.target.id!="div-starting2") &&
      (ev.target.id!="div-working") && (ev.target.id!="div-working2") &&
      (ev.target.id!="div-ready") && (ev.target.id!="div-ready2")) {
	return
   }

  //console.log(ev.target.id);
  //console.log(ev.target.parentElement.id);
  //console.log(ev.target.nodeName);

  dragged.parentNode.removeChild(dragged);

  if ((ev.target.id=="div-upcoming") || (ev.target.id=="div-starting") ||
      (ev.target.id=="div-working") || (ev.target.id=="div-working2")) {
    ev.target.appendChild(dragged);
  } else {
    ev.target.parentElement.appendChild(dragged);
  }

  if (oldparent.id=="div-upcoming") {
     deleteelementfromelems(elementsup,dragged.id,0,1);
  }
  if (oldparent.id=="div-starting") {
     deleteelementfromelems(elementsstart,dragged.id,1,1);
  }
  if (oldparent.id=="div-working") {
     deleteelementfromelems(elementswork,dragged.id,2,1);
  }
  if (oldparent.id=="div-ready") {
     deleteelementfromelems(elementsready,dragged.id,3,1);
  }

/*  if ((ev.target.parentElement.id=="div-starting") || (ev.target.id=="div-starting")) {
        elementsstart.push(dragged);
        let parent = document.getElementById("div-starting");  
        dragged.children[1].addEventListener('click', function(event) {
           deleteelementfromelems(elementsstart,dragged.id,1,0);
        });
        dragged.style.backgroundColor = "#4df323";
        sety(parent,elementsstart,1);
  }*/
  setdestside(ev,oldparent,"div-upcoming",elementsup,0,"#cfcece");
  setdestside(ev,oldparent,"div-starting",elementsstart,1,"#4df323");
  setdestside(ev,oldparent,"div-working",elementswork,2,"#f1bc10");
  setdestside(ev,oldparent,"div-ready",elementsready,3,"#ac0707");

//  console.log(ev.target);
  return;

  const data = ev.dataTransfer.getData("text");
  //console.log("parentx"+document.getElementById(data).parentElement.id);
  const idsrc = document.getElementById(data).parentElement.id;
//  document.getElementById(data).parentElement.removeChild(document.getElementById(data));
  ev.target.appendChild(document.getElementById(data));
  const idsrc2 = document.getElementById(data).parentElement.nodeName;

//  console.log("dataid:"+data);
  let parent = document.getElementById("div-upcoming");    
  console.log("ev.target"+ev.target.nodeName);
  console.log("parent"+parent.id);
  console.log("idsrc"+idsrc);
  console.log("idsrc2"+idsrc2);
  if (idsrc==parent.id) {
     deleteelementfromelems(elementsup,data,0,1);
     console.log("here!");
  }
//  parent = document.getElementById("div-start");    
//  if (ev.target==parent) {
//     deleteelementfromelems(elementsstart,data,0,1);
//  }

  if (ev.target.id=="div-starting") {
        console.log("HERE2");
	elementsstart.push(document.getElementById(data));
	console.log(elementsstart.length);
        parent = document.getElementById("div-starting");  
        document.getElementById(data).children[1].addEventListener('click', function(event) {
           deleteelementfromelems(elementsstart,event.target.id,1,0);
           console.log("asdf delete");
        });


        sety(parent,elementsstart,1);
   }


/*
  sety(parent,elementsup,0);
  parent = document.getElementById("div-starting");  
  sety(parent,elementsstart,1);
  parent = document.getElementById("div-working");  
  sety(parent,elementswork,2);
  parent = document.getElementById("div-ready");  
  sety(parent,elementsready,3);*/

}

let startindex = 0;

let dragged = null;

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

/*   if (startindex==0) {
     let parent = document.getElementById("div-upcoming");
     parent.addEventListener('drop', ev => {
         dropHandler(ev);
     }, false);
     parent.addEventListener('dragover', ev => {
         dragoverHandler(ev);
     }, false);
   
     parent = document.getElementById("div-starting");
     parent.addEventListener('drop', ev => {
         dropHandler(ev);
    }, false);
     parent.addEventListener('dragover', ev => {
         dragoverHandler(ev);
     }, false);
     startindex++; 
 }*/

    

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

    newPElement.draggable = true;
    newPElement.addEventListener('dragstart', ev => {
	ev.dataTransfer.setData("text", ev.target.id);
	dragged = event.target;
    });

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
      newCloseButton.addEventListener('click', deleteup);
//newCloseButton.addEventListener('click',
//       function(event) {
//         deleteelementfromelems(elementsup,event.target.id,0,0);
//         console.log("upcoming delete");
//      });

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
         deleteelementfromelems(elementsstart,event.target.id,1,0);
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
         deleteelementfromelems(elementswork,event.target.id,2,0);
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
         deleteelementfromelems(elementsready,event.target.id,3,0);
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