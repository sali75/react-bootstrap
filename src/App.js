import React from 'react';
import './App.css';

function App() {
  return (
      <div class="bg-primary">
        <div id="main-header" class="">
          <div class="row no-gutters">
            <div class="col-lg-4 col-md-5">
              <div class="bg-danger wth"/>
            </div>
            <div class="col-lg-8 col-md-7">
              <div class="d-flex flex-column">
                <div class="p-5 bg-dark text-white">
                  <div class="name d-flex flex-row justify-content-between align-items-center">
                    <h1 class="display-4">John Doe</h1>
                    <div><i class="fa fa-twitter"></i></div>
                    <div><i class="fa fa-facebook"></i></div>
                    <div><i class="fa fa-instagram"></i></div>
                    <div><i class="fa fa-github"></i></div>
                  </div>
                </div>

                <div class="p-4 bg-black">
                  Experienced Full Stack Web Developer
                </div>

                <div>
                  <div class="d-flex flex-row text-white align-items-stretch text-center">
                    <div class="port-item p-4 bg-primary" data-toggle="collapse" data-target="#home">
                      <i class="fa fa-home d-block"></i> Home
                    </div>
                    <div class="port-item p-4 bg-success" data-toggle="collapse" data-target="#resume">
                      <i class="fa fa-graduation-cap d-block"></i> Resume
                    </div>
                    <div class="port-item p-4 bg-warning" data-toggle="collapse" data-target="#work">
                      <i class="fa fa-folder-open d-block"></i> Work
                    </div>
                    <div class="port-item p-4 bg-danger" data-toggle="collapse" data-target="#contact">
                      <i class="fa fa-envelope d-block"></i> Contact
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default App;
