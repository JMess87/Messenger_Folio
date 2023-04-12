import React from 'react';
import GT from '../../images/GT.jpg';
import AA from '../../images/AA.jpg';
import ET from '../../images/ET.jpg';
import JATE from '../../images/JATE.png';
import ECOMM from '../../images/ECOMM.gif';
import ReadMe from '../../images/ReadMe.png';

export default function Portfolio() {
    return (
        <div>
            <h1 bs>Projects Portfolio</h1>
            <p>


                Below you will find connections to multiple coding projects that I have completed while in the GW Coding Bootcamp.

            </p>
{/* ROW 1 */}
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">E-Commerce Back End</h5>
                            <p className="card-text">
                            <img src={ECOMM}  width={300} height={300} class="rounded mx-auto d-block"/>
                            </p>
                            <a href="https://github.com/JMess87/ECommerce.git" className="btn btn-primary">
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Green Thumb (Project)</h5>
                            <p className="card-text">
                                
                                <img src={GT}  width={300} height={300} class="rounded mx-auto d-block"/>
                                
                                
                            </p>
                            <a href="https://github.com/JMess87/GreenThumb.git" className="btn btn-primary">
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* ROW 2 */}
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Animal Amigos (Project)</h5>
                            <p className="card-text">
                            <img src={AA}  width={300} height={300} class="rounded mx-auto d-block"/>
                            </p>
                            <a href="https://github.com/JMess87/Animal-Amigos.git" className="btn btn-primary">
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Employee Tracker</h5>
                            <p className="card-text">
                            <img src={ET}  width={300} height={300} class="rounded mx-auto d-block"/>
                            </p>
                            <a href="https://github.com/JMess87/EmployeeTracker.git" className="btn btn-primary">
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* ROW 3 */}
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">JATE</h5>
                            <p className="card-text">
                            <img src={JATE}  width={300} height={300} class="rounded mx-auto d-block"/>
                            </p>
                            <a href="https://github.com/JMess87/PWA_Challenge.git" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Create Read Me</h5>
                            <p className="card-text">
                            <img src={ReadMe}  width={300} height={300} class="rounded mx-auto d-block"/>
                            </p>
                            <a href="#" className="btn btn-primary">
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    );
}
