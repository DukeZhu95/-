import React from 'react';
import {observer} from 'mobx-react-lite';
import './index.less';

const HomeOne = () => {
    return (
        <div className='home-one-root'>
            <header className="header">
                <div className="date-selector">
                    <button className="nav-button">← Mar</button>
                    <div className="current-month">
                        <h2>April</h2>
                    </div>
                    <button className="nav-button">May →</button>
                </div>
                <div className="date-display">
                    <div className="date-item">4 Sat</div>
                    <div className="date-item active">5 Sun</div>
                    <div className="date-item">6 Mon</div>
                    <div className="date-item">7 Tue</div>
                </div>
                <div className="user-avatar">
                    <img src="path_to_user_image" alt="User Avatar" />
                </div>
            </header>

            <section className="schedule-section">
                <div className="timeline">
                    <div className="time-label">9:00 AM</div>
                    <div className="time-label">10:00 AM</div>
                    <div className="time-label">11:00 AM</div>
                    <div className="time-label">12:00 PM</div>
                    <div className="time-label">1:00 PM</div>
                    {/* 可以继续添加更多时间点 */}
                </div>
                <div className="schedule-list">
                    <div className="schedule-item red" style={{ top: '10%' }}>
                        <h4>Bore Inspection</h4>
                        <p>05/04/2024</p>
                        <p>77 Cow Road, Dairytown</p>
                    </div>
                    <div className="schedule-item blue" style={{ top: '30%' }}>
                        <h4>Dairy Discharge Monitoring</h4>
                        <p>05/04/2024</p>
                        <p>592 Ohauiti Road, Ohauiti 3171</p>
                    </div>
                    <div className="schedule-item red" style={{ top: '50%' }}>
                        <h4>Noxious Weed Control</h4>
                        <p>05/04/2024</p>
                        <p>Location Details</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default observer(HomeOne);
