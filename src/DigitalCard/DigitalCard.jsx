import { useEffect, useState } from "react";
import "./digitalCard.css";
import Typecomp from "./Typecomp/Typecomp";
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MetaInfo from "../components/MetaInfo/MetaInfo";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: "none",
    border: "none",
    p: 4,
};


const DigitalCard = () => {

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

    // const img = ` http://meripahchaan.in/admin/uploads/image/6311_dev.jpg`


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
                <div className="content">

                    <div className="profileImgContainer">
                        <img src="/images/bgOne.jpg" className="bg-img" alt="bg-img" />
                    </div>

                    <div className="shadow-box">

                        <div className="main-container">

                            {user !== undefined ?
                                <>
                                    <div className="flex avatar-box">
                                        <img className='person-img'
                                            src={`${path}image/${user.image}`} alt='profile-pic'
                                            onClick={handleOpen} />
                                    </div>

                                    <h3 className='text-color heading '> {user.name} </h3>
                                </>
                                : ""}

                            <div className="roles-container">
                                {designations !== undefined ?
                                    (designations.map((value) => {
                                        return (
                                            <div>
                                                <div className="roles-box" key={value.id}>
                                                    <span className='text-color mid-heading'> {value.designation} -</span>
                                                    <span className='small-text'>{value.description}</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                    )
                                    : ""
                                }
                            </div>
                            {user !== undefined ?
                                <div key={user.id} className="user-contacts-container">
                                    <div className="user-contacts-box">
                                        <span className='text-color mid-heading'>
                                            <EmailIcon sx={{ transform: { xs: "translateY(8px)", sm: "translateY(5px)" }, }} /> </span>
                                        <span className='small-text'>{user.email}</span>
                                    </div>
                                    <div className="user-contacts-box">
                                        <span className='text-color mid-heading'>
                                            <PhoneIcon sx={{ transform: { xs: "translateY(8px)", sm: "translateY(5px)" }, }} /> </span>
                                        <span className='small-text'>{user.mobile}</span>
                                    </div>
                                </div>
                                : ""}

                            <div className='flex'>
                                <div className="icons-container">
                                
                                    <div className="typewriter-box">
                                        <Typecomp />
                                    </div>

                                    <div className="icons-row">

                                        {links !== undefined ? (
                                            links.map((value) => {
                                                return (
                                                    <div className="icon-box" key={value.id}>
                                                        <a href={value.link} target="_blank" rel="noreferrer">
                                                            <img src={`${path}types/${value.image}`} className="socialIcon" alt='social-icon' />
                                                        </a>
                                                    </div>
                                                )
                                            })
                                        ) : ""}


                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="btn-box">
                            <button className="button downloadBtn">
                                Download Profile
                                <div className="button__horizontal"></div>
                                <div className="button__vertical"></div>
                            </button>

                            <button className="button contactBtn">
                                Save Contact
                                <div className="button__horizontal"></div>
                                <div className="button__vertical"></div>
                            </button>
                        </div>

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
        </>
    )
}

export default DigitalCard
