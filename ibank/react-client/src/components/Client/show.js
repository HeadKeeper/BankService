import React, {Component} from "react";

class EntitySingle extends Component {

  showObject(data) {
    let code = "";
    for (let x in data) {
      code += x + ": " + data[x] + "\n";
    }

    return code;
  }


  render() {
    return (
      <div className="container">
        <pre>
          {this.showObject(this.props.entity)}
        </pre>
      </div>
    );
  }
}

export const ClientShowComponent = EntitySingle;
