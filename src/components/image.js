import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap'
import './styles/App.css'

const image = () => {
    const [img , setimg] = useState([])
  

    async function fetchMyAPI() {
      try{
      let response = await fetch('https://res.cloudinary.com/dcjsivxjw/image/list/profile.json')
      let data = await response.json()

      setimg(data.resources)
      }
        catch(err){
          console.log(err)
        }
    }
    useEffect(() => {
      fetchMyAPI();
}, []); 
         return (
                <div>
                <Container>
                      <Row>
               
                    {img.map(key => 
                      <Col md ="3" className = "image_render">
                      <img  src = {`https://res.cloudinary.com/dcjsivxjw/image/upload/w_200,h_200,c_scale/v${key.version}/${key.public_id}.jpg`}
                      alt = "ph"> 
                      </img>
                      </Col>
                      )}

                      test
                    
                    </Row>
                      </Container> 
                  </div>
                  );
         
  }


export default image;