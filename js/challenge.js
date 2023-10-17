document.addEventListener('DOMContentLoaded', function () {
    const counter = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const likeButton = document.getElementById('heart');
    const likesList = document.querySelector('.likes');
    const pauseButton = document.getElementById('pause');
    const restartButton = document.getElementById('restart');
    const commentInput = document.getElementById('comment-input');
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('list');
  
    let count = 0;
    let timer = setInterval(incrementCounter, 1000);
    let isPaused = false;
    let likes = {};
  
    function incrementCounter() {
      count++;
      counter.innerText = count;
    }
  
    function pauseCounter() {
      if (isPaused) {
        isPaused = false;
        timer = setInterval(incrementCounter, 1000);
        pauseButton.innerText = 'pause';
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
      } else {
        isPaused = true;
        clearInterval(timer);
        pauseButton.innerText = 'resume';
        plusButton.disabled = true;
        minusButton.disabled = true;
        likeButton.disabled = true;
      }
    }
  
    plusButton.addEventListener('click', function () {
      count++;
      counter.innerText = count;
    });
  
    minusButton.addEventListener('click', function () {
      count--;
      counter.innerText = count;
    });
  
    likeButton.addEventListener('click', function () {
      likes[count] = likes[count] ? likes[count] + 1 : 1;
      const like = document.createElement('li');
      like.innerText = `${count} has ${likes[count]} likes`;
      likesList.appendChild(like);
    });
  
    pauseButton.addEventListener('click', pauseCounter);
  
    restartButton.addEventListener('click', function () {
      count = 0;
      counter.innerText = count;
      if (isPaused) {
        pauseCounter();
      }
    });
  
    commentForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const comment = document.createElement('p');
      comment.innerText = commentInput.value;
      commentsList.appendChild(comment);
      commentInput.value = '';
    });
  });
  