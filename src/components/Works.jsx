import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';

const Works = () => {
const [show, setShow] = useState(false);
const modalClose = () => setShow(false);
const modalShow = () => setShow(true);

return (
<div className='container translate_position'>
    <div className='row justify-content-md-center'>
        <div className='col-md-auto'>
            <div className='col-center'>
                <ul className='list-style-none d-flex my-3 col_list_ul'>
                    <li className='col-12 col-md-4'>
                        <div className='bg_theme_1'>
                            <h6 className='heading_h6 bold'>Step 1</h6>
                            <p className='p1'>Lorem ipsum dummy text generator over herer!!!</p>
                        </div>
                    </li>
                    <li className='col-12 col-md-4'>
                        <div className='bg_theme_1'>
                            <h6 className='heading_h6 bold'>Step 2</h6>
                            <p className='p1'>Lorem ipsum dummy text generator over herer!!!</p>
                        </div>
                    </li>
                    <li className='col-12 col-md-4'>
                        <div className='bg_theme_1'>
                           <h6 className='heading_h6 bold'>Step 3</h6>
                            <p className='p1'>Lorem ipsum dummy text generator over herer!!!</p>
                        </div>
                    </li>
                </ul>
                <div className='text-center'>
                    <button type='button' className='btn btn-themed text-white' onClick={modalShow}>Book
                        Apointment</button>
                </div>
            </div>
        </div>
    </div>

    <Modal show={show} onHide={modalClose}>
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         <form>
         <div className="row">
            <div className="col-12">
            <div className="mb-3">
                <label for="username" className="form-label">Email/Phone Number</label>
                <input type="text" id="username" className="form-control form-control-sm"
                placeholder="Enter Email/Phone No" />
            </div>
            </div>
            <div className="col-12">
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="Password" id="password" className="form-control form-control-sm"
                placeholder="loremipsum@mail.com" />
            </div>
            </div>
        </div>
             
         </form>
        </Modal.Body>

        <Modal.Footer>
            <div className='col-12'>
            <Button variant="secondary" className='btn btn_themed btn-sm w-100' onClick={modalClose}>Continue</Button>
            </div>
            
            <div className='d-flex justify-content-between col-12'>
                <a href='#' className='text_link'>Sign in with OTP</a>
                <a href='#' className='text_link'>Forgot Password</a>
            </div>
        </Modal.Footer>
    </Modal>
</div>

)
}

export default Works