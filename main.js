console.log ("this works!")

const button= document.querySelector("button");
const modal = document.querySelector(".modal");
const closeBtn= document.querySelector(".close")

const proposalTitle = document.getElementsByName("title")
const proposalDescription = document.getElementsByName("description")
const proposalProposer = document.getElementsByName("proposer")

const proposalContainer = document.querySelector("ul");

const proposals={
  "proposalList": []
}

button.addEventListener("click",openModal);
closeBtn.addEventListener("click",closeModal);

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

function addProposal(e){
  e.preventDefault();

  console.log("this works")
  
  let newProposalTitle = proposalTitle.value;
  let newProposalDescription = proposalDescription.value;
  let newProposalProposer = proposalProposer.value;

  proposalObject = {
    handle:"@bot",
    name: newProposal
  }

  displayProposal(proposalObject);
  proposals.proposalList.push(proposalObject);
  localStorage.setItem("proposals", JSON.stringify(proposals))
}

function displayProposal(proposal){
  console.log(proposal)

  let account_name = "Jess Liu"
  let proposal_handle="@bot"

  let newListItem = document.createElement("li");

  newListItem.textContent = `${account_name} ${proposal_handle} ${proposal.name}`

  form.reset()
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
