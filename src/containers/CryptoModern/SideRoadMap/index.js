import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "july",
    };
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function () {});

    Events.scrollEvent.register("end", function () {});
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
    console.log(this.state.index);
    return (
      <div>
        <Grid container>
          <Grid item lg={4} md={4} className="sm-none">
            <div className="collapse navbar-collapse main-sidebar">
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
                      onSetActive={(v) => this.setState({ index: v })}
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
              <Box py={1} />
              <Typography mb={3} className="md-none" fontSize={22} color="#fff">
                July
              </Typography>
              <Grid container>
                <Grid item lg={6} md={6} sm={12} xs={12} className="full-md">
                  <Box mb={1} display="flex" className="list">
                    <img
                      src="/flash.png"
                      height={34}
                      width={34}
                      layout="fill"
                    />
                    <Typography ml={0.5} color="#fff" fontSize={18}>
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
                    <Typography ml={0.5} color="#fff" fontSize={18}>
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
                    <Typography ml={0.5} color="#fff" fontSize={18}>
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
                    <Typography ml={0.5} color="#fff" fontSize={18}>
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
                    <Typography ml={0.5} color="#fff" fontSize={18}>
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
                    <Typography ml={0.5} color="#fff" fontSize={18}>
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
                    <Typography ml={0.5} color="#fff" fontSize={18}>
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
                    <Typography ml={1.9} color="#fff" fontSize={18}>
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
                    <Typography ml={1.9} color="#fff" fontSize={18}>
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
                    <Typography ml={1.9} color="#fff" fontSize={18}>
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
                    <Typography ml={1.9} color="#fff" fontSize={18}>
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
                    <Typography ml={1.9} color="#fff" fontSize={18}>
                      {" "}
                      $25 Million Marketcap -> 250 BNB Zeus purchase
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} className="sm-none">
                  <img src="/zeus-1.jpeg" width="100%" />
                </Grid>
              </Grid>
            </Element>

            <Element name="august" className="element">
              <Box py={1} />
              <Typography mb={3} className="md-none" fontSize={22} color="#fff">
                August
              </Typography>
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
                    <Typography ml={1.9} color="#fff" fontSize={18}>
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
                    <Typography ml={1.9} color="#fff" fontSize={18}>
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
                    <Typography ml={1.9} color="#fff" fontSize={18}>
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
                    <Typography ml={1.9} color="#fff" fontSize={18}>
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
                    <Typography ml={1.9} color="#fff" fontSize={18}>
                      {" "}
                      $25 Million Marketcap -> 250 BNB Zeus purchase
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} className="sm-none">
                  <img src="/athena.jpeg" width="100%" />
                </Grid>
              </Grid>
            </Element>

            <Element name="september" className="element">
              <Box py={1} />
              <Typography mb={3} className="md-none" fontSize={22} color="#fff">
                September
              </Typography>
              <Grid container>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box mb={1} display="flex" className="list">
                    <img
                      src="/flash.png"
                      height={34}
                      width={34}
                      layout="fill"
                    />
                    <Typography ml={0.5} color="#fff" fontSize={18}>
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
                    <Typography ml={0.5} color="#fff" fontSize={18}>
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
                    <Typography ml={0.5} color="#fff" fontSize={18}>
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
                    <Typography ml={0.5} color="#fff" fontSize={18}>
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
                    <Typography ml={0.5} color="#fff" fontSize={18}>
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
                    <Typography ml={0.5} color="#fff" fontSize={18}>
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
                    <Typography ml={0.5} color="#fff" fontSize={18}>
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
                    <Typography ml={1.9} color="#fff" fontSize={18}>
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
                    <Typography ml={1.9} color="#fff" fontSize={18}>
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
                    <Typography ml={1.9} color="#fff" fontSize={18}>
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
                    <Typography ml={1.9} color="#fff" fontSize={18}>
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
                    <Typography ml={1.9} color="#fff" fontSize={18}>
                      {" "}
                      $25 Million Marketcap -> 250 BNB Zeus purchase
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} className="sm-none">
                  <img src="/poseidon.jpeg" width="100%" />
                </Grid>
              </Grid>
            </Element>
          </Grid>
        </Grid>
      </div>
    );
  }
}
