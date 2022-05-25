import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Image } from 'react-bootstrap'
// jumbotron page

class Main extends Component {
  render () {
    return (
      <>
        <main>

          <div className="container py-4">

            <div className="p-5 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Welcome to Ghibli!</h1>

                <Image src='../public/carousel/Banner3.jpeg'></Image>
                <p className="col-md-8 fs-4">Create a fun profile or look through your favorite films!</p>
                <button className="btn btn-primary btn-lg" type="button">See Films</button>
              </div>
            </div>

            <div className="row align-items-md-stretch">
              <div className="col-md-6">
                <div className="h-100 p-5 text-white bg-dark rounded-3">
                  <h2>Create a Profile</h2>
                  <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                  <button className="btn btn-outline-light" type="button">Example button</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="h-100 p-5 bg-light border rounded-3">
                  <h2>Add borders</h2>
                  <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as weve adjusted the alignment and sizing of both columns content for equal-height.</p>
                  <button className="btn btn-outline-secondary" type="button">Example button</button>
                </div>
              </div>
            </div>

            <footer className="pt-3 mt-4 text-muted border-top">
      &copy; 2021
            </footer>
          </div>
        </main>

      </>
    )
  }
}

export default withRouter(Main)
