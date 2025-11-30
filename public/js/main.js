var favorite = document.querySelectorAll('.fa-star');
var feedOption = document.getElementById('feedSelect');
var feedName = document.getElementById('feedName')
var feedSubmitButton = document.getElementById('submitNewFeed')
var createFeedButton = document.getElementById('createNewFeed')

feedOption.addEventListener('change', changeFeed)


createFeedButton.addEventListener ('click', getFeedOptions)

feedName.addEventListener('input', showSubmit)

feedSubmitButton.addEventListener('click', createNewFeed )

function getFeedOptions(){
feedName.style.display = 'unset'
}

function showSubmit () {
  feedSubmitButton.style.display = 'unset'
}

function createNewFeed () {
  var feedName = document.getElementById('feedName')
  if(feedName.value === ""){
    alert('Please Submit A Value!')
  } else {
    let option = document.createElement("option")
    option.value = feedName.value;
    option.textContent = feedName.value
    feedOption.appendChild(option)
    // option.setAttribute ("id", )
  }
}

// function run1 () {
//   if(inputBox.value === ""){
//       alert('Make sure to add your task!');
//   }else{
//       let listContainer = document.getElementById("docheck");
//       let li = document.createElement("li");
//      let newCheckBoxID = 'checkbox_' + li.innerHTML;
//       let newCheckBox = document.createElement("INPUT");
//       newCheckBox.setAttribute("type", "checkbox");
//       newCheckBox.setAttribute("id", newCheckBoxID);
//       newCheckBox.setAttribute("class", 'item');
//       li.innerHTML = inputBox.value;
//       listContainer.appendChild(li);
//       li.appendChild(newCheckBox);
//       console.log(document.querySelector("#docheck"));
//   }
// }


function changeFeed(){
  if (feedOption.value === 'favorites') {
    console.log('Loading favorites…');
    window.location.href = '/entry/getFavorites';
  } else {
    window.location.href = '/profile';
  }
}

Array.from(favorite).forEach(function(element) {
    element.addEventListener('click', function(){
      const favorite = this.dataset.favorited
      const id = this.dataset.id
      fetch('/entry/favoriteEntry/' + id, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          'favorited':favorite,
        })
      })
      .then(data => {
        console.log(data)
        this.dataset.favorited = String(this.dataset.favorited === 'false')
       if (favorite === 'true') {
        this.classList.remove('fa-solid')
        this.classList.add('fa-regular')
       } else {
        this.classList.add('fa-solid')
        this.classList.remove('fa-regular')
       }
      })
    });
});



// function changeFeed(){
//   console.log(feedOption.value)
//   if (feedOption.value === 'favorites') {
//     console.log('bananaboat')
//     //  It can read that this is changing
//     // But once this change happens we need it to be able  to deliver that from the database
//     // This will take some sorting and returning it seems like
//     fetch('/entry/getFavorites', {
//       method: 'get',
//       headers: {'ContentType': 'application/json'},
//       body: JSON.stringify ({
//         'favorited': true,
//       }) 
//     .then (res => res.json())
//     .then (data => {
//       console.log(data)
//     })
//   })
//   // else {
//   //   fetch('/entry/getEntries'), {
//   //     method: 'get',
//   //     headers: {'ContentType': 'application/json'},
//   //     body: JSON.stringify ({
//   //       'favorited': favorite,
//   //     })
//   //   }
  
//   // }

// } 
// }

// Parameters: li, boolean dataset value
// Event Listener: Select on the value
// Check what I did on the holiday App
// Return needs to be Regular list or just list of favorites
// In the JS function, I need to toggle show all or just favorites
// 

// Array.from(feedOption).forEach(function(feedOption){
// feedOption.addEventListener('change', function(){
// if (feedOption.value === 'Favorites') {
//   console.log('bananaboat')
//   fetch('/entry/getFavorites'), {
//     method: 'put',
//     headers: {'ContentType': 'application/json'},
//     body: JSON.stringify ({
//       'favorited': favorite,
//     })
//   } .then (data => {
//     console.log(data)
//   })
// } 
// else {
//   fetch('/entry/getEntries'), {
//     method: 'put',
//     headers: {'ContentType': 'application/json'},
//     body: JSON.stringify ({
//       'favorited': favorite,
//     })
//   }

// }
// }
// )
// })
