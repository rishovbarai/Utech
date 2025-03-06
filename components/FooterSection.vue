<template>
    <footer v-if="device === 'Desktop'" class="footer-desktop">
      <div v-if="columns" class="footer-columns">
        <div v-if="column1" class="column1-layout">
          <img src="/FooterLink.png" alt="Footer Link" class="footer-link" />
        </div>
        <div v-if="column2" class="column2-layout">
          <h3 class="column2-title">Product</h3>
          <ul class="links-list">
            <li v-if="link1">
              <span>Pricing</span>
            </li>
            <li v-if="link2">
              <span>Overview</span>
            </li>
            <li v-if="link3">
              <span>Browse</span>
            </li>
            <li v-if="link4" class="link-with-icon">
              <span>Accessibility</span>
              <div class="accessibility-icon"></div>
            </li>
          </ul>
        </div>
        <div v-if="column5" class="column5-layout">
          <h3 class="column2-title">Solutions</h3>
          <ul class="links-list">
            <li v-if="link13">
              <span>BrainStorming</span>
            </li>
            <li v-if="link14">
              <span>Ideation</span>
            </li>
            <li v-if="link15">
              <span>Wireframing</span>
            </li>
            <li v-if="link16">
              <span>Research</span>
            </li>
          </ul>
        </div>
        <div v-if="column3" class="column3-layout">
          <h3 class="column2-title">Resources</h3>
          <ul class="links-list">
            <li v-if="link6">
              <span>Help Center</span>
            </li>
            <li v-if="link5">
              <span>Blog</span>
            </li>
            <li v-if="link7">
              <span>Tutorials</span>
            </li>
            <li v-if="link8">
              <span>FAQ</span>
            </li>
          </ul>
        </div>
        <div v-if="column6" class="column6-layout">
          <h3 class="column2-title">Support</h3>
          <ul class="links-list">
            <li v-if="link17">
              <span>Contact Us</span>
            </li>
            <li v-if="link18">
              <span>Developers</span>
            </li>
            <li v-if="link19">
              <span>Documentation</span>
            </li>
            <li v-if="link20">
              <span>Integrations</span>
            </li>
          </ul>
        </div>
        <div v-if="column4" class="column4-layout">
          <h3 class="column2-title">Company</h3>
          <ul class="links-list">
            <li v-if="link9">
              <span>About Us</span>
            </li>
            <li v-if="link10">
              <span>Press</span>
            </li>
            <li v-if="link11">
              <span>Events</span>
            </li>
            <li v-if="link12" class="link-with-icon">
              <span>Request Demo</span>
              <img src="/rightfooterarrow.png" alt="Right Arrow" class="right-arrow-icon">
            </li>
          </ul>
        </div>
      </div>
      <div v-if="linksBottom" class="links-bottom">
        <span class="copyright-text">{{ copyrightText }}</span>
        <div class="bottom-links">
          <span class="bottom-link">Terms</span>
          <span class="bottom-link">Privacy</span>
          <span class="bottom-link">Contact</span>
          <span class="bottom-link">
            <img src="/globe-icon.png" alt="Globe Icon" class="icon" />
            EN
          </span>
          <span class="bottom-link">
            <img src="/euro-icon.png" alt="Euro Icon" class="icon" />
            EUR
          </span>
          <span class="bottom-link">
            <img src="/cross-icon.png" alt="Cross Icon" class="icon" />
          </span>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    props: {
      device: {
        type: String,
        default: 'Desktop'
      },
      appButtons: {
        type: Boolean,
        default: false
      },
      linksBottom: {
        type: Boolean,
        default: true
      },
      socialIcons: {
        type: Boolean,
        default: false
      },
      column1: {
        type: Boolean,
        default: true
      },
      column2: {
        type: Boolean,
        default: true
      },
      column3: {
        type: Boolean,
        default: true
      },
      column4: {
        type: Boolean,
        default: true
      },
      column5: {
        type: Boolean,
        default: true
      },
      column6: {
        type: Boolean,
        default: true
      },
      columns: {
        type: Boolean,
        default: true
      },
      copyright: {
        type: Boolean,
        default: true
      },
      copyrightText: {
        type: String,
        default: 'uteach @ 2023. All rights reserved.'
      },
      disclaimer: {
        type: Boolean,
        default: false
      },
      link1: {
        type: Boolean,
        default: true
      },
      link2: {
        type: Boolean,
        default: true
      },
      link3: {
        type: Boolean,
        default: true
      },
      link4: {
        type: Boolean,
        default: true
      },
      link5: {
        type: Boolean,
        default: true
      },
      link6: {
        type: Boolean,
        default: true
      },
      link7: {
        type: Boolean,
        default: true
      },
      link8: {
        type: Boolean,
        default: true
      },
      link9: {
        type: Boolean,
        default: true
      },
      link10: {
        type: Boolean,
        default: true
      },
      link11: {
        type: Boolean,
        default: true
      },
      link12: {
        type: Boolean,
        default: true
      },
      link13: {
        type: Boolean,
        default: true
      },
      link14: {
        type: Boolean,
        default: true
      },
      link15: {
        type: Boolean,
        default: true
      },
      link16: {
        type: Boolean,
        default: true
      },
      link17: {
        type: Boolean,
        default: true
      },
      link18: {
        type: Boolean,
        default: true
      },
      link19: {
        type: Boolean,
        default: true
      },
      link20: {
        type: Boolean,
        default: true
      }
    }
  }
  </script>
  
  <style scoped>
  .footer-desktop {
    width: 1440px;
    height: 420px;
    padding-right: 80px;
    padding-left: 80px;
    background: #0F172A;
    padding-top: 55px;
  }

  .footer-columns {
    display: flex;
    flex-direction: row; /* Align columns in a single row */
    justify-content: space-between; /* Space out columns evenly */
  }

  .column1-layout {
    width: 173.3333282470703px;
    height: 35px;
  }

  .column2-layout,
  .column3-layout,
  .column4-layout,
  .column5-layout,
  .column6-layout {
    width: 173.3333282470703px;
    height: 318px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .footer-link {
    width: 173.3333282470703px;
    height: 35px;
  }

  .column2-title,
  .column3-title,
  .column4-title,
  .column5-title,
  .column6-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 17.6px;
    letter-spacing: 0%;
    margin-bottom: 8px;
    color: white; /* Updated color to white */
  }

  .links-list {
    list-style-type: none;
    padding: 0;
    width: 173.3333282470703px;
    height: 276px;
    gap: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .links-list li {
    width: 173.3333282470703px;
    height: 46px;
    margin: 5px 0;
    color: white; /* Updated color to white */
  }

  .link-with-icon {
    display: flex;
    align-items: center;
  }

  .accessibility-icon {
    width: 45px;
    height: 20px;
    padding: 4px;
    border-radius: 4px;
    background: url('/AccBadge.png') no-repeat center;
    background-size: cover;
    margin-left: 8px;
    position: relative;
    left: 34px;
  }

  .right-arrow-icon {
    width: 24px;
    height: 24px;
    margin-left: 5px;
  }

  .links-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .bottom-links {
    display: flex;
    gap: 32px;
  }

  .bottom-link {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0%;
    color: white;
  }

  .icon {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-right: 4px;
  }

  .copyright-text {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0%;
    color: #E2E8F0;
  }

  @media (max-width: 1024px) {
    footer {
      width: 100%;
      height: auto;
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      gap: 48px;
      width: 27rem;
      height: 128rem;
    }

    .footer-columns {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 32px;
      justify-content: space-between;
    }

    .column1-layout {
      width: 100%;
      height: auto;
      order: 1;
      display: flex;
      justify-content: center;
    }

    .footer-link {
      width: 173px;
      height: 35px;
    }

    .column2-layout,
    .column3-layout,
    .column4-layout,
    .column5-layout,
    .column6-layout {
      width: calc(50% - 16px);
      height: auto;
      min-height: 200px;
      padding: 12px 0;
    }

    [v-if="linksBottom"] {
      width: 100%;
      order: 3;
      margin-top: 32px;
      padding-top: 32px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  }

  @media (max-width: 768px) {
    .footer-desktop {
      width: 27rem;
      height: 136rem;
    }
    footer {
      width: 393px;
      padding: 32px 16px;
      gap: 32px;
      width: 27rem;
      height: 128rem;
    }

    .footer-columns {
      flex-direction: column;
      gap: 24px;
    }

    .column2-layout,
    .column3-layout,
    .column4-layout,
    .column5-layout,
    .column6-layout {
      width: 100%;
      min-height: auto;
      padding: 8px 0;
      text-align: center;
    }

    .column2-title,
    .column3-title,
    .column4-title,
    .column5-title,
    .column6-title {
      font-size: 18px;
      margin-bottom: 16px;
    }

    .links-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .links-list li {
      width: auto;
      height: auto;
      margin: 0;
    }

    .links-list span {
      font-size: 16px;
      line-height: 24px;
    }

    [v-if="linksBottom"] {
      margin-top: 24px;
      padding-top: 24px;
      text-align: center;
    }

    [v-if="linksBottom"] > div {
      flex-direction: column;
      gap: 16px;
    }

    [v-if="linksBottom"] span {
      font-size: 14px;
      line-height: 20px;
    }
  }
  </style>