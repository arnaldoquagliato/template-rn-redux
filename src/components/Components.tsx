import styled from 'styled-components';
import { TouchableOpacity, Image } from 'react-native';

const CardNotification = styled(TouchableOpacity)`
  flex-direction: row;
  width: 90%;
  height: 102px;
  backgroundcolor: #fff;
  bordertoprightradius: 40px;
  borderbottomendradius: 40px;
  marginvertical: 10px;
  marginleft: 15px;
`;

const ImageNotificationList = styled(Image)`
  width: 130px;
  height: 100px;
`;

export { CardNotification, ImageNotificationList };
