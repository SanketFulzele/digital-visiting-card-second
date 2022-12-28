import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./secondCard.css";
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import Typecomp from '../DigitalCard/Typecomp/Typecomp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import MetaInfo from '../components/MetaInfo/MetaInfo';

const BigIcon = {
  fontSize: "30px",
  backgroundColor: "brown",
  color: "white",
  borderRadius: "50%",
  padding: "4px"
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: "none",
  border: "none",
  p: 4,
};



const SecondCard = () => {

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

      <div className='card-box'>
        {user === undefined ? "" :
          <div className="card-container">

            <div className="card-top-box">
              <LocationOnIcon /> {user.address}
            </div>

            <div className="card-img-box"> </div>

            {user !== undefined ?
              <>
                <div className="user-img-box">

                  <img src={`${path}image/${user.image}`} className='user-pic' onClick={handleOpen} alt="user-pic" />
                  <div className="user-details-box">
                    <h1 className='big-text'> {user.name} </h1>
                  </div>
                </div>

                <div className="designation-container">
                  {designations !== undefined ?
                    (designations.map((value) => {
                      return (
                        <div>
                          <div className="designation-box" key={value.id}>
                            <span className='designation-mid-text'> {value.designation} -</span>
                            <span className='designation-text-small'>&nbsp; {value.description} </span>
                          </div>
                        </div>
                      )
                    })
                    )
                    : ""
                  }
                </div>


                <div className="info-icon-box">
                  <div className="info-icon-container">
                    <PhoneIcon sx={BigIcon} />
                    <div className="info-icon-text-box">
                      <h4 className='mid-text'>  &nbsp; Call   &nbsp; </h4>
                      <h4 className='text-small'>{user.mobile}</h4>
                    </div>
                  </div>
                  <div className="info-icon-container">
                    <MailIcon sx={BigIcon} />
                    <div className="info-icon-text-box">
                      <h4 className='mid-text'> &nbsp; Mail   &nbsp; </h4>
                      <h4 className='text-small'> {user.email}</h4>
                    </div>
                  </div>
                </div>

              </>
              : ""}


            <div className="type-component">
              <Typecomp />
            </div>


            <div className="social-icon-box">
              {links !== undefined ? (
                links.map((value) => {
                  return (
                    <div className="social-icon-container" key={value.id}>
                      <a href={value.link} target="_blank" rel="noreferrer">
                        <img src={`${path}types/${value.image}`} className="social-icon" alt='social-icon' />
                      </a>
                    </div>
                  )
                })
              ) : ""}
            </div>

            <div className="card-bottom-container">
            <div className="card-bottom-box"></div>
            </div>

            {/* modal jsx begins here */}
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
            {/* modal jsx ends here */}

          </div>
        }
      </div>
    </>
  )
}

export default SecondCard
