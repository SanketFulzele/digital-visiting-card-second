import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./thirdCard.css";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Modal } from '@mui/material';
import MetaInfo from '../components/MetaInfo/MetaInfo';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: "none",
  border: "none",
  p: 4,
};

const informationIcon = {
  color: "white",
  borderRadius: "50%",
  padding: "5px",
  backgroundColor: "#1259bc",
  fontSize: "30px",
  marginRight: "10px"
}



const ThirdCard = () => {
  const [path, setPath] = useState({});
  const [user, setUser] = useState();
  const [links, setLinks] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [userName, setUserName] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const url = `http://meripahchaan.in/admin/index.php/Master/getCard`;

  const Navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {

    const data = {
      "slug": id
    }

    const options = {
      method: "POST",
      headers: {
        'Content-type': "text/plain",
      },
      body: JSON.stringify(data)
    }


    fetch(url, options)
      .then(res => {
        res.json().then((result) => {
          if (result.success === 0) {
            Navigate("/error")
          } else {
            setPath(result.imagepath)
            setUser(result.data)
            setLinks(result.data.links)
            setDesignations(result.data.designations)
            setUserName(result.data.name)
          }
        })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>

     
      {user !== undefined ?
        <MetaInfo
          ogTitle={`${userName} | Meri Pahchaan `}
          ogDescription="Our Digital Business Card Platform Makes Designing A Card Simple, Convenient, And Reliable."
          ogImage={`${path}image/${user.image}`}
        />
        : ""}

        {user === undefined ? "" :
      <div className='card-content'>


        <div className="main-card-container">

          <div className="bg-img-container">
          </div>

          {user !== undefined ?
            <>

              <div className="person-img-container">
                <img src={`${path}image/${user.image}`} onClick={handleOpen} className='person-pic' alt="person-pic" />
              </div>

              <div className="person-name-container">
                <h1 className='person-name'> {user.name} </h1>
              </div>
            </>
            : ""}



          <div className="designationContainer">
            {designations !== undefined ?
              (designations.map((value) => {
                return (
                  <div>
                    <div className="designationBox" key={value.id}>
                      <span className='designationTitle'> {value.designation} -</span>
                      <span className='designationValue'>&nbsp; {value.description} </span>
                    </div>
                  </div>
                )
              })
              )
              : ""
            }
          </div>


          <div className="socialIconBox">
            {links !== undefined ? (
              links.map((value) => {
                return (
                  <div className="socialIconContainer" key={value.id}>
                    <a href={value.link} target="_blank" rel="noreferrer">
                      <img src={`${path}types/${value.image}`} className="socialIcons" alt='social-icon' />
                    </a>
                  </div>
                )
              })
            ) : ""}
          </div>






          {user === undefined ? " " : <>
            <div className="information-container">
              <div className="information-icon-box"><SmartphoneIcon sx={informationIcon} /> {user.mobile} </div>
              <div className="information-icon-box"><MailIcon sx={informationIcon} /> {user.email} </div>
              <div className="information-location-icon"> 
              <span><LocationOnIcon sx={informationIcon} /> </span>  
              
               <span> {user.address} </span>
                 </div>
            </div>
          </>}



          {/* modal jsx begins here */}

          {user === undefined ? " " : <>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img src={`${path}image/${user.image}`} className="modal-img" alt='profile-pic' />
              </Box>
            </Modal>

          </>}
          {/* modal jsx ends here */}





        </div>

      </div>
    }
    </>
  )
}

export default ThirdCard
