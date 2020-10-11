import React, { Component } from "react";
import MatKinh from "./MatKinh";
import dataMK from "./dataMK.json";

export default class BaiTapMatKinh extends Component {
  state = {
    sanPham: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "../img/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderMatKinh = () => {
    return dataMK.map((matKinh, index) => {
      return (
        <div className="col-2 m-1" key={index}>
          <MatKinh matKinh={matKinh} doiMauKinh={this.doiMauKinh} />
        </div>
      );
    });
  };

  doiMauKinh = (matKinh) => {
    this.setState({
      sanPham: {
        id: matKinh.id,
        price: matKinh.price,
        name: matKinh.name,
        url: matKinh.url,
        desc: matKinh.desc,
      },
    });
  };

  render() {
    return (
      <div className="container">
        <h2 className="text-center">TRY GLASSES APP ONLINE</h2>
        <div className="row">
          <div className="col-6">
            <div className="picture">
              <img
                src="../img/model.jpg"
                width={300}
                height={400}
                alt="hinh anh"
              />

              <img className="picture__glasses" src={this.state.sanPham.url} />
              <div className="picture__content">
                <h3>{this.state.sanPham.name}</h3>
                <h4>{this.state.sanPham.price} $</h4>
                <p>{this.state.sanPham.desc}</p>
              </div>
            </div>
          </div>

          <div className="col-6 text-right">
            <img src="../img/model.jpg" width={300} height={400} />
          </div>
        </div>

        <div className="row my-3">{this.renderMatKinh()}</div>
      </div>
    );
  }
}
