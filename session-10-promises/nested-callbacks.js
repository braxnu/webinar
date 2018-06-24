button.on('click', function () {
  showLoadingIcon(function () {
    playLoadingSound(function () {
      requestEmails(function () {
        hideLoadingIcon(function () {
          updateMessageList(function () {
            if (newMessages.length) {
              playAlarm(function () {
                stopPlayingAlarm()
              })
            }
          })
        })
      })
    })
  })
})

button.on('click', showEmail)
button.on('click', sendLog)

fetchEmailFromServer(showEmail)
fetchEmailFromServer(sendLog)

fetchEmailFromServer(function() {
  showEmail()
  sendLog()
  showIcon()
})

button.on('click', function () {
  showEmail()
  sendLog()
})
