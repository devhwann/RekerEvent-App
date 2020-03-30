import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab, Panel } from '@bumaga/tabs';
import Candidate from '../../Candidate/Candidate';
import SocialShare from '../../SNS/SocialShare';
import Employer from '../../Employer/Employer';
import EventSend from '../../EventSend/EventSend';

const Text = styled.div`
  padding: 1rem 0rem;
`;


const MainTabContent = styled.div`
  button {
    border: 0;
    background: none;
    font-size: 1.6rem;
  //   font-weight: 600;
    width: 50%;
    cursor: pointer;
  //   &:hover {
  //     transition: 1s;
  //     background: $oc-gray-2;
    }
  // } 

  .tab-menu {
    display: flex;
    justify-content: space-around;
  }
}
`;

const MainTab = () => {
  return (
    <MainTabContent>
      <Tabs>
        <div className="tab-menu">
          <Tab>
            <button>근로자</button>
          </Tab>
          <Tab>
            <button>고용주</button>
          </Tab>
        </div>
        <Panel>
          <Text>
            <Candidate/>            
          </Text>
        </Panel>
        <Panel>
        <Text>
          <Employer/>
          </Text>
        </Panel>
      </Tabs>
      <Tabs>
        <div className="tab-menu">
          <Tab>
            <button>사전 등록</button>
          </Tab>
          <Tab>
            <button>SNS</button>
          </Tab>
        </div>
        <Panel>
          <Text>
            <EventSend/>
          </Text>
        </Panel>
        <Panel>
          <Text>
            <SocialShare/>
          </Text>
        </Panel>
      </Tabs>
    </MainTabContent>
  );
};

export default MainTab;
