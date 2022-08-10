console.log ("this works!")

const asideBtn= document.querySelector(".aside_button");
const modal = document.querySelector(".modal");
const closeBtn= document.querySelector(".close")

const proposalTitle = document.querySelector(".title")
const proposalDescription = document.querySelector(".description")
const proposalProposer = document.querySelector(".proposer")

const modalBtn = document.querySelector('.modal_button')
const proposalContainer = document.querySelector(".card");

const proposals={
  "proposalList": []
}

asideBtn.addEventListener("click",openModal);
closeBtn.addEventListener("click",closeModal);

modalBtn.addEventListener('click', addProposal)

function openModal(e){
  e.preventDefault();
  console.log ('clicked')
  modal.style.display="flex";
}

function closeModal(e){
  e.preventDefault();
  console.log ("clicked")
  modal.style.display="none";
}

function pageLoadFn(e){
  if(localStorage.getItem('proposals') === null){
    return
  } else {
    proposals = JSON.parse(localStorage.getItem('proposals'))
    proposals.proposalList.forEach(displayProposal)
  }
}

function addProposal(e){
  e.preventDefault();
  console.log ("great")

  let newProposalTitle = proposalTitle.value;
  let newProposalDescription = proposalDescription.value;
  let newProposalProposer = proposalProposer.value;

  proposalObject = {
    name: newProposalTitle,
    description: newProposalDescription,
    proposer: newProposalProposer
  }

  displayProposal(proposalObject);
  proposals.proposalList.push(proposalObject);
  localStorage.setItem("proposals", JSON.stringify(proposals))
}

function displayProposal(proposal){
  console.log ("hhhhh")
  let newListItem = document.createElement("card");
  newListItem.textContent = `${proposal.proposer} ${proposal.description} ${proposal.proposalTitle}`

  proposalContainer.appendChild(newListItem)
}

// const form=document.querySelector("form");
// const titleInput=document.querySelector(".title");
// const descriptionInput=document.querySelector(".description")
// const emailInput=document.querySelector(".email");
// const descriptionCount = document.querySelector('.description_count');

// const count = 100;
// descriptionCount.innerText = count;

// const proposal={
//     "proposalHub":[]
// }

// const addNewProposal=(e) =>{
//     e.preventDefault;
//     console.log(e.target)

//     const newTitle=titleInput.value;
//     const newDescription=descriptionInput.value;
//     const newEmail=emailInput.value;

//     proposalObject={
//         title:newTitle,
//         description:newDescription,
//         completed:faluse
//     }

//     proposal.proposalHub.push(proposalObject);

//     form.reset();
// }

// form.addEventListener("submit",addNewProposal);




// form.addEventListener("submit",addNewProposal);

// function addNewProposal(){
//     const newTitle=titleInput.value;
//     const newDescription=descriptionInput.value;
//     const newEmail=emailInput.value;

//     proposalObject={
//         title:newTitle,
//         description:newDescription,
//         completed:faluse
//     }
//     proposal.proposalHub.push(proposalObject);
// }
