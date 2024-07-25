let arrayOfPosts;
let arrayOfComments;
let arrayOfUsers;

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts() and also getcomments()
window.onload = function() {
  getPosts()
  getComments()
  getUsers()

}

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}

// This function logs the results in your browser's console
const consolePosts = () => {
  console.log(arrayOfPosts)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

/* 
Your job now is to follow the functions above and use them as templates 
 to build the functionality the buttons in the index.html file already 
 have laid out in it. This way you can learn how to build fetch requests 
 and work with other APIs and become a real developer!! 
*/

//  This function will fetch the first 5 posts in the ul of the id of allposts
const Fetch5Posts = () => {
    const new5Array = arrayOfPosts.slice(0, 5)
  
    const allPosts = document.getElementById('all-posts')
    new5Array.map((post, index) => {
      const li = document.createElement('li')
      const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
      li.appendChild(text)
      allPosts.append(li)
    })

}

// This function will fetch all comments and then underneath we have another function that will fetch only the comments using the API provided by the documentation, also I added at the top the new array created arrayOfComments and also added line 8 becuse of this exercise

const FetchComments = () => {
    const allPosts = document.getElementById('all-posts')
    arrayOfComments.map((comment, index) => {
      const li = document.createElement('li')
      const text = document.createTextNode(`#${index}, Name: ${comment.name}, Email: ${comment.email}, Body: ${comment.body}`)
      li.appendChild(text)
      allPosts.append(li)
    })


}

const getComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(comments => arrayOfComments = comments)
  }

// This function will fetch all users and then underneath we have another function that will fetch only the users using the API provided by the documentation, also I added at the top the new array created arrayOfComments and also added line 9 becuse of this exercise


const FetchUsers = () => {
    const allPosts = document.getElementById('all-posts')
    arrayOfUsers.map((user, index) => {
      const li = document.createElement('li')
      const text = document.createTextNode(`#${index}, Name: ${user.name}, Username: ${user.username}, Email: ${user.email}, Address: ${user.address.street}, ${user.address.suite},${user.address.geo.lat} Phone: ${user.phone}, Website: ${user.website}, Company: ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}`)
      li.appendChild(text)
      allPosts.append(li)
    })

}


const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => arrayOfUsers = users)
  }