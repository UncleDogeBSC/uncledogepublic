import React from "react";
import { Grid, Typography, Box, Container, Button } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import ReactDOM from 'react-dom';


const styles = theme => ({
  main:{
    fontFamily: '"Roboto", sans-serif !important',
    backgroundColor: '#000000 !important'
  },
  Container:{
    '& .main-sidebar' :{
      borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
      '&.fixed':{
        top: 160,
        position: 'fixed',
        height: 212,
      },
      '& ul' :{
        padding: 0,
        '& li': {
          listStyleType: 'none',
          paddingLeft: 20,
          position: 'relative',
          height: 40,
          marginBottom: 46,
          marginLeft: -5
        },
        '& a' :{
          display: 'inline-block',
          marginLeft: 50,
          fontSize: 28,
          cursor: 'pointer',
          color: 'rgba(255, 255, 255, 0.2)',
          textDecoration: 'none'
        }
      }
    },
    '& .indecator':{
      background: 'linear-gradient(to bottom, #e3b640, #e5a90d)',
      width: 3,
      height: 42,
      position: 'absolute',
      transition: 'left ease-in-out 0.5s',
      '&.july': {
        transform: 'translate3d(-2px, 0px, 0px) !important',
        transition: `transform 0.5s cubic-bezier(0, 0, 0.34, 0.96),
          max-height 0.5s cubic-bezier(0, 0, 0.34, 0.96)`
      },
      '&.august': {
        transform: 'translate3d(-2px, 85px, 0px)',
        transition: `transform 0.5s cubic-bezier(0, 0, 0.34, 0.96),
          max-height 0.5s cubic-bezier(0, 0, 0.34, 0.96)`
      },
      '&.september' :{
        transform: 'translate3d(-2px, 170px, 0px)',
        transition: `transform 0.5s cubic-bezier(0, 0, 0.34, 0.96),
          max-height 0.5s cubic-bezier(0, 0, 0.34, 0.96)`,
      }
    },
    '& .heading': {
      fontWeight: '800 !important',
      fontSize: 60,
      textAlign: 'center',
      fontFamily: '"Roboto", sans-serif !important',
      padding: '80px 0',
      backgroundImage: `linear-gradient(to right, #e3b640, #e5a90d);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;`
    },
    '& .element': {
      marginBottom: 200,
    },
    '& .list p': {
      fontFamily: '"Roboto", sans-serif !important'
    },
    '& .active a': {
      color:' #fff !important'
    },
    '& .font-22':{
      fontSize: 22,
      color: '#fff'
    },
    '& .typo-18':{
      fontSize: 18,
      color: '#fff'
    },
    '& .ml-2':{
      marginLeft: 10
    },
    '@media (max-width: 992px)': {
      '& .container' :{
        maxWidth: '600px !important'
      }
    },
    '@media only screen and (min-width: 992px)': {
      '& .md-none': {
        display: 'none'
      }
    },

    '@media only screen and (min-width: 1440px)': {
      '& .container': {
        maxWidth: '1286px !important'
      }
    },
    '@media only screen and (max-width: 992px)': {
      '& .sm-none': {
        display: 'none'
      },
      '& .heading': {
        fontSize: '48px !important',
        marginBottom: '14px !important',
      },
      '& .element': {
        marginBottom: 100
      },
      '& .full-md': {
        flexBasis: '100% !important',
        maxWidth: '100% !important'
      }
    }

  }
});


class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "july",
      position: false,
    };
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function () {});

    Events.scrollEvent.register("end", function () {});
    const handleScroll = () => {
      this.setState({position:window.scrollY});
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }
  scrollToTop() {
    // scroll.scrollToTop();
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
      <Container fixed className={classes.Container}>
      <Typography
        className="heading"
      >
        Roadmap
      </Typography>
        <Grid container>
          <Grid item lg={4} md={4} className="sm-none">
            <div className={`collapse navbar-collapse ${this.state.position > 950 && this.state.position < 2600 ? "fixed" :""} main-sidebar`}>
              <div className={`indecator ${this.state.index}`} />
              <ul className="nav navbar-nav">
                {["July", "August", "September"].map((v, i) => (
                  <li
                    key={v}
                    className={
                      v.toLowerCase() === this.state.index ? "active" : ""
                    }
                  >
                    <Link
                      onSetActive={(v) => this.setState({ index: v})}
                      offset={-160}
                      activeClass="active"
                      className={v.toLocaleLowerCase()}
                      to={v.toLocaleLowerCase()}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      {v}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Element name="july" className="element">
              <Typography className="font-22 md-none">
                July
              </Typography>
              <Box py={1} />
              <Grid container >
                <Grid item lg={6} md={6} sm={12} xs={12} className="full-md">
                  <Box mb={1} display="flex" className="list">
                    <img
                      src="/flash.png"
                      height={34}
                      width={34}
                      layout="fill"
                    />
                    <Typography ml={0.5} className="typo-18">
                      {" "}
                      Whitelist pre-sale launch on Sabaka
                    </Typography>
                  </Box>
                  <Box mb={1} display="flex" className="list">
                    <img
                      src="/flash.png"
                      height={34}
                      width={34}
                      layout="fill"
                    />
                    <Typography ml={0.5} className="typo-18">
                      {" "}
                      15,000 telegram members
                    </Typography>
                  </Box>
                  <Box mb={1} display="flex" className="list">
                    <img
                      src="/flash.png"
                      height={34}
                      width={34}
                      layout="fill"
                    />
                    <Typography ml={0.5} className="typo-18">
                      {" "}
                      Liquidity Locked
                    </Typography>
                  </Box>
                  <Box mb={1} display="flex" className="list">
                    <img
                      src="/flash.png"
                      height={34}
                      width={34}
                      layout="fill"
                    />
                    <Typography ml={0.5} className="typo-18">
                      {" "}
                      5,000 holders
                    </Typography>
                  </Box>
                  <Box mb={1} display="flex" className="list">
                    <img
                      src="/flash.png"
                      height={34}
                      width={34}
                      layout="fill"
                    />
                    <Typography ml={0.5} className="typo-18">
                      {" "}
                      Coingecko (Pre-listing)
                    </Typography>
                  </Box>
                  <Box mb={1} display="flex" className="list">
                    <img
                      src="/flash.png"
                      height={34}
                      width={34}
                      layout="fill"
                    />
                    <Typography ml={0.5} className="typo-18">
                      {" "}
                      2.5% of Olympus tokens burned
                    </Typography>
                  </Box>
                  {/* delete section started */}
                  <Box mb={1} display="flex" className="list">
                    <img
                      src="/flash.png"
                      height={34}
                      width={34}
                      layout="fill"
                    />
                    <Typography ml={0.5} className="typo-18">
                      {" "}
                      CoinMarketCap Listing
                    </Typography>
                  </Box>
                  {/* delete section started */}
                  <Box
                    mb={1}
                    display="flex"
                    alignItems="center"
                    className="list"
                    pl={1}
                  >
                    <img
                      src="/delete.png"
                      width={16}
                      height={3}
                      layout="fill"
                    />
                    <Typography ml={1.9} className="typo-18 ml-2">
                      {" "}
                      10,000 holders
                    </Typography>
                  </Box>
                  <Box
                    mb={1}
                    display="flex"
                    alignItems="center"
                    className="list"
                    pl={1}
                  >
                    <img
                      src="/delete.png"
                      width={21}
                      height={3}
                      layout="fill"
                    />
                    <Typography ml={1.9} className="typo-18 ml-2">
                      {" "}
                      Dashboard (BUSD Earnings, Zeus, Hades Tracker)
                    </Typography>
                  </Box>
                  <Box
                    mb={1}
                    display="flex"
                    alignItems="center"
                    className="list"
                    pl={1}
                  >
                    <img
                      src="/delete.png"
                      width={16}
                      height={3}
                      layout="fill"
                    />
                    <Typography ml={1.9} className="typo-18 ml-2">
                      {" "}
                      Techrate Audit
                    </Typography>
                  </Box>
                  <Box
                    mb={1}
                    display="flex"
                    alignItems="center"
                    className="list"
                    pl={1}
                  >
                    <img
                      src="/delete.png"
                      width={16}
                      height={3}
                      layout="fill"
                    />
                    <Typography ml={1.9} className="typo-18 ml-2">
                      {" "}
                      Locker of Ananke (Pillar I)
                    </Typography>
                  </Box>
                  <Box
                    mb={1}
                    display="flex"
                    alignItems="center"
                    className="list"
                    pl={1}
                  >
                    <img
                      src="/delete.png"
                      width={21}
                      height={3}
                      layout="fill"
                    />
                    <Typography ml={1.9} className="typo-18 ml-2">
                      {" "}
                      $25 Million Marketcap - 250 BNB Zeus purchase
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} className="sm-none">
                  <img src="/yellowUncle.png" width="100%" />
                </Grid>
              </Grid>
            </Element>

            <Element name="august" className="element">
              <Typography mb={3} className="font-22 md-none">
                August
              </Typography>
              <Box py={1} />
              <Grid container>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  {/* delete section started */}
                  <Box
                    mb={1}
                    display="flex"
                    alignItems="center"
                    className="list"
                    pl={1}
                  >
                    <img
                      src="/delete.png"
                      width={16}
                      height={3}
                      layout="fill"
                    />
                    <Typography ml={1.9} className="typo-18 ml-2">
                      {" "}
                      10,000 holders
                    </Typography>
                  </Box>
                  <Box
                    mb={1}
                    display="flex"
                    alignItems="center"
                    className="list"
                    pl={1}
                  >
                    <img
                      src="/delete.png"
                      width={21}
                      height={3}
                      layout="fill"
                    />
                    <Typography ml={1.9} className="typo-18 ml-2">
                      {" "}
                      Dashboard (BUSD Earnings, Zeus, Hades Tracker)
                    </Typography>
                  </Box>
                  <Box
                    mb={1}
                    display="flex"
                    alignItems="center"
                    className="list"
                    pl={1}
                  >
                    <img
                      src="/delete.png"
                      width={16}
                      height={3}
                      layout="fill"
                    />
                    <Typography ml={1.9} className="typo-18 ml-2">
                      {" "}
                      Techrate Audit
                    </Typography>
                  </Box>
                  <Box
                    mb={1}
                    display="flex"
                    alignItems="center"
                    className="list"
                    pl={1}
                  >
                    <img
                      src="/delete.png"
                      width={16}
                      height={3}
                      layout="fill"
                    />
                    <Typography className="typo-18 ml-2">
                      {" "}
                      Locker of Ananke (Pillar I)
                    </Typography>
                  </Box>
                  <Box
                    mb={1}
                    display="flex"
                    alignItems="center"
                    className="list"
                    pl={1}
                  >
                    <img
                      src="/delete.png"
                      width={21}
                      height={3}
                      layout="fill"
                    />
                    <Typography ml={1.9} className="typo-18 ml-2">
                      {" "}
                      $25 Million Marketcap - 250 BNB Zeus purchase
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} className="sm-none">
                  <img src="/blueUncle.png" width="100%" />
                </Grid>
              </Grid>
            </Element>

            <Element name="september" className="element">
            <Box py={1} />
              <Typography mb={3} className="font-22 md-none">
                September
              </Typography>
              <Box py={1} />
              <Grid container>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  {/* delete section started */}
                  <Box
                    mb={1}
                    display="flex"
                    alignItems="center"
                    className="list"
                    pl={1}
                  >
                    <img
                      src="/delete.png"
                      width={16}
                      height={3}
                      layout="fill"
                    />
                    <Typography ml={1.9} className="typo-18 ml-2">
                      {" "}
                      10,000 holders
                    </Typography>
                  </Box>
                  <Box
                    mb={1}
                    display="flex"
                    alignItems="center"
                    className="list"
                    pl={1}
                  >
                    <img
                      src="/delete.png"
                      width={21}
                      height={3}
                      layout="fill"
                    />
                    <Typography ml={1.9} className="typo-18 ml-2">
                      {" "}
                      Additional CEX Listings

                    </Typography>
                  </Box>
                  <Box
                    mb={1}
                    display="flex"
                    alignItems="center"
                    className="list"
                    pl={1}
                  >
                    <img
                      src="/delete.png"
                      width={16}
                      height={3}
                      layout="fill"
                    />
                    <Typography ml={1.9} className="typo-18 ml-2">
                      {" "}
                      4th Pillar: Lightning of Zeus

                    </Typography>
                  </Box>
                  <Box
                    mb={1}
                    display="flex"
                    alignItems="center"
                    className="list"
                    pl={1}
                  >
                    <img
                      src="/delete.png"
                      width={16}
                      height={3}
                      layout="fill"
                    />
                    <Typography ml={1.9} className="typo-18 ml-2">
                      {" "}
                      Much more to come…

                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} className="sm-none">
                  <img src="/greenUncle.png" width="100%" />
                </Grid>
              </Grid>
            </Element>
          </Grid>
        </Grid>
      </Container>
      </div>
    );
  }
}


Section.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Section);
