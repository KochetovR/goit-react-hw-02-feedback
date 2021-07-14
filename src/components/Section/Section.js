import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
    <>
        <h1>{title.length > 0 ? title : 'Please leave feedback'}</h1>
        {children}
    </>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Section;
