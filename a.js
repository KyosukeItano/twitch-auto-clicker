const target = document.getElementsByClassName(".chat-input__buttons-container")
const buttonContainer = document.getElementsByClassName("GTGMR");
const aa = document.getElementsByTagName('main')
console.log(target.length,buttonContainer)
console.log('ok1')
window.addEventListener("load", () => {
    console.log('ok2')
    console.log(document.getElementsByClassName(".jGqafg"))
  if (!document.getElementsByClassName(".jGqafg") == null || undefined) {
    clickButton();
    console.log('ok3')
  }
});

const clickPointBtn = new MutationObserver((records) => {
  clickButton();
  console.log('ok4')
});

clickPointBtn.observe(target, {
  childList: true,
  subtree: true,
});

function clickButton() {
    console.log('ok5')
  document.getElementsByClassName(".jGqsfG").click();

  console.log('ok6')
}
