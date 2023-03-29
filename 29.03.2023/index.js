const button = document.querySelector('.button')
const result = document.querySelector('.result')


button.addEventListener(
  "click",
  function () {

    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position)
        // https://www.openstreetmap.org/#map=8/62.194/-6.860
        const link = document.createElement('a')


        link.href = `https://www.openstreetmap.org/#map=8/${position.coords.latitude}/${position.coords.longitude}`
        link.target = '_blank'

        link.textContent = 'My position on map'

        result.append(link)
      }
    )
  }
)
