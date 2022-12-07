import styled from 'styled-components';
import { colors } from '../../../common/colors';
export const DictionalWrapper = styled.div`
    display: flex;
    align-items: center;
    a{
        margin-right: 5px;
        text-decoration: none;
        :hover{
            text-decoration: underline;
        }
        font-weight: 500;
        color:${colors.dictional};
        font-size: 21px;
    }
    
    img{
        width: 13px;
        height: 13px;
    }
`