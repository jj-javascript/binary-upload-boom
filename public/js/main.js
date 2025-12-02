var favorite = document.querySelectorAll('.fa-star');
var feedOption = document.getElementById('feedSelect');
var feedName = document.getElementById('feedName')
var feedSubmitButton = document.getElementById('submitNewFeed')
var createFeedButton = document.getElementById('createNewFeed')

feedOption.addEventListener('change', changeFeed)


createFeedButton.addEventListener ('click', getFeedOptions)

feedName.addEventListener('input', showSubmit)

// feedSubmitButton.addEventListener('click', createNewFeed )

function getFeedOptions(){
feedName.style.display = 'unset'
}

function showSubmit () {
  feedSubmitButton.style.display = 'unset'
}


let feedAssign = document.querySelectorAll('#entryFeedSelect')

Array.from(feedAssign).forEach(function(element) {
  element.addEventListener('change', assignFeed)
});


function assignFeed () {
  const feedID = this.closest('li').querySelector('#entryFeedSelect').value
  const entryID = this.closest('li').querySelector('#entryID').innerText.trim()
  fetch('/feed/assignFeedEntries/', {
  method: 'put',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    'feedID': feedID,
    'entryID': entryID,
    'field3': 'field3',
  })
}) 
}


// function createNewFeed () {
//   var feedName = document.getElementById('feedName')
//   var feedSelect = document.getElementById('feedSelect')
//   var value = feedName.value
//   if(value !== ""){
//     let option = document.createElement("option")
//     option.value = value
//     option.text = value
//     console.log (option)

//     feedSelect.appendChild(option)
//     feedSelect.value = value
//     // option.setAttribute ("id", )
//   } else {
//     alert('Please Submit A Value!')
//   }
// }


function changeFeed(){
  if (feedOption.value === 'favorites') {
    console.log('Loading favorites…');
    window.location.href = '/entry/getFavorites';
  } else if (feedOption.value === 'main'){
    window.location.href = '/profile';
  }
  else {
  window.location.href = '/feed/getFeedEntries?feedID='+ feedOption.value
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
