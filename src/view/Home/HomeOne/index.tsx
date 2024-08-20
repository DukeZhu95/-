import React from 'react';
import {observer, useLocalObservable} from 'mobx-react-lite';
import {Button, Card} from '@/components';
import './index.less';

const HomeOne = () => {
    const store = useLocalObservable(() => ({
        month: new Date().getMonth() + 1, // 初始化为当前月份 (1-12)
        date: new Date().getDate(), // 初始化为当前日期 (1-31)

        getDaysInMonth() {
            return new Date(new Date().getFullYear(), this.month, 0).getDate();
        },

        incrementMonth() {
            if (this.month < 12) {
                this.month++;
            } else {
                this.month = 1; // 如果超出12月，则回到1月
            }

            // 如果当前日期超过新的月份天数，则将日期调整为该月的最后一天
            const daysInMonth = this.getDaysInMonth();
            if (this.date > daysInMonth) {
                this.date = daysInMonth;
            }
        },

        incrementDate() {
            const daysInMonth = this.getDaysInMonth();
            if (this.date < daysInMonth) {
                this.date++;
            } else {
                this.date = 1; // 如果超出当月天数，则回到1日
            }
        },

        decrementMonth() {
            if (this.month > 1) {
                this.month--;
            } else {
                this.month = 12; // 如果低于1月，则回到12月
            }

            // 同样，确保日期不会超过新的月份天数
            const daysInMonth = this.getDaysInMonth();
            if (this.date > daysInMonth) {
                this.date = daysInMonth;
            }
        },

        decrementDate() {
            if (this.date > 1) {
                this.date--;
            } else {
                this.date = this.getDaysInMonth(); // 如果低于1日，则回到上个月的最后一天
            }
        }
    }));

    const getMonthName = (month: number) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        return monthNames[month - 1];
    };

    const getDateName = (date: number) => {
        return `Day ${date}`;
    };

    return (
        <div className='home-one-root'>
            <div className='one-card'>
                <Card className="month-display">
                    <Button onClick={store.decrementMonth}> ← </Button>
                    <h2>{getMonthName(store.month)}</h2>
                    <Button onClick={store.incrementMonth}> → </Button>
                </Card>
                <Card className="date-display">
                    <Button onClick={store.decrementDate}> ← </Button>
                    <h2>{getDateName(store.date)}</h2>
                    <Button onClick={store.incrementDate}> → </Button>
                </Card>

                <h3>Ongoing...</h3>

                <div className='schedule'>
                    <div className='time-slot'>
                        <span className='time'>9AM</span>
                        <Card className='event' style={{backgroundColor: '#f97373'}}>
                            <h2>Bore Inspection</h2>
                            <p>05/04/2024</p>
                            <p>77 Cow Road, Dairytown</p>
                        </Card>
                    </div>
                    <div className='time-slot'>
                        <span className='time'>10AM</span>
                        <div className='line'></div>
                    </div>
                    <div className='time-slot'>
                        <span className='time'>11AM</span>
                        <Card className='event' style={{backgroundColor: '#63b3ed'}}>
                            <h2>Dairy Discharge Monitoring</h2>
                            <p>05/04/2024</p>
                            <p>592 Ohauiti Road, Ohauiti 3171</p>
                        </Card>
                    </div>
                    <div className='time-slot'>
                        <span className='time'>12PM</span>
                        <div className='line'></div>
                    </div>
                    <div className="time-slot">
                        <span className="time">1PM</span>
                        <div className="line"></div>
                    </div>
                    <div className='time-slot'>
                        <span className='time'>2PM</span>
                        <div className='line'></div>
                    </div>
                    <div className='time-slot'>
                        <span className='time'>3PM</span>
                        <div className='line'></div>
                    </div>
                    <div className='time-slot'>
                        <span className='time'>4PM</span>
                        <Card className='event' style={{backgroundColor: '#f97373'}}>
                            <h2>Noxious Weed Control</h2>
                            <p>05/04/2024</p>
                            <p>Some other location</p>
                        </Card>
                    </div>
                    <div className='time-slot'>
                        <span className='time'>5PM</span>
                        <div className='line'></div>
                    </div>
                    <div className='time-slot'>
                        <span className='time'>6PM</span>
                        <div className='line'></div>
                    </div>
                    <div className='time-slot'>
                        <span className='time'>7PM</span>
                        <div className='line'></div>
                    </div>
                    <div className='time-slot'>
                        <span className='time'>8PM</span>
                        <div className='line'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(HomeOne);
