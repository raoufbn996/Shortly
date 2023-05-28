// const btn = document.getElementById('menu-btn')
// const menu = document.getElementById('menu')

// const input = document.getElementById('link-input')
// const linkForm = document.getElementById('link-form')
// const errMsg = document.getElementById('err-msg')

// btn.addEventListener('click', navToggle)
// linkForm.addEventListener('submit', formSubmit)

// // Toggle Mobile Menu
// function navToggle() {
//   btn.classList.toggle('open')
//   menu.classList.toggle('flex')
//   menu.classList.toggle('hidden')
// }

// // Validate a URL
// function validURL(str) {
//   var pattern = new RegExp(
//     '^(https?:\\/\\/)?' + // protocol
//       '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
//       '((\\d{1,3}\\.){3}\\d{1,3}))' +
//       '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
//       '(\\?[;&a-z\\d%_.~+=-]*)?' +
//       '(\\#[-a-z\\d_]*)?$',
//     'i'
//   )
//   return !!pattern.test(str)
// }

// function formSubmit(e) {
//   e.preventDefault()

//   if (input.value === '') {
//     errMsg.innerHTML = 'Please enter something'
//     input.classList.add('border-red')
//   } else if (!validURL(input.value)) {
//     errMsg.innerHTML = 'Please enter a valid URL'
//     input.classList.add('border-red')
//   } else {
//     errMsg.innerHTML = ''
//     input.classList.remove('border-red')
//     alert('Success')
//   }
// }

const input = document.getElementById('link-input');
const errmsg = document.getElementById('err-msg');
const linkForm = document.getElementById('link-form');


linkForm.addEventListener('submit', formSubmit)



function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}


function formSubmit(e) {
e.preventDefault();

if (input.value === ''){
errmsg.innerHTML= 'Please enter a link'
input.classList.add('border-red')
} else if (!validURL(input.value)){
errmsg.innerHTML='Please enter a valid url'
input.classList.add('border-red')
}else{
errmsg.innerHTML= ''
input.classList.remove('border-red');
alert('Success');
input.classList.add('border-green-500')

}
}



const btnmobilee = document.getElementById("btn-mobilee");
const menumobilee = document.getElementById("menu-mobilee");

btnmobilee.addEventListener("click",navTogglee);

function navTogglee(){
btnmobilee.classList.toggle("openn");
menumobilee.classList.toggle("hidden");
// menumobilee.classList.toggle("top-4");
// menumobilee.classList.remove("-top-40");


}





