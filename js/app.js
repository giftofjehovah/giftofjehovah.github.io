var icons = document.getElementsByClassName('fa')
for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener('mouseover', function (event) {
    console.log(event.target.id)
    var placeholder = document.getElementById('social-placeholder')
    console.log(placeholder)
  })
}
