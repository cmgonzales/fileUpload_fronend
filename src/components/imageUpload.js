import React, { Component } from "react";
import { API_URL } from "./config";
import Button from "./Button";
import { SectionsContainer, Section } from "react-fullpage";
import "./styles/imageUpload.css";

class imageUpload extends Component {
  state = {
    images: []
  };

  onChange = e => {
    const files = Array.from(e.target.files);

    const fs = new FormData();

    files.forEach((file, i) => {
      fs.append(i, file);
    });

    fetch(`${API_URL}/imageupload`, {
      method: "POST",
      body: fs
    })
      .then(res => res.json())
      .then(images => {
        this.setState({
          images
        });
      });
  };

  render() {
    return (
      <SectionsContainer>
        <Section className="img">
          <div className="image">
            <div className="image_upload">
              <h3 className="text">Please select an image</h3>
              <Button onChange={this.onChange} />
            </div>
          </div>
        </Section>
      </SectionsContainer>
    );
  }
}
export default imageUpload;
