import React from 'react';


import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './styleTimeline.min.css';

// import './tokenomics.css'


const SGORoadMapSection = () => {

    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'linear-gradient(to right bottom, #466CB3, #ddddff)', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(128,128,128)' }}
                iconStyle={{ background: 'linear-gradient(to right bottom, #466CB3, #ddddff)', color: '#fff' }}
                date="Q2 2021"

            >
                <h3 className="vertical-timeline-element-title">Q2 2021</h3>
                <ul>
                    <li>Whitelist stage one starting on Sunday 30th of May 2021 at 6pm BST</li>
                    <li>Whitelist stage two starting on Thursday 3rd of June 2021 at 6pm BST</li>
                    <li>Official PancakeSwap launch starting on Friday 4th of June 2021 at 9pm BST</li>
                    <li>Apply to Coin Market Cap, Coin Gecko, CoinHunt, BlockFolio and 4Chan*</li>
                    <li>Implementing a substantial marketing campaign to raise brand awareness and attract audiences outside of the cryptocurrency world</li>
                    <li>Bringing some of the biggest names in the sporting industry together and work on securing partnerships with them and their chosen charities</li>
                    <li>Arranging initial audit by Certik</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Q3 2021"
                contentStyle={{ background: 'linear-gradient(to right bottom, #466CB3, #ddddff)', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(128,128,128)' }}
                iconStyle={{ background: 'linear-gradient(to right bottom, #466CB3, #ddddff)', color: '#fff' }}

            >
                <h3 className="vertical-timeline-element-title">Q3 2021</h3>
                <ul>
                    <li>Applying for further exchanges making it easier for more people to jump headfirst into the echo chamber of Sportemon-Go</li>
                    <li>Setting up our NFT marketplace for all our users and investors to start engaging in the fun. Not only will you get the NFT that you desire but also receive a like for like item of clothing matching your purchased NFT</li>
                    <li>Continued AMA with the Sportemon-Go team</li>
                    <li>Initiating a full comprehensive audit by Certik</li>
                    <li>Launching our Sportemon-Go Trading Platform application on iOS and Android devices</li>
                    <li>Continuing charity donations and partnerships with the biggest names within the sporting industry</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Q4 2021"
                contentStyle={{ background: 'linear-gradient(to right bottom, #466CB3, #ddddff)', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(128,128,128)' }}
                iconStyle={{ background: 'linear-gradient(to right bottom, #466CB3, #ddddff)', color: '#fff' }}

            >
                <h3 className="vertical-timeline-element-title">Q4 2021</h3>
                <ul>
                    <li>Ongoing app development and launching additional features on the Sportemon-Go platform</li>
                    <li>Expanding our online clothing store making our merchandise available for physical purchase in stadiums worldwide</li>
                    <li>Organising charity events and NFT Auction collaborations on popular platforms like WAX and ENJIN</li>
                    <li>Hosting events at stadiums worldwide to bring exposure to the brand and platform</li>
                    <li>Announcing major partnerships</li>
                    <li>Keeping our community engaged through spontaneous announcements</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022"
                contentStyle={{ background: 'linear-gradient(to right bottom, #466CB3, #ddddff)', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(128,128,128)' }}
                iconStyle={{ background: 'linear-gradient(to right bottom, #466CB3, #ddddff)', color: '#fff' }}

            >
                <h3 className="vertical-timeline-element-title">2022</h3>
                <ul>
                    <li>Preparations for sponsorship of major sporting occasions such as the World Cup and Olympic Games. The platform will be showcased and used to foster a new level of interactivity at the events.</li>
                    <li>Establish further partnerships with global stadiums, incorporating food and beverage purchasing and real-time AR betting functionality.</li>
                </ul>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
};


export default SGORoadMapSection;


