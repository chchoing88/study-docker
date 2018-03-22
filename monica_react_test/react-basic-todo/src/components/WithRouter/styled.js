import { injectGlobal } from 'styled-components'

// eslint-disable-next-line
injectGlobal`
  .wrap_feature {
    background-color: #4c505e;
  }

  .wrap_about {
    background-color: #2c343e;
  }

  .wrap_partner {
    background: linear-gradient(to bottom, #434349 0%, #434349 100%);
    background-size: 100% 490px;
    background-repeat: no-repeat;

    @media only screen and (max-width: 1024px) {
      background-size: 100% 350px;
    }

    @media only screen and (max-width: 736px) {
      background-size: 100% 438px;
    }
  }

  .wrap_home {
    background: linear-gradient(to bottom, #5f5f66 0%, #5f5f66 100%);
    background-size: 100% 990px;
    background-repeat: no-repeat;

    @media only screen and (max-width: 1680px) {
      background-size: 100% 866px;
    }

    @media only screen and (max-width: 1440px) {
      background-size: 100% 680px;
    }

    @media only screen and (max-width: 736px) {
      background-size: 100% 505px;
    }
  }
`
