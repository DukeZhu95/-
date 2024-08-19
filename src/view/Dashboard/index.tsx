import React from 'react';
import { observer } from 'mobx-react-lite';
import { UserCircle } from '@phosphor-icons/react';
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
                    <div className="user-avatar">
                        <UserCircle size={128} weight="fill" />
                    </div>
                </div>
                <div className="welcome-message">
                    <span>Kia ora, Duke!</span>
                    <p>5 Tasks are pending...</p>
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
                        <div className="stat-card done">
                            <h4>22</h4>
                            <p>Done</p>
                        </div>
                        <div className="stat-card in-progress">
                            <h4>7</h4>
                            <p>In Progress</p>
                        </div>
                        <div className="stat-card pending">
                            <h4>12</h4>
                            <p>Pending</p>
                        </div>
                        <div className="stat-card waiting-review">
                            <h4>14</h4>
                            <p>Waiting For Review</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default observer(Dashboard);
