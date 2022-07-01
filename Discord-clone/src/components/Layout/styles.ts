import styled from 'styled-components';

// SL - server list
// SN - server name 
// CN - chat name
// UL - user list
// CL - channel list
// channel info -> middle area
// UI - user info

export const Grid = styled.div`
  display:grid;
  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows:  48px auto 56px; 
  grid-template-areas:  
                'SL SN CN CN'
                'SL CL CI UL'
                'SL UI CI UL';

  height:100vh;
                 
                
`;

