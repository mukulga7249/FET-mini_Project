$(document).ready(() => {
  $(".header").html(`
  <div class="container header-cont">
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="#" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none header-logo">
        <img src="../Images/BookMyShow.jpg" alt="">
      </a>

      <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 search-box">
        <input type="search" class="form-control form-control-dark" placeholder="Search for Movies, Events, Plays, Sports and Activities" aria-label="Search">
      </form>
      <div class="">
        <span class="">Pune</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/TR/SVG2">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.08786 6.08783C4.24407 5.93162 4.49734 5.93162 4.65355 6.08783L7.8707 9.30498L11.0879 6.08783C11.2441 5.93162 11.4973 5.93162 11.6535 6.08783C11.8098 6.24404 11.8098 6.4973 11.6535 6.65351L8.22426 10.0828C8.029 10.2781 7.71241 10.2781 7.51715 10.0828L4.08786 6.65351C3.93165 6.4973 3.93165 6.24404 4.08786 6.08783Z" fill="#1A1A1A"></path>
        </svg>
      </div>
      <div class="">Sign in</div>
      <div class="">
        <svg width="22px" height="14px" xmlns="http://www.w3.org/2000/svg">
          <title>Hamburger Menu</title>
          <g fill-rule="nonzero" stroke="#ffffff" stroke-width="1.5" fill="none" stroke-linecap="round">
            <path d="M1.611 1h20.614M1.611 7h20.614M1.611 13h20.614"></path>
          </g>
        </svg>
      </div>
    </div>
    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 ml-2 justify-content-center mb-md-0">
      <li><a href="#" class="nav-link px-2 text-secondary">Movies</a></li>
      <li><a href="#" class="nav-link px-2 text-white">Stream</a></li>
      <li><a href="#" class="nav-link px-2 text-white">Events</a></li>
      <li><a href="#" class="nav-link px-2 text-white">Plays</a></li>
      <li><a href="#" class="nav-link px-2 text-white">Sports</a></li>
      <li><a href="#" class="nav-link px-2 text-white">Activities</a></li>
    </ul>
  </div>
  `);
  $(".footer").html(`
  <div class="d-flex flex-column p-2 bd-highlight">
    <div class="footer-logo-cont">
      <div class="footer-hr"></div>
      <a href="/" class="">
        <img alt="bookmyshow" src="../IMAGES/logo.png">
      </a>
      <div class="footer-hr"></div>
    </div>
    <div class="d-flex flex-row social-logo">
      <a href="https://www.facebook.com/BookMyShowIN" class="footer-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 98 98">
          <path d="M48 .5C21.8.5.5 21.8.5 48S21.8 95.5 48 95.5 95.5 74.2 95.5 48 74.2.5 48 .5zm11.8 49.2h-7.7v27.5H40.6V49.7h-5.4V40h5.4v-6.3c0-4.5 2.1-11.6 11.6-11.6h8.5v9.4h-6.2c-1 0-2.4.5-2.4 2.7v5.7h8.7l-1 9.8z"></path>
        </svg>
        <svg class="bi" width="32" height="32" fill="currentColor">
          <use xlink:href="bootstrap-icons.svg#heart-fill"/>
        </svg>
      </a>
      <a href="https://twitter.com/BookMyShow/" class="footer-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 98 98">
          <path d="M58.7145 66.4634L48.4787 52.2823L51.9131 48.6281L64.7865 66.4634H58.7145Z"></path>
          <path d="M39.4752 31.396L49.0656 44.6831L45.6362 48.3442L33.4032 31.396H39.4752Z"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M49 96.5C75.2335 96.5 96.5 75.2335 96.5 49C96.5 22.7665 75.2335 1.5 49 1.5C22.7665 1.5 1.5 22.7665 1.5 49C1.5 75.2335 22.7665 96.5 49 96.5ZM56.2341 71.3042L45.1181 55.8582L30.601 71.3046H24.1289L42.2851 51.9217L24.1297 26.6943L41.9755 26.6948L52.3388 41.1888L65.9154 26.695L72.5268 26.6948L55.1758 45.1565L73.8715 71.3042H56.2341Z"></path>
        </svg>
      </a>
      <a href="https://www.instagram.com/bookmyshowin/" class="footer-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102">
          <path d="M50 59a8.96 8.96 0 0 0 7.3-14.2 8.9 8.9 0 0 0-14.6 0A8.96 8.96 0 0 0 50 59zm19.7-20v-8.7H61V39z"></path>
          <path d="M50 5C25.2 5 5 25.2 5 50s20.2 45 45 45 45-20.2 45-45S74.8 5 50 5zm25.6 39.8v20.9c0 5.4-4.4 9.9-9.9 9.9H34.3c-5.4 0-9.9-4.4-9.9-9.9V34.3c0-5.4 4.4-9.9 9.9-9.9h31.4c5.4 0 9.9 4.4 9.9 9.9v10.5z"></path>
          <path d="M64.1 50c0 7.7-6.2 14-14 14a13.98 13.98 0 0 1-13-19.2h-7.6v20.9c0 2.7 2.2 4.9 4.9 4.9h31.4c2.7 0 4.9-2.2 4.9-4.9V44.8H63c.7 1.5 1.1 3.4 1.1 5.2z"></path>
        </svg>
      </a>
      <a href="https://www.youtube.com/user/BookMyShow/featured" class="footer-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102">
          <path d="M43.6 57.7c5.3-2.7 10.5-5.4 15.7-8.2-5.3-2.8-10.5-5.5-15.7-8.2v16.4z"></path>
          <path d="M50 2.5C23.8 2.5 2.5 23.8 2.5 50S23.8 97.5 50 97.5 97.5 76.2 97.5 50 76.2 2.5 50 2.5zm23.9 59.2c-.6 2.6-2.8 4.6-5.4 4.9-6.1.7-12.4.7-18.5.7-6.2 0-12.4 0-18.5-.7-2.6-.3-4.7-2.2-5.4-4.9-.9-3.8-.9-7.8-.9-11.7s0-8 .9-11.7c.6-2.6 2.8-4.6 5.4-4.9 6.1-.7 12.4-.7 18.5-.7 6.2 0 12.4 0 18.5.7 2.6.3 4.7 2.2 5.4 4.9.9 3.8.9 7.8.9 11.7s0 8-.9 11.7z"></path>
        </svg>
      </a>
      <a href="https://www.linkedin.com/company/bookmyshow/" class="footer-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102">
          <path d="M50 2.5C23.8 2.5 2.5 23.8 2.5 50S23.8 97.5 50 97.5 97.5 76.2 97.5 50 76.2 2.5 50 2.5zm-7.8 63.9h-8.6V36.3h8.6v30.1zm-4-32c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm34.1 32h-8.6V47.8c0-2.2-.6-3.7-3.3-3.7-4.4 0-5.3 3.7-5.3 3.7v18.6h-8.6V36.3h8.6v2.9c1.2-.9 4.3-2.9 8.6-2.9 2.8 0 8.6 1.7 8.6 11.7v18.4z"></path>
        </svg>
      </a>
    </div>
    <div class="footer-copyright">Copyright 2023 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.<br>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</div>
  </div>
  `);
});