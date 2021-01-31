import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
 
const GlobalStyle = createGlobalStyle`
    ${normalize}
    /* montserrat-regular - latin */
    @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('../../fonts/montserrat-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../../fonts/montserrat-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
`

export default GlobalStyle;