import React, {FC} from 'react';
import './index.less';

interface CardProps {
    children?: React.ReactNode,
    className?: string,
    style?: {backgroundColor: string}
}

const Card: FC<CardProps> = (props) => {
    const {children, className} = props;  // 解构 props，并将 className 传递给 div

    return (
        <div className={`cp-card ${className}`}>  {/* 将 className 添加到 class 列表中 */}
            {children}
        </div>
    );
};

export default Card;

