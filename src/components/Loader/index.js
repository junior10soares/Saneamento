import React from 'react';
import {FiLoader}  from 'react-icons/fi';
import {Container} from './styles';

const Loader = () => {
    return(
        <Container>
            <FiLoader size={20} className="icon-spin" />
        </Container>
    );
}

export default Loader