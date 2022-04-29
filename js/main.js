'use strict';


function main() {
  const mobileNavControl = document.getElementById('mobile-nav-control');
  const mobileNavControlLabel = document.querySelector('#mobile-nav-control ~ label');
  const mobileNavList = document.querySelector('nav > ul');

  mobileNavControl.addEventListener('change', event => {
    // mobileNavControlLabel.innerHTML = this.checked ? 'Menu' : 'Close';
    mobileNavControlLabel.innerHTML = mobileNavControl.checked ? 'Menu' : 'Close';
    // this.ariaChecked =! this.ariaChecked
    mobileNavList.classList.toggle('toggled');
    console.log('hi');
    console.log(mobileNavControl.checked);
  });
}


window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  main();
});
