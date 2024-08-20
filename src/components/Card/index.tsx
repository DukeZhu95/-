import React, { FC } from 'react';
import './index.less';

interface CardProps {
    children?: React.ReactNode;  // 允许 children 是任何 React 元素类型
    className?: string;  // className 仍然是可选的字符串类型
}

const Card: FC<CardProps> = (props) => {
    const { children, className } = props;  // 解构 props，并将 className 传递给 div

    return (
        <div className={`cp-card ${className}`}>  {/* 将 className 添加到 class 列表中 */}
            {children}
        </div>
    );
};

export default Card;

