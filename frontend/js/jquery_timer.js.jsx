import $ from 'jquery';

let container = null;
let timer = null;
let totalCount = 0;


function updateCount() {
  console.log('Updating count to', totalCount);
  $('#jquery-timer').find('.count').text(totalCount);
}


function startTimer() {
  container.find('.btn-success').hide();
  container.find('.btn-warning').show();
  timer = setInterval(() => {
    totalCount++;
    updateCount();
  }, 1000);
}


function stopTimer() {
  container.find('.btn-warning').hide();
  container.find('.btn-success').show();
  clearInterval(timer);
}


function resetTimer() {
  stopTimer();
  totalCount = 0;
  updateCount();
}


export function initJqueryTimer() {
  container = $('#jquery-timer');
  container.find('.btn-success').click(startTimer);
  container.find('.btn-warning').click(stopTimer);
  container.find('.btn-danger').click(resetTimer);
}
