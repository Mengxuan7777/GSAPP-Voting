console.log ("this works!")

const form=document.querySelector("form");
const titleInput=document.querySelector(".title");
const descriptionInput=document.querySelector(".description")
const emailInput=document.querySelector(".email");
const descriptionCount = document.querySelector('.description_count');

const count = 100;
descriptionCount.innerText = count;

const proposal={
    "proposalHub":[]
}

const addNewProposal=(e) =>{
    e.preventDefault;
    console.log(e.target)

    const newTitle=titleInput.value;
    const newDescription=descriptionInput.value;
    const newEmail=emailInput.value;

    proposalObject={
        title:newTitle,
        description:newDescription,
        completed:faluse
    }

    proposal.proposalHub.push(proposalObject);

    form.reset();
}

form.addEventListener("submit",addNewProposal);




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
