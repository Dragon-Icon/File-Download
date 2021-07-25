function download() {
    const textarea = document.getElementById('text')
    const title = document.getElementById("word")
    const errorMessage = document.querySelector('.error');
    const container = document.querySelector('.container');
    const submit = document.querySelector('.submit')
    
    if (title.length >= 15 && title.length <= 3){
      let element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textarea.value));
      element.setAttribute('download', title.value);

    
    
      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();
    
      document.body.removeChild(element);
    }
   else{
      
      title.style = 'top: 13rem;'
      submit.style = 'top: 34.1rem;'
      textarea.style = 'top: 17rem;'
      container.style = 'top:6rem; height: 29rem;'
      errorMessage.innerHTML = 'Title must be between 3 to 15.'
      errorMessage.style.color = '#d10404'
   } 
  }

  window.addEventListener('keypress', enter, false)
    function enter(e){
      if(e.keyCode == "13"){
        download()
      }
    }