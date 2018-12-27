const shareBtn = document.querySelector('.share-btn');
const url = window.location.href;
const ogBtnContent = shareBtn.textContent;

/*shareBtn.addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title: 'My awesome post!',
      text: 'This post may or may not contain the answer to the universe',
      url: window.location.href
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(err => {
      console.log(`Couldn't share because of`, err.message);
    });
  } else {
    console.log('web share not supported');
    console.log(url);
  }
});*/


shareBtn.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        url
      }).then(() => {
        showMessage(shareBtn, 'Thanks! 😄');
      })
      .catch(err => {
        showMessage(shareBtn, `Couldn't share 🙁`);
      });
    } else {
      showMessage(shareBtn, 'Not supported 🙅‍');
    }
  });
  
  function showMessage(element, msg) {
    element.textContent = msg;
    setTimeout(() => {
      element.textContent = ogBtnContent;
    }, 2000);
  }