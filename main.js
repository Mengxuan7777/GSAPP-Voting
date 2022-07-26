console.log ("this works!")

const form=document.querySelector("form");
const titleInput=document.querySelector(".title");
const descriptionInput=document.querySelector(".description")
const emailInput=document.querySelector(".email");

const proposal={
    "proposalHub":[]
}

form.addEventListener("post",addNewProposal);

const addNewProposal=(e) =>{
    e.preventDefault;

    const newTitle=titleInput.value;
    const newDescription=descriptionInput.value;
    const newEmail=emailInput.value;

proposalObject={
    title:newTitle,
    description:newDescription,
    email:newEmail,
    completed:faluse,
}

proposal.proposalHub.push(proposalObject);
console.log(proposal)

form.reset();
}
