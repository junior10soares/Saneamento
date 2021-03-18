import styled from 'styled-components';
import theme from '../../styles/theme';

export const Card = styled.div`
    max-width: 1150px !important;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-left: 16px;
    align-items: center;
    margin: 0 auto !important;
    /* position: relative; */
    border-radius: 5px;
    border: 1px solid #BDBDBD;
    h4 {
        padding: ${theme.spacing * 3}px;
        margin: 0;
    }
    padding: 0;
    margin: 0;
    li {
        padding: ${theme.spacing * 3}px;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        color: #828282;
        justify-content: space-between;
        align-items: center;
        &:nth-child(even) {
            background: #FBFBFB;
        }
    }

    .Grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 20px 65px;

    .column1{
        padding-left: 16px;

    span {
        display: inline-flex;
    justify-content: center;
    align-items: center;
        svg {
            font-size: 28px;
        }

        a {
            display: inline-block;
            margin-right: 3px;
            padding-right: 8px;
            text-decoration: none;
            color: #000
        }
    }
    }

.column2{
    padding-left: 16px;

    span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 52px;
        svg {
            font-size: 28px;
            margin-right: 3px;
        }

        a {
            display: inline-block;
            margin-right: 16px;
            text-decoration: none;
            color: #000
        }
    }
}

.row{
    display: inline-flex;
    span {
    justify-content: center;
    align-items: center;
        svg {
            font-size: 28px;
        }

        a {
            display: inline-block;
            margin-right: 3px;
            padding-right: 8px;
            text-decoration: none;
            color: #000
        }
    }
    
    @media(max-width: 768px){
        display: flex;
        flex-direction: column; 
    }
}

.span-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .break-tag {
        word-break: break-word;
        width: 240px;
        height: 20px;
        @media(max-width: 768px) {
            height: 80px;
        }
    }
}

}    
`;

export const List = styled.ul`
    padding: 0;
    margin: 0;
    li {
        padding: ${theme.spacing * 3}px;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        color: #828282;
        justify-content: space-between;
        align-items: center;
        &:nth-child(even) {
            background: #FBFBFB;
        }
    }

    .Grid {
        display: grid;
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 20px 0;

    .column1{

    span {
        display: inline-flex;
    justify-content: center;
    align-items: center;
        svg {
            font-size: 28px;
        }

        a {
            display: inline-block;
            margin-right: 3px;
            padding-right: 8px;
            text-decoration: none;
            color: #000
        }
    }
    }

.column2{
    span {
        display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 52px;
        svg {
            font-size: 28px;
            margin-right: 3px;
        }

        a {
            display: inline-block;
            margin-right: 16px;
            text-decoration: none;
            color: #000
        }
    }
}

.row{
    display: inline-flex;
    span {
    justify-content: center;
    align-items: center;
        svg {
            font-size: 28px;
        }

        a {
            display: inline-block;
            margin-right: 3px;
            padding-right: 8px;
            text-decoration: none;
            color: #000
        }
    }
    
    @media(max-width: 768px){
        display: flex;
        flex-direction: column; 
    }
}

.span-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .break-tag {
        word-break: break-word;
        width: 240px;
        height: 20px;
        @media(max-width: 768px) {
            height: 80px;
        }
    }
}

}    



`;