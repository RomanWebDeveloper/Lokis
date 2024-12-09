  
  /* Nav*/

  const toggleButton = document.getElementsByClassName('toggle-button')[0]
      const navbarLinks = document.getElementsByClassName('navbar-list')[0]

      toggleButton.addEventListener("click", () => {
      toggleButton.classList.toggle("active");
      navbarLinks.classList.toggle("active");
      })

      document.querySelectorAll(".navbar-list").forEach(n => n.addEventListener("click", () => {
      toggleButton.classList.remove("active");
      navbarLinks.classList.remove("active");
    }))


    /* Modal */

    const modal = document.querySelector("#my-modal");
    const modalBtn = document.querySelector("#modal-btn");
    const closeBtn = document.querySelector(".close");
    
    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsiteClick);
    
    function openModal() {
      modal.style.display = 'block';
    }
    
    function closeModal() {
      modal.style.display = 'none';
    }
    
    function outsiteClick(e) {
      if(e.target == modal) {
        modal.style.display = 'none';
      }
    }