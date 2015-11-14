import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";
import Sidebar from "../sidebar/sidebar";
import Processing from "../process/process";


class Main extends Component {
  render(){
    return (
      <div className="main">
        <Sidebar />
        {this.props.appState.processing && <Processing />}
      </div>
    );
  }
}

export default branch(Main, {
  cursors: {
    appState: ['appState']
  }
});
