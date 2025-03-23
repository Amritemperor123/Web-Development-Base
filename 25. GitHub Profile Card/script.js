const APIURL = 'https://api.github.com/users/'
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
async function getUser(username){
    try{
        const {data} = await axios(APIURL + username)
        createUserCard(data)
    }
    catch(err){
        if(err.response.status == 404){
            CreateErrorCard('No Profile of ths Username!')
        }
    }
}
function createUserCard(user){
    const cardHTML = `
    <div class="card">
        <div>
            <img src="${user.avater_url}" alt="${user.name}" class="avater">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>
            <div class="repos"></div>
        </div>
    </div>`
    main.innerHTML = cardHTML
}
function CreateErrorCard(msg){
    const cardHTML = `
    <div class="card">
        <h1>${msg}</h1>
    </div>`
    main.innerHTML = cardHTML
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = search.value
    if(user){
        getUser(user)
        search.value = ''
    }
})