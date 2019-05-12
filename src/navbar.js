<!-- navbar -->  
 <nav class="navbar navbar-expand-lg fixed-top ">  
 <a class="navbar-brand" href="#">Home</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">  
 <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse " id="navbarSupportedContent">     <ul class="navbar-nav mr-4">
 <li class="nav-item">
     <a class="nav-link" data-value="about" href="#">About</a>        </li>  
<li class="nav-item">
    <a class="nav-link " data-value="portfolio"href="#">Portfolio</a>    
 </li>
 <li class="nav-item"> 
    <a class="nav-link " data-value="blog" href="#">Blog</a>         </li>   
<li class="nav-item">  
   <a class="nav-link " data-value="team" href="#">         Team</a>       </li>  
<li class="nav-item"> 
 <a class="nav-link " data-value="contact" href="#">Contact</a>       </li> 
</ul> 
</div></nav>
https://medium.freecodecamp.org/learn-bootstrap-4-in-30-minute-by-building-a-landing-page-website-guide-for-beginners-f64e03833f33

.navbar{ background:#F97300;}
.nav-link , .navbar-brand{ color: #f4f4f4; cursor: pointer;}
.nav-link{ margin-right: 1em !important;}
.nav-link:hover{ background: #f4f4f4; color: #f97300; }
.navbar-collapse{ justify-content: flex-end;}
.navbar-toggler{  background:#fff !important;}

.navbar-collapse{
 justify-content: flex-end;
}
                
.bg-dark{
background-color:#343a40!important
}
.bg-primary{
background-color:#007bff!important
}
                
                
                
                
                
                
  <div class="row">
   <div class="col-lg-4 col-md-4 col-sm-12">
    <img src="images/team-3.jpg" class="img-fluid">
    <span class="text-justify">S.Web Developer</span>
   </div>
   <div class="col-lg-8 col-md-8 col-sm-12 desc">
     
    <h3>D.John</h3>
    <p>
       ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
   </div>
  </div>
                
                
                
                
                @font-face {
  font-family: 'MyFont';
  src: local('MyFont'), url(./fonts/MyFont.woff) format('woff');
}
