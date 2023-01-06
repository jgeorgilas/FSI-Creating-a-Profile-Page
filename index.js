
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append(' Fo-Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let dogDescription = document.createElement('h3')
dogDescription.textContent = 'Description:'
dogDetails.append(dogDescription)

let doginfo = document.createElement('p')
doginfo.textContent = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals'
dogDetails.append(doginfo)

let feedingtime = document.createElement("h3")
feedingtime.textContent = "Feeding Times:"
dogDetails.append(feedingtime)

let list = document.createElement('ul')

let breakfast = document.createElement('li')
breakfast.textContent = '9:00 am'
list.append(breakfast)

let lunch = document.createElement('li')
lunch.textContent = '12:00 pm'
list.append(lunch)

let dinner = document.createElement('li')
dinner.textContent = '5:00pm'
list.append(dinner)

dogDetails.append(list)
