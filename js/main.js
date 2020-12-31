// Initial count
let count = 0;

// select value and buttons
const countValue = document.querySelector("#count");
const btn = document.querySelectorAll(".btn");

btn.forEach((item) => {
  item.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;

    if(styles.contains('decrease')){
      count--;
    } else if(styles.contains('increase')){
      count++;
    } else if(styles.contains('reset')){
      count = 0 ;
    }
    if(count > 0){
      countValue.style.color = "#0f0"
    }
    if(count < 0){
      countValue.style.color = "#f00"
    }
    if(count === 0){
      countValue.style.color = "#aaa"
    }
    countValue.textContent = count;
  })
})