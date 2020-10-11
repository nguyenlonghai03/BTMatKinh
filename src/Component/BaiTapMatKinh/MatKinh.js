import React, { Component } from "react";

export default class MatKinh extends Component {
  render() {
    let { matKinh, doiMauKinh } = this.props;
    return (
      <button
        className="btn btn-success"
        onClick={() => {
          doiMauKinh(matKinh);
        }}
      >
        <img src={matKinh.url} width={150} height={70} />
      </button>
    );
  }
}
