import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab, Panel } from '@bumaga/tabs';
import './MainTab.scss';
import Candidate from '../../Candidate/Candidate';
import SocialShare from '../../SNS/SocialShare';
import Employer from '../../Employer/Employer';
import EventSend from '../../EventSend/EventSend';

const Text = styled.div`
  padding-top: 1rem;
  height: 300px;
  text-align: left;
`;

const MainTab = () => {
  return (
    <div className="tab-wrap">
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
            <button>SNS홍보</button>
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
    </div>
  );
};

export default MainTab;
