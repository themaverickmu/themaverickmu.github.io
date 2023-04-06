import React, { FC } from 'react';
import { BsTelegram, BsGithub, BsLinkedin } from 'react-icons/bs';

interface IFooter {
    data: {
        id: number;
        title: string;
        link: string;
    }[];
}

export const Footer: FC<IFooter> = ({ data }) => {
    type TIcons = {
        BsTelegram: JSX.Element;
        BsGithub: JSX.Element;
        BsLinkedin: JSX.Element;
    };
    const icons: TIcons = {
        BsTelegram: <BsTelegram className="social-icon" />,
        BsGithub: <BsGithub className="social-icon" />,
        BsLinkedin: <BsLinkedin className="social-icon" />,
    };

    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__container">
                    <div className="footer__body">
                        <div className="footer__text">
                            Copyright &copy; {new Date().getFullYear()}. All
                            rights are reserved
                        </div>
                        <ul className="footer__main footer-list">
                            {data.map((item) => (
                                <li className="footer-list__item" key={item.id}>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-list__link">
                                        {icons[item.title as keyof TIcons]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};