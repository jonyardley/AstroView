import React, {Component} from "react";
import Sidebar from "../sidebar/sidebar";
import Processing from "../process/process";


class Main extends Component {
  render(){
    return (
      <div className="main">
        <h1>Hello World!</h1>
        {/*<Sidebar />*/}
        {/*{ this.props.processing && <Processing /> }*/}
      </div>
    );
  }
}

export default Main;
