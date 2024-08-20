import React, {ReactNode, useState} from 'react';
import {useNavigate, Outlet, useLocation} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import {
    IconContext,
    GlobeHemisphereEast,
    HardDrives,
    IceCream,
    InstagramLogo,
    FileTsx,
    GithubLogo,
    GameController
} from '@phosphor-icons/react';
import {Button} from '@/components';

import './index.less';

interface LinkItem {
    icon: ReactNode;
    name: string;
    link: string;
}

function Home() {
    const navigate = useNavigate();
    const params = useLocation();
    const {pathname} = params;

    const [activeLink, setActiveLink] = useState<string>(pathname);
    const [isTabVisible, setIsTabVisible] = useState<boolean>(true); // 用于管理 home-tab 显示状态

    const MenuLink = [
        {name: 'HomeOne', icon: <GlobeHemisphereEast />, link: '/home/one'},
        {name: 'Pokemon', icon: <GameController />, link: '/home/two'},
        {name: 'HomeThree', icon: <FileTsx />, link: '/home/three'},
        {name: 'Mobx 数据更新', icon: <HardDrives />, link: '/home/mobx'},
        {name: 'Phosphor图标', icon: <InstagramLogo />, link: '/home/four'},
        {name: 'Svg 封装', icon: <IceCream />, link: '/home/icon'}
    ];

    const handleClickLink = (link: string) => {
        setActiveLink(link);
        navigate(link);
    };

    const toggleTabVisibility = () => {
        setIsTabVisible(!isTabVisible); // 切换显示状态
    };

    return (
        <div className='home-root'>
            <button className="toggle-tab-btn" onClick={toggleTabVisibility}>
                {isTabVisible ? 'Hide Menu' : 'Show Menu'}
            </button>

            {isTabVisible && (
                <div className='home-tab'>
                    <div className='github-icon'>
                        <a href='https://github.com/guokaigdg/react-template-mobile'>
                            <GithubLogo size={30} color='#f9f4da' />
                        </a>
                    </div>
                    {MenuLink.map((item: LinkItem) => (
                        <div key={item.name} className='btn-wrap'>
                            <Button
                                type='text'
                                className='text-btn'
                                active={activeLink === item.link}
                                onClick={() => handleClickLink(item.link)}
                            >
                                <IconContext.Provider
                                    value={{
                                        size: 24,
                                        weight: 'duotone',
                                        mirrored: false
                                    }}
                                >
                                    {item.icon}
                                </IconContext.Provider>
                                <span className='link-text'>{item.name}</span>
                            </Button>
                        </div>
                    ))}
                </div>
            )}
            <Outlet />
        </div>
    );
}

export default observer(Home);
