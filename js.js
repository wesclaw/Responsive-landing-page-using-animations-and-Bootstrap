const modalBtn = document.getElementById('modalBtn'); ///modal btn
const popUp = document.querySelector('.pop-up'); ///the modal
const radios = document.querySelectorAll('.radio'); ///input radio btn
const pledgeBtn = document.getElementById('pledgeBtn'); ///pledge btn 
const close = document.querySelector('#close'); ///close x on modal

modalBtn.addEventListener('click', btn=>{
  popUp.style = 'display: flex';
});

close.addEventListener('click', close=>{
  popUp.style = 'display: none';
});

////click out of window

window.addEventListener('click', clickOut)

function clickOut(e){
  if(e.target == popUp){
    popUp.style.display = 'none'
  }
}

radios.forEach (radio=>{
  radio.addEventListener('click', (e)=>{
    const style = e.currentTarget.classList;
    if(style.contains('radio')){
      pledgeBtn.style = 'display: block'
    }
  })
});