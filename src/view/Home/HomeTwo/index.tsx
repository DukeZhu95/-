import React from 'react';
import {Button} from '@/components';
import './index.less';

const HomeTwo = () => {
    return (
        <div className='home-two-root'>
            <div className="event-header">
                <h2>Bore Inspection</h2>
                <p>77 Cow Road, Dairytown</p>
                <p>Destination is 500 meters away.</p>
            </div>

            <div className="action-buttons">
                <Button className="record-btn">🎤 Record audio</Button>
                <Button className="record-btn">📹 Record video</Button>
            </div>

            <div className="checklist">
                <h3>ITEMS TO BE CHECKED</h3>
                <div className="checklist-section">
                    <div className="checklist-item">
                        <input type="checkbox" id="siting1" />
                        <label htmlFor="siting1">Approved BC documents and amendments on site</label>
                    </div>
                    <div className="checklist-item">
                        <input type="checkbox" id="siting2" />
                        <label htmlFor="siting2">Correct address and Lot No.</label>
                    </div>
                    <div className="checklist-item">
                        <input type="checkbox" id="siting3" />
                        <label htmlFor="siting3">Consent conditions checked</label>
                    </div>

                    <h4>Siting</h4>


                </div>
                {/* Add more checklist items as necessary */}
            </div>

            <div className="footer-buttons">
                <Button className="footer-btn">PAUSE</Button>
                <Button className="footer-btn">FINISH</Button>
            </div>
        </div>
    );
};

export default HomeTwo;
