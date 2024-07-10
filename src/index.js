document.addEventListener('DOMContentLoaded', () => {
    const dogImageContainer = document.getElementById('dog-image-container')
    const ul = document.getElementById('dog-breeds')
    const breedDropDown = document.getElementById('breed-dropdown')
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(res => res.json())
        .then(data => {
            data.message.forEach(dogImgurl => {
                const img = document.createElement('img')
                img.src = dogImgurl
                img.alt = 'Dog\'s Image'
                dogImageContainer.appendChild(img)
            });
        })

    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then(res => res.json())
        .then(data => {
            const breeds = Object.keys(data.message)
            breeds.forEach(breed => {
                const li = document.createElement('li')
                li.textContent = breed
                li.addEventListener('click', () => {
                    li.style.color = 'red'
                })
                ul.appendChild(li)
            })
            breedDropDown.addEventListener('change', () => {
                const letterSelected = breedDropDown.value
                const filter = breeds.filter((breed) => breed.startsWith(letterSelected))
                ul.innerHTML = ''
                filter.forEach(breed => {
                    const li = document.createElement('li')
                    li.textContent = breed
                    li.addEventListener('click', () => {
                        li.style.color = 'red'
                    })
                    ul.appendChild(li)
                })
            })
        })
        .catch(error => {
            console.error('Error fetching dog breeds:', error);
        });
})
