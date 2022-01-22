import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

Banner.propTypes = {
    title: PropTypes.string,
    backgroundUrl: PropTypes.string,
    styles: PropTypes.object
};

Banner.defaultProps = {
    title: '',
    backgroundUrl: '',
    styles: {},
}

function Banner(props) {

    const { title, backgroundUrl, styles } = props;

    const bannerStyle = backgroundUrl ? { backgroundImage: `url(${backgroundUrl})` } : { };

    return (
        <section className="banner" style={bannerStyle}>
            <h1 className="banner__title" style={styles} >{title}</h1>
        </section>
    );
}

export default Banner;