import React from "react";

class PortfolioModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
        debugger
    }

    showModal = e => {
        this.setState({show: true});
      };

    render() {
    return <div>Hello Modal
        <button  onClick={e => {
              this.showModal();
         }}
          > show Modal </button>
    </div>;
    }
}

export default PortfolioModal;