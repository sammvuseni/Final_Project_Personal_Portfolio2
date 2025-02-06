document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM is fully loaded!');
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('Smooth scrolling triggered!');
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});


  // Testimonials carousel
  let currentTestimonial = 0;
  const testimonials = [
    {
      text: "We really love your work. It looks neat and responsive. Very easy to use.",
      author: "Sipho Jefferson",
      role: "Admin, Samsung"
    },
    {
      text: "Sam's designs are modern and user-friendly. Highly recommended!",
      author: "Themba Khumalo",
      role: "CEO, Tech Solutions"
    },
    {
      text: "Great attention to detail and excellent communication skills.",
      author: "John Cele",
      role: "Manager, Creative Agency"
    }
  ];

  function showTestimonial(index) {
    const testimonialText = document.querySelector('.testimonials .fs-4');
    const testimonialAuthor = document.querySelector('.testimonials .fw-bold');

    testimonialText.textContent = testimonials[index].text;
    testimonialAuthor.innerHTML = `${testimonials[index].author} <span class="text-primary mx-1">/</span> ${testimonials[index].role}`;
  }

  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }

  showTestimonial(currentTestimonial);
  setInterval(nextTestimonial, 5000);

  // Update copyright year
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Lazy loading for images
  const images = document.querySelectorAll('img[data-src]');
  const options = {
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  }, options);

  images.forEach(img => observer.observe(img));


 