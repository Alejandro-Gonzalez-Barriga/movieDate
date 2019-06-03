import React from 'react';



class StarComp extends React.Component {

  var demoForm  = document.querySelector('.demoForm');
  demoForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var demoInput = document.querySelector('input[name="rate"]:checked');
    if (!demoInput) {
      console.log('пуста капуста...');
    } else {
      console.log(demoInput.value);
    }
  }, true);




  render() {
    return (


      <div>
        <h1>Hasta La Vista Baby!</h1>
      </div>
    );
  }
  }
export default LoggedOut;
