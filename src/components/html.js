import React from "react";

class About extends React.Component {
  state = {
    page: null
  };

  

  componentDidMount() {
    fetch("landing/about.html")
      .then(result => {
        return result.text();
      })
      .then(page => {
        this.setState(
          {
            page: { __html: page }
          },
          () => {
            //window.$.getScript("assets/js/smoothScroll.js");
          }
        );
      });


  }
  render() {
    const { page } = this.state;
    return (
      <div>
        
        <div
          dangerouslySetInnerHTML={page && page}
        />

        {      console.log(this.state.page)
}
      </div>
    );
  }
}

export default About;