const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu =document.getElementById('nav-menu')
    //her bir nav__link'e tıkladığımızda show-menü sınıfını kaldırıyoruz
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))






const panels=document.querySelectorAll(".panel");   /*tüm panellere erişmek için yazılır*/

panels.forEach( panel=>{                       /* forEach paneller içinde gezmek için kullanılır*/
    panel.addEventListener("click",() =>{
        
        removeActive();
        panel.classList.add("active")
    })
})

function removeActive() {
    panels.forEach(panel =>{
        panel.classList.remove("active");
    } )
}


const contactForm= document.getElementById('contact-form'),
   contactName = document.getElementById('contact-name'),
   contactEmail = document.getElementById('contact-email'),
   contactProject = document.getElementById('contact-project'),
   contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
   e.preventDefault()

   //alanın bir değeri olup olmadığını kontrol edin
   if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
       //renk ekleme ve kaldırma
       contactMessage.classList.remove('color-blue')
       contactMessage.classList.add('color-red')

       //mesaj göster
       contactMessage.textContent= ''
   }else{
    emailjs.sendForm('service_u4125ld','template_xkc0rvh','#contact-form','Ej1BYm8eLh1dppZ6B')
      .then(() =>{
        //mesajı ve rengi göster
        contactMessage.classList.add('color-blue')
        contactMessage.textContent = 'Message sent'

        // Remove message after five seconds
        setTimeout(()=>{
            contactMessage.textContent = ''
        } ,5000)
      }, (error) => {
        alert('OOPS! SURE DOLDU...', error)
      })

      //mesaj gönderince temizleme 
      contactName.value =''
      contactEmail.value =''
      contactProject.value =''
   }
   contactForm.addEventListener('submit',sendEmail);
}
contactForm.addEventListener('submit',sendEmail);




const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


