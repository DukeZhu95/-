import React from 'react';
import { observer } from 'mobx-react-lite';
import { IconContext, HouseLine, CalendarBlank, ChatCircleDots, UserCircle } from '@phosphor-icons/react';
import './index.less';

const Dashboard = () => {
    return (
        <div className="dashboard-root">
            <header className="dashboard-header">
                <div className="header-content">
                    <div className="date-info">
                        <p>Sunday</p>
                        <h2>5 April</h2>
                    </div>
                    <div className="user-info">
                        <UserCircle size={32} weight="fill" />
                        <span>Hi Lucas.</span>
                        <p>5 Tasks are pending</p>
                    </div>
                </div>
            </header>
            <section className="task-overview">
                <div className="task-card active-task">
                    <h3>Information Architecture</h3>
                    <p>Saber & Oro</p>
                    <span>Now</span>
                </div>
                <div className="monthly-preview">
                    <h3>Monthly Preview</h3>
                    <div className="task-stats">
                        <div className="stat-card">
                            <h4>22</h4>
                            <p>Done</p>
                        </div>
                        <div className="stat-card">
                            <h4>7</h4>
                            <p>In Progress</p>
                        </div>
                        <div className="stat-card">
                            <h4>12</h4>
                            <p>Pending</p>
                        </div>
                        <div className="stat-card">
                            <h4>14</h4>
                            <p>Waiting For Review</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="dashboard-footer">
                <IconContext.Provider value={{ size: 24, weight: 'duotone' }}>
                    <HouseLine />
                    <CalendarBlank />
                    <ChatCircleDots />
                    <UserCircle />
                </IconContext.Provider>
            </footer>
        </div>
    );
};

export default observer(Dashboard);
